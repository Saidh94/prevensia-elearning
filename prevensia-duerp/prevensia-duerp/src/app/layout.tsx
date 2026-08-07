import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DUERP & GO — Votre Document Unique en quelques minutes",
  description: "Générez automatiquement votre DUERP, DIUO et registre sécurité incendie. Conforme au Code du travail. BTP, Industrie, Logistique, Tertiaire, ERP.",
  applicationName: "DUERP & GO",
  keywords: ["DUERP", "document unique", "évaluation des risques", "sécurité au travail", "DIUO", "ERP"],
  authors: [{ name: "PREVENSIA GROUPE" }],
  openGraph: {
    title: "DUERP & GO by Groupe Prevensia",
    description: "Votre Document Unique d'Évaluation des Risques Professionnels en quelques minutes.",
    siteName: "DUERP & GO",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
