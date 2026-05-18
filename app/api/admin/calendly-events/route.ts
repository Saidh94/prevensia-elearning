import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

// Calendly scheduled events via API v2
export async function GET() {
  // Auth check — admin only
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const token = process.env.CALENDLY_API_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "CALENDLY_API_TOKEN non configuré" },
      { status: 500 }
    );
  }

  try {
    // 1. Récupérer l'URI de l'utilisateur Calendly
    const meRes = await fetch("https://api.calendly.com/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!meRes.ok) {
      return NextResponse.json(
        { error: "Token Calendly invalide ou expiré" },
        { status: 502 }
      );
    }

    const meData = (await meRes.json()) as { resource: { uri: string } };
    const userUri = meData.resource.uri;

    // 2. Récupérer les événements planifiés (30 jours passés + 90 jours futurs)
    const minStart = new Date();
    minStart.setDate(minStart.getDate() - 30);
    const maxStart = new Date();
    maxStart.setDate(maxStart.getDate() + 90);

    const params = new URLSearchParams({
      user: userUri,
      min_start_time: minStart.toISOString(),
      max_start_time: maxStart.toISOString(),
      status: "active",
      count: "100",
      sort: "start_time:asc",
    });

    const eventsRes = await fetch(
      `https://api.calendly.com/scheduled_events?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!eventsRes.ok) {
      const errText = await eventsRes.text();
      return NextResponse.json(
        { error: `Calendly API error: ${errText}` },
        { status: 502 }
      );
    }

    const eventsData = (await eventsRes.json()) as {
      collection: {
        uri: string;
        name: string;
        start_time: string;
        end_time: string;
        status: string;
        invitees_counter: { active: number; limit: number };
        location?: { type: string; location?: string; join_url?: string };
      }[];
    };

    // 3. Formater pour FullCalendar
    const events = eventsData.collection.map((ev) => ({
      id: ev.uri,
      title: ev.name,
      start: ev.start_time,
      end: ev.end_time,
      extendedProps: {
        type: "calendly",
        invitees: ev.invitees_counter.active,
        limit: ev.invitees_counter.limit,
        location: ev.location?.location ?? ev.location?.join_url ?? "",
      },
    }));

    return NextResponse.json(events);
  } catch (err) {
    console.error("Calendly fetch error:", err);
    return NextResponse.json(
      { error: "Erreur réseau Calendly" },
      { status: 500 }
    );
  }
}
