"use client";
import { useState } from "react";
export default function Planning() {
  const [selected, setSelected] = useState<string | null>(null);
  const sessions = [
    { date: "10 juin 2026", title: "Habilitation électrique H0B0" },
    { date: "18 juin 2026", title: "BS / BE Manœuvre" },
    { date: "02 juillet 2026", title: "Manipulation extincteurs" },
  ];
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Calendrier des formations</h1>
      <div className="grid gap-4">
        {sessions.map((session) => (
          <button
            key={session.date}
            onClick={() => setSelected(session.date)}
            className={`rounded-xl border p-4 text-left transition ${
              selected === session.date
                ? "border-red-600 bg-red-50"
                : "border-slate-200 hover:border-red-200"
            }`}
          >
            <p className="font-semibold">{session.title}</p>
            <p className="text-sm text-slate-600">{session.date}</p>
          </button>
        ))}
      </div>
      {selected && (
        <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="font-semibold">Vous avez sélectionné :</p>
          <p className="mt-2">{selected}</p>
          <a
            href="/demande-devis"
            className="mt-4 inline-block rounded-xl bg-green-700 px-4 py-2 text-white hover:bg-green-800"
          >
            Demander un devis
          </a>
        </div>
      )}
    </main>
  );
}