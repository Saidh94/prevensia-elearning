"use client";

import { useState } from "react";

const FORMATIONS = [
  { label: "Habilitation électrique H0B0 / H0V", slug: "h0b0" },
  { label: "BS-BE (BR, B1, B2, BC…)", slug: "bsbe" },
  { label: "Exploitation SSI – fondamentaux", slug: "ssi-exploitation" },
];

type Result = {
  ok: boolean;
  userId?: string;
  enrollmentId?: string;
  accountState?: "created" | "existing";
  enrollmentState?: "created" | "existing";
  formation?: { title: string; slug: string };
  temporaryPassword?: string | null;
  error?: string;
};

export default function ProvisionForm() {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    formationSlug: "h0b0",
    durationDays: 30,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/admin/provision-direct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as Result;
      setResult(data);
    } catch {
      setResult({ ok: false, error: "Erreur réseau" });
    } finally {
      setLoading(false);
    }
  }

  function field(
    label: string,
    key: keyof typeof form,
    type: string = "text",
    required = false
  ) {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700">
          {label}{required && <span className="ml-1 text-red-500">*</span>}
        </label>
        <input
          type={type}
          required={required}
          value={form[key] as string}
          onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <form onSubmit={(e) => { void handleSubmit(e); }} className="flex flex-col gap-4">
        {field("Email", "email", "email", true)}
        <div className="grid grid-cols-2 gap-3">
          {field("Prénom", "firstName", "text", true)}
          {field("Nom", "lastName", "text", true)}
        </div>
        {field("Téléphone", "phone", "tel")}
        {field("Entreprise / Société", "company")}

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-700">
            Formation <span className="ml-1 text-red-500">*</span>
          </label>
          <select
            value={form.formationSlug}
            onChange={(e) => setForm((f) => ({ ...f, formationSlug: e.target.value }))}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {FORMATIONS.map((f) => (
              <option key={f.slug} value={f.slug}>{f.label}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-700">Durée d&apos;accès (jours)</label>
          <input
            type="number"
            min={7}
            max={365}
            value={form.durationDays}
            onChange={(e) => setForm((f) => ({ ...f, durationDays: Number(e.target.value) }))}
            className="w-32 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-50"
        >
          {loading ? "Provisioning en cours…" : "Créer le compte et activer l'accès"}
        </button>
      </form>

      {result && (
        <div
          className={`mt-6 rounded-xl border p-5 text-sm ${
            result.ok
              ? "border-green-200 bg-green-50 text-green-900"
              : "border-red-200 bg-red-50 text-red-900"
          }`}
        >
          {result.ok ? (
            <div className="flex flex-col gap-2">
              <p className="font-bold text-green-800">✅ Provisioning réussi</p>
              <p>
                <strong>Compte :</strong>{" "}
                {result.accountState === "created" ? "Nouveau compte créé" : "Compte existant réutilisé"}
              </p>
              <p>
                <strong>Inscription :</strong>{" "}
                {result.enrollmentState === "created" ? "Nouvelle inscription créée" : "Inscription existante retrouvée"}
              </p>
              <p><strong>Formation :</strong> {result.formation?.title}</p>
              {result.temporaryPassword && (
                <div className="mt-2 rounded-lg border border-green-300 bg-green-100 p-3">
                  <p className="font-semibold">Mot de passe temporaire (à transmettre si besoin) :</p>
                  <p className="mt-1 font-mono text-base">{result.temporaryPassword}</p>
                  <p className="mt-1 text-xs text-green-700">
                    L&apos;apprenant devra le changer à la première connexion. L&apos;email de bienvenue a été envoyé automatiquement.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <p><strong>Erreur :</strong> {result.error}</p>
          )}
        </div>
      )}
    </div>
  );
}
