import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demande de devis — PREVENSIA FORMATION",
  description:
    "Sélectionnez vos formations, renseignez vos informations et recevez votre devis personnalisé sous 24h ouvrées.",
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
