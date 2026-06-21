import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const N8N_SECRET = process.env.N8N_WEBHOOK_SECRET;

export async function POST(req: Request) {
  // Vérification du secret partagé n8n → Next.js
  const signature = req.headers.get("x-n8n-signature");
  if (!N8N_SECRET || signature !== N8N_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { action?: string; payload?: Record<string, unknown> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { action, payload } = body;
  if (!action || !payload) {
    return NextResponse.json({ error: "Missing action or payload" }, { status: 400 });
  }

  const supabase = createAdminClient();
  if (!supabase) {
    return NextResponse.json({ error: "DB unavailable" }, { status: 500 });
  }

  try {
    switch (action) {
      // ── Blog ───────────────────────────────────────────────────────
      case "publish_blog_post":
        await supabase
          .from("blog_posts")
          .update({ status: "published", published_at: new Date().toISOString() })
          .eq("id", payload.id);
        break;

      case "insert_blog_draft":
        await supabase.from("blog_posts").insert(payload);
        break;

      // ── Leads / CRM ────────────────────────────────────────────────
      case "insert_lead":
        await supabase.from("leads").insert(payload);
        break;

      case "update_lead":
        await supabase
          .from("leads")
          .update(payload)
          .eq("id", payload.id);
        break;

      // ── KPIs ───────────────────────────────────────────────────────
      case "update_kpi":
        await supabase
          .from("kpi_daily")
          .upsert(payload as Record<string, unknown>, { onConflict: "date" });
        break;

      // ── SEO ────────────────────────────────────────────────────────
      case "insert_seo_data":
        if (Array.isArray((payload as { rows?: unknown[] }).rows)) {
          await supabase.from("seo_tracking").insert((payload as { rows: unknown[] }).rows);
        }
        break;

      // ── Réseaux sociaux (LinkedIn + Google Business) ───────────────
      case "queue_social_post":
        await supabase.from("social_queue").insert(payload);
        break;

      case "mark_social_published":
        await supabase
          .from("social_queue")
          .update({ status: "published", published_at: new Date().toISOString() })
          .eq("id", payload.id);
        break;

      // ── Veille réglementaire ───────────────────────────────────────
      case "regulatory_alert":
        await supabase.from("regulatory_watch").insert(payload);
        break;

      // ── Google Business Profile ────────────────────────────────────
      case "gbp_post_published":
        await supabase.from("kpi_daily").upsert(
          {
            date: new Date().toISOString().split("T")[0],
            gbp_posts: 1,
          },
          { onConflict: "date" }
        );
        await supabase.from("social_queue").insert({
          ...payload,
          platform: "google_business",
          status: "published",
          published_at: new Date().toISOString(),
        });
        break;

      default:
        return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
    }
  } catch (err) {
    console.error("[n8n webhook] DB error:", err);
    // Logger l'erreur dans agent_logs
    await supabase.from("agent_logs").insert({
      agent_name: String((payload as { agent_name?: unknown }).agent_name ?? "n8n"),
      status: "error",
      output_summary: action,
      error_message: err instanceof Error ? err.message : String(err),
      metadata: payload,
    });
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }

  // Log de succès
  await supabase.from("agent_logs").insert({
    agent_name: String((payload as { agent_name?: unknown }).agent_name ?? "n8n"),
    status: "success",
    output_summary: action,
    metadata: payload,
  });

  return NextResponse.json({ ok: true, action });
}
