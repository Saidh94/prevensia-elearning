import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/require-admin";

// POST — créer plusieurs créneaux en une fois (génération semaine)
// body: {
//   weekStart: "2026-05-25",       // lundi de la semaine
//   days: [1,2,3,4,5],            // 1=lundi .. 7=dimanche
//   timeRanges: [{ from: "09:00", to: "12:00" }, { from: "14:00", to: "17:00" }],
//   slotDuration: 30,              // minutes
//   formation_type: "h0b0",
//   notes?: string
// }
export async function POST(req: Request) {
  const supabase = await createClient();
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;
  const { userId } = auth;


  const body = await req.json();
  const {
    weekStart,
    days,
    timeRanges,
    slotDuration = 30,
    formation_type,
    notes,
  } = body as {
    weekStart: string;
    days: number[];
    timeRanges: { from: string; to: string }[];
    slotDuration: number;
    formation_type: string;
    notes?: string;
  };

  if (!weekStart || !days?.length || !timeRanges?.length || !formation_type) {
    return NextResponse.json(
      { error: "Champs requis : weekStart, days, timeRanges, formation_type" },
      { status: 400 }
    );
  }

  // Générer toutes les dates + créneaux
  const slots: { date: string; start_time: string; end_time: string; formation_type: string; max_participants: number; notes: string | null }[] = [];

  const monday = new Date(weekStart);
  // S'assurer qu'on part bien d'un lundi (day 1)
  monday.setHours(12, 0, 0, 0);

  for (const dayNum of days) {
    // dayNum: 1=lundi, 2=mardi, ..., 7=dimanche
    const dayDate = new Date(monday);
    dayDate.setDate(monday.getDate() + (dayNum - 1));
    const dateStr = dayDate.toISOString().split("T")[0];

    for (const range of timeRanges) {
      // Générer les créneaux de slotDuration min dans la plage
      const [fh, fm] = range.from.split(":").map(Number);
      const [th, tm] = range.to.split(":").map(Number);
      let current = fh * 60 + fm;
      const end = th * 60 + tm;

      while (current + slotDuration <= end) {
        const sh = Math.floor(current / 60);
        const sm = current % 60;
        const eh = Math.floor((current + slotDuration) / 60);
        const em = (current + slotDuration) % 60;

        slots.push({
          date: dateStr,
          start_time: `${String(sh).padStart(2, "0")}:${String(sm).padStart(2, "0")}`,
          end_time: `${String(eh).padStart(2, "0")}:${String(em).padStart(2, "0")}`,
          formation_type,
          max_participants: 1,
          notes: notes ?? null,
        });

        current += slotDuration;
      }
    }
  }

  if (slots.length === 0) {
    return NextResponse.json({ error: "Aucun créneau généré" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("interview_slots")
    .insert(slots)
    .select();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ created: data?.length ?? 0, slots: data }, { status: 201 });
}
