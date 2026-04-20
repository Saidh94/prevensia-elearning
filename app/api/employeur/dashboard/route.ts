import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

type ProfileRow = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
};

type FormationRow = {
  id: string;
  title: string | null;
  slug: string | null;
};

export async function GET() {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const { data: employerUser, error: employerUserError } = await supabase
      .from("employer_users")
      .select("employer_id, role, employers ( id, company_name, manager_email, contact_name )")
      .eq("user_id", user.id)
      .maybeSingle();

    if (employerUserError || !employerUser) {
      return NextResponse.json(
        { error: "Compte employeur introuvable." },
        { status: 404 }
      );
    }

    const employer = Array.isArray(employerUser.employers)
      ? employerUser.employers[0]
      : employerUser.employers;

    const { data: enrollments, error: enrollmentsError } = await supabase
      .from("enrollments")
      .select(`
        id,
        status,
        access_start,
        access_end,
        payment_status,
        company_name,
        ordered_by_employer,
        user_id,
        formation_id
      `)
      .eq("employer_id", employerUser.employer_id)
      .order("created_at", { ascending: false });

    if (enrollmentsError) {
      return NextResponse.json(
        { error: "Impossible de charger les inscriptions employeur." },
        { status: 500 }
      );
    }

    const userIds = [...new Set((enrollments ?? []).map((item) => item.user_id).filter(Boolean))];
    const formationIds = [...new Set((enrollments ?? []).map((item) => item.formation_id).filter(Boolean))];

    const { data: profiles } = userIds.length
      ? await supabase
          .from("profiles")
          .select("id, first_name, last_name, email")
          .in("id", userIds)
          .returns<ProfileRow[]>()
      : { data: [] as ProfileRow[] };

    const { data: formations } = formationIds.length
      ? await supabase
          .from("formations")
          .select("id, title, slug")
          .in("id", formationIds)
          .returns<FormationRow[]>()
      : { data: [] as FormationRow[] };

    const profilesMap = new Map((profiles ?? []).map((item) => [item.id, item]));
    const formationsMap = new Map((formations ?? []).map((item) => [item.id, item]));

    const rows = (enrollments ?? []).map((item) => {
      const profile = profilesMap.get(item.user_id);
      const formation = formationsMap.get(item.formation_id);

      return {
        id: item.id,
        status: item.status,
        access_start: item.access_start,
        access_end: item.access_end,
        payment_status: item.payment_status,
        company_name: item.company_name,
        ordered_by_employer: item.ordered_by_employer,
        employee_first_name: profile?.first_name ?? "",
        employee_last_name: profile?.last_name ?? "",
        employee_email: profile?.email ?? "",
        formation_title: formation?.title ?? "",
        formation_slug: formation?.slug ?? "",
      };
    });

    return NextResponse.json({
      employer: {
        id: employer?.id ?? employerUser.employer_id,
        company_name: employer?.company_name ?? "",
        manager_email: employer?.manager_email ?? "",
        contact_name: employer?.contact_name ?? "",
        role: employerUser.role,
      },
      enrollments: rows,
    });
  } catch (error) {
    console.error("Erreur dashboard employeur :", error);

    return NextResponse.json(
      { error: "Impossible de charger le dashboard employeur." },
      { status: 500 }
    );
  }
}
