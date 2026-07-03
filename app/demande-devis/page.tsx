"use client";

import { useState } from "react";
import Link from "next/link";

type Formation = {
  id: string;
  label: string;
  category: string;
  priceHT: number | null;
  priceNote: string;
  perPerson: boolean;
};

const FORMATIONS: Formation[] = [
  // HABILITATION ÉLECTRIQUE
  { id: "h0b0", label: "H0B0 / H0V", category: "Habilitation électrique", priceHT: 129, priceNote: "E-learning", perPerson: true },
  { id: "bsbe", label: "BS / BE Manœuvre", category: "Habilitation électrique", priceHT: 199, priceNote: "E-learning + classe virtuelle", perPerson: true },
  { id: "b1b2brbc", label: "B1 / B2 / BR / BC", category: "Habilitation électrique", priceHT: null, priceNote: "Sur devis selon parcours", perPerson: false },
  { id: "recyclage-h0b0", label: "Recyclage H0B0", category: "Habilitation électrique", priceHT: null, priceNote: "Sur devis", perPerson: false },
  // ATEX
  { id: "atex-n1", label: "ATEX Niveau 1", category: "ATEX", priceHT: 129, priceNote: "E-learning 3h", perPerson: true },
  { id: "atex-n2", label: "ATEX Niveau 2", category: "ATEX", priceHT: 490, priceNote: "À partir de — E-learning + entretien", perPerson: true },
  { id: "atex-n3", label: "ATEX Niveau 3", category: "ATEX", priceHT: 790, priceNote: "À partir de — E-learning + classe virtuelle", perPerson: true },
  // SSIAP / SÉCURITÉ INCENDIE
  { id: "ssiap1", label: "SSIAP1 initial", category: "Sécurité incendie", priceHT: 1490, priceNote: "À partir de — 70h", perPerson: false },
  { id: "recyclage-ssiap1", label: "Recyclage SSIAP1", category: "Sécurité incendie", priceHT: 250, priceNote: "À partir de — 14h", perPerson: true },
  { id: "extincteurs", label: "Manipulation extincteurs", category: "Sécurité incendie", priceHT: 149, priceNote: "0,5 jour", perPerson: true },
  { id: "guide-file", label: "Guide-file / Serre-file", category: "Sécurité incendie", priceHT: 150, priceNote: "0,5 jour", perPerson: true },
  { id: "epi", label: "Équipier de Première Intervention (EPI)", category: "Sécurité incendie", priceHT: 220, priceNote: "1 jour", perPerson: true },
  // SSI
  { id: "ssi-1j", label: "Exploitation SSI (1 jour)", category: "SSI / Sprinkler", priceHT: 350, priceNote: "Inter-entreprises", perPerson: true },
  { id: "ssi-2j", label: "SSI avancé (2 jours)", category: "SSI / Sprinkler", priceHT: 690, priceNote: "Inter-entreprises", perPerson: true },
  // SPRINKLER
  { id: "sprinkler-1j", label: "Exploitation sprinkler (1 jour)", category: "SSI / Sprinkler", priceHT: 490, priceNote: "Inter-entreprises", perPerson: true },
  { id: "sprinkler-2j", label: "Sprinkler technique + visite (2 jours)", category: "SSI / Sprinkler", priceHT: 990, priceNote: "Inter-entreprises", perPerson: true },
  // SST
  { id: "sst", label: "SST initial", category: "SST", priceHT: 240, priceNote: "2 jours — inter-entreprises", perPerson: true },
  { id: "mac-sst", label: "MAC SST (recyclage)", category: "SST", priceHT: 130, priceNote: "1 jour — inter-entreprises", perPerson: true },
];

const CATEGORIES = Array.from(new Set(FORMATIONS.map((f) => f.category)));

export default function DemandeDevisPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [participants, setParticipants] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const selectedFormations = FORMATIONS.filter((f) => selected.has(f.id));
  const fixedItems = selectedFormations.filter((f) => f.priceHT !== null);
  const quoteItems = selectedFormations.filter((f) => f.priceHT === null);
  const totalHT = fixedItems.reduce((sum, f) => {
    return sum + (f.priceHT! * (f.perPerson ? participants : 1));
  }, 0);
  const hasQuote = quoteItems.length > 0;

  function toggleFormation(id: string) {
    const next = new Set(selected);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelected(next);
  }

  function resetForm() {
    setSelected(new Set());
    setParticipants(1);
    setCompanyName("");
    setContactName("");
    setEmail("");
    setPhone("");
    setNotes("");
    setErrorMsg("");
    setSent(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || selected.size === 0) {
      setErrorMsg("Veuillez renseigner votre email et sélectionner au moins une formation.");
      return;
    }
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/devis/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName,
          contactName,
          email,
          phone,
          participants,
          formations: FORMATIONS.filter((f) => selected.has(f.id)).map((f) => ({
            label: f.label,
            priceHT: f.priceHT,
            priceNote: f.priceNote,
            perPerson: f.perPerson,
            qty: f.perPerson ? participants : 1,
          })),
          totalHT,
          hasQuote,
          notes,
        }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setErrorMsg("Une erreur est survenue. Réessayez ou appelez le 01 89 62 94 92.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <>
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Demande de devis</span>
            </nav>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-semibold text-amber-400 ring-1 ring-amber-500/20 mb-6">
              Devis gratuit · Réponse sous 24h
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Demande de devis
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Sélectionnez vos formations, renseignez vos informations et recevez votre devis personnalisé sous 24h ouvrées.
            </p>
          </div>
        </section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
            <div className="mb-4 text-4xl">✓</div>
            <h2 className="text-xl font-bold text-green-800 mb-2">Votre demande a bien été envoyée !</h2>
            <p className="text-green-700 text-sm mb-6">
              Nous vous répondrons sous 24h ouvrées à l&apos;adresse <strong>{email}</strong>
            </p>
            <button
              onClick={resetForm}
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Nouvelle demande
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Demande de devis</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-semibold text-amber-400 ring-1 ring-amber-500/20 mb-6">
            Devis gratuit · Réponse sous 24h
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Demande de devis
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Sélectionnez vos formations, renseignez vos informations et recevez votre devis personnalisé sous 24h ouvrées.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit}>
          <div className="lg:grid lg:grid-cols-3 lg:gap-10">
            {/* Colonne gauche — formulaire */}
            <div className="lg:col-span-2 space-y-10">

              {/* Section 1 — Vos informations */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-6">Vos informations</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Société
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Nom de la société"
                      className="rounded-xl border border-slate-200 px-4 py-2.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Nom du contact
                    </label>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Votre nom"
                      className="rounded-xl border border-slate-200 px-4 py-2.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.fr"
                      required
                      className="rounded-xl border border-slate-200 px-4 py-2.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01 89 62 94 92"
                      className="rounded-xl border border-slate-200 px-4 py-2.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Nombre de participants
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={500}
                      value={participants}
                      onChange={(e) => setParticipants(Math.max(1, parseInt(e.target.value) || 1))}
                      className="rounded-xl border border-slate-200 px-4 py-2.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 sm:w-40"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2 — Formations souhaitées */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-6">Formations souhaitées</h2>
                <div className="space-y-8">
                  {CATEGORIES.map((category) => (
                    <div key={category}>
                      <p className="text-sm font-semibold text-slate-700 mb-2">{category}</p>
                      <div className="space-y-2">
                        {FORMATIONS.filter((f) => f.category === category).map((formation) => (
                          <label
                            key={formation.id}
                            className="flex items-start gap-3 cursor-pointer rounded-xl border border-slate-100 px-4 py-3 hover:bg-slate-50 transition"
                          >
                            <input
                              type="checkbox"
                              checked={selected.has(formation.id)}
                              onChange={() => toggleFormation(formation.id)}
                              className="mt-0.5 h-4 w-4 accent-slate-900 shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <span className="text-sm font-medium text-slate-800">{formation.label}</span>
                              <span className="ml-2 text-xs text-slate-400">{formation.priceNote}</span>
                            </div>
                            <span className="text-sm font-semibold text-slate-700 shrink-0">
                              {formation.priceHT !== null
                                ? `${formation.priceHT} € HT/pers.`
                                : "Sur devis"}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Informations complémentaires</h2>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Notes / contexte
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Dates souhaitées, contraintes particulières, lieu de formation..."
                  rows={4}
                  className="rounded-xl border border-slate-200 px-4 py-2.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            {/* Colonne droite — récapitulatif sticky */}
            <div className="mt-10 lg:mt-0 lg:col-span-1">
              <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4">Récapitulatif</h3>

                {selected.size === 0 && (
                  <p className="text-sm text-slate-400">Sélectionnez des formations pour voir le récapitulatif.</p>
                )}

                {selected.size > 0 && (
                  <div className="space-y-3 mb-4">
                    {selectedFormations.map((f) => {
                      const lineTotal =
                        f.priceHT !== null
                          ? f.priceHT * (f.perPerson ? participants : 1)
                          : null;
                      return (
                        <div key={f.id} className="flex justify-between gap-2 text-sm">
                          <span className="text-slate-600 leading-snug flex-1">{f.label}</span>
                          <span className="font-medium text-slate-800 shrink-0">
                            {lineTotal !== null ? `${lineTotal} €` : "Sur devis"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {selected.size > 0 && (
                  <div className="border-t border-slate-100 pt-4 mb-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-slate-500">Total HT estimé</span>
                      <span className="text-2xl font-bold text-slate-900">
                        {totalHT > 0 ? `${totalHT} €` : "—"}
                      </span>
                    </div>
                    {hasQuote && (
                      <p className="mt-1 text-xs font-medium text-amber-600">
                        + prestations sur devis
                      </p>
                    )}
                    <p className="mt-1 text-xs text-slate-400">
                      Pour {participants} participant{participants > 1 ? "s" : ""}
                    </p>
                  </div>
                )}

                {errorMsg && (
                  <p className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading || selected.size === 0}
                  className="bg-slate-900 text-white rounded-xl px-6 py-3 w-full font-semibold hover:bg-slate-700 disabled:opacity-50 transition text-sm"
                >
                  {loading ? "Envoi en cours..." : "Envoyer ma demande de devis"}
                </button>

                <p className="mt-3 text-center text-xs text-slate-400">
                  Réponse sous 24h ouvrées
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
