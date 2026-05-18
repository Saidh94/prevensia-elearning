import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

// GET — tous les entretiens réservés (pour le calendrier admin)
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
    .from("interview_bookings")
    .select(`
      id,
      status,
      zoom_join_url,
      zoom_start_url,
      zoom_meeting_id,
      created_at,
      enrollment_id,
      profiles!inner(first_name, last_name, email),
      interview_slots!inner(
        date,
        start_time,
        end_time,
        formation_type,
        notes
      )
    `)
    .eq("status", "confirmed")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  type SlotShape = {
    date: string;
    start_time: string;
    end_time: string;
    formation_type: string;
    notes: string | null;
  };
  type ProfShape = {
    first_name: string | null;
    last_name: string | null;
    email: string | null;
  };

  // Formater pour FullCalendar
  const events = (data ?? []).map((b) => {
    const rawSlot = b.interview_slots;
    const slot: SlotShape = (Array.isArray(rawSlot) ? rawSlot[0] : rawSlot) as SlotShape;
    const rawProf = b.profiles;
    const prof: ProfShape = (Array.isArray(rawProf) ? rawProf[0] : rawProf) as ProfShape;

    const name = [prof.first_name, prof.last_name].filter(Boolean).join(" ") || prof.email || "Apprenant";
    const typeLabel = slot.formation_type === "h0b0"
      ? "H0B0/H0V"
      : slot.formation_type === "atex"
        ? "ATEX"
        : "Entretien";

    return {
      id: b.id,
      title: `${typeLabel} — ${name}`,
      start: `${slot.date}T${slot.start_time}`,
      end: `${slot.date}T${slot.end_time}`,
      extendedProps: {
        type: "interview",
        location: b.zoom_join_url ?? "",
        meetingUrl: b.zoom_start_url ?? b.zoom_join_url ?? "",
        note: slot.notes ?? "",
        learnerName: name,
        learnerEmail: prof.email ?? "",
        formationType: slot.formation_type,
      },
    };
  });

  return NextResponse.json(events);
}
