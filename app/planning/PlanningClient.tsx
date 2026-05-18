"use client";

import Link from "next/link";
import { useState } from "react";

type Session = {
  id: string;
  title: string;
  date_start: string;
  format?: string | null;
  places_total: number;
  places_taken: number;
  places_restantes: number;
};

// ─── Domaine detection ────────────────────────────────────────────────────────

type DomainKey =
  | "Tous"
  | "Habilitation"
  | "Incendie"
  | "Sprinkler"
  | "SSI"
  | "SST"
  | "ATEX"
  | "SSIAP";

const domainColors: Record<DomainKey, string> = {
  Tous:        "bg-slate-100 text-slate-700",
  Habilitation:"bg-blue-100 text-blue-800",
  Incendie:    "bg-orange-100 text-orange-800",
  Sprinkler:   "bg-cyan-100 text-cyan-800",
  SSI:         "bg-purple-100 text-purple-800",
  SST:         "bg-green-100 text-green-800",
  ATEX:        "bg-amber-100 text-amber-800",
  SSIAP:       "bg-red-100 text-red-800",
};

function getDomain(title: string): DomainKey {
  const t = title.toLowerCase();
  if (t.includes("ssiap"))                                                   return "SSIAP";
  if (t.includes("sprinkler"))                                               return "Sprinkler";
  if (t.includes("atex"))                                                    return "ATEX";
  if (t.includes("sst") || t.includes("secouriste"))                        return "SST";
  if (t.includes("ssi"))                                                     return "SSI";
  if (
    t.includes("extincteur") || t.includes("guide-file") ||
    t.includes("serre-file") || t.includes("epi") ||
    t.includes("équipier") || t.includes("incendie")
  )                                                                          return "Incendie";
  if (
    t.includes("h0") || t.includes("b0") || t.includes("habilitation") ||
    t.includes("b1") || t.includes("b2") || t.includes("br") ||
    t.includes("bc") || t.includes("bs") || t.includes("be man")
  )                                                                          return "Habilitation";
  return "Tous";
}

// ─── Composant ────────────────────────────────────────────────────────────────

export default function PlanningClient({ sessions }: { sessions: Session[] }) {
  const [activeFilter, setActiveFilter] = useState<DomainKey>("Tous");

  if (sessions.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-600 shadow-sm">
        Aucune session présentielle disponible pour le moment.
      </div>
    );
  }

  // Domaines présents dans les sessions
  const presentDomains = Array.from(
    new Set(sessions.map((s) => getDomain(s.title)))
  ).filter((d) => d !== "Tous");

  const filteredSessions =
    activeFilter === "Tous"
      ? sessions
      : sessions.filter((s) => getDomain(s.title) === activeFilter);

  return (
    <div>
      {/* Filtre par domaine */}
      <div className="mb-6 flex flex-wrap gap-2">
        <FilterPill
          label="Tous"
          active={activeFilter === "Tous"}
          color={domainColors["Tous"]}
          onClick={() => setActiveFilter("Tous")}
          count={sessions.length}
        />
        {presentDomains.map((domain) => (
          <FilterPill
            key={domain}
            label={domain}
            active={activeFilter === domain}
            color={domainColors[domain]}
            onClick={() => setActiveFilter(domain)}
            count={sessions.filter((s) => getDomain(s.title) === domain).length}
          />
        ))}
      </div>

      {/* Liste */}
      {filteredSessions.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-500">
          Aucune session disponible pour ce domaine.
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredSessions.map((session) => {
            const domain = getDomain(session.title);
            return (
              <div
                key={session.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-lg font-semibold text-slate-900">
                        {session.title}
                      </p>
                      {domain !== "Tous" && (
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${domainColors[domain]}`}
                        >
                          {domain}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium text-slate-600">
                      {new Date(session.date_start).toLocaleDateString("fr-FR", {
                        weekday: "long",
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    {session.format && (
                      <p className="mt-1 text-sm text-slate-500">{session.format}</p>
                    )}
                    {session.places_restantes <= 3 && (
                      <p className="mt-2 text-sm font-semibold text-amber-700">
                        ⚠ Plus que {session.places_restantes} place{session.places_restantes > 1 ? "s" : ""} disponible{session.places_restantes > 1 ? "s" : ""} !
                      </p>
                    )}
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-2">
                    <Link
                      href={`/inscription?sessionId=${session.id}&formation=${encodeURIComponent(
                        session.title
                      )}&date=${encodeURIComponent(
                        session.date_start
                      )}&format=${encodeURIComponent(session.format ?? "Présentiel")}`}
                      className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                      S&apos;inscrire
                    </Link>
                  </div>
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
  count,
}: {
  label: string;
  active: boolean;
  color: string;
  onClick: () => void;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
        active
          ? color + " ring-2 ring-current ring-offset-1"
          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
      }`}
    >
      {label}
      <span
        className={`rounded-full px-1.5 py-0.5 text-xs font-semibold ${
          active ? "bg-white/60" : "bg-slate-200 text-slate-500"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
