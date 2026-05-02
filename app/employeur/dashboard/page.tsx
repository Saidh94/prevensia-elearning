import Link from "next/link";
import { getEnrollmentPaymentOption } from "@/lib/payments/catalog";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function formatDate(value: string | null) {
  if (!value) return "-";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "-" : date.toLocaleDateString("fr-FR");
}

function getStatusLabel(status: string | null) {
  switch (status) {
    case "completed":
      return "Terminee";
    case "pending_interview":
      return "Entretien a planifier";
    case "in_progress":
      return "En cours";
    case "not_started":
      return "Non demarree";
    default:
      return status || "-";
  }
}

function getStatusClasses(status: string | null) {
  switch (status) {
    case "completed":
      return "bg-emerald-100 text-emerald-700";
    case "pending_interview":
      return "bg-amber-100 text-amber-700";
    case "in_progress":
      return "bg-blue-100 text-blue-700";
    case "not_started":
      return "bg-slate-100 text-slate-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

function getPaymentLabel(paymentStatus: string | null) {
  return paymentStatus === "paid" ? "Paye" : "En attente";
}

function getPaymentClasses(paymentStatus: string | null) {
  return paymentStatus === "paid"
    ? "bg-emerald-100 text-emerald-700"
    : "bg-red-100 text-red-700";
}

function normalizeText(value: string | null | undefined) {
  return (value ?? "").trim().toLowerCase();
}

type EmployerUserRow = {
  employer_id: string;
  rôle: string;
};

type EmployerRow = {
  id: string;
  company_name: string;
  manager_email: string;
  contact_name: string | null;
};

type EnrollmentRow = {
  id: string;
  user_id: string;
  formation_id: string;
  status: string | null;
  access_start: string | null;
  access_end: string | null;
  payment_status: string | null;
};

type ProfileRow = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
};

type FormationRow = {
  id: string;
  slug: string | null;
  title: string | null;
};

type EnrollmentViewRow = {
  id: string;
  userId: string;
  formationSlug: string | null;
  formationTitle: string;
  fullName: string;
  email: string;
  status: string | null;
  accessStart: string | null;
  accessEnd: string | null;
  paymentStatus: string | null;
  isCompleted: boolean;
  isPaid: boolean;
  paymentOption: ReturnType<typeof getEnrollmentPaymentOption>;
};

type EmployerActionMeta = {
  familyLabel: string;
  offerHref: string;
  offerLabel: string;
  planningHref: string | null;
  planningLabel: string | null;
  note: string;
};

function getEnrollmentActionMeta(row: Pick<EnrollmentViewRow, "formationSlug" | "formationTitle">): EmployerActionMeta {
  const searchableText = `${normalizeText(row.formationSlug)} ${normalizeText(
    row.formationTitle
  )}`;
  const isRecyclage = searchableText.includes("recyclage");

  if (searchableText.includes("h0b0") || searchableText.includes("h0v")) {
    return {
      familyLabel: "H0B0 / H0V",
      offerHref: "/formation-habilitation-electrique",
      offerLabel: "Voir l'offre H0B0",
      planningHref: "/reservation-formation?category=h0b0_validation&format=virtual",
      planningLabel: "Voir l'entretien 30 min",
      note: "Parcours e-learning suivi d'un entretien individuel de validations. Le salarié reste maitre de la reservation finale.",
    };
  }

  if (
    searchableText.includes("bs") ||
    searchableText.includes("be manoeuvre") ||
    searchableText.includes("manoeuvre")
  ) {
    return {
      familyLabel: isRecyclage ? "BS / BE recyclage" : "BS / BE Manoeuvre",
      offerHref: "/formation-habilitation-electrique",
      offerLabel: "Voir l'offre BS / BE",
      planningHref: isRecyclage
        ? "/reservation-formation?category=bsbe_recyclage&audience=group&format=virtual"
        : "/reservation-formation?category=bsbe_initial&audience=group",
      planningLabel: isRecyclage
        ? "Voir la visio de recyclage"
        : "Voir les classes virtuelles",
      note: isRecyclage
        ? "Recyclage e-learning + visio accompagnee avec formateur. Le salarié réservé lui-meme son creneau."
        : "Initial e-learning + classe virtuelle ou session entreprise. L'employeur visualise le format, le salarié choisit son rendez-vous.",
    };
  }

  if (
    searchableText.includes("b1") ||
    searchableText.includes("b2") ||
    searchableText.includes("br") ||
    searchableText.includes("bc")
  ) {
    return {
      familyLabel: isRecyclage ? "B1 / B2 / BR / BC recyclage" : "B1 / B2 / BR / BC",
      offerHref: "/formation-habilitation-electrique",
      offerLabel: "Voir l'offre electricien",
      planningHref: isRecyclage
        ? "/reservation-formation?category=b1b2brbc_recyclage&audience=group"
        : "/reservation-formation?category=b1b2brbc_initial&audience=group",
      planningLabel: isRecyclage
        ? "Voir le recyclage mixte"
        : "Voir la journée présentielle",
      note: "Parcours premium avec theorie e-learning puis mise en situation présentielle. Le salarié garde la main sur sa reservation.",
    };
  }

  return {
    familyLabel: "Formation PREVENSIA",
    offerHref: "/elearning",
    offerLabel: "Voir le catalogue e-learning",
    planningHref: "/demande-devis",
    planningLabel: "Voir l'organisation proposee",
    note: "Pilotage entreprise, accès apprenants et organisation a la demande.",
  };
}

export default async function EmployeurDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  const { data: employerUser, error: employerUserError } = await supabase
    .from("employer_users")
    .select("employer_id, rôle")
    .eq("user_id", user.id)
    .maybeSingle<EmployerUserRow>();

  if (employerUserError) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
            Espace employeur
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Erreur de lecture du compte employeur
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            Utilisateur connecte : {user.id}
          </p>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-50 p-4 text-xs text-slate-700">
            {JSON.stringify(employerUserError, null, 2)}
          </pre>
        </div>
      </main>
    );
  }

  if (!employerUser) {
    redirect("/dashboard");
  }

  const { data: employer, error: employerError } = await supabase
    .from("employers")
    .select("id, company_name, manager_email, contact_name")
    .eq("id", employerUser.employer_id)
    .maybeSingle<EmployerRow>();

  if (employerError || !employer) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
            Espace employeur
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Entreprise introuvable
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            Employer ID : <span className="font-mono">{employerUser.employer_id}</span>
          </p>
          {employerError ? (
            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-50 p-4 text-xs text-slate-700">
              {JSON.stringify(employerError, null, 2)}
            </pre>
          ) : null}
        </div>
      </main>
    );
  }

  const { data: enrollments, error: enrollmentsError } = await supabase
    .from("enrollments")
    .select(
      "id, user_id, formation_id, status, access_start, access_end, payment_status"
    )
    .eq("employer_id", employer.id)
    .order("access_start", { ascending: false })
    .returns<EnrollmentRow[]>();

  if (enrollmentsError) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
            Espace employeur
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Impossible de charger les inscriptions
          </h1>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-50 p-4 text-xs text-slate-700">
            {JSON.stringify(enrollmentsError, null, 2)}
          </pre>
        </div>
      </main>
    );
  }

  const userIds = [...new Set((enrollments ?? []).map((item) => item.user_id))];
  const formationIds = [...new Set((enrollments ?? []).map((item) => item.formation_id))];

  const { data: profiles } = userIds.length
    ? await supabase
        .from("profiles")
        .select("id, first_name, last_name, email")
        .in("id", userIds)
        .returns<ProfileRow[]>()
    : { data: [] };

  const { data: formations } = formationIds.length
    ? await supabase
        .from("formations")
        .select("id, slug, title")
        .in("id", formationIds)
        .returns<FormationRow[]>()
    : { data: [] };

  const profilesMap = new Map((profiles ?? []).map((item) => [item.id, item]));
  const formationsMap = new Map((formations ?? []).map((item) => [item.id, item]));

  const enrollmentRows: EnrollmentViewRow[] = (enrollments ?? []).map((item) => {
    const profile = profilesMap.get(item.user_id);
    const formation = formationsMap.get(item.formation_id);
    const fullName =
      [profile?.first_name, profile?.last_name].filter(Boolean).join(" ") ||
      "Non renseigne";
    const paymentOption = getEnrollmentPaymentOption({
      formationSlug: formation?.slug,
      formationTitle: formation?.title,
    });

    return {
      id: item.id,
      userId: item.user_id,
      formationSlug: formation?.slug ?? null,
      formationTitle: formation?.title || "-",
      fullName,
      email: profile?.email || "-",
      status: item.status,
      accessStart: item.access_start,
      accessEnd: item.access_end,
      paymentStatus: item.payment_status,
      isCompleted: item.status === "completed",
      isPaid: item.payment_status === "paid",
      paymentOption,
    };
  });

  const totalEnrollments = enrollmentRows.length;
  const employeeCount = new Set(enrollmentRows.map((item) => item.userId)).size;
  const formationCount = new Set(enrollmentRows.map((item) => item.formationTitle)).size;
  const completedCount = enrollmentRows.filter((item) => item.isCompleted).length;
  const inProgressCount = enrollmentRows.filter(
    (item) =>
      item.status === "in_progress" ||
      item.status === "not_started" ||
      item.status === "pending_interview"
  ).length;
  const pendingInterviewCount = enrollmentRows.filter(
    (item) => item.status === "pending_interview"
  ).length;
  const unpaidCount = enrollmentRows.filter((item) => !item.isPaid).length;

  const employeeRowsMap = enrollmentRows.reduce<Map<string, EnrollmentViewRow[]>>((acc, row) => {
    const existing = acc.get(row.userId) ?? [];
    existing.push(row);
    acc.set(row.userId, existing);
    return acc;
  }, new Map());

  const employeeSummaries = Array.from(
    employeeRowsMap.entries(),
    ([userId, rows]) => {
      const firstRow = rows[0];
      const latestAccessEnd = rows.reduce<string | null>((latest, row) => {
        if (!row.accessEnd) return latest;
        if (!latest) return row.accessEnd;
        return new Date(row.accessEnd).getTime() > new Date(latest).getTime()
          ? row.accessEnd
          : latest;
      }, null);
      const priorityRow =
        rows.find((row) => row.status === "pending_interview") ??
        rows.find((row) => !row.isCompleted) ??
        firstRow;

      return {
        key: userId,
        fullName: firstRow?.fullName || "Non renseigne",
        email: firstRow?.email || "-",
        formationCount: rows.length,
        completedCount: rows.filter((row) => row.isCompleted).length,
        pendingInterviewCount: rows.filter((row) => row.status === "pending_interview")
          .length,
        unpaidCount: rows.filter((row) => !row.isPaid).length,
        latestAccessEnd,
        priorityRow,
      };
    }
  ).sort((a, b) => {
    if (b.pendingInterviewCount !== a.pendingInterviewCount) {
      return b.pendingInterviewCount - a.pendingInterviewCount;
    }
    if (b.unpaidCount !== a.unpaidCount) {
      return b.unpaidCount - a.unpaidCount;
    }
    return a.fullName.localeCompare(b.fullName);
  });

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-300">
            Espace employeur
          </p>
          <h1 className="mt-3 text-3xl font-bold">{employer.company_name}</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
            Pilotez ici les accès e-learning, les validations blended PREVENSIA,
            les rendez-vous formateur, les paiements et les attestations de vos
            salariés.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            Le dashboard employeur donne une vision claire des formats et des
            disponibilités, mais la prise de rendez-vous finale reste réservée
            au salarié.
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Gestionnaire : {employer.contact_name || "Non renseigne"} |{" "}
            {employer.manager_email || "Email non renseigne"} | Rôle :{" "}
            {employerUser.rôle || "employeur"}
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <Link
              href="/formation-habilitation-electrique"
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-200">
                Offre PREVENSIA
              </p>
              <p className="mt-3 text-lg font-semibold">Voir la promesse blended</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                H0B0 avec entretien, BS / BE en classe virtuelle, B1 a BC en
                parcours mixte e-learning + présentiel.
              </p>
            </Link>

            <Link
              href="/reservation-formation?audience=group"
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-200">
                Planning groupe
              </p>
              <p className="mt-3 text-lg font-semibold">Suivre les formats de validations</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Visualisez les classes virtuelles, entretiens et journées
                terrain déjà ouverts, sans reserver a la place du salarié.
              </p>
            </Link>

            <Link
              href="/demande-devis?type=habilitation"
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-200">
                Sur mesure
              </p>
              <p className="mt-3 text-lg font-semibold">Commander une organisation</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Lancez une demande de devis pour une session entreprise, une
                cohorte salariée ou un besoin spécifique.
              </p>
            </Link>
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Salariés suivis
            </p>
            <p className="mt-3 text-3xl font-bold text-slate-900">{employeeCount}</p>
            <p className="mt-2 text-sm text-slate-600">
              {totalEnrollments} inscription{totalEnrollments > 1 ? "s" : ""}
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Formations attribuées
            </p>
            <p className="mt-3 text-3xl font-bold text-slate-900">{formationCount}</p>
            <p className="mt-2 text-sm text-slate-600">
              {inProgressCount} parcours actifs a suivre
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-amber-200 bg-amber-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-800">
              Entretiens a planifier
            </p>
            <p className="mt-3 text-3xl font-bold text-slate-900">
              {pendingInterviewCount}
            </p>
            <p className="mt-2 text-sm text-amber-900">
              validations formateur en attente
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-violet-200 bg-violet-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-violet-800">
              Paiements / attestations
            </p>
            <p className="mt-3 text-3xl font-bold text-slate-900">
              {unpaidCount} / {completedCount}
            </p>
            <p className="mt-2 text-sm text-violet-900">
              impayés / parcours terminés
            </p>
          </div>
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-3">
          <article className="rounded-[1.75rem] border border-emerald-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700">
              H0B0 / H0V
            </p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">
              E-learning + entretien 30 min
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Parcours theorique en ligne, quiz puis entretien individuel avec
              formateur pour la validations finale.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-blue-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
              BS / BE Manoeuvre
            </p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">
              E-learning + classe virtuelle
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Offre blended pour particuliers, salariés seuls ou groupes, avec
              classe virtuelle, session entreprise ou visio de recyclage.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              B1 / B2 / BR / BC
            </p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">
              E-learning + journée présentielle
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Parcours premium pour personnel electricien avec theorie dense,
              quiz de validations puis mise en situation terrain encadree.
            </p>
          </article>
        </section>

        {(pendingInterviewCount > 0 || unpaidCount > 0) && (
          <section className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-[1.75rem] border border-amber-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-700">
                Priorite pedagogique
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                Validations a organiser
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {pendingInterviewCount === 0
                  ? "Aucune validations formateur en attente."
                  : `${pendingInterviewCount} inscription${pendingInterviewCount > 1 ? "s" : ""} sont en statut entretien a planifier.`}
              </p>
              <Link
                href="/reservation-formation?audience=group"
                className="mt-5 inline-flex items-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Voir le planning blended
              </Link>
            </article>

            <article className="rounded-[1.75rem] border border-violet-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-violet-700">
                Priorite administrative
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                Dossiers a regulariser
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {unpaidCount === 0
                  ? "Tous les dossiers apparaissent comme règles."
                  : `${unpaidCount} inscription${unpaidCount > 1 ? "s" : ""} n'ont pas encore le statut payé.`}
              </p>
              <Link
                href="/demande-devis?type=habilitation"
                className="mt-5 inline-flex items-center rounded-2xl border border-violet-300 bg-white px-4 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
              >
                Lancer une demande de devis
              </Link>
            </article>
          </section>
        )}

        <section className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900">Vue salariés</h2>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              {employeeSummaries.length} fiche{employeeSummaries.length > 1 ? "s" : ""}
            </span>
          </div>

          {employeeSummaries.length === 0 ? (
            <p className="mt-6 text-sm text-slate-500">
              Aucun salarié rattache a cet employeur pour le moment.
            </p>
          ) : (
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {employeeSummaries.map((employee) => {
                const priorityAction = employee.priorityRow
                  ? getEnrollmentActionMeta(employee.priorityRow)
                  : null;

                return (
                  <article
                    key={employee.key}
                    className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {employee.fullName}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">{employee.email}</p>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                        {employee.formationCount} formation
                        {employee.formationCount > 1 ? "s" : ""}
                      </span>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          Terminees
                        </p>
                        <p className="mt-2 text-xl font-bold text-slate-900">
                          {employee.completedCount}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          Entretiens
                        </p>
                        <p className="mt-2 text-xl font-bold text-slate-900">
                          {employee.pendingInterviewCount}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          Impayes
                        </p>
                        <p className="mt-2 text-xl font-bold text-slate-900">
                          {employee.unpaidCount}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-slate-600">
                      Fin d'accès la plus recente :{" "}
                      <span className="font-semibold text-slate-900">
                        {formatDate(employee.latestAccessEnd)}
                      </span>
                    </p>

                    {priorityAction ? (
                      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          Parcours prioritaire
                        </p>
                        <p className="mt-2 text-sm font-semibold text-slate-900">
                          {priorityAction.familyLabel}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {priorityAction.note}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                          {priorityAction.planningHref && priorityAction.planningLabel ? (
                            <Link
                              href={priorityAction.planningHref}
                              className="inline-flex items-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                            >
                              {priorityAction.planningLabel}
                            </Link>
                          ) : null}
                          <Link
                            href={priorityAction.offerHref}
                            className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                          >
                            {priorityAction.offerLabel}
                          </Link>
                          <a
                            href={`#enrollment-${employee.priorityRow.id}`}
                            className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                          >
                            Voir ses dossiers
                          </a>
                        </div>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <section className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Detail des inscriptions
            </h2>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              {totalEnrollments} inscription{totalEnrollments > 1 ? "s" : ""}
            </span>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left text-sm text-slate-500">
                  <th className="px-4 py-2">Salarié</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Formation</th>
                  <th className="px-4 py-2">Statut</th>
                  <th className="px-4 py-2">Debut accès</th>
                  <th className="px-4 py-2">Fin accès</th>
                  <th className="px-4 py-2">Paiement</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {enrollmentRows.map((item) => {
                  const actionMeta = getEnrollmentActionMeta(item);

                  return (
                    <tr
                      key={item.id}
                      id={`enrollment-${item.id}`}
                      className="rounded-2xl bg-slate-50 text-sm text-slate-800"
                    >
                      <td className="px-4 py-4 font-semibold text-slate-900">
                        {item.fullName}
                      </td>
                      <td className="px-4 py-4">{item.email}</td>
                      <td className="px-4 py-4">
                        <p className="font-semibold text-slate-900">{item.formationTitle}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">
                          {actionMeta.familyLabel}
                        </p>
                        <p className="mt-2 text-xs leading-5 text-slate-500">
                          {actionMeta.note}
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                            item.status
                          )}`}
                        >
                          {getStatusLabel(item.status)}
                        </span>
                      </td>
                      <td className="px-4 py-4">{formatDate(item.accessStart)}</td>
                      <td className="px-4 py-4">{formatDate(item.accessEnd)}</td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getPaymentClasses(
                            item.paymentStatus
                          )}`}
                        >
                          {getPaymentLabel(item.paymentStatus)}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex min-w-[220px] flex-col gap-2">
                          {actionMeta.planningHref && actionMeta.planningLabel && !item.isCompleted ? (
                            <Link
                              href={actionMeta.planningHref}
                              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
                            >
                              {actionMeta.planningLabel}
                            </Link>
                          ) : null}

                          <Link
                            href={actionMeta.offerHref}
                            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                          >
                            {actionMeta.offerLabel}
                          </Link>

                          {!item.isPaid && item.paymentOption.kind === "direct" ? (
                            <form action="/api/payments/checkout" method="POST">
                              <input type="hidden" name="enrollmentId" value={item.id} />
                              <input
                                type="hidden"
                                name="returnPath"
                                value="/employeur/dashboard"
                              />
                              <button
                                type="submit"
                                className="w-full rounded-lg bg-violet-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-violet-700"
                              >
                                Payer en ligne
                              </button>
                            </form>
                          ) : null}

                          {!item.isPaid && item.paymentOption.kind === "quote" ? (
                            <a
                              href={`/demande-devis?formation=${encodeURIComponent(
                                item.formationTitle || "Formation"
                              )}`}
                              className="inline-flex items-center justify-center rounded-lg border border-violet-300 px-3 py-2 text-xs font-semibold text-violet-700 transition hover:bg-violet-50"
                              title={item.paymentOption.reason}
                            >
                              Demander un devis
                            </a>
                          ) : null}

                          {item.isCompleted ? (
                            <form action="/api/attestation" method="POST">
                              <input type="hidden" name="enrollmentId" value={item.id} />
                              <button
                                type="submit"
                                className="w-full rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
                              >
                                Attestation
                              </button>
                            </form>
                          ) : (
                            <button
                              type="button"
                              disabled
                              className="cursor-not-allowed rounded-lg bg-slate-200 px-3 py-2 text-xs font-semibold text-slate-500"
                              title="Attestation disponible uniquement apres validations complète"
                            >
                              Parcours en cours
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {enrollmentRows.length === 0 && (
            <p className="mt-6 text-sm text-slate-500">
              Aucune inscription rattachee a cet employeur pour le moment.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
