import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planning des formations",
  description:
    "Consultez le calendrier des sessions de formation PREVENSIA : habilitations électriques, ATEX, SSI, sécurité incendie, SST. Choisissez votre date et réservez votre place.",
  alternates: {
    canonical: "https://prevensia-formation.fr/planning",
  },
};

export default function PlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
