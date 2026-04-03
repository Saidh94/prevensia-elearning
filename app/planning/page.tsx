"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Session = {
  id: string;
  title: string;
  date_start: string;
  format?: string | null;
  places_total: number;
  places_taken: number;
  places_restantes: number;
};

export default function PlanningPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSessions = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await fetch("/api/sessions", { cache: "no-store" });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.error || "Erreur de chargement");
        }

        if (!Array.isArray(data)) {
          throw new Error("Format de réponse invalide");
        }

        setSessions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inconnue");
        setSessions([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadSessions();
  }, []);

  const filteredSessions = useMemo(() => {
    return sessions.filter((session) => {
      const title = (session.title ?? "").toLowerCase().trim();
      const format = (session.format ?? "").toLowerCase().trim();

      const isElearningTitle =
        title.includes("h0b0") ||
        title.includes("bs / be") ||
        title.includes("bs/be") ||
        title.includes("b1 b1v b2 b2v br bc") ||
        title.includes("habilitation électrique h0b0") ||
        title.includes("habilitation electrique h0b0");

      const isElearningFormat =
        format.includes("e-learning") ||
        format.includes("elearning") ||
        format.includes("en ligne") ||
        format.includes("distanciel");

      return !isElearningTitle && !isElearningFormat;
    });
  }, [sessions]);

  useEffect(() => {
    if (filteredSessions.length > 0) {
      setSelectedId(filteredSessions[0].id);
    } else {
      setSelectedId(null);
    }
  }, [filteredSessions]);

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
            PREVENSIA FORMATION
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Sessions en présentiel
          </h1>

          <p className="mt-4 text-slate-600">
            Consultez les prochaines sessions en présentiel et réservez votre
            place ou contactez-nous pour une organisation sur mesure.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/elearning"
              className="inline-flex rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              Voir les formations e-learning
            </Link>

            <Link
              href="/demande-devis"
              className="inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        {isLoading && (
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-600 shadow-sm">
            Chargement des sessions...
          </div>
        )}

        {!isLoading && error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700 shadow-sm">
            Erreur de chargement des sessions : {error}
          </div>
        )}

        {!isLoading && !error && filteredSessions.length > 0 && (
          <div className="grid gap-4">
            {filteredSessions.map((session) => {
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
                      <p className="mt-2 text-sm text-slate-600">
                        {session.format}
                      </p>
                    ) : null}

                    <p className="mt-2 text-sm font-medium text-slate-700">
                      Places restantes :{" "}
                      <span className="font-bold text-green-700">
                        {session.places_restantes}
                      </span>
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {session.places_taken} inscrit(s) / {session.places_total}{" "}
                      places
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
        )}

        {!isLoading && !error && filteredSessions.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-600 shadow-sm">
            Aucune session présentielle disponible pour le moment.
          </div>
        )}
      </div>
    </main>
  );
}