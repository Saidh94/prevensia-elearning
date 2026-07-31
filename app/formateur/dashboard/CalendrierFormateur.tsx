"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import frLocale from "@fullcalendar/core/locales/fr";
import type { EventInput, EventClickArg } from "@fullcalendar/core";
import { useState } from "react";

type Session = {
  id: string;
  formation: string;
  date: string;
  start_time: string;
  end_time: string;
  meeting_url: string | null;
  note: string | null;
  presences: { user_id: string }[];
};

type Selected = {
  title: string;
  start: string;
  end: string;
  meetingUrl: string | null;
  note: string | null;
  stagiaires: number;
};

function isToday(d: string) {
  return d === new Date().toISOString().split("T")[0];
}

export default function CalendrierFormateur({ sessions }: { sessions: Session[] }) {
  const [selected, setSelected] = useState<Selected | null>(null);

  const events: EventInput[] = sessions.map(s => ({
    id:    s.id,
    title: s.formation,
    start: `${s.date}T${s.start_time}`,
    end:   `${s.date}T${s.end_time}`,
    backgroundColor: isToday(s.date) ? "#b91c1c" : "#7c3aed",
    borderColor:     isToday(s.date) ? "#991b1b" : "#6d28d9",
    textColor: "#fff",
    extendedProps: {
      meetingUrl: s.meeting_url,
      note:       s.note,
      stagiaires: s.presences.length,
    },
  }));

  function handleClick(info: EventClickArg) {
    const p = info.event.extendedProps as {
      meetingUrl: string | null;
      note: string | null;
      stagiaires: number;
    };
    setSelected({
      title:      info.event.title,
      start:      info.event.startStr,
      end:        info.event.endStr,
      meetingUrl: p.meetingUrl,
      note:       p.note,
      stagiaires: p.stagiaires,
    });
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">📅 Mon planning</h2>
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-700"></span>
            Aujourd&apos;hui
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-purple-600"></span>
            Session assignée
          </span>
        </div>
      </div>

      <div className="p-4 fc-formateur">
        <style>{`
          .fc-formateur .fc-toolbar-title { font-size: 1rem; font-weight: 700; color: #0f172a; }
          .fc-formateur .fc-button { background: #0f172a; border-color: #0f172a; font-size: 0.75rem; padding: 4px 10px; border-radius: 8px; }
          .fc-formateur .fc-button:hover { background: #1e293b; }
          .fc-formateur .fc-button-active { background: #b91c1c !important; border-color: #b91c1c !important; }
          .fc-formateur .fc-event { border-radius: 6px; font-size: 0.7rem; font-weight: 600; padding: 1px 4px; cursor: pointer; }
          .fc-formateur .fc-day-today { background: #fef2f2 !important; }
          .fc-formateur .fc-list-event:hover td { background: #f8fafc; }
        `}</style>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
          locale={frLocale}
          initialView="dayGridMonth"
          headerToolbar={{
            left:   "prev,next today",
            center: "title",
            right:  "dayGridMonth,timeGridWeek,listMonth",
          }}
          buttonText={{ today: "Aujourd'hui", month: "Mois", week: "Semaine", list: "Liste" }}
          events={events}
          eventClick={handleClick}
          height="auto"
          dayMaxEvents={3}
          nowIndicator
        />
      </div>

      {/* Modal détail session */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setSelected(null)}>
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl"
            onClick={e => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-3 mb-4">
              <h3 className="text-lg font-bold text-slate-900">{selected.title}</h3>
              <button onClick={() => setSelected(null)}
                className="shrink-0 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">✕</button>
            </div>

            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <span className="font-semibold">Date : </span>
                {new Date(selected.start).toLocaleDateString("fr-FR", {
                  weekday: "long", day: "numeric", month: "long", year: "numeric",
                })}
              </p>
              <p>
                <span className="font-semibold">Horaire : </span>
                {new Date(selected.start).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                {" – "}
                {new Date(selected.end).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
              </p>
              <p>
                <span className="font-semibold">Stagiaires : </span>
                {selected.stagiaires} inscrit{selected.stagiaires > 1 ? "s" : ""}
              </p>
              {selected.note && (
                <p className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">{selected.note}</p>
              )}
            </div>

            {selected.meetingUrl && (
              <a href={selected.meetingUrl} target="_blank" rel="noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-red-700 py-3 text-sm font-bold text-white hover:bg-red-800">
                🎥 Rejoindre la session →
              </a>
            )}

            <button onClick={() => setSelected(null)}
              className="mt-3 w-full rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
