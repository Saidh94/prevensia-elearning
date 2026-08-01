"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type PendingEnrollmentItem = {
  id: string;
  status: string | null;
  access_start: string | null;
  access_end: string | null;
  profiles:
    | {
        first_name: string | null;
        last_name: string | null;
        email: string | null;
        company: string | null;
      }
    | {
        first_name: string | null;
        last_name: string | null;
        email: string | null;
        company: string | null;
      }[]
    | null;
  formation:
    | {
        id: string;
        slug: string | null;
        title: string | null;
      }
    | {
        id: string;
        slug: string | null;
        title: string | null;
      }[]
    | null;
};

type PendingResponse = {
  items?: PendingEnrollmentItem[];
  error?: string;
};

function normalizeSingle<T>(value: T | T[] | null): T | null {
  if (!value) return null;
  return Array.isArray(value) ? value[0] ?? null : value;
}

export default function AdminValidationsPage() {
  const [items, setItems] = useState<PendingEnrollmentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [validatingId, setValidatingId] = useState<string | null>(null);
  const [noteById, setNoteById] = useState<Record<string, string>>({});

  const pendingCount = useMemo(() => items.length, [items]);

  const loadItems = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/enrollments/pending", {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      const result: PendingResponse = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur de chargement des validations");
      }

      setItems(Array.isArray(result.items) ? result.items : []);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue lors du chargement."
      );
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleValidate = async (enrollmentId: string) => {
    try {
      setValidatingId(enrollmentId);
      setError(null);

      const response = await fetch("/api/enrollments/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enrollmentId,
          note: noteById[enrollmentId] ?? "",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur de validation");
      }

      setItems((prev) => prev.filter((item) => item.id !== enrollmentId));
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue lors de la validation."
      );
    } finally {
      setValidatingId(null);
    }
  };

  if (loading) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="space-y-4">
          <div className="h-8 w-72 animate-pulse rounded bg-slate-200" />
          <div className="h-32 animate-pulse rounded-3xl bg-slate-200" />
          <div className="h-48 animate-pulse rounded-3xl bg-slate-200" />
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
              Administration
            </p>
            <h1 className="mt-2 text-3xl font-bold md:text-4xl">
              Validations d’entretien
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-200 md:text-base">
              Consultez les parcours en attente d’entretien final et validez les
              dossiers pour débloquer l’attestation.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/admin/calendrier"
              className="inline-flex items-center rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Calendrier
            </Link>
            <Link
              href="/admin/compliance"
              className="inline-flex items-center rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Compliance
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-sm text-slate-300">Dossiers en attente</p>
            <p className="mt-2 text-3xl font-bold">{pendingCount}</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-sm text-slate-300">Statut ciblé</p>
            <p className="mt-2 text-3xl font-bold">completed</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-slate-900">
            Dossiers à valider
          </h2>

          <button
            type="button"
            onClick={loadItems}
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Actualiser
          </button>
        </div>

        {error ? (
          <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
            {error}
          </div>
        ) : null}

        {items.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              Aucun dossier en attente
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Il n’y a actuellement aucun parcours avec le statut
              pending_interview.
            </p>
          </div>
        ) : (
          <div className="grid gap-5">
            {items.map((item) => {
              const profile = normalizeSingle(item.profiles);
              const formation = normalizeSingle(item.formation);

              const learnerName =
                [profile?.first_name, profile?.last_name]
                  .filter(Boolean)
                  .join(" ")
                  .trim() || profile?.email || "Apprenant";

              const formationTitle =
                formation?.title || formation?.slug || "Formation";

              return (
                <article
                  key={item.id}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                          pending_interview
                        </span>

                        {profile?.company ? (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            {profile.company}
                          </span>
                        ) : null}
                      </div>

                      <h3 className="mt-4 text-2xl font-bold text-slate-900">
                        {learnerName}
                      </h3>

                      <p className="mt-2 text-sm text-slate-600">
                        Formation :{" "}
                        <span className="font-semibold text-slate-900">
                          {formationTitle}
                        </span>
                      </p>

                      {profile?.email ? (
                        <p className="mt-1 text-sm text-slate-600">
                          Email :{" "}
                          <span className="font-medium text-slate-800">
                            {profile.email}
                          </span>
                        </p>
                      ) : null}

                      <div className="mt-5">
                        <label
                          htmlFor={`note-${item.id}`}
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Note de validation
                        </label>
                        <textarea
                          id={`note-${item.id}`}
                          value={noteById[item.id] ?? ""}
                          onChange={(e) =>
                            setNoteById((prev) => ({
                              ...prev,
                              [item.id]: e.target.value,
                            }))
                          }
                          rows={3}
                          placeholder="Ex. Entretien réalisé et validation finale accordée."
                          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-500"
                        />
                      </div>
                    </div>

                    <div className="flex w-full flex-col gap-3 lg:w-auto lg:min-w-[240px]">
                      <button
                        type="button"
                        onClick={() => handleValidate(item.id)}
                        disabled={validatingId === item.id}
                        className="inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {validatingId === item.id
                          ? "Validation en cours..."
                          : "Valider l’entretien"}
                      </button>

                      {formation?.slug ? (
                        <Link
                          href={`/modules/${formation.slug}/attestation`}
                          className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                        >
                          Voir la page attestation
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