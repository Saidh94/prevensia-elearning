"use client";

import Link from "next/link";
import { useState } from "react";

const STORAGE_KEY = "prevensia-cookie-consent";

type ConsentValue = "accepted" | "refused" | null;

function readStoredConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === "accepted" || raw === "refused") return raw;
  return null;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return readStoredConsent() === null;
  });

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function handleRefuse() {
    localStorage.setItem(STORAGE_KEY, "refused");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Gestion des cookies"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-5 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Texte */}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-900">
            Cookies et vie privée
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Nous utilisons uniquement des cookies strictement nécessaires au
            fonctionnement du site (authentification sécurisée). Aucun cookie
            publicitaire ni de suivi tiers n&apos;est déposé.{" "}
            <Link
              href="/politique-confidentialite"
              className="underline underline-offset-2 hover:text-slate-900"
            >
              En savoir plus
            </Link>
          </p>
        </div>

        {/* Boutons — même taille, même importance (CNIL) */}
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={handleRefuse}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Tout refuser
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
