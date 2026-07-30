"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Formation = {
  label: string;
  priceHT: number | null;
  priceNote: string;
  perPerson: boolean;
  qty: number;
};

type DevisRow = {
  id: string;
  token: string;
  status: string;
  contact_name: string | null;
  company_name: string | null;
  email: string;
  phone: string | null;
  participants: number;
  formations: Formation[];
  total_ht: number;
  tva_rate: number;
  has_quote: boolean;
  notes: string | null;
  created_at: string;
};

export default function DevisValidationClient({ devis }: { devis: DevisRow }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  const montantTVA = devis.tva_rate > 0 ? Math.round(devis.total_ht * devis.tva_rate) / 100 : 0;
  const totalTTC   = devis.total_ht + montantTVA;

  const alreadyValidated = devis.status === "validated";

  async function handleValidate() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/devis/valider", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: devis.token }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Erreur validation");
      router.push(`/devis/collaborateurs/${devis.token}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur inconnue");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="mx-auto max-w-2xl space-y-6">

        {/* En-tête */}
        <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
          <div className="bg-red-700 px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-200">PREVENSIA FORMATION</p>
              <h1 className="text-xl font-extrabold text-white mt-0.5">Votre devis</h1>
            </div>
            {alreadyValidated
              ? <span className="rounded-full bg-green-400 px-3 py-1 text-xs font-bold text-green-900">Validé</span>
              : <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-900">En attente de validation</span>
            }
          </div>

          {/* Émetteur / Destinataire */}
          <div className="grid gap-4 p-6 sm:grid-cols-2 border-b border-slate-100">
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">De</p>
              <p className="text-sm font-bold text-slate-900">PREVENSIA FORMATION</p>
              <p className="text-xs text-slate-500">33, av. Philippe Auguste — 75011 Paris</p>
              <p className="text-xs text-slate-500">SIRET : 107 290 579 00013</p>
              <p className="text-xs text-slate-500">contact@prevensia-formation.fr</p>
            </div>
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">À</p>
              <p className="text-sm font-bold text-slate-900">{devis.contact_name ?? devis.email}</p>
              {devis.company_name && <p className="text-xs text-slate-600">{devis.company_name}</p>}
              <p className="text-xs text-slate-500">{devis.email}</p>
              {devis.phone && <p className="text-xs text-slate-500">{devis.phone}</p>}
              <p className="text-xs text-slate-500 mt-1">{devis.participants} participant{devis.participants > 1 ? "s" : ""}</p>
            </div>
          </div>

          {/* Tableau formations */}
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="py-2.5 px-4 text-left text-xs font-semibold text-slate-500">Formation</th>
                <th className="py-2.5 px-4 text-right text-xs font-semibold text-slate-500">Qté</th>
                <th className="py-2.5 px-4 text-right text-xs font-semibold text-slate-500">PU HT</th>
                <th className="py-2.5 px-4 text-right text-xs font-semibold text-slate-500">Total HT</th>
              </tr>
            </thead>
            <tbody>
              {devis.formations.map((f, i) => {
                const puHT      = f.priceHT !== null ? `${f.priceHT} €` : "Sur devis";
                const lineTotal = f.priceHT !== null ? `${f.priceHT * f.qty} €` : "Sur devis";
                return (
                  <tr key={i} className="border-b border-slate-50">
                    <td className="py-3 px-4 text-slate-800 font-medium">{f.label}</td>
                    <td className="py-3 px-4 text-right text-slate-600">{f.qty}</td>
                    <td className="py-3 px-4 text-right text-slate-500">{puHT}</td>
                    <td className="py-3 px-4 text-right font-semibold text-slate-900">{lineTotal}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Totaux */}
          <div className="px-4 py-4 space-y-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Total HT</span>
              <span className="font-semibold text-slate-900">
                {devis.total_ht > 0 ? `${devis.total_ht.toFixed(2)} €` : "—"}
                {devis.has_quote && <span className="ml-1.5 text-xs text-amber-600">+ prestations sur devis</span>}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">
                {devis.tva_rate > 0 ? `TVA ${devis.tva_rate} %` : "TVA"}
              </span>
              {devis.tva_rate === 0
                ? <span className="text-slate-400 italic text-xs">Non applicable — art. 261-4-4° CGI</span>
                : <span className="font-semibold text-slate-900">{montantTVA.toFixed(2)} €</span>
              }
            </div>
            <div className="flex items-center justify-between rounded-xl bg-red-700 px-4 py-3">
              <span className="text-sm font-bold text-white">TOTAL TTC</span>
              <span className="text-sm font-bold text-white">
                {devis.total_ht > 0 ? `${totalTTC.toFixed(2)} €` : "Sur devis"}
                {devis.has_quote && <span className="ml-1.5 text-xs font-normal opacity-80">+ prestations sur devis</span>}
              </span>
            </div>
          </div>
        </div>

        {/* Notes */}
        {devis.notes && (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4">
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Notes</p>
            <p className="text-sm text-slate-700 whitespace-pre-wrap">{devis.notes}</p>
          </div>
        )}

        {/* Bloc validation */}
        {alreadyValidated ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-5">
            <p className="text-sm font-semibold text-green-800">✅ Ce devis a déjà été validé.</p>
            <p className="mt-1 text-sm text-green-700">
              Vous pouvez accéder à votre espace employeur pour suivre l&apos;avancement des formations.
            </p>
            <a
              href="/employeur/dashboard"
              className="mt-4 inline-block rounded-xl bg-green-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-800"
            >
              Accéder à mon espace →
            </a>
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 px-6 py-6 space-y-4">
            <div>
              <p className="text-base font-bold text-slate-900">Vous acceptez ce devis ?</p>
              <p className="mt-1 text-sm text-slate-600">
                En cliquant sur <strong>Je valide ce devis</strong>, vous confirmez votre commande.
                Vous pourrez ensuite renseigner les noms et emails de vos collaborateurs pour activer leurs accès.
              </p>
            </div>

            {error && (
              <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
            )}

            <button
              onClick={handleValidate}
              disabled={loading}
              className="w-full rounded-xl bg-red-700 px-6 py-4 text-base font-bold text-white hover:bg-red-800 disabled:opacity-50 transition-colors"
            >
              {loading ? "Validation en cours…" : "✅ Je valide ce devis →"}
            </button>

            <p className="text-center text-xs text-slate-400">
              Aucun paiement immédiat. Notre équipe vous contactera pour confirmer les modalités.
            </p>
          </div>
        )}

        <p className="text-center text-xs text-slate-400">
          Devis établi par PREVENSIA FORMATION · contact@prevensia-formation.fr · 01 89 62 94 92
        </p>
      </div>
    </div>
  );
}
