import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://prevensia-formation.fr";

/**
 * robots.txt — généré dynamiquement par Next.js sur /robots.txt.
 *
 * On autorise tout crawl par défaut, mais on bloque explicitement les
 * zones privées (apprenant, admin, employeur, paiement, API). Cela
 * évite d'exposer des chemins techniques aux moteurs et de polluer
 * l'index Google avec des pages d'authentification.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard",
          "/dashboard/",
          "/employeur/",
          "/modules/",
          "/paiement/",
          "/connexion",
          "/mot-de-passe",
          "/inscription/confirmation",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}