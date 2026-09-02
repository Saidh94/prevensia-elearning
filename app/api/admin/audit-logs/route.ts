import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin } from "@/lib/auth/require-admin";

export async function GET(req: Request) {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;

  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  const url = new URL(req.url);
  const action = url.searchParams.get("action") ?? "";
  const limit = Math.min(parseInt(url.searchParams.get("limit") ?? "100"), 500);
  const offset = parseInt(url.searchParams.get("offset") ?? "0");

  let query = supabase
    .from("admin_audit_logs")
    .select(`
      id,
      created_at,
      admin_id,
      action,
      target_type,
      target_id,
      metadata
    `)
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (action) query = query.eq("action", action);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Enrichir avec le nom de l'admin
  const adminIds = [...new Set((data ?? []).map((r) => r.admin_id))];
  const adminNames: Record<string, string> = {};
  if (adminIds.length > 0) {
    const { data: profiles } = await supabase
      .from("profiles")
      .select("id, first_name, last_name, email")
      .in("id", adminIds);
    for (const p of profiles ?? []) {
      const name = [p.first_name, p.last_name].filter(Boolean).join(" ").trim() || p.email || p.id;
      adminNames[p.id] = name;
    }
  }

  const enriched = (data ?? []).map((row) => ({
    ...row,
    admin_name: adminNames[row.admin_id] ?? row.admin_id,
  }));

  return NextResponse.json({ logs: enriched, total: enriched.length });
}
