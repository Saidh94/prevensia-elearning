import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    // ── Auth check ─────────────────────────────────────────────────────────
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: "Non authentifie" }, { status: 401 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (profile?.role !== "admin") {
      return NextResponse.json({ error: "Acces refuse" }, { status: 403 });
    }

    const adminClient = createAdminClient();
    if (!adminClient) {
      return NextResponse.json({ error: "Client admin indisponible" }, { status: 500 });
    }

    // ── Body ───────────────────────────────────────────────────────────────
    const body = await req.json();
    const {
      userId,
      formationLabel,
      status,
      paymentStatus,
      accessStart,
      accessEnd,
    } = body as {
      userId: string;
      formationLabel: string;
      status: string;
      paymentStatus: string | null;
      accessStart: string;
      accessEnd: string;
    };

    if (!userId || !formationLabel || !status) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    // ── Cherche la formation par titre (LIKE) ──────────────────────────────
    const { data: formations } = await adminClient
      .from("formations")
      .select("id, title")
      .ilike("title", `%${formationLabel}%`)
      .limit(1);

    const formationId = formations && formations.length > 0 ? formations[0].id : null;

    // ── Insertion inscription ──────────────────────────────────────────────
    const insertPayload: Record<string, unknown> = {
      user_id: userId,
      status,
      payment_status: paymentStatus ?? null,
      access_start: accessStart ? new Date(accessStart).toISOString() : null,
      access_end: accessEnd ? new Date(accessEnd).toISOString() : null,
    };

    if (formationId) {
      insertPayload.formation_id = formationId;
    }

    const { data: enrollment, error: insertError } = await adminClient
      .from("enrollments")
      .insert(insertPayload)
      .select("id")
      .single();

    if (insertError) {
      console.error("[Enrollment Manual] Erreur insert :", insertError);
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, enrollmentId: enrollment?.id });
  } catch (error) {
    console.error("[Enrollment Manual] Erreur :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
