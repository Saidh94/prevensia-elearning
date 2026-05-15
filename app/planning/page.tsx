import Link from "next/link";
import PlanningClient from "./PlanningClient";

type SessionRow = {
  id: string;
  title: string;
  date_start: string;
  format?: string | null;
};

type RegistrationCountRow = {
  session_id: string | null;
  registered_count: number;
};

type Session = {
  id: string;
  title: string;
  date_start: string;
  format?: string | null;
  places_total: number;
  places_taken: number;
  places_restantes: number;
};

function getMaxPlaces(session: SessionRow): number {
  const title = (session.title ?? "").toLowerCase();
  const format = (session.format ?? "").toLowerCase();

  if (title.includes("sprinkler")) return 6;
  if (title.includes("ssi")) return 12;
  if (title.includes("sst") || title.includes("secouriste")) return 12;
  if (
    title.includes("incendie") ||
    title.includes("extincteur") ||
    title.includes("guide-file") ||
    title.includes("serre-file") ||
    title.includes("epi")
  ) {
    return 12;
  }
  if (
    title.includes("h0b0") ||
    title.includes("bs") ||
    title.includes("be man") ||
    title.includes("b1") ||
    title.includes("b2") ||
    title.includes("br") ||
    title.includes("bc")
  ) {
    const isElearning =
      title.includes("e-learning") ||
      title.includes("elearning") ||
      title.includes("distanciel") ||
      format.includes("e-learning") ||
      format.includes("elearning") ||
      format.includes("distanciel") ||
      format.includes("en ligne");
    return isElearning ? 20 : 14;
  }
  return 12;
}

function isElearningSession(session: SessionRow): boolean {
  const title = (session.title ?? "").toLowerCase().trim();
  const format = (session.format ?? "").toLowerCase().trim();

  const elearningTitle =
    title.includes("h0b0") ||
    title.includes("bs / be") ||
    title.includes("bs/be") ||
    title.includes("bs et be manoeuvre") ||
    title.includes("b1 b1v b2 b2v br bc") ||
    title.includes("b1 / b1v / b2 / b2v / br / bc") ||
    title.includes("habilitation électrique h0b0") ||
    title.includes("habilitation electrique h0b0");

  const elearningFormat =
    format.includes("e-learning") ||
    format.includes("elearning") ||
    format.includes("en ligne") ||
    format.includes("distanciel");

  return elearningTitle || elearningFormat;
}

async function fetchSessions(): Promise<Session[]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!supabaseUrl || !supabaseAnonKey) return [];

  const headers: HeadersInit = {
    apikey: supabaseAnonKey,
    Authorization: `Bearer ${supabaseAnonKey}`,
    "Content-Type": "application/json",
  };

  const [sessionsRes, countsRes] = await Promise.all([
    fetch(
      `${supabaseUrl}/rest/v1/sessions?select=id,title,date_start,format&order=date_start.asc`,
      { headers, next: { revalidate: 300 } }
    ),
    fetch(
      `${supabaseUrl}/rest/v1/session_registration_counts?select=session_id,registered_count`,
      { headers, next: { revalidate: 300 } }
    ),
  ]);

  if (!sessionsRes.ok) return [];

  const sessionsJson: unknown = await sessionsRes.json();
  if (!Array.isArray(sessionsJson)) return [];
  const sessions = sessionsJson as SessionRow[];

  let counts: RegistrationCountRow[] = [];
  if (countsRes.ok) {
    const countsJson: unknown = await countsRes.json();
    if (Array.isArray(countsJson)) counts = countsJson as RegistrationCountRow[];
  }

  const countBySession = counts.reduce<Record<string, number>>((acc, row) => {
    const sessionId = row.session_id?.trim();
    if (!sessionId) return acc;
    acc[sessionId] = Number(row.registered_count) || 0;
    return acc;
  }, {});

  return sessions
    .filter((s) => !isElearningSession(s))
    .map((session) => {
      const places_total = getMaxPlaces(session);
      const places_taken = countBySession[session.id] ?? 0;
      return {
        id: session.id,
        title: session.title,
        date_start: session.date_start,
        format: session.format ?? null,
        places_total,
        places_taken,
        places_restantes: Math.max(places_total - places_taken, 0),
      };
    });
}

export default async function PlanningPage() {
  const sessions = await fetchSessions();

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
            PREVENSIA FORMATION
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Sessions en présentiel
          </h1>

          <p className="mt-4 text-slate-600">
            Consultez les prochaines sessions en présentiel et réservez votre
            place ou contactez-nous pour une organisation sur mesure.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/elearning"
              className="inline-flex rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              Voir les formations e-learning
            </Link>

            <Link
              href="/demande-devis"
              className="inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        <PlanningClient sessions={sessions} />
      </div>
    </main>
  );
}
