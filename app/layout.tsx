import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PREVENSIA FORMATION | Formations sécurité, SST et habilitation",
  description:
    "Organisme de formation en habilitation électrique, sécurité incendie, SSI, sprinkler et SST. Formations en présentiel et e-learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
