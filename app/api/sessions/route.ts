import { NextResponse } from "next/server";

type SessionRow = {
  id: string;
  title: string;
  date_start: string;
  format?: string | null;
  places_total?: number | null;
};

type RegistrationCountRow = {
  session_id: string | null;
  registered_count: number;
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

    // On ne retourne que les sessions futures (aujourd'hui inclus)
    const today = new Date().toISOString().split("T")[0];
    const sessionsUrl =
      `${supabaseUrl}/rest/v1/sessions` +
      `?select=id,title,date_start,format,places_total&date_start=gte.${today}&order=date_start.asc`;

    // Utilise la vue session_registration_counts (données agrégées uniquement,
    // pas d'accès aux données personnelles des inscrits)
    const countsUrl =
      `${supabaseUrl}/rest/v1/session_registration_counts` +
      `?select=session_id,registered_count`;

    const headers: HeadersInit = {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
    };

    const [sessionsRes, countsRes] = await Promise.all([
      fetch(sessionsUrl, { headers, cache: "no-store" }),
      fetch(countsUrl,   { headers, cache: "no-store" }),
    ]);

    if (!sessionsRes.ok) {
      const errorText = await sessionsRes.text();
      throw new Error(`Erreur sessions : ${errorText}`);
    }

    const sessionsJson: unknown = await sessionsRes.json();

    if (!Array.isArray(sessionsJson)) {
      throw new Error("Réponse sessions invalide");
    }

    const sessions = sessionsJson as SessionRow[];
    let counts: RegistrationCountRow[] = [];

    if (!countsRes.ok) {
      const errorText = await countsRes.text();
      console.warn(
        "[api/sessions] Comptage des inscriptions indisponible, retour sans occupation :",
        errorText
      );
    } else {
      const countsJson: unknown = await countsRes.json();

      if (Array.isArray(countsJson)) {
        counts = countsJson as RegistrationCountRow[];
      } else {
        console.warn(
          "[api/sessions] Réponse comptage invalide, ignoré."
        );
      }
    }

    const countBySession = counts.reduce<Record<string, number>>(
      (acc, row) => {
        const sessionId = row.session_id?.trim();
        if (!sessionId) return acc;
        acc[sessionId] = Number(row.registered_count) || 0;
        return acc;
      },
      {}
    );

    const result = sessions.map((session) => {
      const places_total = session.places_total ?? getMaxPlaces(session);
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
