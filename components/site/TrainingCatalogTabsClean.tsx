"use client";

import Link from "next/link";
import { useState } from "react";
import { electricalCommercialOffers } from "@/lib/electrical-offers";

// ─── Types ────────────────────────────────────────────────────────────────────

type TabKey =
  | "habilitations"
  | "ssi"
  | "sprinkler"
  | "incendie"
  | "ssiap1"
  | "atex"
  | "sst";

type MetierKey =
  | ""
  | "electricien"
  | "non-electricien"
  | "securite-qhse"
  | "agent-ssiap"
  | "exploitant-erp"
  | "sst"
  | "atex"
  | "exploitant-protection-incendie";

const metierIconBg: Record<string, string> = {
  "electricien":                    "bg-blue-50 text-blue-700 border border-blue-100",
  "non-electricien":                "bg-slate-100 text-slate-600 border border-slate-200",
  "securite-qhse":                  "bg-emerald-50 text-emerald-700 border border-emerald-100",
  "agent-ssiap":                    "bg-orange-50 text-orange-700 border border-orange-100",
  "exploitant-erp":                 "bg-indigo-50 text-indigo-700 border border-indigo-100",
  "sst":                            "bg-pink-50 text-pink-700 border border-pink-100",
  "atex":                           "bg-amber-50 text-amber-700 border border-amber-100",
  "exploitant-protection-incendie": "bg-cyan-50 text-cyan-700 border border-cyan-100",
};

type TableRow = {
  title: string;
  duration: string;
  price: string;
  group: string;
  participants: string;
  ctaHref?: string;
  ctaLabel?: string;
  badge?: string; // domaine affiché en mode métier
};

// ─── Données domaines (tabs) ──────────────────────────────────────────────────

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
  badge: "Habilitation",
}));

const tableRowsByTab: Record<TabKey, TableRow[]> = {
  habilitations: electricalTableRows,
  ssi: [
    {
      title: "Exploitation SSI",
      duration: "1 jour",
      price: "650 EUR HT",
      group: "À partir de 2 200 EUR HT",
      participants: "12 max",
      ctaHref: "/formation-ssi",
      ctaLabel: "Voir la formation",
      badge: "SSI",
    },
    {
      title: "SSI avancé : architecture, réglementation et normes",
      duration: "2 jours",
      price: "1 190 EUR HT",
      group: "Sur devis",
      participants: "10 max",
      ctaHref: "/formation-ssi",
      ctaLabel: "Voir la formation",
      badge: "SSI",
    },
  ],
  sprinkler: [
    {
      title: "Exploitation sprinkler",
      duration: "1 jour",
      price: "590 EUR HT",
      group: "À partir de 2 200 EUR HT",
      participants: "6 max",
      ctaHref: "/formation-sprinkler",
      ctaLabel: "Voir la formation",
      badge: "Sprinkler",
    },
    {
      title: "Sprinkler technique + visite terrain",
      duration: "2 jours",
      price: "1 190 EUR HT",
      group: "Sur devis",
      participants: "6 max",
      ctaHref: "/formation-sprinkler",
      ctaLabel: "Voir la formation",
      badge: "Sprinkler",
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
      badge: "Incendie",
    },
    {
      title: "Guide-file / Serre-file",
      duration: "0,5 jour",
      price: "150 EUR HT",
      group: "Sur devis",
      participants: "10 max",
      ctaHref: "/formation-securite-incendie",
      ctaLabel: "Voir la formation",
      badge: "Incendie",
    },
    {
      title: "Équipier de Première Intervention (EPI)",
      duration: "1 jour",
      price: "220 EUR HT",
      group: "Sur devis",
      participants: "10 max",
      ctaHref: "/formation-securite-incendie",
      ctaLabel: "Voir la formation",
      badge: "Incendie",
    },
  ],
  ssiap1: [
    {
      title: "SSIAP1 initial — Agent de sécurité incendie",
      duration: "70 h (e-learning + présentiel)",
      price: "À partir de 1 090 EUR HT",
      group: "Sur devis",
      participants: "6 à 12",
      ctaHref: "/formation-ssiap1",
      ctaLabel: "Voir la formation",
      badge: "SSIAP1",
    },
    {
      title: "Recyclage SSIAP1 — Remise à niveau (MAC)",
      duration: "14 h (e-learning + présentiel)",
      price: "À partir de 390 EUR HT",
      group: "Sur devis",
      participants: "6 à 12",
      ctaHref: "/formation-recyclage-ssiap1",
      ctaLabel: "Voir la formation",
      badge: "SSIAP1",
    },
  ],
  atex: [
    {
      title: "ATEX NIV 0 — Sensibilisation atmosphères explosives",
      duration: "2 h e-learning + entretien 30 min",
      price: "129 EUR HT",
      group: "Non applicable",
      participants: "Individuel",
      ctaHref: "/modules/atex",
      ctaLabel: "Accéder au module",
      badge: "ATEX",
    },
    {
      title: "ATEX NIV 1 — Intervenant en zone classée",
      duration: "E-learning 5-6 h + classe virtuelle 4 h",
      price: "490 EUR HT",
      group: "Sur devis",
      participants: "Individuel",
      ctaHref: "/formation-atex",
      ctaLabel: "Voir la formation",
      badge: "ATEX",
    },
    {
      title: "ATEX NIV 2 — Encadrant / Chargé de travaux",
      duration: "E-learning 7 h + journée présentielle 7 h",
      price: "À partir de 990 EUR HT",
      group: "Sur devis",
      participants: "Jusqu'à 8",
      ctaHref: "/formation-atex",
      ctaLabel: "Voir la formation",
      badge: "ATEX",
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
      badge: "SST",
    },
    {
      title: "MAC SST",
      duration: "1 jour",
      price: "130 EUR HT",
      group: "À partir de 690 EUR HT",
      participants: "4 à 10",
      ctaHref: "/formation-sst",
      ctaLabel: "Voir la formation",
      badge: "SST",
    },
  ],
};

// ─── Données par métier ───────────────────────────────────────────────────────

const metiers: { key: MetierKey; label: string; description: string }[] = [
  {
    key: "non-electricien",
    label: "Personnel non électricien",
    description: "H0B0, H0V — travaux non électriques à proximité du risque électrique",
  },
  {
    key: "electricien",
    label: "Personnel électricien / maintenance",
    description: "BS, BE, B1/B2/BR/BC — interventions BT, manœuvres et consignation",
  },
  {
    key: "securite-qhse",
    label: "Encadrement / QHSE",
    description: "Prévention, conformité, suivi des habilitations et gestion des risques",
  },
  {
    key: "agent-ssiap",
    label: "Équipier de première intervention",
    description: "Alerte, évacuation, extincteurs et premiers moyens d'intervention",
  },
  {
    key: "exploitant-erp",
    label: "Exploitant bâtiment / ERP",
    description: "SSI, consignes, registre de sécurité, évacuation et exploitation courante",
  },
  {
    key: "exploitant-protection-incendie",
    label: "Exploitant protection incendie",
    description: "Sprinkler, extinction gaz, SSI et gestion des indisponibilités",
  },
  {
    key: "sst",
    label: "Secouriste du travail",
    description: "Protection, alerte, gestes de secours et prévention en entreprise",
  },
  {
    key: "atex",
    label: "Intervenant ATEX",
    description: "Zones à atmosphère explosive, prévention des sources d'inflammation",
  },
];

// Formations recommandées par métier (sous-ensemble de toutes les formations)
const rowsByMetier: Record<Exclude<MetierKey, "">, TableRow[]> = {
  "non-electricien": [
    ...electricalTableRows.filter((r) =>
      r.title.includes("H0 B0") || r.title.includes("H0B0")
    ),
    tableRowsByTab.atex[0], // ATEX N1 sensibilisation
  ],
  electricien: [
    ...electricalTableRows.filter((r) =>
      !r.title.includes("H0 B0") && !r.title.includes("H0B0")
    ),
    tableRowsByTab.atex[1], // ATEX N2
  ],
  "securite-qhse": [
    tableRowsByTab.incendie[2], // EPI
    tableRowsByTab.sst[0],
    tableRowsByTab.atex[2],     // ATEX N3
    tableRowsByTab.ssi[0],
    tableRowsByTab.sprinkler[0],
  ],
  "agent-ssiap": [
    // Équipier de première intervention
    tableRowsByTab.incendie[0], // extincteurs
    tableRowsByTab.incendie[1], // guide-file / serre-file
    tableRowsByTab.incendie[2], // EPI
  ],
  "exploitant-erp": [
    tableRowsByTab.ssiap1[0],
    tableRowsByTab.ssiap1[1],
    tableRowsByTab.ssi[0],
    tableRowsByTab.ssi[1],
    tableRowsByTab.incendie[1], // guide-file
    tableRowsByTab.incendie[2], // EPI
  ],
  "exploitant-protection-incendie": [
    tableRowsByTab.sprinkler[0],
    tableRowsByTab.sprinkler[1],
    tableRowsByTab.ssi[0],
    tableRowsByTab.ssi[1],
  ],
  sst: [
    tableRowsByTab.sst[0],
    tableRowsByTab.sst[1],
  ],
  atex: [
    tableRowsByTab.atex[0],
    tableRowsByTab.atex[1],
    tableRowsByTab.atex[2],
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
    "Tout personnel circulant en zone ATEX (N0 – Sensibilisation)",
    "Travailleurs intervenant régulièrement en zone classée (N1 – Intervenant)",
    "Responsables de travaux et chargés de chantier en zone ATEX (N2 – Encadrant)",
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

// Badge color mapping
const badgeColors: Record<string, string> = {
  Habilitation: "bg-blue-100 text-blue-800",
  SSI: "bg-purple-100 text-purple-800",
  Sprinkler: "bg-cyan-100 text-cyan-800",
  Incendie: "bg-orange-100 text-orange-800",
  SSIAP1: "bg-red-100 text-red-800",
  ATEX: "bg-yellow-100 text-yellow-800",
  SST: "bg-green-100 text-green-800",
};

// ─── Composant principal ──────────────────────────────────────────────────────

export default function TrainingCatalogTabsClean() {
  const [mode, setMode] = useState<"metier" | "domaine">("metier");
  const [activeTab, setActiveTab] = useState<TabKey>("habilitations");
  const [activeMetier, setActiveMetier] = useState<MetierKey>("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleTabChange(key: TabKey) {
    setActiveTab(key);
    setOpenIndex(0);
  }

  function handleMetierChange(key: MetierKey) {
    setActiveMetier(key);
    setOpenIndex(0);
  }

  function switchMode(m: "metier" | "domaine") {
    setMode(m);
    setOpenIndex(null);
  }

  const metierRows = activeMetier ? rowsByMetier[activeMetier] : [];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Tarifs des formations
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Trouvez la formation qui vous correspond
            </h2>
            <p className="mt-3 text-slate-500">
              Filtrez par métier pour un résultat immédiat, ou parcourez par domaine.
            </p>
          </div>

          {/* Toggle mode */}
          <div className="flex shrink-0 items-center gap-1 rounded-2xl border border-slate-200 bg-slate-50 p-1">
            <button
              type="button"
              onClick={() => switchMode("metier")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                mode === "metier"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Par métier
            </button>
            <button
              type="button"
              onClick={() => switchMode("domaine")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                mode === "domaine"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Par domaine
            </button>
          </div>
        </div>

        {/* ── Mode MÉTIER ─────────────────────────────────────────────────────── */}
        {mode === "metier" && (
          <div className="mt-8">
            {/* Dropdown métier */}
            <div className="relative max-w-sm">
              <label
                htmlFor="metier-select"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Votre métier
              </label>
              <div className="relative">
                <select
                  id="metier-select"
                  value={activeMetier}
                  onChange={(e) => handleMetierChange(e.target.value as MetierKey)}
                  className="w-full appearance-none rounded-xl border border-slate-300 bg-white py-3 pl-4 pr-10 text-sm font-medium text-slate-800 shadow-sm transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                >
                  <option value="">— Sélectionnez votre métier —</option>
                  {metiers.map((m) => (
                    <option key={m.key} value={m.key}>
                      {m.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </div>
            </div>

            {/* Résultats */}
            {activeMetier === "" ? (
              /* État vide : grille des métiers */
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {metiers.map((m) => (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => handleMetierChange(m.key)}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-red-200 hover:bg-red-50"
                  >
                    <div className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${metierIconBg[m.key] ?? "bg-slate-100 text-slate-600"}`}>
                      <MetierIcon metierKey={m.key} />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-slate-900 group-hover:text-red-700">
                      {m.label}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{m.description}</p>
                  </button>
                ))}
              </div>
            ) : (
              /* Formations filtrées */
              <div className="mt-6">
                {/* Description métier */}
                {(() => {
                  const m = metiers.find((x) => x.key === activeMetier);
                  return m ? (
                    <div className="mb-5 flex items-center gap-3">
                      <div className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${metierIconBg[m.key] ?? "bg-slate-100 text-slate-600"}`}>
                        <MetierIcon metierKey={m.key} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{m.label}</p>
                        <p className="text-sm text-slate-500">{m.description}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => { setActiveMetier(""); setOpenIndex(null); }}
                        className="ml-auto rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-500 transition hover:bg-slate-100"
                      >
                        Changer
                      </button>
                    </div>
                  ) : null;
                })()}

                <div className="space-y-3">
                  {metierRows.map((row, idx) => (
                    <AccordionRow
                      key={`${row.title}-${idx}`}
                      row={row}
                      isOpen={openIndex === idx}
                      onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                      showBadge
                    />
                  ))}
                </div>

                <p className="mt-4 text-sm text-slate-400">
                  {metierRows.length} formation{metierRows.length > 1 ? "s" : ""} recommandée{metierRows.length > 1 ? "s" : ""} pour ce profil.{" "}
                  <button
                    type="button"
                    onClick={() => switchMode("domaine")}
                    className="text-red-700 underline underline-offset-2 hover:no-underline"
                  >
                    Voir toutes les formations par domaine
                  </button>
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── Mode DOMAINE ─────────────────────────────────────────────────────── */}
        {mode === "domaine" && (
          <div className="mt-8">
            {/* Onglets */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleTabChange(tab.key)}
                  className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                    activeTab === tab.key
                      ? "bg-red-700 text-white"
                      : "border border-slate-300 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Accordéon */}
            <div className="mt-6 space-y-3">
              {tableRowsByTab[activeTab].map((row, idx) => (
                <AccordionRow
                  key={row.title}
                  row={row}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                  showBadge={false}
                />
              ))}
            </div>

            <AudienceBox items={audienceByTab[activeTab]} />
          </div>
        )}

        <p className="mt-6 text-sm text-slate-400">
          Les tarifs intra-entreprise sont indiqués à partir de et peuvent varier
          selon le lieu d&apos;intervention, les contraintes du site et le nombre de
          participants.
        </p>
      </div>
    </section>
  );
}

// ─── Sous-composants ──────────────────────────────────────────────────────────

function AccordionRow({
  row,
  isOpen,
  onToggle,
  showBadge,
}: {
  row: TableRow;
  isOpen: boolean;
  onToggle: () => void;
  showBadge: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
        aria-expanded={isOpen}
      >
        <div className="flex min-w-0 flex-wrap items-center gap-2.5">
          <span className="font-semibold text-slate-900">{row.title}</span>
          <span className="rounded-full bg-slate-900 px-2.5 py-0.5 text-xs font-medium text-white whitespace-nowrap">
            {row.duration}
          </span>
          {showBadge && row.badge && (
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${
                badgeColors[row.badge] ?? "bg-slate-100 text-slate-700"
              }`}
            >
              {row.badge}
            </span>
          )}
        </div>
        <ChevronIcon open={isOpen} />
      </button>

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

function MetierIcon({ metierKey }: { metierKey: string }) {
  const s = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };
  switch (metierKey) {
    case "electricien":
      // Éclair / zap (filled)
      return <svg {...s}><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>;
    case "non-electricien":
      // Clé / outil (Material Icons "build", filled)
      return <svg {...s}><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>;
    case "securite-qhse":
      // Bouclier + coche (shield-check)
      return <svg {...s}><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 13l-3-3 1.41-1.41L10 11.17l5.59-5.58L17 7l-7 7z"/></svg>;
    case "agent-ssiap":
      // Flamme (Équipier de première intervention)
      return <svg {...s}><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>;
    case "exploitant-erp":
      // Bâtiment / immeuble (building-2)
      return <svg {...s}><path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zm-6 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>;
    case "exploitant-protection-incendie":
      // Bouclier + goutte d'eau (protection incendie)
      return <svg {...s}><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10c0 .55-.45 1-1 1s-1-.45-1-1c0-1.66 1.34-3 3-3s3 1.34 3 3c0 2.21-1.79 4-4 4v-2c1.1 0 2-.9 2-2 0-.55-.45-1-1-1z"/></svg>;
    case "sst":
      // Croix médicale (local_hospital, filled)
      return <svg {...s}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-2v-4H8v-2h4V8h2v4h4v2z"/></svg>;
    case "atex":
      // Triangle danger / avertissement (warning, filled)
      return <svg {...s}><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>;
    default:
      return null;
  }
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
