import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://prevensia-formation.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

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

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...formationEntries,
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
