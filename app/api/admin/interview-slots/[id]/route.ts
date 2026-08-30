import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/require-admin";
import { deleteZoomMeeting } from "@/lib/zoom";

// DELETE — supprimer un créneau (et annuler les réunions Zoom associées)
export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const supabase = await createClient();
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;
  const { userId } = auth;


  // Récupérer les réservations pour supprimer les réunions Zoom
  const { data: bookings } = await supabase
    .from("interview_bookings")
    .select("zoom_meeting_id")
    .eq("slot_id", id)
    .eq("status", "confirmed");

  // Supprimer les réunions Zoom (best-effort)
  if (bookings) {
    for (const b of bookings) {
      if (b.zoom_meeting_id) {
        try {
          await deleteZoomMeeting(b.zoom_meeting_id);
        } catch {
          // non-bloquant
        }
      }
    }
  }

  // Supprimer le créneau (cascade supprime les bookings)
  const { error } = await supabase.from("interview_slots").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}

// PATCH — modifier notes ou max_participants
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const supabase = await createClient();
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;
  const { userId } = auth;


  const body = await req.json();
  const allowed = ["notes", "max_participants"] as const;
  const updates: Record<string, unknown> = {};
  for (const key of allowed) {
    if (key in body) updates[key] = body[key];
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "Rien à mettre à jour" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("interview_slots")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
