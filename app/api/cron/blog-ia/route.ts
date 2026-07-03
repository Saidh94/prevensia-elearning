import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const maxDuration = 60;

// Rotation des thèmes de blog
const THEMES = [
  {
    title: "Habilitation électrique NF C 18-510 : tout ce que l'employeur doit savoir",
    keywords: ["habilitation électrique", "NF C 18-510", "formation employeur", "H0B0"],
    category: "habilitation",
    angle: "Guide complet pour les employeurs sur les obligations légales de l'habilitation électrique NF C 18-510 : qui doit être habilité, quelle formation choisir, sanctions en cas de non-conformité.",
  },
  {
    title: "Formation ATEX : obligations réglementaires et choix de la formation",
    keywords: ["formation ATEX", "atmosphères explosives", "ATEX niveau 1", "ATEX niveau 2"],
    category: "atex",
    angle: "Quelles sont les obligations réglementaires ATEX ? Différences entre ATEX niveau 1, 2 et 3. Comment choisir la bonne formation selon le poste de travail.",
  },
  {
    title: "SSIAP1 en 2026 : tarifs, durée et financement CPF",
    keywords: ["SSIAP1", "formation sécurité incendie", "financement CPF", "agent de sécurité incendie"],
    category: "ssi",
    angle: "Tout savoir sur la formation SSIAP1 en 2026 : durée (70h), tarifs, financement CPF, débouchés et comment s'inscrire chez un organisme certifié Qualiopi.",
  },
  {
    title: "SST Sauveteur Secouriste du Travail : pourquoi former vos salariés",
    keywords: ["SST formation", "sauveteur secouriste du travail", "formation premiers secours entreprise"],
    category: "sst",
    angle: "Obligation légale ou choix stratégique ? Tout sur la formation SST : contenu, durée, recyclage MAC SST, financement et retour sur investissement pour l'entreprise.",
  },
  {
    title: "Formation BS BE Manœuvre : guide pratique pour les non-électriciens",
    keywords: ["formation BS BE manœuvre", "habilitation BS", "habilitation BE", "non-électricien"],
    category: "habilitation",
    angle: "Qui a besoin d'une habilitation BS ou BE Manœuvre ? Différence entre BS et BE, contenu de la formation, durée et modalités e-learning + classe virtuelle.",
  },
  {
    title: "Exploitation sprinkler : formation obligatoire et réglementation",
    keywords: ["formation sprinkler", "exploitation sprinkler", "système extinction automatique"],
    category: "incendie",
    angle: "Qui doit être formé à l'exploitation des systèmes sprinkler ? Réglementation, contenu de la formation d'une journée et organismes habilités à Paris.",
  },
];

function getThemeForWeek(): typeof THEMES[0] {
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  return THEMES[weekNumber % THEMES.length];
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .substring(0, 80);
}

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "ANTHROPIC_API_KEY manquant" }, { status: 500 });
  }

  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  try {
    const theme = getThemeForWeek();
    const slug = generateSlug(theme.title) + "-" + Date.now().toString(36);

    // Vérifier si un article avec ce slug existe déjà
    const { data: existing } = await supabase
      .from("blog_posts")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

    if (existing) {
      return NextResponse.json({ ok: true, message: "Article déjà généré cette semaine", slug });
    }

    // Générer l'article avec Claude Sonnet
    const prompt = `Tu es expert SEO et rédacteur pour PREVENSIA FORMATION (organisme Qualiopi, Paris 11e, formations sécurité).

Rédige un article de blog SEO de 800-1000 mots sur ce sujet :
Titre : "${theme.title}"
Angle : ${theme.angle}
Mots-clés cibles : ${theme.keywords.join(", ")}

Structure requise (en Markdown) :
# ${theme.title}
## Introduction (2-3 phrases accroche)
## [Section 1 — point clé]
## [Section 2 — point clé]
## [Section 3 — point clé]
## Conclusion avec appel à l'action vers PREVENSIA FORMATION

Règles :
- Ton professionnel mais accessible
- Mentionner l'éligibilité CPF là où c'est pertinent
- Mentionner la certification Qualiopi de PREVENSIA FORMATION
- Terminer par un CTA : "Demandez un devis sur prevensia-formation.fr"
- Ne pas inventer de chiffres ou statistiques non vérifiables
- Écrire en français`;

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 2000,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Anthropic API error" }, { status: 500 });
    }

    const aiData = await res.json();
    const content = aiData?.content?.[0]?.text ?? "";

    if (!content) {
      return NextResponse.json({ error: "Contenu vide généré par l'IA" }, { status: 500 });
    }

    // Générer meta description
    const metaPrompt = `En une phrase de 150 caractères maximum, génère une meta description SEO pour cet article de blog PREVENSIA FORMATION sur : "${theme.title}". Inclure un mot-clé principal.`;
    const metaRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 200,
        messages: [{ role: "user", content: metaPrompt }],
      }),
    });

    const metaData = await metaRes.json();
    const metaDescription = metaData?.content?.[0]?.text?.substring(0, 160) ?? "";

    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    // Insérer dans blog_posts (statut "review" — validation admin requise)
    const { data: post, error } = await supabase.from("blog_posts").insert({
      title: theme.title,
      slug,
      meta_description: metaDescription,
      content_mdx: content,
      status: "review",
      target_keywords: theme.keywords,
      word_count: wordCount,
      reading_time_minutes: readingTime,
      formation_category: theme.category,
      ai_generated: true,
      author: "IA PREVENSIA",
    }).select().single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    await supabase.from("agent_logs").insert({
      agent_name: "blog",
      status: "success",
      output_summary: `Article généré : "${theme.title}" (${wordCount} mots) — en attente de validation`,
      metadata: { slug, word_count: wordCount, category: theme.category },
    });

    // Notifier par email
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
          subject: `✍️ Nouvel article blog à valider — "${theme.title}"`,
          html: `
<h2>Article blog généré par l'IA</h2>
<p><strong>Titre :</strong> ${theme.title}</p>
<p><strong>Mots-clés :</strong> ${theme.keywords.join(", ")}</p>
<p><strong>Mots :</strong> ${wordCount} (~${readingTime} min de lecture)</p>
<p><strong>Statut :</strong> En attente de validation</p>
<hr />
<p>→ <a href="https://prevensia-formation.fr/admin/agents">Voir dans l'admin</a></p>
<p style="color:#888;font-size:12px">L'article est en statut "review" — il ne sera pas publié sans validation manuelle.</p>
          `,
        }),
      });
    }

    return NextResponse.json({
      ok: true,
      slug,
      title: theme.title,
      word_count: wordCount,
      status: "review",
    });
  } catch (error) {
    console.error("[blog-ia] Erreur:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
