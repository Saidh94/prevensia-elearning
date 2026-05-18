import type { Metadata } from "next";
import Link from "next/link";
import { getStripeClient } from "@/lib/payments/stripe";

export const metadata: Metadata = {
  title: "Paiement confirmé | PREVENSIA FORMATION",
  description: "Votre paiement a bien été enregistré. Votre accès à la formation PREVENSIA est en cours d'activation.",
  robots: { index: false, follow: false },
};

type SuccessPageProps = {
  searchParams?: Promise<{
    return_to?: string | string[];
    session_id?: string | string[];
  }>;
};

function normalizeReturnPath(value: string | string[] | undefined) {
  const singleValue = Array.isArray(value) ? value[0] ?? "" : value ?? "";
  return singleValue.startsWith("/") ? singleValue : "/dashboard";
}

function normalizeString(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

async function getPaymentStatus(sessionId: string): Promise<"paid" | "pending" | "unknown"> {
  try {
    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: [],
    });
    if (session.payment_status === "paid") return "paid";
    if (session.payment_status === "unpaid") return "pending";
    return "unknown";
  } catch {
    return "unknown";
  }
}

export default async function PaiementSuccesPage({
  searchParams,
}: SuccessPageProps) {
  const params = searchParams ? await searchParams : {};
  const returnPath = normalizeReturnPath(params.return_to);
  const sessionId = normalizeString(params.session_id);

  // Détecter si le paiement est immédiat (carte) ou différé (SEPA/virement)
  const paymentStatus = sessionId ? await getPaymentStatus(sessionId) : "unknown";
  const isAsync = paymentStatus === "pending";

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900">
      <div
        className={`mx-auto max-w-3xl rounded-[2rem] border bg-white p-10 shadow-sm ${
          isAsync ? "border-blue-200" : "border-emerald-200"
        }`}
      >
        {isAsync ? (
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Paiement initié
            </p>
            <h1 className="mt-3 text-3xl font-bold">
              Paiement en cours de traitement
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Votre demande de paiement par <strong>prélèvement SEPA</strong> ou{" "}
              <strong>virement bancaire</strong> a bien été enregistrée.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Le traitement bancaire prend <strong>2 à 6 jours ouvrés</strong>.
              Votre accès à la formation sera activé automatiquement dès que
              votre banque aura confirmé le paiement.
            </p>
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="text-sm text-blue-800">
                📧 Un e-mail de confirmation vous sera envoyé dès que votre
                accès sera ouvert. Pour toute question :{" "}
                <a
                  href="mailto:contact@prevensia-formation.fr"
                  className="font-semibold underline"
                >
                  contact@prevensia-formation.fr
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Paiement
            </p>
            <h1 className="mt-3 text-3xl font-bold">Paiement confirmé</h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Votre paiement a bien été reçu. Votre accès à la formation est
              activé — vous pouvez commencer dès maintenant.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Vous recevrez votre facture par e-mail dans quelques instants.
            </p>
          </>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={returnPath}
            className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Revenir à l&apos;espace précédent
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Aller au dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
