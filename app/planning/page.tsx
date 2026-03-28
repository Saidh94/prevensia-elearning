"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "../../lib/supabase/client";

type Session = {
  id: string;
  title: string;
  date_start: string;
  places_total: number;
  places_taken: number;
  is_active: boolean;
};

export default function PlanningPage() {
  const supabase = createClient();

  const [sessions, setSessions] = useState<Session[]>([]);
  const [selected, setSelected] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchSessions() {
      setLoading(true);
      setErrorMessage("");

      const { data, error } = await supabase
        .from("sessions")
        .select("id, title, date_start, places_total, places_taken, is_active")
        .eq("is_active", true)
        .order("date_start", { ascending: true });

      if (error) {
        console.error("Erreur chargement sessions:", error);
        setErrorMessage(error.message);
        setSessions([]);
        setLoading(false);
        return;
      }

      setSessions(data ?? []);
      setLoading(false);
    }

    fetchSessions();
  }, [supabase]);

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
            PREVENSIA FORMATION
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Calendrier des formations
          </h1>
          <p className="mt-3 text-slate-600">
            Cliquez sur une session pour la sélectionner puis poursuivez vers
            l’inscription.
          </p>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-600 shadow-sm">
            Chargement des sessions...
          </div>
        ) : errorMessage ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700 shadow-sm">
            Erreur de chargement des sessions : {errorMessage}
          </div>
        ) : sessions.length === 0 ? (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-800 shadow-sm">
            Aucune session active trouvée pour le moment.
          </div>
        ) : (
          <div className="grid gap-4">
            {sessions.map((session) => {
              const remaining = session.places_total - session.places_taken;
              const isSelected = selected?.id === session.id;

              return (
                <button
                  key={session.id}
                  type="button"
                  onClick={() => setSelected(session)}
                  className={`w-full rounded-2xl border p-6 text-left shadow-sm transition cursor-pointer ${
                    isSelected
                      ? "border-red-600 bg-red-50 ring-2 ring-red-200"
                      : "border-slate-200 bg-white hover:border-red-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-2xl font-bold text-slate-900">
                        {session.title}
                      </p>
                      <p className="mt-2 text-lg text-slate-700">
                        {new Date(session.date_start).toLocaleDateString("fr-FR")}
                      </p>
                      <p className="mt-3 text-base text-slate-700">
                        Places restantes :{" "}
                        <span className="font-semibold">{remaining}</span>
                      </p>
                    </div>

                    <div className="self-start">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                          isSelected
                            ? "bg-red-100 text-red-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {isSelected ? "Session sélectionnée" : "Cliquer pour choisir"}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {selected ? (
          <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 shadow-sm">
            <p className="text-lg font-bold text-slate-900">
              Vous avez sélectionné :
            </p>
            <p className="mt-3 text-xl font-semibold text-slate-900">
              {selected.title}
            </p>
            <p className="mt-1 text-slate-700">
              {new Date(selected.date_start).toLocaleDateString("fr-FR")}
            </p>

            <Link
              href={`/inscription?sessionId=${selected.id}&formation=${encodeURIComponent(
                selected.title
              )}`}
              className="mt-5 inline-flex rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              S’inscrire à cette session
            </Link>
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-slate-600 shadow-sm">
            Aucune session sélectionnée pour le moment.
          </div>
        )}
      </div>
    </main>
  );
}