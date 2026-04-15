import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const {
    formation_slug,
    chapter_key,
    chapter_order,
    seconds,
    min_seconds_required,
  } = body;

  if (
    !formation_slug ||
    !chapter_key ||
    typeof chapter_order !== "number" ||
    typeof seconds !== "number" ||
    typeof min_seconds_required !== "number"
  ) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  const { data: existing, error: fetchError } = await supabase
    .from("user_chapter_progress")
    .select("*")
    .eq("user_id", user.id)
    .eq("formation_slug", formation_slug)
    .eq("chapter_key", chapter_key)
    .maybeSingle();

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  const newSeconds = (existing?.seconds_spent ?? 0) + seconds;
  const isCompleted = newSeconds >= min_seconds_required;

  if (existing) {
    const { error } = await supabase
      .from("user_chapter_progress")
      .update({
        seconds_spent: newSeconds,
        min_seconds_required,
        is_completed: isCompleted,
        completed_at:
          isCompleted && !existing.completed_at
            ? new Date().toISOString()
            : existing.completed_at,
        updated_at: new Date().toISOString(),
      })
      .eq("id", existing.id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } else {
    const { error } = await supabase.from("user_chapter_progress").insert({
      user_id: user.id,
      formation_slug,
      chapter_key,
      chapter_order,
      seconds_spent: newSeconds,
      min_seconds_required,
      is_completed: isCompleted,
      completed_at: isCompleted ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true });
}