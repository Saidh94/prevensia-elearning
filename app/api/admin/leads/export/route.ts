import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin } from "@/lib/auth/require-admin";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;
  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");

  let query = supabase
    .from("leads")
    .select("first_name, last_name, email, phone, company, formation_interest, source, status, score, created_at, next_followup_at, notes")
    .order("created_at", { ascending: false });

  if (status) query = query.eq("status", status);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const leads = data ?? [];

  const headers = ["Prénom", "Nom", "Email", "Téléphone", "Entreprise", "Formation", "Source", "Statut", "Score", "Créé le", "Prochaine relance", "Notes"];

  const rows = leads.map((l) => [
    l.first_name ?? "",
    l.last_name ?? "",
    l.email,
    l.phone ?? "",
    l.company ?? "",
    l.formation_interest ?? "",
    l.source ?? "",
    l.status ?? "",
    l.score ?? 0,
    new Date(l.created_at).toLocaleDateString("fr-FR"),
    l.next_followup_at ? new Date(l.next_followup_at).toLocaleDateString("fr-FR") : "",
    (l.notes ?? "").replace(/"/g, '""'),
  ].map((v) => `"${v}"`).join(";"));

  const csv = [headers.join(";"), ...rows].join("\n");
  const bom = "﻿"; // UTF-8 BOM pour Excel

  return new NextResponse(bom + csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="leads-prevensia-${new Date().toISOString().split("T")[0]}.csv"`,
    },
  });
}
