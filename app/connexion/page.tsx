"use client";

import Link from "next/link";

export default function ConnexionPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto w-full max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
            E-learning PREVENSIA
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Connexion</h1>
          <p className="mt-3 text-slate-600">
            Connectez-vous pour accéder à vos modules et à votre progression.
          </p>

          <form className="mt-6 space-y-4">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Adresse e-mail
              <input
                type="email"
                required
                className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                placeholder="vous@entreprise.fr"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Mot de passe
              <input
                type="password"
                required
                className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                placeholder="Votre mot de passe"
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
            >
              Se connecter
            </button>
          </form>

          <p className="mt-5 text-sm text-slate-600">
            Pas encore de compte ?{" "}
            <Link href="/inscription" className="font-semibold text-red-700 underline underline-offset-2">
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}