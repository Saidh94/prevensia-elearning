export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="text-lg font-bold text-slate-900">
          PREVENSIA
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          <a href="/" className="hover:text-red-700">
            Accueil
          </a>
          <a
            href="/formation-habilitation-electrique"
            className="hover:text-red-700"
          >
            Habilitation
          </a>
          <a href="/elearning" className="hover:text-red-700">
            E-learning
          </a>
          <a href="/formation-sst" className="hover:text-red-700">
            SST
          </a>
          <a href="/formation-securite-incendie" className="hover:text-red-700">
            Incendie
          </a>
          <a href="/demande-devis" className="hover:text-red-700">
            Devis
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/elearning"
            className="hidden rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 sm:inline-flex"
          >
            E-learning
          </a>

          <a
            href="/demande-devis"
            className="rounded-xl bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
          >
            Devis
          </a>
        </div>
      </div>
    </header>
  );
}