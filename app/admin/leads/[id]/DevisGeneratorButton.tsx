"use client";

import { useState } from "react";
import DevisPanel, { type DevisInitialData } from "../../components/DevisPanel";

export default function DevisGeneratorButton({ initialData }: { initialData: DevisInitialData }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
      >
        📄 Générer le devis
      </button>

      {open && (
        <DevisPanel initialData={initialData} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
