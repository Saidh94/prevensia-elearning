import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paiement annulé | PREVENSIA FORMATION",
  description: "Votre paiement a été annulé. Aucun débit n'a été effectué. Vous pouvez reprendre votre inscription à tout moment.",
  robots: { index: false, follow: false },
};

type CancelPageProps = {
  searchParams?: Promise<{
    return_to?: string | string[];
  }>;
};

function normalizeReturnPath(value: string | string[] | undefined) {
  const singleValue = Array.isArray(value) ? value[0] ?? "" : value ?? "";
  return singleValue.startsWith("/") ? singleValue : "/dashboard";
}

export default async function PaiementAnnulePage({
  searchParams,
}: CancelPageProps) {
  const params = searchParams ? await searchParams : {};
  const returnPath = normalizeReturnPath(params.return_to);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-amber-200 bg-white p-10 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
          Paiement
        </p>
        <h1 className="mt-3 text-3xl font-bold">Paiement annulé</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Aucun débit n&apos;a été confirmé. Tu peux revenir à l&apos;espace précédent
          et relancer le paiement quand tu veux.
        </p>
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
