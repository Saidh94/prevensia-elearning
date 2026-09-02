import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import {
  canFormationAccessModule,
  getCanonicalModuleSlug,
} from "@/lib/supabase/elearning/module-access";
import { modulesContent } from "@/lib/supabase/elearning/module-content";

/**
 * Retrouve la durée minimale d'un chapitre depuis la configuration interne
 * (ModuleSection.estimatedMinutes). Le client ne contrôle jamais ce seuil.
 *
 * Règle : 80 % du temps estimé, plancher 30 s, plafond 3 600 s.
 * Retourne null si le module ou la section est inconnu(e) (fallback côté client clampé).
 */
function getServerMinSeconds(
  formationSlug: string,
  chapterKey: string
): number | null {
  const module = modulesContent[formationSlug];
  if (!module) return null;
  const section = module.sections.find((s) => s.id === chapterKey);
  if (!section?.estimatedMinutes) return null;
  const computed = Math.round(section.estimatedMinutes * 60 * 0.8);
  return Math.min(Math.max(computed, 30), 3600);
}

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
    // min_seconds_required est accepté du client uniquement comme fallback
    // si le chapitre n'est pas trouvé dans la configuration interne.
    min_seconds_required,
  } = body;

  const requestedFormationSlug = getCanonicalModuleSlug(formation_slug);

  if (
    !requestedFormationSlug ||
    !chapter_key ||
    typeof chapter_order !== "number" ||
    typeof seconds !== "number"
  ) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  // ── Durée minimale : issue de la configuration interne (serveur) ────────
  // La valeur transmise par le client n'est utilisée qu'en fallback si le
  // chapitre n'est pas trouvé dans modulesContent (module sans config).
  const serverMin = getServerMinSeconds(requestedFormationSlug, chapter_key);

  let safeMinSeconds: number;
  if (serverMin !== null) {
    safeMinSeconds = serverMin;
  } else {
    // Fallback : valeur client clampée (plancher 30 s, plafond 3 600 s)
    const clientMin = typeof min_seconds_required === "number" ? min_seconds_required : 30;
    safeMinSeconds = Math.max(30, Math.min(Math.round(clientMin), 3600));
    console.warn(
      `[CHAPTER-PROGRESS] Chapitre "${chapter_key}" (${requestedFormationSlug}) ` +
      `absent de modulesContent — min_seconds client utilisé : ${safeMinSeconds}s`
    );
  }

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