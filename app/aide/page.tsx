"use client";

import { useState } from "react";
import Link from "next/link";

const ISSUES = [
  {
    key: "password_reset",
    icon: "🔒",
    label: "Mot de passe oublié",
    description: "Réinitialisez votre mot de passe automatiquement",
    auto: true,
  },
  {
    key: "no_access_course",
    icon: "📚",
    label: "Pas d'accès à mon cours",
    description: "Vous avez payé mais ne pouvez pas accéder au module e-learning",
    auto: false,
  },
  {
    key: "pdf_not_generated",
    icon: "📄",
    label: "Attestation PDF non générée",
    description: "Votre attestation de réussite ne se génère pas",
    auto: false,
  },
  {
    key: "no_account_access",
    icon: "👤",
    label: "Pas d'accès à mon compte",
    description: "Vous ne pouvez pas vous connecter à votre espace",
    auto: false,
  },
  {
    key: "broken_link",
    icon: "🔗",
    label: "Lien qui ne fonctionne pas",
    description: "Un lien reçu par email ou sur le site est cassé",
    auto: false,
  },
  {
    key: "other",
    icon: "❓",
    label: "Autre problème",
    description: "Décrivez votre problème, nous vous répondrons rapidement",
    auto: false,
  },
];

type Step = "select" | "password" | "form" | "done";

export default function AidePage() {
  const [step, setStep] = useState<Step>("select");
  const [selected, setSelected] = useState<(typeof ISSUES)[0] | null>(null);
  const [email, setEmail]     = useState("");
  const [name, setName]       = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  function selectIssue(issue: (typeof ISSUES)[0]) {
    setSelected(issue);
    setError(null);
    if (issue.auto) setStep("password");
    else setStep("form");
  }

  async function handlePasswordReset(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await fetch("/api/support/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStep("done");
    } catch {
      setError("Erreur réseau. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  async function handleTicket(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/support/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: email,
          userName:  name,
          issueType: selected?.key,
          message,
        }),
      });
      const data = await res.json() as { error?: string };
      if (data.error) { setError(data.error); return; }
      setStep("done");
    } catch {
      setError("Erreur réseau. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <nav className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Aide & Support</span>
          </nav>
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-200">
            Service client
          </p>
          <h1 className="mt-4 text-4xl font-bold">Comment pouvons-nous<br />vous aider ?</h1>
          <p className="mt-4 text-slate-400">
            Sélectionnez votre problème ci-dessous. Certaines demandes sont traitées automatiquement,
            les autres sont transmises à notre équipe sous 24h ouvrées.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">

        {/* ── Étape 1 : Sélection du problème ── */}
        {step === "select" && (
          <>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Quel est votre problème ?</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {ISSUES.map((issue) => (
                <button
                  key={issue.key}
                  type="button"
                  onClick={() => selectIssue(issue)}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-red-300 hover:shadow-md"
                >
                  <span className="text-2xl">{issue.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-900 group-hover:text-red-700">{issue.label}</p>
                    <p className="mt-1 text-sm text-slate-500">{issue.description}</p>
                    {issue.auto && (
                      <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                        Automatique ⚡
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-sm text-slate-600">Besoin d'une réponse immédiate ?</p>
              <p className="mt-2 text-lg font-bold text-slate-900">01 89 62 94 92</p>
              <p className="text-sm text-slate-500">Lun–Ven · 9h–18h</p>
              <a
                href="mailto:contact@prevensia-formation.fr"
                className="mt-3 inline-block text-sm text-red-700 hover:underline"
              >
                contact@prevensia-formation.fr
              </a>
            </div>
          </>
        )}

        {/* ── Étape 2a : Réinitialisation mot de passe ── */}
        {step === "password" && (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <button
              type="button"
              onClick={() => setStep("select")}
              className="mb-6 text-sm text-slate-500 hover:text-slate-800"
            >
              ← Retour
            </button>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-3xl">🔒</span>
              <h2 className="text-xl font-bold text-slate-900">Réinitialiser mon mot de passe</h2>
            </div>
            <p className="mb-6 text-sm text-slate-600">
              Entrez l'adresse email associée à votre compte PREVENSIA. Nous vous enverrons un lien
              de réinitialisation valable 1 heure.
            </p>
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Adresse email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.fr"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
                />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
              >
                {loading ? "Envoi en cours…" : "Envoyer le lien de réinitialisation"}
              </button>
            </form>
          </div>
        )}

        {/* ── Étape 2b : Formulaire ticket ── */}
        {step === "form" && selected && (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <button
              type="button"
              onClick={() => setStep("select")}
              className="mb-6 text-sm text-slate-500 hover:text-slate-800"
            >
              ← Retour
            </button>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-3xl">{selected.icon}</span>
              <h2 className="text-xl font-bold text-slate-900">{selected.label}</h2>
            </div>
            <form onSubmit={handleTicket} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Prénom Nom"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.fr"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Décrivez votre problème
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex : J'ai payé ma formation le 10/05 mais je n'ai pas reçu mes identifiants..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 resize-none"
                />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
              >
                {loading ? "Envoi en cours…" : "Envoyer ma demande"}
              </button>
              <p className="text-center text-xs text-slate-400">
                Vous recevrez un accusé de réception par email. Réponse sous 24h ouvrées.
              </p>
            </form>
          </div>
        )}

        {/* ── Étape 3 : Confirmation ── */}
        {step === "done" && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
              ✅
            </div>
            {selected?.key === "password_reset" ? (
              <>
                <h2 className="text-xl font-bold text-emerald-800">Email de réinitialisation envoyé !</h2>
                <p className="mt-3 text-sm text-emerald-700">
                  Si un compte existe avec cette adresse, vous recevrez un email dans quelques minutes.
                  Vérifiez également vos spams.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-emerald-800">Demande envoyée !</h2>
                <p className="mt-3 text-sm text-emerald-700">
                  Votre demande a bien été reçue. Un accusé de réception vous a été envoyé par email.
                  Notre équipe vous répondra sous <strong>24h ouvrées</strong>.
                </p>
              </>
            )}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="rounded-xl border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Retour à l'accueil
              </Link>
              <button
                type="button"
                onClick={() => { setStep("select"); setSelected(null); setEmail(""); setName(""); setMessage(""); }}
                className="rounded-xl bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Nouveau problème
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
