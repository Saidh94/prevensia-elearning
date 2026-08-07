import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "@/components/site/ChatWidget";
import CookieBanner from "@/components/site/CookieBanner";
import BackToTop from "@/components/site/BackToTop";
import { Footer } from "@/components/site/Footer";
import { COMPANY } from "@/lib/company";

const SITE_URL = "https://prevensia-formation.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "PREVENSIA FORMATION | Habilitation électrique, sécurité incendie, SST",
    template: "%s | PREVENSIA FORMATION",
  },
  description:
    "Organisme de formation Qualiopi certifié — habilitation électrique H0B0, BS/BE, B1, B2, BR, BC conforme NF C 18-510. SST, sécurité incendie, SSI, sprinkler. Présentiel, visio et e-learning. Île-de-France et intra-entreprise France entière.",
  keywords: [
    "habilitation électrique",
    "formation H0B0",
    "formation H0B0 H0V",
    "BS BE Manœuvre",
    "B1 B2 BR BC habilitation",
    "formation SST sauveteur secouriste",
    "formation sécurité incendie",
    "SSI système sécurité incendie",
    "formation sprinkler",
    "Qualiopi",
    "e-learning habilitation électrique",
    "formation habilitation électrique Île-de-France",
    "formation habilitation électrique Paris",
    "formation habilitation électrique Seine-Saint-Denis",
    "organisme formation Paris",
    "formation intra-entreprise habilitation électrique",
    "NF C 18-510",
    "recyclage habilitation électrique",
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
  "@type": ["LocalBusiness", "EducationalOrganization"],
  name: "PREVENSIA FORMATION",
  legalName: "PREVENSIA FORMATION",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/logo-prevensia-formation.jpg`,
    width: 400,
    height: 400,
  },
  image: `${SITE_URL}/images/logo-prevensia-formation.jpg`,
  email: "contact@prevensia-formation.fr",
  telephone: "+33189629492",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Carte bancaire, virement, OPCO",
  description:
    "Organisme de formation Qualiopi certifié, spécialisé en habilitation électrique (H0B0, BS/BE, B1, B2, BR, BC), sécurité incendie, SSI, sprinkler et SST. Formations en présentiel, visio et e-learning.",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Certification Qualiopi",
    name: "Qualiopi — Certification qualité des organismes de formation",
  },
  sameAs: [
    "https://www.linkedin.com/in/prevensia-formation-3450a0385/",
    "https://prevensia-formation.fr",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address,
    addressLocality: COMPANY.city,
    postalCode: COMPANY.postalCode,
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8745,
    longitude: 2.3228,
  },
  areaServed: [
    { "@type": "State", name: "Île-de-France" },
    { "@type": "Country", name: "France" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  knowsAbout: [
    "Habilitation électrique NF C 18-510",
    "Formation H0B0 H0V",
    "Formation BS BE Manœuvre",
    "Formation B1 B2 BR BC",
    "Sécurité incendie",
    "SST Sauveteur Secouriste du Travail",
    "SSI Systèmes de Sécurité Incendie",
    "Exploitation sprinkler",
  ],
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
        <Footer />
        <BackToTop />
        <ChatWidget />
        <CookieBanner />
      </body>
    </html>
  );
}
