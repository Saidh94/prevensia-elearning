import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type BookingEnrollment = {
  id: string;
  status: string | null;
  access_start: string | null;
  access_end: string | null;
  formation:
    | {
        slug: string | null;
        title: string | null;
      }
    | {
        slug: string | null;
        title: string | null;
      }[]
    | null;
};

function normalizeFormation(
  formation: BookingEnrollment["formation"]
): { slug: string | null; title: string | null } | null {
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

function isAccessWindowOpen(
  accessStart: string | null,
  accessEnd: string | null,
  now: Date
): boolean {
  const accessStartOk =
    !accessStart || new Date(accessStart).getTime() <= now.getTime();

  const accessEndOk =
    !accessEnd || new Date(accessEnd).getTime() >= now.getTime();

  return accessStartOk && accessEndOk;
}

export default async function BookingPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  const { data, error } = await supabase
    .from("enrollments")
    .select(
      `
      id,
      status,
      access_start,
      access_end,
      formation:formations!inner (
        slug,
        title
      )
    `
    )
    .eq("user_id", user.id);

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-red-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
            Booking
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Impossible de vérifier votre accès
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Une erreur est survenue lors de la vérification de vos droits pour
            accéder à la planification.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Détail technique : {error.message}
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

  const now = new Date();
  const enrollments = (data ?? []) as BookingEnrollment[];

  const activeEnrollments = enrollments.filter((enrollment) => {
    const status = normalizeStatus(enrollment.status);

    const allowedStatusForPlatformAccess = new Set([
      "not_started",
      "notstarted",
      "in_progress",
      "inprogress",
      "active",
      "pending_interview",
      "quiz_passed",
      "completed",
      "validated",
      "enrolled",
      "paid",
    ]).has(status);

    return (
      allowedStatusForPlatformAccess &&
      isAccessWindowOpen(enrollment.access_start, enrollment.access_end, now)
    );
  });

  const bookingEligibleEnrollments = activeEnrollments.filter((enrollment) => {
    const status = normalizeStatus(enrollment.status);

    return (
      status === "pending_interview" ||
      status === "quiz_passed" ||
      status === "completed"
    );
  });

  if (activeEnrollments.length === 0) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-amber-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Accès réservé
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Vous n’avez pas encore accès à la planification
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600">
            La prise de rendez-vous est réservée aux apprenants disposant d’un
            accès actif à une formation.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">
              Vérifications possibles
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              <li>• Votre inscription n’a pas encore été validée</li>
              <li>• Le paiement n’a pas encore été confirmé</li>
              <li>• Votre accès n’est pas encore actif</li>
              <li>• Votre période d’accès est expirée</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Retour au dashboard
            </Link>
            <Link
              href="/elearning"
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Retour au catalogue
            </Link>
            <Link
              href="/demande-devis"
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (bookingEligibleEnrollments.length === 0) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-blue-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Parcours en cours
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            L’entretien sera disponible après validation du quiz
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Vous disposez bien d’un accès actif à une formation, mais la
            planification de l’entretien n’est ouverte qu’après validation du
            parcours théorique et du quiz.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">
              Formations actuellement actives
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              {activeEnrollments.map((enrollment) => {
                const formation = normalizeFormation(enrollment.formation);
                return (
                  <li key={enrollment.id}>
                    • {formation?.title ?? formation?.slug ?? "Formation"} — statut :{" "}
                    {enrollment.status ?? "non défini"}
                  </li>
                );
              })}
            </ul>
          </div>

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

  const eligibleFormationTitles = bookingEligibleEnrollments
    .map((enrollment) => normalizeFormation(enrollment.formation)?.title)
    .filter(Boolean) as string[];

  const alreadyCompletedTitles = bookingEligibleEnrollments
    .filter((enrollment) => normalizeStatus(enrollment.status) === "completed")
    .map((enrollment) => normalizeFormation(enrollment.formation)?.title)
    .filter(Boolean) as string[];

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
          Accès autorisé
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Planifier votre entretien
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          Après validation du quiz, un entretien avec un formateur ou un
          responsable pédagogique permet de confirmer les acquis, de finaliser
          le parcours et de débloquer l’attestation de formation.
        </p>

        {eligibleFormationTitles.length > 0 ? (
          <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5">
            <p className="text-sm font-semibold text-green-900">
              Parcours ouvrant l’accès à l’entretien
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-green-900">
              {eligibleFormationTitles.map((title) => (
                <li key={title}>• {title}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {alreadyCompletedTitles.length > 0 ? (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">
              Parcours déjà finalisés
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              {alreadyCompletedTitles.map((title) => (
                <li key={title}>• {title}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Vérification des connaissances théoriques</li>
            <li>• Échange avec un formateur ou un responsable pédagogique</li>
            <li>• Validation finale du parcours</li>
            <li>• Déblocage de l’attestation après validation</li>
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <a
            href="TON_VRAI_LIEN_CALENDLY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-2xl bg-green-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-green-700"
          >
            Accéder au calendrier
          </a>
        </div>
      </div>
    </div>
  );
}