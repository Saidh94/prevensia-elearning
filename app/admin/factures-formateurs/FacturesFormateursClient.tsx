"use client";

import { useState } from "react";

type Formateur = { id: string; prenom: string; nom: string; email: string };
type Facture = {
  id: string;
  montant_ht: number;
  tva_rate: number;
  periode: string;
  numero: string | null;
  description: string | null;
  fichier_url: string | null;
  fichier_nom: string | null;
  statut: "en_attente" | "validee" | "payee" | "rejetee";
  note_admin: string | null;
  paid_at: string | null;
  created_at: string;
  formateur: Formateur | null;
  session: { formation: string; date: string } | null;
};

const STATUT_CONFIG = {
  en_attente: { label: "En attente", bg: "bg-amber-100",  text: "text-amber-800",  border: "border-amber-200" },
  validee:    { label: "Validée",    bg: "bg-blue-100",   text: "text-blue-800",   border: "border-blue-200"  },
  payee:      { label: "Payée",      bg: "bg-green-100",  text: "text-green-800",  border: "border-green-200" },
  rejetee:    { label: "Rejetée",    bg: "bg-red-100",    text: "text-red-800",    border: "border-red-200"   },
};

export default function FacturesFormateursClient({ initialFactures }: { initialFactures: Facture[] }) {
  const [factures,  setFactures]  = useState<Facture[]>(initialFactures);
  const [filter,    setFilter]    = useState<string>("all");
  const [updating,  setUpdating]  = useState<string | null>(null);
  const [noteMap,   setNoteMap]   = useState<Record<string, string>>({});
  const [error,     setError]     = useState("");

  const filtered = filter === "all" ? factures : factures.filter(f => f.statut === filter);

  const stats = {
    total:      factures.length,
    en_attente: factures.filter(f => f.statut === "en_attente").length,
    validee:    factures.filter(f => f.statut === "validee").length,
    payee:      factures.filter(f => f.statut === "payee").length,
    totalHT:    factures.filter(f => f.statut === "payee").reduce((s, f) => s + f.montant_ht, 0),
  };

  async function updateStatut(id: string, statut: string) {
    setUpdating(id); setError("");
    try {
      const res = await fetch(`/api/admin/factures-formateurs/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ statut, note_admin: noteMap[id] ?? null }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setFactures(prev => prev.map(f => f.id === id ? { ...f, statut: statut as Facture["statut"], note_admin: noteMap[id] ?? f.note_admin, paid_at: statut === "payee" ? new Date().toISOString() : f.paid_at } : f));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur");
    } finally { setUpdating(null); }
  }

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "En attente", value: stats.en_attente, color: "text-amber-700", bg: "bg-amber-50 border-amber-200" },
          { label: "Validées",   value: stats.validee,    color: "text-blue-700",  bg: "bg-blue-50 border-blue-200"   },
          { label: "Payées",     value: stats.payee,      color: "text-green-700", bg: "bg-green-50 border-green-200" },
          { label: "Total payé", value: `${stats.totalHT.toFixed(2)} €`, color: "text-slate-700", bg: "bg-slate-50 border-slate-200" },
        ].map(k => (
          <div key={k.label} className={`rounded-2xl border p-4 ${k.bg}`}>
            <p className="text-xs font-semibold text-slate-500">{k.label}</p>
            <p className={`text-2xl font-bold mt-1 ${k.color}`}>{k.value}</p>
          </div>
        ))}
      </div>

      {/* Filtres */}
      <div className="flex flex-wrap gap-2">
        {[
          { key: "all",        label: "Toutes" },
          { key: "en_attente", label: "En attente" },
          { key: "validee",    label: "Validées" },
          { key: "payee",      label: "Payées" },
          { key: "rejetee",    label: "Rejetées" },
        ].map(f => (
          <button key={f.key} onClick={() => setFilter(f.key)}
            className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${
              filter === f.key ? "bg-slate-900 text-white" : "border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}>
            {f.label}
          </button>
        ))}
      </div>

      {error && <p className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">{error}</p>}

      {/* Liste */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white py-16 text-center">
          <p className="text-3xl">🧾</p>
          <p className="mt-2 text-sm text-slate-500">Aucune facture dans cette catégorie</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(f => {
            const cfg = STATUT_CONFIG[f.statut];
            const fmt = f.formateur;
            return (
              <div key={f.id} className={`rounded-2xl border bg-white shadow-sm overflow-hidden`}>
                {/* En-tête */}
                <div className="px-5 py-4 border-b border-slate-100 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-slate-900">
                        {fmt ? `${fmt.prenom} ${fmt.nom}` : "—"}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="text-sm text-slate-600">{f.periode}</span>
                      {f.numero && <span className="text-xs text-slate-400">n° {f.numero}</span>}
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${cfg.bg} ${cfg.text}`}>
                        {cfg.label}
                      </span>
                    </div>
                    {fmt && <p className="text-xs text-slate-400 mt-0.5">{fmt.email}</p>}
                    {f.session && (
                      <p className="text-xs text-slate-500 mt-0.5">
                        Session : {f.session.formation} — {new Date(f.session.date + "T00:00:00").toLocaleDateString("fr-FR")}
                      </p>
                    )}
                    {f.description && <p className="text-xs text-slate-500 mt-0.5">{f.description}</p>}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-lg font-bold text-slate-900">{f.montant_ht.toFixed(2)} € HT</p>
                    {f.tva_rate > 0 && (
                      <p className="text-xs text-slate-500">{(f.montant_ht * (1 + f.tva_rate / 100)).toFixed(2)} € TTC</p>
                    )}
                    {f.paid_at && (
                      <p className="text-xs text-green-600">Payée le {new Date(f.paid_at).toLocaleDateString("fr-FR")}</p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="px-5 py-3 bg-slate-50 flex flex-wrap items-center gap-3">
                  {f.fichier_url && (
                    <a href={f.fichier_url} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100">
                      📎 {f.fichier_nom ?? "Facture PDF"}
                    </a>
                  )}

                  <input
                    type="text"
                    placeholder="Note admin (optionnelle)"
                    value={noteMap[f.id] ?? f.note_admin ?? ""}
                    onChange={e => setNoteMap(prev => ({ ...prev, [f.id]: e.target.value }))}
                    className="flex-1 min-w-32 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-red-300 bg-white"
                  />

                  <div className="flex gap-1.5 flex-wrap">
                    {f.statut !== "validee" && f.statut !== "payee" && (
                      <button onClick={() => updateStatut(f.id, "validee")} disabled={updating === f.id}
                        className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-700 disabled:opacity-50">
                        ✅ Valider
                      </button>
                    )}
                    {f.statut !== "payee" && (
                      <button onClick={() => updateStatut(f.id, "payee")} disabled={updating === f.id}
                        className="rounded-lg bg-green-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-green-700 disabled:opacity-50">
                        💳 Marquer payée
                      </button>
                    )}
                    {f.statut !== "rejetee" && f.statut !== "payee" && (
                      <button onClick={() => updateStatut(f.id, "rejetee")} disabled={updating === f.id}
                        className="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-bold text-red-700 hover:bg-red-100 disabled:opacity-50">
                        ❌ Rejeter
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
