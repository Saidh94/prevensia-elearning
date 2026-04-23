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

export async function GET(
  _req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const requestedSlug = getCanonicalModuleSlug(slug);
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  const isAdmin = profile?.role === "admin";

  if (!isAdmin) {
    const { data: enrollments, error: enrollmentError } = await supabase
      .from("enrollments")
      .select(`
        id,
        formation:formations (
          slug
        )
      `)
      .eq("user_id", user.id);

    if (enrollmentError) {
      return NextResponse.json({ error: enrollmentError.message }, { status: 500 });
    }

    const hasAccess =
      enrollments?.some((item) =>
        canFormationAccessModule(
          getEnrollmentFormationSlug(item.formation),
          requestedSlug
        )
      ) ?? false;

    if (!hasAccess) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  const { data, error } = await supabase
    .from("user_chapter_progress")
    .select("*")
    .eq("user_id", user.id)
    .eq("formation_slug", requestedSlug)
    .order("chapter_order", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data ?? []);
}
