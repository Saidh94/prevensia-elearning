"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { EmailOtpType } from "@supabase/supabase-js";

type ConfirmFormProps = {
  tokenHash: string | null;
  type: EmailOtpType | null;
};

const REDIRECT_BY_TYPE: Partial<Record<EmailOtpType, string>> = {
  invite: "/mot-de-passe",
  recovery: "/mot-de-passe",
  email_change: "/dashboard",
  signup: "/dashboard",
  magiclink: "/dashboard",
};

export default function ConfirmForm({ tokenHash, type }: ConfirmFormProps) {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const missingParams = !tokenHash || !type;

  async function handleConfirm() {
    if (!tokenHash || !type) return;

    setLoading(true);
    setError(null);

    const { error: verifyError } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type,
    });

    setLoading(false);

    if (verifyError) {
      setError(
        "Ce lien a expiré ou a déjà été utilisé — cela arrive parfois quand votre messagerie " +
          "ouvre automatiquement les liens pour vérifier leur sécurité, avant même que vous ne cliquiez. " +
          "Merci de redemander un lien d'accès."
      );
      return;
    }

    router.replace(REDIRECT_BY_TYPE[type] ?? "/dashboard");
  }

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm text-center">
      <h1 className="text-2xl font-bold text-slate-900">Confirmer mon accès</h1>

      {missingParams ? (
        <p className="mt-4 text-sm text-red-600">
          Ce lien est incomplet ou invalide. Merci de redemander un lien d&apos;accès.
        </p>
      ) : (
        <>
          <p className="mt-4 text-sm text-slate-600">
            Pour votre sécurité, cliquez sur le bouton ci-dessous pour confirmer que c&apos;est
            bien vous qui accédez à ce lien.
          </p>

          {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}

          <button
            type="button"
            onClick={handleConfirm}
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Confirmation..." : "Confirmer mon accès →"}
          </button>
        </>
      )}
    </div>
  );
}
