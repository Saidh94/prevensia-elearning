"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/formation-habilitation-electrique", label: "Habilitation" },
  { href: "/formation-atex", label: "ATEX" },
  { href: "/formation-sst", label: "SST" },
  { href: "/formation-securite-incendie", label: "Incendie" },
  { href: "/formation-coordinateur-ssi", label: "Coordinateur SSI" },
  { href: "/formation-ssi", label: "SSI" },
  { href: "/formation-sprinkler", label: "Sprinkler" },
  { href: "/planning", label: "Planning" },
  { href: "/qui-sommes-nous", label: "À propos" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-prevensia-formation.svg"
            alt="Prevensia Formation — Prévenir · Former · Protéger"
            width={200}
            height={48}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-3 text-sm font-medium text-slate-700 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-red-700">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions droite */}
        <div className="flex items-center gap-2">
          <Link
            href="/elearning"
            className="hidden rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 sm:inline-flex"
          >
            E-learning
          </Link>

          <a
            href="/employeur/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 lg:inline-flex"
          >
            Employeur ↗
          </a>

          <Link
            href="/demande-devis"
            className="rounded-xl bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
          >
            Devis
          </Link>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 hover:bg-slate-50 hover:text-red-700"
              >
                {l.label}
              </Link>
            ))}

            <div className="my-2 border-t border-slate-100" />

            <Link
              href="/elearning"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 hover:bg-slate-50 hover:text-red-700"
            >
              E-learning
            </Link>

            <a
              href="/employeur/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 hover:bg-slate-50 hover:text-red-700"
            >
              Espace employeur ↗
            </a>

            <div className="mt-3">
              <Link
                href="/demande-devis"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-red-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-800"
              >
                Demande de devis
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
