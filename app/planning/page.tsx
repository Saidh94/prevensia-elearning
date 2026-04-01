"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Session = {
  id: string;
  title: string;
  date_start: string;
  location?: string | null;
  max_places?: number | null;
  reserved_count?: number;
  places_restantes?: number;
};

export default function PlanningPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [selected, setSelected] = useState<Session | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSessions = async () => {
      try {
        const res = await fetch("/api/sessions", { cache: "no-store" });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Erreur de chargement");
        }

        setSessions(data);

        if (data.length > 0) {
          setSelected(data[0]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inconnue");
      }
    };

    loadSessions();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
            PREVENSIA FORMATION
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Calendrier des formations
          </h1>
          <p className="mt-4 text-slate-600">
            Cliquez sur une session pour la sélectionner puis poursuivez vers l'inscription.
          </p>
        </div>

        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700 shadow-sm">
            Erreur de chargement des sessions : {error}
          </div>
        )}

        {!error && sessions.length > 0 && (
          <div className="grid gap-4">
            {sessions.map((session) => (
              <button
                key={session.id}
                type="button"
                onClick={() => setSelected(session)}
                className={`rounded-2xl border p-5 text-left shadow-sm transition ${
                  selected?.id === session.id
                    ? "border-green-700 bg-green-50"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <p className="text-lg font-semibold text-slate-900">
                  {session.title}
                </p>
                <p className="mt-1 text-slate-600">
                  {new Date(session.date_start).toLocaleDateString("fr-FR")}
                </p>

                {session.location && (
                  <p className="mt-1 text-sm text-slate-500">{session.location}</p>
                )}

                <p className="mt-2 text-sm font-medium text-slate-700">
                  Places restantes :{" "}
                  <span className="font-bold text-green-700">
                    {session.places_restantes ?? 0}
                  </span>
                </p>
              </button>
            ))}
          </div>
        )}

        {selected ? (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">
              Session sélectionnée
            </p>
            <p className="mt-3 text-xl font-semibold text-slate-900">
              {selected.title}
            </p>
            <p className="mt-1 text-slate-700">
              {new Date(selected.date_start).toLocaleDateString("fr-FR")}
            </p>

            {selected.location && (
              <p className="mt-1 text-sm text-slate-500">{selected.location}</p>
            )}

            <p className="mt-3 text-sm font-medium text-slate-700">
              Places restantes :{" "}
              <span className="font-bold text-green-700">
                {selected.places_restantes ?? 0}
              </span>
            </p>

            <Link
              href={`/inscription?sessionId=${selected.id}&formation=${encodeURIComponent(
                selected.title
              )}`}
              className="mt-5 inline-flex rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              S&apos;inscrire à cette session
            </Link>
          </div>
        ) : (
          !error && (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-slate-600 shadow-sm">
              Aucune session sélectionnée pour le moment.
            </div>
          )
        )}
      </div>
    </main>
  );
}