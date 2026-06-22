import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AdminKpisPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion-admin");

  const admin = createAdminClient();
  if (!admin) return <p>Erreur DB</p>;

  const { data: kpis } = await admin
    .from("kpi_daily")
    .select("*")
    .order("date", { ascending: false })
    .limit(30);

  const rows = kpis ?? [];

  const totals = {
    leads: rows.reduce((s, r) => s + (r.new_leads ?? 0), 0),
    inscriptions: rows.reduce((s, r) => s + (r.new_enrollments ?? 0), 0),
    devis: rows.reduce((s, r) => s + (r.new_devis_requests ?? 0), 0),
    revenus: rows.reduce((s, r) => s + (r.revenue_stripe ?? 0), 0),
    clics: rows.reduce((s, r) => s + (r.gsc_clicks ?? 0), 0),
    impressions: rows.reduce((s, r) => s + (r.gsc_impressions ?? 0), 0),
  };

  const avgPosition =
    rows.filter((r) => r.avg_position).length > 0
      ? (rows.reduce((s, r) => s + (r.avg_position ?? 0), 0) / rows.filter((r) => r.avg_position).length).toFixed(1)
      : "—";

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-3">
          <Link href="/" className="mr-3 flex shrink-0 items-center gap-2">
            <span className="rounded-md bg-red-700 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">Prévensia</span>
            <span className="hidden text-xs font-semibold text-slate-400 sm:block">Admin</span>
          </Link>
          <nav className="flex flex-1 flex-wrap gap-1">
            <Link href="/admin" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50">Inscriptions</Link>
            <Link href="/admin/leads" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">👥 Leads</Link>
            <Link href="/admin/kpis" className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">📊 KPIs</Link>
            <Link href="/admin/agents" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700">🤖 Agents IA</Link>
            <Link href="/admin/support" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50">Support</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Hero */}
        <section className="rounded-[2rem] bg-gradient-to-r from-indigo-900 via-indigo-800 to-violet-800 p-8 text-white shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">Indicateurs</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">KPIs — 30 derniers jours</h1>
          <p className="mt-2 text-sm text-indigo-200">Données GSC, leads, inscriptions et revenus mis à jour quotidiennement.</p>
        </section>

        {/* Totaux 30j */}
        <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Leads 30j", value: totals.leads, color: "text-blue-700", bg: "bg-blue-50" },
            { label: "Inscriptions 30j", value: totals.inscriptions, color: "text-violet-700", bg: "bg-violet-50" },
            { label: "Revenus Stripe 30j", value: `${totals.revenus.toFixed(0)}€`, color: "text-emerald-700", bg: "bg-emerald-50" },
            { label: "Clics GSC 30j", value: totals.clics, color: "text-orange-700", bg: "bg-orange-50" },
          ].map((kpi) => (
            <div key={kpi.label} className={`rounded-2xl border border-slate-200 ${kpi.bg} p-6 shadow-sm`}>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{kpi.label}</p>
              <p className={`mt-3 text-4xl font-bold ${kpi.color}`}>{kpi.value}</p>
            </div>
          ))}
        </section>

        {/* Stats SEO */}
        <section className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Impressions GSC 30j</p>
            <p className="mt-3 text-4xl font-bold text-slate-900">{totals.impressions.toLocaleString("fr-FR")}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">CTR moyen</p>
            <p className="mt-3 text-4xl font-bold text-slate-900">
              {totals.impressions > 0 ? ((totals.clics / totals.impressions) * 100).toFixed(1) : 0}%
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Position moyenne</p>
            <p className="mt-3 text-4xl font-bold text-slate-900">{avgPosition}</p>
          </div>
        </section>

        {/* Tableau détaillé */}
        <section className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Historique quotidien</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[900px] border-separate border-spacing-y-1 text-sm">
              <thead>
                <tr>
                  {["Date", "Leads", "Inscrip.", "Devis", "Revenus €", "Clics GSC", "Impressions", "Position moy."].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-12 text-center">
                      <p className="text-4xl">📊</p>
                      <p className="mt-3 text-sm font-semibold text-slate-600">Aucune donnée pour l&apos;instant</p>
                      <p className="mt-1 text-xs text-slate-400">Les KPIs s&apos;alimentent automatiquement chaque nuit via le cron GSC.</p>
                    </td>
                  </tr>
                ) : (
                  rows.map((row) => (
                    <tr key={row.id} className="bg-white transition hover:bg-slate-50">
                      <td className="rounded-l-xl px-4 py-3 font-semibold text-slate-900">
                        {new Date(row.date).toLocaleDateString("fr-FR")}
                      </td>
                      <td className="px-4 py-3 text-blue-700 font-semibold">{row.new_leads ?? 0}</td>
                      <td className="px-4 py-3 text-violet-700 font-semibold">{row.new_enrollments ?? 0}</td>
                      <td className="px-4 py-3 text-slate-600">{row.new_devis_requests ?? 0}</td>
                      <td className="px-4 py-3 text-emerald-700 font-semibold">{(row.revenue_stripe ?? 0).toFixed(0)}€</td>
                      <td className="px-4 py-3 text-orange-700 font-semibold">{row.gsc_clicks ?? 0}</td>
                      <td className="px-4 py-3 text-slate-500">{(row.gsc_impressions ?? 0).toLocaleString("fr-FR")}</td>
                      <td className="rounded-r-xl px-4 py-3 text-slate-500">{row.avg_position ?? "—"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
