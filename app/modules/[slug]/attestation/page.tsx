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
          setAccessError("Utilisateur non authentifié.");
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
          .select(`
            id,
            status,
            formation:formations (
              slug,
              title
            )
          `)
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
          setAccessError("Aucune inscription trouvée pour cette formation.");
          return;
        }

        const matchedFormation = normalizeFormation(matchedEnrollment.formation);

        setFormationTitle(
          matchedFormation?.title ||
            (slug === "h0b0"
              ? "H0B0 — Exécuter en sécurité des travaux d’ordre non électrique"
              : slug.toUpperCase())
        );

        setEnrollmentStatus(normalizeStatus(matchedEnrollment.status));
      } catch (error) {
        console.error("Erreur chargement attestation :", error);
        setAccessError("Impossible de vérifier vos droits d’accès à l’attestation.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug, supabase]);

  const formationLabel =
    formationTitle ||
    (slug === "h0b0"
      ? "H0B0 — Exécuter en sécurité des travaux d’ordre non électrique"
      : slug.toUpperCase());

  const completedDate = quizResult?.completedAt
    ? new Date(quizResult.completedAt).toLocaleDateString("fr-FR")
    : null;

  const issueDate = new Date().toLocaleDateString("fr-FR");

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Attestation
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Vérification de la validation finale
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Vérification de vos droits d’accès à l’attestation en cours…
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
            Impossible de vérifier votre accès
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
            Attestation verrouillée
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Validation finale requise
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600">
            L’attestation n’est disponible qu’après validation finale du parcours
            avec le formateur.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">
              État actuel du parcours
            </p>

            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              <li>
                • Quiz :{" "}
                <span className="font-semibold text-slate-900">
                  {quizResult?.success ? "réussi" : "non validé ou non trouvé"}
                </span>
              </li>
              <li>
                • Statut dossier :{" "}
                <span className="font-semibold text-slate-900">
                  {enrollmentStatus ?? "non défini"}
                </span>
              </li>
              <li>
                • Attestation :{" "}
                <span className="font-semibold text-slate-900">
                  disponible après entretien et validation finale
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Planifier / voir l’entretien
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
          Attestation de formation validée
        </h1>

        <div className="mt-8 rounded-[1.75rem] border-2 border-slate-300 bg-slate-50 p-8 print:mt-4 print:rounded-none print:border-slate-300 print:bg-white">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                PREVENSIA FORMATION
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                Attestation de formation et de réussite
              </h2>
            </div>

            <div className="shrink-0">
              <Image
                src="/images/logo-prevensia-formation.jpg"
                alt="Logo Prevensia Formation"
                width={130}
                height={130}
                className="h-auto w-[110px] object-contain"
              />
            </div>
          </div>

          <div className="mt-8 space-y-4 text-base leading-8 text-slate-700">
            <p>
              Je soussigné PREVENSIA FORMATION atteste que :
            </p>

            <p className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              <span className="font-semibold text-slate-900">
                {learnerName || "Apprenant"}
              </span>
            </p>

            <p>
              a suivi et validé le parcours de formation suivant :
              <span className="ml-2 font-semibold text-slate-900">
                {formationLabel}
              </span>
            </p>

            <p>
              Référentiel / cadre pédagogique :
              <span className="ml-2 font-semibold text-slate-900">
                NF C 18-510
              </span>
            </p>

            {quizResult ? (
              <>
                <p>
                  Résultat de l’évaluation théorique :
                  <span className="ml-2 font-semibold text-slate-900">
                    {quizResult.score} / {quizResult.total}
                  </span>
                </p>

                <p>
                  Seuil requis :
                  <span className="ml-2 font-semibold text-slate-900">
                    {quizResult.passingScore} / {quizResult.total}
                  </span>
                </p>
              </>
            ) : (
              <p>
                Évaluation théorique :
                <span className="ml-2 font-semibold text-slate-900">
                  validée
                </span>
              </p>
            )}

            <p>
              Validation finale du parcours :
              <span className="ml-2 font-semibold text-slate-900">
                acquise après entretien avec le formateur
              </span>
            </p>

            {completedDate ? (
              <p>
                Date de réussite au quiz :
                <span className="ml-2 font-semibold text-slate-900">
                  {completedDate}
                </span>
              </p>
            ) : null}

            <p>
              Date d’émission de l’attestation :
              <span className="ml-2 font-semibold text-slate-900">
                {issueDate}
              </span>
            </p>

            <p className="pt-4 text-sm leading-7 text-slate-600">
              Cette attestation confirme la validation complète du parcours de
              formation PREVENSIA FORMATION. Elle ne constitue pas à elle seule
              une habilitation électrique. La délivrance de l’habilitation relève
              exclusivement de l’employeur après formation adaptée, vérification
              des acquis, analyse de l’activité réelle et prise en compte des
              conditions effectives d’intervention.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">
                Signature organisme
              </p>
              <div className="mt-8 border-t border-slate-300 pt-2 text-sm text-slate-500">
                PREVENSIA FORMATION
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">
                Signature apprenant
              </p>
              <div className="mt-8 border-t border-slate-300 pt-2 text-sm text-slate-500">
                {learnerName || "Nom / signature"}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">
                Validation finale
              </p>
              <div className="mt-8 border-t border-slate-300 pt-2 text-sm text-slate-500">
                Entretien formateur validé
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