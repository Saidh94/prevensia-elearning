import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const AGENT_LABELS: Record<string, string> = {
  "dashboard-matin": "☀️ Dashboard matin",
  "seo-hebdo": "🔍 SEO hebdo",
  "leads-followup": "📞 Leads followup",
  "gsc-sync": "📡 Sync GSC",
  "blog": "✍️ Blog IA",
  "gbp": "📍 Google Business",
};

export default async function AdminAgentsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion-admin");

  const admin = createAdminClient();
  if (!admin) return <p>Erreur DB</p>;

  const { data: logs } = await admin
    .from("agent_logs")
    .select("*")
    .order("executed_at", { ascending: false })
    .limit(100);

  const rows = logs ?? [];

  // Stats par agent
  const agentStats = rows.reduce<Record<string, { success: number; error: number; last: string }>>((acc, log) => {
    if (!acc[log.agent_name]) acc[log.agent_name] = { success: 0, error: 0, last: log.executed_at };
    if (log.status === "success") acc[log.agent_name].success++;
    else acc[log.agent_name].error++;
    return acc;
  }, {});

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
            <Link href="/admin/kpis" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700">📊 KPIs</Link>
            <Link href="/admin/agents" className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">🤖 Agents IA</Link>
            <Link href="/admin/support" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50">Support</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Hero */}
        <section className="rounded-[2rem] bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-800 p-8 text-white shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">Automatisation</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Agents IA</h1>
          <p className="mt-2 text-sm text-emerald-200">Suivi des exécutions automatiques — crons Vercel, synchronisation GSC, emails.</p>
        </section>

        {/* Statut par agent */}
        <section className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(agentStats).map(([name, stats]) => (
            <div key={name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-slate-900">{AGENT_LABELS[name] ?? name}</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  {stats.success} ok
                </span>
                {stats.error > 0 && (
                  <span className="flex items-center gap-1 text-xs font-semibold text-red-700">
                    <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
                    {stats.error} erreur{stats.error > 1 ? "s" : ""}
                  </span>
                )}
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Dernier : {new Date(stats.last).toLocaleDateString("fr-FR")} à{" "}
                {new Date(stats.last).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          ))}
          {Object.keys(agentStats).length === 0 && (
            <div className="col-span-4 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <p className="text-4xl">🤖</p>
              <p className="mt-3 text-sm font-semibold text-slate-600">Aucune exécution enregistrée</p>
              <p className="mt-1 text-xs text-slate-400">Les agents s&apos;exécuteront automatiquement selon leur planning.</p>
            </div>
          )}
        </section>

        {/* Logs détaillés */}
        <section className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Journal d&apos;exécution</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[700px] border-separate border-spacing-y-1 text-sm">
              <thead>
                <tr>
                  {["Agent", "Statut", "Résumé", "Date & heure"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-sm text-slate-400">Aucun log disponible</td>
                  </tr>
                ) : (
                  rows.map((log) => (
                    <tr key={log.id} className="bg-white transition hover:bg-slate-50">
                      <td className="rounded-l-xl px-4 py-3 font-semibold text-slate-900 whitespace-nowrap">
                        {AGENT_LABELS[log.agent_name] ?? log.agent_name}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          log.status === "success" ? "bg-emerald-100 text-emerald-800" :
                          log.status === "error" ? "bg-red-100 text-red-800" :
                          "bg-amber-100 text-amber-800"
                        }`}>
                          {log.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-600 max-w-xs truncate">
                        {log.output_summary ?? log.error_message ?? "—"}
                      </td>
                      <td className="rounded-r-xl px-4 py-3 text-xs text-slate-400 whitespace-nowrap">
                        {new Date(log.executed_at).toLocaleDateString("fr-FR")} à{" "}
                        {new Date(log.executed_at).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                      </td>
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
