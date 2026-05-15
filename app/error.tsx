"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[PREVENSIA] Erreur globale :", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-16">
      <div className="mx-auto w-full max-w-xl rounded-[2rem] border border-red-200 bg-white p-10 shadow-sm text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
          Erreur inattendue
        </p>

        <h1 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
          Une erreur s&apos;est produite
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Une erreur inattendue est survenue. Vous pouvez réessayer ou revenir
          à l&apos;accueil. Si le problème persiste, contactez-nous.
        </p>

        {error.digest && (
          <p className="mt-3 rounded-lg bg-slate-50 px-4 py-2 font-mono text-xs text-slate-400">
            Référence : {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
