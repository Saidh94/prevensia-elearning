import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://prevensia-formation.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Pages formations principales (catalogue actif)
  const formationPages = [
    "formation-h0b0",
    "formation-atex",
    "formation-coordinateur-ssi",
    "formation-ssi",
    "formation-sprinkler",
  ];

  const formationEntries: MetadataRoute.Sitemap = formationPages.map(
    (slug) => ({
      url: `${siteUrl}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    })
  );

  // (Pas de landing pages SEO complémentaires actives pour le moment)

  // Articles de blog
  const blogArticles = [
    "comment-choisir-son-habilitation-electrique",
    "duree-validite-habilitation-electrique",
    "habilitation-electrique-sous-traitants",
    "difference-nf-c-18-510-ute-c-18-510",
    // "formation-sst-entreprise-obligations" → noindex, hors sitemap
    // "formation-ssiap-securite-incendie" → noindex, hors sitemap
    "obligations-securite-incendie-entreprise",
  ];

  const blogEntries: MetadataRoute.Sitemap = blogArticles.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    // Accueil
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Formations principales
    ...formationEntries,
    // E-learning & planning
    {
      url: `${siteUrl}/elearning`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/planning`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Réservation entretien
    // Devis & inscription
    {
      url: `${siteUrl}/demande-devis`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/reservation-formation`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/inscription`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Blog
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    ...blogEntries,
    // À propos
    {
      url: `${siteUrl}/qui-sommes-nous`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    // Pages qualité / légales indexables
    {
      url: `${siteUrl}/qualite`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/handicap-accessibilite`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
    {
      url: `${siteUrl}/reclamation`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${siteUrl}/cgv`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${siteUrl}/reglement-interieur`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    // Pages légales noindex — exclues du sitemap
  ];
}
