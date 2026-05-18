import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { createZoomMeeting } from "@/lib/zoom";

export const runtime = "nodejs";

// POST — génère une réunion Zoom à la demande (admin)
// body: { topic, date, start_time, end_time }
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
  const topic = String(body?.topic ?? "Session PREVENSIA FORMATION").trim();
  const date = String(body?.date ?? "").trim();
  const startTime = String(body?.start_time ?? "09:00").trim();
  const endTime = String(body?.end_time ?? "10:00").trim();

  if (!date) {
    return NextResponse.json({ error: "date requis" }, { status: 400 });
  }

  // Calcul durée en minutes
  const [sh, sm] = startTime.split(":").map(Number);
  const [eh, em] = endTime.split(":").map(Number);
  const durationMinutes = Math.max(30, (eh * 60 + em) - (sh * 60 + sm));

  try {
    const meeting = await createZoomMeeting({
      topic,
      startTime: `${date}T${startTime}:00`,
      durationMinutes,
    });

    return NextResponse.json({
      joinUrl: meeting.joinUrl,
      startUrl: meeting.startUrl,
      meetingId: meeting.meetingId,
      password: meeting.password,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
