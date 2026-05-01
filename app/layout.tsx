import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://prevensia-formation.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "PREVENSIA FORMATION | Habilitation électrique, sécurité incendie, SST",
    template: "%s | PREVENSIA FORMATION",
  },
  description:
    "Organisme de formation Qualiopi : habilitation électrique (H0B0, BS / BE Manœuvre, B1, B2, BR, BC), sécurité incendie, SSI, sprinkler et SST. Présentiel et e-learning.",
  keywords: [
    "habilitation électrique",
    "H0B0",
    "BS BE Manœuvre",
    "B1 B2 BR BC",
    "formation SST",
    "formation sécurité incendie",
    "SSI",
    "sprinkler",
    "Qualiopi",
    "e-learning sécurité",
  ],
  authors: [{ name: "PREVENSIA FORMATION" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: "PREVENSIA FORMATION",
    locale: "fr_FR",
    url: SITE_URL,
    title:
      "PREVENSIA FORMATION | Habilitation électrique, sécurité incendie, SST",
    description:
      "Organisme de formation Qualiopi : habilitation électrique, sécurité incendie, SSI, sprinkler, SST. Présentiel et e-learning.",
    images: [
      {
        url: "/images/logo-prevensia-formation.jpg",
        width: 1200,
        height: 630,
        alt: "PREVENSIA FORMATION — organisme de formation Qualiopi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PREVENSIA FORMATION | Habilitation électrique, sécurité incendie, SST",
    description:
      "Formations sécurité, habilitation électrique et SST en présentiel et e-learning.",
    images: ["/images/logo-prevensia-formation.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PREVENSIA FORMATION",
  legalName: "PREVENSIA FORMATION",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-prevensia-formation.jpg`,
  email: "contact@prevensia-formation.fr",
  telephone: "+33 1 89 62 94 92",
  description:
    "Organisme de formation Qualiopi spécialisé en habilitation électrique, sécurité incendie, SSI, sprinkler et SST.",
  sameAs: ["https://www.linkedin.com/in/prevensia-formation-3450a0385/"],
  address: { "@type": "PostalAddress", addressCountry: "FR" },
  areaServed: { "@type": "Country", name: "France" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
