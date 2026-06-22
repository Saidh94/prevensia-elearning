import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AdminReseauxPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion-admin");

  const admin = createAdminClient();

  const { data: logs } = admin
    ? await admin
        .from("agent_logs")
        .select("agent_name, status, details, executed_at")
        .in("agent_name", ["gbp-post", "linkedin-post"])
        .order("executed_at", { ascending: false })
        .limit(30)
    : { data: null };

  const gbpLogs = (logs ?? []).filter((l) => l.agent_name === "gbp-post");
  const linkedinLogs = (logs ?? []).filter((l) => l.agent_name === "linkedin-post");

  const gbpConnected = !!process.env.GBP_LOCATION_NAME;
  const linkedinConnected = !!process.env.LINKEDIN_ACCESS_TOKEN;

  const lastGbp = gbpLogs[0];
  const lastLinkedin = linkedinLogs[0];

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
            <Link href="/admin/seo" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-orange-50 hover:text-orange-700">🔍 SEO</Link>
            <Link href="/admin/reseaux" className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">📣 Réseaux</Link>
            <Link href="/admin/agents" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-emerald-50 hover:text-emerald-700">🤖 Agents IA</Link>
            <Link href="/admin/blog" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-violet-50 hover:text-violet-700">✍️ Blog IA</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <section className="rounded-[2rem] bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-700 p-8 text-white shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">Social Media IA</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Réseaux Sociaux</h1>
          <p className="mt-2 text-sm text-indigo-200">
            Google Business Profile (mardi 8h) · LinkedIn (jeudi 9h) — posts générés automatiquement par IA.
          </p>
        </section>

        {/* Statut des connexions */}
        <section className="mt-5 grid gap-5 sm:grid-cols-2">

          {/* GBP */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Google Business Profile</p>
                <h2 className="mt-1 text-xl font-bold text-slate-900">GBP Posts</h2>
                <p className="mt-1 text-sm text-slate-500">Chaque mardi à 8h</p>
              </div>
              <span className={`mt-1 rounded-full px-3 py-1 text-xs font-semibold ${gbpConnected ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>
                {gbpConnected ? "✓ Connecté" : "⚠ À connecter"}
              </span>
            </div>

            {!gbpConnected && (
              <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-800">Connexion requise</p>
                <ol className="mt-3 space-y-2 text-xs text-amber-700">
                  <li>1. Active les APIs <strong>My Business Account Management</strong> et <strong>My Business Business Information</strong> dans Google Cloud</li>
                  <li>2. Clique le bouton ci-dessous pour autoriser l'accès</li>
                  <li>3. Copie le <strong>GBP_LOCATION_NAME</strong> et ajoute-le dans Vercel</li>
                </ol>
                <a href="/api/auth/gbp"
                  className="mt-4 inline-flex items-center rounded-xl bg-amber-800 px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
                  🔗 Connecter Google Business →
                </a>
              </div>
            )}

            {lastGbp && (
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Dernier post</p>
                <div className={`mt-2 flex items-center gap-2 rounded-xl p-3 ${lastGbp.status === "success" ? "bg-emerald-50" : "bg-red-50"}`}>
                  <span className="text-lg">{lastGbp.status === "success" ? "✅" : "❌"}</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {(lastGbp.details as { theme?: string })?.theme ?? "—"}
                    </p>
                    <p className="text-xs text-slate-500">
                      {new Date(lastGbp.executed_at).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Historique GBP */}
            {gbpLogs.length > 0 && (
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">Historique ({gbpLogs.length} posts)</p>
                <div className="space-y-2">
                  {gbpLogs.slice(0, 5).map((log, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5">
                      <span className={log.status === "success" ? "text-emerald-500" : "text-red-400"}>{log.status === "success" ? "✓" : "✗"}</span>
                      <span className="flex-1 text-xs font-medium text-slate-700">{(log.details as { theme?: string })?.theme ?? "—"}</span>
                      <span className="text-xs text-slate-400">{new Date(log.executed_at).toLocaleDateString("fr-FR")}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {gbpLogs.length === 0 && gbpConnected && (
              <p className="mt-5 text-sm text-slate-400">Aucun post GBP pour l'instant. Le prochain est prévu mardi à 8h.</p>
            )}
          </div>

          {/* LinkedIn */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">LinkedIn</p>
                <h2 className="mt-1 text-xl font-bold text-slate-900">Posts LinkedIn</h2>
                <p className="mt-1 text-sm text-slate-500">Chaque jeudi à 9h</p>
              </div>
              <span className={`mt-1 rounded-full px-3 py-1 text-xs font-semibold ${linkedinConnected ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>
                {linkedinConnected ? "✓ Connecté" : "⚠ À connecter"}
              </span>
            </div>

            {!linkedinConnected && (
              <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-800">Connexion requise</p>
                <ol className="mt-3 space-y-2 text-xs text-amber-700">
                  <li>1. Crée une app LinkedIn sur <strong>developers.linkedin.com</strong></li>
                  <li>2. Ajoute les produits <strong>Share on LinkedIn</strong> + <strong>Marketing Developer Platform</strong></li>
                  <li>3. Configure redirect URI : <code className="bg-amber-100 px-1 rounded">https://prevensia-formation.fr/api/auth/linkedin/callback</code></li>
                  <li>4. Ajoute <strong>LINKEDIN_CLIENT_ID</strong> et <strong>LINKEDIN_CLIENT_SECRET</strong> dans Vercel</li>
                  <li>5. Clique le bouton ci-dessous</li>
                </ol>
                <a href="/api/auth/linkedin"
                  className="mt-4 inline-flex items-center rounded-xl bg-[#0a66c2] px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
                  🔗 Connecter LinkedIn →
                </a>
              </div>
            )}

            {lastLinkedin && (
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Dernier post</p>
                <div className={`mt-2 flex items-center gap-2 rounded-xl p-3 ${lastLinkedin.status === "success" ? "bg-emerald-50" : "bg-red-50"}`}>
                  <span className="text-lg">{lastLinkedin.status === "success" ? "✅" : "❌"}</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {(lastLinkedin.details as { theme?: string })?.theme ?? "—"}
                    </p>
                    <p className="text-xs text-slate-500">
                      {new Date(lastLinkedin.executed_at).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {linkedinLogs.length > 0 && (
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">Historique ({linkedinLogs.length} posts)</p>
                <div className="space-y-2">
                  {linkedinLogs.slice(0, 5).map((log, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5">
                      <span className={log.status === "success" ? "text-emerald-500" : "text-red-400"}>{log.status === "success" ? "✓" : "✗"}</span>
                      <span className="flex-1 text-xs font-medium text-slate-700">{(log.details as { theme?: string })?.theme ?? "—"}</span>
                      <span className="text-xs text-slate-400">{new Date(log.executed_at).toLocaleDateString("fr-FR")}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {linkedinLogs.length === 0 && linkedinConnected && (
              <p className="mt-5 text-sm text-slate-400">Aucun post LinkedIn pour l'instant. Le prochain est prévu jeudi à 9h.</p>
            )}
          </div>
        </section>

        {/* Planning des thèmes */}
        <section className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Planning des thèmes IA</h2>
          <p className="mt-1 text-sm text-slate-500">6 thèmes en rotation — un nouveau chaque semaine automatiquement.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {["ATEX", "SSIAP1", "Habilitation électrique", "SST", "CPF & Qualiopi", "Sprinkler & SSI"].map((theme, i) => (
              <div key={theme} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">
                  {i + 1}
                </span>
                <span className="text-sm font-semibold text-slate-800">{theme}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
