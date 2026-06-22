import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type SearchParams = Promise<{ q?: string; sort?: string }>;

export default async function AdminSeoPage({ searchParams }: { searchParams?: SearchParams }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion-admin");

  const params = searchParams ? await searchParams : {};
  const q = (params.q ?? "").toLowerCase();
  const sort = params.sort ?? "clicks";

  const admin = createAdminClient();
  if (!admin) return <p>Erreur DB</p>;

  // Agréger par mot-clé (dernières données)
  const { data: raw } = await admin
    .from("seo_tracking")
    .select("keyword, page_url, position, clicks, impressions, ctr, recorded_at")
    .order("recorded_at", { ascending: false })
    .limit(500);

  // Dédupliquer : garder la meilleure entrée par mot-clé
  const map = new Map<string, typeof raw extends (infer T)[] | null ? T : never>();
  for (const row of raw ?? []) {
    const key = row.keyword;
    const existing = map.get(key);
    if (!existing || row.clicks > existing.clicks) {
      map.set(key, row);
    }
  }

  let keywords = Array.from(map.values());

  if (q) {
    keywords = keywords.filter((k) => k.keyword.toLowerCase().includes(q) || k.page_url?.toLowerCase().includes(q));
  }

  // Tri
  keywords.sort((a, b) => {
    if (sort === "position") return (a.position ?? 99) - (b.position ?? 99);
    if (sort === "impressions") return (b.impressions ?? 0) - (a.impressions ?? 0);
    if (sort === "ctr") return (b.ctr ?? 0) - (a.ctr ?? 0);
    return (b.clicks ?? 0) - (a.clicks ?? 0); // default: clicks
  });

  const totaux = {
    clicks: keywords.reduce((s, k) => s + (k.clicks ?? 0), 0),
    impressions: keywords.reduce((s, k) => s + (k.impressions ?? 0), 0),
    avgPos: keywords.length > 0
      ? (keywords.reduce((s, k) => s + (k.position ?? 0), 0) / keywords.length).toFixed(1)
      : "—",
  };

  const positionColor = (pos: number | null) => {
    if (!pos) return "text-slate-400";
    if (pos <= 3) return "text-emerald-700 font-bold";
    if (pos <= 10) return "text-blue-700 font-semibold";
    if (pos <= 20) return "text-amber-700";
    return "text-slate-500";
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-3">
          <Link href="/" className="mr-3 flex shrink-0 items-center gap-2">
            <span className="rounded-md bg-red-700 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">Prévensia</span>
          </Link>
          <nav className="flex flex-1 flex-wrap gap-1">
            <Link href="/admin" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50">Inscriptions</Link>
            <Link href="/admin/leads" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700">👥 Leads</Link>
            <Link href="/admin/kpis" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">📊 KPIs</Link>
            <Link href="/admin/seo" className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">🔍 SEO</Link>
            <Link href="/admin/agents" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-emerald-50 hover:text-emerald-700">🤖 Agents IA</Link>
            <Link href="/admin/blog" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-violet-50 hover:text-violet-700">✍️ Blog IA</Link>
            <Link href="/admin/support" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50">Support</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <section className="rounded-[2rem] bg-gradient-to-r from-orange-900 via-orange-800 to-amber-800 p-8 text-white shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">Search Console</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Mots-clés SEO</h1>
          <p className="mt-2 text-sm text-orange-200">Données synchronisées chaque nuit depuis Google Search Console.</p>
        </section>

        {/* Totaux */}
        <section className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Mots-clés trackés</p>
            <p className="mt-3 text-4xl font-bold text-slate-900">{keywords.length}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-orange-50 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Clics totaux</p>
            <p className="mt-3 text-4xl font-bold text-orange-700">{totaux.clicks}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Position moyenne</p>
            <p className="mt-3 text-4xl font-bold text-slate-900">{totaux.avgPos}</p>
          </div>
        </section>

        {/* Tableau */}
        <section className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold text-slate-900">{keywords.length} mots-clés</h2>
            <form method="GET" className="flex gap-2">
              <input type="hidden" name="sort" value={sort} />
              <input type="text" name="q" defaultValue={q} placeholder="Filtrer…"
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none focus:border-slate-900" />
              <button type="submit" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">OK</button>
            </form>
          </div>

          {/* Tri rapide */}
          <div className="mt-4 flex gap-2">
            <span className="text-xs text-slate-400">Trier par :</span>
            {[["clicks", "Clics"], ["impressions", "Impressions"], ["position", "Position"], ["ctr", "CTR"]].map(([val, label]) => (
              <a key={val} href={`/admin/seo?sort=${val}${q ? `&q=${q}` : ""}`}
                className={`rounded-full px-3 py-0.5 text-xs font-semibold transition ${sort === val ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                {label}
              </a>
            ))}
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[700px] border-separate border-spacing-y-1 text-sm">
              <thead>
                <tr>
                  {["Mot-clé", "Page", "Position", "Clics", "Impressions", "CTR"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {keywords.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center">
                      <p className="text-4xl">🔍</p>
                      <p className="mt-3 text-sm font-semibold text-slate-600">Aucun mot-clé disponible</p>
                      <p className="mt-1 text-xs text-slate-400">Les données GSC arrivent chaque nuit à 3h.</p>
                    </td>
                  </tr>
                ) : (
                  keywords.map((kw, i) => (
                    <tr key={i} className="bg-white transition hover:bg-slate-50">
                      <td className="rounded-l-xl px-4 py-3 font-semibold text-slate-900">{kw.keyword}</td>
                      <td className="px-4 py-3 text-xs text-slate-400 max-w-[200px] truncate">
                        {kw.page_url ? new URL(kw.page_url).pathname : "—"}
                      </td>
                      <td className={`px-4 py-3 ${positionColor(kw.position)}`}>
                        {kw.position ? Number(kw.position).toFixed(1) : "—"}
                      </td>
                      <td className="px-4 py-3 font-semibold text-orange-700">{kw.clicks ?? 0}</td>
                      <td className="px-4 py-3 text-slate-500">{(kw.impressions ?? 0).toLocaleString("fr-FR")}</td>
                      <td className="rounded-r-xl px-4 py-3 text-slate-500">
                        {kw.ctr ? `${(Number(kw.ctr) * 100).toFixed(1)}%` : "—"}
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
