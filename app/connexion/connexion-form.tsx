"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type ConnexionFormProps = {
  redirectTo: string;
};

export default function ConnexionForm({
  redirectTo,
}: ConnexionFormProps) {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checkingInviteLink, setCheckingInviteLink] = useState(true);

  // Un email d'invitation (ou de réinitialisation) Supabase redirige vers
  // /connexion#access_token=...&refresh_token=...&type=invite (ou "recovery").
  // Sans ce traitement, la page affichait juste le formulaire de connexion
  // classique et l'utilisateur invité tombait sur "Invalid login credentials"
  // en essayant de se connecter sans avoir jamais pu créer son mot de passe.
  useEffect(() => {
    async function handleAuthHash() {
      const hash = typeof window !== "undefined" ? window.location.hash : "";

      if (!hash || !hash.includes("access_token")) {
        setCheckingInviteLink(false);
        return;
      }

      const params = new URLSearchParams(hash.replace(/^#/, ""));
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");
      const type = params.get("type");

      if (!accessToken || !refreshToken) {
        setCheckingInviteLink(false);
        return;
      }

      const { error: sessionError } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      // Retire le token de la barre d'adresse une fois traité.
      window.history.replaceState(null, "", window.location.pathname + window.location.search);

      if (sessionError) {
        setError(
          "Ce lien d'invitation a expiré ou est invalide. Merci de demander un nouveau lien d'accès."
        );
        setCheckingInviteLink(false);
        return;
      }

      if (type === "invite" || type === "recovery") {
        router.replace("/mot-de-passe");
        return;
      }

      setCheckingInviteLink(false);
    }

    handleAuthHash();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    const mustChangePassword = Boolean(data.user?.user_metadata?.must_change_password);

    router.replace(mustChangePassword ? "/mot-de-passe" : redirectTo || "/dashboard");
    router.refresh();
  }

  if (checkingInviteLink) {
    return (
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-center text-2xl font-bold text-slate-900">
          Connexion
        </h1>
        <p className="mt-4 text-center text-sm text-slate-500">
          Vérification de votre lien d&apos;accès...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
      <h1 className="text-center text-2xl font-bold text-slate-900">
        Connexion
      </h1>

      <form onSubmit={handleLogin} className="mt-6 space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm"
        />

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
}
