import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { Resend } from "resend";

export const runtime = "nodejs";

const THEMES_GBP = [
  {
    formation: "ATEX",
    title: "Formation ATEX — Zones explosives",
    cta_text: "Voir la formation",
    cta_url: "https://prevensia-formation.fr/formation-atex",
    prompt: "Rédige un post Google Business Profile de 200-250 mots en français pour PREVENSIA FORMATION sur la formation ATEX (atmosphères explosives). Inclus : pourquoi c'est obligatoire, qui est concerné, et une invitation à demander un devis. Ton professionnel et chaleureux. Termine par 3 hashtags pertinents.",
  },
  {
    formation: "SSIAP1",
    title: "Formation SSIAP1 — Sécurité incendie",
    cta_text: "Découvrir SSIAP1",
    cta_url: "https://prevensia-formation.fr/formation-ssiap1",
    prompt: "Rédige un post Google Business Profile de 200-250 mots en français pour PREVENSIA FORMATION sur la formation SSIAP1 (agent de sécurité incendie). Inclus : débouchés, durée 70h, financement OPCO disponible. Ton engageant. Termine par 3 hashtags.",
  },
  {
    formation: "Habilitation électrique",
    title: "Habilitation électrique B1/B2/BR/BC",
    cta_text: "Demander un devis",
    cta_url: "https://prevensia-formation.fr/formation-habilitation-electrique",
    prompt: "Rédige un post Google Business Profile de 200-250 mots en français pour PREVENSIA FORMATION sur les habilitations électriques (H0B0, BS/BE, B1/B2). Explique l'obligation légale et les risques. Mentionne la démarche qualité de l'organisme (audit Qualiopi en cours). Termine par 3 hashtags.",
  },
  {
    formation: "SST",
    title: "Formation SST — Sauveteur Secouriste du Travail",
    cta_text: "S'inscrire au SST",
    cta_url: "https://prevensia-formation.fr/formation-sst",
    prompt: "Rédige un post Google Business Profile de 200-250 mots en français pour PREVENSIA FORMATION sur la formation SST (Sauveteur Secouriste du Travail). Inclus : obligation légale, 2 jours de formation, recyclage annuel. Ton pratique. Termine par 3 hashtags.",
  },
  {
    formation: "Sprinkler / SSI",
    title: "Exploitation Sprinkler et SSI",
    cta_text: "En savoir plus",
    cta_url: "https://prevensia-formation.fr/formation-exploitation-sprinkler",
    prompt: "Rédige un post Google Business Profile de 200-250 mots en français pour PREVENSIA FORMATION sur les formations Sprinkler et SSI (Systèmes de Sécurité Incendie). Cible les responsables sécurité et facility managers. Termine par 3 hashtags.",
  },
  {
    formation: "Qualiopi & financement OPCO",
    title: "Démarche qualité & financement — PREVENSIA",
    cta_text: "Voir les formations",
    cta_url: "https://prevensia-formation.fr",
    prompt: "Rédige un post Google Business Profile de 200-250 mots en français pour PREVENSIA FORMATION sur la démarche qualité et le financement OPCO possible (selon critères du financeur) des formations sécurité. Explique comment un employeur peut faire financer la formation de ses salariés via son OPCO. Mentionne le dispositif FNE-Formation. Termine par 3 hashtags.",
  },
];

function getThemeForWeek(): typeof THEMES_GBP[0] {
  const weekIndex = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)) % THEMES_GBP.length;
  return THEMES_GBP[weekIndex];
}

async function getGBPAccessToken(): Promise<string> {
  const refreshToken = process.env.GOOGLE_GBP_REFRESH_TOKEN;
  const clientId = process.env.GSC_CLIENT_ID;
  const clientSecret = process.env.GSC_CLIENT_SECRET;

  if (!refreshToken || !clientId || !clientSecret) {
    throw new Error("Variables GBP manquantes (GOOGLE_GBP_REFRESH_TOKEN / GSC_CLIENT_ID / GSC_CLIENT_SECRET)");
  }

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });

  const data = await res.json();
  if (!data.access_token) throw new Error(`Échec refresh GBP: ${JSON.stringify(data)}`);
  return data.access_token;
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
      max_tokens: 600,
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
  const startTime = Date.now();
  const theme = getThemeForWeek();

  try {
    const locationName = process.env.GBP_LOCATION_NAME;
    if (!locationName) {
      throw new Error("GBP_LOCATION_NAME manquante — connecte d'abord Google Business Profile via /api/auth/gbp");
    }

    // 1. Générer le contenu
    const content = await generateContent(theme.prompt);
    if (!content) throw new Error("Claude n'a pas généré de contenu");

    // 2. Obtenir le token GBP
    const accessToken = await getGBPAccessToken();

    // 3. Publier sur GBP
    const postBody = {
      languageCode: "fr",
      summary: content,
      callToAction: {
        actionType: "LEARN_MORE",
        url: theme.cta_url,
      },
      topicType: "STANDARD",
    };

    const gbpRes = await fetch(
      `https://mybusiness.googleapis.com/v4/${locationName}/localPosts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      }
    );

    const gbpData = await gbpRes.json();
    if (!gbpRes.ok) throw new Error(`GBP API error: ${JSON.stringify(gbpData)}`);

    const postName = gbpData.name ?? "unknown";
    const duration = Date.now() - startTime;

    // 4. Log en base
    if (supabase) {
      await supabase.from("agent_logs").insert({
        agent_name: "gbp-post",
        status: "success",
        details: {
          theme: theme.formation,
          post_name: postName,
          content_length: content.length,
          duration_ms: duration,
        },
        executed_at: new Date().toISOString(),
      });
    }

    // 5. Notification email
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "PREVENSIA IA <contact@prevensia-formation.fr>",
        to: ["contact@prevensia-formation.fr"],
        subject: `✅ GBP Post publié — ${theme.formation}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#1e293b">✅ Post Google Business Profile publié</h2>
            <p><strong>Thème :</strong> ${theme.formation}</p>
            <p><strong>ID du post :</strong> <code>${postName}</code></p>
            <h3 style="color:#475569">Contenu publié :</h3>
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px;white-space:pre-wrap;font-size:14px">${content}</div>
            <p style="margin-top:16px"><a href="https://business.google.com" style="color:#1e293b">Voir sur Google Business →</a></p>
          </div>
        `,
      });
    }

    return NextResponse.json({
      ok: true,
      theme: theme.formation,
      post_name: postName,
      content_length: content.length,
      duration_ms: duration,
    });

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);

    if (supabase) {
      await supabase.from("agent_logs").insert({
        agent_name: "gbp-post",
        status: "error",
        details: { error: msg, theme: theme.formation, duration_ms: Date.now() - startTime },
        executed_at: new Date().toISOString(),
      });
    }

    // Email d'erreur
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "PREVENSIA IA <contact@prevensia-formation.fr>",
        to: ["contact@prevensia-formation.fr"],
        subject: "❌ Erreur agent GBP Post",
        html: `<p>Erreur lors du post GBP :</p><pre>${msg}</pre>`,
      });
    }

    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
