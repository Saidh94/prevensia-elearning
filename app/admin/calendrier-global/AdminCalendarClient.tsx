"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import type { EventInput, EventClickArg } from "@fullcalendar/core";
import { useEffect, useState, useRef } from "react";
import frLocale from "@fullcalendar/core/locales/fr";

type VirtualSession = {
  id: string;
  formation: string;
  date: string;
  start_time: string;
  end_time: string;
  location: string;
  seats: number;
  format: string;
  note?: string | null;
  meeting_url?: string | null;
};

type SelectedEvent = {
  title: string;
  start: string;
  end: string;
  type: "interview" | "virtual" | "presentiel";
  invitees?: number;
  limit?: number;
  location?: string;
  note?: string;
  meetingUrl?: string;
  seats?: number;
  learnerName?: string;
  learnerEmail?: string;
};

export function AdminCalendarClient({
  virtualSessions,
}: {
  virtualSessions: VirtualSession[];
}) {
  const [interviewEvents, setInterviewEvents] = useState<EventInput[]>([]);
  const [presentielEvents, setPresentielEvents] = useState<EventInput[]>([]);
  const [selected, setSelected] = useState<SelectedEvent | null>(null);
  const calendarRef = useRef<FullCalendar>(null);

  // Charger les entretiens réservés
  useEffect(() => {
    fetch("/api/admin/interview-bookings")
      .then((r) => r.json())
      .then((data: unknown) => {
        if (Array.isArray(data)) {
          setInterviewEvents(
            (data as EventInput[]).map((ev) => ({
              ...ev,
              backgroundColor: "#10b981",
              borderColor: "#059669",
              textColor: "#fff",
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  // Charger les sessions présentiel
  useEffect(() => {
    fetch("/api/sessions", { cache: "no-store" })
      .then((r) => r.json())
      .then((data: unknown) => {
        if (!Array.isArray(data)) return;
        const events = (
          data as {
            id: string;
            title: string;
            date_start: string;
            format?: string | null;
            places_total: number;
            places_taken: number;
            places_restantes?: number;
          }[]
        ).map((s) => {
          const restantes =
            s.places_restantes ?? s.places_total - s.places_taken;
          return {
            id: s.id,
            title: `${s.title} (${s.places_taken}/${s.places_total})`,
            start: s.date_start,
            allDay: true,
            backgroundColor: "#f97316",
            borderColor: "#ea580c",
            textColor: "#fff",
            extendedProps: {
              type: "presentiel",
              location: s.format ?? "Présentiel",
              seats: s.places_total,
              invitees: s.places_taken,
              limit: s.places_total,
              restantes,
            },
          };
        });
        setPresentielEvents(events);
      })
      .catch(() => {});
  }, []);

  // Sessions virtuelles Supabase → events FullCalendar
  const virtualEvents: EventInput[] = virtualSessions.map((s) => ({
    id: s.id,
    title: s.formation,
    start: `${s.date}T${s.start_time}`,
    end: `${s.date}T${s.end_time}`,
    backgroundColor: "#3b82f6",
    borderColor: "#2563eb",
    textColor: "#fff",
    extendedProps: {
      type: "virtual",
      location: s.location,
      seats: s.seats,
      note: s.note,
      meetingUrl: s.meeting_url,
    },
  }));

  const allEvents: EventInput[] = [
    ...interviewEvents,
    ...virtualEvents,
    ...presentielEvents,
  ];

  function handleEventClick(info: EventClickArg) {
    const p = info.event.extendedProps as {
      type: "interview" | "virtual" | "presentiel";
      invitees?: number;
      limit?: number;
      location?: string;
      note?: string;
      meetingUrl?: string;
      seats?: number;
      learnerName?: string;
      learnerEmail?: string;
    };
    setSelected({
      title: info.event.title,
      start: info.event.startStr,
      end: info.event.endStr,
      type: p.type,
      invitees: p.invitees,
      limit: p.limit,
      location: p.location,
      note: p.note,
      meetingUrl: p.meetingUrl,
      seats: p.seats,
      learnerName: p.learnerName,
      learnerEmail: p.learnerEmail,
    });
  }

  const typeLabel: Record<string, string> = {
    interview: "Entretien de validation",
    virtual: "Session virtuelle",
    presentiel: "Session présentiel",
  };

  const typeBadge: Record<string, string> = {
    interview: "bg-emerald-100 text-emerald-800",
    virtual: "bg-blue-100 text-blue-800",
    presentiel: "bg-orange-100 text-orange-800",
  };

  return (
    <div>
      {/* Calendrier */}
      <div className="fc-prevensia">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
          locale={frLocale}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,listMonth",
          }}
          buttonText={{
            today: "Aujourd'hui",
            month: "Mois",
            week: "Semaine",
            list: "Liste",
          }}
          events={allEvents}
          eventClick={handleEventClick}
          eventDisplay="block"
          dayMaxEvents={4}
          height="auto"
          nowIndicator
        />
      </div>

      {/* Panneau détail événement */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={() => setSelected(null)}>
          <div
            className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${typeBadge[selected.type] ?? "bg-slate-100 text-slate-700"}`}>
                  {typeLabel[selected.type] ?? selected.type}
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {selected.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="shrink-0 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p>
                <span className="font-semibold">Début :</span>{" "}
                {new Date(selected.start).toLocaleString("fr-FR", {
                  weekday: "long", day: "2-digit", month: "long",
                  year: "numeric", hour: "2-digit", minute: "2-digit",
                })}
              </p>
              {selected.end && (
                <p>
                  <span className="font-semibold">Fin :</span>{" "}
                  {new Date(selected.end).toLocaleString("fr-FR", {
                    hour: "2-digit", minute: "2-digit",
                  })}
                </p>
              )}
              {selected.location && (
                <p>
                  <span className="font-semibold">Lieu :</span> {selected.location}
                </p>
              )}
              {selected.learnerName && (
                <p>
                  <span className="font-semibold">Apprenant :</span>{" "}
                  {selected.learnerName}
                  {selected.learnerEmail && (
                    <span className="ml-1 text-slate-500">({selected.learnerEmail})</span>
                  )}
                </p>
              )}
              {selected.invitees !== undefined && selected.limit !== undefined && (
                <p>
                  <span className="font-semibold">Inscrits :</span>{" "}
                  {selected.invitees} / {selected.limit}
                </p>
              )}
              {selected.note && (
                <p className="rounded-xl bg-slate-50 px-3 py-2">
                  {selected.note}
                </p>
              )}
              {selected.meetingUrl && (
                <a
                  href={selected.meetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-blue-700 underline underline-offset-2"
                >
                  Démarrer / Rejoindre la visio →
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-5 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
