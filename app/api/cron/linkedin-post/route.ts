import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { Resend } from "resend";

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
Évoque : 105h de formation, éligibilité CPF, les métiers de la sécurité incendie, les débouchés. Commence par un emoji. ~250-300 mots.`,
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

function getThemeForWeek(): typeof THEMES_LINKEDIN[0] {
  const weekIndex = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)) % THEMES_LINKEDIN.length;
  return THEMES_LINKEDIN[weekIndex];
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

async function postToLinkedIn(content: string): Promise<string> {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const memberId = process.env.LINKEDIN_MEMBER_ID;

  if (!accessToken || !memberId) {
    throw new Error("LINKEDIN_ACCESS_TOKEN ou LINKEDIN_MEMBER_ID manquant — connecte d'abord LinkedIn via /api/auth/linkedin");
  }

  const body = {
    author: `urn:li:person:${memberId}`,
    lifecycleState: "PUBLISHED",
    specificContent: {
      "com.linkedin.ugc.ShareContent": {
        shareCommentary: {
          text: content,
        },
        shareMediaCategory: "NONE",
      },
    },
    visibility: {
      "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
    },
  };

  const res = await fetch("https://api.linkedin.com/v2/ugcPosts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "X-Restli-Protocol-Version": "2.0.0",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(`LinkedIn API error (${res.status}): ${JSON.stringify(data)}`);

  return data.id ?? "unknown";
}

export async function GET(request: Request) {
  // Auth cron
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();
  const startTime = Date.now();
  const theme = getThemeForWeek();

  try {
    // 1. Générer le contenu
    const content = await generateContent(theme.prompt);
    if (!content) throw new Error("Claude n'a pas généré de contenu");

    // 2. Poster sur LinkedIn
    const postId = await postToLinkedIn(content);
    const duration = Date.now() - startTime;

    // 3. Log en base
    if (supabase) {
      await supabase.from("agent_logs").insert({
        agent_name: "linkedin-post",
        status: "success",
        details: {
          theme: theme.formation,
          post_id: postId,
          content_length: content.length,
          duration_ms: duration,
        },
        executed_at: new Date().toISOString(),
      });
    }

    // 4. Notification email
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "PREVENSIA IA <contact@prevensia-formation.fr>",
        to: ["contact@prevensia-formation.fr"],
        subject: `✅ LinkedIn Post publié — ${theme.formation}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#1e293b">✅ Post LinkedIn publié</h2>
            <p><strong>Thème :</strong> ${theme.formation}</p>
            <p><strong>ID du post :</strong> <code>${postId}</code></p>
            <h3 style="color:#475569">Contenu publié :</h3>
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px;white-space:pre-wrap;font-size:14px">${content}</div>
            <p style="margin-top:16px"><a href="https://www.linkedin.com/company/${process.env.LINKEDIN_ORGANIZATION_ID}" style="color:#0a66c2">Voir sur LinkedIn →</a></p>
          </div>
        `,
      });
    }

    return NextResponse.json({
      ok: true,
      theme: theme.formation,
      post_id: postId,
      content_length: content.length,
      duration_ms: duration,
    });

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);

    if (supabase) {
      await supabase.from("agent_logs").insert({
        agent_name: "linkedin-post",
        status: "error",
        details: { error: msg, theme: theme.formation, duration_ms: Date.now() - startTime },
        executed_at: new Date().toISOString(),
      });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "PREVENSIA IA <contact@prevensia-formation.fr>",
        to: ["contact@prevensia-formation.fr"],
        subject: "❌ Erreur agent LinkedIn Post",
        html: `<p>Erreur lors du post LinkedIn :</p><pre>${msg}</pre>`,
      });
    }

    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
