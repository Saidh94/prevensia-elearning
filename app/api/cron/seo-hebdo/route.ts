import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  try {
    const today = new Date().toISOString().split("T")[0];

    // Récupérer les données SEO des 30 derniers jours
    const { data: seoData } = await supabase
      .from("seo_tracking")
      .select("keyword, position, clicks, impressions, ctr, page_url")
      .gte("recorded_at", new Date(Date.now() - 30 * 86400000).toISOString())
      .order("clicks", { ascending: false })
      .limit(50);

    // KPIs SEO de la semaine
    const { data: kpisemaine } = await supabase
      .from("kpi_daily")
      .select("date, gsc_clicks, gsc_impressions, avg_position")
      .gte("date", new Date(Date.now() - 7 * 86400000).toISOString().split("T")[0])
      .order("date", { ascending: false });

    const totalClics = kpisemaine?.reduce((s, k) => s + (k.gsc_clicks ?? 0), 0) ?? 0;
    const totalImpressions = kpisemaine?.reduce((s, k) => s + (k.gsc_impressions ?? 0), 0) ?? 0;

    // Analyse IA
    const apiKey = process.env.ANTHROPIC_API_KEY;
    let rapport = "Rapport SEO indisponible.";

    if (apiKey && seoData?.length) {
      const topMots = seoData
        .slice(0, 15)
        .map((s) => `${s.keyword} (pos ${s.position}, ${s.clicks} clics)`)
        .join(", ");

      const prompt = `Tu es l'expert SEO de PREVENSIA FORMATION (habilitation électrique NF C 18-510, ATEX, SSIAP, SST, Paris).

Données SEO semaine (${today}) :
- Total clics GSC : ${totalClics}
- Total impressions : ${totalImpressions}
- Top mots-clés : ${topMots}

Génère un rapport SEO en 5 points :
1. Performance globale (1 phrase)
2. Top 3 mots-clés à optimiser en priorité
3. 2 sujets d'articles de blog à fort potentiel SEO
4. 1 action technique recommandée
5. Objectif pour la semaine prochaine`;

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 500,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      if (res.ok) {
        const data = await res.json();
        rapport = data?.content?.[0]?.text ?? rapport;
      }
    }

    // Envoyer par email
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "PREVENSIA IA <ia@prevensia-formation.fr>",
          to: ["contact@prevensia-formation.fr"],
          subject: `🔍 Rapport SEO hebdo — semaine du ${today}`,
          html: `
<h2>Rapport SEO Hebdomadaire</h2>
<h3>📊 Chiffres clés de la semaine</h3>
<table border="1" cellpadding="8" style="border-collapse:collapse">
  <tr><td><strong>Clics GSC</strong></td><td>${totalClics}</td></tr>
  <tr><td><strong>Impressions</strong></td><td>${totalImpressions}</td></tr>
  <tr><td><strong>CTR moyen</strong></td><td>${totalClics && totalImpressions ? ((totalClics / totalImpressions) * 100).toFixed(1) : 0}%</td></tr>
</table>

<h3>🤖 Analyse IA</h3>
<div style="background:#f0f4ff;padding:16px;border-radius:8px;white-space:pre-wrap">${rapport}</div>

<p style="color:#888;font-size:12px">— PREVENSIA IA SEO Agent | ${today}</p>
          `,
        }),
      });
    }

    await supabase.from("agent_logs").insert({
      agent_name: "seo-hebdo",
      status: "success",
      output_summary: `Rapport SEO envoyé — ${totalClics} clics cette semaine`,
      metadata: { total_clics: totalClics, total_impressions: totalImpressions },
    });

    return NextResponse.json({ ok: true, date: today, total_clics: totalClics });
  } catch (error) {
    console.error("[seo-hebdo] Erreur:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
