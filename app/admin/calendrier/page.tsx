"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { type ReservationSlot } from "../../reservation/slots";
import AssignFormateurButton from "@/app/admin/components/AssignFormateurButton";

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
  { value: "h0b0_validation",   label: "H0B0 / H0V — validation 30 min" },
  { value: "bsbe_initial",      label: "BS / BE — initial" },
  { value: "bsbe_recyclage",    label: "BS / BE — recyclage" },
  { value: "b1b2brbc_initial",  label: "B1 / B2 / BR / BC — initial" },
  { value: "b1b2brbc_recyclage",label: "B1 / B2 / BR / BC — recyclage" },
  { value: "atex_n0",           label: "ATEX Niveau 0 — Sensibilisation" },
  { value: "atex_n1",           label: "ATEX Niveau 1 — Intervenant" },
  { value: "atex_n2",           label: "ATEX Niveau 2 — Référent / Encadrant" },
  { value: "ssiap1_initial",    label: "SSIAP 1 — Initial" },
  { value: "ssiap1_recyclage",  label: "SSIAP 1 — Recyclage" },
  { value: "sst",               label: "SST — Sauveteur Secouriste du Travail" },
  { value: "cssi",              label: "Coordination SSI — 7 jours en salle" },
  { value: "other",             label: "Autre" },
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
  const [formateurMap, setFormateurMap] = useState<Record<string, { id: string | null; name: string | null }>>({});
  const [meetingUrl, setMeetingUrl] = useState("");
  const [zoomStartUrl, setZoomStartUrl] = useState("");
  const [generatingZoom, setGeneratingZoom] = useState(false);
  const [zoomError, setZoomError] = useState("");

  // ── État du modal d'édition ──
  const [editSlot, setEditSlot] = useState<ReservationSlot | null>(null);
  const [editForm, setEditForm] = useState<Partial<ReservationSlot>>({});
  const [editMeetingUrl, setEditMeetingUrl] = useState("");
  const [editZoomStartUrl, setEditZoomStartUrl] = useState("");
  const [editGeneratingZoom, setEditGeneratingZoom] = useState(false);
  const [editZoomError, setEditZoomError] = useState("");
  const [editSaving, setEditSaving] = useState(false);
  const [editMessage, setEditMessage] = useState("");

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

  // ── Ouvrir le modal d'édition ──
  function openEdit(slot: ReservationSlot) {
    setEditSlot(slot);
    setEditForm({ ...slot });
    setEditMeetingUrl(slot.meetingUrl ?? "");
    setEditZoomStartUrl("");
    setEditZoomError("");
    setEditMessage("");
  }

  function closeEdit() {
    setEditSlot(null);
    setEditForm({});
    setEditMeetingUrl("");
    setEditZoomStartUrl("");
    setEditZoomError("");
    setEditMessage("");
  }

  // ── Générer Zoom depuis le modal d'édition ──
  const handleEditGenerateZoom = async () => {
    setEditZoomError("");
    setEditGeneratingZoom(true);
    const date = String(editForm.date ?? "").trim();
    const startTime = String(editForm.startTime ?? "09:00").trim();
    const endTime = String(editForm.endTime ?? "10:00").trim();
    const formation = String(editForm.formation ?? "Session PREVENSIA").trim();

    if (!date) {
      setEditZoomError("Remplis d'abord la date.");
      setEditGeneratingZoom(false);
      return;
    }
    try {
      const res = await fetch("/api/admin/zoom-meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: formation, date, start_time: startTime, end_time: endTime }),
      });
      const data = await res.json() as { joinUrl?: string; startUrl?: string; error?: string };
      if (!res.ok) { setEditZoomError(data.error ?? "Erreur Zoom"); return; }
      setEditMeetingUrl(data.joinUrl ?? "");
      setEditZoomStartUrl(data.startUrl ?? "");
      setEditForm((f) => ({ ...f, meetingUrl: data.joinUrl ?? "" }));
    } catch {
      setEditZoomError("Erreur réseau");
    } finally {
      setEditGeneratingZoom(false);
    }
  };

  // ── Sauvegarder les modifications ──
  const handleEditSave = async () => {
    if (!editSlot) return;
    setEditSaving(true);
    setEditMessage("");
    try {
      const res = await fetch(`/api/virtual-sessions?id=${encodeURIComponent(editSlot.id)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...editForm,
          meetingUrl: editMeetingUrl || editForm.meetingUrl || "",
        }),
      });
      if (res.ok) {
        const updated = await res.json() as ReservationSlot;
        setSlots((prev) =>
          prev.map((s) => (s.id === editSlot.id ? updated : s)).sort(compareSlots)
        );
        setEditMessage("✓ Session mise à jour !");
        setTimeout(closeEdit, 1200);
      } else {
        const d = await res.json() as { error?: string };
        setEditMessage(`Erreur : ${d.error ?? "inconnue"}`);
      }
    } catch {
      setEditMessage("Erreur réseau");
    } finally {
      setEditSaving(false);
    }
  };

  const handleGenerateZoom = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setZoomError("");
    setGeneratingZoom(true);

    // Récupérer les valeurs du formulaire parent
    const form = (event.currentTarget as HTMLButtonElement).closest("form") as HTMLFormElement;
    const formData = new FormData(form);
    const date = String(formData.get("date") ?? "").trim();
    const startTime = String(formData.get("startTime") ?? "09:00").trim();
    const endTime = String(formData.get("endTime") ?? "10:00").trim();
    const formation = String(formData.get("formation") ?? "Session PREVENSIA").trim();

    if (!date) {
      setZoomError("Remplis d'abord la date avant de générer le lien.");
      setGeneratingZoom(false);
      return;
    }

    try {
      const res = await fetch("/api/admin/zoom-meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: formation, date, start_time: startTime, end_time: endTime }),
      });
      const data = await res.json() as { joinUrl?: string; startUrl?: string; error?: string };
      if (!res.ok) {
        setZoomError(data.error ?? "Erreur génération Zoom");
        return;
      }
      setMeetingUrl(data.joinUrl ?? "");
      setZoomStartUrl(data.startUrl ?? "");
    } catch {
      setZoomError("Erreur réseau");
    } finally {
      setGeneratingZoom(false);
    }
  };

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
      meetingUrl: meetingUrl || String(formData.get("meetingUrl") ?? ""),
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
        setMeetingUrl("");
        setZoomStartUrl("");
        setZoomError("");
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

              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700">Lien de connexion virtuelle</span>

                {/* Bouton génération auto Zoom */}
                <button
                  type="button"
                  onClick={handleGenerateZoom}
                  disabled={generatingZoom}
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
                >
                  {generatingZoom ? "Génération…" : "🎥 Générer un lien Zoom auto"}
                </button>

                {zoomError && (
                  <p className="text-xs text-red-600">{zoomError}</p>
                )}

                {meetingUrl && (
                  <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-xs">
                    <p className="font-semibold text-blue-800">✓ Lien Zoom généré</p>
                    <p className="mt-1 text-blue-700 break-all">Participants : {meetingUrl}</p>
                    {zoomStartUrl && (
                      <a
                        href={zoomStartUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block font-semibold text-blue-900 underline"
                      >
                        Lien hôte (toi) →
                      </a>
                    )}
                  </div>
                )}

                <input
                  name="meetingUrl"
                  type="url"
                  value={meetingUrl}
                  onChange={(e) => setMeetingUrl(e.target.value)}
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                  placeholder="https://zoom.us/j/... (généré auto ou coller manuellement)"
                />
                <span className="text-xs text-slate-500">
                  Clique sur le bouton pour générer automatiquement, ou colle un lien manuellement.
                </span>
              </div>

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
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => openEdit(slot)}
                        className="text-sm font-semibold text-blue-700 underline underline-offset-2"
                      >
                        Modifier
                      </button>
                      <button
                        type="button"
                        disabled={saving}
                        onClick={() => void handleDeleteSlot(slot.id)}
                        className="text-sm font-semibold text-red-700 underline underline-offset-2 disabled:opacity-60"
                      >
                        Supprimer
                      </button>
                      <AssignFormateurButton
                        sessionId={slot.id}
                        currentFormateurId={formateurMap[slot.id]?.id ?? null}
                        currentFormateurName={formateurMap[slot.id]?.name ?? null}
                        onAssigned={(fId, fName) =>
                          setFormateurMap(prev => ({ ...prev, [slot.id]: { id: fId, name: fName } }))
                        }
                      />
                    </div>
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

      {/* ── Modal d'édition ─────────────────────────────────────────────────── */}
      {editSlot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={closeEdit}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-slate-900">Modifier la session</h2>
              <button
                type="button"
                onClick={closeEdit}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
              >✕</button>
            </div>

            <div className="space-y-4">
              {/* Formation */}
              <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                Formation
                <input
                  type="text"
                  value={editForm.formation ?? ""}
                  onChange={(e) => setEditForm((f) => ({ ...f, formation: e.target.value }))}
                  className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-400"
                />
              </label>

              {/* Catégorie */}
              <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                Catégorie
                <select
                  value={editForm.category ?? "other"}
                  onChange={(e) => setEditForm((f) => ({ ...f, category: e.target.value as ReservationSlot["category"] }))}
                  className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-400"
                >
                  {categoryOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </label>

              {/* Date + Lieu */}
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                  Date
                  <input
                    type="date"
                    value={editForm.date ?? ""}
                    onChange={(e) => setEditForm((f) => ({ ...f, date: e.target.value }))}
                    className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-400"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                  Lieu
                  <input
                    type="text"
                    value={editForm.location ?? ""}
                    onChange={(e) => setEditForm((f) => ({ ...f, location: e.target.value }))}
                    className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-400"
                  />
                </label>
              </div>

              {/* Format + Public */}
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                  Format
                  <select
                    value={editForm.format ?? "in_person"}
                    onChange={(e) => setEditForm((f) => ({ ...f, format: e.target.value as ReservationSlot["format"] }))}
                    className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-400"
                  >
                    {formatOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                  Public
                  <select
                    value={editForm.audience ?? "both"}
                    onChange={(e) => setEditForm((f) => ({ ...f, audience: e.target.value as ReservationSlot["audience"] }))}
                    className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-400"
                  >
                    {audienceOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </label>
              </div>

              {/* Heures + Places */}
              <div className="grid grid-cols-4 gap-3">
                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                  Début
                  <input
                    type="time"
                    value={editForm.startTime ?? ""}
                    onChange={(e) => setEditForm((f) => ({ ...f, startTime: e.target.value }))}
                    className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-400"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                  Fin
                  <input
                    type="time"
                    value={editForm.endTime ?? ""}
                    onChange={(e) => setEditForm((f) => ({ ...f, endTime: e.target.value }))}
                    className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-400"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                  Places
                  <input
                    type="number"
                    min={1}
                    value={editForm.seats ?? 1}
                    onChange={(e) => setEditForm((f) => ({ ...f, seats: Number(e.target.value) }))}
                    className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-400"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                  Minimum
                  <input
                    type="number"
                    min={1}
                    value={editForm.minParticipants ?? 1}
                    onChange={(e) => setEditForm((f) => ({ ...f, minParticipants: Number(e.target.value) }))}
                    className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-400"
                  />
                </label>
              </div>

              {/* Lien Zoom */}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700">Lien de connexion virtuelle</span>
                <button
                  type="button"
                  onClick={() => void handleEditGenerateZoom()}
                  disabled={editGeneratingZoom}
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
                >
                  {editGeneratingZoom ? "Génération…" : "🎥 Générer un nouveau lien Zoom"}
                </button>
                {editZoomError && <p className="text-xs text-red-600">{editZoomError}</p>}
                {editZoomStartUrl && (
                  <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-xs">
                    <p className="font-semibold text-blue-800">✓ Nouveau lien Zoom généré</p>
                    <p className="mt-1 break-all text-blue-700">Participants : {editMeetingUrl}</p>
                    <a
                      href={editZoomStartUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block font-semibold text-blue-900 underline"
                    >
                      Lien hôte (toi) →
                    </a>
                  </div>
                )}
                <input
                  type="url"
                  value={editMeetingUrl}
                  onChange={(e) => { setEditMeetingUrl(e.target.value); setEditForm((f) => ({ ...f, meetingUrl: e.target.value })); }}
                  className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-400"
                  placeholder="https://zoom.us/j/..."
                />
              </div>

              {/* Note */}
              <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                Note opérationnelle
                <textarea
                  rows={2}
                  value={editForm.note ?? ""}
                  onChange={(e) => setEditForm((f) => ({ ...f, note: e.target.value }))}
                  className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-400"
                />
              </label>

              {editMessage && (
                <p className={`rounded-xl border px-4 py-2.5 text-sm ${
                  editMessage.startsWith("✓")
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border-red-200 bg-red-50 text-red-800"
                }`}>
                  {editMessage}
                </p>
              )}

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => void handleEditSave()}
                  disabled={editSaving}
                  className="flex-1 rounded-2xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50"
                >
                  {editSaving ? "Enregistrement…" : "Sauvegarder les modifications"}
                </button>
                <button
                  type="button"
                  onClick={closeEdit}
                  className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
