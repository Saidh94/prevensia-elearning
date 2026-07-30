"use client";

import { useState } from "react";

type Collab = { fullName: string; email: string };

type Props = {
  collaborateurs: Collab[];
  companyName: string;
};

export default function DemandeClasseVirtuelle({ collaborateurs, companyName }: Props) {
  const [open,      setOpen]      = useState(false);
  const [selected,  setSelected]  = useState<Set<string>>(new Set());
  const [message,   setMessage]   = useState("");
  const [loading,   setLoading]   = useState(false);
  const [sent,      setSent]      = useState(false);
  const [error,     setError]     = useState("");

  function toggleCollab(email: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(email)) next.delete(email); else next.add(email);
      return next;
    });
  }

  async function handleSend() {
    if (selected.size === 0) {
      setError("Sélectionnez au moins un collaborateur.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/employeur/demande-classe-virtuelle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName,
          collaborateurs: collaborateurs.filter((c) => selected.has(c.email)),
          message,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Erreur");
      setSent(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 flex items-center gap-3">
        <span className="text-2xl">✅</span>
        <div>
          <p className="text-sm font-semibold text-green-800">Demande envoyée !</p>
          <p className="text-xs text-green-700">Notre équipe vous contactera sous 24h ouvrées pour fixer la date.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-purple-200 bg-purple-50 overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-purple-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">🎓</span>
          <div>
            <p className="text-sm font-bold text-purple-900">Demander une date de classe virtuelle</p>
            <p className="text-xs text-purple-700">Pour {collaborateurs.length} collaborateur{collaborateurs.length > 1 ? "s" : ""}</p>
          </div>
        </div>
        <span className="text-purple-500 text-lg">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="px-5 pb-5 space-y-4 border-t border-purple-200 pt-4">
          <p className="text-sm text-purple-800">
            Sélectionnez les collaborateurs à inclure dans la session :
          </p>

          <div className="space-y-2">
            {collaborateurs.map((c) => (
              <label
                key={c.email}
                className="flex items-center gap-3 cursor-pointer rounded-xl border border-purple-200 bg-white px-4 py-3 hover:bg-purple-50"
              >
                <input
                  type="checkbox"
                  checked={selected.has(c.email)}
                  onChange={() => toggleCollab(c.email)}
                  className="rounded border-purple-300 text-purple-600 focus:ring-purple-500"
                />
                <div>
                  <p className="text-sm font-medium text-slate-800">{c.fullName}</p>
                  <p className="text-xs text-slate-500">{c.email}</p>
                </div>
              </label>
            ))}
          </div>

          <div>
            <label className="block text-xs font-medium text-purple-800 mb-1">
              Message (disponibilités, contraintes…)
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ex : disponibles les mardis après-midi en août, groupe de 3 personnes à Paris…"
              className="w-full rounded-xl border border-purple-200 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            />
          </div>

          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-purple-200 px-4 py-2.5 text-sm font-medium text-purple-700 hover:bg-purple-100"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={handleSend}
              disabled={loading}
              className="flex-1 rounded-xl bg-purple-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-purple-800 disabled:opacity-50"
            >
              {loading ? "Envoi…" : `Envoyer la demande (${selected.size} collab${selected.size > 1 ? "s" : ""})`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
