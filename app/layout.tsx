import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "@/components/site/ChatWidget";
import CookieBanner from "@/components/site/CookieBanner";
import BackToTop from "@/components/site/BackToTop";
import { Footer } from "@/components/site/Footer";
import { BlackFridayBanner } from "@/components/site/BlackFridayBanner";
import { COMPANY } from "@/lib/company";

const SITE_URL = "https://prevensia-formation.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "PREVENSIA FORMATION | H0B0, ATEX, SSI, Sprinkler, Coordination SSI",
    template: "%s | PREVENSIA FORMATION",
  },
  description:
    "Organisme de formation Qualiopi — habilitation électrique H0B0/H0V (NF C 18-510 A2), ATEX NIV 0/1/2, Exploitation SSI, Exploitation Sprinkler, Coordination SSI. Présentiel et e-learning. Paris / Île-de-France.",
  keywords: [
    "habilitation électrique H0B0",
    "formation H0B0 H0V",
    "ATEX NIV 0 sensibilisation",
    "ATEX NIV 1 intervenant",
    "ATEX NIV 2 encadrant",
    "formation ATEX directive 99/92",
    "SSI système sécurité incendie",
    "formation sprinkler",
    "coordinateur SSI CSSI",
    "Qualiopi",
    "e-learning habilitation électrique",
    "formation habilitation électrique Île-de-France",
    "formation habilitation électrique Paris",
    "organisme formation Paris",
    "NF C 18-510",
  ],
  authors: [{ name: "PREVENSIA FORMATION" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: "PREVENSIA FORMATION",
    locale: "fr_FR",
    url: SITE_URL,
    title:
      "PREVENSIA FORMATION | H0B0, ATEX, SSI, Sprinkler, Coordination SSI",
    description:
      "Organisme de formation Qualiopi : habilitation électrique H0B0/H0V, ATEX NIV 0/1/2, SSI, Sprinkler, Coordination SSI. Présentiel et e-learning. Paris / IDF.",
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
      "PREVENSIA FORMATION | H0B0, ATEX, SSI, Sprinkler, Coordination SSI",
    description:
      "Formations H0B0/H0V, ATEX NIV 0/1/2, SSI, Sprinkler et Coordination SSI. Présentiel et e-learning.",
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
    "Organisme de formation spécialisé en habilitation électrique H0B0/H0V (NF C 18-510 A2), ATEX NIV 0/1/2, Exploitation SSI, Exploitation Sprinkler et Coordination SSI. Formations en présentiel, visio et e-learning.",
  hasCredential: undefined,
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
    "Habilitation électrique NF C 18-510 A2",
    "Formation H0B0 H0V",
    "Formation ATEX NIV 0 sensibilisation",
    "Formation ATEX NIV 1 intervenant",
    "Formation ATEX NIV 2 encadrant",
    "SSI Systèmes de Sécurité Incendie",
    "Exploitation sprinkler",
    "Coordination SSI CSSI",
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
        <BlackFridayBanner />
        {children}
        <Footer />
        <BackToTop />
        <ChatWidget />
        <CookieBanner />
      </body>
    </html>
  );
}
