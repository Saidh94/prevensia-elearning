"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type QuizResult = {
  slug: string;
  score: number;
  total: number;
  passingScore: number;
  success: boolean;
  completedAt: string;
};

type FormationRecord = {
  slug: string | null;
  title?: string | null;
};

type EnrollmentRecord = {
  id: string;
  status: string | null;
  formation: FormationRecord[] | FormationRecord | null;
};

type PdfPayload = {
  enrollmentId?: string;
  formation: string;
  date: string;
  score?: string;
  total?: string;
  passingScore?: string;
  scorePercent?: string;
  passed?: string;
};

function normalizeFormation(
  formation: EnrollmentRecord["formation"]
): FormationRecord | null {
  if (!formation) return null;
  if (Array.isArray(formation)) return formation[0] ?? null;
  return formation;
}

function normalizeStatus(value: string | null | undefined): string {
  return (value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, "_");
}

export default function AttestationPage() {
  const params = useParams();
  const slugParam = params.slug;
  const formRef = useRef<HTMLFormElement | null>(null);

  const slug = useMemo(() => {
    if (Array.isArray(slugParam)) {
      return (slugParam[0] ?? "").toLowerCase();
    }

    return String(slugParam ?? "").toLowerCase();
  }, [slugParam]);

  const supabase = useMemo(() => createClient(), []);

  const [loading, setLoading] = useState(true);
  const [accessError, setAccessError] = useState<string | null>(null);
  const [enrollmentStatus, setEnrollmentStatus] = useState<string | null>(null);
  const [payload, setPayload] = useState<PdfPayload | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setAccessError("Formation introuvable.");
      return;
    }

    const loadData = async () => {
      try {
        setLoading(true);
        setAccessError(null);

        let quizResult: QuizResult | null = null;
        const storageKey = `quiz-result-${slug}`;
        const raw = localStorage.getItem(storageKey);

        if (raw) {
          try {
            quizResult = JSON.parse(raw) as QuizResult;
          } catch {
            quizResult = null;
          }
        }

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          setAccessError("Utilisateur non authentifie.");
          return;
        }

        // Check if user is admin — admins bypass enrollment requirement
        const { data: profileData } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

        const isAdmin = profileData?.role === "admin";

        const { data, error } = await supabase
          .from("enrollments")
          .select(
            `
            id,
            status,
            formation:formations (
              slug,
              title
            )
          `
          )
          .eq("user_id", user.id);

        if (error) {
          throw error;
        }

        const enrollments = Array.isArray(data)
          ? (data as EnrollmentRecord[])
          : [];

        const matchedEnrollment = enrollments.find((item) => {
          const formation = normalizeFormation(item.formation);
          return formation?.slug?.toLowerCase() === slug;
        });

        // Admins can access the attestation even without an enrollment record
        if (!matchedEnrollment && !isAdmin) {
          setAccessError("Aucune inscription trouvee pour cette formation.");
          return;
        }

        const matchedFormation = matchedEnrollment
          ? normalizeFormation(matchedEnrollment.formation)
          : null;
        const normalizedEnrollmentStatus = matchedEnrollment
          ? normalizeStatus(matchedEnrollment.status)
          : "completed"; // admins are treated as completed

        setEnrollmentStatus(normalizedEnrollmentStatus);

        if (normalizedEnrollmentStatus !== "completed") {
          return;
        }

        const completedAt = quizResult?.completedAt
          ? new Date(quizResult.completedAt).toLocaleDateString("fr-FR")
          : new Date().toLocaleDateString("fr-FR");

        const computedPercent =
          typeof quizResult?.score === "number" &&
          typeof quizResult?.total === "number" &&
          quizResult.total > 0
            ? Math.round((quizResult.score / quizResult.total) * 100)
            : undefined;

        setPayload({
          enrollmentId: matchedEnrollment?.id ?? undefined,
          formation:
            matchedFormation?.title ||
            (slug === "h0b0"
              ? "Habilitation electrique H0B0"
              : slug.toUpperCase()),
          date: completedAt,
          score:
            typeof quizResult?.score === "number"
              ? String(quizResult.score)
              : undefined,
          total:
            typeof quizResult?.total === "number"
              ? String(quizResult.total)
              : undefined,
          passingScore:
            typeof quizResult?.passingScore === "number"
              ? String(quizResult.passingScore)
              : undefined,
          scorePercent:
            typeof computedPercent === "number"
              ? String(computedPercent)
              : undefined,
          passed:
            typeof quizResult?.success === "boolean"
              ? String(quizResult.success)
              : undefined,
        });
      } catch (error) {
        console.error("Erreur chargement attestation :", error);
        setAccessError(
          "Impossible de preparer l'attestation de reussite pour cette formation."
        );
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug, supabase]);

  useEffect(() => {
    if (!payload || submitted || loading || enrollmentStatus !== "completed") {
      return;
    }

    const timeout = window.setTimeout(() => {
      formRef.current?.requestSubmit();
      setSubmitted(true);
    }, 150);

    return () => window.clearTimeout(timeout);
  }, [enrollmentStatus, loading, payload, submitted]);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Attestation
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Preparation du document PDF
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Verification de votre validation finale et preparation du titre
            d&apos;habilitation en cours...
          </p>
        </div>
      </main>
    );
  }

  if (accessError) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-red-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
            Attestation
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Impossible de preparer votre attestation
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">{accessError}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Retour au dashboard
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (enrollmentStatus !== "completed") {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-amber-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Attestation verrouillee
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Validation finale requise
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Le PDF de reussite n&apos;est disponible qu&apos;apres validation finale du
            parcours.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Retour au dashboard
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!payload) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Attestation
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Preparation du PDF en cours
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Attestation de reussite
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Ouverture du PDF PREVENSIA
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Le document PDF 2 pages est prepare avec le titre d&apos;habilitation en
          page 1 et l&apos;attestation de reussite en page 2.
        </p>

        <form ref={formRef} action="/api/attestation" method="POST" className="hidden">
          {payload.enrollmentId ? <input type="hidden" name="enrollmentId" value={payload.enrollmentId} /> : null}
          <input type="hidden" name="formation" value={payload.formation} />
          <input type="hidden" name="date" value={payload.date} />
          {payload.score ? <input type="hidden" name="score" value={payload.score} /> : null}
          {payload.total ? <input type="hidden" name="total" value={payload.total} /> : null}
          {payload.passingScore ? (
            <input type="hidden" name="passingScore" value={payload.passingScore} />
          ) : null}
          {payload.scorePercent ? (
            <input type="hidden" name="scorePercent" value={payload.scorePercent} />
          ) : null}
          {payload.passed ? <input type="hidden" name="passed" value={payload.passed} /> : null}
        </form>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-900">
            {submitted
              ? "Si le PDF ne s'ouvre pas, utilisez le bouton ci-dessous."
              : "Ouverture automatique en cours..."}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => formRef.current?.requestSubmit()}
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Ouvrir le PDF
            </button>
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Retour au dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
