"use client";

import { useState, useEffect } from "react";

type Formation = {
  id: string;
  label: string;
  category: string;
  priceHT: number | null;
  priceNote: string;
  perPerson: boolean;
};

const FORMATIONS: Formation[] = [
  // Habilitation électrique
  { id: "h0b0",          label: "H0B0 / H0V",                         category: "Habilitation électrique", priceHT: 190,  priceNote: "E-learning + entretien formateur",          perPerson: true  },
  { id: "bsbe",          label: "BS / BE Manœuvre",                    category: "Habilitation électrique", priceHT: 350,  priceNote: "E-learning + classe virtuelle",             perPerson: true  },
  { id: "b1b2brbc",      label: "B1 / B2 / BR / BC",                   category: "Habilitation électrique", priceHT: null, priceNote: "Sur devis selon parcours",                  perPerson: false },
  { id: "recyclage-h0b0",label: "Recyclage H0B0",                      category: "Habilitation électrique", priceHT: null, priceNote: "Sur devis",                                 perPerson: false },
  // ATEX
  { id: "atex-n0",       label: "ATEX Niveau 0 — Sensibilisation",     category: "ATEX",                    priceHT: 129,  priceNote: "E-learning 3h",                             perPerson: true  },
  { id: "atex-n1",       label: "ATEX Niveau 1 — Intervenant",         category: "ATEX",                    priceHT: 490,  priceNote: "E-learning + classe virtuelle + entretien", perPerson: true  },
  { id: "atex-n2",       label: "ATEX Niveau 2 — Référent / Encadrant",category: "ATEX",                    priceHT: null, priceNote: "À partir de 790 € — sur devis (présentiel)", perPerson: false },
  // Sécurité incendie
  { id: "ssiap1",        label: "SSIAP1 initial",                      category: "Sécurité incendie",       priceHT: 1090, priceNote: "À partir de — 70h inter",                   perPerson: true  },
  { id: "recyclage-ssiap1",label:"Recyclage SSIAP1",                   category: "Sécurité incendie",       priceHT: 390,  priceNote: "À partir de — 14h inter",                   perPerson: true  },
  { id: "extincteurs",   label: "Manipulation extincteurs",            category: "Sécurité incendie",       priceHT: 149,  priceNote: "0,5 jour",                                  perPerson: true  },
  { id: "guide-file",    label: "Guide-file / Serre-file",             category: "Sécurité incendie",       priceHT: 150,  priceNote: "0,5 jour",                                  perPerson: true  },
  { id: "epi",           label: "Équipier de Première Intervention",   category: "Sécurité incendie",       priceHT: 220,  priceNote: "1 jour",                                    perPerson: true  },
  // SSI / Sprinkler
  { id: "ssi-1j",        label: "Exploitation SSI (1 jour)",           category: "SSI / Sprinkler",         priceHT: 350,  priceNote: "Inter-entreprises",                         perPerson: true  },
  { id: "ssi-2j",        label: "SSI avancé (2 jours)",                category: "SSI / Sprinkler",         priceHT: 690,  priceNote: "Inter-entreprises",                         perPerson: true  },
  { id: "sprinkler-1j",  label: "Exploitation sprinkler (1 jour)",     category: "SSI / Sprinkler",         priceHT: 590,  priceNote: "Inter-entreprises",                         perPerson: true  },
  { id: "sprinkler-2j",  label: "Sprinkler technique + visite (2j)",   category: "SSI / Sprinkler",         priceHT: 990,  priceNote: "Inter-entreprises",                         perPerson: true  },
  // SST
  { id: "sst",           label: "SST initial",                         category: "SST",                     priceHT: 240,  priceNote: "2 jours — inter-entreprises",               perPerson: true  },
  { id: "mac-sst",       label: "MAC SST (recyclage)",                 category: "SST",                     priceHT: 130,  priceNote: "1 jour — inter-entreprises",                perPerson: true  },
];

const CATEGORIES = Array.from(new Set(FORMATIONS.map((f) => f.category)));

/** Tente de pré-sélectionner des formations à partir d'une chaîne libre (formation_interest). */
function matchIds(interest: string): Set<string> {
  const lower = interest.toLowerCase();
  const matched = new Set<string>();
  for (const f of FORMATIONS) {
    if (
      lower.includes(f.label.toLowerCase()) ||
      lower.includes(f.id.toLowerCase()) ||
      (f.id === "atex-n1" && (lower.includes("atex") && (lower.includes("n1") || lower.includes("niveau 1") || lower.includes("intervenant")))) ||
      (f.id === "atex-n0" && lower.includes("sensibilisation")) ||
      (f.id === "h0b0"    && (lower.includes("h0b0") || lower.includes("h0v"))) ||
      (f.id === "ssiap1"  && lower.includes("ssiap1") && !lower.includes("recyclage"))
    ) {
      matched.add(f.id);
    }
  }
  return matched;
}

export type DevisInitialData = {
  contactName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  participants?: number;
  formationInterest?: string;
  notes?: string;
};

type Props = {
  initialData?: DevisInitialData;
  /** Quand true : rendu en pleine page sans overlay (page /admin/devis/nouveau) */
  fullPage?: boolean;
  onClose?: () => void;
};

export default function DevisPanel({ initialData, fullPage = false, onClose }: Props) {
  const [contactName,  setContactName]  = useState(initialData?.contactName  ?? "");
  const [email,        setEmail]        = useState(initialData?.email        ?? "");
  const [phone,        setPhone]        = useState(initialData?.phone        ?? "");
  const [companyName,  setCompanyName]  = useState(initialData?.companyName  ?? "");
  const [participants, setParticipants] = useState(initialData?.participants ?? 1);
  const [notes,        setNotes]        = useState(initialData?.notes        ?? "");
  const [selected, setSelected] = useState<Set<string>>(() =>
    initialData?.formationInterest ? matchIds(initialData.formationInterest) : new Set()
  );
  const [step,      setStep]    = useState<"form" | "preview" | "sent">("form");
  const [loading,   setLoading] = useState(false);
  const [error,     setError]   = useState("");
  const [tvaExempt, setTvaExempt] = useState<boolean | null>(null);
  const [tvaRate,   setTvaRate]   = useState<number>(20);

  useEffect(() => {
    fetch("/api/admin/tva-config")
      .then((r) => r.json())
      .then((d) => { setTvaExempt(d.tvaExempt); setTvaRate(d.tvaRate ?? 20); })
      .catch(() => {}); // garde 20% par défaut si erreur
  }, []);

  const selectedFormations = FORMATIONS.filter((f) => selected.has(f.id));
  const totalHT = selectedFormations.reduce(
    (sum, f) => sum + (f.priceHT !== null ? f.priceHT * (f.perPerson ? participants : 1) : 0),
    0
  );
  const hasQuote = selectedFormations.some((f) => f.priceHT === null);

  function toggle(id: string) {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id); else next.add(id);
    setSelected(next);
  }

  function handlePreview() {
    if (!email || selectedFormations.length === 0) {
      setError("Email et au moins une formation sont requis.");
      return;
    }
    setError("");
    setStep("preview");
  }

  async function handleSend() {
    setLoading(true);
    setError("");
    try {
      const formations = selectedFormations.map((f) => ({
        label:     f.label,
        priceHT:   f.priceHT,
        priceNote: f.priceNote,
        perPerson: f.perPerson,
        qty:       f.perPerson ? participants : 1,
      }));
      const res = await fetch("/api/devis/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyName, contactName, email, phone, participants, formations, totalHT, tvaRate, hasQuote, notes }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Erreur envoi");
      setStep("sent");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  }

  /* ── Écran d'aperçu avant envoi ── */
  if (step === "preview") {
    const previewInner = (
      <div className={fullPage ? "mx-auto max-w-2xl px-6 py-8 space-y-6" : "flex-1 overflow-y-auto px-6 py-6 space-y-6"}>

        {/* En-tête devis */}
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          {/* Bandeau rouge */}
          <div className="bg-red-700 px-6 py-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-200">PREVENSIA FORMATION</p>
              <p className="text-lg font-extrabold text-white">DEVIS — Aperçu avant envoi</p>
            </div>
            <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-900">Brouillon</span>
          </div>

          {/* Infos émetteur + client */}
          <div className="grid gap-4 p-6 sm:grid-cols-2">
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">De</p>
              <p className="text-sm font-bold text-slate-900">PREVENSIA FORMATION</p>
              <p className="text-xs text-slate-500">33, av. Philippe Auguste — 75011 Paris</p>
              <p className="text-xs text-slate-500">SIRET : 107 290 579 00013</p>
              <p className="text-xs text-slate-500">contact@prevensia-formation.fr</p>
            </div>
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">À</p>
              <p className="text-sm font-bold text-slate-900">{contactName || <span className="text-slate-400 font-normal italic">Nom non renseigné</span>}</p>
              {companyName && <p className="text-xs text-slate-600">{companyName}</p>}
              <p className="text-xs text-slate-500">{email}</p>
              {phone && <p className="text-xs text-slate-500">{phone}</p>}
              <p className="text-xs text-slate-500 mt-1">{participants} participant{participants > 1 ? "s" : ""}</p>
            </div>
          </div>
        </div>

        {/* Tableau formations */}
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="border-b border-slate-100 bg-slate-800 px-6 py-3">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Formations</p>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="py-2.5 px-4 text-left text-xs font-semibold text-slate-500">Désignation</th>
                <th className="py-2.5 px-4 text-right text-xs font-semibold text-slate-500">Qté</th>
                <th className="py-2.5 px-4 text-right text-xs font-semibold text-slate-500">PU HT</th>
                <th className="py-2.5 px-4 text-right text-xs font-semibold text-slate-500">Total HT</th>
              </tr>
            </thead>
            <tbody>
              {selectedFormations.map((f) => {
                const qty = f.perPerson ? participants : 1;
                const lineTotal = f.priceHT !== null ? `${f.priceHT * qty} €` : "Sur devis";
                const puHT = f.priceHT !== null ? `${f.priceHT} €` : "Sur devis";
                return (
                  <tr key={f.id} className="border-b border-slate-50">
                    <td className="py-3 px-4 text-slate-800 font-medium">{f.label}</td>
                    <td className="py-3 px-4 text-right text-slate-600">{qty}</td>
                    <td className="py-3 px-4 text-right text-slate-600">{puHT}</td>
                    <td className="py-3 px-4 text-right font-semibold text-slate-900">{lineTotal}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Totaux */}
          {(() => {
            const montantTVA = tvaRate > 0 ? Math.round(totalHT * tvaRate) / 100 : 0;
            const totalTTC   = totalHT + montantTVA;
            return (
              <div className="border-t border-slate-100 px-4 py-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Total HT</span>
                  <span className="font-semibold text-slate-900">
                    {totalHT > 0 ? `${totalHT.toFixed(2)} €` : "—"}
                    {hasQuote && <span className="ml-1.5 text-xs text-amber-600">+ prestations sur devis</span>}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">TVA {tvaRate > 0 ? `${tvaRate} %` : ""}</span>
                  {tvaRate === 0
                    ? <span className="text-slate-400 italic text-xs">Non applicable — art. 261-4-4 CGI</span>
                    : <span className="font-semibold text-slate-900">{montantTVA.toFixed(2)} €</span>
                  }
                </div>
                <div className="flex items-center justify-between rounded-xl bg-red-700 px-4 py-3">
                  <span className="text-sm font-bold text-white">TOTAL TTC</span>
                  <span className="text-sm font-bold text-white">
                    {totalHT > 0 ? `${totalTTC.toFixed(2)} €` : "Sur devis"}
                    {hasQuote && <span className="ml-1.5 text-xs font-normal opacity-80">+ prestations sur devis</span>}
                  </span>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Notes */}
        {notes.trim() && (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4">
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Notes</p>
            <p className="text-sm text-slate-700 whitespace-pre-wrap">{notes}</p>
          </div>
        )}

        {/* Mention légale */}
        <p className="text-center text-xs text-slate-400 italic">
          Ce devis sera envoyé à <strong className="font-semibold not-italic text-slate-600">{email}</strong> et un lead sera créé dans le CRM.
        </p>

        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
        )}
      </div>
    );

    const previewActions = (
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setStep("form")}
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
        >
          ← Modifier
        </button>
        <button
          type="button"
          onClick={handleSend}
          disabled={loading}
          className="flex-1 rounded-xl bg-red-700 px-6 py-3 text-sm font-semibold text-white hover:bg-red-800 disabled:opacity-50"
        >
          {loading ? "Envoi en cours…" : "✉ Confirmer l'envoi"}
        </button>
      </div>
    );

    if (fullPage) {
      return (
        <>
          {previewInner}
          <div className="mx-auto max-w-2xl px-6 pb-8">{previewActions}</div>
        </>
      );
    }

    return (
      <div className="fixed inset-0 z-50 flex">
        <button className="flex-1 bg-black/50" onClick={onClose} aria-label="Fermer" />
        <div className="flex w-full max-w-2xl flex-col bg-white shadow-2xl">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Admin PREVENSIA</p>
              <h2 className="text-lg font-bold text-slate-900">Aperçu du devis</h2>
            </div>
            <button onClick={onClose} className="rounded-xl border border-slate-200 p-2 text-slate-500 hover:bg-slate-50">✕</button>
          </div>
          {previewInner}
          <div className="sticky bottom-0 border-t border-slate-200 bg-white px-6 py-4">
            {previewActions}
          </div>
        </div>
      </div>
    );
  }

  /* ── Écran de confirmation ── */
  if (step === "sent") {
    const inner = (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl">✅</div>
        <h2 className="mt-4 text-2xl font-bold text-slate-900">Devis envoyé !</h2>
        <p className="mt-2 text-sm text-slate-500">
          Le devis a été envoyé à <strong>{email}</strong> et un lead a été créé (ou mis à jour) dans le CRM.
        </p>
        {onClose && (
          <button
            onClick={onClose}
            className="mt-8 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Fermer
          </button>
        )}
      </div>
    );


    if (fullPage) return <div className="mx-auto max-w-2xl px-6 py-12">{inner}</div>;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">{inner}</div>
      </div>
    );
  }

  /* ── Formulaire ── */
  const form = (
    <div className={fullPage ? "mx-auto max-w-2xl px-6 py-8 space-y-8" : "flex-1 overflow-y-auto px-6 py-6 space-y-8"}>

      {/* Informations client */}
      <section>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">Informations client</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { label: "Nom du contact *",  value: contactName,  set: setContactName,  type: "text"  },
            { label: "Email *",           value: email,        set: setEmail,        type: "email" },
            { label: "Téléphone",         value: phone,        set: setPhone,        type: "tel"   },
            { label: "Société",           value: companyName,  set: setCompanyName,  type: "text"  },
          ].map(({ label, value, set, type }) => (
            <div key={label}>
              <label className="mb-1 block text-xs font-semibold text-slate-600">{label}</label>
              <input
                type={type}
                value={value}
                onChange={(e) => set(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-slate-900 focus:bg-white"
              />
            </div>
          ))}
          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs font-semibold text-slate-600">Nombre de participants</label>
            <input
              type="number" min={1} value={participants}
              onChange={(e) => setParticipants(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-28 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-slate-900 focus:bg-white"
            />
          </div>
        </div>
      </section>

      {/* Catalogue formations */}
      <section>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">Formations</p>
        {CATEGORIES.map((cat) => (
          <div key={cat} className="mb-5">
            <p className="mb-2 text-xs font-bold text-slate-500 uppercase tracking-wide">{cat}</p>
            <div className="space-y-1.5">
              {FORMATIONS.filter((f) => f.category === cat).map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => toggle(f.id)}
                  className={`flex w-full items-center justify-between rounded-xl border px-4 py-2.5 text-left text-sm transition ${
                    selected.has(f.id)
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-400"
                  }`}
                >
                  <span className="font-medium">{f.label}</span>
                  <span className={`text-xs ${selected.has(f.id) ? "text-slate-300" : "text-slate-400"}`}>
                    {f.priceHT !== null ? `${f.priceHT} € HT / pers.` : "Sur devis"}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Notes */}
      <section>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">Notes / Commentaires</p>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Ex : ATEX N1 pour 3 collaborateurs — env. mécanique — disponibles à partir de septembre"
          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-slate-900 focus:bg-white"
        />
      </section>

      {/* Récapitulatif */}
      {selectedFormations.length > 0 && (
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">Récapitulatif</p>
          <div className="space-y-2">
            {selectedFormations.map((f) => {
              const lineTotal =
                f.priceHT !== null
                  ? `${f.priceHT * (f.perPerson ? participants : 1)} € HT`
                  : "Sur devis";
              return (
                <div key={f.id} className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">
                    {f.label}
                    {f.perPerson && participants > 1 && (
                      <span className="ml-1 text-xs text-slate-400">× {participants}</span>
                    )}
                  </span>
                  <span className="font-semibold text-slate-900">{lineTotal}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3">
            <span className="text-sm font-bold text-slate-900">Total HT estimé</span>
            <span className="text-sm font-bold text-slate-900">
              {totalHT > 0 ? `${totalHT} €` : "—"}
              {hasQuote && <span className="ml-1.5 text-xs font-normal text-amber-600">+ prestations sur devis</span>}
            </span>
          </div>
        </section>
      )}

      {error && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      {/* Bouton submit (pleine page uniquement — panel a son propre footer) */}
      {fullPage && (
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={handlePreview}
            disabled={selectedFormations.length === 0 || !email}
            className="flex-1 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
          >
            Aperçu avant envoi →
          </button>
        </div>
      )}
    </div>
  );

  /* ── Mode pleine page ── */
  if (fullPage) return form;

  /* ── Mode drawer (overlay) ── */
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Clic en dehors = fermer */}
      <button className="flex-1 bg-black/50" onClick={onClose} aria-label="Fermer" />

      {/* Panneau latéral */}
      <div className="flex w-full max-w-2xl flex-col bg-white shadow-2xl">
        {/* En-tête */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Admin PREVENSIA</p>
            <h2 className="text-lg font-bold text-slate-900">Générer un devis</h2>
          </div>
          <button onClick={onClose} className="rounded-xl border border-slate-200 p-2 text-slate-500 hover:bg-slate-50">
            ✕
          </button>
        </div>

        {form}

        {/* Pied de page sticky */}
        <div className="sticky bottom-0 flex gap-3 border-t border-slate-200 bg-white px-6 py-4">
          <button
            type="button"
            onClick={handlePreview}
            disabled={selectedFormations.length === 0 || !email}
            className="flex-1 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
          >
            Aperçu avant envoi →
          </button>
          <button onClick={onClose} className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50">
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
