"use client";

import { FormEvent, Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const formations = [
  "H0B0",
  "BS / BE Manœuvre",
  "B1 B1V B2 B2V BR BC",
  "Manipulation extincteurs",
  "Guide-file / Serre-file",
  "Équipier de Première Intervention (EPI)",
  "Exploitation SSI",
  "Exploitation sprinkler",
  "SST - Initial",
  "MAC SST",
  "À définir",
];

function InscriptionForm() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const prefilledFormation = useMemo(() => {
    const value = searchParams.get("formation");
    return value && formations.includes(value) ? value : "À définir";
  }, [searchParams]);

  const prefilledSession = useMemo(() => {
    return searchParams.get("session") ?? "";
  }, [searchParams]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    if (password !== confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas.");
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 700));

    setMessage(
      "Inscription enregistrée. Vous pouvez maintenant accéder à votre espace e-learning. Notre équipe peut vous contacter pour valider votre parcours."
    );
    setIsSubmitting(false);
    event.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Prénom
          <input
            name="firstName"
            required
            className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
            placeholder="Ex : Marie"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Nom
          <input
            name="lastName"
            required
            className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
            placeholder="Ex : Dupont"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
          Adresse e-mail
          <input
            name="email"
            type="email"
            required
            className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
            placeholder="vous@entreprise.fr"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Téléphone
          <input
            name="phone"
            type="tel"
            className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
            placeholder="06 00 00 00 00"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Entreprise (optionnel)
          <input
            name="company"
            className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
            placeholder="Nom de votre société"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
          Formation souhaitée
          <select
            name="formation"
            defaultValue={prefilledFormation}
            className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
          >
            {formations.map((formation) => (
              <option key={formation} value={formation}>
                {formation}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
          Session souhaitée
          <input
            name="session"
            defaultValue={prefilledSession}
            className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
            placeholder="Ex : 10 juin 2026"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Mot de passe
          <input
            name="password"
            type="password"
            minLength={8}
            required
            className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
            placeholder="8 caractères minimum"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Confirmer le mot de passe
          <input
            name="confirmPassword"
            type="password"
            minLength={8}
            required
            className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
            placeholder="Retapez votre mot de passe"
          />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-slate-600">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-slate-300"
        />
        J&apos;accepte les conditions d&apos;utilisation et la politique de
        confidentialité.
      </label>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:bg-red-400"
        >
          {isSubmitting ? "Inscription en cours..." : "Créer mon compte"}
        </button>

        <p className="text-sm text-slate-600">
          Déjà inscrit ?{" "}
          <Link
            href="/connexion"
            className="font-semibold text-red-700 underline underline-offset-2"
          >
            Accéder à la connexion
          </Link>
        </p>
      </div>

      {message ? (
        <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <p>{message}</p>
          <Link
            href="/e-learning-habilitation-electrique"
            className="mt-3 inline-block font-semibold text-red-700 underline underline-offset-2"
          >
            ← Retour à la présentation de la formation
          </Link>
        </div>
      ) : null}
    </form>
  );
}

function InscriptionFallback() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-sm text-slate-600">Chargement du formulaire...</p>
    </div>
  );
}

export default function InscriptionPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
            E-learning PREVENSIA
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Créer votre compte
          </h1>
          <p className="mt-3 text-slate-600">
            Inscrivez-vous pour accéder à vos modules d&apos;habilitation électrique
            et suivre votre progression en ligne.
          </p>
        </div>

        <Suspense fallback={<InscriptionFallback />}>
          <InscriptionForm />
        </Suspense>

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link
            href="/planning"
            className="font-semibold text-red-700 underline underline-offset-2"
          >
            Voir le planning des sessions
          </Link>
          <Link
            href="/demande-devis"
            className="font-semibold text-slate-700 underline underline-offset-2"
          >
            Faire une demande de devis
          </Link>
        </div>
      </div>
    </main>
  );
}