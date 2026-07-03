import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { Resend } from "resend";
import { randomUUID } from "crypto";

export const runtime = "nodejs";

const THEMES_LINKEDIN = [
  {
    formation: "ATEX",
    prompt: `Rédige un post LinkedIn professionnel en français pour la page PREVENSIA FORMATION sur le thème de la formation ATEX (zones explosives ATEX Niveaux 1, 2 et 3).
Format : accroche forte (1 ligne), corps du post (3-4 paragraphes courts), call-to-action vers https://prevensia-formation.fr/formation-atex, 5 hashtags pertinents.
Ton : expert, direct, professionnel. Environ 250-300 mots. Parle des obligations légales, des métiers concernés (pétrochimie, pharma, agro-alimentaire). Commence par un emoji accrocheur.`,
  },
  {
    formation: "SSIAP1",
    prompt: `Rédige un post LinkedIn professionnel en français pour PREVENSIA FORMATION sur la formation SSIAP1.
Accroche forte, corps 3-4 paragraphes courts, CTA vers https://prevensia-formation.fr/formation-ssiap1, 5 hashtags.
Évoque : 70h de formation, éligibilité CPF, les métiers de la sécurité incendie, les débouchés. Commence par un emoji. ~250-300 mots.`,
  },
  {
    formation: "Habilitation électrique",
    prompt: `Rédige un post LinkedIn professionnel en français pour PREVENSIA FORMATION sur les habilitations électriques (H0B0, BS/BE, B1/B2/BR/BC).
Accroche forte, corps 3-4 paragraphes, CTA vers https://prevensia-formation.fr/formation-habilitation-electrique, 5 hashtags.
Parle des accidents électriques, de l'obligation légale, de l'e-learning Qualiopi. Commence par un emoji. ~250-300 mots.`,
  },
  {
    formation: "SST",
    prompt: `Rédige un post LinkedIn professionnel en français pour PREVENSIA FORMATION sur la formation SST (Sauveteur Secouriste du Travail).
Accroche forte, corps 3-4 paragraphes, CTA vers https://prevensia-formation.fr/formation-sst, 5 hashtags.
Parle de l'obligation d'avoir des SST en entreprise, 2 jours de formation, recyclage 24 mois. Commence par un emoji. ~250-300 mots.`,
  },
  {
    formation: "CPF et Qualiopi",
    prompt: `Rédige un post LinkedIn professionnel en français pour PREVENSIA FORMATION sur la certification Qualiopi et le financement CPF des formations sécurité.
Accroche forte, corps 3-4 paragraphes, CTA vers https://prevensia-formation.fr, 5 hashtags.
Explique comment un RH ou un responsable formation peut faire financer les formations sécurité obligatoires. Commence par un emoji. ~250-300 mots.`,
  },
  {
    formation: "Sprinkler & SSI",
    prompt: `Rédige un post LinkedIn professionnel en français pour PREVENSIA FORMATION sur les formations exploitation Sprinkler et SSI.
Accroche forte, corps 3-4 paragraphes, CTA vers https://prevensia-formation.fr/formation-exploitation-sprinkler, 5 hashtags.
Cible les responsables sécurité ERP, facility managers, directeurs techniques. Commence par un emoji. ~250-300 mots.`,
  },
];

function getThemeForWeek(slot: number): typeof THEMES_LINKEDIN[0] {
  // slot 1 = lundi, slot 2 = jeudi (thème décalé de 3 positions)
  const weekIndex = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  const offset = slot === 2 ? 3 : 0;
  return THEMES_LINKEDIN[(weekIndex + offset) % THEMES_LINKEDIN.length];
}

async function generateContent(prompt: string): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY manquante");

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 700,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await res.json();
  return data.content?.[0]?.text ?? "";
}

export async function GET(request: Request) {
  // Auth cron
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();
  const { searchParams } = new URL(request.url);
  const slot = parseInt(searchParams.get("slot") ?? "1");
  const theme = getThemeForWeek(slot);

  try {
    // 1. Générer le contenu
    const content = await generateContent(theme.prompt);
    if (!content) throw new Error("Claude n'a pas généré de contenu");

    // 2. Générer un token unique d'approbation
    const token = randomUUID();
    const baseUrl = "https://prevensia-formation.fr";
    const approvalUrl = `${baseUrl}/api/admin/linkedin-publish?token=${token}`;
    const rejectUrl = `${baseUrl}/api/admin/linkedin-reject?token=${token}`;

    // 3. Sauvegarder en attente de validation dans Supabase
    if (supabase) {
      await supabase.from("agent_logs").insert({
        agent_name: "linkedin-post",
        status: "pending_approval",
        output_summary: `Post en attente — thème : ${theme.formation} (slot ${slot})`,
        metadata: {
          content,
          theme: theme.formation,
          slot,
          token,
          created_at: new Date().toISOString(),
        },
      });
    }

    // 4. Email de validation à Said — avec aperçu complet + boutons
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      const contentEscaped = content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      await resend.emails.send({
        from: "PREVENSIA IA <ia@prevensia-formation.fr>",
        to: ["contact@prevensia-formation.fr"],
        subject: `📋 Post LinkedIn à valider — ${theme.formation}`,
        html: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1e293b">
  <h2 style="color:#1e293b;margin-bottom:4px">📋 Post LinkedIn à valider</h2>
  <p style="color:#64748b;margin-top:0">Thème : <strong>${theme.formation}</strong> · Slot ${slot}</p>

  <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0"/>

  <h3 style="color:#475569;margin-bottom:8px;font-size:14px;text-transform:uppercase;letter-spacing:.5px">Aperçu du post :</h3>
  <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:20px;white-space:pre-wrap;font-size:14px;line-height:1.7;color:#1e293b">${contentEscaped}</div>

  <div style="margin-top:28px;text-align:center">
    <a href="${approvalUrl}"
       style="background:#0a66c2;color:#fff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:bold;display:inline-block;margin-right:12px">
      ✅ PUBLIER SUR LINKEDIN
    </a>
    <a href="${rejectUrl}"
       style="background:#f1f5f9;color:#475569;padding:14px 24px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:bold;display:inline-block;border:1px solid #cbd5e1">
      ❌ Rejeter
    </a>
  </div>

  <p style="margin-top:20px;font-size:12px;color:#94a3b8;text-align:center">
    Ce post sera archivé automatiquement dans 7 jours si vous ne le validez pas.
  </p>
</div>`,
      });
    }

    return NextResponse.json({
      ok: true,
      theme: theme.formation,
      status: "pending_approval",
      message: "Post généré — email de validation envoyé à contact@prevensia-formation.fr",
    });

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);

    if (supabase) {
      await supabase.from("agent_logs").insert({
        agent_name: "linkedin-post",
        status: "error",
        output_summary: `Erreur génération post ${theme.formation}`,
        metadata: { error: msg, theme: theme.formation, slot },
      });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "PREVENSIA IA <ia@prevensia-formation.fr>",
        to: ["contact@prevensia-formation.fr"],
        subject: "❌ Erreur agent LinkedIn Post",
        html: `<p>Erreur lors de la génération du post LinkedIn :</p><pre>${msg}</pre>`,
      });
    }

    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
