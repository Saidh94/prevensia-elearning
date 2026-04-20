import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import {
  getModuleSlugCandidates,
  resolveModuleSlug,
} from "@/lib/supabase/elearning/module-registry";

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_: Request, context: RouteContext) {
  try {
    const { slug } = await context.params;
    const normalizedSlug = resolveModuleSlug(slug) ?? slug.toLowerCase();
    const slugCandidates = getModuleSlugCandidates(normalizedSlug);
    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("first_name, last_name, company, role")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError) {
      console.error("Erreur profile quiz context :", profileError);
    }

    const { data: formations, error: formationError } = await supabase
      .from("formations")
      .select("id, slug")
      .in("slug", slugCandidates)
      .limit(1);

    if (formationError) {
      console.error("Erreur formation quiz context :", formationError);
      return NextResponse.json(
        { error: "Formation introuvable." },
        { status: 404 }
      );
    }

    const formation = formations?.[0] ?? null;

    if (!formation?.id) {
      return NextResponse.json(
        { error: "Formation introuvable." },
        { status: 404 }
      );
    }

    const { data: enrollment, error: enrollmentError } = await supabase
      .from("enrollments")
      .select("id, company_name, manager_email, ordered_by_employer")
      .eq("user_id", user.id)
      .eq("formation_id", formation.id)
      .maybeSingle();

    if (enrollmentError) {
      console.error("Erreur enrollment quiz context :", enrollmentError);
    }

    return NextResponse.json({
      enrollmentId: enrollment?.id ?? "",
      employeeFirstName: profile?.first_name ?? "",
      employeeLastName: profile?.last_name ?? "",
      companyName: enrollment?.company_name ?? profile?.company ?? "",
      managerEmail: enrollment?.manager_email ?? "",
      orderedByEmployer: Boolean(enrollment?.ordered_by_employer),
      isAdmin: profile?.role === "admin",
    });
  } catch (error) {
    console.error("Erreur chargement contexte quiz :", error);

    return NextResponse.json(
      { error: "Impossible de charger le contexte quiz." },
      { status: 500 }
    );
  }
}
