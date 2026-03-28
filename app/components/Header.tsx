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
          <a href="/formation-habilitation-electrique" className="hover:text-red-700">
            Habilitation
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

        <a
          href="/demande-devis"
          className="rounded-xl bg-red-700 px-4 py-2 text-sm font-semibold text-white"
        >
          Devis
        </a>
      </div>
    </header>
  );
}