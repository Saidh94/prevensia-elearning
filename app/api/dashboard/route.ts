import { NextResponse } from "next/server";
import { createClient } from "../../../lib/supabase/server";

type ProfileRow = {
  id: string;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  company: string | null;
};

type FormationRow = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  duration_hours: number | null;
  mode: string | null;
};

type EnrollmentRow = {
  id: string;
  status: string | null;
  access_start: string | null;
  access_end: string | null;
  formation: FormationRow | FormationRow[] | null;
};

type ProgressRow = {
  formation_id: string;
  module_slug: string | null;
  completion_percent: number | null;
  completed: boolean | null;
  updated_at: string | null;
};

function getSingleFormation(
  formation: FormationRow | FormationRow[] | null
): FormationRow | null {
  if (!formation) return null;
  return Array.isArray(formation) ? formation[0] ?? null : formation;
}

export async function GET() {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error("AUTH ERROR:", userError);
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("id, email, first_name, last_name, phone, company")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError) {
      console.error("PROFILE ERROR:", profileError);
      return NextResponse.json(
        { error: `Erreur lecture profil: ${profileError.message}` },
        { status: 500 }
      );
    }

    const typedProfile = (profile ?? null) as ProfileRow | null;

    const { data: enrollments, error: enrollmentsError } = await supabase
      .from("enrollments")
      .select(
        `
        id,
        status,
        access_start,
        access_end,
        formation:formations (
          id,
          slug,
          title,
          description,
          duration_hours,
          mode
        )
        `
      )
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (enrollmentsError) {
      console.error("ENROLLMENTS ERROR:", enrollmentsError);
      return NextResponse.json(
        { error: `Erreur lecture inscriptions: ${enrollmentsError.message}` },
        { status: 500 }
      );
    }

    const typedEnrollments = (enrollments ?? []) as EnrollmentRow[];

    const formationIds = typedEnrollments
      .map((item: EnrollmentRow) => getSingleFormation(item.formation)?.id ?? null)
      .filter((id: string | null): id is string => id !== null);

    let progressRows: ProgressRow[] = [];

    if (formationIds.length > 0) {
      const { data: progress, error: progressError } = await supabase
        .from("progress")
        .select(
          "formation_id, module_slug, completion_percent, completed, updated_at"
        )
        .eq("user_id", user.id)
        .in("formation_id", formationIds);

      if (progressError) {
        console.error("PROGRESS ERROR:", progressError);
        return NextResponse.json(
          { error: `Erreur lecture progression: ${progressError.message}` },
          { status: 500 }
        );
      }

      progressRows = (progress ?? []) as ProgressRow[];
    }

    const dashboardFormations = typedEnrollments.map((enrollment: EnrollmentRow) => {
      const formation = getSingleFormation(enrollment.formation);

      const progress =
        progressRows.find(
          (row: ProgressRow) => row.formation_id === formation?.id
        ) ?? null;

      return {
        enrollment_id: enrollment.id,
        formation_id: formation?.id ?? null,
        slug: formation?.slug ?? null,
        title: formation?.title ?? null,
        description: formation?.description ?? null,
        duration_hours: formation?.duration_hours ?? null,
        mode: formation?.mode ?? null,
        status: progress?.completed
          ? "completed"
          : (progress?.completion_percent ?? 0) > 0
          ? "in_progress"
          : enrollment.status ?? "not_started",
        completion_percent: progress?.completion_percent ?? 0,
        completed: progress?.completed ?? false,
        last_module_slug: progress?.module_slug ?? null,
        updated_at: progress?.updated_at ?? null,
        access_start: enrollment.access_start,
        access_end: enrollment.access_end,
      };
    });

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email ?? null,
      },
      profile: typedProfile,
      formations: dashboardFormations,
    });
  } catch (error) {
    console.error("DASHBOARD FATAL ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `Erreur serveur dashboard: ${error.message}`
            : "Erreur serveur dashboard inconnue",
      },
      { status: 500 }
    );
  }
}