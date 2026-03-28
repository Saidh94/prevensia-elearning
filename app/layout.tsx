import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header"; // ✅ import du Header global

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "[prevensia-elearning.vercel.app](https://prevensia-elearning.vercel.app)";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "PREVENSIA FORMATION | Formations sécurité incendie, SST et habilitation",
    template: "%s | PREVENSIA FORMATION",
  },
  description:
    "PREVENSIA FORMATION propose des formations en habilitation électrique, sécurité incendie, SSI, sprinkler et SST pour particuliers et professionnels.",
  keywords: [
    "formation habilitation électrique",
    "formation sécurité incendie",
    "formation SST",
    "formation SSI",
    "formation sprinkler",
    "organisme de formation qualiopi",
    "formation prévention des risques",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    title: "PREVENSIA FORMATION",
    description:
      "Organisme de formation certifié Qualiopi : habilitation électrique, sécurité incendie, SSI, sprinkler et SST.",
    siteName: "PREVENSIA FORMATION",
    images: [
      {
        url: "/images/salle-de-formation.jpg",
        width: 1200,
        height: 630,
        alt: "Session de formation PREVENSIA FORMATION",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PREVENSIA FORMATION",
    description:
      "Formations en habilitation électrique, sécurité incendie, SSI, sprinkler et SST.",
    images: ["/images/salle-de-formation.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />      {/* ✅ ton menu principal visible sur TOUTES les pages */}
        <main className="flex-1">{children}</main> {/* ✅ contenu propre à la page */}
      </body>
    </html>
  );
}
