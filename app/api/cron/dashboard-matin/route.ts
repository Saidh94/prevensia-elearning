import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function GET(req: Request) {
  // Sécurité : vérifier que c'est bien Vercel qui appelle
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  try {
    const today = new Date().toISOString().split("T")[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

    // KPIs d'hier
    const { data: kpiHier } = await supabase
      .from("kpi_daily")
      .select("*")
      .eq("date", yesterday)
      .single();

    // Leads en attente de relance
    const { data: leadsARelancer } = await supabase
      .from("leads")
      .select("first_name, last_name, email, formation_interest, created_at")
      .eq("status", "new")
      .order("created_at", { ascending: false })
      .limit(10);

    // Leads total du mois
    const debutMois = new Date();
    debutMois.setDate(1);
    const { count: leadsMois } = await supabase
      .from("leads")
      .select("*", { count: "exact", head: true })
      .gte("created_at", debutMois.toISOString());

    // Générer l'analyse IA avec Claude
    const apiKey = process.env.ANTHROPIC_API_KEY;
    let analyseIA = "Analyse IA indisponible.";

    if (apiKey) {
      const prompt = `Tu es le directeur opérationnel de PREVENSIA FORMATION.
Voici les données d'hier (${yesterday}) :
- Nouveaux leads : ${kpiHier?.new_leads ?? 0}
- Nouvelles inscriptions : ${kpiHier?.new_enrollments ?? 0}
- Demandes de devis : ${kpiHier?.new_devis_requests ?? 0}
- Revenus Stripe : ${kpiHier?.revenue_stripe ?? 0}€ HT
- Clics GSC : ${kpiHier?.gsc_clicks ?? 0}
- Leads total ce mois : ${leadsMois ?? 0}
- Leads à relancer : ${leadsARelancer?.length ?? 0}

En 3 phrases maximum : analyse la situation, identifie le point le plus urgent et donne UNE action prioritaire pour aujourd'hui.`;

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 200,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      if (res.ok) {
        const data = await res.json();
        analyseIA = data?.content?.[0]?.text ?? analyseIA;
      }
    }

    // Envoyer le rapport par email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const leadsListHtml = leadsARelancer?.length
        ? leadsARelancer
            .map(
              (l) =>
                `<li>${l.first_name ?? ""} ${l.last_name ?? ""} — ${l.email} — ${l.formation_interest ?? "N/A"}</li>`
            )
            .join("")
        : "<li>Aucun lead en attente</li>";

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "PREVENSIA IA <ia@prevensia-formation.fr>",
          to: ["contact@prevensia-formation.fr"],
          subject: `☀️ Dashboard matin — ${today}`,
          html: `
<h2>Bonjour Said 👋</h2>
<h3>📊 Résultats d'hier (${yesterday})</h3>
<table border="1" cellpadding="8" style="border-collapse:collapse">
  <tr><td><strong>Nouveaux leads</strong></td><td>${kpiHier?.new_leads ?? 0}</td></tr>
  <tr><td><strong>Inscriptions</strong></td><td>${kpiHier?.new_enrollments ?? 0}</td></tr>
  <tr><td><strong>Demandes devis</strong></td><td>${kpiHier?.new_devis_requests ?? 0}</td></tr>
  <tr><td><strong>Revenus Stripe</strong></td><td>${kpiHier?.revenue_stripe ?? 0}€ HT</td></tr>
  <tr><td><strong>Clics GSC</strong></td><td>${kpiHier?.gsc_clicks ?? 0}</td></tr>
</table>

<h3>🎯 Analyse IA du jour</h3>
<p style="background:#f0f4ff;padding:12px;border-radius:8px">${analyseIA}</p>

<h3>👥 Leads à relancer (${leadsARelancer?.length ?? 0})</h3>
<ul>${leadsListHtml}</ul>

<p style="color:#888;font-size:12px">— PREVENSIA IA Dashboard | ${today}</p>
          `,
        }),
      });
    }

    // Logger dans agent_logs
    await supabase.from("agent_logs").insert({
      agent_name: "dashboard-matin",
      status: "success",
      output_summary: `Dashboard envoyé pour ${today}`,
      metadata: { leads_a_relancer: leadsARelancer?.length ?? 0, kpi: kpiHier },
    });

    return NextResponse.json({
      ok: true,
      date: today,
      leads_a_relancer: leadsARelancer?.length ?? 0,
      analyse: analyseIA,
    });
  } catch (error) {
    console.error("[dashboard-matin] Erreur:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
