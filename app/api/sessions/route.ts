import { NextResponse } from "next/server";

type SessionRow = {
  id: string;
  title: string;
  date_start: string;
  format?: string | null;
};

type RegistrationRow = {
  session_id: string | null;
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

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json(
        { error: "Variables Supabase manquantes" },
        { status: 500 }
      );
    }

    const sessionsUrl =
      `${supabaseUrl}/rest/v1/sessions` +
      `?select=id,title,date_start,format&order=date_start.asc`;

    const registrationsUrl =
      `${supabaseUrl}/rest/v1/registrations` +
      `?select=session_id`;

    const headers: HeadersInit = {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
    };

    const [sessionsRes, registrationsRes] = await Promise.all([
      fetch(sessionsUrl, {
        headers,
        cache: "no-store",
      }),
      fetch(registrationsUrl, {
        headers,
        cache: "no-store",
      }),
    ]);

    if (!sessionsRes.ok) {
      const errorText = await sessionsRes.text();
      throw new Error(`Erreur sessions : ${errorText}`);
    }

    if (!registrationsRes.ok) {
      const errorText = await registrationsRes.text();
      throw new Error(`Erreur registrations : ${errorText}`);
    }

    const sessionsJson: unknown = await sessionsRes.json();
    const registrationsJson: unknown = await registrationsRes.json();

    if (!Array.isArray(sessionsJson)) {
      throw new Error("Réponse sessions invalide");
    }

    if (!Array.isArray(registrationsJson)) {
      throw new Error("Réponse registrations invalide");
    }

    const sessions = sessionsJson as SessionRow[];
    const registrations = registrationsJson as RegistrationRow[];

    const countBySession = registrations.reduce<Record<string, number>>(
      (acc, registration) => {
        const sessionId = registration.session_id?.trim();

        if (!sessionId) return acc;

        acc[sessionId] = (acc[sessionId] ?? 0) + 1;
        return acc;
      },
      {}
    );

    const result = sessions.map((session) => {
      const places_total = getMaxPlaces(session);
      const places_taken = countBySession[session.id] ?? 0;
      const places_restantes = Math.max(places_total - places_taken, 0);

      return {
        id: session.id,
        title: session.title,
        date_start: session.date_start,
        format: session.format ?? null,
        places_total,
        places_taken,
        places_restantes,
      };
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}