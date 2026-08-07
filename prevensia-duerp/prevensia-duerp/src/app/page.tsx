import Link from "next/link";
import Logo from "@/components/ui/Logo";

const SECTEURS = [
  { label: "BTP", desc: "Chantiers, gros œuvre, second œuvre, TP" },
  { label: "Industrie", desc: "Ateliers, machines, chimie, ATEX" },
  { label: "Logistique", desc: "Entrepôts, chariots, picking" },
  { label: "Tertiaire", desc: "Bureaux, RPS, travail sur écran" },
  { label: "ERP 5e catégorie", desc: "Petits commerces, restaurants, salles" },
  { label: "ERP Types M · N · P", desc: "Grandes surfaces, discothèques, salles de fête" },
];

const DOCS = ["DUERP", "DIUO", "DMLT", "Registre sécurité", "Plan évacuation"];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">

      {/* ── HEADER ── */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Logo size="sm" theme="dark" />
          <div className="flex items-center gap-3">
            <Link
              href="/connexion"
              className="text-sm font-semibold text-slate-300 hover:text-white transition"
            >
              Connexion
            </Link>
            <Link
              href="/inscription"
              className="inline-flex items-center rounded-lg bg-red-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-600"
            >
              Essai gratuit 30 jours
            </Link>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="mb-6 inline-flex">
          <Logo size="lg" theme="dark" />
        </div>

        <h1 className="mt-8 text-4xl sm:text-5xl font-black text-white leading-tight">
          Votre Document Unique<br />
          <span className="text-red-400">en quelques minutes</span>
        </h1>

        <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Générez automatiquement votre DUERP conforme au Code du travail grâce
          à notre questionnaire intelligent adapté à votre secteur d&apos;activité.
        </p>

        {/* Documents générés */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {DOCS.map((doc) => (
            <span
              key={doc}
              className="rounded-full border border-red-800/60 bg-red-900/30 px-4 py-1.5 text-xs font-bold text-red-300 uppercase tracking-wider"
            >
              {doc}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/inscription"
            className="inline-flex items-center justify-center rounded-xl bg-red-700 px-10 py-4 text-base font-bold text-white shadow-xl transition hover:bg-red-600"
          >
            Créer mon DUERP gratuitement →
          </Link>
          <Link
            href="/tarifs"
            className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-10 py-4 text-base font-semibold text-slate-300 transition hover:bg-slate-700"
          >
            Voir les tarifs
          </Link>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          30 jours d&apos;essai gratuit · Aucune carte bancaire requise
        </p>
      </section>

      {/* ── SECTEURS ── */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">
          Secteurs couverts
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTEURS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-700 bg-slate-800/50 p-5"
            >
              <p className="font-bold text-white text-sm">{s.label}</p>
              <p className="mt-1 text-xs text-slate-400 leading-5">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-800 py-8 text-center">
        <p className="text-xs text-slate-600">
          Conforme au décret n°2022-395 du 18 mars 2022 · Art. L4121-3-1 Code du travail · Sources INRS / INERIS / SiteSecurite.com
        </p>
        <p className="mt-2 text-xs text-slate-700">
          © {new Date().getFullYear()} PREVENSIA GROUPE · DUERP &amp; GO
        </p>
      </footer>

    </main>
  );
}
