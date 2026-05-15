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

export default function HomeSessionsList() {
  const [homeSessions, setHomeSessions] = useState<HomeSession[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadSessions = async () => {
      try {
        const res = await fetch("/api/sessions", { cache: "no-store" });

        if (!res.ok) {
          console.error("Erreur API /api/sessions :", res.status);
          if (isMounted) setHomeSessions([]);
          return;
        }

        const text = await res.text();
        let data: unknown;

        try {
          data = JSON.parse(text);
        } catch {
          console.error("Réponse non JSON /api/sessions :", text);
          if (isMounted) setHomeSessions([]);
          return;
        }

        if (!Array.isArray(data)) {
          if (isMounted) setHomeSessions([]);
          return;
        }

        const filtered = (data as HomeSession[])
          .filter((s) => {
            const format = (s.format ?? "").toLowerCase();
            const title = (s.title ?? "").toLowerCase();
            return (
              !format.includes("e-learning") &&
              !format.includes("elearning") &&
              !title.includes("e-learning") &&
              !title.includes("elearning")
            );
          })
          .sort(
            (a, b) =>
              new Date(a.date_start).getTime() -
              new Date(b.date_start).getTime()
          )
          .slice(0, 6);

        if (isMounted) setHomeSessions(filtered);
      } catch (err) {
        console.error("Erreur chargement sessions Home :", err);
        if (isMounted) setHomeSessions([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadSessions();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
        Chargement des sessions...
      </div>
    );
  }

  if (homeSessions.length === 0) {
    return (
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
        Aucune session disponible pour le moment.
      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-4">
      {homeSessions.map((s) => {
        const places = s.places_restantes ?? s.places_total - s.places_taken;

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
              <p className="text-xl font-semibold">{s.title}</p>
              <p className="mt-1 text-sm text-slate-600">
                {s.format || "Présentiel"}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                Places restantes :{" "}
                <span className="font-bold text-red-700">{places}</span>
              </p>
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
  );
}
