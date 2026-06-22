import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const maxDuration = 60;

async function getAccessToken(): Promise<string | null> {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GSC_CLIENT_ID!,
      client_secret: process.env.GSC_CLIENT_SECRET!,
      refresh_token: process.env.GSC_REFRESH_TOKEN!,
      grant_type: "refresh_token",
    }),
  });
  const data = await res.json();
  return data.access_token ?? null;
}

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.GSC_REFRESH_TOKEN) {
    return NextResponse.json({ error: "GSC_REFRESH_TOKEN manquant — va sur /api/auth/gsc pour autoriser" }, { status: 500 });
  }

  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return NextResponse.json({ error: "Impossible d'obtenir un access token GSC" }, { status: 500 });
    }

    const siteUrl = process.env.GSC_SITE_URL ?? "https://prevensia-formation.fr/";
    const today = new Date().toISOString().split("T")[0];
    const sevenDaysAgo = new Date(Date.now() - 7 * 86400000).toISOString().split("T")[0];

    // Récupérer les données des 7 derniers jours
    const gscRes = await fetch(
      `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startDate: sevenDaysAgo,
          endDate: today,
          dimensions: ["query", "page"],
          rowLimit: 100,
          aggregationType: "byPage",
        }),
      }
    );

    if (!gscRes.ok) {
      const err = await gscRes.text();
      return NextResponse.json({ error: `GSC API error: ${err}` }, { status: 500 });
    }

    const gscData = await gscRes.json();
    const rows = gscData.rows ?? [];

    // Insérer dans seo_tracking
    if (rows.length > 0) {
      const records = rows.map((row: any) => ({
        keyword: row.keys[0],
        page_url: row.keys[1],
        clicks: Math.round(row.clicks),
        impressions: Math.round(row.impressions),
        position: parseFloat(row.position.toFixed(1)),
        ctr: parseFloat(row.ctr.toFixed(4)),
        week_number: getWeekNumber(new Date()),
        year: new Date().getFullYear(),
      }));

      await supabase.from("seo_tracking").insert(records);
    }

    // Totaux pour kpi_daily d'aujourd'hui
    const totalClics = rows.reduce((s: number, r: any) => s + r.clicks, 0);
    const totalImpressions = rows.reduce((s: number, r: any) => s + r.impressions, 0);
    const avgPosition =
      rows.length > 0
        ? parseFloat((rows.reduce((s: number, r: any) => s + r.position, 0) / rows.length).toFixed(1))
        : null;

    await supabase.from("kpi_daily").upsert(
      {
        date: today,
        gsc_clicks: Math.round(totalClics / 7), // moyenne journalière
        gsc_impressions: Math.round(totalImpressions / 7),
        avg_position: avgPosition,
      },
      { onConflict: "date" }
    );

    await supabase.from("agent_logs").insert({
      agent_name: "gsc-sync",
      status: "success",
      output_summary: `${rows.length} mots-clés synchronisés depuis GSC`,
      metadata: { total_clicks: totalClics, total_impressions: totalImpressions, rows: rows.length },
    });

    return NextResponse.json({
      ok: true,
      keywords_synced: rows.length,
      total_clicks: Math.round(totalClics),
      avg_position: avgPosition,
    });
  } catch (error) {
    console.error("[gsc-sync] Erreur:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

function getWeekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}
