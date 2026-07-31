"use client";

import { useState, useEffect, useRef } from "react";

type Session = { id: string; formation: string; date: string };
type Facture = {
  id: string;
  numero: string | null;
  montant_ht: number;
  tva_rate: number;
  periode: string;
  description: string | null;
  fichier_url: string | null;
  fichier_nom: string | null;
  statut: "en_attente" | "validee" | "payee" | "rejetee";
  note_admin: string | null;
  paid_at: string | null;
  created_at: string;
  session: { formation: string; date: string } | null;
};

const STATUT_CONFIG = {
  en_attente: { label: "En attente",  bg: "bg-amber-100",  text: "text-amber-800"  },
  validee:    { label: "Validée",     bg: "bg-blue-100",   text: "text-blue-800"   },
  payee:      { label: "Payée",       bg: "bg-green-100",  text: "text-green-800"  },
  rejetee:    { label: "Rejetée",     bg: "bg-red-100",    text: "text-red-800"    },
};

export default function FacturesFormateur({
  formateurId, sessions,
}: {
  formateurId: string;
  sessions: Session[];
}) {
  const [tab,      setTab]      = useState<"liste" | "nouveau">("liste");
  const [factures, setFactures] = useState<Facture[]>([]);
  const [loading,  setLoading]  = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error,    setError]    = useState("");
  const [success,  setSuccess]  = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  // Formulaire
  const [numero,      setNumero]      = useState("");
  const [montantHT,   setMontantHT]   = useState("");
  const [tvaRate,     setTvaRate]     = useState("0");
  const [periode,     setPeriode]     = useState("");
  const [description, setDescription] = useState("");
  const [sessionId,   setSessionId]   = useState("");
  const [fichier,     setFichier]     = useState<File | null>(null);

  useEffect(() => {
    fetchFactures();
  }, []);

  async function fetchFactures() {
    setLoading(true);
    try {
      const res = await fetch("/api/formateur/factures");
      const data = await res.json();
      setFactures(Array.isArray(data) ? data : []);
    } catch { /* silencieux */ }
    finally { setLoading(false); }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!montantHT || !periode) { setError("Montant et période requis"); return; }
    setSubmitting(true); setError(""); setSuccess("");

    const fd = new FormData();
    fd.append("montant_ht",  montantHT);
    fd.append("tva_rate",    tvaRate);
    fd.append("periode",     periode);
    if (numero)      fd.append("numero",      numero);
    if (description) fd.append("description", description);
    if (sessionId)   fd.append("session_id",  sessionId);
    if (fichier)     fd.append("fichier",     fichier);

    try {
      const res = await fetch("/api/formateur/factures", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setSuccess("Facture déposée avec succès ! Vous serez notifié par email dès validation.");
      setNumero(""); setMontantHT(""); setTvaRate("0"); setPeriode("");
      setDescription(""); setSessionId(""); setFichier(null);
      if (fileRef.current) fileRef.current.value = "";
      await fetchFactures();
      setTimeout(() => setTab("liste"), 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    } finally { setSubmitting(false); }
  }

  const montantTTC = montantHT
    ? (parseFloat(montantHT) * (1 + parseInt(tvaRate) / 100)).toFixed(2)
    : "0.00";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      {/* En-tête + tabs */}
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4">
        <h2 className="text-base font-bold text-slate-900">📄 Mes factures</h2>
        <div className="flex gap-1">
          <button onClick={() => setTab("liste")}
            className={`rounded-xl px-4 py-1.5 text-xs font-semibold transition-colors ${
              tab === "liste" ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100"
            }`}>
            Mes factures {factures.length > 0 && `(${factures.length})`}
          </button>
          <button onClick={() => { setTab("nouveau"); setError(""); setSuccess(""); }}
            className={`rounded-xl px-4 py-1.5 text-xs font-semibold transition-colors ${
              tab === "nouveau" ? "bg-red-700 text-white" : "text-slate-500 hover:bg-slate-100"
            }`}>
            + Déposer une facture
          </button>
        </div>
      </div>

      {/* Liste */}
      {tab === "liste" && (
        <div className="p-6">
          {loading ? (
            <p className="text-sm text-slate-400 text-center py-8">Chargement…</p>
          ) : factures.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-3xl mb-2">🧾</p>
              <p className="text-sm text-slate-500">Aucune facture déposée pour l&apos;instant.</p>
              <button onClick={() => setTab("nouveau")}
                className="mt-4 rounded-xl bg-red-700 px-4 py-2 text-xs font-bold text-white hover:bg-red-800">
                Déposer ma première facture →
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {factures.map(f => {
                const cfg = STATUT_CONFIG[f.statut] ?? STATUT_CONFIG.en_attente;
                const montantTTCF = (f.montant_ht * (1 + f.tva_rate / 100)).toFixed(2);
                return (
                  <div key={f.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-bold text-slate-900">{f.periode}</span>
                          {f.numero && <span className="text-xs text-slate-400">n° {f.numero}</span>}
                          <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${cfg.bg} ${cfg.text}`}>
                            {cfg.label}
                          </span>
                        </div>
                        {f.session && (
                          <p className="text-xs text-slate-500 mt-0.5">
                            Session : {f.session.formation} — {new Date(f.session.date + "T00:00:00").toLocaleDateString("fr-FR")}
                          </p>
                        )}
                        {f.description && <p className="text-xs text-slate-500 mt-0.5">{f.description}</p>}
                        {f.note_admin && (
                          <p className="mt-1 rounded-lg bg-amber-50 border border-amber-100 px-3 py-1.5 text-xs text-amber-800">
                            Note admin : {f.note_admin}
                          </p>
                        )}
                        {f.paid_at && (
                          <p className="text-xs text-green-600 mt-1">
                            Payée le {new Date(f.paid_at).toLocaleDateString("fr-FR")}
                          </p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-base font-bold text-slate-900">{f.montant_ht.toFixed(2)} € HT</p>
                        {f.tva_rate > 0 && (
                          <p className="text-xs text-slate-500">{montantTTCF} € TTC</p>
                        )}
                        {f.fichier_url && (
                          <a href={f.fichier_url} target="_blank" rel="noreferrer"
                            className="mt-1 inline-block text-xs font-semibold text-blue-600 hover:underline">
                            📎 {f.fichier_nom ?? "Facture PDF"}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Formulaire nouveau dépôt */}
      {tab === "nouveau" && (
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Période <span className="text-red-600">*</span></label>
              <input type="text" value={periode} onChange={e => setPeriode(e.target.value)}
                placeholder="ex : Juillet 2026"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300" required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">N° de facture</label>
              <input type="text" value={numero} onChange={e => setNumero(e.target.value)}
                placeholder="ex : FA-2026-001"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Montant HT (€) <span className="text-red-600">*</span></label>
              <input type="number" step="0.01" min="0" value={montantHT} onChange={e => setMontantHT(e.target.value)}
                placeholder="0.00"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300" required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">TVA (%)</label>
              <select value={tvaRate} onChange={e => setTvaRate(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300">
                <option value="0">0% (franchise TVA)</option>
                <option value="20">20%</option>
              </select>
            </div>
          </div>

          {montantHT && (
            <div className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-2 text-sm">
              <span className="text-slate-500">Montant TTC : </span>
              <span className="font-bold text-slate-900">{montantTTC} €</span>
            </div>
          )}

          {sessions.length > 0 && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Session concernée</label>
              <select value={sessionId} onChange={e => setSessionId(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300">
                <option value="">— Aucune session spécifique —</option>
                {sessions.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.formation} — {new Date(s.date + "T00:00:00").toLocaleDateString("fr-FR")}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Description / prestation</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)}
              rows={2} placeholder="Animation session ATEX N1 — 3 participants…"
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 resize-none" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Facture PDF</label>
            <input ref={fileRef} type="file" accept=".pdf,application/pdf"
              onChange={e => setFichier(e.target.files?.[0] ?? null)}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-red-50 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-red-700" />
          </div>

          {error   && <p className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">{error}</p>}
          {success && <p className="rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">{success}</p>}

          <button type="submit" disabled={submitting}
            className="w-full rounded-xl bg-red-700 py-3 text-sm font-bold text-white hover:bg-red-800 disabled:opacity-50 transition-colors">
            {submitting ? "Envoi en cours…" : "📤 Déposer ma facture"}
          </button>
        </form>
      )}
    </div>
  );
}
