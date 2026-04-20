"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
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

type ProfileRecord = {
  first_name: string | null;
  last_name: string | null;
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

function formatDate(value: string | null | undefined) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("fr-FR");
}

function buildReference(slug: string, completedAt?: string | null) {
  const date = completedAt ? new Date(completedAt) : new Date();
  const yy = date.getFullYear().toString().slice(-2);
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `PF-${yy}${mm}${dd}-${slug.toUpperCase()}`;
}

export default function AttestationPage() {
  const params = useParams();
  const slugParam = params.slug;

  const slug = useMemo(() => {
    if (Array.isArray(slugParam)) {
      return (slugParam[0] ?? "").toLowerCase();
    }
    return String(slugParam ?? "").toLowerCase();
  }, [slugParam]);

  const supabase = useMemo(() => createClient(), []);

  const [loading, setLoading] = useState(true);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [enrollmentStatus, setEnrollmentStatus] = useState<string | null>(null);
  const [accessError, setAccessError] = useState<string | null>(null);
  const [formationTitle, setFormationTitle] = useState<string | null>(null);
  const [learnerName, setLearnerName] = useState<string | null>(null);

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

        const storageKey = `quiz-result-${slug}`;
        const raw = localStorage.getItem(storageKey);

        if (raw) {
          try {
            const parsed = JSON.parse(raw) as QuizResult;
            setQuizResult(parsed);
          } catch {
            setQuizResult(null);
          }
        } else {
          setQuizResult(null);
        }

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          setAccessError("Utilisateur non authentifie.");
          setEnrollmentStatus(null);
          return;
        }

        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("first_name, last_name")
          .eq("id", user.id)
          .maybeSingle();

        if (!profileError && profileData) {
          const typedProfile = profileData as ProfileRecord;
          const fullName = [typedProfile.first_name, typedProfile.last_name]
            .filter(Boolean)
            .join(" ")
            .trim();

          setLearnerName(fullName || user.email || "Apprenant");
        } else {
          setLearnerName(user.email || "Apprenant");
        }

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

        if (!matchedEnrollment) {
          setEnrollmentStatus(null);
          setAccessError("Aucune inscription trouvee pour cette formation.");
          return;
        }

        const matchedFormation = normalizeFormation(matchedEnrollment.formation);

        setFormationTitle(
          matchedFormation?.title ||
            (slug === "h0b0"
              ? "Habilitation electrique H0B0"
              : slug.toUpperCase())
        );

        setEnrollmentStatus(normalizeStatus(matchedEnrollment.status));
      } catch (error) {
        console.error("Erreur chargement attestation :", error);
        setAccessError("Impossible de verifier vos droits d'acces a l'attestation.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug, supabase]);

  const formationLabel =
    formationTitle ||
    (slug === "h0b0" ? "Habilitation electrique H0B0" : slug.toUpperCase());

  const completedDate = formatDate(quizResult?.completedAt);
  const issueDate = new Date().toLocaleDateString("fr-FR");
  const reference = buildReference(slug, quizResult?.completedAt);
  const scorePercent =
    quizResult && quizResult.total > 0
      ? Math.round((quizResult.score / quizResult.total) * 100)
      : null;

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Attestation
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Verification de la validation finale
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Verification de vos droits d&apos;acces a l&apos;attestation en cours...
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
            Impossible de verifier votre acces
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {accessError}
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
            L&apos;attestation n&apos;est disponible qu&apos;apres validation finale
            du parcours avec le formateur.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">
              Etat actuel du parcours
            </p>

            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              <li>
                Quiz :{" "}
                <span className="font-semibold text-slate-900">
                  {quizResult?.success ? "reussi" : "non valide ou non trouve"}
                </span>
              </li>
              <li>
                Statut dossier :{" "}
                <span className="font-semibold text-slate-900">
                  {enrollmentStatus ?? "non defini"}
                </span>
              </li>
              <li>
                Attestation :{" "}
                <span className="font-semibold text-slate-900">
                  disponible apres entretien et validation finale
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Planifier / voir l&apos;entretien
            </Link>

            <Link
              href={`/modules/${slug}/quiz`}
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Retour au quiz
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm print:max-w-none print:rounded-none print:border-0 print:p-10 print:shadow-none">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 print:hidden">
          Attestation
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-900 print:hidden">
          Attestation de formation validee
        </h1>

        <div className="mt-8 rounded-[1.75rem] border-2 border-slate-300 bg-slate-50 p-8 print:mt-4 print:rounded-none print:border-slate-300 print:bg-white">
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                PREVENSIA FORMATION
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                Fiche de reussite et validation apprenant
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Document apprenant remis apres validation complete du parcours.
              </p>
            </div>

            <div className="shrink-0 text-right">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Reference
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  {reference}
                </p>
                <p className="mt-1 text-xs text-slate-500">Edite le {issueDate}</p>
              </div>

              <div className="mt-4 flex justify-end">
                <Image
                  src="/images/logo-prevensia-formation.jpg"
                  alt="Logo Prevensia Formation"
                  width={120}
                  height={120}
                  className="h-auto w-[110px] object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Apprenant
              </p>
              <p className="mt-3 text-2xl font-bold text-slate-900">
                {learnerName || "Apprenant"}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Formation
              </p>
              <p className="mt-3 text-xl font-bold text-slate-900">
                {formationLabel}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Statut
              </p>
              <p className="mt-3 text-4xl font-extrabold text-emerald-700">
                {quizResult?.success ? "REUSSI" : "VALIDE"}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Resultat obtenu
              </p>
              <p className="mt-3 text-2xl font-bold text-slate-900">
                {quizResult
                  ? `${quizResult.score} / ${quizResult.total}`
                  : "Validation finale"}
              </p>
              {scorePercent !== null ? (
                <p className="mt-2 text-sm text-slate-600">{scorePercent}% de reussite</p>
              ) : null}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Cadre
              </p>
              <p className="mt-3 text-2xl font-bold text-blue-800">
                {slug.toUpperCase()}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-base leading-8 text-slate-700">
              Nous attestons que{" "}
              <span className="font-semibold text-slate-900">
                {learnerName || "l'apprenant"}
              </span>{" "}
              a suivi et valide le parcours theorique PREVENSIA FORMATION
              correspondant a{" "}
              <span className="font-semibold text-slate-900">
                {formationLabel}
              </span>
              .
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Referentiel
                </p>
                <p className="mt-2 text-base font-semibold text-slate-900">
                  NF C 18-510
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Date de validation
                </p>
                <p className="mt-2 text-base font-semibold text-slate-900">
                  {completedDate || issueDate}
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              Cette fiche de reussite apprenant confirme la validation du
              parcours e-learning et de l&apos;entretien ou de la validation
              finale prevue par PREVENSIA FORMATION. La delivrance de
              l&apos;habilitation electrique releve exclusivement de
              l&apos;employeur selon le poste, le contexte d&apos;intervention
              et les exigences applicables.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">
                Signature organisme
              </p>
              <div className="mt-6 flex min-h-[72px] items-end border-t border-slate-300 pt-2 text-sm text-slate-500">
                PREVENSIA FORMATION
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">
                Signature apprenant
              </p>
              <div className="mt-6 flex min-h-[72px] items-end border-t border-slate-300 pt-2 text-sm text-slate-500">
                {learnerName || "Nom / signature"}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">
                Validation finale
              </p>
              <div className="mt-6 flex min-h-[72px] items-end border-t border-slate-300 pt-2 text-sm text-slate-500">
                Parcours valide
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Imprimer / enregistrer en PDF
          </button>

          <Link
            href="/dashboard"
            className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Retour au dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
