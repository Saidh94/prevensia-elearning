"use client";

import Link from "next/link";
import { useState } from "react";

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

const tabs = [
  { key: "habilitations", label: "Habilitations" },
  { key: "ssi", label: "SSI" },
  { key: "sprinkler", label: "Sprinkler" },
  { key: "incendie", label: "Sécurité incendie" },
  { key: "sst", label: "SST" },
] as const;

export default function TrainingCatalogTabs() {
  const [active, setActive] = useState<TabKey>("habilitations");

  const renderContent = () => {
    switch (active) {
      case "habilitations":
        return (
          <>
            <Table
              rows={[
                {
                  title: "H0B0 e-learning",
                  duration: "4 à 6 h",
                  price: "150 € HT",
                  group: "-",
                  participants: "Accès individuel",
                  ctaHref: "/formation-habilitation-electrique",
                  ctaLabel: "Voir le parcours e-learning",
                },
                {
                  title: "H0B0 présentiel",
                  duration: "1 jour",
                  price: "180 € HT",
                  group: "À partir de 800 € HT",
                  participants: "10 max",
                  ctaHref: "/planning?search=h0b0",
                  ctaLabel: "Voir les sessions",
                },
                {
                  title: "BS / BE Manœuvre",
                  duration: "2 jours",
                  price: "350 € HT",
                  group: "À partir de 1 600 € HT",
                  participants: "10 max",
                  ctaHref: "/formation-habilitation-electrique",
                  ctaLabel: "Voir la formation",
                },
                {
                  title: "B1 / B2 / BR / BC / BE",
                  duration: "3 jours",
                  price: "500 € HT",
                  group: "À partir de 2 000 € HT",
                  participants: "10 max",
                  ctaHref: "/formation-habilitation-electrique",
                  ctaLabel: "Voir la formation",
                },
              ]}
            />
            <AudienceBox
              items={[
                "Personnel non électricien",
                "Personnel électricien",
                "Agents de maintenance",
                "Techniciens d’intervention",
                "Encadrants techniques",
              ]}
            />
          </>
        );

      case "ssi":
        return (
          <>
            <Table
              rows={[
                {
                  title: "Exploitation SSI",
                  duration: "1 jour",
                  price: "200 € HT",
                  group: "À partir de 1 500 € HT",
                  participants: "12 max",
                  ctaHref: "/formation-ssi",
                  ctaLabel: "Voir la formation",
                },
                {
                  title: "SSI avancé : architecture, réglementation et normes",
                  duration: "2 jours",
                  price: "390 € HT",
                  group: "À partir de 2 400 € HT",
                  participants: "10 max",
                  ctaHref: "/formation-ssi",
                  ctaLabel: "Voir la formation",
                },
              ]}
            />
            <AudienceBox
              items={[
                "Responsables techniques",
                "Services maintenance",
                "Responsables QHSE / sécurité",
                "Exploitants ERP, BUP, ICPE, IGH",
                "Personnel chargé de l’exploitation du SSI",
              ]}
            />
          </>
        );

      case "sprinkler":
        return (
          <>
            <Table
              rows={[
                {
                  title: "Exploitation sprinkler",
                  duration: "1 jour",
                  price: "200 € HT",
                  group: "À partir de 1 000 € HT",
                  participants: "6 max",
                  ctaHref: "/formation-sprinkler",
                  ctaLabel: "Voir la formation",
                },
                {
                  title: "Sprinkler technique",
                  duration: "2 jours",
                  price: "490 € HT",
                  group: "À partir de 2 800 € HT",
                  participants: "6 max",
                  ctaHref: "/formation-sprinkler",
                  ctaLabel: "Voir la formation",
                },
              ]}
            />
            <AudienceBox
              items={[
                "Responsables maintenance",
                "Responsables sécurité incendie",
                "Exploitants logistiques et industriels",
                "Techniciens d’exploitation",
                "Ingénieurs et bureaux d’études pour le module avancé",
              ]}
            />
          </>
        );

      case "incendie":
        return (
          <>
            <Table
              rows={[
                {
                  title: "Manipulation extincteurs",
                  duration: "0,5 jour",
                  price: "120 € HT",
                  group: "À partir de 490 € HT",
                  participants: "10 max",
                  ctaHref: "/formation-securite-incendie",
                  ctaLabel: "Voir la formation",
                },
                {
                  title: "Guide-file / serre-file / évacuation",
                  duration: "0,5 jour",
                  price: "120 € HT",
                  group: "À partir de 590 € HT",
                  participants: "10 max",
                  ctaHref: "/formation-securite-incendie",
                  ctaLabel: "Voir la formation",
                },
                {
                  title: "Équipier de Première Intervention (EPI)",
                  duration: "1 jour",
                  price: "190 € HT",
                  group: "À partir de 790 € HT",
                  participants: "10 max",
                  ctaHref: "/formation-securite-incendie",
                  ctaLabel: "Voir la formation",
                },
              ]}
            />
            <AudienceBox
              items={[
                "Salariés d’entreprise",
                "Personnel chargé de l’évacuation",
                "Équipiers de première intervention",
                "Encadrants et référents sécurité",
                "Collaborateurs à sensibiliser au risque incendie",
              ]}
            />
          </>
        );

      case "sst":
        return (
          <>
            <Table
              rows={[
                {
                  title: "SST initial",
                  duration: "2 jours",
                  price: "240 € HT",
                  group: "À partir de 1 190 € HT",
                  participants: "4 à 10",
                  ctaHref: "/formation-sst",
                  ctaLabel: "Voir la formation",
                },
                {
                  title: "MAC SST",
                  duration: "1 jour",
                  price: "130 € HT",
                  group: "À partir de 690 € HT",
                  participants: "4 à 10",
                  ctaHref: "/formation-sst",
                  ctaLabel: "Voir la formation",
                },
              ]}
            />
            <AudienceBox
              items={[
                "Salariés de tout secteur",
                "Personnel désigné secouriste",
                "Collaborateurs devant porter assistance en cas d’accident",
                "Titulaires SST à recycler pour le MAC SST",
              ]}
            />
          </>
        );
    }
  };

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

        <div className="mt-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
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

        <div className="mt-8">{renderContent()}</div>

        <p className="mt-6 text-sm text-slate-500">
          Les tarifs intra-entreprise sont indiqués à partir de et peuvent
          varier selon le lieu d’intervention, les contraintes du site et le
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
        {rows.map((r) => (
          <article
            key={r.title}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold text-slate-900">
                {r.title}
              </h3>
              <span className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-white">
                {r.duration}
              </span>
            </div>

            <div className="mt-4 grid gap-3">
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Inter / participant
                </p>
                <p className="mt-1 font-semibold text-slate-900">{r.price}</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Intra / groupe
                </p>
                <p className="mt-1 font-semibold text-slate-900">{r.group}</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Participants
                </p>
                <p className="mt-1 font-semibold text-slate-900">
                  {r.participants}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href={r.ctaHref ?? "/demande-devis"}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                {r.ctaLabel ?? "Voir la formation"}
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
                <th className="px-4 py-3 whitespace-nowrap">Durée</th>
                <th className="px-4 py-3 whitespace-nowrap">Inter / pers</th>
                <th className="px-4 py-3 whitespace-nowrap">Intra / groupe</th>
                <th className="px-4 py-3 whitespace-nowrap">Participants</th>
                <th className="px-4 py-3 whitespace-nowrap">Accès</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.title} className="border-t">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {r.title}
                  </td>
                  <td className="px-4 py-3 text-slate-700">{r.duration}</td>
                  <td className="px-4 py-3 text-slate-700">{r.price}</td>
                  <td className="px-4 py-3 text-slate-700">{r.group}</td>
                  <td className="px-4 py-3 text-slate-700">
                    {r.participants}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={r.ctaHref ?? "/demande-devis"}
                      className="inline-flex rounded-xl bg-slate-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-slate-800"
                    >
                      {r.ctaLabel ?? "Voir la formation"}
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

function AudienceBox({ items }: { items: string[] }) {
  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
        Public concerné
      </p>
      <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate-700 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}