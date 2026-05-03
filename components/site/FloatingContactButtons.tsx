"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const FLOATING_CONTACT_STORAGE_KEY = "prevensia-floating-contact-collapsed";

function getInitialCollapsedState() {
  if (typeof window === "undefined") return false;

  return window.localStorage.getItem(FLOATING_CONTACT_STORAGE_KEY) === "true";
}

export default function FloatingContactButtons() {
  const [showDesktopPanel, setShowDesktopPanel] = useState(false);
  const [isDesktopPanelCollapsed, setIsDesktopPanelCollapsed] = useState(
    getInitialCollapsedState
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowDesktopPanel(window.scrollY > 180);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      FLOATING_CONTACT_STORAGE_KEY,
      String(isDesktopPanelCollapsed)
    );
  }, [isDesktopPanelCollapsed]);

  return (
    <>
      <div
        className={`fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 transition-all duration-300 xl:block ${
          showDesktopPanel
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-6 opacity-0"
        }`}
      >
        {isDesktopPanelCollapsed ? (
          <button
            type="button"
            onClick={() => setIsDesktopPanelCollapsed(false)}
            className="group inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/82 px-4 py-3 text-sm font-semibold text-slate-800 shadow-[0_18px_45px_rgba(15,23,42,0.16)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
            aria-label="Afficher le panneau de contact PREVENSIA"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-950 via-slate-900 to-red-800 text-xs font-bold uppercase tracking-[0.18em] text-white">
              PF
            </span>
            <span className="text-left leading-tight">
              Contact
              <span className="block text-[11px] font-medium tracking-[0.08em] text-slate-500">
                Ouvrir le panneau
              </span>
            </span>
          </button>
        ) : (
          <div className="w-[280px] overflow-hidden rounded-[1.7rem] border border-white/55 bg-white/78 shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur-xl">
            <div className="relative bg-gradient-to-r from-slate-950/88 via-slate-900/86 to-red-900/82 px-5 py-4 text-white">
              <button
                type="button"
                onClick={() => setIsDesktopPanelCollapsed(true)}
                className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white transition hover:bg-white/20"
                aria-label="Réduire le panneau de contact PREVENSIA"
              >
                Réduire
              </button>

              <p className="pr-16 text-[11px] font-semibold uppercase tracking-[0.24em] text-red-200">
                Contact PREVENSIA
              </p>
              <h3 className="mt-2.5 max-w-[12rem] text-[1.75rem] font-bold leading-tight">
                Un besoin formation, devis ou calendrier ?
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-200">
                Le bon format, sans masquer la lecture du hero.
              </p>
            </div>

            <div className="space-y-3 px-5 py-4">
              <div className="rounded-2xl border border-slate-200/80 bg-white/75 p-3.5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Réponse rapide
                </p>
                <div className="mt-2.5 space-y-1.5">
                  <a
                    href="tel:+33189629492"
                    className="block text-base font-bold text-slate-900 transition hover:text-red-700"
                  >
                    01 89 62 94 92
                  </a>
                  <a
                    href="mailto:contact@prevensia-formation.fr"
                    className="block text-sm font-medium text-slate-600 transition hover:text-slate-900"
                  >
                    contact@prevensia-formation.fr
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-red-100/80 bg-red-50/75 p-3.5">
                <p className="text-sm font-semibold leading-5 text-slate-900">
                  Employeurs et responsables formation
                </p>
                <p className="mt-2 text-sm leading-5 text-slate-600">
                  Visibilité sur les parcours salariés et formats disponibles.
                </p>
              </div>

              <div className="grid gap-3">
                <Link
                  href="/demande-devis"
                  className="inline-flex items-center justify-center rounded-2xl bg-red-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
                >
                  Demander un devis
                </Link>

                <a
                  href="https://wa.me/33780992417?text=Bonjour%20je%20souhaite%20des%20informations%20sur%20vos%20formations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-green-300 bg-white px-4 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50"
                >
                  Échanger sur WhatsApp
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Voir le contact complet
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6 xl:hidden">
        <a
          href="tel:+33189629492"
          className="flex items-center justify-center rounded-full bg-red-700 px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-red-800"
          aria-label="Appeler Prevensia Formation"
          title="Appeler"
        >
          Appeler
        </a>

        <a
          href="https://wa.me/33780992417?text=Bonjour%20je%20souhaite%20des%20informations%20sur%20vos%20formations"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full border border-green-300 bg-white px-4 py-3 text-sm font-semibold text-green-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-green-50"
          aria-label="Contacter Prevensia Formation sur WhatsApp"
          title="WhatsApp"
        >
          WhatsApp
        </a>

        <Link
          href="/demande-devis"
          className="flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-50"
          aria-label="Demander un devis à Prevensia Formation"
          title="Devis"
        >
          Devis
        </Link>
      </div>

      {/* Bouton retour en haut — visible sur tous les écrans après scroll */}
      {showDesktopPanel && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-50 xl:left-auto xl:translate-x-0 xl:bottom-8 xl:right-6"
          aria-label="Retour en haut de page"
        >
          ↑ Haut de page
        </button>
      )}
    </>
  );
}