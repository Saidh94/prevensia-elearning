"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const BF_START = new Date("2026-11-20T00:00:00").getTime();
const BF_END   = new Date("2026-12-05T00:00:00").getTime(); // 4 déc. minuit

const MARQUEE_ITEMS = [
  "🔥 BLACK FRIDAY — 25 % DE RÉDUCTION",
  "⚡ H0B0 / H0V · 150 € → 112 € HT",
  "💥 ATEX NIV 0 · 129 € → 97 € HT",
  "🎯 ATEX NIV 1 · 490 € → 368 € HT",
  "🛡️ SSI · Sprinkler · Coordination SSI inclus",
  "📅 OFFRE VALABLE DU 20 NOV. AU 4 DÉC. 2026",
  "👉 CODE PROMO AUTOMATIQUE À LA COMMANDE",
];

export function BlackFridayBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const now = Date.now();
    if (now >= BF_START && now < BF_END) {
      setVisible(true);
    }
  }, []);

  if (!visible || dismissed) return null;

  const track = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]; // double pour la boucle

  return (
    <>
      <style>{`
        @keyframes bf-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .bf-track {
          display: flex;
          width: max-content;
          animation: bf-marquee 28s linear infinite;
        }
        .bf-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        role="banner"
        className="relative z-50 overflow-hidden bg-black"
        style={{ borderBottom: "2px solid #cc1a1a" }}
      >
        {/* Ligne 1 — titre statique + CTA */}
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3 min-w-0">
            <span
              className="shrink-0 rounded-md px-3 py-1 text-xs font-black uppercase tracking-widest text-white"
              style={{ background: "#cc1a1a", letterSpacing: "0.18em" }}
            >
              BLACK FRIDAY
            </span>
            <p className="text-white font-black text-base sm:text-lg leading-tight truncate">
              <span style={{ color: "#ff3333" }}>−25&nbsp;%</span>
              {" "}sur tous les e-learnings
              <span className="hidden sm:inline text-slate-300 font-normal text-sm">
                {" "}· du 20 nov. au 4 déc. 2026
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/elearning"
              className="rounded-lg px-4 py-2 text-sm font-black text-white transition-all hover:scale-105"
              style={{ background: "#cc1a1a", border: "2px solid #ff3333" }}
            >
              En profiter →
            </Link>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Fermer le bandeau"
              className="p-1.5 text-slate-500 hover:text-white transition-colors text-lg leading-none"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Ligne 2 — défilant */}
        <div
          className="overflow-hidden py-1.5"
          style={{ background: "#cc1a1a" }}
        >
          <div className="bf-track">
            {track.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center whitespace-nowrap text-white text-xs sm:text-sm font-bold px-6"
                style={{ letterSpacing: "0.08em" }}
              >
                {item}
                <span className="mx-6 opacity-50">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
