import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

// GET — créneaux disponibles pour un apprenant connecté
// ?type=h0b0  ou  ?type=atex  (filtre optionnel)
export async function GET(req: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const url = new URL(req.url);
  const formationType = url.searchParams.get("type"); // optionnel

  // Récupérer les créneaux futurs avec leur nombre de réservations confirmées
  let query = supabase
    .from("interview_slots")
    .select(`
      id,
      date,
      start_time,
      end_time,
      formation_type,
      max_participants,
      notes,
      interview_bookings(count)
    `)
    .gte("date", new Date().toISOString().split("T")[0]) // seulement les futurs
    .order("date", { ascending: true })
    .order("start_time", { ascending: true });

  if (formationType) {
    query = query.or(`formation_type.eq.${formationType},formation_type.eq.both`);
  }

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Filtrer les créneaux non pleins
  const available = (data ?? []).filter((slot) => {
    const booked =
      Array.isArray(slot.interview_bookings)
        ? (slot.interview_bookings[0] as { count: number })?.count ?? 0
        : 0;
    return booked < slot.max_participants;
  });

  return NextResponse.json(available);
}
