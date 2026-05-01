import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://prevensia-formation.fr";

/**
 * Sitemap.xml — généré dynamiquement par Next.js sur /sitemap.xml.
 *
 * Règles de priorité :
 *  - Homepage : 1.0
 *  - Pages formation (vitrines commerciales) : 0.9
 *  - Pages d'action (devis, planning, e-learning catalogue) : 0.8
 *  - Pages transactionnelles (inscription, réservation) : 0.7
 *  - Pages techniques (admin, connexion) : exclues du sitemap public
 */
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
    // Volontairement exclues : /connexion, /admin/*, /dashboard,
    // /modules/*, /paiement/*, /api/* (transactionnel ou privé).
  ];
}