import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import {
  canFormationAccessModule,
  getCanonicalModuleSlug,
} from "@/lib/supabase/elearning/module-access";
import { modulesContent } from "@/lib/supabase/elearning/module-content";
import { CHAPTER_TIMING } from "@/lib/elearning/chapter-timing";

/**
 * Durée minimale officielle d'un chapitre, déterminée entièrement côté serveur.
 *
 * Ordre de priorité :
 * 1. Table CHAPTER_TIMING (chapitres hardcodés comme H0B0)
 * 2. modulesContent[slug].sections[id].estimatedMinutes * 60
 *
 * Retourne null si le chapitre est inconnu — la requête sera rejetée.
 */
function getServerMinSeconds(
  formationSlug: string,
  chapterKey: string
): number | null {
  // 1 — Chapitres hardcodés (ex: H0B0)
  const explicit = CHAPTER_TIMING[formationSlug]?.[chapterKey];
  if (typeof explicit === "number") return explicit;

  // 2 — Modules générés depuis modulesContent
  const moduleContent = modulesContent[formationSlug];
  if (!moduleContent) return null;
  const section = moduleContent.sections.find((s) => s.id === chapterKey);
  if (typeof section?.estimatedMinutes !== "number") return null;
  return section.estimatedMinutes * 60;
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

  const body = await req.json().catch(() => null);

  const {
    formation_slug,
    chapter_key,
    chapter_order,
    deltaSeconds,
  } = body ?? {};

  const requestedFormationSlug = getCanonicalModuleSlug(
    typeof formation_slug === "string" ? formation_slug : ""
  );

  if (
    !requestedFormationSlug ||
    typeof chapter_key !== "string" ||
    !chapter_key ||
    typeof chapter_order !== "number" ||
    typeof deltaSeconds !== "number"
  ) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  // ── Durée minimale : source de vérité côté serveur uniquement ───────────
  const serverMinSeconds = getServerMinSeconds(requestedFormationSlug, chapter_key);

  if (serverMinSeconds === null) {
    // Chapitre inconnu de la configuration serveur — refus strict
    console.warn(
      `[CHAPTER-PROGRESS] Chapitre inconnu : "${chapter_key}" (${requestedFormationSlug}) — rejeté`
    );
    return NextResponse.json(
      { error: `Chapitre inconnu : ${chapter_key}` },
      { status: 400 }
    );
  }

  // deltaSeconds par requête : plafonné à 2× l'intervalle d'envoi (max 30 s)
  // pour bloquer les incréments artificiellement gonflés.
  const MAX_DELTA = 30;
  const safeDelta = Math.max(0, Math.min(Math.round(deltaSeconds), MAX_DELTA));

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

  // ── Rate-limiting basé sur le temps réel écoulé ──────────────────────────
  // Si une ligne existante a un updated_at récent, le delta déclaré ne peut pas
  // dépasser le temps réel écoulé + 5 s de tolérance réseau.
  const TOLERANCE_S = 5;
  if (existing?.updated_at) {
    const lastUpdate = new Date(existing.updated_at).getTime();
    const realElapsed = Math.round((Date.now() - lastUpdate) / 1000);
    const maxAllowed = realElapsed + TOLERANCE_S;
    if (safeDelta > maxAllowed) {
      console.warn(
        `[CHAPTER-PROGRESS] Rafale détectée pour user=${user.id} ` +
        `chap="${chapter_key}" : delta=${safeDelta}s mais seulement ${realElapsed}s écoulés`
      );
      return NextResponse.json(
        { error: "Trop de requêtes — patientez avant d'envoyer la suivante." },
        { status: 429 }
      );
    }
  }

  const newSeconds = (existing?.seconds_spent ?? 0) + safeDelta;
  const isCompleted = newSeconds >= serverMinSeconds;

  if (existing) {
    const { error } = await supabase
      .from("user_chapter_progress")
      .update({
        seconds_spent: newSeconds,
        min_seconds_required: serverMinSeconds,
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
      min_seconds_required: serverMinSeconds,
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
