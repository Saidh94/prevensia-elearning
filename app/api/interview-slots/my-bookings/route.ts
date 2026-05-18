import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

// GET — réservations de l'utilisateur connecté
export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await supabase
    .from("interview_bookings")
    .select(`
      id,
      status,
      zoom_join_url,
      zoom_meeting_id,
      created_at,
      enrollment_id,
      interview_slots(
        date,
        start_time,
        end_time,
        formation_type,
        notes
      )
    `)
    .eq("user_id", user.id)
    .eq("status", "confirmed")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data ?? []);
}

// DELETE — annuler une réservation
export async function DELETE(req: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const bookingId = String(body?.booking_id ?? "").trim();
  if (!bookingId) return NextResponse.json({ error: "booking_id requis" }, { status: 400 });

  // Vérifier que la réservation appartient bien à cet utilisateur
  const { data: booking, error: fetchError } = await supabase
    .from("interview_bookings")
    .select("id, zoom_meeting_id, user_id")
    .eq("id", bookingId)
    .eq("user_id", user.id)
    .single();

  if (fetchError || !booking) {
    return NextResponse.json({ error: "Réservation introuvable" }, { status: 404 });
  }

  const { error } = await supabase
    .from("interview_bookings")
    .update({ status: "cancelled" })
    .eq("id", bookingId);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
