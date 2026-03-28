"use client";

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFormationsOpen, setIsMobileFormationsOpen] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  const formationLinks = [
    { href: "/formation-habilitation-electrique", label: "Habilitation électrique" },
    { href: "/formation-sst", label: "Formation SST" },
    { href: "/formation-securite-incendie", label: "Sécurité incendie" },
    { href: "/formation-sprinkler", label: "Formation sprinkler" },
    { href: "/formation-ssi", label: "Formation SSI" },
  ];

  useEffect(() => {
    const handleScroll = () => setShowScrollTopButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 // Fermer menu mobile en quittant la fenêtre
useEffect(() => {
  if (isMobileMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  // Fonction de nettoyage lorsque le composant est démonté
  return () => {
    document.body.style.overflow = "";
  };
}, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileFormationsOpen(false);
  };

  const handleAccueilClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" onClick={handleAccueilClick} className="flex items-center gap-3">
            <Image
              src="/images/logo-prevensia-formation.jpg"
              alt="Logo Prevensia Formation"
              width={160}
              height={60}
              className="h-auto w-[130px] sm:w-[180px]"
              priority
            />
          </Link>

          {/* Menu Desktop */}
          <nav ref={desktopMenuRef} className="hidden items-center gap-6 lg:flex">
            <Link href="/#catalogue" className="text-sm font-semibold text-slate-700 hover:text-red-700">
              Catalogue
            </Link>
            <Link href="/planning" className="text-sm font-semibold text-slate-700 hover:text-red-700">
              Planning
            </Link>

            {/* Sous-menu formations (au survol) */}
            <div className="relative group">
              <button className="text-sm font-semibold text-slate-700 hover:text-red-700 flex items-center gap-1">
                Formations
                <span className="text-slate-500">▾</span>
              </button>
              <div className="absolute hidden group-hover:block top-full left-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg">
                {formationLinks.map((f) => (
                  <Link
                    key={f.href}
                    href={f.href}
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-red-700 text-sm"
                  >
                    {f.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/demande-devis" className="text-sm font-semibold text-slate-700 hover:text-red-700">
              Demande de devis
            </Link>
            <Link href="/#contact" className="text-sm font-semibold text-slate-700 hover:text-red-700">
              Contact
            </Link>

            <Link
              href="/demande-devis"
              className="rounded-2xl bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-800"
            >
              Obtenir un devis
            </Link>
          </nav>

          {/* Bouton Mobile */}
          <button
            type="button"
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>
      </header>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <>
          {/* overlay */}
          <div
            className="fixed inset-0 z-40 bg-slate-950/60 lg:hidden"
            onClick={closeMobileMenu}
          />
          <aside
            className="fixed right-0 top-0 z-50 flex h-screen w-[min(90vw,360px)] flex-col border-l border-slate-200 bg-white p-6 shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Menu
              </p>
              <button
                type="button"
                className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700"
                onClick={closeMobileMenu}
              >
                Fermer
              </button>
            </div>

            <nav className="flex flex-col gap-2 text-sm font-semibold text-slate-700 overflow-y-auto">
              <Link href="/" onClick={handleAccueilClick} className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-red-700">
                Accueil
              </Link>
              <Link href="/#catalogue" onClick={closeMobileMenu} className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-red-700">
                Catalogue
              </Link>
              <Link href="/planning" onClick={closeMobileMenu} className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-red-700">
                Planning
              </Link>

              {/* Sous-menu mobile formations */}
              <div className="mt-2 rounded-2xl border border-slate-200 p-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-3 py-2 rounded-lg text-left"
                  onClick={() => setIsMobileFormationsOpen((prev) => !prev)}
                >
                  Formations
                  <span className="text-slate-500">{isMobileFormationsOpen ? "−" : "+"}</span>
                </button>

                {isMobileFormationsOpen && (
                  <div className="mt-2 flex flex-col gap-1 border-t border-slate-200 pt-2">
                    {formationLinks.map((f) => (
                      <Link
                        key={f.href}
                        href={f.href}
                        onClick={closeMobileMenu}
                        className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-red-700"
                      >
                        {f.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/demande-devis" onClick={closeMobileMenu} className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-red-700">
                Demande de devis
              </Link>
              <Link href="/#contact" onClick={closeMobileMenu} className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-red-700">
                Contact
              </Link>

              <Link
                href="/demande-devis"
                onClick={closeMobileMenu}
                className="mt-4 inline-block rounded-2xl bg-red-700 px-4 py-3 text-white text-center font-semibold"
              >
                Obtenir un devis
              </Link>
            </nav>
          </aside>
        </>
      )}

      {/* Bouton retour haut */}
      {showScrollTopButton && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-xl hover:-translate-y-0.5 hover:text-red-700 transition"
        >
          ↑ Haut
        </button>
      )}
    </>
  );
}
