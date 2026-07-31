"use client";

import { useState, useEffect } from "react";

type Formateur = { id: string; prenom: string; nom: string; email: string; actif: boolean };

type Props = {
  sessionId: string;
  currentFormateurId?: string | null;
  currentFormateurName?: string | null;
  onAssigned?: (formateurId: string | null, name: string | null) => void;
};

export default function AssignFormateurButton({
  sessionId, currentFormateurId, currentFormateurName, onAssigned,
}: Props) {
  const [open,       setOpen]       = useState(false);
  const [formateurs, setFormateurs] = useState<Formateur[]>([]);
  const [selected,   setSelected]   = useState<string | null>(currentFormateurId ?? null);
  const [loading,    setLoading]    = useState(false);
  const [error,      setError]      = useState("");

  useEffect(() => {
    if (open && formateurs.length === 0) {
      fetch("/api/admin/formateurs")
        .then(r => r.json())
        .then(d => setFormateurs(Array.isArray(d) ? d.filter((f: Formateur) => f.actif) : []))
        .catch(() => setError("Impossible de charger les formateurs"));
    }
  }, [open, formateurs.length]);

  async function handleAssign() {
    setLoading(true); setError("");
    try {
      const res = await fetch(`/api/admin/sessions/${sessionId}/formateur`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formateur_id: selected }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      const f = formateurs.find(f => f.id === selected);
      onAssigned?.(selected, f ? `${f.prenom} ${f.nom}` : null);
      setOpen(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur");
    } finally { setLoading(false); }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors ${
          currentFormateurName
            ? "border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100"
            : "border-slate-200 text-slate-600 hover:bg-slate-50"
        }`}
      >
        {currentFormateurName ? `👤 ${currentFormateurName}` : "Assigner formateur"}
      </button>

      {open && (
        <div className="absolute right-0 top-9 z-50 w-72 rounded-2xl border border-slate-200 bg-white shadow-xl p-4 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Formateur</p>

          <div className="space-y-1.5 max-h-48 overflow-y-auto">
            <label className="flex items-center gap-2 cursor-pointer rounded-xl px-3 py-2 hover:bg-slate-50">
              <input type="radio" name={`fmt-${sessionId}`} value=""
                checked={selected === null}
                onChange={() => setSelected(null)}
                className="text-red-600" />
              <span className="text-sm text-slate-400 italic">— Aucun —</span>
            </label>
            {formateurs.map(f => (
              <label key={f.id} className="flex items-center gap-2 cursor-pointer rounded-xl px-3 py-2 hover:bg-slate-50">
                <input type="radio" name={`fmt-${sessionId}`} value={f.id}
                  checked={selected === f.id}
                  onChange={() => setSelected(f.id)}
                  className="text-red-600" />
                <div>
                  <p className="text-sm font-medium text-slate-800">{f.prenom} {f.nom}</p>
                  <p className="text-xs text-slate-400">{f.email}</p>
                </div>
              </label>
            ))}
          </div>

          {error && <p className="text-xs text-red-600">{error}</p>}

          <div className="flex gap-2">
            <button onClick={() => setOpen(false)}
              className="flex-1 rounded-xl border border-slate-200 py-2 text-xs font-semibold text-slate-600">
              Annuler
            </button>
            <button onClick={handleAssign} disabled={loading}
              className="flex-1 rounded-xl bg-red-700 py-2 text-xs font-bold text-white hover:bg-red-800 disabled:opacity-50">
              {loading ? "…" : selected === currentFormateurId ? "Confirmer" : "Assigner + notifier"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
