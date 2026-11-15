"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SESSIONS,
  type FormationSession,
  placesRestantes,
} from "@/lib/formations/sessions";

type DomainKey = "Tous" | "SSI" | "CSSI" | "Sprinkler" | "ATEX";

const domainColors: Record<DomainKey, string> = {
  Tous:      "bg-slate-100 text-slate-700",
  SSI:       "bg-purple-100 text-purple-800",
  CSSI:      "bg-indigo-100 text-indigo-800",
  Sprinkler: "bg-cyan-100 text-cyan-800",
  ATEX:      "bg-amber-100 text-amber-800",
};

function formationToDomain(f: FormationSession["formation"]): DomainKey {
  if (f === "coordinateur-ssi") return "CSSI";
  if (f === "ssi")              return "SSI";
  if (f === "sprinkler")        return "Sprinkler";
  return "Tous";
}

function formationTitle(s: FormationSession): string {
  if (s.formation === "coordinateur-ssi") return "Coordination SSI";
  if (s.formation === "ssi")              return "Exploitation SSI";
  if (s.formation === "sprinkler")        return "Exploitation Sprinkler";
  return s.formation;
}

function reserverHref(s: FormationSession): string {
  if (s.formation === "coordinateur-ssi") {
    return `/demande-devis?type=coordinateur-ssi&session=${s.id}&date=${encodeURIComponent(s.dateStart)}`;
  }
  return `/inscription?sessionId=${s.id}&formation=${encodeURIComponent(
    formationTitle(s)
  )}&date=${encodeURIComponent(s.dateStart)}&format=${encodeURIComponent(
    s.formatLabel
  )}`;
}

export default function HomeSessionsList() {
  const [activeFilter, setActiveFilter] = useState<DomainKey>("Tous");

  const today = new Date().toISOString().slice(0, 10);
  const allSessions = SESSIONS.filter((s) => s.dateStart >= today).sort(
    (a, b) => a.dateStart.localeCompare(b.dateStart)
  );

  if (allSessions.length === 0) {
    return (
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
        Aucune session disponible pour le moment.
      </div>
    );
  }

  const presentDomains = Array.from(
    new Set(allSessions.map((s) => formationToDomain(s.formation)))
  ).filter((d) => d !== "Tous") as DomainKey[];

  const filteredSessions = (
    activeFilter === "Tous"
      ? allSessions
      : allSessions.filter((s) => formationToDomain(s.formation) === activeFilter)
  ).slice(0, 6);

  return (
    <div className="mt-8">
      {/* Filtre pills */}
      {presentDomains.length > 1 && (
        <div className="mb-5 flex flex-wrap gap-2">
          <FilterPill
            label="Tous"
            active={activeFilter === "Tous"}
            color={domainColors["Tous"]}
            onClick={() => setActiveFilter("Tous")}
          />
          {presentDomains.map((domain) => (
            <FilterPill
              key={domain}
              label={domain}
              active={activeFilter === domain}
              color={domainColors[domain]}
              onClick={() => setActiveFilter(domain)}
            />
          ))}
        </div>
      )}

      {filteredSessions.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-500">
          Aucune session prochaine pour ce domaine.
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredSessions.map((s) => {
            const places = placesRestantes(s);
            const domain = formationToDomain(s.formation);
            const title = formationTitle(s);

            return (
              <div
                key={s.id}
                className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:grid-cols-[180px_1fr_180px] md:items-center"
              >
                {/* Colonne date */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
                    Date
                  </p>
                  <p className="mt-1 text-lg font-bold">
                    {new Date(`${s.dateStart}T12:00:00`).toLocaleDateString(
                      "fr-FR",
                      { day: "2-digit", month: "long" }
                    )}
                  </p>
                  {s.dateDetails ? (
                    <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                      {s.dateDetails}
                    </p>
                  ) : (
                    <p className="mt-0.5 text-xs text-slate-500">
                      {new Date(`${s.dateStart}T12:00:00`).getFullYear()}
                    </p>
                  )}
                </div>

                {/* Colonne infos */}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xl font-semibold">{title}</p>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${domainColors[domain]}`}
                    >
                      {domain}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    {s.formatLabel}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {s.prixUnitaireHT.toLocaleString("fr-FR")}&nbsp;€&nbsp;HT&nbsp;/&nbsp;pers.
                  </p>
                  {places <= 3 && places > 0 && (
                    <p className="mt-2 text-sm font-semibold text-amber-700">
                      ⚠ Plus que {places} place
                      {places > 1 ? "s" : ""} disponible
                      {places > 1 ? "s" : ""} !
                    </p>
                  )}
                </div>

                {/* Colonne CTA */}
                <div className="flex justify-start md:justify-end">
                  <Link
                    href={reserverHref(s)}
                    className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Réserver
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function FilterPill({
  label,
  active,
  color,
  onClick,
}: {
  label: string;
  active: boolean;
  color: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
        active
          ? color + " ring-2 ring-current ring-offset-1"
          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
      }`}
    >
      {label}
    </button>
  );
}
