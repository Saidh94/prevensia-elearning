import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { resolveModuleSlug } from "@/lib/supabase/elearning/module-registry";
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

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_: Request, context: RouteContext) {
  try {
    const { slug } = await context.params;
    const normalizedSlug = getCanonicalModuleSlug(
      resolveModuleSlug(slug) ?? slug.toLowerCase()
    );
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

    const isAdmin = profile?.role === "admin";

    if (isAdmin) {
      return NextResponse.json({
        enrollmentId: "",
        employeeFirstName: profile?.first_name ?? "",
        employeeLastName: profile?.last_name ?? "",
        companyName: profile?.company ?? "",
        managerEmail: "",
        orderedByEmployer: false,
        isAdmin: true,
      });
    }

    const { data: enrollments, error: enrollmentError } = await supabase
      .from("enrollments")
      .select(`
        id,
        company_name,
        manager_email,
        ordered_by_employer,
        formation:formations (
          slug
        )
      `)
      .eq("user_id", user.id);

    const enrollment =
      enrollments?.find((item) =>
        canFormationAccessModule(
          getEnrollmentFormationSlug(item.formation),
          normalizedSlug
        )
      ) ?? null;

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
