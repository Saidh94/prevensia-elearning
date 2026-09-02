import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const maxDuration = 60;

// Generate qualification email via Claude Haiku
async function genererEmailQualification(lead: {
  first_name?: string;
  last_name?: string;
  formation_interest?: string;
  email: string;
}): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return "";

  const nom = lead.last_name ?? "";
  const prenom = lead.first_name ?? "";
  const formation = lead.formation_interest ?? "une formation securite incendie";

  const prompt = [
    "Tu es Said Hachiba, directeur de PREVENSIA FORMATION (organisme Qualiopi, securite incendie, Paris).",
    "Tu rediges un email de premier contact commercial, naturel et humain, pour qualifier un prospect.",
    "",
    `Prenom : ${prenom || "inconnu"} / Nom : ${nom || "inconnu"} / Formation : ${formation}`,
    "",
    "REGLES :",
    "1. Determine la civilite (M. ou Mme) selon le prenom. Si ambigu, utilise 'Madame, Monsieur'.",
    "2. Commence par 'Bonjour M. [Nom],' ou 'Bonjour Mme [Nom],' — jamais par le prenom seul.",
    "3. Ecris comme un humain, pas un robot. Ton direct, chaleureux, sans jargon commercial.",
    "4. Glisse naturellement ces 3 questions dans le texte (pas de liste numerotee) : nombre de participants, dates souhaitees, intra ou inter (nos locaux a Paris).",
    "5. ~120 mots. Termine par une invitation simple a repondre a cet email.",
    "6. Renvoie UNIQUEMENT le corps HTML en balises <p>.",
  ].join("\n");

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 400,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await res.json();
  return data?.content?.[0]?.text ?? "";
}

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  try {
    const now = new Date().toISOString();

    const { data: leads } = await supabase
      .from("leads")
      .select("*")
      .lte("next_followup_at", now)
      .eq("status", "new")
      .order("next_followup_at", { ascending: true })
      .limit(20);

    if (!leads?.length) {
      return NextResponse.json({ ok: true, message: "Aucun lead a relancer" });
    }

    const resendKey = process.env.RESEND_API_KEY;
    let emailsEnvoyes = 0;

    for (const lead of leads) {
      if (!lead.email || !resendKey) continue;

      const corpsEmail = await genererEmailQualification(lead);
      if (!corpsEmail) continue;

      const formation = lead.formation_interest ?? "formation securite incendie";

      let lienFormation = "https://prevensia-formation.fr";
      const fi = formation.toLowerCase();
      if (fi.includes("sprinkler")) lienFormation = "https://prevensia-formation.fr/formation-sprinkler";
      else if (fi.includes("ssi")) lienFormation = "https://prevensia-formation.fr/formation-ssi";
      else if (fi.includes("ssiap")) lienFormation = "https://prevensia-formation.fr/formation-ssiap1";
      else if (fi.includes("atex")) lienFormation = "https://prevensia-formation.fr/formation-atex";
      else if (fi.includes("habilitation")) lienFormation = "https://prevensia-formation.fr/formation-habilitation-electrique";
      else if (fi.includes("sst")) lienFormation = "https://prevensia-formation.fr/formation-sst";

      const htmlBody = [
        "<!DOCTYPE html><html lang=\"fr\"><head><meta charset=\"UTF-8\"></head>",
        "<body style=\"font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#1e293b\">",
        corpsEmail,
        "<hr style=\"border:none;border-top:1px solid #e2e8f0;margin:28px 0\" />",
        "<p style=\"font-size:14px;color:#475569\">",
        "<strong>Said Hachiba</strong><br/>Directeur — PREVENSIA FORMATION<br/>",
        `<a href=\"${lienFormation}\" style=\"color:#2563eb\">Voir nos tarifs et programmes</a>`,
        "</p>",
        "<div style=\"background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:16px;margin-top:20px;font-size:13px;color:#1e40af\">",
        "Financement OPCO possible selon les critères de votre financeur.<br/>",
        "<a href=\"https://prevensia-formation.fr/demande-devis\" style=\"color:#2563eb\">Demander un devis sous 48h</a>",
        "</div></body></html>",
      ].join("");

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Said Hachiba — PREVENSIA FORMATION <contact@prevensia-formation.fr>",
          to: [lead.email],
          reply_to: "contact@prevensia-formation.fr",
          subject: `Votre demande de formation — ${formation} | PREVENSIA`,
          html: htmlBody,
        }),
      });

      const j7 = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
      await supabase
        .from("leads")
        .update({ status: "contacted", next_followup_at: j7 })
        .eq("id", lead.id);

      emailsEnvoyes++;
    }

    // Recap admin
    if (resendKey && emailsEnvoyes > 0) {
      const rows = leads.map((l) =>
        `<tr><td>${l.first_name ?? ""} ${l.last_name ?? ""}</td>` +
        `<td>${l.email}</td><td>${l.formation_interest ?? "-"}</td>` +
        `<td style="color:#16a34a">Email envoye</td></tr>`
      ).join("");

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "PREVENSIA IA <ia@prevensia-formation.fr>",
          to: ["contact@prevensia-formation.fr"],
          subject: `${emailsEnvoyes} lead(s) relances automatiquement`,
          html: `<h2>Recap relances auto</h2><p>${emailsEnvoyes} emails envoyes.</p>` +
            `<table><thead><tr><th>Nom</th><th>Email</th><th>Formation</th><th>Action</th></tr></thead>` +
            `<tbody>${rows}</tbody></table>` +
            `<p><a href="https://prevensia-formation.fr/admin/leads">Voir tous les leads</a></p>`,
        }),
      });
    }

    await supabase.from("agent_logs").insert({
      agent_name: "leads-followup",
      status: "success",
      output_summary: `${leads.length} leads traites, ${emailsEnvoyes} emails envoyes`,
      metadata: { emails_envoyes: emailsEnvoyes, leads_total: leads.length },
    });

    return NextResponse.json({ ok: true, leads_count: leads.length, emails_envoyes: emailsEnvoyes });
  } catch (error) {
    console.error("[leads-followup] Erreur:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
