import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin } from "@/lib/auth/require-admin";

export const runtime = "nodejs";

// GET /api/admin/kpi?days=30
export async function GET(req: Request) {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;
  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  const { searchParams } = new URL(req.url);
  const days = parseInt(searchParams.get("days") ?? "30", 10);

  const { data, error } = await supabase
    .from("kpi_daily")
    .select("*")
    .gte("date", new Date(Date.now() - days * 86400000).toISOString().split("T")[0])
    .order("date", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Calculer les totaux pour le dashboard matin
  const totals = (data ?? []).reduce(
    (acc, row) => ({
      leads: acc.leads + (row.new_leads ?? 0),
      enrollments: acc.enrollments + (row.new_enrollments ?? 0),
      revenue: acc.revenue + (row.revenue_stripe ?? 0) + (row.revenue_manual ?? 0),
      gsc_clicks: acc.gsc_clicks + (row.gsc_clicks ?? 0),
    }),
    { leads: 0, enrollments: 0, revenue: 0, gsc_clicks: 0 }
  );

  return NextResponse.json({ kpis: data, totals, days });
}

// POST /api/admin/kpi — Upsert KPI du jour (utilisé par n8n)
export async function POST(req: Request) {
  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  const body = await req.json();
  if (!body.date) {
    body.date = new Date().toISOString().split("T")[0];
  }

  const { data, error } = await supabase
    .from("kpi_daily")
    .upsert(body, { onConflict: "date" })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ kpi: data });
}
