import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const maxDuration = 60;

// Mots-clés pertinents pour PREVENSIA FORMATION
const MOTS_CLES = [
  "incendie", "sécurité incendie", "SSI", "sprinkler", "ERP", "extinction automatique",
  "habilitation électrique", "NF C 18-510", "ATEX", "atmosphères explosives",
  "formation professionnelle", "Qualiopi", "OPCO", "CPF", "sauveteur secouriste",
  "SSIAP", "évacuation", "désenfumage", "risque incendie", "IGH",
];

function contientMotsCles(texte: string): boolean {
  const t = texte.toLowerCase();
  return MOTS_CLES.some((m) => t.includes(m.toLowerCase()));
}

function extraireTexte(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim()
    .substring(0, 8000);
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

async function fetchWithTimeout(url: string, timeoutMs = 12000): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "PREVENSIA-VeilleBot/1.0" },
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "ANTHROPIC_API_KEY manquant" }, { status: 500 });

  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  try {
    // ── 1. Collecter les sources accessibles ──────────────────────────────
    const sources: { url: string; titre: string; contenu: string }[] = [];

    // Source A — INRS Actualités
    const inrsActu = await fetchWithTimeout("https://www.inrs.fr/actualites.html");
    if (inrsActu) {
      const texte = extraireTexte(inrsActu);
      if (contientMotsCles(texte)) {
        sources.push({ url: "https://www.inrs.fr/actualites.html", titre: "INRS Actualités", contenu: texte.substring(0, 3000) });
      }
    }

    // Source B — INRS Bulletin juridique (actualité réglementaire mensuelle)
    const inrsBulletin = await fetchWithTimeout("https://www.inrs.fr/header/actualites-juridiques.html");
    if (inrsBulletin) {
      // Extraire l'URL du dernier bulletin
      const matchBulletin = inrsBulletin.match(/href="(\/actualites\/bulletin-juridique-[^"]+)"/i);
      if (matchBulletin) {
        const bulletinUrl = "https://www.inrs.fr" + matchBulletin[1];
        const bulletinPage = await fetchWithTimeout(bulletinUrl);
        if (bulletinPage) {
          const texte = extraireTexte(bulletinPage);
          sources.push({ url: bulletinUrl, titre: "INRS Bulletin juridique", contenu: texte.substring(0, 4000) });
        }
      }
    }

    // Source C — Parlons Sécurité Incendie (blog public de SiteSecurite.com)
    const parlonsSecurite = await fetchWithTimeout("https://www.parlons-securite-incendie.fr");
    if (parlonsSecurite) {
      const texte = extraireTexte(parlonsSecurite);
      sources.push({ url: "https://www.parlons-securite-incendie.fr", titre: "Parlons Sécurité Incendie", contenu: texte.substring(0, 3000) });
    }

    // Source D — SiteSecurite.com page principale (signaux réglementaires publics)
    const siteSecurite = await fetchWithTimeout("https://sitesecurite.com");
    if (siteSecurite) {
      const texte = extraireTexte(siteSecurite);
      if (contientMotsCles(texte)) {
        sources.push({ url: "https://sitesecurite.com", titre: "SiteSecurite.com", contenu: texte.substring(0, 2000) });
      }
    }

    // Source E — service-public.fr (entreprises)
    const servicePub = await fetchWithTimeout("https://entreprendre.service-public.fr/actualites");
    if (servicePub) {
      const texte = extraireTexte(servicePub);
      if (contientMotsCles(texte)) {
        sources.push({ url: "https://entreprendre.service-public.fr/actualites", titre: "Service-Public Entreprises", contenu: texte.substring(0, 2000) });
      }
    }

    if (sources.length === 0) {
      await supabase.from("agent_logs").insert({
        agent_name: "veille-reglementaire",
        status: "info",
        output_summary: "Aucune source accessible cette semaine",
        metadata: {},
      });
      return NextResponse.json({ ok: true, message: "Aucune source accessible" });
    }

    const contenuSources = sources
      .map((s) => `=== ${s.titre} (${s.url}) ===\n${s.contenu}`)
      .join("\n\n");

    // ── 2. Claude analyse et détecte les mises à jour pertinentes ─────────
    const analysePrompt = `Tu es expert en réglementation sécurité incendie, habilitation électrique et formation professionnelle en France.

Voici des extraits de sites officiels (INRS, Service-Public) collectés automatiquement cette semaine :

${contenuSources}

MISSION :
1. Identifie s'il existe UNE nouveauté réglementaire, législative ou normative pertinente pour un organisme de formation spécialisé en : sécurité incendie (SSI, sprinkler, SSIAP, ERP), habilitation électrique (NF C 18-510), ATEX, SST.
2. Si oui : résume le sujet en 2-3 phrases claires.
3. Si non (ou contenu trop générique) : réponds uniquement "RIEN_DE_PERTINENT".

Réponds en JSON :
{
  "pertinent": true/false,
  "sujet": "titre court de la nouveauté",
  "resume": "2-3 phrases expliquant la nouveauté et son impact pour les entreprises",
  "source_url": "URL de la source principale",
  "mots_cles": ["mot1", "mot2", "mot3"]
}`;

    const analyseRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        messages: [{ role: "user", content: analysePrompt }],
      }),
    });

    const analyseData = await analyseRes.json();
    const analyseTexte = analyseData?.content?.[0]?.text ?? "";

    let analyse: { pertinent: boolean; sujet: string; resume: string; source_url: string; mots_cles: string[] };
    try {
      const jsonMatch = analyseTexte.match(/\{[\s\S]*\}/);
      analyse = jsonMatch ? JSON.parse(jsonMatch[0]) : { pertinent: false, sujet: "", resume: "", source_url: "", mots_cles: [] };
    } catch {
      analyse = { pertinent: false, sujet: "", resume: "", source_url: "", mots_cles: [] };
    }

    if (!analyse.pertinent || analyseTexte.includes("RIEN_DE_PERTINENT")) {
      await supabase.from("agent_logs").insert({
        agent_name: "veille-reglementaire",
        status: "info",
        output_summary: "Sources collectées mais aucun contenu pertinent cette semaine",
        metadata: { sources_scannees: sources.map((s) => s.url) },
      });
      return NextResponse.json({ ok: true, message: "Aucune nouveaute pertinente cette semaine" });
    }

    // ── 3. Générer l'article de veille ────────────────────────────────────
    const titreArticle = `Veille réglementaire — ${analyse.sujet}`;
    const slug = generateSlug(titreArticle) + "-" + Date.now().toString(36);

    const articlePrompt = `Tu es rédacteur expert pour PREVENSIA FORMATION (organisme Qualiopi, Paris 11e, formations sécurité incendie et habilitation électrique).

Rédige un article de blog de veille réglementaire de 600-800 mots en Markdown sur :
Sujet : "${analyse.sujet}"
Résumé : ${analyse.resume}
Source : ${analyse.source_url}

Structure :
# ${titreArticle}
## Ce qui change
## Qui est concerné
## Ce que cela implique pour votre formation
## En pratique : ce que PREVENSIA FORMATION recommande
## Source et références

Règles :
- Ton expert mais accessible, écriture journalistique
- Mentionner PREVENSIA FORMATION naturellement (pas de publicité agressive)
- Renvoi vers la formation concernée sur prevensia-formation.fr
- Ne pas inventer de textes de loi ou de références non confirmées
- Préciser la date de cette veille : ${new Date().toLocaleDateString("fr-FR")}`;

    const articleRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1800,
        messages: [{ role: "user", content: articlePrompt }],
      }),
    });

    const articleData = await articleRes.json();
    const contenuArticle = articleData?.content?.[0]?.text ?? "";

    if (!contenuArticle) {
      return NextResponse.json({ error: "Echec generation article" }, { status: 500 });
    }

    const wordCount = contenuArticle.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    // ── 4. Stocker dans blog_posts ────────────────────────────────────────
    const { data: post, error: insertError } = await supabase.from("blog_posts").insert({
      title: titreArticle,
      slug,
      meta_description: analyse.resume.substring(0, 155),
      content_mdx: contenuArticle,
      status: "review",
      target_keywords: analyse.mots_cles,
      word_count: wordCount,
      reading_time_minutes: readingTime,
      formation_category: "veille",
      ai_generated: true,
      author: "IA Veille PREVENSIA",
    }).select().single();

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    await supabase.from("agent_logs").insert({
      agent_name: "veille-reglementaire",
      status: "success",
      output_summary: `Veille : "${analyse.sujet}" — article généré (${wordCount} mots)`,
      metadata: { slug, sources: sources.map((s) => s.url), sujet: analyse.sujet },
    });

    // ── 5. Email Said ─────────────────────────────────────────────────────
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "PREVENSIA IA <ia@prevensia-formation.fr>",
          to: ["contact@prevensia-formation.fr"],
          subject: `Veille reglementaire — ${analyse.sujet}`,
          html: `
<h2 style="color:#1e293b">Nouvelle veille reglementaire detectee</h2>
<p><strong>Sujet :</strong> ${analyse.sujet}</p>
<p><strong>Resume :</strong> ${analyse.resume}</p>
<p><strong>Source :</strong> <a href="${analyse.source_url}">${analyse.source_url}</a></p>
<hr/>
<p><strong>Article genere :</strong> ${wordCount} mots — statut <em>A valider</em></p>
<p>
  <a href="https://prevensia-formation.fr/admin/blog" style="background:#1e293b;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;font-size:14px">
    Voir et valider l'article dans l'admin
  </a>
</p>
<p style="font-size:12px;color:#94a3b8;margin-top:16px">
  Sources scannees : ${sources.map((s) => s.titre).join(", ")}
</p>`,
        }),
      });
    }

    return NextResponse.json({
      ok: true,
      sujet: analyse.sujet,
      slug,
      word_count: wordCount,
      sources_scannees: sources.length,
    });
  } catch (error) {
    console.error("[veille-reglementaire] Erreur:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
