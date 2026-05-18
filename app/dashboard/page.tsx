"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import LogoutButton from "@/app/components/logout-button";

type DashboardFormation = {
  enrollment_id: string;
  formation_id: string | null;
  slug: string | null;
  title: string | null;
  description: string | null;
  duration_hours: number | null;
  elearning_duration: string | null;
  mode: string | null;
  status: "not_started" | "in_progress" | "pending_interview" | "completed" | string;
  payment_status: "pending" | "paid" | "failed" | "refunded" | null;
  completion_percent: number;
  completed: boolean;
  last_module_slug: string | null;
  updated_at: string | null;
  access_start: string | null;
  access_end: string | null;
  stripe_invoice_url: string | null;
  stripe_invoice_pdf: string | null;
  // Quiz
  quiz_attempts_count: number;
  quiz_best_score_percent: number | null;
  quiz_passed: boolean;
  quiz_passed_at: string | null;
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
    role: string | null;
  } | null;
  formations: DashboardFormation[];
};

/** Retourne le statut enrichi (7 états) */
function getStatusConfig(f: DashboardFormation): {
  label: string;
  color: string;
} {
  if (f.status === "completed") {
    return { label: "✅ Parcours validé", color: "bg-emerald-50 text-emerald-700" };
  }
  if (f.status === "pending_interview") {
    return { label: "📅 Entretien à planifier", color: "bg-blue-50 text-blue-700" };
  }
  if (f.quiz_passed) {
    return { label: "🎯 Quiz réussi", color: "bg-indigo-50 text-indigo-700" };
  }
  if (f.completion_percent >= 100) {
    return { label: "📝 Quiz à passer", color: "bg-purple-50 text-purple-700" };
  }
  if (f.completion_percent > 0) {
    return { label: "▶️ En cours", color: "bg-amber-50 text-amber-700" };
  }
  return { label: "⏳ Non commencé", color: "bg-slate-100 text-slate-600" };
}

/** Retourne le nombre de jours avant expiration de l'accès */
function daysUntilExpiry(accessEnd: string | null): number | null {
  if (!accessEnd) return null;
  const end = new Date(accessEnd);
  const now = new Date();
  const diff = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return diff;
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

  const isAdmin = data?.profile?.role === "admin";

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
  const completedCount = formations.filter((f) => f.status === "completed").length;
  const inProgressCount = formations.filter(
    (f) =>
      f.status === "in_progress" ||
      f.status === "pending_interview" ||
      (f.completion_percent > 0 && f.completion_percent < 100)
  ).length;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Header */}
      <section className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
              Espace apprenant
            </p>
            <h1 className="mt-2 text-3xl font-bold md:text-4xl">
              Bonjour {firstName}
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-200 md:text-base">
              Retrouvez vos parcours e-learning, votre progression et l'accès à vos
              modules de formation PREVENSIA FORMATION.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Retour au site
            </Link>

            <Link
              href="/mot-de-passe"
              className="inline-flex items-center rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Mot de passe
            </Link>

            {isAdmin ? (
              <Link
                href="/admin"
                className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Administration
              </Link>
            ) : null}

            <LogoutButton />
          </div>
        </div>

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

      {/* Formations */}
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

              const durationLabel =
                formation.elearning_duration ||
                (formation.duration_hours ? `${formation.duration_hours} h` : null);

              const showBooking = formation.status === "pending_interview";
              const showAttestation = formation.status === "completed";
              const statusConfig = getStatusConfig(formation);

              // Alerte expiration accès (≤ 7 jours)
              const daysLeft = daysUntilExpiry(formation.access_end);
              const isExpiringSoon =
                daysLeft !== null && daysLeft >= 0 && daysLeft <= 7;
              const isExpired = daysLeft !== null && daysLeft < 0;

              return (
                <article
                  key={formation.enrollment_id}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  {/* Alerte expiration */}
                  {isExpiringSoon && !showAttestation ? (
                    <div className="mb-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                      <span>⚠️</span>
                      <span>
                        Votre accès expire dans{" "}
                        <strong>{daysLeft} jour{daysLeft !== 1 ? "s" : ""}</strong>.
                        Contactez-nous pour renouveler.
                      </span>
                    </div>
                  ) : isExpired && !showAttestation ? (
                    <div className="mb-4 flex items-center gap-2 rounded-xl border border-red-300 bg-red-100 px-4 py-3 text-sm font-medium text-red-800">
                      <span>🔒</span>
                      <span>Votre accès à cette formation est expiré.</span>
                    </div>
                  ) : null}

                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
                          {formation.mode || "e-learning"}
                        </span>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusConfig.color}`}>
                          {statusConfig.label}
                        </span>
                        {formation.payment_status === "paid" ? (
                          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                            Payé
                          </span>
                        ) : formation.payment_status === "pending" ? (
                          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                            Paiement en attente
                          </span>
                        ) : formation.payment_status === "failed" ? (
                          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                            Paiement échoué
                          </span>
                        ) : null}
                        {durationLabel ? (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            {durationLabel}
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

                      {/* Barre de progression */}
                      <div className="mt-5">
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="font-medium text-slate-700">
                            Progression des modules
                          </span>
                          <span className="font-semibold text-slate-900">
                            {progress} %
                          </span>
                        </div>

                        <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`h-full rounded-full transition-all ${
                              progress >= 100 ? "bg-emerald-500" : "bg-slate-900"
                            }`}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Résultats quiz */}
                      {formation.quiz_attempts_count > 0 ? (
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          <div className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold ${
                            formation.quiz_passed
                              ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                              : "border border-amber-200 bg-amber-50 text-amber-700"
                          }`}>
                            <span>{formation.quiz_passed ? "✅" : "❌"}</span>
                            <span>
                              Quiz — meilleur score :{" "}
                              <strong>{formation.quiz_best_score_percent ?? 0} %</strong>
                            </span>
                          </div>
                          <span className="text-xs text-slate-500">
                            {formation.quiz_attempts_count} tentative
                            {formation.quiz_attempts_count > 1 ? "s" : ""}
                            {formation.quiz_passed && formation.quiz_passed_at
                              ? ` · réussi le ${new Date(
                                  formation.quiz_passed_at
                                ).toLocaleDateString("fr-FR")}`
                              : ""}
                          </span>
                        </div>
                      ) : null}

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
                            ? `jusqu'au ${new Date(
                                formation.access_end
                              ).toLocaleDateString("fr-FR")}`
                            : "ouvert"}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex w-full flex-col gap-3 lg:w-auto lg:min-w-[220px]">
                      <Link
                        href={safeSlug ? `/modules/${safeSlug}` : "/dashboard"}
                        className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                      >
                        {progress >= 100
                          ? "Voir le module"
                          : progress > 0
                          ? "Reprendre"
                          : "Commencer"}
                      </Link>

                      <Link
                        href={safeSlug ? `/modules/${safeSlug}/quiz` : "/dashboard"}
                        className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                      >
                        {formation.quiz_passed ? "Revoir le quiz" : "Accéder au quiz"}
                      </Link>

                      {showBooking ? (
                        <Link
                          href="/booking"
                          className="inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                        >
                          📅 Planifier mon entretien
                        </Link>
                      ) : showAttestation ? (
                        <div className="flex w-full items-center justify-center rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
                          ✅ Parcours validé
                        </div>
                      ) : (
                        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-700">
                          L'entretien sera disponible après réussite du quiz.
                        </div>
                      )}

                      {showAttestation ? (
                        <Link
                          href={safeSlug ? `/modules/${safeSlug}/attestation` : "/dashboard"}
                          className="inline-flex items-center justify-center rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-100"
                        >
                          📄 Voir l'attestation
                        </Link>
                      ) : null}

                      {formation.payment_status === "paid" && formation.stripe_invoice_url ? (
                        <a
                          href={formation.stripe_invoice_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                        >
                          🧾 Télécharger la facture
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Support */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Besoin d'aide ?</h2>
            <p className="mt-1 text-sm text-slate-600">
              Notre équipe pédagogique est disponible pour vous accompagner.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:contact@prevensia.fr"
              className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              ✉️ Contacter le support
            </a>
            <Link
              href="/faq"
              className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
