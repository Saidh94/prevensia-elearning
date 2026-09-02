import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import {
  canFormationAccessModule,
  getCanonicalModuleSlug,
} from "@/lib/supabase/elearning/module-access";

function getEnrollmentFormationSlug(formation: unknown): string {
  if (Array.isArray(formation)) {
    const first = formation[0] as { slug?: string } | undefined;
    return first?.slug ?? "";
  }

  const single = formation as { slug?: string } | null;
  return single?.slug ?? "";
}

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

  const requestedFormationSlug = getCanonicalModuleSlug(formation_slug);

  if (
    !requestedFormationSlug ||
    !chapter_key ||
    typeof chapter_order !== "number" ||
    typeof seconds !== "number" ||
    typeof min_seconds_required !== "number"
  ) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  // ── Sécurité : plancher server-side pour min_seconds_required ──────────
  // Le client ne peut pas abaisser le seuil en dessous de 30 secondes.
  // Au-dessus de 3600 s (1h) par chapitre, on tronque — valeur aberrante.
  const SERVER_MIN_SECONDS_FLOOR = 30;
  const SERVER_MAX_SECONDS_FLOOR = 3600;
  const safeMinSeconds = Math.max(
    SERVER_MIN_SECONDS_FLOOR,
    Math.min(Math.round(Number(min_seconds_required)), SERVER_MAX_SECONDS_FLOOR)
  );

  // Le nombre de secondes d'une seule session ne peut pas dépasser 2× le seuil
  // (protection contre des valeurs gonflées envoyées d'un coup).
  const safeSeconds = Math.max(
    0,
    Math.min(Math.round(Number(seconds)), safeMinSeconds * 2)
  );

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  const isAdmin = profile?.role === "admin";

  if (!isAdmin) {
    const { data: enrollments, error: enrollmentAccessError } = await supabase
      .from("enrollments")
      .select(`
        id,
        formation:formations (
          slug
        )
      `)
      .eq("user_id", user.id);

    if (enrollmentAccessError) {
      return NextResponse.json(
        { error: enrollmentAccessError.message },
        { status: 500 }
      );
    }

    const hasAccess =
      enrollments?.some((item) =>
        canFormationAccessModule(
          getEnrollmentFormationSlug(item.formation),
          requestedFormationSlug
        )
      ) ?? false;

    if (!hasAccess) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  const { data: existing, error: fetchError } = await supabase
    .from("user_chapter_progress")
    .select("*")
    .eq("user_id", user.id)
    .eq("formation_slug", requestedFormationSlug)
    .eq("chapter_key", chapter_key)
    .maybeSingle();

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  const newSeconds = (existing?.seconds_spent ?? 0) + safeSeconds;
  const isCompleted = newSeconds >= safeMinSeconds;

  if (existing) {
    const { error } = await supabase
      .from("user_chapter_progress")
      .update({
        seconds_spent: newSeconds,
        min_seconds_required: safeMinSeconds,
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
      formation_slug: requestedFormationSlug,
      chapter_key,
      chapter_order,
      seconds_spent: newSeconds,
      min_seconds_required: safeMinSeconds,
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