"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginForm() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setLoading(false);
      setError("Identifiants incorrects ou compte non autorisé.");
      return;
    }

    // Vérification rôle admin côté client (double contrôle)
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .maybeSingle<{ role: string | null }>();

    setLoading(false);

    if (profile?.role !== "admin") {
      await supabase.auth.signOut();
      setError("Accès refusé — ce compte n'a pas les droits administrateur.");
      return;
    }

    router.replace("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">
          Email
        </label>
        <input
          type="email"
          placeholder="votre@email.fr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">
          Mot de passe
        </label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
        />
      </div>

      {error && (
        <div className="rounded-xl border border-red-900/50 bg-red-950/50 px-4 py-3 text-xs font-medium text-red-400">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-red-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-600 disabled:opacity-60"
      >
        {loading ? "Connexion en cours…" : "Accéder au panneau admin"}
      </button>
    </form>
  );
}
