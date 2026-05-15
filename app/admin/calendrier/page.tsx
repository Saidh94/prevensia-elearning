"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { type ReservationSlot } from "../../reservation/slots";

const formatOptions = [
  { value: "virtual", label: "Classe virtuelle" },
  { value: "onsite", label: "En entreprise" },
  { value: "in_person", label: "Salle / présentiel" },
] as const;

const audienceOptions = [
  { value: "individual", label: "Individuel" },
  { value: "group", label: "Groupe / entreprise" },
  { value: "both", label: "Individuel ou groupe" },
] as const;

const categoryOptions = [
  { value: "h0b0_validation", label: "H0B0 / H0V - validation 30 min" },
  { value: "bsbe_initial", label: "BS / BE - initial" },
  { value: "bsbe_recyclage", label: "BS / BE - recyclage" },
  { value: "b1b2brbc_initial", label: "B1 / B2 / BR / BC - initial" },
  { value: "b1b2brbc_recyclage", label: "B1 / B2 / BR / BC - recyclage" },
  { value: "other", label: "Autre" },
] as const;

function formatSlotType(slot: ReservationSlot) {
  const formatLabel =
    slot.format === "virtual"
      ? "Classe virtuelle"
      : slot.format === "onsite"
        ? "En entreprise"
        : "Salle / présentiel";

  const audienceLabel =
    slot.audience === "individual"
      ? "Individuel"
      : slot.audience === "group"
        ? "Groupe / entreprise"
        : "Individuel ou groupe";

  return `${formatLabel} - ${audienceLabel}`;
}

function compareSlots(a: ReservationSlot, b: ReservationSlot) {
  return `${a.date}-${a.startTime}`.localeCompare(`${b.date}-${b.startTime}`);
}

export default function AdminCalendrierPage() {
  const [slots, setSlots] = useState<ReservationSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const loadSlots = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/virtual-sessions", { cache: "no-store" });
      if (res.ok) {
        const data: unknown = await res.json();
        if (Array.isArray(data)) {
          setSlots((data as ReservationSlot[]).slice().sort(compareSlots));
        }
      } else {
        setMessage("Erreur lors du chargement des sessions.");
      }
    } catch {
      setMessage("Impossible de contacter le serveur.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadSlots();
  }, [loadSlots]);

  const handleAddSlot = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      formation: String(formData.get("formation") ?? ""),
      date: String(formData.get("date") ?? ""),
      startTime: String(formData.get("startTime") ?? ""),
      endTime: String(formData.get("endTime") ?? ""),
      location: String(formData.get("location") ?? ""),
      seats: Number(formData.get("seats") ?? 1),
      format: String(formData.get("format") ?? "in_person"),
      audience: String(formData.get("audience") ?? "both"),
      category: String(formData.get("category") ?? "other"),
      minParticipants: Number(formData.get("minParticipants") ?? 1),
      note: String(formData.get("note") ?? ""),
      meetingUrl: String(formData.get("meetingUrl") ?? ""),
    };

    try {
      const res = await fetch("/api/virtual-sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMessage("Session ajoutée au calendrier.");
        event.currentTarget.reset();
        await loadSlots();
      } else {
        const data = await res.json().catch(() => ({}));
        setMessage(`Erreur : ${(data as { error?: string }).error ?? res.statusText}`);
      }
    } catch {
      setMessage("Erreur réseau lors de l'ajout.");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteSlot = async (id: string) => {
    setSaving(true);
    setMessage("");

    try {
      const res = await fetch(`/api/virtual-sessions?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setMessage("Session supprimée.");
        setSlots((prev) => prev.filter((s) => s.id !== id));
      } else {
        const data = await res.json().catch(() => ({}));
        setMessage(`Erreur : ${(data as { error?: string }).error ?? res.statusText}`);
      }
    } catch {
      setMessage("Erreur réseau lors de la suppression.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
            Administration planning
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Gérer les validations et classes virtuelles
          </h1>
          <p className="mt-3 text-slate-600">
            Ajoutez ici les entretiens H0B0, les classes virtuelles BS / BE,
            les recyclages ou les sessions en entreprise. Les créneaux sont
            enregistrés dans Supabase et visibles par tous les apprenants en
            temps réel.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Voir côté client :{" "}
            <Link
              href="/reservation-formation"
              className="font-semibold text-red-700 underline underline-offset-2"
            >
              page réservation
            </Link>
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* ── Formulaire d'ajout ──────────────────────────────────────── */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Ajouter une session
            </h2>

            <form className="mt-5 space-y-4" onSubmit={handleAddSlot}>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Formation
                <input
                  name="formation"
                  required
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                  placeholder="Ex : BS / BE Manœuvre — Initial groupe"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Catégorie
                <select
                  name="category"
                  defaultValue="other"
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                >
                  {categoryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Date
                  <input
                    name="date"
                    type="date"
                    required
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Lieu
                  <input
                    name="location"
                    required
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                    placeholder="Ex : Classe virtuelle / Paris / Site client"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Format
                  <select
                    name="format"
                    defaultValue="in_person"
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                  >
                    {formatOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Public
                  <select
                    name="audience"
                    defaultValue="both"
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                  >
                    {audienceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-4">
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Début
                  <input
                    name="startTime"
                    type="time"
                    required
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Fin
                  <input
                    name="endTime"
                    type="time"
                    required
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Places
                  <input
                    name="seats"
                    type="number"
                    min={1}
                    required
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                    placeholder="8"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Minimum
                  <input
                    name="minParticipants"
                    type="number"
                    min={1}
                    defaultValue={1}
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Lien de connexion virtuelle
                <input
                  name="meetingUrl"
                  type="url"
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                  placeholder="https://meet.google.com/... ou https://zoom.us/..."
                />
                <span className="text-xs text-slate-500">
                  Facultatif — visible uniquement dans l&apos;espace admin. À communiquer manuellement aux inscrits.
                </span>
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Note opérationnelle
                <textarea
                  name="note"
                  rows={3}
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                  placeholder="Ex : Classe virtuelle initiale, ouverture à partir de 4 apprenants."
                />
              </label>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800 disabled:opacity-60"
                >
                  {saving ? "Enregistrement…" : "Ajouter la session"}
                </button>
              </div>
            </form>
          </section>

          {/* ── Liste des sessions ──────────────────────────────────────── */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Sessions actuelles
            </h2>

            <div className="mt-5 space-y-3">
              {loading ? (
                <p className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Chargement…
                </p>
              ) : slots.length === 0 ? (
                <p className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Aucune session enregistrée.
                </p>
              ) : (
                slots.map((slot) => (
                  <div
                    key={slot.id}
                    className="rounded-2xl border border-slate-200 p-4"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-red-700">
                      {slot.formation}
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      {new Date(`${slot.date}T12:00:00`).toLocaleDateString("fr-FR")} ·{" "}
                      {slot.startTime} - {slot.endTime}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {slot.location} · {slot.seats} place{slot.seats > 1 ? "s" : ""}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {formatSlotType(slot)} · Minimum : {slot.minParticipants ?? 1}
                    </p>
                    {slot.meetingUrl ? (
                      <p className="mt-2 text-sm text-slate-600">
                        Lien :{" "}
                        <a
                          href={slot.meetingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-blue-700 underline underline-offset-2"
                        >
                          {slot.meetingUrl}
                        </a>
                      </p>
                    ) : null}
                    {slot.note ? (
                      <p className="mt-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-600">
                        {slot.note}
                      </p>
                    ) : null}
                    <button
                      type="button"
                      disabled={saving}
                      onClick={() => void handleDeleteSlot(slot.id)}
                      className="mt-3 text-sm font-semibold text-red-700 underline underline-offset-2 disabled:opacity-60"
                    >
                      Supprimer cette session
                    </button>
                  </div>
                ))
              )}
            </div>

            {message ? (
              <p
                className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
                  message.startsWith("Erreur") || message.startsWith("Impossible")
                    ? "border-red-200 bg-red-50 text-red-800"
                    : "border-emerald-200 bg-emerald-50 text-emerald-800"
                }`}
              >
                {message}
              </p>
            ) : null}
          </section>
        </div>
      </div>
    </main>
  );
}
