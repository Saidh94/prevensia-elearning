"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type PasswordUpdateFormProps = {
  email: string;
};

export default function PasswordUpdateForm({
  email,
}: PasswordUpdateFormProps) {
  const router = useRouter();
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (password.length < 10) {
      setError("Le nouveau mot de passe doit contenir au moins 10 caractères.");
      return;
    }

    if (password !== confirmPassword) {
      setError("La confirmation du mot de passe ne correspond pas.");
      return;
    }

    setLoading(true);

    const { error: updateError } = await supabase.auth.updateUser({
      password,
      data: {
        must_change_password: false,
      },
    });

    setLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setSuccess("Mot de passe enregistré ! Redirection vers votre espace...");
    setPassword("");
    setConfirmPassword("");
    router.refresh();

    // Redirige automatiquement vers le dashboard une fois le mot de passe
    // enregistré. Sans ça, les champs se vidaient et le formulaire restait
    // affiché — ce qui donnait l'impression qu'il redemandait un mot de passe
    // en boucle, notamment pour un compte invité qui n'a jamais eu de mot de
    // passe "temporaire" à remplacer.
    setTimeout(() => {
      router.push("/dashboard");
    }, 1200);
  }

  return (
    <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
        Sécurité du compte
      </p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">
        Changer le mot de passe
      </h1>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        Connecté avec <span className="font-semibold text-slate-900">{email}</span>.
        Définissez votre mot de passe personnel pour accéder à votre espace.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label
            htmlFor="new-password"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Nouveau mot de passe
          </label>
          <input
            id="new-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            minLength={10}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="confirm-password"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Confirmer le mot de passe
          </label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
            minLength={10}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
          />
        </div>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        {success ? <p className="text-sm text-emerald-700">{success}</p> : null}

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Mise à jour..." : "Enregistrer le nouveau mot de passe"}
          </button>

          <Link
            href="/dashboard"
            className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Retour au dashboard
          </Link>
        </div>
      </form>
    </div>
  );
}
