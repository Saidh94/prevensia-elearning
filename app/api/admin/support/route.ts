import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    const supabase = await createClient();

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (profile?.role !== "admin") {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    const adminClient = createAdminClient();

    if (!adminClient) {
      return NextResponse.json({ error: "Client admin indisponible" }, { status: 500 });
    }

    // ── Apprenants ──────────────────────────────────────────────────────────
    const { data: profiles } = await adminClient
      .from("profiles")
      .select("id, first_name, last_name, email, company, role, created_at")
      .order("created_at", { ascending: false });

    // ── Inscriptions + formations ────────────────────────────────────────────
    const { data: enrollments } = await adminClient
      .from("enrollments")
      .select(`
        id,
        user_id,
        status,
        payment_status,
        company_name,
        manager_email,
        ordered_by_employer,
        employer_id,
        access_start,
        access_end,
        validated_at,
        created_at,
        formation:formations (
          id,
          slug,
          title
        )
      `)
      .order("created_at", { ascending: false });

    // ── Progression chapitres ────────────────────────────────────────────────
    const { data: chapterProgress } = await adminClient
      .from("user_chapter_progress")
      .select("user_id, formation_slug, chapter_key, is_completed, updated_at");

    // ── Tentatives quiz ──────────────────────────────────────────────────────
    const { data: quizAttempts } = await adminClient
      .from("quiz_attempts")
      .select("user_id, formation_slug, score, total, passed, score_percent, attempted_at")
      .order("attempted_at", { ascending: false });

    // ── Clients / Entreprises ────────────────────────────────────────────────
    // Déduit des inscriptions avec company_name non null
    const companiesMap = new Map<string, { name: string; managerEmail: string; enrollmentCount: number }>();
    for (const e of enrollments ?? []) {
      if (e.company_name) {
        const key = e.company_name.toLowerCase().trim();
        const existing = companiesMap.get(key);
        if (existing) {
          existing.enrollmentCount += 1;
        } else {
          companiesMap.set(key, {
            name: e.company_name,
            managerEmail: e.manager_email ?? "",
            enrollmentCount: 1,
          });
        }
      }
    }
    const clients = Array.from(companiesMap.values()).sort(
      (a, b) => b.enrollmentCount - a.enrollmentCount
    );

    // ── Tickets support ──────────────────────────────────────────────────────────
    const { data: tickets } = await adminClient
      .from("support_tickets")
      .select("id, user_email, user_name, issue_type, message, status, admin_note, created_at, updated_at")
      .order("created_at", { ascending: false });

    return NextResponse.json({
      profiles: profiles ?? [],
      enrollments: enrollments ?? [],
      chapterProgress: chapterProgress ?? [],
      quizAttempts: quizAttempts ?? [],
      clients,
      tickets: tickets ?? [],
    });
  } catch (error) {
    console.error("[Support API] Erreur :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
