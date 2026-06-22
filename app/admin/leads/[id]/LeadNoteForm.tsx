"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function LeadNoteForm({ leadId, currentNotes }: { leadId: string; currentNotes: string }) {
  const [notes, setNotes] = useState(currentNotes);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  async function handleSave() {
    setLoading(true);
    try {
      await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: leadId, notes }),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Ajouter une note sur ce prospect…"
        rows={4}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-900 focus:bg-white resize-none"
      />
      <button
        onClick={handleSave}
        disabled={loading}
        className="self-start rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
      >
        {saved ? "✅ Enregistré" : loading ? "Enregistrement…" : "Enregistrer la note"}
      </button>
    </div>
  );
}
