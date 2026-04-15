"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import {
  cloneDefaultSlots,
  ReservationSlot,
  readSlots,
  writeSlots,
} from "../../reservation/slots";

export default function AdminCalendrierPage() {
  const [slots, setSlots] = useState<ReservationSlot[]>(() => readSlots());
  const [message, setMessage] = useState("");

  useEffect(() => {
    writeSlots(slots);
  }, [slots]);

  const handleAddSlot = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newSlot: ReservationSlot = {
      id: crypto.randomUUID(),
      formation: String(formData.get("formation") ?? ""),
      date: String(formData.get("date") ?? ""),
      startTime: String(formData.get("startTime") ?? ""),
      endTime: String(formData.get("endTime") ?? ""),
      location: String(formData.get("location") ?? ""),
      seats: Number(formData.get("seats") ?? 0),
    };

    const nextSlots = [...slots, newSlot].sort((a, b) =>
      `${a.date}-${a.startTime}`.localeCompare(`${b.date}-${b.startTime}`)
    );

    setSlots(nextSlots);
    setMessage("Session ajoutée au calendrier.");
    event.currentTarget.reset();
  };

  const handleDeleteSlot = (id: string) => {
    const nextSlots = slots.filter((slot) => slot.id !== id);
    setSlots(nextSlots);
    setMessage("Session supprimée.");
  };

  const handleReset = () => {
    setSlots(cloneDefaultSlots());
    setMessage("Calendrier réinitialisé avec les sessions par défaut.");
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
            Administration planning
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Gérer les dates de formation</h1>
          <p className="mt-3 text-slate-600">
            Ajoutez ou supprimez des sessions présentielles. Vos clients voient ces
            dates sur la page de réservation.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Voir côté client :{" "}
            <Link href="/reservation-formation" className="font-semibold text-red-700 underline underline-offset-2">
              page réservation
            </Link>
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Ajouter une session</h2>

            <form className="mt-5 space-y-4" onSubmit={handleAddSlot}>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Formation
                <input
                  name="formation"
                  required
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-400"
                  placeholder="Ex : SST - Initial"
                />
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
                    placeholder="Ex : Bordeaux"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
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
                    placeholder="10"
                  />
                </label>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
                >
                  Ajouter la session
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                >
                  Réinitialiser planning
                </button>
              </div>
            </form>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Sessions actuelles</h2>

            <div className="mt-5 space-y-3">
              {slots.length === 0 ? (
                <p className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Aucune session enregistrée.
                </p>
              ) : (
                slots.map((slot) => (
                  <div key={slot.id} className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-red-700">
                      {slot.formation}
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      {new Date(slot.date).toLocaleDateString("fr-FR")} · {slot.startTime} - {slot.endTime}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {slot.location} · {slot.seats} places
                    </p>
                    <button
                      type="button"
                      onClick={() => handleDeleteSlot(slot.id)}
                      className="mt-3 text-sm font-semibold text-red-700 underline underline-offset-2"
                    >
                      Supprimer cette session
                    </button>
                  </div>
                ))
              )}
            </div>

            {message ? (
              <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                {message}
              </p>
            ) : null}
          </section>
        </div>
      </div>
    </main>
  );
}