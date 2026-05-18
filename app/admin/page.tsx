import {
  computeKPIs,
  formatDate,
  getPaymentClasses,
  getPaymentLabel,
  getStatusClasses,
  getStatusLabel,
  type AdminRow,
} from "@/lib/admin-helpers";
import { getEnrollmentPaymentOption } from "@/lib/payments/catalog";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ForceAttestationButton } from "./components/ForceAttestationButton";
import { SessionsCapacityWidget } from "./components/SessionsCapacityWidget";

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
  forced_by_admin: boolean | null;
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
      payment_status,
      forced_by_admin
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
      user_id: item.user_id,
      forcedByAdmin: item.forced_by_admin === true,
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

  // ── KPIs calculés depuis les données ──────────────────────────────────────
  const kpis = computeKPIs(rows);

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
              <Link
                href="/admin/calendrier-global"
                className="inline-flex items-center rounded-xl border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                📅 Calendrier
              </Link>
              <Link
                href="/admin/entretiens"
                className="inline-flex items-center rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                🎥 Entretiens
              </Link>
            </div>
          </div>
        </div>

        {/* ── KPIs ── */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Apprenants uniques",   value: kpis.uniqueApprenants, color: "text-slate-900",    bg: "bg-white" },
            { label: "Inscriptions totales",  value: kpis.total,            color: "text-slate-900",    bg: "bg-white" },
            { label: "Inscriptions payées",   value: kpis.paid,             color: "text-emerald-700",  bg: "bg-white" },
            { label: "En cours de formation", value: kpis.inProgress,       color: "text-blue-700",     bg: "bg-white" },
            { label: "Formations terminées",  value: kpis.completed,        color: "text-violet-700",   bg: "bg-white" },
            { label: "Entretiens à planifier",value: kpis.pendingInterview, color: kpis.pendingInterview > 0 ? "text-amber-700" : "text-slate-400", bg: kpis.pendingInterview > 0 ? "bg-amber-50" : "bg-white" },
            { label: "Paiements en attente",  value: kpis.pendingPayment,   color: kpis.pendingPayment  > 0 ? "text-red-700"   : "text-slate-400", bg: kpis.pendingPayment  > 0 ? "bg-red-50"   : "bg-white" },
            { label: "Accès expirant ≤7 j",   value: kpis.expiringAccess,   color: kpis.expiringAccess  > 0 ? "text-orange-700": "text-slate-400", bg: kpis.expiringAccess  > 0 ? "bg-orange-50": "bg-white" },
          ].map((kpi) => (
            <div key={kpi.label} className={`rounded-2xl border border-slate-200 ${kpi.bg} p-5 shadow-sm`}>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{kpi.label}</p>
              <p className={`mt-2 text-3xl font-bold ${kpi.color}`}>{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* ── Sessions présentiel — taux de remplissage ── */}
        <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                Capacité en temps réel
              </p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                Sessions présentiel
              </h2>
            </div>
          </div>
          <SessionsCapacityWidget />
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
                        <div className="flex flex-col gap-1">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                              item.status
                            )}`}
                          >
                            {getStatusLabel(item.status)}
                          </span>
                          {item.forcedByAdmin && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                              ⚠ Forcé admin
                            </span>
                          )}
                        </div>
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
                            <ForceAttestationButton enrollmentId={item.id} />
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
