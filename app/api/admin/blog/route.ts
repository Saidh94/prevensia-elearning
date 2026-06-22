import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

// PATCH /api/admin/blog — Mettre à jour un article (publier, changer statut)
export async function PATCH(req: Request) {
  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  const body = await req.json();
  const { id, ...updates } = body;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const { data, error } = await supabase
    .from("blog_posts")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Si publication → incrémenter kpi_daily
  if (updates.status === "published") {
    const today = new Date().toISOString().split("T")[0];
    await supabase.from("kpi_daily").upsert(
      { date: today, articles_published: 1 },
      { onConflict: "date", ignoreDuplicates: false }
    );
  }

  return NextResponse.json({ post: data });
}

// GET /api/admin/blog — Lister les articles
export async function GET(req: Request) {
  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");

  let query = supabase
    .from("blog_posts")
    .select("id, title, slug, status, word_count, created_at, formation_category, ai_generated")
    .order("created_at", { ascending: false })
    .limit(50);

  if (status) query = query.eq("status", status);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ posts: data });
}
