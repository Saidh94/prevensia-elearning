import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demande de devis formation | PREVENSIA FORMATION",
  description:
    "Obtenez rapidement un devis personnalisé pour votre formation intra-entreprise : habilitation électrique, ATEX, SSI, sécurité incendie, SST. Réponse sous 24 h.",
  alternates: {
    canonical: "https://prevensia-formation.fr/demande-devis",
  },
};

export default function DemandeDevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
