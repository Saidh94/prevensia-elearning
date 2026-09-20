import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";

export default async function ConfirmationPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  let isParticulier = false;
  const admin = createAdminClient();
  if (admin) {
    const { data } = await admin
      .from("devis")
      .select("account_type")
      .eq("token", token)
      .maybeSingle();
    isParticulier = data?.account_type === "particulier";
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-sm border border-slate-200 p-10 text-center space-y-5">

        <div className="text-6xl">🎉</div>

        <h1 className="text-2xl font-extrabold text-slate-900">
          {isParticulier ? "Accès activé !" : "Accès activés !"}
        </h1>

        <p className="text-sm text-slate-600">
          {isParticulier
            ? "Vous allez recevoir un email d'invitation avec votre lien de connexion. Vous pouvez commencer votre formation dès maintenant."
            : "Vos collaborateurs vont recevoir un email d'invitation avec leur lien de connexion. Ils peuvent commencer leur formation dès maintenant."}
        </p>

        {!isParticulier && (
          <div className="rounded-2xl bg-blue-50 border border-blue-200 px-5 py-4 text-left space-y-2">
            <p className="text-sm font-semibold text-blue-800">📊 Votre espace employeur</p>
            <p className="text-sm text-blue-700">
              Depuis votre espace, vous pouvez suivre l&apos;avancement de chaque collaborateur,
              voir les scores aux quiz et demander une date de classe virtuelle.
            </p>
          </div>
        )}

        <Link
          href={isParticulier ? "/dashboard" : "/employeur/dashboard"}
          className="block w-full rounded-xl bg-red-700 px-6 py-4 text-base font-bold text-white hover:bg-red-800 transition-colors"
        >
          {isParticulier ? "Accéder à mon espace →" : "Accéder à mon espace employeur →"}
        </Link>

        <p className="text-xs text-slate-400">
          Un récapitulatif a été envoyé à votre adresse email.
        </p>
      </div>
    </div>
  );
}
