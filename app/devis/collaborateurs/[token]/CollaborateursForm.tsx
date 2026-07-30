"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Collab = { prenom: string; nom: string; email: string };

type DevisData = {
  id: string;
  token: string;
  status: string;
  contact_name: string | null;
  company_name: string | null;
  email: string;
  participants: number;
  formations: { label: string }[];
};

export default function CollaborateursForm({ devis }: { devis: DevisData }) {
  const router   = useRouter();
  const n        = devis.participants;

  const [collabs,  setCollabs]  = useState<Collab[]>(
    Array.from({ length: n }, () => ({ prenom: "", nom: "", email: "" }))
  );
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState("");

  const alreadyDone = devis.status === "provisioned";

  function update(i: number, field: keyof Collab, value: string) {
    setCollabs((prev) => {
      const next = [...prev];
      next[i] = { ...next[i], [field]: value };
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Validation basique
    for (let i = 0; i < n; i++) {
      const c = collabs[i];
      if (!c.prenom.trim() || !c.nom.trim() || !c.email.trim()) {
        setError(`Veuillez remplir tous les champs du collaborateur ${i + 1}.`);
        return;
      }
      if (!c.email.includes("@")) {
        setError(`L'email du collaborateur ${i + 1} est invalide.`);
        return;
      }
    }

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/devis/provisionner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: devis.token, collaborateurs: collabs }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Erreur provisioning");
      router.push(`/devis/confirmation/${devis.token}`);
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
          <div className="bg-red-700 px-6 py-5">
            <p className="text-xs font-bold uppercase tracking-widest text-red-200">PREVENSIA FORMATION</p>
            <h1 className="text-xl font-extrabold text-white mt-0.5">
              Vos collaborateurs à former
            </h1>
          </div>
          <div className="px-6 py-5 border-b border-slate-100">
            <p className="text-sm text-slate-600">
              Devis pour <strong>{devis.company_name ?? devis.contact_name ?? devis.email}</strong> ·{" "}
              {n} participant{n > 1 ? "s" : ""}
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Formations : {devis.formations.map((f) => f.label).join(", ")}
            </p>
          </div>
        </div>

        {/* Explication */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50 px-6 py-4">
          <p className="text-sm font-semibold text-blue-800">📋 Comment ça fonctionne ?</p>
          <p className="mt-1 text-sm text-blue-700">
            Renseignez les informations de chaque collaborateur. Chacun recevra un email
            avec ses identifiants de connexion pour accéder directement à sa formation.
            Vous recevrez un accès à votre <strong>espace employeur</strong> pour suivre leur progression.
          </p>
        </div>

        {alreadyDone ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-5 text-center space-y-3">
            <div className="text-4xl">✅</div>
            <p className="text-base font-bold text-green-800">Accès déjà activés !</p>
            <p className="text-sm text-green-700">Les accès de vos collaborateurs ont déjà été créés.</p>
            <a href="/employeur/dashboard"
              className="inline-block mt-2 rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white">
              Accéder à mon espace →
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {collabs.map((c, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white px-6 py-5 space-y-3">
                <p className="text-sm font-bold text-slate-700">
                  Collaborateur {i + 1}
                  {i === 0 && devis.contact_name
                    ? <span className="ml-2 text-xs font-normal text-slate-400">(vous pouvez vous inclure)</span>
                    : null}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Prénom *</label>
                    <input
                      type="text"
                      required
                      value={c.prenom}
                      onChange={(e) => update(i, "prenom", e.target.value)}
                      placeholder="Marie"
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Nom *</label>
                    <input
                      type="text"
                      required
                      value={c.nom}
                      onChange={(e) => update(i, "nom", e.target.value)}
                      placeholder="Dupont"
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Email professionnel *</label>
                  <input
                    type="email"
                    required
                    value={c.email}
                    onChange={(e) => update(i, "email", e.target.value)}
                    placeholder="marie.dupont@entreprise.fr"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            ))}

            {error && (
              <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-red-700 px-6 py-4 text-base font-bold text-white hover:bg-red-800 disabled:opacity-50 transition-colors"
            >
              {loading ? "Activation des accès en cours…" : `🚀 Activer les accès pour ${n} collaborateur${n > 1 ? "s" : ""}`}
            </button>

            <p className="text-center text-xs text-slate-400">
              Chaque collaborateur recevra un email d&apos;invitation avec ses identifiants de connexion.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
