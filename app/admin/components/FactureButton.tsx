"use client";

import { useState } from "react";
import type { FactureLine } from "@/lib/facture/generate-facture-pdf";

export type FactureInitialData = {
  leadId?: string;
  clientName?: string;
  clientEmail?: string;
  clientCompany?: string;
  lines?: FactureLine[];
  totalHT?: number;
};

type Props = {
  initialData: FactureInitialData;
  /** Libellé du bouton déclencheur */
  label?: string;
};

export default function FactureButton({ initialData, label = "🧾 Générer la facture" }: Props) {
  const [open,    setOpen]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [numero,  setNumero]  = useState("");
  const [error,   setError]   = useState("");

  // Champs éditables
  const [clientName,    setClientName]    = useState(initialData.clientName    ?? "");
  const [clientEmail,   setClientEmail]   = useState(initialData.clientEmail   ?? "");
  const [clientCompany, setClientCompany] = useState(initialData.clientCompany ?? "");
  const [totalHT,       setTotalHT]       = useState(initialData.totalHT       ?? 0);
  const [lines,         setLines]         = useState<FactureLine[]>(
    initialData.lines?.length
      ? initialData.lines
      : [{ label: "", qty: 1, puHT: null }]
  );

  function updateLine(i: number, field: keyof FactureLine, value: string | number | null) {
    setLines((prev) => {
      const next = [...prev];
      next[i] = { ...next[i], [field]: value };
      // Recalcul total
      const ht = next.reduce((s, l) => s + (l.puHT !== null ? l.puHT * l.qty : 0), 0);
      setTotalHT(ht);
      return next;
    });
  }

  function addLine() { setLines((p) => [...p, { label: "", qty: 1, puHT: null }]); }
  function removeLine(i: number) {
    setLines((p) => {
      const next = p.filter((_, idx) => idx !== i);
      const ht = next.reduce((s, l) => s + (l.puHT !== null ? l.puHT * l.qty : 0), 0);
      setTotalHT(ht);
      return next;
    });
  }

  async function handleGenerate() {
    if (!clientEmail) { setError("Email client requis."); return; }
    if (lines.some((l) => !l.label)) { setError("Toutes les lignes doivent avoir un libellé."); return; }
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/admin/facture/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId:        initialData.leadId,
          clientName, clientEmail, clientCompany,
          lines, totalHT,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Erreur");
      setNumero(json.numero);
      setSent(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <button className="flex-1 bg-black/50" onClick={() => setOpen(false)} aria-label="Fermer" />

          <div className="flex w-full max-w-2xl flex-col bg-white shadow-2xl">
            {/* En-tête */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Admin PREVENSIA</p>
                <h2 className="text-lg font-bold text-slate-900">Générer la facture</h2>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-xl border border-slate-200 p-2 text-slate-500 hover:bg-slate-50">✕</button>
            </div>

            {sent ? (
              /* ── Confirmation ── */
              <div className="flex flex-1 flex-col items-center justify-center py-20 text-center">
                <div className="text-6xl">🧾</div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Facture envoyée !</h3>
                <p className="mt-2 text-sm text-slate-500">N° <strong>{numero}</strong> — envoyée à <strong>{clientEmail}</strong></p>
                <p className="mt-1 text-xs text-slate-400">Le lead a été marqué comme converti.</p>
                <button onClick={() => setOpen(false)} className="mt-8 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                  Fermer
                </button>
              </div>
            ) : (
              /* ── Formulaire ── */
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {/* Client */}
                <section>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">Client</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { label: "Nom / Prénom *", value: clientName,    set: setClientName,    type: "text"  },
                      { label: "Email *",         value: clientEmail,   set: setClientEmail,   type: "email" },
                      { label: "Société",         value: clientCompany, set: setClientCompany, type: "text"  },
                    ].map(({ label, value, set, type }) => (
                      <div key={label} className={label === "Société" ? "sm:col-span-2" : ""}>
                        <label className="mb-1 block text-xs font-semibold text-slate-600">{label}</label>
                        <input type={type} value={value} onChange={(e) => set(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-slate-900 focus:bg-white" />
                      </div>
                    ))}
                  </div>
                </section>

                {/* Lignes */}
                <section>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">Lignes de facturation</p>
                  <div className="space-y-2">
                    {lines.map((line, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <input
                          value={line.label}
                          onChange={(e) => updateLine(i, "label", e.target.value)}
                          placeholder="Désignation (ex: ATEX N1 × 3 participants)"
                          className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-slate-900 focus:bg-white"
                        />
                        <input
                          type="number" min={1} value={line.qty}
                          onChange={(e) => updateLine(i, "qty", parseInt(e.target.value) || 1)}
                          className="w-16 rounded-xl border border-slate-200 bg-slate-50 px-2 py-2.5 text-sm text-center outline-none focus:border-slate-900 focus:bg-white"
                          title="Quantité"
                        />
                        <input
                          type="number" min={0} step={0.01}
                          value={line.puHT ?? ""}
                          onChange={(e) => updateLine(i, "puHT", e.target.value ? parseFloat(e.target.value) : null)}
                          placeholder="PU HT"
                          className="w-28 rounded-xl border border-slate-200 bg-slate-50 px-2 py-2.5 text-sm text-right outline-none focus:border-slate-900 focus:bg-white"
                        />
                        {lines.length > 1 && (
                          <button type="button" onClick={() => removeLine(i)}
                            className="mt-0.5 rounded-lg border border-slate-200 px-2 py-2 text-xs text-slate-400 hover:bg-red-50 hover:text-red-600">✕</button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={addLine}
                    className="mt-2 rounded-xl border border-dashed border-slate-300 px-4 py-2 text-xs font-semibold text-slate-500 hover:border-slate-500 hover:text-slate-700">
                    + Ajouter une ligne
                  </button>
                </section>

                {/* Récap */}
                <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Total HT</span>
                    <span className="font-semibold">{totalHT.toFixed(2)} EUR</span>
                  </div>
                  <div className="flex justify-between text-slate-600 mt-1">
                    <span>TVA 20 %</span>
                    <span>{(totalHT * 0.2).toFixed(2)} EUR</span>
                  </div>
                  <div className="flex justify-between font-bold text-slate-900 mt-2 border-t border-slate-200 pt-2">
                    <span>Total TTC</span>
                    <span>{(totalHT * 1.2).toFixed(2)} EUR</span>
                  </div>
                </section>

                {error && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
                )}
              </div>
            )}

            {!sent && (
              <div className="sticky bottom-0 flex gap-3 border-t border-slate-200 bg-white px-6 py-4">
                <button type="button" onClick={handleGenerate} disabled={loading}
                  className="flex-1 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-700 disabled:opacity-50">
                  {loading ? "Génération en cours…" : "Générer et envoyer la facture"}
                </button>
                <button onClick={() => setOpen(false)}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                  Annuler
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
