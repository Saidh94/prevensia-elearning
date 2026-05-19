import Link from "next/link";
import { redirect } from "next/navigation";
import { getEnrollmentPaymentOption } from "@/lib/payments/catalog";
import { createClient } from "@/lib/supabase/server";

function formatDate(value: string | null) {
  if (!value) return "-";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "-" : date.toLocaleDateString("fr-FR");
}

function getStatusLabel(status: string | null) {
  switch (status) {
    case "completed":
      return "Terminée";
    case "pending_interview":
      return "Entretien à planifier";
    case "in_progress":
      return "En cours";
    case "not_started":
      return "Non démarrée";
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
  return paymentStatus === "paid" ? "Payé" : "En attente";
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
  role: string;
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

function getEnrollmentActionMeta(
  row: Pick<EnrollmentViewRow, "formationSlug" | "formationTitle">
): EmployerActionMeta {
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
      note: "Parcours e-learning suivi d'un entretien individuel de validation. Le salarié reste maître de la réservation finale.",
    };
  }

  if (
    searchableText.includes("bs") ||
    searchableText.includes("be manoeuvre") ||
    searchableText.includes("be manœuvre") ||
    searchableText.includes("manoeuvre") ||
    searchableText.includes("manœuvre")
  ) {
    return {
      familyLabel: isRecyclage ? "BS / BE recyclage" : "BS / BE Manœuvre",
      offerHref: "/formation-habilitation-electrique",
      offerLabel: "Voir l'offre BS / BE",
      planningHref: isRecyclage
        ? "/reservation-formation?category=bsbe_recyclage&audience=group&format=virtual"
        : "/reservation-formation?category=bsbe_initial&audience=group",
      planningLabel: isRecyclage
        ? "Voir la visio de recyclage"
        : "Voir les classes virtuelles",
      note: isRecyclage
        ? "Recyclage e-learning + visio accompagnée avec formateur. Le salarié réserve lui-même son créneau."
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
      offerLabel: "Voir l'offre électricien",
      planningHref: isRecyclage
        ? "/reservation-formation?category=b1b2brbc_recyclage&audience=group"
        : "/reservation-formation?category=b1b2brbc_initial&audience=group",
      planningLabel: isRecyclage
        ? "Voir le recyclage mixte"
        : "Voir la journée présentielle",
      note: "Parcours technique avec théorie e-learning puis mise en situation présentielle. Le salarié garde la main sur sa réservation.",
    };
  }

  return {
    familyLabel: "Formation PREVENSIA",
    offerHref: "/elearning",
    offerLabel: "Voir le catalogue e-learning",
    planningHref: "/demande-devis",
    planningLabel: "Voir l'organisation proposée",
    note: "Pilotage entreprise, accès apprenants et organisation à la demande.",
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
    .select("employer_id, role")
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
            Utilisateur connecté : {user.id}
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
            Employer ID :{" "}
            <span className="font-mono">{employerUser.employer_id}</span>
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
    .select("id, user_id, formation_id, status, access_start, access_end, payment_status")
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
  const formationIds = [
    ...new Set((enrollments ?? []).map((item) => item.formation_id)),
  ];

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
      "Non renseigné";
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
  const formationCount = new Set(
    enrollmentRows.map((item) => item.formationTitle)
  ).size;
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

  const employeeRowsMap = enrollmentRows.reduce<Map<string, EnrollmentViewRow[]>>(
    (acc, row) => {
      const existing = acc.get(row.userId) ?? [];
      existing.push(row);
      acc.set(row.userId, existing);
      return acc;
    },
    new Map()
  );

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
        fullName: firstRow?.fullName || "Non renseigné",
        email: firstRow?.email || "-",
        formationCount: rows.length,
        completedCount: rows.filter((row) => row.isCompleted).length,
        pendingInterviewCount: rows.filter(
          (row) => row.status === "pending_interview"
        ).length,
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
    <main className="min-h-screen bg-slate-50">

      {/* ── Barre de navigation sticky ── */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-3">
          <Link href="/" className="mr-3 flex shrink-0 items-center gap-2">
            <span className="rounded-md bg-red-700 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">Prévensia</span>
            <span className="hidden text-xs font-semibold text-slate-400 sm:block">Espace employeur</span>
          </Link>
          <div className="flex flex-1 items-center gap-2">
            <span className="text-sm font-semibold text-slate-900">{employer.company_name}</span>
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
              {employer.contact_name || employer.manager_email}
            </span>
          </div>
          <nav className="flex items-center gap-2">
            <Link
              href="/reservation-formation?audience=group"
              className="hidden sm:inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Planning
            </Link>
            <Link
              href="/demande-devis?type=habilitation"
              className="hidden sm:inline-flex items-center rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-100"
            >
              Demander un devis
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Mon espace →
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* ── Hero ── */}
        <section className="rounded-[2rem] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">Espace employeur</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">{employer.company_name}</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Pilotez les accès e-learning, les validations formateurs, les paiements et les attestations de vos salariés.
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Gestionnaire : {employer.contact_name || "Non renseigné"} · {employer.manager_email || "Email non renseigné"}
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <Link href="/formation-habilitation-electrique" className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-200">Catalogue</p>
              <p className="mt-2 text-base font-semibold">Détail des parcours</p>
              <p className="mt-1.5 text-xs leading-5 text-slate-400">H0B0 / H0V · BS/BE · B1 à BC · SST · Incendie…</p>
            </Link>
            <Link href="/reservation-formation?audience=group" className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-200">Planning groupe</p>
              <p className="mt-2 text-base font-semibold">Sessions ouvertes</p>
              <p className="mt-1.5 text-xs leading-5 text-slate-400">Classes virtuelles, entretiens, journées présentielles.</p>
            </Link>
            <Link href="/demande-devis?type=habilitation" className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-200">Sur mesure</p>
              <p className="mt-2 text-base font-semibold">Devis groupe</p>
              <p className="mt-1.5 text-xs leading-5 text-slate-400">Intra-entreprise, cohorte, besoin spécifique.</p>
            </Link>
          </div>
        </section>

        {/* ── KPIs ── */}
        <section className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Salariés suivis</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{employeeCount}</p>
            <p className="mt-1 text-xs text-slate-400">{totalEnrollments} inscription{totalEnrollments > 1 ? "s" : ""} au total</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Formations</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{formationCount}</p>
            <p className="mt-1 text-xs text-slate-400">{inProgressCount} parcours en cours</p>
            {totalEnrollments > 0 && (
              <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100">
                <div
                  className="h-1.5 rounded-full bg-blue-500 transition-all"
                  style={{ width: `${Math.round((completedCount / totalEnrollments) * 100)}%` }}
                />
              </div>
            )}
            {totalEnrollments > 0 && (
              <p className="mt-1 text-xs text-slate-400">{Math.round((completedCount / totalEnrollments) * 100)} % terminées</p>
            )}
          </div>

          <div className={`rounded-2xl border p-6 shadow-sm ${pendingInterviewCount > 0 ? "border-amber-200 bg-amber-50" : "border-slate-200 bg-white"}`}>
            <p className={`text-xs font-semibold uppercase tracking-wide ${pendingInterviewCount > 0 ? "text-amber-700" : "text-slate-400"}`}>
              Entretiens à planifier
            </p>
            <p className={`mt-2 text-3xl font-bold ${pendingInterviewCount > 0 ? "text-amber-900" : "text-slate-400"}`}>{pendingInterviewCount}</p>
            <p className={`mt-1 text-xs ${pendingInterviewCount > 0 ? "text-amber-700" : "text-slate-400"}`}>
              {pendingInterviewCount > 0 ? "Action requise — planifier la validation" : "Aucune validation en attente"}
            </p>
          </div>

          <div className={`rounded-2xl border p-6 shadow-sm ${unpaidCount > 0 ? "border-red-200 bg-red-50" : "border-emerald-200 bg-emerald-50"}`}>
            <p className={`text-xs font-semibold uppercase tracking-wide ${unpaidCount > 0 ? "text-red-700" : "text-emerald-700"}`}>
              Paiements
            </p>
            <p className={`mt-2 text-3xl font-bold ${unpaidCount > 0 ? "text-red-900" : "text-emerald-700"}`}>
              {unpaidCount > 0 ? unpaidCount : completedCount}
            </p>
            <p className={`mt-1 text-xs ${unpaidCount > 0 ? "text-red-700" : "text-emerald-700"}`}>
              {unpaidCount > 0 ? `dossier${unpaidCount > 1 ? "s" : ""} à régulariser` : `parcours terminés & attestés`}
            </p>
          </div>
        </section>

        {/* ── Alertes prioritaires ── */}
        {(pendingInterviewCount > 0 || unpaidCount > 0) && (
          <section className="mt-5 grid gap-4 lg:grid-cols-2">
            {pendingInterviewCount > 0 && (
              <article className="flex items-start gap-5 rounded-2xl border-2 border-amber-200 bg-white p-6 shadow-sm">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-xl">⏳</div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Priorité pédagogique</p>
                  <h2 className="mt-1 text-lg font-bold text-slate-900">
                    {pendingInterviewCount} validation{pendingInterviewCount > 1 ? "s" : ""} à organiser
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    {pendingInterviewCount > 1 ? "Ces salariés ont" : "Ce salarié a"} terminé le e-learning et attend{pendingInterviewCount > 1 ? "ent" : ""} un entretien de validation avec un formateur.
                  </p>
                  <Link href="/reservation-formation?audience=group" className="mt-4 inline-flex items-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
                    Voir le planning des sessions →
                  </Link>
                </div>
              </article>
            )}
            {unpaidCount > 0 && (
              <article className="flex items-start gap-5 rounded-2xl border-2 border-red-200 bg-white p-6 shadow-sm">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-xl">💳</div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-red-700">Priorité administrative</p>
                  <h2 className="mt-1 text-lg font-bold text-slate-900">
                    {unpaidCount} dossier{unpaidCount > 1 ? "s" : ""} à régulariser
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    {unpaidCount > 1 ? "Ces inscriptions n’ont" : "Cette inscription n’a"} pas encore le statut payé. Régularisez pour débloquer les attestations.
                  </p>
                  <Link href="/demande-devis?type=habilitation" className="mt-4 inline-flex items-center rounded-xl border border-red-300 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-100">
                    Lancer une demande de devis →
                  </Link>
                </div>
              </article>
            )}
          </section>
        )}

        {/* ── Vue salariés ── */}
        <section className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-red-600" />
              <h2 className="text-xl font-bold text-slate-900">Vue salariés</h2>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-600">
              {employeeSummaries.length} fiche{employeeSummaries.length > 1 ? "s" : ""}
            </span>
          </div>

          {employeeSummaries.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <p className="text-4xl">👥</p>
              <p className="text-sm font-semibold text-slate-600">Aucun salarié rattaché pour le moment</p>
              <p className="text-xs text-slate-400">Contactez PREVENSIA pour inscrire vos collaborateurs.</p>
            </div>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {employeeSummaries.map((employee) => {
                const priorityAction = employee.priorityRow
                  ? getEnrollmentActionMeta(employee.priorityRow)
                  : null;
                const progressPct = employee.formationCount > 0
                  ? Math.round((employee.completedCount / employee.formationCount) * 100)
                  : 0;
                const hasUrgency = employee.pendingInterviewCount > 0 || employee.unpaidCount > 0;

                return (
                  <article
                    key={employee.key}
                    className={`rounded-2xl border p-5 transition ${hasUrgency ? "border-amber-200 bg-amber-50/40" : "border-slate-200 bg-slate-50"}`}
                  >
                    {/* En-tête salarié */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-slate-600">
                          {(employee.fullName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()) || "?"}
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-slate-900">{employee.fullName}</h3>
                          <p className="text-xs text-slate-500">{employee.email}</p>
                        </div>
                      </div>
                      <span className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                        {employee.formationCount} formation{employee.formationCount > 1 ? "s" : ""}
                      </span>
                    </div>

                    {/* Barre de progression */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                        <span>Progression</span>
                        <span className="font-semibold text-slate-700">{employee.completedCount}/{employee.formationCount} terminées</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-200">
                        <div
                          className={`h-2 rounded-full transition-all ${progressPct === 100 ? "bg-emerald-500" : "bg-blue-500"}`}
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                    </div>

                    {/* Indicateurs */}
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="rounded-xl bg-white p-3 text-center">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Terminées</p>
                        <p className="mt-1 text-xl font-bold text-emerald-700">{employee.completedCount}</p>
                      </div>
                      <div className={`rounded-xl p-3 text-center ${employee.pendingInterviewCount > 0 ? "bg-amber-100" : "bg-white"}`}>
                        <p className={`text-xs font-semibold uppercase tracking-wide ${employee.pendingInterviewCount > 0 ? "text-amber-700" : "text-slate-400"}`}>Entretiens</p>
                        <p className={`mt-1 text-xl font-bold ${employee.pendingInterviewCount > 0 ? "text-amber-900" : "text-slate-400"}`}>{employee.pendingInterviewCount}</p>
                      </div>
                      <div className={`rounded-xl p-3 text-center ${employee.unpaidCount > 0 ? "bg-red-100" : "bg-white"}`}>
                        <p className={`text-xs font-semibold uppercase tracking-wide ${employee.unpaidCount > 0 ? "text-red-700" : "text-slate-400"}`}>Impayés</p>
                        <p className={`mt-1 text-xl font-bold ${employee.unpaidCount > 0 ? "text-red-900" : "text-slate-400"}`}>{employee.unpaidCount}</p>
                      </div>
                    </div>

                    <p className="mt-3 text-xs text-slate-500">
                      Accès jusqu’au{" "}
                      <span className="font-semibold text-slate-700">{formatDate(employee.latestAccessEnd)}</span>
                    </p>

                    {priorityAction ? (
                      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Parcours prioritaire</p>
                        <p className="mt-1.5 text-sm font-semibold text-slate-900">{priorityAction.familyLabel}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{priorityAction.note}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {priorityAction.planningHref && priorityAction.planningLabel ? (
                            <Link href={priorityAction.planningHref} className="inline-flex items-center rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800">
                              {priorityAction.planningLabel}
                            </Link>
                          ) : null}
                          <Link href={priorityAction.offerHref} className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50">
                            {priorityAction.offerLabel}
                          </Link>
                          <a href={`#enrollment-${employee.priorityRow.id}`} className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50">
                            Voir les dossiers
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

        {/* ── Détail des inscriptions ── */}
        <section className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-red-600" />
              <h2 className="text-xl font-bold text-slate-900">Détail des inscriptions</h2>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-600">
              {totalEnrollments} inscription{totalEnrollments > 1 ? "s" : ""}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-1.5">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Salarié</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Formation</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Statut</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Début</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Fin</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Paiement</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {enrollmentRows.map((item) => {
                  const actionMeta = getEnrollmentActionMeta(item);

                  return (
                    <tr
                      key={item.id}
                      id={`enrollment-${item.id}`}
                      className="bg-white text-sm"
                    >
                      <td className="rounded-l-xl px-4 py-3 whitespace-nowrap">
                        <p className="font-semibold text-slate-900">{item.fullName}</p>
                        <p className="mt-0.5 text-xs text-slate-500">{item.email}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-semibold text-slate-800">{item.formationTitle}</p>
                        <p className="mt-0.5 text-xs uppercase tracking-wide text-slate-400">{actionMeta.familyLabel}</p>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${getStatusClasses(item.status)}`}>
                          {getStatusLabel(item.status)}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-500 whitespace-nowrap">{formatDate(item.accessStart)}</td>
                      <td className="px-4 py-3 text-xs text-slate-500 whitespace-nowrap">{formatDate(item.accessEnd)}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${getPaymentClasses(item.paymentStatus)}`}>
                          {getPaymentLabel(item.paymentStatus)}
                        </span>
                      </td>
                      <td className="rounded-r-xl px-4 py-3">
                        <div className="flex flex-wrap gap-1.5">
                          {actionMeta.planningHref && actionMeta.planningLabel && !item.isCompleted ? (
                            <Link href={actionMeta.planningHref} className="inline-flex items-center rounded-lg bg-slate-900 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-800">
                              {actionMeta.planningLabel}
                            </Link>
                          ) : null}
                          <Link href={actionMeta.offerHref} className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50">
                            {actionMeta.offerLabel}
                          </Link>
                          {!item.isPaid && item.paymentOption.kind === "direct" ? (
                            <form action="/api/payments/checkout" method="POST">
                              <input type="hidden" name="enrollmentId" value={item.id} />
                              <input type="hidden" name="returnPath" value="/employeur/dashboard" />
                              <button type="submit" className="rounded-lg bg-violet-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-violet-700">
                                Payer
                              </button>
                            </form>
                          ) : null}
                          {!item.isPaid && item.paymentOption.kind === "quote" ? (
                            <a href={`/demande-devis?formation=${encodeURIComponent(item.formationTitle || "Formation")}`} className="inline-flex items-center rounded-lg border border-violet-200 bg-violet-50 px-2.5 py-1.5 text-xs font-semibold text-violet-700 transition hover:bg-violet-100" title={item.paymentOption.reason}>
                              Devis
                            </a>
                          ) : null}
                          {item.isCompleted ? (
                            <form action="/api/attestation" method="POST">
                              <input type="hidden" name="enrollmentId" value={item.id} />
                              <button type="submit" className="rounded-lg bg-emerald-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700">
                                Attestation
                              </button>
                            </form>
                          ) : (
                            <button type="button" disabled className="cursor-not-allowed rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-400" title="Disponible après validation complète">
                              Attestation
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
        </section>

        {/* ── Formats pédagogiques ── */}
        <section className="mt-5 grid gap-4 lg:grid-cols-3">
          <article className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">H0B0 / H0V</p>
            <h3 className="mt-2 text-base font-bold text-slate-900">E-learning + entretien 30 min</h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">Parcours théorique en ligne, quiz, puis entretien individuel formateur.</p>
          </article>
          <article className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">BS / BE Manœuvre</p>
            <h3 className="mt-2 text-base font-bold text-slate-900">E-learning + classe virtuelle</h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">Modules en ligne puis classe virtuelle animée, recyclage visio possible.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">B1 / B2 / BR / BC</p>
            <h3 className="mt-2 text-base font-bold text-slate-900">E-learning + journée présentielle</h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">Préparation e-learning puis mise en situation encadrée en présentiel.</p>
          </article>
        </section>

      </div>
    </main>
  );
}