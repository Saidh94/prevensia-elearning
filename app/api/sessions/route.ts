import { NextResponse } from "next/server";

type SessionRow = {
  id: string;
  title: string;
  date_start: string;
};

type RegistrationRow = {
  session_id: string | null;
};

function getMaxPlaces(session: SessionRow): number {
  const title = (session.title || "").toLowerCase();

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
    if (
      title.includes("e-learning") ||
      title.includes("elearning") ||
      title.includes("distanciel")
    ) {
      return 20;
    }

    return 14;
  }

  return 12;
}

export async function GET() {
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
    const key =
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

    if (!url || !key) {
      return NextResponse.json(
        { error: "Variables Supabase manquantes" },
        { status: 500 }
      );
    }

    const sessionsUrl = `${url}/rest/v1/sessions?select=id,title,date_start&order=date_start.asc`;
    const registrationsUrl = `${url}/rest/v1/registrations?select=session_id`;

    const headers = {
      apikey: key,
      Authorization: `Bearer ${key}`,
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

    const sessions = (await sessionsRes.json()) as SessionRow[];
    const registrations = (await registrationsRes.json()) as RegistrationRow[];

    const countBySession = registrations.reduce<Record<string, number>>(
      (acc, registration) => {
        if (!registration.session_id) return acc;

        acc[registration.session_id] =
          (acc[registration.session_id] || 0) + 1;

        return acc;
      },
      {}
    );

    const result = sessions.map((session) => {
      const places_total = getMaxPlaces(session);
      const places_taken = countBySession[session.id] || 0;
      const places_restantes = Math.max(places_total - places_taken, 0);

      return {
        id: session.id,
        title: session.title,
        date_start: session.date_start,
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