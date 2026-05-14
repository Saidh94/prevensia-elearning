import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://prevensia-formation.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Pages formations principales
  const formationPages = [
    "formation-habilitation-electrique",
    "formation-sst",
    "formation-securite-incendie",
    "formation-sprinkler",
    "formation-ssi",
  ];

  const formationEntries: MetadataRoute.Sitemap = formationPages.map(
    (slug) => ({
      url: `${siteUrl}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    })
  );

  // Pages SEO habilitation électrique (landing pages spécialisées)
  const habilitationSeoPages = [
    { slug: "formation-h0b0", priority: 0.92 },
    { slug: "formation-bs-be-manoeuvre", priority: 0.92 },
    { slug: "formation-b1-b2-br-bc", priority: 0.92 },
    { slug: "formation-habilitation-electrique-ile-de-france", priority: 0.88 },
    { slug: "formation-habilitation-electrique-paris", priority: 0.85 },
    { slug: "formation-habilitation-electrique-seine-saint-denis", priority: 0.85 },
  ];

  const habilitationSeoEntries: MetadataRoute.Sitemap = habilitationSeoPages.map(
    ({ slug, priority }) => ({
      url: `${siteUrl}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    })
  );

  // Articles de blog
  const blogArticles = [
    "comment-choisir-son-habilitation-electrique",
    "duree-validite-habilitation-electrique",
    "habilitation-electrique-sous-traitants",
    "difference-nf-c-18-510-ute-c-18-510",
    "formation-sst-entreprise-obligations",
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
    // Landing pages habilitation SEO
    ...habilitationSeoEntries,
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
    // Pages légales
    {
      url: `${siteUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteUrl}/politique-confidentialite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
