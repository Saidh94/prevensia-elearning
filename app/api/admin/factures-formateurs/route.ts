/**
 * GET /api/admin/factures-formateurs
 * Liste toutes les factures formateurs (admin uniquement)
 */
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/require-admin";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

export async function GET() {
  try {
    const supabase = await createClient();
    const auth = await requireAdmin();
    if ("error" in auth) return auth.error;
    const { userId } = auth;


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
