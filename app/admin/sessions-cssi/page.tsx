"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import AssignFormateurButton from "@/app/admin/components/AssignFormateurButton";

type CssiSession = {
  id: string;
  formation: string;
  date: string;           // date de début (J1)
  dateEnd?: string;       // date de fin (J7) — stocké dans note ou champ custom
  startTime: string;
  endTime: string;
  location: string;
  seats: number;
  minParticipants: number;
  note?: string;
  category: string;
  format: string;
  audience: string;
  meetingUrl?: string;
};

function compareByDate(a: CssiSession, b: CssiSession) {
  return a.date.localeCompare(b.date);
}

function frDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function SessionsCssiPage() {
  const [sessions, setSessions] = useState<CssiSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [formateurMap, setFormateurMap] = useState<Record<string, { id: string | null; name: string | null }>>({});

  // ── Formulaire ──
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [lieu, setLieu] = useState("Paris 11e — centre PREVENSIA");
  const [places, setPlaces] = useState(8);
  const [note, setNote] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/virtual-sessions", { cache: "no-store" });
      if (res.ok) {
        const data = (await res.json()) as CssiSession[];
        const cssi = data
          .filter((s) => s.category === "cssi")
          .sort(compareByDate);
        setSessions(cssi);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  const [dateExamen, setDateExamen] = useState("");

  // Auto-calculer date de fin = date_début + 6 jours (J7 = dernier jour de cours)
  // Auto-calculer date d'examen = date_début + 7 jours (J8)
  useEffect(() => {
    if (!dateDebut) return;
    const fin = new Date(`${dateDebut}T12:00:00`);
    fin.setDate(fin.getDate() + 6);
    setDateFin(fin.toISOString().slice(0, 10));
    const exam = new Date(`${dateDebut}T12:00:00`);
    exam.setDate(exam.getDate() + 7);
    setDateExamen(exam.toISOString().slice(0, 10));
  }, [dateDebut]);

  const handleAdd = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    const noteComposed = [
      `Session 7 jours + examen — du ${frDate(dateDebut)} au ${frDate(dateFin)} · Examen : ${frDate(dateExamen)}`,
      note ? `Note : ${note}` : "",
    ].filter(Boolean).join(" | ");

    const payload = {
      formation: "Coordination SSI — 7 jours en salle",
      date: dateDebut,
      startTime: "09:00",
      endTime: "18:00",
      location: lieu,
      seats: places,
      minParticipants: 3,
      format: "in_person",
      audience: "individual",
      category: "cssi",
      note: noteComposed,
      meetingUrl: "",
    };

    try {
      const res = await fetch("/api/virtual-sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setMessage("✓ Session CSSI ajoutée au planning.");
        setDateDebut("");
        setDateFin("");
        setNote("");
        await load();
      } else {
        const d = (await res.json()) as { error?: string };
        setMessage(`Erreur : ${d.error ?? "inconnue"}`);
      }
    } catch {
      setMessage("Erreur réseau.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer cette session ?")) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/virtual-sessions?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      if (res.ok) {
        setSessions((prev) => prev.filter((s) => s.id !== id));
        setMessage("Session supprimée.");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Header */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-600">
                Administration · Formation CSSI
              </p>
              <h1 className="mt-1 text-2xl font-bold text-slate-900">
                Planification des sessions Coordination SSI
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Formation inter-entreprise · 7 jours en salle + 1 journée examen · Max 8 participants · 1 790 € HT / apprenant
              </p>
            </div>
            <div className="flex gap-2 text-sm">
              <Link href="/admin" className="rounded-xl border border-slate-200 px-3 py-2 text-slate-600 hover:bg-slate-50">
                ← Admin
              </Link>
              <Link href="/admin/calendrier-global" className="rounded-xl border border-slate-200 px-3 py-2 text-slate-600 hover:bg-slate-50">
                📅 Calendrier global
              </Link>
              <Link href="/admin/leads" className="rounded-xl border border-slate-200 px-3 py-2 text-slate-600 hover:bg-slate-50">
                📋 Leads / Devis
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* ── Formulaire ajout ── */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Créer une session</h2>
            <p className="mt-1 text-xs text-slate-500">La date de fin est calculée automatiquement (J+6).</p>

            <form className="mt-5 space-y-4" onSubmit={handleAdd}>
              {/* Dates */}
              <div className="grid gap-4 sm:grid-cols-3">
                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                  Début (J1)
                  <input
                    type="date"
                    required
                    value={dateDebut}
                    onChange={(e) => setDateDebut(e.target.value)}
                    className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-orange-400"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                  Fin cours (J7)
                  <input
                    type="date"
                    required
                    value={dateFin}
                    onChange={(e) => setDateFin(e.target.value)}
                    className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-orange-400"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                  📝 Examen (J8)
                  <input
                    type="date"
                    required
                    value={dateExamen}
                    onChange={(e) => setDateExamen(e.target.value)}
                    className="rounded-xl border border-orange-300 px-4 py-2.5 text-sm outline-none focus:border-orange-500 bg-orange-50"
                  />
                </label>
              </div>

              {/* Lieu */}
              <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                Lieu / Salle
                <input
                  type="text"
                  required
                  value={lieu}
                  onChange={(e) => setLieu(e.target.value)}
                  placeholder="Ex : Paris 11e — centre PREVENSIA"
                  className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-orange-400"
                />
              </label>

              {/* Places */}
              <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                Nombre de places (max 8)
                <input
                  type="number"
                  min={1}
                  max={8}
                  required
                  value={places}
                  onChange={(e) => setPlaces(Number(e.target.value))}
                  className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-orange-400 w-32"
                />
              </label>

              {/* Note */}
              <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                Note interne (optionnel)
                <textarea
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Ex : Session ouverte à partir de 3 inscrits confirmés"
                  className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-orange-400"
                />
              </label>

              <button
                type="submit"
                disabled={saving}
                className="w-full rounded-2xl bg-orange-600 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 disabled:opacity-60"
              >
                {saving ? "Enregistrement…" : "Créer la session"}
              </button>

              {message && (
                <p className={`rounded-xl border px-4 py-3 text-sm ${
                  message.startsWith("✓")
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border-red-200 bg-red-50 text-red-800"
                }`}>
                  {message}
                </p>
              )}
            </form>
          </section>

          {/* ── Liste des sessions ── */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Sessions planifiées{" "}
              <span className="ml-1 rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-700">
                {sessions.length}
              </span>
            </h2>

            <div className="mt-5 space-y-4">
              {loading ? (
                <p className="text-sm text-slate-500">Chargement…</p>
              ) : sessions.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center">
                  <p className="text-sm text-slate-400">Aucune session CSSI planifiée.</p>
                  <p className="mt-1 text-xs text-slate-400">Créez la première ci-contre.</p>
                </div>
              ) : (
                sessions.map((s) => (
                  <div key={s.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    {/* Badge statut */}
                    {new Date(s.date) >= new Date() ? (
                      <span className="inline-flex rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                        À venir
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-500">
                        Passée
                      </span>
                    )}

                    <p className="mt-2 font-semibold text-slate-900">
                      {frDate(s.date)}
                    </p>
                    <p className="text-sm text-slate-600 mt-0.5">
                      📍 {s.location} · {s.seats} places
                    </p>

                    {s.note && (
                      <p className="mt-2 rounded-xl bg-white border border-slate-200 px-3 py-2 text-xs text-slate-600">
                        {s.note}
                      </p>
                    )}

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                      <AssignFormateurButton
                        sessionId={s.id}
                        currentFormateurId={formateurMap[s.id]?.id ?? null}
                        currentFormateurName={formateurMap[s.id]?.name ?? null}
                        onAssigned={(fId, fName) =>
                          setFormateurMap((prev) => ({ ...prev, [s.id]: { id: fId, name: fName } }))
                        }
                      />
                      <button
                        type="button"
                        disabled={saving}
                        onClick={() => void handleDelete(s.id)}
                        className="font-semibold text-red-600 underline underline-offset-2 hover:text-red-800 disabled:opacity-50"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>

        {/* Aide / contexte */}
        <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5 text-sm text-orange-800">
          <p className="font-semibold">Rappels opérationnels CSSI</p>
          <ul className="mt-2 space-y-1 list-disc list-inside text-orange-700">
            <li>Formation exclusivement en inter-entreprise (jamais en intra — les clients n&apos;ont jamais plusieurs CSSI)</li>
            <li>Minimum 3 participants pour ouvrir, maximum 8</li>
            <li>Durée : 7 jours de cours en salle + 1 journée d&apos;examen (J8)</li>
            <li>Tarif : 1 790 € HT / apprenant — finançable OPCO / FNE-Formation</li>
            <li>Attestation de formation PREVENSIA remise après l&apos;examen (pas de titre RNCP)</li>
            <li>E-learning préparatoire inclus — à compléter avant le J1</li>
            <li>Pour gérer les devis et inscrits : <Link href="/admin/leads" className="underline font-semibold">→ Leads / Devis</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
