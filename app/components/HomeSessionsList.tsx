"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type HomeSession = {
  id: string;
  title: string;
  date_start: string;
  format?: string | null;
  places_total: number;
  places_taken: number;
  places_restantes?: number;
};

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
  Tous:         "bg-slate-100 text-slate-700",
  Habilitation: "bg-blue-100 text-blue-800",
  Incendie:     "bg-orange-100 text-orange-800",
  Sprinkler:    "bg-cyan-100 text-cyan-800",
  SSI:          "bg-purple-100 text-purple-800",
  SST:          "bg-green-100 text-green-800",
  ATEX:         "bg-amber-100 text-amber-800",
  SSIAP:        "bg-red-100 text-red-800",
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

export default function HomeSessionsList() {
  const [allSessions, setAllSessions] = useState<HomeSession[]>([]);
  const [loading, setLoading]         = useState(true);
  const [activeFilter, setActiveFilter] = useState<DomainKey>("Tous");

  useEffect(() => {
    let isMounted = true;

    const loadSessions = async () => {
      try {
        const res = await fetch("/api/sessions", { cache: "no-store" });
        if (!res.ok) { if (isMounted) setAllSessions([]); return; }

        const text = await res.text();
        let data: unknown;
        try { data = JSON.parse(text); } catch { if (isMounted) setAllSessions([]); return; }
        if (!Array.isArray(data)) { if (isMounted) setAllSessions([]); return; }

        const filtered = (data as HomeSession[])
          .filter((s) => {
            const format = (s.format ?? "").toLowerCase();
            const title  = (s.title ?? "").toLowerCase();
            const isElearning =
              format.includes("e-learning") ||
              format.includes("elearning") ||
              title.includes("e-learning") ||
              title.includes("elearning");
            // H0B0 et BS/BE Manœuvre sont quasi 100% e-learning — exclus de la homepage
            const isQuasiElearning =
              title.includes("h0b0") ||
              title.includes("h0 b0") ||
              title.includes("habilitation électrique h0") ||
              title.includes("habilitation electrique h0") ||
              title.includes("bs / be") ||
              title.includes("bs/be") ||
              title.includes("bs et be manoeuvre");
            return !isElearning && !isQuasiElearning;
          })
          .sort((a, b) => new Date(a.date_start).getTime() - new Date(b.date_start).getTime())
          .slice(0, 24); // buffer pour filtrage

        if (isMounted) setAllSessions(filtered);
      } catch (err) {
        console.error("Erreur chargement sessions Home :", err);
        if (isMounted) setAllSessions([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadSessions();
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
        Chargement des sessions...
      </div>
    );
  }

  if (allSessions.length === 0) {
    return (
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
        Aucune session disponible pour le moment.
      </div>
    );
  }

  // Domaines présents
  const presentDomains = Array.from(
    new Set(allSessions.map((s) => getDomain(s.title)))
  ).filter((d) => d !== "Tous") as DomainKey[];

  const filteredSessions = (
    activeFilter === "Tous"
      ? allSessions
      : allSessions.filter((s) => getDomain(s.title) === activeFilter)
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

      {/* Sessions */}
      {filteredSessions.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-500">
          Aucune session prochaine pour ce domaine.
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredSessions.map((s) => {
            const places = s.places_restantes ?? s.places_total - s.places_taken;
            const domain = getDomain(s.title);

            return (
              <div
                key={s.id}
                className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:grid-cols-[180px_1fr_180px] md:items-center"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
                    Date
                  </p>
                  <p className="mt-1 text-lg font-bold">
                    {new Date(s.date_start).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xl font-semibold">{s.title}</p>
                    {domain !== "Tous" && (
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${domainColors[domain]}`}
                      >
                        {domain}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    {s.format || "Présentiel"}
                  </p>
                  {places <= 3 && (
                    <p className="mt-2 text-sm font-semibold text-amber-700">
                      ⚠ Plus que {places} place{places > 1 ? "s" : ""} disponible{places > 1 ? "s" : ""} !
                    </p>
                  )}
                </div>

                <div className="flex justify-start md:justify-end">
                  <Link
                    href={`/inscription?sessionId=${s.id}&formation=${encodeURIComponent(
                      s.title
                    )}&date=${encodeURIComponent(
                      s.date_start
                    )}&format=${encodeURIComponent(s.format ?? "Présentiel")}`}
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
