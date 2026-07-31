"use client";

import { useState } from "react";
import Link from "next/link";

const SPECIALITES_OPTIONS = [
  "ATEX Niveau 0", "ATEX Niveau 1", "ATEX Niveau 2",
  "Habilitation H0B0", "BS / BE Manœuvre", "B1 / B2 / BR / BC",
  "SST", "SSIAP1", "Extincteurs", "SSI", "Sprinkler",
];

type Formateur = {
  id: string;
  prenom: string;
  nom: string;
  email: string;
  phone: string | null;
  specialites: string[];
  bio: string | null;
  actif: boolean;
  user_id: string | null;
  created_at: string;
};

type FormData = {
  prenom: string; nom: string; email: string; phone: string;
  specialites: string[]; bio: string; inviteAuth: boolean;
};

const emptyForm: FormData = {
  prenom: "", nom: "", email: "", phone: "",
  specialites: [], bio: "", inviteAuth: true,
};

export default function FormateursClient({ formateursInit }: { formateursInit: Formateur[] }) {
  const [formateurs, setFormateurs] = useState<Formateur[]>(formateursInit);
  const [showForm,   setShowForm]   = useState(false);
  const [editing,    setEditing]    = useState<Formateur | null>(null);
  const [form,       setForm]       = useState<FormData>(emptyForm);
  const [loading,    setLoading]    = useState(false);
  const [error,      setError]      = useState("");
  const [search,     setSearch]     = useState("");

  const filtered = formateurs.filter(f =>
    `${f.prenom} ${f.nom} ${f.email}`.toLowerCase().includes(search.toLowerCase())
  );

  function openNew() {
    setEditing(null);
    setForm(emptyForm);
    setError("");
    setShowForm(true);
  }

  function openEdit(f: Formateur) {
    setEditing(f);
    setForm({ prenom: f.prenom, nom: f.nom, email: f.email, phone: f.phone ?? "",
               specialites: f.specialites, bio: f.bio ?? "", inviteAuth: false });
    setError("");
    setShowForm(true);
  }

  function toggleSpec(s: string) {
    setForm(prev => ({
      ...prev,
      specialites: prev.specialites.includes(s)
        ? prev.specialites.filter(x => x !== s)
        : [...prev.specialites, s],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.prenom || !form.nom || !form.email) {
      setError("Prénom, nom et email requis."); return;
    }
    setLoading(true); setError("");
    try {
      if (editing) {
        // PATCH
        const res = await fetch(`/api/admin/formateurs/${editing.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error);
        setFormateurs(prev => prev.map(f => f.id === editing.id ? json : f));
      } else {
        // POST
        const res = await fetch("/api/admin/formateurs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error);
        setFormateurs(prev => [...prev, json]);
      }
      setShowForm(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur");
    } finally { setLoading(false); }
  }

  async function handleToggleActif(f: Formateur) {
    const res = await fetch(`/api/admin/formateurs/${f.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ actif: !f.actif }),
    });
    if (res.ok) {
      setFormateurs(prev => prev.map(x => x.id === f.id ? { ...x, actif: !f.actif } : x));
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3">
          <Link href="/admin" className="text-xs font-semibold text-slate-400 hover:text-slate-700">← Admin</Link>
          <span className="text-slate-300">/</span>
          <h1 className="text-sm font-bold text-slate-900">Formateurs indépendants</h1>
          <div className="flex-1" />
          <button onClick={openNew}
            className="rounded-xl bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800">
            + Ajouter un formateur
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-8 space-y-6">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Total formateurs", value: formateurs.length },
            { label: "Actifs", value: formateurs.filter(f => f.actif).length },
            { label: "Avec compte portail", value: formateurs.filter(f => f.user_id).length },
          ].map(s => (
            <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{s.label}</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Recherche */}
        <input
          type="text" placeholder="Rechercher un formateur…"
          value={search} onChange={e => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Liste */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white py-12 text-center">
              <p className="text-4xl">👨‍🏫</p>
              <p className="mt-3 text-sm font-semibold text-slate-600">Aucun formateur</p>
              <p className="text-xs text-slate-400 mt-1">Cliquez sur "+ Ajouter" pour créer le premier.</p>
            </div>
          )}

          {filtered.map(f => (
            <div key={f.id}
              className={`rounded-2xl border bg-white p-5 shadow-sm flex items-start gap-5 ${!f.actif ? "opacity-60 border-slate-100" : "border-slate-200"}`}>

              {/* Avatar initiales */}
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-base font-bold text-white ${f.actif ? "bg-red-700" : "bg-slate-400"}`}>
                {f.prenom[0]}{f.nom[0]}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-slate-900">{f.prenom} {f.nom}</p>
                  {f.actif
                    ? <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">Actif</span>
                    : <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">Inactif</span>
                  }
                  {f.user_id && (
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">Portail activé</span>
                  )}
                </div>
                <p className="text-sm text-slate-500 mt-0.5">{f.email}{f.phone ? ` · ${f.phone}` : ""}</p>
                {f.specialites.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {f.specialites.map(s => (
                      <span key={s} className="rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">{s}</span>
                    ))}
                  </div>
                )}
                {f.bio && <p className="mt-2 text-xs text-slate-400 line-clamp-2">{f.bio}</p>}
              </div>

              <div className="flex shrink-0 gap-2">
                <button onClick={() => openEdit(f)}
                  className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50">
                  Modifier
                </button>
                <button onClick={() => handleToggleActif(f)}
                  className={`rounded-xl border px-3 py-1.5 text-xs font-semibold ${f.actif ? "border-red-200 text-red-700 hover:bg-red-50" : "border-green-200 text-green-700 hover:bg-green-50"}`}>
                  {f.actif ? "Désactiver" : "Réactiver"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal formulaire */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden">
            <div className="bg-red-700 px-6 py-4 flex items-center justify-between">
              <h2 className="text-base font-bold text-white">
                {editing ? "Modifier le formateur" : "Nouveau formateur"}
              </h2>
              <button onClick={() => setShowForm(false)} className="text-white/70 hover:text-white text-xl">✕</button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Prénom *", key: "prenom", placeholder: "Marie" },
                  { label: "Nom *",    key: "nom",    placeholder: "Dupont" },
                ].map(({ label, key, placeholder }) => (
                  <div key={key}>
                    <label className="block text-xs font-medium text-slate-500 mb-1">{label}</label>
                    <input type="text" required value={(form as Record<string,string>)[key]}
                      onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
                      placeholder={placeholder}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Email *</label>
                <input type="email" required value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="marie.dupont@formation.fr"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Téléphone</label>
                <input type="tel" value={form.phone}
                  onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                  placeholder="06 xx xx xx xx"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-500 mb-2">Spécialités</label>
                <div className="flex flex-wrap gap-2">
                  {SPECIALITES_OPTIONS.map(s => (
                    <button key={s} type="button" onClick={() => toggleSpec(s)}
                      className={`rounded-lg px-2.5 py-1 text-xs font-medium border transition-colors ${
                        form.specialites.includes(s)
                          ? "bg-red-700 text-white border-red-700"
                          : "bg-white text-slate-600 border-slate-200 hover:border-red-300"
                      }`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Bio / présentation courte</label>
                <textarea rows={3} value={form.bio}
                  onChange={e => setForm(p => ({ ...p, bio: e.target.value }))}
                  placeholder="Ex : Formateur ATEX certifié, 10 ans d'expérience en environnements explosifs..."
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none" />
              </div>

              {!editing && (
                <label className="flex items-center gap-3 cursor-pointer rounded-xl border border-blue-200 bg-blue-50 px-4 py-3">
                  <input type="checkbox" checked={form.inviteAuth}
                    onChange={e => setForm(p => ({ ...p, inviteAuth: e.target.checked }))}
                    className="rounded border-blue-300 text-blue-600" />
                  <div>
                    <p className="text-sm font-semibold text-blue-800">Activer le portail formateur</p>
                    <p className="text-xs text-blue-600">Envoie une invitation email pour créer son compte et accéder à son tableau de bord</p>
                  </div>
                </label>
              )}

              {error && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
              )}

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)}
                  className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                  Annuler
                </button>
                <button type="submit" disabled={loading}
                  className="flex-1 rounded-xl bg-red-700 py-2.5 text-sm font-bold text-white hover:bg-red-800 disabled:opacity-50">
                  {loading ? "Enregistrement…" : editing ? "Enregistrer les modifications" : "Créer le formateur"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
