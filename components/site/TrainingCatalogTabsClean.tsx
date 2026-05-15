"use client";

import Link from "next/link";
import { useState } from "react";
import { electricalCommercialOffers } from "@/lib/electrical-offers";

type TabKey =
  | "habilitations"
  | "ssi"
  | "sprinkler"
  | "incendie"
  | "ssiap1"
  | "atex"
  | "sst";

type TableRow = {
  title: string;
  duration: string;
  price: string;
  group: string;
  participants: string;
  ctaHref?: string;
  ctaLabel?: string;
};

const tabs: { key: TabKey; label: string }[] = [
  { key: "habilitations", label: "Habilitations" },
  { key: "ssi", label: "SSI" },
  { key: "sprinkler", label: "Sprinkler" },
  { key: "incendie", label: "Sécurité incendie" },
  { key: "ssiap1", label: "SSIAP1" },
  { key: "atex", label: "ATEX" },
  { key: "sst", label: "SST" },
];

const electricalTableRows: TableRow[] = electricalCommercialOffers.map((offer) => ({
  title:
    offer.availability === "direct"
      ? `${offer.shortTitle} - ${offer.delivery}`
      : `${offer.shortTitle} - parcours ciblé`,
  duration: offer.initialDuration,
  price: offer.interPrice,
  group: offer.intraPrice,
  participants: offer.participants,
  ctaHref: offer.ctaHref,
  ctaLabel: offer.ctaLabel,
}));

const tableRowsByTab: Record<TabKey, TableRow[]> = {
  habilitations: electricalTableRows,
  ssi: [
    {
      title: "Exploitation SSI",
      duration: "1 jour",
      price: "350 EUR HT",
      group: "À partir de 1 800 EUR HT",
      participants: "12 max",
      ctaHref: "/formation-ssi",
      ctaLabel: "Voir la formation",
    },
    {
      title: "SSI avancé : architecture, réglementation et normes",
      duration: "2 jours",
      price: "690 EUR HT",
      group: "À partir de 2 800 EUR HT",
      participants: "10 max",
      ctaHref: "/formation-ssi",
      ctaLabel: "Voir la formation",
    },
  ],
  sprinkler: [
    {
      title: "Exploitation sprinkler",
      duration: "1 jour",
      price: "490 EUR HT",
      group: "À partir de 1 800 EUR HT",
      participants: "6 max",
      ctaHref: "/formation-sprinkler",
      ctaLabel: "Voir la formation",
    },
    {
      title: "Sprinkler technique + visite terrain",
      duration: "2 jours",
      price: "990 EUR HT",
      group: "À partir de 3 200 EUR HT",
      participants: "6 max",
      ctaHref: "/formation-sprinkler",
      ctaLabel: "Voir la formation",
    },
  ],
  incendie: [
    {
      title: "Manipulation extincteurs",
      duration: "0,5 jour",
      price: "149 EUR HT",
      group: "Sur devis",
      participants: "10 max",
      ctaHref: "/formation-securite-incendie",
      ctaLabel: "Voir la formation",
    },
    {
      title: "Guide-file / Serre-file",
      duration: "0,5 jour",
      price: "150 EUR HT",
      group: "Sur devis",
      participants: "10 max",
      ctaHref: "/formation-securite-incendie",
      ctaLabel: "Voir la formation",
    },
    {
      title: "Équipier de Première Intervention (EPI)",
      duration: "1 jour",
      price: "220 EUR HT",
      group: "Sur devis",
      participants: "10 max",
      ctaHref: "/formation-securite-incendie",
      ctaLabel: "Voir la formation",
    },
  ],
  ssiap1: [
    {
      title: "SSIAP1 initial — Agent de sécurité incendie",
      duration: "105 h (e-learning + présentiel)",
      price: "À partir de 1 490 EUR HT",
      group: "Sur devis",
      participants: "6 à 12",
      ctaHref: "/formation-ssiap1",
      ctaLabel: "Voir la formation",
    },
    {
      title: "Recyclage SSIAP1 — Remise à niveau (MAC)",
      duration: "14 h (e-learning + présentiel)",
      price: "À partir de 250 EUR HT",
      group: "Sur devis",
      participants: "6 à 12",
      ctaHref: "/formation-recyclage-ssiap1",
      ctaLabel: "Voir la formation",
    },
  ],
  atex: [
    {
      title: "ATEX Niveau 1 — Sensibilisation atmosphères explosives",
      duration: "3 h e-learning",
      price: "129 EUR HT",
      group: "Non applicable",
      participants: "Individuel",
      ctaHref: "/modules/atex",
      ctaLabel: "Accéder au module",
    },
    {
      title: "ATEX Niveau 2 — Travailleur exposé en zone classée",
      duration: "E-learning 3 h + entretien 30 min",
      price: "490 EUR HT",
      group: "Sur devis",
      participants: "Individuel",
      ctaHref: "/formation-atex",
      ctaLabel: "Voir la formation",
    },
    {
      title: "ATEX Niveau 3 — Chargé de travaux / Responsable",
      duration: "E-learning 3 h + classe virtuelle 2 h",
      price: "À partir de 790 EUR HT",
      group: "Sur devis",
      participants: "Jusqu'à 8",
      ctaHref: "/formation-atex",
      ctaLabel: "Voir la formation",
    },
  ],
  sst: [
    {
      title: "SST initial",
      duration: "2 jours",
      price: "240 EUR HT",
      group: "À partir de 1 190 EUR HT",
      participants: "4 à 10",
      ctaHref: "/formation-sst",
      ctaLabel: "Voir la formation",
    },
    {
      title: "MAC SST",
      duration: "1 jour",
      price: "130 EUR HT",
      group: "À partir de 690 EUR HT",
      participants: "4 à 10",
      ctaHref: "/formation-sst",
      ctaLabel: "Voir la formation",
    },
  ],
};

const audienceByTab: Record<TabKey, string[]> = {
  habilitations: [
    "Personnel non électricien H0B0 / H0V",
    "Personnel chargé d'opérations élémentaires BS et BE Manœuvre",
    "Exécutants électriciens B1 / B1V",
    "Chargés de travaux B2 / B2V",
    "Chargés d'intervention générale BR",
    "Chargés de consignation BC",
    "Personnel à multi-symboles BT selon organisation",
    "Agents de maintenance",
    "Techniciens d'intervention",
    "Encadrants techniques",
  ],
  ssi: [
    "Responsables techniques",
    "Services maintenance",
    "Responsables QHSE / sécurité",
    "Exploitants ERP, BUP, ICPE, IGH",
    "Personnel chargé de l'exploitation du SSI",
  ],
  sprinkler: [
    "Responsables maintenance",
    "Responsables sécurité incendie",
    "Exploitants logistiques et industriels",
    "Techniciens d'exploitation",
    "Ingénieurs et bureaux d'études pour le module avancé",
  ],
  incendie: [
    "Salariés d'entreprise soumis à exercice d'évacuation",
    "Personnel chargé de l'évacuation (guide-file, serre-file)",
    "Équipiers de première intervention",
    "Encadrants et référents sécurité incendie ERP",
    "Collaborateurs à sensibiliser au risque incendie",
  ],
  ssiap1: [
    "Agents de sécurité incendie souhaitant obtenir la qualification SSIAP1",
    "Personnel de surveillance en ERP, IGH, ICPE",
    "Titulaires SSIAP1 devant effectuer leur recyclage obligatoire (MAC)",
    "Agents en reconversion professionnelle vers la sécurité incendie",
    "Salariés désignés par leur employeur pour assurer la fonction d'agent SSIAP",
  ],
  atex: [
    "Tout personnel circulant en zone ATEX (Niveau 1)",
    "Travailleurs intervenant régulièrement en zone classée (Niveau 2)",
    "Responsables de travaux et chargés de chantier en zone ATEX (Niveau 3)",
    "Techniciens de maintenance, opérateurs, électriciens, mécaniciens",
    "Responsables sécurité et coordinateurs ATEX",
    "Sous-traitants et intervenants extérieurs en site classé",
  ],
  sst: [
    "Salariés de tout secteur",
    "Personnel désigné secouriste",
    "Collaborateurs devant porter assistance en cas d'accident",
    "Titulaires SST à recycler pour le MAC SST",
  ],
};

export default function TrainingCatalogTabsClean() {
  const [active, setActive] = useState<TabKey>("habilitations");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function handleTabChange(key: TabKey) {
    setActive(key);
    setOpenIndex(0);
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Tarifs des formations
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Des formations structurées par domaine
          </h2>
          <p className="mt-4 text-slate-600">
            Tarifs indicatifs en inter-entreprises par participant et en
            intra-entreprise par groupe.
          </p>
        </div>

        {/* Onglets */}
        <div className="mt-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => handleTabChange(tab.key)}
              className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                active === tab.key
                  ? "bg-red-700 text-white"
                  : "border border-slate-300 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordéon */}
        <div className="mt-8 space-y-3">
          {tableRowsByTab[active].map((row, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={row.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                {/* En-tête cliquable */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <div className="flex min-w-0 flex-wrap items-center gap-3">
                    <span className="font-semibold text-slate-900">
                      {row.title}
                    </span>
                    <span className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-white whitespace-nowrap">
                      {row.duration}
                    </span>
                  </div>
                  <ChevronIcon open={isOpen} />
                </button>

                {/* Contenu déplié */}
                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                    <div className="grid gap-3 sm:grid-cols-3">
                      <InfoTile label="Inter / participant" value={row.price} />
                      <InfoTile label="Intra / groupe" value={row.group} />
                      <InfoTile label="Participants" value={row.participants} />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        href={row.ctaHref ?? "/demande-devis"}
                        className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                      >
                        {row.ctaLabel ?? "Voir la formation"}
                      </Link>
                      <Link
                        href="/demande-devis"
                        className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                      >
                        Demander un devis
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <AudienceBox items={audienceByTab[active]} />

        <p className="mt-6 text-sm text-slate-500">
          Les tarifs intra-entreprise sont indiqués à partir de et peuvent
          varier selon le lieu d&apos;intervention, les contraintes du site et le
          nombre de participants.
        </p>
      </div>
    </section>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 text-slate-400 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function AudienceBox({ items }: { items: string[] }) {
  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
        Public concerné
      </p>
      <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate-700 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}
