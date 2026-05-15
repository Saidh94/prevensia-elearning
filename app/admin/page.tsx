import { getEnrollmentPaymentOption } from "@/lib/payments/catalog";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

function formatDate(value: string | null) {
  if (!value) return "—";
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? "—" : d.toLocaleDateString("fr-FR");
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
      return status || "—";
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

type ProfileRow = {
  role: string | null;
};

type EnrollmentRow = {
  id: string;
  user_id: string;
  formation_id: string;
  status: string | null;
  access_start: string | null;
  access_end: string | null;
  company_name: string | null;
  manager_email: string | null;
  payment_status: string | null;
};

type UserProfileRow = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
};

type FormationRow = {
  id: string;
  title: string | null;
};

type AdminSearchParams = Promise<{
  q?: string | string[];
  company?: string | string[];
  status?: string | string[];
  payment?: string | string[];
}>;

type AdminRow = {
  id: string;
  fullName: string;
  email: string;
  formationTitle: string;
  companyName: string;
  managerEmail: string;
  status: string | null;
  accessStart: string | null;
  accessEnd: string | null;
  paymentStatus: string | null;
};

function getSingleValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams?: AdminSearchParams;
}) {
  const supabase = await createClient();
  const params = searchParams ? await searchParams : {};

  const q = getSingleValue(params.q).trim().toLowerCase();
  const companyFilter = getSingleValue(params.company).trim();
  const statusFilter = getSingleValue(params.status).trim();
  const paymentFilter = getSingleValue(params.payment).trim();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle<ProfileRow>();

  if (profile?.role !== "admin") {
    redirect("/");
  }

  const { data: enrollments, error: enrollmentsError } = await supabase
    .from("enrollments")
    .select(`
      id,
      user_id,
      formation_id,
      status,
      access_start,
      access_end,
      company_name,
      manager_email,
      payment_status
    `)
    .order("access_start", { ascending: false })
    .returns<EnrollmentRow[]>();

  if (enrollmentsError) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-red-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">
            Admin PREVENSIA
          </h1>
          <p className="mt-4 text-sm text-red-600">
            Impossible de charger les inscriptions.
          </p>
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
        .returns<UserProfileRow[]>()
    : { data: [] };

  const { data: formations } = formationIds.length
    ? await supabase
        .from("formations")
        .select("id, title")
        .in("id", formationIds)
        .returns<FormationRow[]>()
    : { data: [] };

  const profilesMap = new Map((profiles ?? []).map((item) => [item.id, item]));
  const formationsMap = new Map((formations ?? []).map((item) => [item.id, item]));

  const rows: AdminRow[] = (enrollments ?? []).map((item) => {
    const userProfile = profilesMap.get(item.user_id);
    const formation = formationsMap.get(item.formation_id);

    return {
      id: item.id,
      fullName:
        [userProfile?.first_name, userProfile?.last_name]
          .filter(Boolean)
          .join(" ")
          .trim() || "Non renseigné",
      email: userProfile?.email || "—",
      formationTitle: formation?.title || "—",
      companyName: item.company_name || "—",
      managerEmail: item.manager_email || "—",
      status: item.status,
      accessStart: item.access_start,
      accessEnd: item.access_end,
      paymentStatus: item.payment_status,
    };
  });

  const companyOptions = [...new Set(rows.map((row) => row.companyName).filter((v) => v && v !== "—"))].sort(
    (a, b) => a.localeCompare(b, "fr")
  );

  const filteredRows = rows.filter((row) => {
    const matchesSearch =
      !q ||
      row.fullName.toLowerCase().includes(q) ||
      row.email.toLowerCase().includes(q) ||
      row.formationTitle.toLowerCase().includes(q) ||
      row.companyName.toLowerCase().includes(q);

    const matchesCompany = !companyFilter || row.companyName === companyFilter;
    const matchesStatus = !statusFilter || row.status === statusFilter;
    const matchesPayment = !paymentFilter || row.paymentStatus === paymentFilter;

    return matchesSearch && matchesCompany && matchesStatus && matchesPayment;
  });

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
                Administration
              </p>
              <h1 className="mt-3 text-3xl font-bold text-slate-900">
                Admin PREVENSIA
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Gestion des dossiers clients, apprenants, paiements et activations.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href="/dashboard"
                className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Dashboard
              </Link>
              <Link
                href="/mot-de-passe"
                className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Mot de passe
              </Link>
              <Link
                href="/admin/support"
                className="inline-flex items-center rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                Espace support
              </Link>
              <Link
                href="/admin/quiz-analytics"
                className="inline-flex items-center rounded-xl border border-indigo-300 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100"
              >
                Analytics quiz
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Inscriptions</h2>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              {filteredRows.length} résultat{filteredRows.length > 1 ? "s" : ""}
            </span>
          </div>

          <form method="GET" className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Rechercher salarié, email, entreprise..."
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
            />

            <select
              name="company"
              defaultValue={companyFilter}
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
            >
              <option value="">Toutes les entreprises</option>
              {companyOptions.map((company) => (
                <option key={company} value={company}>
                  {company}
                </option>
              ))}
            </select>

            <select
              name="status"
              defaultValue={statusFilter}
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
            >
              <option value="">Tous les statuts</option>
              <option value="completed">Terminée</option>
              <option value="pending_interview">Entretien à planifier</option>
              <option value="in_progress">En cours</option>
              <option value="not_started">Non démarrée</option>
            </select>

            <select
              name="payment"
              defaultValue={paymentFilter}
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
            >
              <option value="">Tous les paiements</option>
              <option value="paid">Payé</option>
              <option value="pending">En attente</option>
            </select>

            <div className="flex gap-2">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Filtrer
              </button>
              <a
                href="/admin"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Réinitialiser
              </a>
            </div>
          </form>

          <div className="mt-6 overflow-x-auto pb-2">
            <table className="w-full min-w-[1450px] border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left text-sm text-slate-500">
                  <th className="px-4 py-2 whitespace-nowrap">Salarié</th>
                  <th className="px-4 py-2 whitespace-nowrap">Email</th>
                  <th className="px-4 py-2 whitespace-nowrap">Formation</th>
                  <th className="px-4 py-2 whitespace-nowrap">Entreprise</th>
                  <th className="px-4 py-2 whitespace-nowrap">Manager</th>
                  <th className="px-4 py-2 whitespace-nowrap">Statut</th>
                  <th className="px-4 py-2 whitespace-nowrap">Début accès</th>
                  <th className="px-4 py-2 whitespace-nowrap">Fin accès</th>
                  <th className="px-4 py-2 whitespace-nowrap">Paiement</th>
                  <th className="px-4 py-2 whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((item) => {
                  const isPaid = item.paymentStatus === "paid";
                  const paymentOption = getEnrollmentPaymentOption({
                    formationTitle: item.formationTitle,
                  });
                  const canDownloadAttestation = item.status === "completed";
                  const canValidateInterview = item.status === "pending_interview";
                  const canForceAttestation = item.status !== "completed";

                  return (
                    <tr
                      key={item.id}
                      className="rounded-2xl bg-slate-50 text-sm text-slate-800"
                    >
                      <td className="px-4 py-4 font-semibold text-slate-900 whitespace-nowrap">
                        {item.fullName}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">{item.email}</td>
                      <td className="px-4 py-4 min-w-[220px]">{item.formationTitle}</td>
                      <td className="px-4 py-4 min-w-[160px]">{item.companyName}</td>
                      <td className="px-4 py-4 whitespace-nowrap">{item.managerEmail}</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                            item.status
                          )}`}
                        >
                          {getStatusLabel(item.status)}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {formatDate(item.accessStart)}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {formatDate(item.accessEnd)}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getPaymentClasses(
                            item.paymentStatus
                          )}`}
                        >
                          {getPaymentLabel(item.paymentStatus)}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex flex-col gap-2">
                          {isPaid ? (
                            <form action="/api/admin/activate" method="POST">
                              <input type="hidden" name="enrollmentId" value={item.id} />
                              <button
                                type="submit"
                                className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                              >
                                Activer 30 jours
                              </button>
                            </form>
                          ) : (
                            <button
                              type="button"
                              disabled
                              className="cursor-not-allowed rounded-lg bg-slate-200 px-3 py-2 text-xs font-semibold text-slate-500"
                              title="Activation réservée aux dossiers payés"
                            >
                              Paiement requis
                            </button>
                          )}

                          {!isPaid && paymentOption.kind === "direct" ? (
                            <form action="/api/payments/checkout" method="POST">
                              <input type="hidden" name="enrollmentId" value={item.id} />
                              <input type="hidden" name="returnPath" value="/admin" />
                              <button
                                type="submit"
                                className="rounded-lg bg-violet-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-violet-700"
                              >
                                Payer en ligne
                              </button>
                            </form>
                          ) : null}

                          {!isPaid && paymentOption.kind === "quote" ? (
                            <a
                              href={`/demande-devis?formation=${encodeURIComponent(
                                item.formationTitle
                              )}`}
                              className="inline-flex items-center justify-center rounded-lg border border-violet-300 px-3 py-2 text-xs font-semibold text-violet-700 transition hover:bg-violet-50"
                              title={paymentOption.reason}
                            >
                              Sur devis
                            </a>
                          ) : null}

                          <form action="/api/admin/payment" method="POST">
                            <input type="hidden" name="enrollmentId" value={item.id} />
                            <button
                              type="submit"
                              className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
                            >
                              Marquer payé
                            </button>
                          </form>
                          {canDownloadAttestation ? (
                            <form action="/api/attestation" method="POST">
                              <input
                                type="hidden"
                                name="enrollmentId"
                                value={item.id}
                              />
                              <button
                                type="submit"
                                className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
                                title="Télécharger l'attestation"
                              >
                                Attestation
                              </button>
                            </form>
                          ) : null}

                          {canValidateInterview ? (
                            <a
                              href="/admin/validations"
                              className="inline-flex items-center justify-center rounded-lg border border-amber-300 px-3 py-2 text-xs font-semibold text-amber-700 transition hover:bg-amber-50"
                              title="Ouvrir la page de validation finale"
                            >
                              Valider entretien
                            </a>
                          ) : null}

                          {canForceAttestation ? (
                            <form action="/api/attestation" method="POST">
                              <input
                                type="hidden"
                                name="enrollmentId"
                                value={item.id}
                              />
                              <input
                                type="hidden"
                                name="forceAdminCompletion"
                                value="true"
                              />
                              <button
                                type="submit"
                                className="rounded-lg border border-slate-900 px-3 py-2 text-xs font-semibold text-slate-900 transition hover:bg-slate-100"
                                title="Forcer le statut terminé et télécharger l'attestation"
                              >
                                Forcer attestation
                              </button>
                            </form>
                          ) : null}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredRows.length === 0 && (
            <p className="mt-6 text-sm text-slate-500">
              Aucun résultat pour les filtres sélectionnés.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
