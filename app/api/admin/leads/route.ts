import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const VALID_STATUSES = ["new", "contacted", "qualified", "converted", "lost"];

export async function GET(req: Request) {
  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");

  let query = supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(200);

  if (status) query = query.eq("status", status);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data ?? []);
}

export async function PATCH(req: Request) {
  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  const body = await req.json();
  const { id, status, notes, next_followup_at } = body;

  if (!id) return NextResponse.json({ error: "id manquant" }, { status: 400 });

  const updates: Record<string, unknown> = {};

  if (status !== undefined) {
    if (!VALID_STATUSES.includes(status)) {
      return NextResponse.json({ error: "Statut invalide" }, { status: 400 });
    }
    updates.status = status;
  }

  if (notes !== undefined) updates.notes = notes;
  if (next_followup_at !== undefined) updates.next_followup_at = next_followup_at;

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "Aucun champ à mettre à jour" }, { status: 400 });
  }

  const { error } = await supabase.from("leads").update(updates).eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
