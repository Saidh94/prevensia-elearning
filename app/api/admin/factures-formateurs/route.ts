/**
 * GET /api/admin/factures-formateurs
 * Liste toutes les factures formateurs (admin uniquement)
 */
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

    const { data: profile } = await supabase
      .from("profiles").select("role").eq("id", user.id).single();
    if (profile?.role !== "admin") return NextResponse.json({ error: "Non autorisé" }, { status: 403 });

    const admin = createAdminClient();
    if (!admin) return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });

    const { data, error } = await admin
      .from("factures_formateurs")
      .select(`
        *,
        formateur:formateurs(id, prenom, nom, email),
        session:virtual_sessions(formation, date)
      `)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Erreur" }, { status: 500 });
  }
}
