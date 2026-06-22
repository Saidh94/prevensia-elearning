import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  try {
    const now = new Date().toISOString();

    // Leads à relancer aujourd'hui
    const { data: leads } = await supabase
      .from("leads")
      .select("*")
      .lte("next_followup_at", now)
      .eq("status", "new")
      .order("next_followup_at", { ascending: true })
      .limit(20);

    if (!leads?.length) {
      return NextResponse.json({ ok: true, message: "Aucun lead à relancer" });
    }

    // Envoyer un récap email des leads à relancer
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const lignes = leads
        .map(
          (l) =>
            `<tr>
              <td>${l.first_name ?? ""} ${l.last_name ?? ""}</td>
              <td>${l.email}</td>
              <td>${l.phone ?? "-"}</td>
              <td>${l.formation_interest ?? "-"}</td>
              <td>${l.source ?? "-"}</td>
            </tr>`
        )
        .join("");

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "PREVENSIA IA <ia@prevensia-formation.fr>",
          to: ["contact@prevensia-formation.fr"],
          subject: `📞 ${leads.length} lead(s) à relancer aujourd'hui`,
          html: `
<h2>Leads à relancer</h2>
<table border="1" cellpadding="8" style="border-collapse:collapse;width:100%">
  <thead>
    <tr style="background:#f0f4ff">
      <th>Nom</th><th>Email</th><th>Téléphone</th><th>Formation</th><th>Source</th>
    </tr>
  </thead>
  <tbody>${lignes}</tbody>
</table>
<p><a href="https://prevensia-formation.fr/admin/leads">→ Voir tous les leads dans l'admin</a></p>
          `,
        }),
      });
    }

    await supabase.from("agent_logs").insert({
      agent_name: "leads-followup",
      status: "success",
      output_summary: `${leads.length} leads à relancer notifiés`,
    });

    return NextResponse.json({ ok: true, leads_count: leads.length });
  } catch (error) {
    console.error("[leads-followup] Erreur:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
