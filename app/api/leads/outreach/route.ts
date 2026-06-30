import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

// POST /api/leads/outreach
// Body: { lead_id: string, preview_only?: boolean }
// preview_only=true → envoie uniquement à Said pour relecture, ne touche pas au lead
// preview_only=false (défaut) → envoie au lead + BCC Said + met à jour le statut
export async function POST(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const leadId = body.lead_id as string | undefined;
  const previewOnly = body.preview_only === true;

  if (!leadId) {
    return NextResponse.json({ error: "lead_id requis" }, { status: 400 });
  }

  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  // Récupérer le lead
  const { data: lead, error } = await supabase
    .from("leads")
    .select("*")
    .eq("id", leadId)
    .single();

  if (error || !lead) {
    return NextResponse.json({ error: "Lead introuvable" }, { status: 404 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!resendKey) return NextResponse.json({ error: "RESEND_API_KEY manquante" }, { status: 500 });
  if (!apiKey) return NextResponse.json({ error: "ANTHROPIC_API_KEY manquante" }, { status: 500 });

  // Générer l'email de qualification via Claude Haiku
  const prenom = lead.first_name ?? "";
  const nom = lead.last_name ?? "";
  const formation = lead.formation_interest ?? "une formation sécurité incendie";
  const societe = lead.company ?? "";

  const prompt = `Tu es Said Hachiba, directeur de PREVENSIA FORMATION (organisme Qualiopi, sécurité incendie, Île-de-France).
Tu rédiges un email commercial de premier contact, naturel et humain, pour qualifier un prospect.

Informations du prospect :
- Prénom : ${prenom || "inconnu"}
- Nom : ${nom || "inconnu"}
- Société : ${societe || "non renseignée"}
- Formation(s) souhaitée(s) : ${formation}

RÈGLES IMPÉRATIVES :
1. Détermine la civilité (M. ou Mme) en fonction du prénom. Si le prénom est ambigu ou absent, utilise "Madame, Monsieur".
2. Commence OBLIGATOIREMENT par "Bonjour M. [Nom]," ou "Bonjour Mme [Nom]," — jamais par le prénom seul.
3. Écris comme un humain qui a vu la demande et réagit naturellement — pas comme un robot. Varie les formulations, évite les listes à puces ou les formules toutes faites.
4. Environ 120 mots, ton direct et chaleureux, sans jargon commercial.
5. Glisse naturellement ces 4 questions dans le corps du texte (pas sous forme de liste numérotée) :
   - Combien de participants sont prévus ?
   - Quelles dates ou période conviendraient ?
   - Intra (sur leur site) ou inter (nos locaux à Paris) ?
   - Si plusieurs formations, dans quel ordre les organiser ?
6. Termine par une phrase d'invitation simple à répondre ou à appeler.
7. Renvoie UNIQUEMENT le corps HTML en balises <p>. Aucun sujet, aucune signature.`;


  const iaRes = await fetch("https://api.anthropic.com/v1/messages", {
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

  const iaData = await iaRes.json();
  const corpsEmail: string = iaData?.content?.[0]?.text ?? "";

  if (!corpsEmail) {
    return NextResponse.json({ error: "Échec génération email IA" }, { status: 500 });
  }

  // Lien formation adapté
  let lienFormation = "https://prevensia-formation.fr";
  const fi = formation.toLowerCase();
  if (fi.includes("sprinkler")) lienFormation = "https://prevensia-formation.fr/formation-sprinkler";
  else if (fi.includes("ssi")) lienFormation = "https://prevensia-formation.fr/formation-ssi";
  else if (fi.includes("ssiap")) lienFormation = "https://prevensia-formation.fr/formation-ssiap1";
  else if (fi.includes("atex")) lienFormation = "https://prevensia-formation.fr/formation-atex";
  else if (fi.includes("habilitation") || fi.includes("électrique")) lienFormation = "https://prevensia-formation.fr/formation-habilitation-electrique";
  else if (fi.includes("sst")) lienFormation = "https://prevensia-formation.fr/formation-sst";

  // Envoi Resend
  // En mode preview : email envoyé uniquement à Said, sujet préfixé [APERCU]
  // En mode normal : email envoyé au lead + BCC Said
  const destinataires = previewOnly
    ? ["contact@prevensia-formation.fr"]
    : [lead.email];
  const sujet = previewOnly
    ? `[APERCU AVANT ENVOI] ${lead.first_name ?? ""} ${lead.last_name ?? ""} — ${formation}`
    : `Votre projet de formation — ${formation} | PREVENSIA FORMATION`;
  const bcc = previewOnly ? [] : ["contact@prevensia-formation.fr"];

  const sendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Said Hachiba — PREVENSIA FORMATION <contact@prevensia-formation.fr>",
      to: destinataires,
      ...(bcc.length > 0 && { bcc }),
      reply_to: "contact@prevensia-formation.fr",
      subject: sujet,
      html: `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1e293b;background:#ffffff">

  <div style="margin-bottom:28px">
    <p style="font-weight:bold;font-size:18px;color:#1e293b;margin:0">PREVENSIA FORMATION</p>
    <p style="font-size:13px;color:#64748b;margin:2px 0 0">Formation sécurité incendie · Qualiopi · Noisy-le-Grand</p>
  </div>

  ${corpsEmail}

  <div style="background:#f0f9ff;border-left:4px solid #2563eb;padding:16px;border-radius:4px;margin:24px 0">
    <p style="margin:0;font-size:14px;color:#1e40af">
      <strong>Nos tarifs formations ${formation.split(",")[0]} :</strong><br/>
      <a href="${lienFormation}#tarifs" style="color:#2563eb">→ Consulter la grille tarifaire et les programmes</a>
    </p>
  </div>

  <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0"/>

  <table style="font-size:14px;color:#475569;width:100%">
    <tr>
      <td style="padding:3px 0">
        <strong style="color:#1e293b">Said Hachiba</strong><br/>
        Directeur — PREVENSIA FORMATION<br/>
        📍 33, avenue Philippe Auguste — 75011 Paris<br/>
        🌐 <a href="https://prevensia-formation.fr" style="color:#2563eb">prevensia-formation.fr</a>
      </td>
    </tr>
  </table>

  <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:14px;margin-top:20px;font-size:13px;color:#166534">
    ✅ <strong>Organisme certifié Qualiopi</strong> — Financement OPCO, CPF et FNE-Formation disponibles.<br/>
    <a href="https://prevensia-formation.fr/demande-devis?type=ssi" style="color:#16a34a;font-size:13px">→ Demander un devis en ligne (réponse sous 48h)</a>
  </div>

  <p style="font-size:11px;color:#94a3b8;margin-top:20px">
    PREVENSIA FORMATION — 93 Noisy-le-Grand · SIRET XXXXXXXXX · Qualiopi N°XXXX<br/>
    Pour ne plus recevoir nos communications : <a href="mailto:contact@prevensia-formation.fr?subject=Désinscription&body=Je souhaite me désinscrire" style="color:#94a3b8">se désinscrire</a>
  </p>
</body>
</html>`,
    }),
  });

  const sendData = await sendRes.json();
  if (!sendRes.ok) {
    return NextResponse.json({ error: "Echec envoi email", details: sendData }, { status: 500 });
  }

  if (previewOnly) {
    // Mode apercu : on ne touche pas au lead
    return NextResponse.json({
      ok: true,
      mode: "preview",
      apercu_envoye_a: "contact@prevensia-formation.fr",
      lead_email: lead.email,
      formation,
      message: "Apercu envoyé sur contact@prevensia-formation.fr — vérifiez votre boîte avant d'envoyer au lead.",
      resend_id: sendData.id ?? null,
    });
  }

  // Mode envoi réel : mise à jour du lead
  const j7 = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
  await supabase
    .from("leads")
    .update({
      status: "contacted",
      next_followup_at: j7,
      notes: `Email qualification envoyé manuellement le ${new Date().toLocaleDateString("fr-FR")} depuis l'admin`,
    })
    .eq("id", leadId);

  await supabase.from("agent_logs").insert({
    agent_name: "leads-outreach",
    status: "success",
    output_summary: `Email qualification envoyé a ${lead.email} (${formation})`,
    metadata: { lead_id: leadId, email: lead.email, formation },
  });

  return NextResponse.json({
    ok: true,
    mode: "sent",
    email_sent_to: lead.email,
    bcc: "contact@prevensia-formation.fr",
    formation,
    resend_id: sendData.id ?? null,
  });
}
