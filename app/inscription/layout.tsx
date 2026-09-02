import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscription à une formation",
  description:
    "Inscrivez-vous à une formation PREVENSIA : habilitation électrique, ATEX, SSI, sécurité incendie, SST. Démarrez votre parcours e-learning ou présentiel en quelques minutes.",
  robots: { index: false, follow: false },
};

export default function InscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
