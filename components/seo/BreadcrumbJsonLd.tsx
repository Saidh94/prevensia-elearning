/**
 * Injecte un JSON-LD BreadcrumbList (schema.org).
 * Permet à Google d'afficher le fil d'Ariane directement dans les SERP.
 *
 * Usage :
 *   <BreadcrumbJsonLd items={[
 *     { name: "Accueil", url: "/" },
 *     { name: "Habilitation électrique", url: "/formation-habilitation-electrique" },
 *     { name: "Formation H0B0", url: "/formation-h0b0" },
 *   ]} />
 */

const SITE_URL = "https://prevensia-formation.fr";

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
