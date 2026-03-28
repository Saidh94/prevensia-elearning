"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormationsOpen, setIsFormationsOpen] = useState(false);

  const formations = [
    { label: "Habilitation électrique", href: "/formation-habilitation-electrique" },
    { label: "Formation SST", href: "/formation-sst" },
    { label: "Sécurité incendie", href: "/formation-securite-incendie" },
    { label: "Formation sprinkler", href: "/formation-sprinkler" },
    { label: "Formation SSI", href: "/formation-ssi" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo à gauche */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-prevensia-formation.jpg"
            alt="Logo Prevensia Formation"
            width={170}
            height={60}
            priority
            className="h-auto w-[150px] sm:w-[170px]"
          />
        </Link>

        {/* Menu principal */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-800">
          <Link href="/" className="hover:text-red-700">Accueil</Link>
          
          {/* Sous-menu Formations */}
          <div className="relative">
            <button
              onClick={() => setIsFormationsOpen(!isFormationsOpen)}
              className="hover:text-red-700 inline-flex items-center gap-1"
            >
              Formations
              <span className="text-slate-500">{isFormationsOpen ? "▲" : "▼"}</span>
            </button>

            {isFormationsOpen && (
              <div className="absolute left-0 mt-2 rounded-xl border border-slate-200 bg-white shadow-xl w-56">
                {formations.map((f) => (
                  <Link
                    key={f.href}
                    href={f.href}
                    className="block px-4 py-2 text-sm text-slate-700 hover:text-red-700 hover:bg-slate-50"
                    onClick={() => setIsFormationsOpen(false)}
                  >
                    {f.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/#catalogue" className="hover:text-red-700">Catalogue</Link>
          <Link href="/planning" className="hover:text-red-700">Planning</Link>
          <Link href="/demande-devis" className="hover:text-red-700">Demande de devis</Link>
          <Link href="/#contact" className="hover:text-red-700">Contact</Link>
        </nav>

        {/* Bouton devis */}
        <Link
          href="/demande-devis"
          className="hidden sm:inline-flex rounded-full bg-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800"
        >
          Obtenir un devis
        </Link>

        {/* Menu mobile */}
        <button
          className="lg:hidden rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Fermer" : "Menu"}
        </button>
      </div>

      {/* Menu latéral mobile */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full border-t border-slate-200 bg-white shadow-md">
          <nav className="flex flex-col p-4 gap-2 text-sm font-medium text-slate-700">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link>

            {/* Sous-menu mobile */}
            <button
              onClick={() => setIsFormationsOpen(!isFormationsOpen)}
              className="flex justify-between py-2"
            >
              Formations
              <span>{isFormationsOpen ? "▲" : "▼"}</span>
            </button>
            {isFormationsOpen && (
              <div className="ml-3 flex flex-col">
                {formations.map((f) => (
                  <Link
                    key={f.href}
                    href={f.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="py-1 text-slate-700 hover:text-red-700"
                  >
                    {f.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/#catalogue" onClick={() => setIsMenuOpen(false)}>Catalogue</Link>
            <Link href="/planning" onClick={() => setIsMenuOpen(false)}>Planning</Link>
            <Link href="/demande-devis" onClick={() => setIsMenuOpen(false)}>Demande de devis</Link>
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
