"use client";

import { useState } from "react";

type AvailableSlot = {
  id: string;
  date: string;
  start_time: string;
  end_time: string;
  formation_type: string;
  notes: string | null;
};

type ExistingBooking = {
  id: string;
  zoomJoinUrl: string | null;
  slot: {
    date: string;
    start_time: string;
    end_time: string;
  } | null;
} | null;

type BookingResult = {
  zoomJoinUrl: string | null;
  date: string;
  startTime: string;
  endTime: string;
};

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

export function InterviewBookingClient({
  enrollmentId,
  availableSlots,
  existingBooking,
}: {
  enrollmentId: string;
  formationType: string;
  availableSlots: AvailableSlot[];
  existingBooking: ExistingBooking;
}) {
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);
  const [booking, setBooking] = useState(false);
  const [result, setResult] = useState<BookingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Si une réservation existe déjà
  if (existingBooking && !result) {
    const slot = existingBooking.slot;
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white text-lg">✓</span>
          <div>
            <p className="font-bold text-emerald-900">Entretien déjà réservé</p>
            {slot && (
              <p className="text-sm text-emerald-700">
                {formatDate(slot.date)} · {formatTime(slot.start_time)} → {formatTime(slot.end_time)}
              </p>
            )}
          </div>
        </div>

        {existingBooking.zoomJoinUrl && (
          <div className="mt-5">
            <a
              href={existingBooking.zoomJoinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Rejoindre l'entretien Zoom →
            </a>
          </div>
        )}

        <p className="mt-4 text-xs text-emerald-700">
          Un email de confirmation avec le lien Zoom vous a été envoyé.
          En cas de problème, contactez <a href="mailto:contact@prevensia-formation.fr" className="underline">contact@prevensia-formation.fr</a>.
        </p>
      </div>
    );
  }

  // Confirmation après réservation
  if (result) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white text-lg">✓</span>
          <div>
            <p className="font-bold text-emerald-900">Réservation confirmée !</p>
            <p className="text-sm text-emerald-700">
              {formatDate(result.date)} · {formatTime(result.startTime)} → {formatTime(result.endTime)}
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-emerald-200 bg-white p-4">
          <p className="text-sm text-slate-700">
            ✉ Un email de confirmation avec le lien Zoom vous a été envoyé.
          </p>
        </div>

        {result.zoomJoinUrl && (
          <div className="mt-4">
            <a
              href={result.zoomJoinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Rejoindre l'entretien Zoom →
            </a>
          </div>
        )}
      </div>
    );
  }

  // Aucun créneau disponible
  if (availableSlots.length === 0) {
    return (
      <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
        <p className="font-semibold text-amber-900">Aucun créneau disponible pour le moment</p>
        <p className="mt-2 text-sm text-amber-700">
          De nouveaux créneaux seront ajoutés prochainement. Vous pouvez également nous contacter directement pour convenir d'une date.
        </p>
        <a
          href="mailto:contact@prevensia-formation.fr?subject=Demande%20d%27entretien%20de%20validation"
          className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
        >
          Nous contacter →
        </a>
      </div>
    );
  }

  async function handleBook() {
    if (!selectedSlotId || !enrollmentId) return;
    setError(null);
    setBooking(true);
    try {
      const res = await fetch(`/api/interview-slots/${selectedSlotId}/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enrollment_id: enrollmentId }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Erreur lors de la réservation");
        return;
      }
      setResult({
        zoomJoinUrl: data.zoomJoinUrl,
        date: data.date,
        startTime: data.startTime,
        endTime: data.endTime,
      });
    } catch {
      setError("Erreur réseau, veuillez réessayer");
    } finally {
      setBooking(false);
    }
  }

  // Grouper par date
  const byDate = availableSlots.reduce<Record<string, AvailableSlot[]>>((acc, slot) => {
    if (!acc[slot.date]) acc[slot.date] = [];
    acc[slot.date].push(slot);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      <div className="space-y-4">
        {Object.entries(byDate).map(([date, daySlots]) => (
          <div key={date} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="mb-3 font-semibold text-slate-900">{formatDate(date)}</p>
            <div className="flex flex-wrap gap-2">
              {daySlots.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() =>
                    setSelectedSlotId((prev) => (prev === slot.id ? null : slot.id))
                  }
                  className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition ${
                    selectedSlotId === slot.id
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-white"
                  }`}
                >
                  {formatTime(slot.start_time)} → {formatTime(slot.end_time)}
                  {slot.notes && (
                    <span className="ml-2 text-xs opacity-70">({slot.notes})</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        {selectedSlotId ? (
          <div>
            {(() => {
              const s = availableSlots.find((s) => s.id === selectedSlotId)!;
              return (
                <div className="mb-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  <p className="font-semibold">{formatDate(s.date)}</p>
                  <p>{formatTime(s.start_time)} → {formatTime(s.end_time)}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Un lien Zoom sera créé automatiquement et envoyé par email.
                  </p>
                </div>
              );
            })()}
            <button
              type="button"
              onClick={handleBook}
              disabled={booking}
              className="w-full rounded-2xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50"
            >
              {booking ? "Réservation en cours…" : "Confirmer ce créneau →"}
            </button>
          </div>
        ) : (
          <p className="text-center text-sm text-slate-400">
            Sélectionnez un créneau ci-dessus pour confirmer
          </p>
        )}
      </div>
    </div>
  );
}
