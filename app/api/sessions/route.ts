import { NextResponse } from "next/server";

type SessionRow = {
  id: string;
  title: string;
  date_start: string;
  location?: string | null;
};

type RegistrationRow = {
  session_id: string;
};

function getMaxPlaces(session: SessionRow): number {
  const title = (session.title || "").toLowerCase();

  // 🔥 Capacités définies par toi
  if (title.includes("sprinkler")) return 6;

  if (title.includes("ssi")) return 12;

  if (
    title.includes("sst") ||
    title.includes("secouriste")
  ) return 12;

  if (
    title.includes("incendie") ||
    title.includes("extincteur") ||
    title.includes("guide-file") ||
    title.includes("serre-file") ||
    title.includes("epi")
  ) return 12;

  if (
    title.includes("h0b0") ||
    title.includes("bs") ||
    title.includes("be man") ||
    title.includes("b1") ||
    title.includes("b2") ||
    title.includes("br") ||
    title.includes("bc")
  ) {
    // ⚠️ e-learning vs présentiel
    if (title.includes("e-learning")) return 20;
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

    const [sessionsRes, registrationsRes] = await Promise.all([
      fetch(`${url}/rest/v1/sessions?select=*&order=date_start.asc`, {
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
        cache: "no-store",
      }),
      fetch(`${url}/rest/v1/registrations?select=session_id`, {
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
        cache: "no-store",
      }),
    ]);

    const sessions = await sessionsRes.json();
    const registrations: RegistrationRow[] = await registrationsRes.json();

    if (!sessionsRes.ok) {
      throw new Error("Erreur sessions");
    }

    if (!registrationsRes.ok) {
      throw new Error("Erreur registrations");
    }

    const countBySession = registrations.reduce<Record<string, number>>(
      (acc, r) => {
        acc[r.session_id] = (acc[r.session_id] || 0) + 1;
        return acc;
      },
      {}
    );

    const result = sessions.map((s: SessionRow) => {
      const reserved = countBySession[s.id] || 0;
      const max = getMaxPlaces(s);

      return {
        ...s,
        places_restantes: Math.max(max - reserved, 0),
      };
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}