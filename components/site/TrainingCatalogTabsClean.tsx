"use client";

import Link from "next/link";
import { useState } from "react";
import { electricalCommercialOffers } from "@/lib/electrical-offers";

type TabKey =
  | "habilitations"
  | "ssi"
  | "sprinkler"
  | "incendie"
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
  { key: "incendie", label: "Securite incendie" },
  { key: "sst", label: "SST" },
];

const electricalTableRows: TableRow[] = electricalCommercialOffers.map((offer) => ({
  title:
    offer.availability === "direct"
      ? `${offer.shortTitle} - ${offer.delivery}`
      : `${offer.shortTitle} - parcours cible`,
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
      group: "A partir de 1 800 EUR HT",
      participants: "12 max",
      ctaHref: "/formation-ssi",
      ctaLabel: "Voir la formation",
    },
    {
      title: "SSI avance : architecture, reglementation et normes",
      duration: "2 jours",
      price: "690 EUR HT",
      group: "A partir de 2 800 EUR HT",
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
      group: "A partir de 1 800 EUR HT",
      participants: "6 max",
      ctaHref: "/formation-sprinkler",
      ctaLabel: "Voir la formation",
    },
    {
      title: "Sprinkler technique + visite terrain",
      duration: "2 jours",
      price: "990 EUR HT",
      group: "A partir de 3 200 EUR HT",
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
      price: "129 EUR HT",
      group: "Sur devis",
      participants: "10 max",
      ctaHref: "/formation-securite-incendie",
      ctaLabel: "Voir la formation",
    },
    {
      title: "Equipier de Premiere Intervention (EPI)",
      duration: "1 jour",
      price: "130 EUR HT",
      group: "Sur devis",
      participants: "10 max",
      ctaHref: "/formation-securite-incendie",
      ctaLabel: "Voir la formation",
    },
  ],
  sst: [
    {
      title: "SST initial",
      duration: "2 jours",
      price: "240 EUR HT",
      group: "A partir de 1 190 EUR HT",
      participants: "4 a 10",
      ctaHref: "/formation-sst",
      ctaLabel: "Voir la formation",
    },
    {
      title: "MAC SST",
      duration: "1 jour",
      price: "130 EUR HT",
      group: "A partir de 690 EUR HT",
      participants: "4 a 10",
      ctaHref: "/formation-sst",
      ctaLabel: "Voir la formation",
    },
  ],
};

const audienceByTab: Record<TabKey, string[]> = {
  habilitations: [
    "Personnel non electricien H0B0 / H0V",
    "Personnel charge d'operations elementaires BS et BE Manoeuvre",
    "Executants electriciens B1 / B1V",
    "Charges de travaux B2 / B2V",
    "Charges d'intervention generale BR",
    "Charges de consignation BC",
    "Personnel a multi-symboles BT selon organisation",
    "Agents de maintenance",
    "Techniciens d'intervention",
    "Encadrants techniques",
  ],
  ssi: [
    "Responsables techniques",
    "Services maintenance",
    "Responsables QHSE / securite",
    "Exploitants ERP, BUP, ICPE, IGH",
    "Personnel charge de l'exploitation du SSI",
  ],
  sprinkler: [
    "Responsables maintenance",
    "Responsables securite incendie",
    "Exploitants logistiques et industriels",
    "Techniciens d'exploitation",
    "Ingenieurs et bureaux d'etudes pour le module avance",
  ],
  incendie: [
    "Salaries d'entreprise",
    "Personnel charge de l'evacuation",
    "Equipiers de premiere intervention",
    "Encadrants et referents securite",
    "Collaborateurs a sensibiliser au risque incendie",
  ],
  sst: [
    "Salaries de tout secteur",
    "Personnel designe secouriste",
    "Collaborateurs devant porter assistance en cas d'accident",
    "Titulaires SST a recycler pour le MAC SST",
  ],
};

export default function TrainingCatalogTabsClean() {
  const [active, setActive] = useState<TabKey>("habilitations");

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Tarifs des formations
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Des formations structurees par domaine
          </h2>
          <p className="mt-4 text-slate-600">
            Tarifs indicatifs en inter-entreprises par participant et en
            intra-entreprise par groupe.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
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

        <div className="mt-8">
          <Table rows={tableRowsByTab[active]} />
          <AudienceBox items={audienceByTab[active]} />
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Les tarifs intra-entreprise sont indiques a partir de et peuvent
          varier selon le lieu d'intervention, les contraintes du site et le
          nombre de participants.
        </p>
      </div>
    </section>
  );
}

function Table({ rows }: { rows: TableRow[] }) {
  return (
    <>
      <div className="space-y-4 md:hidden">
        {rows.map((row) => (
          <article
            key={row.title}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold text-slate-900">
                {row.title}
              </h3>
              <span className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-white">
                {row.duration}
              </span>
            </div>

            <div className="mt-4 grid gap-3">
              <InfoTile label="Inter / participant" value={row.price} />
              <InfoTile label="Intra / groupe" value={row.group} />
              <InfoTile label="Participants" value={row.participants} />
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href={row.ctaHref ?? "/demande-devis"}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                {row.ctaLabel ?? "Voir la formation"}
              </Link>

              <Link
                href="/demande-devis"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Demander un devis
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="hidden overflow-hidden rounded-2xl border border-slate-200 md:block">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100 text-left">
              <tr>
                <th className="px-4 py-3 whitespace-nowrap">Formation</th>
                <th className="px-4 py-3 whitespace-nowrap">Duree</th>
                <th className="px-4 py-3 whitespace-nowrap">Inter / pers</th>
                <th className="px-4 py-3 whitespace-nowrap">Intra / groupe</th>
                <th className="px-4 py-3 whitespace-nowrap">Participants</th>
                <th className="px-4 py-3 whitespace-nowrap">Acces</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.title} className="border-t">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {row.title}
                  </td>
                  <td className="px-4 py-3 text-slate-700">{row.duration}</td>
                  <td className="px-4 py-3 text-slate-700">{row.price}</td>
                  <td className="px-4 py-3 text-slate-700">{row.group}</td>
                  <td className="px-4 py-3 text-slate-700">
                    {row.participants}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={row.ctaHref ?? "/demande-devis"}
                      className="inline-flex rounded-xl bg-slate-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-slate-800"
                    >
                      {row.ctaLabel ?? "Voir la formation"}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
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
        Public concerne
      </p>
      <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate-700 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}
