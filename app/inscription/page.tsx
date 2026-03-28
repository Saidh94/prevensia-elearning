"use client";

import { FormEvent, Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

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

type SessionDetails = {
  id: string;
  title: string;
  date_start: string;
  format: string;
  places_total: number;
  places_taken: number;
};

function InscriptionForm() {
  const searchParams = useSearchParams();
  const supabase = createClient();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [sessionDetails, setSessionDetails] = useState<SessionDetails | null>(null);
  const [loadingSession, setLoadingSession] = useState(false);

  const sessionId = searchParams.get("sessionId") ?? "";

  const prefilledFormation = useMemo(() => {
    const value = searchParams.get("formation");
    return value && formations.includes(value) ? value : "À définir";
  }, [searchParams]);

  const prefilledSession = useMemo(() => {
    return searchParams.get("session") ?? "";
  }, [searchParams]);

  useEffect(() => {
    async function loadSession() {
      if (!sessionId) return;

      setLoadingSession(true);

      const { data, error } = await supabase
        .from("sessions")
        .select("id, title, date_start, format, places_total, places_taken")
        .eq("id", sessionId)
        .single();

      if (!error && data) {
        setSessionDetails(data);
      }

      setLoadingSession(false);
    }

    loadSession();
  }, [sessionId, supabase]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setMessage("");

    const formData = new FormData(form);
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    if (password !== confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas.");
      setIsSubmitting(false);
      return;
    }

    const firstName = String(formData.get("firstName") ?? "");
    const lastName = String(formData.get("lastName") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const company = String(formData.get("company") ?? "");
    const hiddenSessionId = String(formData.get("sessionId") ?? "");

    if (!hiddenSessionId) {
      setMessage("Aucune session sélectionnée. Merci de passer par le planning.");
      setIsSubmitting(false);
      return;
    }

    const { data, error } = await supabase.rpc("register_for_session", {
      p_session_id: hiddenSessionId,
      p_first_name: firstName,
      p_last_name: lastName,
      p_email: email,
      p_phone: phone,
      p_company: company,
    });

    if (error) {
      console.error("Supabase RPC error:", error);
      setMessage(`Erreur Supabase : ${error.message}`);
      setIsSubmitting(false);
      return;
    }

    if (!data?.success) {
      console.error("RPC returned:", data);
      setMessage(data?.message ?? "Impossible d’enregistrer l’inscription.");
      setIsSubmitting(false);
      return;
    }

    setMessage(
      "Inscription enregistrée avec succès. Notre équipe peut vous contacter pour valider votre parcours."
    );
    setIsSubmitting(false);
    form.reset();
  };

  const remainingPlaces =
    sessionDetails ? sessionDetails.places_total - sessionDetails.places_taken : null;

  return (
    <>
      {sessionId ? (
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
            Session sélectionnée
          </p>

          {loadingSession ? (
            <p className="mt-3 text-slate-600">Chargement de la session...</p>
          ) : sessionDetails ? (
            <div className="mt-3 space-y-2 text-slate-700">
              <p className="text-lg font-semibold text-slate-900">
                {sessionDetails.title}
              </p>
              <p>
                Date : {new Date(sessionDetails.date_start).toLocaleString("fr-FR")}
              </p>
              <p>Format : {sessionDetails.format}</p>
              <p>
                Places restantes :{" "}
                <span className="font-semibold">
                  {remainingPlaces !== null ? remainingPlaces : "-"}
                </span>
              </p>
            </div>
          ) : (
            <p className="mt-3 text-red-700">
              Session introuvable. Merci de revenir au planning.
            </p>
          )}
        </div>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <input type="hidden" name="sessionId" value={sessionId} />

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
              defaultValue={sessionDetails?.title ?? prefilledFormation}
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
              defaultValue={
                sessionDetails
                  ? new Date(sessionDetails.date_start).toLocaleString("fr-FR")
                  : prefilledSession
              }
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
              placeholder="Ex : 10 juin 2026"
              readOnly={!!sessionDetails}
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
            disabled={isSubmitting || !sessionId}
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

        {!sessionId ? (
          <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Merci de sélectionner d’abord une session depuis le planning.
          </p>
        ) : null}

        {message ? (
          <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            <p>{message}</p>
            <Link
              href="/planning"
              className="mt-3 inline-block font-semibold text-red-700 underline underline-offset-2"
            >
              ← Retour au planning
            </Link>
          </div>
        ) : null}
      </form>
    </>
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