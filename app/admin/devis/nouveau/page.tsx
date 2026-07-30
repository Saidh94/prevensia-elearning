import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import DevisPanel from "../../components/DevisPanel";

export default async function NouveauDevisPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion-admin");

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
            <Link href="/admin"        className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50">Inscriptions</Link>
            <Link href="/admin/leads"  className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50">👥 Leads</Link>
            <Link href="/admin/kpis"   className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">📊 KPIs</Link>
            <Link href="/admin/agents" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-emerald-50 hover:text-emerald-700">🤖 Agents IA</Link>
            <span className="inline-flex items-center rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">📄 Nouveau devis</span>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-8">
        {/* Hero */}
        <div className="mb-6">
          <Link href="/admin/leads" className="text-xs text-slate-400 hover:text-slate-700">← Retour aux leads</Link>
          <h1 className="mt-3 text-2xl font-bold text-slate-900">Nouveau devis</h1>
          <p className="mt-1 text-sm text-slate-500">
            Remplissez les informations client et sélectionnez les formations. Le devis sera envoyé par email au prospect et un lead sera créé dans le CRM.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <DevisPanel fullPage />
        </div>
      </div>
    </main>
  );
}
