import Link from "next/link";
import Image from "next/image";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { COMPANY } from "@/lib/company";

export const metadata = {
  title: "Qui sommes-nous — PREVENSIA FORMATION, organisme Qualiopi | Paris",
  description:
    "PREVENSIA FORMATION est un organisme de formation certifié Qualiopi, basé à Paris. Habilitation électrique NF C 18-510, SST, SSIAP1, sécurité incendie, SSI, sprinkler, ATEX.",
  alternates: {
    canonical: "https://prevensia-formation.fr/qui-sommes-nous",
  },
  keywords: [
    "PREVENSIA FORMATION",
    "organisme formation Qualiopi Paris",
    "PREVENSIA Groupe SAS",
    "formation habilitation électrique Île-de-France",
    "organisme formation certifié Paris",
    "formation SSIAP1 Paris",
    "formation ATEX directive 99/92",
  ],
};

const formations = [
  {
    titre: "Habilitation électrique",
    symboles: "H0B0, BS/BE, B1, B2, BR, BC",
    href: "/formation-habilitation-electrique",
  },
  {
    titre: "SST — Secourisme au travail",
    symboles: "SST initial · MAC SST",
    href: "/formation-sst",
  },
  {
    titre: "Sécurité incendie",
    symboles: "Extincteurs · Guide-file · EPI",
    href: "/formation-securite-incendie",
  },
  {
    titre: "SSIAP1 — Agent de sécurité incendie",
    symboles: "SSIAP1 initial · Recyclage 3 ans",
    href: "/formation-ssiap1",
  },
  {
    titre: "Exploitation SSI",
    symboles: "NF S 61 · ERP · IGH · ICPE",
    href: "/formation-ssi",
  },
  {
    titre: "Exploitation sprinkler",
    symboles: "EN 12845 · APSAD R1 · NFPA 13",
    href: "/formation-sprinkler",
  },
  {
    titre: "ATEX — Atmosphères explosives",
    symboles: "Directive 99/92/CE · Zones 0/1/2 · DRPCE",
    href: "/formation-atex",
  },
];

const engagements = [
  {
    titre: "Conformité réglementaire",
    desc: "Chaque programme est aligné sur les textes en vigueur : Code du travail, NF C 18-510, NF S 61, EN 12845, APSAD, NFPA. Nos attestations constituent des preuves de formation opposables.",
  },
  {
    titre: "Approche terrain",
    desc: "Les formations sont conçues à partir des situations réelles rencontrées par les apprenants : installations existantes, procédures internes, contexte d'exploitation propre à chaque entreprise.",
  },
  {
    titre: "Souplesse de format",
    desc: "Présentiel sur site, e-learning encadré, visioconférence ou format mixte selon le symbole, le nombre d'apprenants et les contraintes opérationnelles.",
  },
  {
    titre: "Traçabilité complète",
    desc: "Attestations PDF, suivi des progressions e-learning, accès employeur dédié. Les documents de formation sont disponibles immédiatement après chaque parcours.",
  },
];

export default function QuiSommesNousPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Qui sommes-nous", url: "/qui-sommes-nous" },
        ]}
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Qui sommes-nous</span>
          </nav>

          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-100">
            Organisme certifié Qualiopi · Paris (75)
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            PREVENSIA FORMATION
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Organisme de formation spécialisé en prévention des risques professionnels,
            certifié Qualiopi et basé à Paris, marque du PREVENSIA Groupe SAS. Nous accompagnons
            les entreprises et leurs équipes dans leurs obligations réglementaires
            en habilitation électrique, sécurité incendie, SST, SSIAP1, SSI, sprinkler et ATEX.
          </p>
        </div>
      </section>

      {/* Identité */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">Notre identité</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Un organisme ancré dans les réalités terrain
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                PREVENSIA FORMATION est une marque du <strong>PREVENSIA Groupe SAS</strong>,
                organisme de formation professionnel certifié Qualiopi pour les actions
                de formation. Basé à Paris, nous intervenons principalement en Île-de-France, avec
                des déplacements sur toute la France pour les formations intra-entreprise.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Notre démarche repose sur une conviction simple : la sécurité au travail
                ne s&apos;improvise pas. Elle se construit à partir de formations rigoureuses,
                conformes aux référentiels réglementaires, adaptées aux installations
                réelles et directement applicables sur le terrain.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Qu&apos;il s&apos;agisse d&apos;une habilitation électrique, d&apos;un recyclage SST ou de
                la formation d&apos;un responsable technique à l&apos;exploitation de son SSI,
                chaque parcours est construit autour des besoins concrets des apprenants
                et des exigences de leur employeur.
              </p>
            </div>

            {/* Fiche identité */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/qualiopi.jpg"
                  alt="Certification Qualiopi"
                  width={64}
                  height={64}
                  className="h-16 w-auto shrink-0"
                />
                <div>
                  <p className="font-bold text-slate-900">Certifié Qualiopi</p>
                  <p className="text-sm text-slate-600">Actions de formation</p>
                </div>
              </div>

              <dl className="space-y-4 text-sm">
                {[
                  { label: "Raison sociale", value: COMPANY.legalName },
                  { label: "Marque", value: COMPANY.name },
                  { label: "SIRET", value: COMPANY.siret },
                  { label: "Adresse", value: COMPANY.addressMultiline },
                  { label: "Téléphone", value: COMPANY.phone, href: `tel:+33${COMPANY.phone.replace(/\s/g, "").slice(1)}` },
                  { label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                  { label: "Zone d'intervention", value: "Île-de-France et France entière" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <dt className="w-36 shrink-0 font-semibold text-slate-700">{item.label}</dt>
                    <dd className="text-slate-600 whitespace-pre-line">
                      {item.href ? (
                        <a href={item.href} className="text-red-700 hover:underline">{item.value}</a>
                      ) : item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Nos formations */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Nos domaines de formation</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            Sept domaines de prévention couvrant les principales obligations réglementaires
            des entreprises industrielles, tertiaires et logistiques.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {formations.map((f) => (
              <Link
                key={f.titre}
                href={f.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-red-200 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-slate-900 group-hover:text-red-700">{f.titre}</h3>
                <p className="mt-1 text-sm text-red-600 font-medium">{f.symboles}</p>
                <p className="mt-3 text-sm font-semibold text-slate-500 group-hover:text-red-600">
                  Voir la formation →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nos engagements */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Nos engagements</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {engagements.map((e, i) => (
              <div key={e.titre} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-bold text-slate-900">{e.titre}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-600">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Qualiopi */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:gap-12 lg:items-start">
            <div className="shrink-0">
              <Image
                src="/images/qualiopi.jpg"
                alt="Certification Qualiopi"
                width={120}
                height={120}
                className="h-28 w-auto mx-auto lg:mx-0"
              />
            </div>
            <div className="mt-6 lg:mt-0">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Certification qualité</p>
              <h2 className="mt-2 text-3xl font-bold">Qualiopi — Actions de formation</h2>
              <p className="mt-4 max-w-3xl text-lg text-slate-300 leading-8">
                La certification Qualiopi atteste de la qualité des processus mis en œuvre
                par notre organisme pour les actions de formation. Elle est exigée pour
                accéder aux financements publics et mutualistes (OPCO, France Travail).
              </p>
              <p className="mt-4 max-w-3xl text-slate-400 leading-7">
                Nos formations sont donc éligibles aux financements OPCO pour les entreprises,
                et à France Travail pour les demandeurs d&apos;emploi en démarche de reconversion
                ou de montée en compétences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Nous contacter</h2>
          <p className="mt-4 text-lg text-slate-600">
            Pour un devis, une question sur nos formations ou une demande d&apos;information.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/demande-devis" className="rounded-xl bg-red-600 px-8 py-4 font-semibold text-white hover:bg-red-700 transition-colors">
              Demander un devis
            </Link>
            <Link href="/formation-habilitation-electrique" className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 hover:border-red-300 hover:text-red-700 transition-colors">
              Voir nos formations
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">Téléphone</p>
              <a href="tel:+33189629492" className="mt-1 block text-red-700 hover:underline text-base font-medium">
                01 89 62 94 92
              </a>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Email</p>
              <a href="mailto:contact@prevensia-formation.fr" className="mt-1 block text-red-700 hover:underline">
                contact@prevensia-formation.fr
              </a>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Adresse</p>
              <p className="mt-1">{COMPANY.address}<br />{COMPANY.postalCode} {COMPANY.city}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
