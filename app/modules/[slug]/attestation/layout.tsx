import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  canFormationAccessModule,
  getCanonicalModuleSlug,
} from "@/lib/supabase/elearning/module-access";

type AttestationLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

type ProfileRow = { role: string | null };
type FormationRow = { slug: string | null };
type EnrollmentRow = {
  id: string;
  status: string | null;
  access_end: string | null;
  formation: FormationRow | FormationRow[] | null;
};

function normalizeFormation(
  f: EnrollmentRow["formation"]
): FormationRow | null {
  if (!f) return null;
  if (Array.isArray(f)) return f[0] ?? null;
  return f;
}

function normalizeStatus(value: string | null | undefined): string {
  return (value ?? "").trim().toLowerCase().replace(/[\s-]+/g, "_");
}

function isDateNotExpired(accessEnd: string | null): boolean {
  if (!accessEnd) return true;
  const date = new Date(accessEnd);
  if (Number.isNaN(date.getTime())) return false;
  return date >= new Date();
}

export default async function AttestationLayout({
  children,
  params,
}: AttestationLayoutProps) {
  const { slug } = await params;
  const canonicalSlug = getCanonicalModuleSlug(slug);

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/connexion?redirectTo=/modules/${slug}/attestation`);
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle<ProfileRow>();

  if (profile?.role === "admin") {
    return <>{children}</>;
  }

  const { data, error } = await supabase
    .from("enrollments")
    .select(`
      id,
      status,
      access_end,
      formation:formations ( slug )
    `)
    .eq("user_id", user.id);

  if (error) {
    redirect(`/modules/${slug}`);
  }

  const enrollments = (data ?? []) as EnrollmentRow[];

  const enrollment = enrollments.find((item) => {
    const f = normalizeFormation(item.formation);
    return canFormationAccessModule(
      getCanonicalModuleSlug(f?.slug),
      canonicalSlug
    );
  });

  const status = normalizeStatus(enrollment?.status);
  const isCompleted = status === "completed" || status === "validated";
  const notExpired = isDateNotExpired(enrollment?.access_end ?? null);

  if (!enrollment || !isCompleted || !notExpired) {
    redirect(`/modules/${slug}`);
  }

  return <>{children}</>;
}
