import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/require-admin";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

// PATCH — modifier un formateur
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;
  const { id } = await params;
  const body = await request.json();
  const { prenom, nom, email, phone, specialites, bio, actif } = body;

  const admin = createAdminClient();
  if (!admin) return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });

  const updates: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (prenom     !== undefined) updates.prenom     = prenom;
  if (nom        !== undefined) updates.nom        = nom;
  if (email      !== undefined) updates.email      = email;
  if (phone      !== undefined) updates.phone      = phone || null;
  if (specialites !== undefined) updates.specialites = specialites;
  if (bio        !== undefined) updates.bio        = bio || null;
  if (actif      !== undefined) updates.actif      = actif;

  const { data, error } = await admin
    .from("formateurs")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// DELETE — désactiver (soft delete)
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;
  const { id } = await params;
  const admin = createAdminClient();
  if (!admin) return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });

  const { error } = await admin
    .from("formateurs")
    .update({ actif: false, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
