import Link from "next/link";

type SuccessPageProps = {
  searchParams?: Promise<{
    return_to?: string | string[];
  }>;
};

function normalizeReturnPath(value: string | string[] | undefined) {
  const singleValue = Array.isArray(value) ? value[0] ?? "" : value ?? "";
  return singleValue.startsWith("/") ? singleValue : "/dashboard";
}

export default async function PaiementSuccesPage({
  searchParams,
}: SuccessPageProps) {
  const params = searchParams ? await searchParams : {};
  const returnPath = normalizeReturnPath(params.return_to);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-emerald-200 bg-white p-10 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Paiement
        </p>
        <h1 className="mt-3 text-3xl font-bold">Paiement confirmé</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Le paiement a bien été lancé sur Stripe. La confirmation finale est
          synchronisée automatiquement avec PREVENSIA via le webhook. Si le
          badge n&apos;est pas encore passé à <strong>Payé</strong>, recharge la
          page dans quelques secondes.
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
