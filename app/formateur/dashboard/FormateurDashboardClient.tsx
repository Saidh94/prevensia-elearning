"use client";

import { useState } from "react";
import Link from "next/link";
import FacturesFormateur from "./FacturesFormateur";

type Profile = { first_name: string | null; last_name: string | null; email: string | null };
type Enrollment = { id: string; status: string | null; module_slug: string | null } | null;
type Presence = { user_id: string; present: boolean; validated_at: string | null; profile: Profile | null; enrollment: Enrollment };
type Session = {
  id: string; formation: string; date: string; start_time: string; end_time: string;
  format: string; meeting_url: string | null; note: string | null; seats: number;
  category: string; presences: Presence[];
};
type Formateur = { id: string; prenom: string; nom: string; specialites: string[] };

function formatDate(d: string) {
  return new Date(d + "T00:00:00").toLocaleDateString("fr-FR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });
}

function isToday(d: string) {
  return d === new Date().toISOString().split("T")[0];
}

function isTomorrow(d: string) {
  const t = new Date(); t.setDate(t.getDate() + 1);
  return d === t.toISOString().split("T")[0];
}

export default function FormateurDashboardClient({
  formateur, upcoming, past, userEmail,
}: {
  formateur: Formateur; upcoming: Session[]; past: Session[]; userEmail: string;
})
 {
  const [activeSession, setActiveSession] = useState<string | null>(
    upcoming.find(s => isToday(s.date))?.id ?? upcoming[0]?.id ?? past[0]?.id ?? null
  );
  const [presenceState, setPresenceState] = useState<Record<string, Record<string, boolean>>>({});
  const [submitting,    setSubmitting]    = useState<string | null>(null);
  const [validated,     setValidated]     = useState<Set<string>>(new Set());
  const [error,         setError]         = useState("");

  const allSessions = [...upcoming, ...past];
  const currentSession = allSessions.find(s => s.id === activeSession);

  function getPresence(sessionId: string, userId: string, defaultVal: boolean) {
    return presenceState[sessionId]?.[userId] ?? defaultVal;
  }

  function togglePresence(sessionId: string, userId: string, current: boolean) {
    setPresenceState(prev => ({
      ...prev,
      [sessionId]: { ...(prev[sessionId] ?? {}), [userId]: !current },
    }));
  }

  async function handleValidate(session: Session) {
    if (session.presences.length === 0) {
      setError("Aucun stagiaire inscrit à cette session."); return;
    }
    setSubmitting(session.id); setError("");
    try {
      const presences = session.presences.map(p => ({
        user_id:      p.user_id,
        enrollment_id: p.enrollment?.id ?? null,
        present:      getPresence(session.id, p.user_id, p.present),
      }));

      const res = await fetch("/api/formateur/valider-presence", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: session.id, formateur_id: formateur.id, presences }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setValidated(prev => new Set([...prev, session.id]));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur");
    } finally { setSubmitting(null); }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3">
          <Link href="/" className="rounded-md bg-red-700 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
            Prévensia
          </Link>
          <span className="text-xs text-slate-400">Espace formateur</span>
          <div className="flex-1" />
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-900">{formateur.prenom} {formateur.nom}</p>
            <p className="text-xs text-slate-400">{userEmail}</p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Colonne gauche — liste des sessions */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-400 px-1">Mes sessions</h2>

          {upcoming.length === 0 && past.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white py-8 text-center">
              <p className="text-3xl">📅</p>
              <p className="mt-2 text-sm text-slate-500">Aucune session assignée</p>
            </div>
          )}

          {upcoming.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-500 px-1">À venir</p>
              {upcoming.map(s => (
                <SessionCard key={s.id} s={s} active={activeSession === s.id}
                  onClick={() => setActiveSession(s.id)} validated={validated.has(s.id)} />
              ))}
            </div>
          )}

          {past.length > 0 && (
            <div className="space-y-2 mt-4">
              <p className="text-xs font-semibold text-slate-500 px-1">Passées (30j)</p>
              {past.map(s => (
                <SessionCard key={s.id} s={s} active={activeSession === s.id}
                  onClick={() => setActiveSession(s.id)} validated={validated.has(s.id)} />
              ))}
            </div>
          )}
        </div>

        {/* Colonne droite — détail session */}
        <div className="lg:col-span-2">
          {!currentSession ? (
            <div className="rounded-2xl border border-slate-200 bg-white py-16 text-center">
              <p className="text-3xl">👈</p>
              <p className="mt-2 text-sm text-slate-500">Sélectionnez une session</p>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              {/* En-tête session */}
              <div className={`px-6 py-5 ${isToday(currentSession.date) ? "bg-red-700" : "bg-slate-800"}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {isToday(currentSession.date) && (
                      <span className="inline-block mb-2 rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold text-white">
                        🔴 AUJOURD&apos;HUI
                      </span>
                    )}
                    {isTomorrow(currentSession.date) && (
                      <span className="inline-block mb-2 rounded-full bg-amber-400 px-3 py-0.5 text-xs font-bold text-amber-900">
                        Demain
                      </span>
                    )}
                    <h2 className="text-lg font-bold text-white">{currentSession.formation}</h2>
                    <p className="text-sm text-white/70 mt-0.5 capitalize">{formatDate(currentSession.date)}</p>
                    <p className="text-sm text-white/80">{currentSession.start_time} – {currentSession.end_time}</p>
                  </div>
                  {currentSession.meeting_url && (
                    <a href={currentSession.meeting_url} target="_blank" rel="noreferrer"
                      className="shrink-0 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-red-700 hover:bg-red-50">
                      🎥 Rejoindre →
                    </a>
                  )}
                </div>
                {currentSession.note && (
                  <p className="mt-3 text-xs text-white/60 border-t border-white/10 pt-3">{currentSession.note}</p>
                )}
              </div>

              {/* Corps — liste stagiaires + présences */}
              <div className="px-6 py-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-800">
                    Stagiaires ({currentSession.presences.length})
                  </h3>
                  {validated.has(currentSession.id) && (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                      ✅ Présences validées
                    </span>
                  )}
                </div>

                {currentSession.presences.length === 0 ? (
                  <p className="text-sm text-slate-400 italic py-4 text-center">
                    Aucun stagiaire inscrit à cette session pour le moment.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {currentSession.presences.map(p => {
                      const name = [p.profile?.first_name, p.profile?.last_name].filter(Boolean).join(" ") || "—";
                      const isPresent = getPresence(currentSession.id, p.user_id, p.present);
                      const alreadyValidated = !!p.validated_at || validated.has(currentSession.id);

                      return (
                        <div key={p.user_id}
                          className={`flex items-center gap-4 rounded-xl border px-4 py-3 transition-colors ${
                            isPresent ? "border-green-200 bg-green-50" : "border-red-100 bg-red-50"
                          }`}>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-slate-900">{name}</p>
                            <p className="text-xs text-slate-500">{p.profile?.email ?? "—"}</p>
                            {p.enrollment?.status && (
                              <p className="text-xs text-slate-400 mt-0.5">
                                Statut formation : {p.enrollment.status}
                              </p>
                            )}
                          </div>
                          {!alreadyValidated ? (
                            <button
                              onClick={() => togglePresence(currentSession.id, p.user_id, isPresent)}
                              className={`shrink-0 rounded-xl border px-3 py-1.5 text-xs font-bold transition-colors ${
                                isPresent
                                  ? "border-green-300 bg-green-100 text-green-800 hover:bg-red-50 hover:border-red-200 hover:text-red-700"
                                  : "border-red-200 bg-red-100 text-red-800 hover:bg-green-50 hover:border-green-200 hover:text-green-700"
                              }`}>
                              {isPresent ? "✅ Présent" : "❌ Absent"}
                            </button>
                          ) : (
                            <span className={`shrink-0 rounded-xl px-3 py-1.5 text-xs font-bold ${
                              isPresent ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"
                            }`}>
                              {isPresent ? "✅ Présent" : "❌ Absent"}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {error && (
                  <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
                )}

                {!validated.has(currentSession.id) && currentSession.presences.length > 0 && (
                  <button
                    onClick={() => handleValidate(currentSession)}
                    disabled={submitting === currentSession.id}
                    className="mt-5 w-full rounded-xl bg-red-700 px-6 py-3.5 text-sm font-bold text-white hover:bg-red-800 disabled:opacity-50 transition-colors"
                  >
                    {submitting === currentSession.id
                      ? "Validation en cours…"
                      : "✅ Valider les présences et générer les attestations"}
                  </button>
                )}

                {validated.has(currentSession.id) && (
                  <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-center">
                    <p className="text-sm font-bold text-green-800">Attestations générées !</p>
                    <p className="text-xs text-green-700 mt-1">
                      Les stagiaires présents ont reçu leur attestation par email.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Section factures */}
      <div className="mx-auto max-w-6xl px-6 pb-8">
        <FacturesFormateur
          formateurId={formateur.id}
          sessions={[...upcoming, ...past].map(s => ({ id: s.id, formation: s.formation, date: s.date }))}
        />
      </div>
    </div>
  );
}

function SessionCard({ s, active, onClick, validated }: {
  s: Session; active: boolean; onClick: () => void; validated: boolean;
}) {
  const today = isToday(s.date);
  const tomor = isTomorrow(s.date);
  const isPast = s.date < new Date().toISOString().split("T")[0];

  return (
    <button onClick={onClick} className={`w-full rounded-2xl border p-4 text-left transition-all ${
      active ? "border-red-300 bg-red-50 shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"
    }`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-slate-800 truncate">{s.formation}</p>
          <p className="text-xs text-slate-500 mt-0.5 capitalize">{formatDate(s.date)}</p>
          <p className="text-xs text-slate-400">{s.start_time} – {s.end_time}</p>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          {today && <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-700">Aujourd&apos;hui</span>}
          {tomor && <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">Demain</span>}
          {validated && <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">✅ Validé</span>}
          {isPast && !validated && <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">Passée</span>}
          <span className="text-[10px] text-slate-400">{s.presences.length} stagiaire{s.presences.length > 1 ? "s" : ""}</span>
        </div>
      </div>
      {s.meeting_url && (
        <div className="mt-2 flex items-center gap-1">
          <span className="text-[10px] text-blue-600 font-medium">🎥 Classe virtuelle</span>
        </div>
      )}
    </button>
  );
}
