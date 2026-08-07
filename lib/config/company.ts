/**
 * Identité légale et coordonnées de la société — source unique de vérité.
 *
 * Toute l'adresse de domiciliation, le SIRET, le numéro de TVA, etc. étaient
 * auparavant recopiés à la main dans ~22 fichiers (PDF de factures/devis/
 * attestations, mentions légales, JSON-LD SEO, footer, emails transactionnels).
 * Ce fichier centralise ces valeurs pour ne plus jamais avoir à les changer
 * qu'à un seul endroit.
 *
 * Configurable via variables d'environnement (voir .env.example). Toutes les
 * clés sont préfixées NEXT_PUBLIC_ car ces informations sont déjà publiques
 * (affichées sur le site) et certains usages sont côté client (Footer, pages
 * publiques). Aucune donnée sensible n'est stockée ici.
 *
 * Pour déménager Prevensia : changer les variables d'environnement sur Vercel
 * (Project Settings → Environment Variables) puis redéployer. Pas besoin de
 * toucher au code.
 */

function env(key: string, fallback: string): string {
  const value = process.env[key];
  return value && value.trim().length > 0 ? value.trim() : fallback;
}

export const COMPANY = {
  // Identité commerciale
  name: env("NEXT_PUBLIC_COMPANY_NAME", "PREVENSIA FORMATION"),
  legalName: env("NEXT_PUBLIC_COMPANY_LEGAL_NAME", "PREVENSIA Groupe SAS"),

  // Adresse de domiciliation (siège social)
  addressLine: env("NEXT_PUBLIC_COMPANY_ADDRESS_LINE", "33, avenue Philippe Auguste"),
  postalCode: env("NEXT_PUBLIC_COMPANY_POSTAL_CODE", "75011"),
  city: env("NEXT_PUBLIC_COMPANY_CITY", "Paris"),
  region: env("NEXT_PUBLIC_COMPANY_REGION", "Île-de-France"),
  country: env("NEXT_PUBLIC_COMPANY_COUNTRY", "France"),
  countryCode: env("NEXT_PUBLIC_COMPANY_COUNTRY_CODE", "FR"),

  // Contact
  phone: env("NEXT_PUBLIC_COMPANY_PHONE", "01 89 62 94 92"),
  email: env("NEXT_PUBLIC_COMPANY_EMAIL", "contact@prevensia-formation.fr"),
  siteUrl: env("NEXT_PUBLIC_SITE_URL", "https://prevensia-formation.fr"),

  // Identité légale (mentions légales, factures)
  legalForm: env("NEXT_PUBLIC_COMPANY_LEGAL_FORM", "SAS — Société par actions simplifiée"),
  shareCapital: env("NEXT_PUBLIC_COMPANY_CAPITAL", "500,00 €"),
  siren: env("NEXT_PUBLIC_COMPANY_SIREN", "107 290 579"),
  siret: env("NEXT_PUBLIC_COMPANY_SIRET", "107 290 579 00013"),
  vatNumber: env("NEXT_PUBLIC_COMPANY_VAT", "FR44107290579"),
  rcs: env("NEXT_PUBLIC_COMPANY_RCS", "107 290 579 R.C.S. Paris"),
  nafCode: env("NEXT_PUBLIC_COMPANY_NAF", "85.59A"),
  collectiveAgreement: env("NEXT_PUBLIC_COMPANY_COLLECTIVE_AGREEMENT", "Organismes de formation — IDCC 1516"),
  directors: env("NEXT_PUBLIC_COMPANY_DIRECTORS", "Hachiba Said, Hachiba Karim"),
} as const;

/** "33, avenue Philippe Auguste — 75011 Paris" */
export function companyAddressOneLine(separator = "—"): string {
  return `${COMPANY.addressLine} ${separator} ${COMPANY.postalCode} ${COMPANY.city}`;
}

/** "33, avenue Philippe Auguste" / "75011 Paris" — pour affichage sur deux lignes */
export function companyAddressLines(): { street: string; cityLine: string } {
  return { street: COMPANY.addressLine, cityLine: `${COMPANY.postalCode} ${COMPANY.city}` };
}

/** "PREVENSIA FORMATION — 33, avenue Philippe Auguste, 75011 Paris" */
export function companyNameAndAddress(separator = "—"): string {
  return `${COMPANY.name} ${separator} ${COMPANY.addressLine}, ${COMPANY.postalCode} ${COMPANY.city}`;
}

/** Ligne de pied de page complète pour PDF / emails, avec SIRET, email, téléphone */
export function companyFooterLine(): string {
  return `${COMPANY.name} | ${companyAddressOneLine()} | SIRET : ${COMPANY.siret} | ${COMPANY.email} | ${COMPANY.phone}`;
}

/** Adresse structurée pour JSON-LD schema.org (SEO) */
export function companyPostalAddressJsonLd() {
  return {
    "@type": "PostalAddress",
    streetAddress: COMPANY.addressLine,
    addressLocality: COMPANY.city,
    postalCode: COMPANY.postalCode,
    addressRegion: COMPANY.region,
    addressCountry: COMPANY.countryCode,
  };
}
