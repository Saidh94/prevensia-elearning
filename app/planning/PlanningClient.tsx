"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Session = {
  id: string;
  title: string;
  date_start: string;
  format?: string | null;
  places_total: number;
  places_taken: number;
  places_restantes: number;
};

export default function PlanningClient({ sessions }: { sessions: Session[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (sessions.length > 0) {
      setSelectedId(sessions[0].id);
    }
  }, [sessions]);

  if (sessions.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-600 shadow-sm">
        Aucune session présentielle disponible pour le moment.
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {sessions.map((session) => {
        const isSelected = selectedId === session.id;

        return (
          <div
            key={session.id}
            className={`rounded-2xl border p-5 shadow-sm transition ${
              isSelected
                ? "border-green-700 bg-green-50"
                : "border-slate-200 bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setSelectedId(session.id)}
              className="w-full text-left"
            >
              <p className="text-lg font-semibold text-slate-900">
                {session.title}
              </p>

              <p className="mt-1 text-slate-600">
                {new Date(session.date_start).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>

              {session.format ? (
                <p className="mt-2 text-sm text-slate-600">{session.format}</p>
              ) : null}

              <p className="mt-2 text-sm font-medium text-slate-700">
                Places restantes :{" "}
                <span className="font-bold text-green-700">
                  {session.places_restantes}
                </span>
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {session.places_taken} inscrit(s) / {session.places_total} places
              </p>
            </button>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setSelectedId(session.id)}
                className="inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Voir cette session
              </button>

              <Link
                href={`/inscription?sessionId=${session.id}&formation=${encodeURIComponent(
                  session.title
                )}&date=${encodeURIComponent(
                  session.date_start
                )}&format=${encodeURIComponent(
                  session.format ?? "Présentiel"
                )}`}
                className="inline-flex rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
              >
                S&apos;inscrire
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
