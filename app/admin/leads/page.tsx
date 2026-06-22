import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LeadStatusButton } from "./LeadStatusButton";

type SearchParams = Promise<{ status?: string; q?: string }>;

const STATUS_LABELS: Record<string, string> = {
  new: "Nouveau",
  contacted: "Contacté",
  qualified: "Qualifié",
  converted: "Converti",
  lost: "Perdu",
};

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-amber-100 text-amber-800",
  qualified: "bg-violet-100 text-violet-800",
  converted: "bg-emerald-100 text-emerald-800",
  lost: "bg-slate-100 text-slate-500",
};

export default async function AdminLeadsPage({ searchParams }: { searchParams?: SearchParams }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion-admin");

  const params = searchParams ? await searchParams : {};
  const statusFilter = params.status ?? "";
  const q = (params.q ?? "").toLowerCase();

  const admin = createAdminClient();
  if (!admin) return <p>Erreur DB</p>;

  let query = admin.from("leads").select("*").order("created_at", { ascending: false }).limit(200);
  if (statusFilter) query = query.eq("status", statusFilter);

  const { data: leads } = await query;

  const filtered = (leads ?? []).filter((l) => {
    if (!q) return true;
    return (
      l.email?.toLowerCase().includes(q) ||
      l.first_name?.toLowerCase().includes(q) ||
      l.last_name?.toLowerCase().includes(q) ||
      l.formation_interest?.toLowerCase().includes(q)
    );
  });

  const counts = {
    new: (leads ?? []).filter((l) => l.status === "new").length,
    contacted: (leads ?? []).filter((l) => l.status === "contacted").length,
    qualified: (leads ?? []).filter((l) => l.status === "qualified").length,
    converted: (leads ?? []).filter((l) => l.status === "converted").length,
    lost: (leads ?? []).filter((l) => l.status === "lost").length,
  };

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
            <Link href="/admin/leads" className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">👥 Leads</Link>
            <Link href="/admin/kpis" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700">📊 KPIs</Link>
            <Link href="/admin/agents" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700">🤖 Agents IA</Link>
            <Link href="/admin/support" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50">Support</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Hero */}
        <section className="rounded-[2rem] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 p-8 text-white shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">CRM</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Leads & Prospects</h1>
          <p className="mt-2 text-sm text-blue-200">Prospects entrants depuis le site, le chatbot et les formulaires.</p>
        </section>

        {/* Compteurs statut */}
        <section className="mt-5 grid gap-3 sm:grid-cols-5">
          {Object.entries(STATUS_LABELS).map(([key, label]) => (
            <Link
              key={key}
              href={`/admin/leads?status=${key}`}
              className={`rounded-2xl border-2 p-4 text-center transition hover:shadow-md ${statusFilter === key ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white"}`}
            >
              <p className={`text-2xl font-bold ${statusFilter === key ? "text-white" : "text-slate-900"}`}>
                {counts[key as keyof typeof counts]}
              </p>
              <p className={`mt-1 text-xs font-semibold ${statusFilter === key ? "text-slate-300" : "text-slate-500"}`}>{label}</p>
            </Link>
          ))}
        </section>

        {/* Table */}
        <section className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-slate-900">
              {filtered.length} lead{filtered.length > 1 ? "s" : ""}
              {statusFilter ? ` — ${STATUS_LABELS[statusFilter]}` : ""}
            </h2>
            {statusFilter && (
              <Link href="/admin/leads" className="text-xs text-slate-400 hover:text-slate-700">
                ✕ Effacer filtre
              </Link>
            )}
          </div>

          {/* Recherche */}
          <form method="GET" className="mt-4 flex gap-2">
            {statusFilter && <input type="hidden" name="status" value={statusFilter} />}
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Nom, email, formation…"
              className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-slate-900 focus:bg-white"
            />
            <button type="submit" className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">
              Chercher
            </button>
          </form>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[900px] border-separate border-spacing-y-1.5 text-sm">
              <thead>
                <tr>
                  {["Nom", "Email", "Téléphone", "Formation", "Source", "Score", "Statut", "Créé le"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((lead) => (
                  <tr key={lead.id} className="bg-white transition hover:bg-slate-50">
                    <td className="rounded-l-xl px-4 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      <Link href={`/admin/leads/${lead.id}`} className="hover:text-blue-700 hover:underline">
                        {[lead.first_name, lead.last_name].filter(Boolean).join(" ") || "—"}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500">{lead.email}</td>
                    <td className="px-4 py-3 text-xs text-slate-500">{lead.phone ?? "—"}</td>
                    <td className="px-4 py-3 text-slate-700">{lead.formation_interest ?? "—"}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                        {lead.source ?? "—"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-sm font-bold ${(lead.score ?? 0) >= 70 ? "text-emerald-700" : (lead.score ?? 0) >= 40 ? "text-amber-700" : "text-slate-400"}`}>
                        {lead.score ?? 0}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <LeadStatusButton leadId={lead.id} currentStatus={lead.status ?? "new"} />
                    </td>
                    <td className="rounded-r-xl px-4 py-3 text-xs text-slate-400 whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleDateString("fr-FR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filtered.length === 0 && (
              <div className="mt-8 py-12 text-center">
                <p className="text-4xl">👥</p>
                <p className="mt-3 text-sm font-semibold text-slate-600">Aucun lead pour l&apos;instant</p>
                <p className="mt-1 text-xs text-slate-400">Les prospects apparaîtront ici dès qu&apos;ils rempliront un formulaire.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
