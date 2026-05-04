import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type BookingEnrollment = {
  id: string;
  status: string | null;
  access_start: string | null;
  access_end: string | null;
  company_name: string | null;
  ordered_by_employer: boolean | null;
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

type BookingScenario = {
  title: string;
  summary: string;
  duration: string;
  audience: string;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  variant: "green" | "blue" | "amber";
  note?: string;
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

function isBsBe(title: string) {
  const normalized = title.toLowerCase();
  return (
    normalized.includes("bs / be") ||
    normalized.includes("bs/be") ||
    normalized.includes("be manoeuvre") ||
    normalized.includes("manoeuvre")
  );
}

function isBsBeRecyclage(title: string) {
  return isBsBe(title) && title.toLowerCase().includes("recyclage");
}

function isB1B2(title: string) {
  const normalized = title.toLowerCase();
  return (
    normalized.includes("b1") ||
    normalized.includes("b2") ||
    normalized.includes("br") ||
    normalized.includes("bc")
  );
}

function isB1Only(title: string) {
  const normalized = title.toLowerCase();
  return normalized.includes("b1") && !normalized.includes("b2") && !normalized.includes("br") && !normalized.includes("bc");
}

function isB2Only(title: string) {
  const normalized = title.toLowerCase();
  return normalized.includes("b2") && !normalized.includes("br") && !normalized.includes("bc");
}

function isBROnly(title: string) {
  const normalized = title.toLowerCase();
  return normalized.includes("br") && !normalized.includes("b1") && !normalized.includes("b2") && !normalized.includes("bc");
}

function isBCOnly(title: string) {
  const normalized = title.toLowerCase();
  return normalized.includes("bc") && !normalized.includes("b1") && !normalized.includes("b2") && !normalized.includes("br");
}

function buildScenario(enrollment: BookingEnrollment): BookingScenario {
  const formation = normalizeFormation(enrollment.formation);
  const title = formation?.title ?? formation?.slug ?? "Formation PREVENSIA";
  const normalizedTitle = title.toLowerCase();
  const isEmployerFlow = Boolean(enrollment.ordered_by_employer) || Boolean(enrollment.company_name);

  if (normalizedTitle.includes("h0b0") || normalizedTitle.includes("h0v")) {
    return {
      title: "Entretien de validation H0B0 / H0V",
      summary:
        "Parcours e-learning suivi, puis entretien individuel de validation avec un formateur.",
      duration: "30 min",
      audience: "Individuel",
      ctaLabel: "Reserver l'entretien H0B0 / H0V",
      ctaHref: "https://calendly.com/prevensia-formation-kq6l/30min",
      ctaExternal: true,
      variant: "green",
      note: "L'entretien complete le module théorique et prepare la validation finale du parcours.",
    };
  }

  if (isBsBeRecyclage(title)) {
    return {
      title: "Recyclage BS et BE Manoeuvre",
      summary:
        "Parcours de recyclage avec rappel théorique, quiz puis visio de validation avec le formateur.",
      duration: "45 min a 1 h",
      audience: isEmployerFlow ? "Entreprise / groupe ou individuel" : "Individuel ou petit groupe",
      ctaLabel: "Choisir un creneau de recyclage",
      ctaHref: "/reservation-formation?category=bsbe_recyclage&format=virtual",
      variant: "blue",
      note: "La visio de recyclage reste courte, mais encadree, pour verifier les acquis et les limites d'autorisation.",
    };
  }

  if (isBsBe(title)) {
    return isEmployerFlow
      ? {
          title: "Initial BS et BE Manoeuvre - entreprise",
          summary:
            "Votre entreprise peut choisir une classe virtuelle de 3 h a 4 h avec formateur ou organiser une session en entreprise selon l'effectif.",
          duration: "3 h a 4 h",
          audience: "Groupe / entreprise",
          ctaLabel: "Voir les options BS et BE Manoeuvre",
          ctaHref:
            "/reservation-formation?category=bsbe_initial&audience=group",
          variant: "blue",
          note: "Le format entreprise permet d'adapter l'organisation, le volume et la logistique au site.",
        }
      : {
          title: "Initial BS et BE Manoeuvre - classe virtuelle",
          summary:
            "Les particuliers ou salaries seuls sont orientes vers une classe virtuelle avec formateur, ouverte lorsque le nombre minimal d'apprenants est atteint.",
          duration: "3 h a 4 h",
          audience: "Individuel",
          ctaLabel: "Voir les classes virtuelles BS et BE Manoeuvre",
          ctaHref:
            "/reservation-formation?category=bsbe_initial&format=virtual",
          variant: "amber",
          note: "Ouverture sous reserve de quorum minimal pour garantir la qualite pedagogique et la rentabilite du groupe.",
        };
  }

  if (isB1B2(title)) {
    const specificLabel = isB1Only(title)
      ? "B1 / B1V"
      : isB2Only(title)
        ? "B2 / B2V"
        : isBROnly(title)
          ? "BR"
          : isBCOnly(title)
            ? "BC"
            : "B1 / B1V / B2 / B2V / BR / BC";

    return {
      title: `${specificLabel} - parcours BT avec presentiel`,
      summary:
        "Ce niveau impose une vraie articulation entre e-learning, quiz et séquence présentielle ou organisation terrain avec formateur.",
      duration: "1 journée présentielle",
      audience: isEmployerFlow ? "Entreprise / groupe" : "Individuel ou groupe",
      ctaLabel: isEmployerFlow
        ? "Voir l'organisation présentielle"
        : "Voir les prochaines sessions BT",
      ctaHref: isEmployerFlow
        ? "/reservation-formation?category=b1b2brbc_initial&audience=group"
        : "/reservation-formation?category=b1b2brbc_initial",
      variant: "blue",
      note: `Le presentiel reste essentiel pour les mises en situation, l'echange et l'evaluation appliquee du parcours ${specificLabel}.`,
    };
  }

  return {
    title: "Validation pedagogique",
    summary:
      "Votre parcours ouvre l'acces a une sequence de validation organisee avec l'equipe pedagogique.",
    duration: "Selon la formation",
    audience: "Selon le profil",
    ctaLabel: "Contacter PREVENSIA",
    ctaHref: "/demande-devis",
    variant: "green",
  };
}

function cardClasses(variant: BookingScenario["variant"]) {
  if (variant === "blue") {
    return "border-blue-200 bg-blue-50";
  }

  if (variant === "amber") {
    return "border-amber-200 bg-amber-50";
  }

  return "border-green-200 bg-green-50";
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
      company_name,
      ordered_by_employer,
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
            Impossible de verifier votre acces
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Une erreur est survenue lors de la verification de vos droits pour
            acceder a la planification.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Detail technique : {error.message}
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
            Acces reserve
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Vous n&apos;avez pas encore acces a la planification
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            La prise de rendez-vous est reservee aux apprenants disposant d&apos;un
            acces actif a une formation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Retour au dashboard
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
            La planification s&apos;ouvre apres validation du quiz
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Vous disposez bien d&apos;un acces actif, mais la sequence formateur ne
            s&apos;ouvre qu&apos;apres validation du parcours théorique et du quiz.
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

  const scenarios = bookingEligibleEnrollments.map((enrollment) => ({
    enrollmentId: enrollment.id,
    formationTitle:
      normalizeFormation(enrollment.formation)?.title ??
      normalizeFormation(enrollment.formation)?.slug ??
      "Formation PREVENSIA",
    scenario: buildScenario(enrollment),
    completed: normalizeStatus(enrollment.status) === "completed",
  }));

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
          Acces autorise
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Planifier la sequence finale
        </h1>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          PREVENSIA distingue la theorie e-learning, le quiz et la sequence
          finale encadree. Selon la formation, il peut s&apos;agir d&apos;un entretien
          H0B0 / H0V, d&apos;une classe virtuelle BS et BE Manoeuvre, d&apos;un
          recyclage en visio ou d&apos;une organisation en entreprise.
        </p>

        <div className="mt-8 grid gap-5">
          {scenarios.map(({ enrollmentId, formationTitle, scenario, completed }) => (
            <article
              key={enrollmentId}
              className={`rounded-3xl border p-6 shadow-sm ${cardClasses(
                scenario.variant
              )}`}
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Formation concernee
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    {formationTitle}
                  </h2>

                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Format
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">
                        {scenario.title}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Duree
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">
                        {scenario.duration}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Public vise
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">
                        {scenario.audience}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-700">
                    {scenario.summary}
                  </p>

                  {scenario.note ? (
                    <p className="mt-4 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-sm leading-7 text-slate-600">
                      {scenario.note}
                    </p>
                  ) : null}

                  {completed ? (
                    <p className="mt-4 text-sm font-semibold text-green-800">
                      Parcours deja finalise : cette fiche reste visible pour reference.
                    </p>
                  ) : null}
                </div>

                <div className="flex w-full flex-col gap-3 lg:w-auto lg:min-w-[260px]">
                  {scenario.ctaExternal ? (
                    <a
                      href={scenario.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      {scenario.ctaLabel}
                    </a>
                  ) : (
                    <Link
                      href={scenario.ctaHref}
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      {scenario.ctaLabel}
                    </Link>
                  )}

                  <Link
                    href="/demande-devis"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Besoin d&apos;un format sur mesure
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
