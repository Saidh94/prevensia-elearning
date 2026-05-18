"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Booking = {
  id: string;
  status: string;
  zoom_join_url: string | null;
  profiles: { first_name: string | null; last_name: string | null; email: string | null } | null;
};

type Slot = {
  id: string;
  date: string;
  start_time: string;
  end_time: string;
  formation_type: string;
  max_participants: number;
  notes: string | null;
  interview_bookings?: Booking[];
};

const FORMATION_TYPES = [
  { value: "h0b0", label: "H0B0 / H0V" },
  { value: "atex", label: "ATEX (Niv. 1 & 2)" },
  { value: "both", label: "H0B0 et ATEX" },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function formatTime(t: string) {
  return t.slice(0, 5);
}

const DAYS = [
  { num: 1, label: "Lun" },
  { num: 2, label: "Mar" },
  { num: 3, label: "Mer" },
  { num: 4, label: "Jeu" },
  { num: 5, label: "Ven" },
  { num: 6, label: "Sam" },
  { num: 7, label: "Dim" },
];

// Calcule le lundi de la semaine courante
function getCurrentMonday() {
  const d = new Date();
  const day = d.getDay(); // 0=dim
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d.toISOString().split("T")[0];
}

export function AdminInterviewSlotsClient({ initialSlots }: { initialSlots: Slot[] }) {
  const router = useRouter();
  const [slots, setSlots] = useState<Slot[]>(initialSlots);
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [form, setForm] = useState({
    date: "",
    start_time: "09:00",
    end_time: "09:30",
    formation_type: "h0b0",
    max_participants: 1,
    notes: "",
  });
  const [error, setError] = useState<string | null>(null);

  // ── Génération semaine ──
  const [weekForm, setWeekForm] = useState({
    weekStart: getCurrentMonday(),
    days: [1, 2, 3, 4, 5] as number[],
    rangeFrom1: "09:00",
    rangeTo1: "12:00",
    useRange2: false,
    rangeFrom2: "14:00",
    rangeTo2: "17:00",
    formation_type: "h0b0",
    notes: "",
  });
  const [weekGenerating, setWeekGenerating] = useState(false);
  const [weekResult, setWeekResult] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setCreating(true);
    try {
      const res = await fetch("/api/admin/interview-slots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Erreur lors de la création");
        return;
      }
      setSuccess("Créneau créé avec succès !");
      setSlots((prev) => [...prev, data].sort((a, b) => {
        if (a.date !== b.date) return a.date < b.date ? -1 : 1;
        return a.start_time < b.start_time ? -1 : 1;
      }));
      setForm((f) => ({ ...f, date: "", notes: "" }));
      router.refresh();
    } catch {
      setError("Erreur réseau");
    } finally {
      setCreating(false);
    }
  }

  async function handleDelete(slotId: string) {
    if (!confirm("Supprimer ce créneau ? Les réservations associées seront annulées.")) return;
    setDeleting(slotId);
    try {
      const res = await fetch(`/api/admin/interview-slots/${slotId}`, { method: "DELETE" });
      if (!res.ok) {
        const d = await res.json();
        setError(d.error ?? "Erreur suppression");
        return;
      }
      setSlots((prev) => prev.filter((s) => s.id !== slotId));
      setSuccess("Créneau supprimé.");
    } catch {
      setError("Erreur réseau");
    } finally {
      setDeleting(null);
    }
  }

  async function handleGenerateWeek() {
    setWeekResult(null);
    setError(null);
    setWeekGenerating(true);
    const timeRanges = [{ from: weekForm.rangeFrom1, to: weekForm.rangeTo1 }];
    if (weekForm.useRange2) timeRanges.push({ from: weekForm.rangeFrom2, to: weekForm.rangeTo2 });

    try {
      const res = await fetch("/api/admin/interview-slots/batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          weekStart: weekForm.weekStart,
          days: weekForm.days,
          timeRanges,
          slotDuration: 30,
          formation_type: weekForm.formation_type,
          notes: weekForm.notes || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Erreur génération"); return; }
      setWeekResult(`✓ ${data.created} créneaux de 30 min créés !`);
      // Ajouter les nouveaux créneaux à la liste
      if (Array.isArray(data.slots)) {
        setSlots((prev) => [...prev, ...data.slots].sort((a, b) => {
          if (a.date !== b.date) return a.date < b.date ? -1 : 1;
          return a.start_time < b.start_time ? -1 : 1;
        }));
      }
      router.refresh();
    } catch {
      setError("Erreur réseau");
    } finally {
      setWeekGenerating(false);
    }
  }

  const upcomingSlots = slots.filter(
    (s) => s.date >= new Date().toISOString().split("T")[0]
  );
  const pastSlots = slots.filter(
    (s) => s.date < new Date().toISOString().split("T")[0]
  );

  return (
    <div className="space-y-6">
      {/* Bouton retour */}
      <div className="flex gap-2">
        <Link
          href="/admin"
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          ← Retour au dashboard
        </Link>
        <Link
          href="/admin/calendrier-global"
          className="inline-flex items-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-100"
        >
          📅 Voir le calendrier
        </Link>
      </div>

      {/* ── Génération semaine complète ── */}
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
        <h2 className="mb-1 text-lg font-bold text-emerald-900">🗓 Générer mes dispos sur une semaine</h2>
        <p className="mb-5 text-sm text-emerald-700">Crée automatiquement tous les créneaux de 30 min sur les jours et plages horaires choisis.</p>

        <div className="space-y-4">
          {/* Semaine */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-emerald-800">
                Semaine (lundi)
              </label>
              <input
                type="date"
                value={weekForm.weekStart}
                onChange={(e) => setWeekForm((f) => ({ ...f, weekStart: e.target.value }))}
                className="w-full rounded-xl border border-emerald-200 bg-white px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-emerald-800">
                Formation
              </label>
              <select
                value={weekForm.formation_type}
                onChange={(e) => setWeekForm((f) => ({ ...f, formation_type: e.target.value }))}
                className="w-full rounded-xl border border-emerald-200 bg-white px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none"
              >
                {FORMATION_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
          </div>

          {/* Jours */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-emerald-800">Jours disponibles</label>
            <div className="flex flex-wrap gap-2">
              {DAYS.map((d) => (
                <button
                  key={d.num}
                  type="button"
                  onClick={() => setWeekForm((f) => ({
                    ...f,
                    days: f.days.includes(d.num)
                      ? f.days.filter((x) => x !== d.num)
                      : [...f.days, d.num].sort(),
                  }))}
                  className={`rounded-xl px-3 py-1.5 text-sm font-semibold transition ${
                    weekForm.days.includes(d.num)
                      ? "bg-emerald-600 text-white"
                      : "border border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-100"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Plage 1 */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-emerald-800">Plage horaire 1</label>
            <div className="flex items-center gap-3">
              <input
                type="time"
                value={weekForm.rangeFrom1}
                onChange={(e) => setWeekForm((f) => ({ ...f, rangeFrom1: e.target.value }))}
                className="rounded-xl border border-emerald-200 bg-white px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none"
              />
              <span className="text-sm text-emerald-700">→</span>
              <input
                type="time"
                value={weekForm.rangeTo1}
                onChange={(e) => setWeekForm((f) => ({ ...f, rangeTo1: e.target.value }))}
                className="rounded-xl border border-emerald-200 bg-white px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Plage 2 optionnelle */}
          <div>
            <button
              type="button"
              onClick={() => setWeekForm((f) => ({ ...f, useRange2: !f.useRange2 }))}
              className="text-sm font-semibold text-emerald-700 underline underline-offset-2"
            >
              {weekForm.useRange2 ? "− Retirer la plage de l'après-midi" : "+ Ajouter une plage après-midi"}
            </button>
            {weekForm.useRange2 && (
              <div className="mt-2 flex items-center gap-3">
                <input
                  type="time"
                  value={weekForm.rangeFrom2}
                  onChange={(e) => setWeekForm((f) => ({ ...f, rangeFrom2: e.target.value }))}
                  className="rounded-xl border border-emerald-200 bg-white px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none"
                />
                <span className="text-sm text-emerald-700">→</span>
                <input
                  type="time"
                  value={weekForm.rangeTo2}
                  onChange={(e) => setWeekForm((f) => ({ ...f, rangeTo2: e.target.value }))}
                  className="rounded-xl border border-emerald-200 bg-white px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none"
                />
              </div>
            )}
          </div>

          {/* Note */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-emerald-800">Note (optionnel)</label>
            <input
              type="text"
              value={weekForm.notes}
              placeholder="Ex : Disponible sauf urgences"
              onChange={(e) => setWeekForm((f) => ({ ...f, notes: e.target.value }))}
              className="w-full rounded-xl border border-emerald-200 bg-white px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none"
            />
          </div>

          {weekResult && (
            <div className="rounded-xl border border-emerald-300 bg-white px-4 py-3 text-sm font-semibold text-emerald-700">
              {weekResult}
            </div>
          )}

          <button
            type="button"
            onClick={() => void handleGenerateWeek()}
            disabled={weekGenerating || weekForm.days.length === 0}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
          >
            {weekGenerating ? "Génération…" : "🗓 Générer les créneaux"}
          </button>
        </div>
      </div>

      {/* Formulaire de création */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-bold text-slate-900">Créer un nouveau créneau</h2>

        {error && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            {success}
          </div>
        )}

        <form onSubmit={handleCreate} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Date *
            </label>
            <input
              type="date"
              required
              value={form.date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Heure début *
            </label>
            <input
              type="time"
              required
              value={form.start_time}
              onChange={(e) => setForm((f) => ({ ...f, start_time: e.target.value }))}
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Heure fin *
            </label>
            <input
              type="time"
              required
              value={form.end_time}
              onChange={(e) => setForm((f) => ({ ...f, end_time: e.target.value }))}
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Formation *
            </label>
            <select
              value={form.formation_type}
              onChange={(e) => setForm((f) => ({ ...f, formation_type: e.target.value }))}
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
            >
              {FORMATION_TYPES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Places max
            </label>
            <input
              type="number"
              min={1}
              max={10}
              value={form.max_participants}
              onChange={(e) => setForm((f) => ({ ...f, max_participants: Number(e.target.value) }))}
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Note interne
            </label>
            <input
              type="text"
              value={form.notes}
              placeholder="Ex: Prévoir 5 min supplémentaires"
              onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <button
              type="submit"
              disabled={creating}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50"
            >
              {creating ? "Création…" : "+ Créer le créneau"}
            </button>
          </div>
        </form>
      </div>

      {/* Créneaux à venir */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-bold text-slate-900">
          Créneaux à venir
          {upcomingSlots.length > 0 && (
            <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-sm font-semibold text-slate-500">
              {upcomingSlots.length}
            </span>
          )}
        </h2>

        {upcomingSlots.length === 0 ? (
          <p className="text-sm text-slate-500">Aucun créneau à venir. Créez-en un ci-dessus.</p>
        ) : (
          <div className="space-y-3">
            {upcomingSlots.map((slot) => {
              const confirmedBookings = (slot.interview_bookings ?? []).filter(
                (b) => b.status === "confirmed"
              );
              const isFull = confirmedBookings.length >= slot.max_participants;

              return (
                <div
                  key={slot.id}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          slot.formation_type === "h0b0"
                            ? "bg-emerald-100 text-emerald-800"
                            : slot.formation_type === "atex"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-purple-100 text-purple-800"
                        }`}>
                          {FORMATION_TYPES.find((t) => t.value === slot.formation_type)?.label}
                        </span>
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          isFull
                            ? "bg-red-100 text-red-700"
                            : confirmedBookings.length > 0
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                        }`}>
                          {confirmedBookings.length}/{slot.max_participants} réservé{confirmedBookings.length > 1 ? "s" : ""}
                        </span>
                      </div>

                      <p className="mt-2 font-semibold text-slate-900">
                        {formatDate(slot.date)}
                      </p>
                      <p className="text-sm text-slate-600">
                        {formatTime(slot.start_time)} → {formatTime(slot.end_time)}
                      </p>
                      {slot.notes && (
                        <p className="mt-1 text-xs text-slate-500">{slot.notes}</p>
                      )}

                      {/* Apprenants réservés */}
                      {confirmedBookings.length > 0 && (
                        <div className="mt-3 space-y-1.5">
                          {confirmedBookings.map((b) => (
                            <div key={b.id} className="flex items-center gap-2 text-sm">
                              <span className="font-medium text-slate-800">
                                {[b.profiles?.first_name, b.profiles?.last_name].filter(Boolean).join(" ") || b.profiles?.email || "Apprenant"}
                              </span>
                              <span className="text-slate-400">—</span>
                              <span className="text-slate-500">{b.profiles?.email}</span>
                              {b.zoom_join_url && (
                                <a
                                  href={b.zoom_join_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-blue-700 underline hover:no-underline"
                                >
                                  Zoom →
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDelete(slot.id)}
                      disabled={deleting === slot.id}
                      className="shrink-0 rounded-xl border border-red-200 px-3 py-1.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                    >
                      {deleting === slot.id ? "…" : "Supprimer"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Créneaux passés */}
      {pastSlots.length > 0 && (
        <details className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <summary className="cursor-pointer p-6 text-sm font-semibold text-slate-500">
            Créneaux passés ({pastSlots.length})
          </summary>
          <div className="space-y-3 px-6 pb-6">
            {pastSlots.map((slot) => {
              const confirmedBookings = (slot.interview_bookings ?? []).filter(
                (b) => b.status === "confirmed"
              );
              return (
                <div key={slot.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 opacity-70">
                  <p className="font-medium text-slate-700">
                    {formatDate(slot.date)} · {formatTime(slot.start_time)} → {formatTime(slot.end_time)}
                  </p>
                  <p className="text-xs text-slate-500">
                    {FORMATION_TYPES.find((t) => t.value === slot.formation_type)?.label} ·{" "}
                    {confirmedBookings.length} réservé{confirmedBookings.length > 1 ? "s" : ""}
                  </p>
                </div>
              );
            })}
          </div>
        </details>
      )}
    </div>
  );
}
