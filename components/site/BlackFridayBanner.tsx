"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const BF_START = new Date("2026-11-20T00:00:00").getTime();
const BF_END   = new Date("2026-12-05T00:00:00").getTime(); // 4 déc. minuit

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

  return (
    <div
      role="banner"
      className="relative z-50 flex items-center justify-center gap-3 bg-black px-4 py-2.5 text-sm text-white"
    >
      {/* Flamme / badge */}
      <span className="shrink-0 rounded-full bg-red-600 px-2 py-0.5 text-xs font-bold uppercase tracking-widest">
        Black Friday
      </span>

      <p className="text-center font-medium">
        <span className="text-red-400 font-bold">−25&nbsp;%</span> sur tous les e-learnings&nbsp;
        <span className="hidden sm:inline text-slate-400">· H0B0, ATEX, SSI… ·</span>
        <span className="hidden sm:inline"> du 20 nov. au 4 déc. 2026</span>
      </p>

      <Link
        href="/elearning"
        className="shrink-0 rounded-lg bg-red-600 px-3 py-1 text-xs font-bold text-white transition hover:bg-red-700"
      >
        En profiter →
      </Link>

      {/* Bouton fermer */}
      <button
        onClick={() => setDismissed(true)}
        aria-label="Fermer le bandeau"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
      >
        ✕
      </button>
    </div>
  );
}
