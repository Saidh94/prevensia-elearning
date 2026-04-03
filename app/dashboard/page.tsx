"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type DashboardFormation = {
  enrollment_id: string;
  formation_id: string | null;
  slug: string | null;
  title: string | null;
  description: string | null;
  duration_hours: number | null;
  mode: string | null;
  status: "not_started" | "in_progress" | "completed" | string;
  completion_percent: number;
  completed: boolean;
  last_module_slug: string | null;
  updated_at: string | null;
  access_start: string | null;
  access_end: string | null;
};

type DashboardResponse = {
  user: {
    id: string;
    email: string | null;
  };
  profile: {
    id: string;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    phone: string | null;
    company: string | null;
  } | null;
  formations: DashboardFormation[];
};

function getStatusLabel(status: string, completionPercent: number) {
  if (status === "completed" || completionPercent >= 100) return "Terminé";
  if (status === "in_progress" || completionPercent > 0) return "En cours";
  return "Non commencé";
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadDashboard() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/dashboard", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        const result = await response.json();

        if (!response.ok) {
          if (response.status === 401) {
            window.location.href = "/connexion";
            return;
          }

          throw new Error(result.error || "Erreur de chargement du dashboard");
        }

        if (mounted) {
          setData(result);
        }
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : "Une erreur est survenue lors du chargement.";
        if (mounted) {
          setError(message);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadDashboard();

    return () => {
      mounted = false;
    };
  }, []);

  const firstName = useMemo(() => {
    if (data?.profile?.first_name?.trim()) return data.profile.first_name.trim();
    if (data?.user?.email) return data.user.email.split("@")[0];
    return "Apprenant";
  }, [data]);

  if (loading) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="space-y-4">
          <div className="h-8 w-64 animate-pulse rounded bg-slate-200" />
          <div className="h-32 animate-pulse rounded-3xl bg-slate-200" />
          <div className="h-48 animate-pulse rounded-3xl bg-slate-200" />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <h1 className="text-2xl font-bold text-slate-900">
            Impossible de charger votre espace apprenant
          </h1>
          <p className="mt-3 text-sm text-slate-700">{error}</p>
          <div className="mt-5">
            <Link
              href="/connexion"
              className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Aller à la connexion
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const formations = data?.formations ?? [];
  const completedCount = formations.filter((f) => f.completed).length;
  const inProgressCount = formations.filter(
    (f) => f.completion_percent > 0 && f.completion_percent < 100
  ).length;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm md:p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
          Espace apprenant
        </p>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">
          Bonjour {firstName}
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-200 md:text-base">
          Retrouvez vos parcours e-learning, votre progression et l’accès à vos
          modules de formation PREVENSIA FORMATION.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-sm text-slate-300">Formations attribuées</p>
            <p className="mt-2 text-3xl font-bold">{formations.length}</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-sm text-slate-300">En cours</p>
            <p className="mt-2 text-3xl font-bold">{inProgressCount}</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-sm text-slate-300">Terminées</p>
            <p className="mt-2 text-3xl font-bold">{completedCount}</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-slate-900">Mes formations</h2>
          <Link
            href="/elearning"
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Voir le catalogue e-learning
          </Link>
        </div>

        {formations.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              Aucune formation disponible pour le moment
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Votre espace apprenant est actif, mais aucun parcours ne vous a
              encore été attribué.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/elearning"
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Découvrir les formations
              </Link>
              <Link
                href="/demande-devis"
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-5">
            {formations.map((formation) => {
              const safeSlug = formation.slug ?? "";
              const progress = Math.max(
                0,
                Math.min(100, formation.completion_percent ?? 0)
              );

              return (
                <article
                  key={formation.enrollment_id}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
                          {formation.mode || "e-learning"}
                        </span>
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                          {getStatusLabel(formation.status, progress)}
                        </span>
                        {formation.duration_hours ? (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            {formation.duration_hours} h
                          </span>
                        ) : null}
                      </div>

                      <h3 className="mt-4 text-2xl font-bold text-slate-900">
                        {formation.title || "Formation"}
                      </h3>

                      {formation.description ? (
                        <p className="mt-2 max-w-3xl text-sm text-slate-600">
                          {formation.description}
                        </p>
                      ) : null}

                      <div className="mt-5">
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="font-medium text-slate-700">
                            Progression
                          </span>
                          <span className="font-semibold text-slate-900">
                            {progress} %
                          </span>
                        </div>

                        <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-slate-900 transition-all"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="mt-4 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                        <div>
                          <span className="font-semibold text-slate-800">
                            Dernier module :
                          </span>{" "}
                          {formation.last_module_slug || "Aucun pour le moment"}
                        </div>

                        <div>
                          <span className="font-semibold text-slate-800">
                            Accès :
                          </span>{" "}
                          {formation.access_end
                            ? `jusqu’au ${new Date(
                                formation.access_end
                              ).toLocaleDateString("fr-FR")}`
                            : "ouvert"}
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full flex-col gap-3 lg:w-auto lg:min-w-[220px]">
  <Link
    href={safeSlug ? `/modules/${safeSlug}` : "/dashboard"}
    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
  >
    {progress > 0 ? "Reprendre" : "Commencer"}
  </Link>

  <Link
    href={safeSlug ? `/modules/${safeSlug}/quiz` : "/dashboard"}
    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
  >
    Accéder au quiz
  </Link>

  <Link
    href="/booking"
    className="inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
  >
    Planifier mon entretien
  </Link>

  {formation.completed ? (
    <Link
      href={safeSlug ? `/modules/${safeSlug}/attestation` : "/dashboard"}
      className="inline-flex items-center justify-center rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-100"
    >
      Voir l’attestation
    </Link>
  ) : null}
</div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}