import { NextResponse } from "next/server";

type SessionRow = {
  id: string;
  title: string;
  date_start: string;
  location?: string | null;
  format?: string | null;
};

type ReservationRow = {
  session_id: string;
};

function getMaxPlaces(session: SessionRow): number {
  const title = (session.title || "").toLowerCase();
  const format = (session.format || "").toLowerCase();
  const location = (session.location || "").toLowerCase();

  const isElearning =
    format.includes("e-learning") ||
    format.includes("elearning") ||
    location.includes("e-learning") ||
    location.includes("elearning");

  const isElectrical =
    title.includes("h0b0") ||
    title.includes("bs") ||
    title.includes("be manœuvre") ||
    title.includes("be manoeuvre") ||
    title.includes("b1") ||
    title.includes("b1v") ||
    title.includes("b2") ||
    title.includes("b2v") ||
    title.includes("br") ||
    title.includes("bc") ||
    title.includes("habilitation électrique") ||
    title.includes("habilitation electrique");

  if (title.includes("sprinkler")) {
    return 6;
  }

  if (title.includes("exploitation ssi") || title === "ssi" || title.includes("formation ssi")) {
    return 12;
  }

  if (
    title.includes("sst") ||
    title.includes("sauveteur secouriste du travail") ||
    title.includes("mac sst")
  ) {
    return 12;
  }

  if (
    title.includes("sécurité incendie") ||
    title.includes("securite incendie") ||
    title.includes("manipulation extincteur") ||
    title.includes("manipulation extincteurs") ||
    title.includes("guide-file") ||
    title.includes("serre-file") ||
    title.includes("equipier de premiere intervention") ||
    title.includes("équipier de première intervention") ||
    title.includes("epi")
  ) {
    return 12;
  }

  if (isElectrical && isElearning) {
    return 20;
  }

  if (isElectrical) {
    return 14;
  }

  return 12;
}

export async function GET() {
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();

    if (!url || !key) {
      return NextResponse.json(
        { error: "Variables Supabase manquantes" },
        { status: 500 }
      );
    }

    const [sessionsResponse, reservationsResponse] = await Promise.all([
      fetch(`${url}/rest/v1/sessions?select=*&order=date_start.asc`, {
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
        cache: "no-store",
      }),
      fetch(`${url}/rest/v1/reservations?select=session_id`, {
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
        cache: "no-store",
      }),
    ]);

    const sessionsText = await sessionsResponse.text();
    const reservationsText = await reservationsResponse.text();

    if (!sessionsResponse.ok) {
      return NextResponse.json(
        {
          error: `Supabase sessions ${sessionsResponse.status} ${sessionsResponse.statusText}`,
          body: sessionsText,
        },
        { status: sessionsResponse.status }
      );
    }

    if (!reservationsResponse.ok) {
      return NextResponse.json(
        {
          error: `Supabase reservations ${reservationsResponse.status} ${reservationsResponse.statusText}`,
          body: reservationsText,
        },
        { status: reservationsResponse.status }
      );
    }

    const sessions: SessionRow[] = JSON.parse(sessionsText);
    const reservations: ReservationRow[] = JSON.parse(reservationsText);

    const reservationsCountBySession = reservations.reduce<Record<string, number>>(
      (acc, reservation) => {
        acc[reservation.session_id] = (acc[reservation.session_id] || 0) + 1;
        return acc;
      },
      {}
    );

    const enrichedSessions = sessions.map((session) => {
      const reserved = reservationsCountBySession[session.id] || 0;
      const maxPlaces = getMaxPlaces(session);
      const places_restantes = Math.max(maxPlaces - reserved, 0);

      return {
        ...session,
        max_places: maxPlaces,
        reserved_count: reserved,
        places_restantes,
      };
    });

    return NextResponse.json(enrichedSessions);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}