import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { PublishBlogButton } from "./PublishBlogButton";

type SearchParams = Promise<{ status?: string }>;

const STATUS_LABELS: Record<string, string> = {
  idea: "Idée",
  draft: "Brouillon",
  review: "À valider",
  published: "Publié",
};

const STATUS_COLORS: Record<string, string> = {
  idea: "bg-slate-100 text-slate-600",
  draft: "bg-amber-100 text-amber-800",
  review: "bg-blue-100 text-blue-800",
  published: "bg-emerald-100 text-emerald-800",
};

export default async function AdminBlogPage({ searchParams }: { searchParams?: SearchParams }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion-admin");

  const params = searchParams ? await searchParams : {};
  const statusFilter = params.status ?? "";

  const admin = createAdminClient();
  if (!admin) return <p>Erreur DB</p>;

  let query = admin.from("blog_posts").select("*").order("created_at", { ascending: false }).limit(50);
  if (statusFilter) query = query.eq("status", statusFilter);

  const { data: posts } = await query;
  const all = posts ?? [];

  const counts = {
    idea: all.filter((p) => p.status === "idea").length,
    draft: all.filter((p) => p.status === "draft").length,
    review: all.filter((p) => p.status === "review").length,
    published: all.filter((p) => p.status === "published").length,
  };

  return (
    <main className="min-h-screen bg-slate-50">
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
            <Link href="/admin/agents" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700">🤖 Agents IA</Link>
            <Link href="/admin/blog" className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">✍️ Blog IA</Link>
            <Link href="/admin/support" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50">Support</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <section className="rounded-[2rem] bg-gradient-to-r from-violet-900 via-violet-800 to-purple-800 p-8 text-white shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">Contenu SEO</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Blog IA</h1>
          <p className="mt-2 text-sm text-violet-200">Articles générés par Claude Haiku chaque mercredi. Valide avant publication.</p>
        </section>

        {/* Compteurs */}
        <section className="mt-5 grid gap-3 sm:grid-cols-4">
          {(["review", "draft", "published", "idea"] as const).map((key) => (
            <Link
              key={key}
              href={`/admin/blog?status=${key}`}
              className={`rounded-2xl border-2 p-4 text-center transition hover:shadow-md ${statusFilter === key ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white"}`}
            >
              <p className={`text-2xl font-bold ${statusFilter === key ? "text-white" : "text-slate-900"}`}>{counts[key]}</p>
              <p className={`mt-1 text-xs font-semibold ${statusFilter === key ? "text-slate-300" : "text-slate-500"}`}>{STATUS_LABELS[key]}</p>
            </Link>
          ))}
        </section>

        {/* Liste articles */}
        <section className="mt-5 space-y-4">
          {all.length === 0 && (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-12 text-center shadow-sm">
              <p className="text-4xl">✍️</p>
              <p className="mt-3 text-sm font-semibold text-slate-600">Aucun article pour l&apos;instant</p>
              <p className="mt-1 text-xs text-slate-400">L&apos;agent blog génère un article chaque mercredi à 6h.</p>
            </div>
          )}
          {all.map((post) => (
            <div key={post.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_COLORS[post.status] ?? "bg-slate-100"}`}>
                      {STATUS_LABELS[post.status] ?? post.status}
                    </span>
                    {post.formation_category && (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">{post.formation_category}</span>
                    )}
                    {post.ai_generated && (
                      <span className="rounded-full bg-violet-50 px-2 py-0.5 text-xs text-violet-600">🤖 IA</span>
                    )}
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">{post.title}</h3>
                  {post.meta_description && (
                    <p className="mt-1 text-sm text-slate-500 line-clamp-2">{post.meta_description}</p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-400">
                    {post.word_count && <span>{post.word_count} mots</span>}
                    {post.reading_time_minutes && <span>{post.reading_time_minutes} min de lecture</span>}
                    <span>Créé le {new Date(post.created_at).toLocaleDateString("fr-FR")}</span>
                    {post.target_keywords?.length > 0 && (
                      <span>Mots-clés : {post.target_keywords.slice(0, 3).join(", ")}</span>
                    )}
                  </div>
                </div>
                <div className="flex shrink-0 flex-col gap-2">
                  {post.status === "review" && (
                    <PublishBlogButton postId={post.id} />
                  )}
                  {post.status === "published" && post.slug && (
                    <a
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100"
                    >
                      Voir →
                    </a>
                  )}
                </div>
              </div>

              {/* Aperçu contenu */}
              {post.content_mdx && post.status === "review" && (
                <details className="mt-4">
                  <summary className="cursor-pointer text-xs font-semibold text-slate-500 hover:text-slate-800">
                    Voir le contenu généré ▼
                  </summary>
                  <div className="mt-3 max-h-64 overflow-y-auto rounded-xl bg-slate-50 p-4">
                    <pre className="whitespace-pre-wrap text-xs text-slate-700 font-sans leading-relaxed">
                      {post.content_mdx}
                    </pre>
                  </div>
                </details>
              )}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
