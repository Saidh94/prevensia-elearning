"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Session = {
  date: string;
  title: string;
  format: string;
  places: string;
};

export default function Planning() {
  const sessions: Session[] = [
    {
      date: "10 juin 2026",
      title: "H0B0",
      format: "E-learning accompagné",
      places: "Places disponibles",
    },
    {
      date: "18 juin 2026",
      title: "BS / BE Manœuvre",
      format: "E-learning accompagné",
      places: "Places disponibles",
    },
    {
      date: "02 juillet 2026",
      title: "Manipulation extincteurs",
      format: "Présentiel",
      places: "Places disponibles",
    },
    {
      date: "09 juillet 2026",
      title: "Guide-file / Serre-file",
      format: "Présentiel",
      places: "Places limitées",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedSession = useMemo(() => {
    if (selectedIndex === null) return null;
    return sessions[selectedIndex];
  }, [selectedIndex, sessions]);

  const inscriptionHref = selectedSession
    ? `/inscription?formation=${encodeURIComponent(
        selectedSession.title
      )}&session=${encodeURIComponent(selectedSession.date)}`
    : "/inscription";

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
            PREVENSIA FORMATION
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Calendrier des formations
          </h1>
          <p className="mt-3 text-slate-600">
            Sélectionnez une date pour orienter directement le participant vers
            la page d’inscription avec la session préremplie.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4">
            {sessions.map((session, index) => {
              const isSelected = selectedIndex === index;

              return (
                <button
                  key={`${session.date}-${session.title}`}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`rounded-2xl border p-5 text-left transition ${
                    isSelected
                      ? "border-red-600 bg-red-50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-red-200 hover:shadow-sm"
                  }`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-slate-900">
                        {session.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        {session.format}
                      </p>
                    </div>

                    <div className="sm:text-right">
                      <p className="text-sm font-semibold uppercase tracking-[0.1em] text-red-700">
                        Date
                      </p>
                      <p className="mt-1 font-medium text-slate-900">
                        {session.date}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {session.places}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="self-start rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Session sélectionnée
            </p>

            {selectedSession ? (
              <>
                <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 p-4">
                  <p className="font-semibold text-slate-900">
                    {selectedSession.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Date : {selectedSession.date}
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Format : {selectedSession.format}
                  </p>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href={inscriptionHref}
                    className="inline-flex items-center justify-center rounded-2xl bg-red-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
                  >
                    S’inscrire à cette session
                  </Link>

                  <Link
                    href="/demande-devis"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-red-300 hover:text-red-700"
                  >
                    Demander un devis
                  </Link>
                </div>
              </>
            ) : (
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                Aucune session sélectionnée pour le moment.
              </div>
            )}

            <div className="mt-6 border-t border-slate-200 pt-6">
              <Link
                href="/e-learning-habilitation-electrique"
                className="text-sm font-semibold text-red-700 underline underline-offset-2"
              >
                Voir la page e-learning habilitation électrique
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}