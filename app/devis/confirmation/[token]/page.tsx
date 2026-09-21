import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";

export default async function ConfirmationPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  let isParticulier = false;
  let paymentRequired = false;
  const admin = createAdminClient();
  if (admin) {
    const { data } = await admin
      .from("devis")
      .select("account_type, formations")
      .eq("token", token)
      .maybeSingle();
    isParticulier = data?.account_type === "particulier";
    const formations: { priceHT?: number | null }[] = data?.formations ?? [];
    paymentRequired = isParticulier && formations.some((f) => f.priceHT !== null && f.priceHT !== undefined);
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
            ? "Vous allez recevoir un email d'invitation dans les prochaines minutes. Cliquez sur le lien qu'il contient pour créer votre mot de passe et activer votre accès."
            : "Vos collaborateurs vont recevoir un email d'invitation dans les prochaines minutes. Ils devront cliquer sur le lien qu'il contient pour créer leur mot de passe et activer leur accès."}
        </p>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 text-left">
          <p className="text-sm text-slate-700">
            📧 Vérifiez votre boîte mail (et vos spams). Sans mot de passe déjà créé, se
            rendre directement sur la page de connexion ne fonctionnera pas — il faut
            d&apos;abord passer par le lien reçu par email.
          </p>
        </div>

        {!isParticulier && (
          <div className="rounded-2xl bg-blue-50 border border-blue-200 px-5 py-4 text-left space-y-2">
            <p className="text-sm font-semibold text-blue-800">📊 Votre espace employeur</p>
            <p className="text-sm text-blue-700">
              Depuis votre espace, vous pouvez suivre l&apos;avancement de chaque collaborateur,
              voir les scores aux quiz et demander une date de classe virtuelle.
            </p>
          </div>
        )}

        {paymentRequired && (
          <div className="rounded-2xl bg-amber-50 border border-amber-200 px-5 py-4 text-left space-y-2">
            <p className="text-sm font-semibold text-amber-800">💳 Une dernière étape</p>
            <p className="text-sm text-amber-700">
              Le contenu de la formation sera débloqué dès votre paiement, à régler
              directement depuis votre espace (bouton « Payer maintenant »).
            </p>
          </div>
        )}

        <p className="text-xs text-slate-400">
          Un récapitulatif a été envoyé à votre adresse email.
        </p>

        <p className="text-xs text-slate-400">
          Déjà activé votre compte ?{" "}
          <Link
            href={isParticulier ? "/dashboard" : "/employeur/dashboard"}
            className="font-semibold text-slate-600 underline underline-offset-2"
          >
            Accéder à mon espace →
          </Link>
        </p>
      </div>
    </div>
  );
}
