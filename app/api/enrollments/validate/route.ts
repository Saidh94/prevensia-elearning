import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const body = await req.json();
    const { enrollmentId, note } = body as {
      enrollmentId?: string;
      note?: string;
    };

    if (!enrollmentId) {
      return NextResponse.json(
        { error: "enrollmentId manquant" },
        { status: 400 }
      );
    }

    const { data: currentProfile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError) {
      return NextResponse.json(
        { error: `Erreur lecture profil: ${profileError.message}` },
        { status: 500 }
      );
    }

    const role = String(currentProfile?.role ?? "").toLowerCase();

    if (role !== "admin" && role !== "employer") {
      return NextResponse.json(
        { error: "Droits insuffisants" },
        { status: 403 }
      );
    }

    const { data: enrollment, error: enrollmentError } = await supabase
      .from("enrollments")
      .select("id, status")
      .eq("id", enrollmentId)
      .maybeSingle();

    if (enrollmentError) {
      return NextResponse.json(
        { error: `Erreur lecture inscription: ${enrollmentError.message}` },
        { status: 500 }
      );
    }

    if (!enrollment) {
      return NextResponse.json(
        { error: "Inscription introuvable" },
        { status: 404 }
      );
    }

    const currentStatus = String(enrollment.status ?? "").toLowerCase();

    if (currentStatus !== "pending_interview") {
      return NextResponse.json(
        {
          error:
            "Seules les inscriptions en attente d’entretien peuvent être validées.",
        },
        { status: 400 }
      );
    }

    const { error: updateError } = await supabase
      .from("enrollments")
      .update({
        status: "completed",
        validated_at: new Date().toISOString(),
        validated_by: user.id,
        validation_note: note?.trim() || null,
      })
      .eq("id", enrollmentId);

    if (updateError) {
      return NextResponse.json(
        { error: `Erreur mise à jour inscription: ${updateError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("ENROLLMENT VALIDATE ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `Erreur serveur validation: ${error.message}`
            : "Erreur serveur validation inconnue",
      },
      { status: 500 }
    );
  }
}