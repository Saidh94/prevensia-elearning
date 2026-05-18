"use client";

import { useEffect, useState } from "react";

type Session = {
  id: string;
  title: string;
  date_start: string;
  format?: string | null;
  places_total: number;
  places_taken: number;
  places_restantes?: number;
};

export function SessionsCapacityWidget() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/sessions", { cache: "no-store" })
      .then((r) => r.json())
      .then((data: unknown) => {
        if (Array.isArray(data)) {
          setSessions(
            (data as Session[])
              .sort(
                (a, b) =>
                  new Date(a.date_start).getTime() -
                  new Date(b.date_start).getTime()
              )
              .slice(0, 30)
          );
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <p className="text-sm text-slate-500">Chargement des sessions…</p>
    );
  }

  if (sessions.length === 0) {
    return (
      <p className="text-sm text-slate-500">Aucune session disponible.</p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] border-separate border-spacing-y-1 text-sm">
        <thead>
          <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
            <th className="pb-3 pr-4">Session</th>
            <th className="pb-3 pr-4 whitespace-nowrap">Date</th>
            <th className="pb-3 pr-4">Format</th>
            <th className="pb-3 pr-4 text-center">Inscrits</th>
            <th className="pb-3 pr-4 text-center">Total</th>
            <th className="pb-3 text-center">Remplissage</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((s) => {
            const restantes =
              s.places_restantes ?? s.places_total - s.places_taken;
            const fillPct =
              s.places_total > 0
                ? Math.round((s.places_taken / s.places_total) * 100)
                : 0;
            const isAlmostFull = restantes <= 3;
            const isFull = restantes === 0;

            return (
              <tr key={s.id} className="rounded-xl bg-slate-50 text-slate-700">
                <td className="rounded-l-xl py-3 pl-3 pr-4 font-medium text-slate-900">
                  {s.title}
                </td>
                <td className="py-3 pr-4 whitespace-nowrap text-slate-600">
                  {new Date(s.date_start).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </td>
                <td className="py-3 pr-4 text-slate-500">
                  {s.format ?? "Présentiel"}
                </td>
                <td className="py-3 pr-4 text-center font-semibold text-slate-900">
                  {s.places_taken}
                </td>
                <td className="py-3 pr-4 text-center text-slate-500">
                  {s.places_total}
                </td>
                <td className="rounded-r-xl py-3 pr-3 text-center">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      isFull
                        ? "bg-red-100 text-red-700"
                        : isAlmostFull
                          ? "bg-amber-100 text-amber-700"
                          : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {isFull ? "Complet" : `${restantes} restante${restantes > 1 ? "s" : ""}`}
                    <span className="opacity-70">({fillPct}%)</span>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
