import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable (404)",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-16">
      <div className="mx-auto w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm text-center">
        <p className="text-6xl font-black text-slate-200">404</p>

        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
          Page introuvable
        </p>

        <h1 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
          Cette page n&apos;existe pas
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          L&apos;adresse demandée est incorrecte ou la page a été déplacée.
          Retournez à l&apos;accueil pour reprendre votre navigation.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/elearning"
            className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Voir les formations
          </Link>
          <Link
            href="/demande-devis"
            className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </main>
  );
}
