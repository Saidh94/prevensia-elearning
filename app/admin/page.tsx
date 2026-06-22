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
import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ConfirmActivateButton } from "./components/ConfirmActivateButton";
import { ConfirmPaymentButton } from "./components/ConfirmPaymentButton";
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

  // ── Données IA ────────────────────────────────────────────────────────────
  const adminDb = createAdminClient();
  const today = new Date().toISOString().split("T")[0];

  const [{ data: leadsAujourdhui }, { data: kpiAujourdhui }, { data: derniersAgents }, { data: articlesAValider }] = await Promise.all([
    adminDb ? adminDb.from("leads").select("id", { count: "exact" }).gte("created_at", today) : Promise.resolve({ data: null }),
    adminDb ? adminDb.from("kpi_daily").select("gsc_clicks, new_leads, new_enrollments, revenue_stripe").eq("date", today).maybeSingle() : Promise.resolve({ data: null }),
    adminDb ? adminDb.from("agent_logs").select("agent_name, status, executed_at").order("executed_at", { ascending: false }).limit(3) : Promise.resolve({ data: null }),
    adminDb ? adminDb.from("blog_posts").select("id", { count: "exact" }).eq("status", "review") : Promise.resolve({ data: null }),
  ]);

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
    <main className="min-h-screen bg-slate-50">

      {/* ── Barre de navigation sticky ── */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-3">
          <Link href="/" className="mr-3 flex shrink-0 items-center gap-2">
            <span className="rounded-md bg-red-700 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">Prévensia</span>
            <span className="hidden text-xs font-semibold text-slate-400 sm:block">Admin</span>
          </Link>
          <nav className="flex flex-1 flex-wrap gap-1">
            <Link href="/admin" className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
              Inscriptions
            </Link>
            <Link href="/admin/leads" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200">
              👥 Leads
            </Link>
            <Link href="/admin/kpis" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200">
              📊 KPIs
            </Link>
            <Link href="/admin/agents" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200">
              🤖 Agents IA
            </Link>
            <Link href="/admin/blog" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-violet-50 hover:text-violet-700 hover:border-violet-200">
              ✍️ Blog IA
            </Link>
            <Link href="/admin/seo" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200">
              🔍 SEO
            </Link>
            <Link href="/admin/support" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200">
              Support
            </Link>
            <Link href="/admin/quiz-analytics" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200">
              Analytics
            </Link>
            <Link href="/admin/calendrier-global" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200">
              📅 Calendrier
            </Link>
            <Link href="/admin/entretiens" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200">
              🎥 Entretiens
            </Link>
            <Link href="/admin/audit-logs" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50">
              📋 Journal
            </Link>
          </nav>
          <Link href="/dashboard" className="shrink-0 text-xs font-medium text-slate-400 transition hover:text-slate-800">
            Mon espace →
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* ── Hero ── */}
        <section className="rounded-[2rem] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">Administration</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Tableau de bord PREVENSIA</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Gestion des dossiers clients, apprenants, paiements et activations. Toutes les inscriptions en temps réel.
          </p>
        </section>

        {/* ── Widget IA — chiffres du jour ── */}
        <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/admin/leads" className="group rounded-2xl border border-blue-200 bg-blue-50 p-5 transition hover:shadow-md hover:bg-blue-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">Leads aujourd&apos;hui</p>
            <p className="mt-3 text-4xl font-bold text-blue-900">{leadsAujourdhui?.length ?? 0}</p>
            <p className="mt-1 text-xs text-blue-600">Voir le CRM →</p>
          </Link>
          <Link href="/admin/kpis" className="group rounded-2xl border border-emerald-200 bg-emerald-50 p-5 transition hover:shadow-md hover:bg-emerald-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Revenus HT (aujourd&apos;hui)</p>
            <p className="mt-3 text-4xl font-bold text-emerald-900">{kpiAujourdhui?.revenue_stripe ? `${kpiAujourdhui.revenue_stripe} €` : "—"}</p>
            <p className="mt-1 text-xs text-emerald-600">Clics GSC : {kpiAujourdhui?.gsc_clicks ?? "—"}</p>
          </Link>
          <Link href="/admin/blog" className="group rounded-2xl border border-violet-200 bg-violet-50 p-5 transition hover:shadow-md hover:bg-violet-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">Articles à valider</p>
            <p className="mt-3 text-4xl font-bold text-violet-900">{articlesAValider?.length ?? 0}</p>
            <p className="mt-1 text-xs text-violet-600">Blog IA →</p>
          </Link>
          <Link href="/admin/agents" className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md hover:bg-slate-50">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Derniers agents IA</p>
            <div className="mt-3 space-y-1.5">
              {(derniersAgents ?? []).slice(0, 3).map((ag, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <span className={ag.status === "success" ? "text-emerald-500" : "text-red-400"}>{ag.status === "success" ? "✓" : "✗"}</span>
                  <span className="text-slate-700 font-medium truncate">{ag.agent_name}</span>
                </div>
              ))}
              {!derniersAgents?.length && <p className="text-xs text-slate-400">Aucun log encore</p>}
            </div>
          </Link>
        </section>

        {/* ── Alertes urgentes ── */}
        {(kpis.pendingInterview > 0 || kpis.pendingPayment > 0 || kpis.expiringAccess > 0) && (
          <section className="mt-5 grid gap-3 sm:grid-cols-3">
            {kpis.pendingInterview > 0 && (
              <a href="/admin?status=pending_interview" className="flex items-center gap-4 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 transition hover:bg-amber-100">
                <span className="text-3xl">⏳</span>
                <div>
                  <p className="text-2xl font-bold text-amber-900">{kpis.pendingInterview}</p>
                  <p className="text-sm font-semibold text-amber-800">Entretien{kpis.pendingInterview > 1 ? "s" : ""} à planifier</p>
                  <p className="mt-0.5 text-xs text-amber-700">Action requise →</p>
                </div>
              </a>
            )}
            {kpis.pendingPayment > 0 && (
              <a href="/admin?payment=pending" className="flex items-center gap-4 rounded-2xl border-2 border-red-300 bg-red-50 p-5 transition hover:bg-red-100">
                <span className="text-3xl">💳</span>
                <div>
                  <p className="text-2xl font-bold text-red-900">{kpis.pendingPayment}</p>
                  <p className="text-sm font-semibold text-red-800">Paiement{kpis.pendingPayment > 1 ? "s" : ""} en attente</p>
                  <p className="mt-0.5 text-xs text-red-700">À régulariser →</p>
                </div>
              </a>
            )}
            {kpis.expiringAccess > 0 && (
              <a href="/admin?status=in_progress" className="flex items-center gap-4 rounded-2xl border-2 border-orange-300 bg-orange-50 p-5 transition hover:bg-orange-100">
                <span className="text-3xl">⚠️</span>
                <div>
                  <p className="text-2xl font-bold text-orange-900">{kpis.expiringAccess}</p>
                  <p className="text-sm font-semibold text-orange-800">Accès expirant ≤ 7 j</p>
                  <p className="mt-0.5 text-xs text-orange-700">À surveiller →</p>
                </div>
              </a>
            )}
          </section>
        )}

        {/* ── KPIs ── */}
        <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { label: "Apprenants uniques",    value: kpis.uniqueApprenants, sub: "profils distincts",         color: "text-slate-900" },
            { label: "Inscriptions totales",  value: kpis.total,            sub: "tous statuts",               color: "text-slate-900" },
            { label: "Payées",                value: kpis.paid,             sub: `sur ${kpis.total} inscrip.`, color: "text-emerald-700" },
            { label: "En cours",              value: kpis.inProgress,       sub: "parcours actifs",            color: "text-blue-700" },
            { label: "Terminées",             value: kpis.completed,        sub: "parcours validés",           color: "text-violet-700" },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{kpi.label}</p>
              <p className={`mt-2 text-3xl font-bold ${kpi.color}`}>{kpi.value}</p>
              <p className="mt-1 text-xs text-slate-400">{kpi.sub}</p>
            </div>
          ))}
        </section>

        {/* ── Sessions présentiel ── */}
        <section className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-red-600" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Capacité en temps réel</p>
              <h2 className="text-xl font-bold text-slate-900">Sessions présentiel</h2>
            </div>
          </div>
          <SessionsCapacityWidget />
        </section>

        {/* ── Table inscriptions ── */}
        <section className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-red-600" />
              <h2 className="text-xl font-bold text-slate-900">Inscriptions</h2>
            </div>
            <span className="rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-600">
              {filteredRows.length} résultat{filteredRows.length > 1 ? "s" : ""}
            </span>
          </div>

          {/* Filtres rapides */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Filtre :</span>
            <a href="/admin?status=pending_interview" className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition ${statusFilter === "pending_interview" ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-800 hover:bg-amber-100"}`}>
              ⏳ Entretien ({rows.filter((r) => r.status === "pending_interview").length})
            </a>
            <a href="/admin?payment=pending" className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition ${paymentFilter === "pending" ? "bg-red-600 text-white" : "bg-red-50 text-red-800 hover:bg-red-100"}`}>
              💳 Impayés ({rows.filter((r) => r.paymentStatus === "pending").length})
            </a>
            <a href="/admin?status=in_progress" className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition ${statusFilter === "in_progress" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-800 hover:bg-blue-100"}`}>
              📚 En cours ({rows.filter((r) => r.status === "in_progress").length})
            </a>
            <a href="/admin?status=not_started" className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition ${statusFilter === "not_started" ? "bg-slate-700 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}>
              🔒 Non démarrées ({rows.filter((r) => r.status === "not_started").length})
            </a>
            <a href="/admin?status=completed" className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition ${statusFilter === "completed" ? "bg-violet-600 text-white" : "bg-violet-50 text-violet-800 hover:bg-violet-100"}`}>
              ✅ Terminées ({rows.filter((r) => r.status === "completed").length})
            </a>
            {(statusFilter || paymentFilter || companyFilter || q) && (
              <a href="/admin" className="inline-flex items-center rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-300">
                ✕ Effacer tout
              </a>
            )}
          </div>

          {/* Barre de recherche & filtres avancés */}
          <form method="GET" className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Nom, email, entreprise…"
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white"
            />
            <select name="company" defaultValue={companyFilter} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white">
              <option value="">Toutes les entreprises</option>
              {companyOptions.map((company) => (
                <option key={company} value={company}>{company}</option>
              ))}
            </select>
            <select name="status" defaultValue={statusFilter} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white">
              <option value="">Tous les statuts</option>
              <option value="completed">Terminée</option>
              <option value="pending_interview">Entretien à planifier</option>
              <option value="in_progress">En cours</option>
              <option value="not_started">Non démarrée</option>
            </select>
            <select name="payment" defaultValue={paymentFilter} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white">
              <option value="">Tous les paiements</option>
              <option value="paid">Payé</option>
              <option value="pending">En attente</option>
            </select>
            <div className="flex gap-2">
              <button type="submit" className="flex-1 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
                Filtrer
              </button>
              <a href="/admin" className="flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-500 transition hover:bg-slate-50">
                ✕
              </a>
            </div>
          </form>

          {/* Table */}
          <div className="mt-6 overflow-x-auto pb-2">
            <table className="w-full min-w-[1450px] border-separate border-spacing-y-1.5">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 whitespace-nowrap">Salarié</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 whitespace-nowrap">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 whitespace-nowrap">Formation</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 whitespace-nowrap">Entreprise</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 whitespace-nowrap">Manager</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 whitespace-nowrap">Statut</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 whitespace-nowrap">Début</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 whitespace-nowrap">Fin</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 whitespace-nowrap">Paiement</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((item) => {
                  const isPaid = item.paymentStatus === "paid";
                  const paymentOption = getEnrollmentPaymentOption({ formationTitle: item.formationTitle });
                  const canDownloadAttestation = item.status === "completed";
                  const canValidateInterview = item.status === "pending_interview";
                  const canForceAttestation = item.status !== "completed";
                  const isUrgent = item.status === "pending_interview" || item.paymentStatus === "pending";

                  return (
                    <tr
                      key={item.id}
                      className={`text-sm transition ${isUrgent ? "bg-amber-50/70" : "bg-white"}`}
                    >
                      <td className="rounded-l-xl px-4 py-3 font-semibold text-slate-900 whitespace-nowrap">{item.fullName}</td>
                      <td className="px-4 py-3 text-slate-500 text-xs whitespace-nowrap">{item.email}</td>
                      <td className="px-4 py-3 min-w-[200px] text-slate-800 text-sm">{item.formationTitle}</td>
                      <td className="px-4 py-3 min-w-[140px] text-slate-600 text-sm">{item.companyName}</td>
                      <td className="px-4 py-3 text-slate-500 text-xs whitespace-nowrap">{item.managerEmail}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex flex-col gap-1">
                          <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${getStatusClasses(item.status)}`}>
                            {getStatusLabel(item.status)}
                          </span>
                          {item.forcedByAdmin && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
                              ⚠ Forcé admin
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-500 whitespace-nowrap">{formatDate(item.accessStart)}</td>
                      <td className="px-4 py-3 text-xs text-slate-500 whitespace-nowrap">{formatDate(item.accessEnd)}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${getPaymentClasses(item.paymentStatus)}`}>
                          {getPaymentLabel(item.paymentStatus)}
                        </span>
                      </td>
                      <td className="rounded-r-xl px-4 py-3 whitespace-nowrap">
                        <div className="flex flex-wrap gap-1.5">
                          {isPaid ? (
                            <ConfirmActivateButton enrollmentId={item.id} learnerName={item.fullName} />
                          ) : (
                            <button type="button" disabled className="cursor-not-allowed rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-400" title="Activation réservée aux dossiers payés">
                              Paiement requis
                            </button>
                          )}
                          {!isPaid && paymentOption.kind === "direct" ? (
                            <form action="/api/payments/checkout" method="POST">
                              <input type="hidden" name="enrollmentId" value={item.id} />
                              <input type="hidden" name="returnPath" value="/admin" />
                              <button type="submit" className="rounded-lg bg-violet-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-violet-700">
                                Payer
                              </button>
                            </form>
                          ) : null}
                          {!isPaid && paymentOption.kind === "quote" ? (
                            <a href={`/demande-devis?formation=${encodeURIComponent(item.formationTitle)}`} className="inline-flex items-center rounded-lg border border-violet-200 bg-violet-50 px-2.5 py-1.5 text-xs font-semibold text-violet-700 transition hover:bg-violet-100" title={paymentOption.reason}>
                              Devis
                            </a>
                          ) : null}
                          <ConfirmPaymentButton enrollmentId={item.id} learnerName={item.fullName} />
                          {canDownloadAttestation ? (
                            <form action="/api/attestation" method="POST">
                              <input type="hidden" name="enrollmentId" value={item.id} />
                              <button type="submit" className="rounded-lg bg-emerald-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700">
                                Attestation
                              </button>
                            </form>
                          ) : null}
                          {canValidateInterview ? (
                            <a href="/admin/validations" className="inline-flex items-center rounded-lg border border-amber-300 bg-amber-50 px-2.5 py-1.5 text-xs font-semibold text-amber-700 transition hover:bg-amber-100">
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
            <div className="mt-8 flex flex-col items-center gap-3 py-8 text-center">
              <p className="text-4xl">🔍</p>
              <p className="text-sm font-semibold text-slate-600">Aucun résultat pour ces filtres</p>
              <a href="/admin" className="mt-1 text-sm text-red-600 underline hover:text-red-800">Effacer les filtres</a>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
