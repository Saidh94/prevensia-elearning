import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

// GET — liste tous les créneaux (avec comptage réservations)
export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();
  if (profile?.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { data, error } = await supabase
    .from("interview_slots")
    .select(`
      *,
      interview_bookings(count)
    `)
    .order("date", { ascending: true })
    .order("start_time", { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data ?? []);
}

// POST — créer un créneau
export async function POST(req: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();
  if (profile?.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const body = await req.json();
  const { date, start_time, end_time, formation_type, max_participants, notes } = body;

  if (!date || !start_time || !end_time || !formation_type) {
    return NextResponse.json(
      { error: "Champs obligatoires : date, start_time, end_time, formation_type" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("interview_slots")
    .insert({
      date,
      start_time,
      end_time,
      formation_type,
      max_participants: max_participants ?? 1,
      notes: notes ?? null,
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data, { status: 201 });
}
