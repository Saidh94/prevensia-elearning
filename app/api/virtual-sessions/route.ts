import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { ReservationSlot } from "@/app/reservation/slots";

type VirtualSessionRow = {
  id: string;
  formation: string;
  date: string;
  start_time: string;
  end_time: string;
  location: string;
  seats: number;
  format: string;
  audience: string;
  category: string;
  min_participants: number;
  note: string | null;
  meeting_url: string | null;
};

function rowToSlot(row: VirtualSessionRow): ReservationSlot {
  return {
    id: row.id,
    formation: row.formation,
    date: row.date,
    startTime: row.start_time,
    endTime: row.end_time,
    location: row.location,
    seats: row.seats,
    format: row.format as ReservationSlot["format"],
    audience: row.audience as ReservationSlot["audience"],
    category: row.category as ReservationSlot["category"],
    minParticipants: row.min_participants,
    note: row.note ?? undefined,
    meetingUrl: row.meeting_url ?? undefined,
  };
}

// ─── GET : lecture publique des créneaux ──────────────────────────────────────

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

    const url =
      `${supabaseUrl}/rest/v1/virtual_sessions` +
      `?select=*&order=date.asc,start_time.asc`;

    const res = await fetch(url, {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Erreur Supabase : ${text}`);
    }

    const data: unknown = await res.json();

    if (!Array.isArray(data)) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(
      (data as VirtualSessionRow[]).map(rowToSlot),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur inconnue" },
      { status: 500 }
    );
  }
}

// ─── POST : création d'un créneau (admin seulement) ──────────────────────────

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle<{ role: string | null }>();

    if (profile?.role !== "admin") {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    const adminClient = createAdminClient();
    if (!adminClient) {
      return NextResponse.json(
        { error: "Admin client manquant" },
        { status: 500 }
      );
    }

    const body = await request.json();

    const { data, error } = await adminClient
      .from("virtual_sessions")
      .insert({
        formation: String(body.formation ?? ""),
        date: String(body.date ?? ""),
        start_time: String(body.startTime ?? ""),
        end_time: String(body.endTime ?? ""),
        location: String(body.location ?? ""),
        seats: Number(body.seats ?? 1),
        format: String(body.format ?? "in_person"),
        audience: String(body.audience ?? "both"),
        category: String(body.category ?? "other"),
        min_participants: Number(body.minParticipants ?? 1),
        note: body.note ? String(body.note) : null,
        meeting_url: body.meetingUrl ? String(body.meetingUrl) : null,
      })
      .select("*")
      .single<VirtualSessionRow>();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(rowToSlot(data), { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur inconnue" },
      { status: 500 }
    );
  }
}

// ─── DELETE : suppression d'un créneau (admin seulement) ─────────────────────

export async function DELETE(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle<{ role: string | null }>();

    if (profile?.role !== "admin") {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    const adminClient = createAdminClient();
    if (!adminClient) {
      return NextResponse.json(
        { error: "Admin client manquant" },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Paramètre id manquant" }, { status: 400 });
    }

    const { error } = await adminClient
      .from("virtual_sessions")
      .delete()
      .eq("id", id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur inconnue" },
      { status: 500 }
    );
  }
}
