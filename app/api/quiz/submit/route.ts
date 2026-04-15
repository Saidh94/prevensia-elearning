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
    const { formationSlug, passed } = body;

    if (!formationSlug) {
      return NextResponse.json(
        { error: "formationSlug manquant" },
        { status: 400 }
      );
    }

    const { data: formation, error: formationError } = await supabase
      .from("formations")
      .select("id, slug")
      .eq("slug", formationSlug)
      .single();

    if (formationError || !formation) {
      return NextResponse.json(
        { error: "Formation introuvable" },
        { status: 404 }
      );
    }

    if (passed) {
      const { error: updateError } = await supabase
        .from("enrollments")
        .update({
          status: "pending_interview",
        })
        .eq("user_id", user.id)
        .eq("formation_id", formation.id);

      if (updateError) {
        return NextResponse.json(
          { error: `Erreur mise à jour inscription: ${updateError.message}` },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("QUIZ SUBMIT ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `Erreur serveur quiz: ${error.message}`
            : "Erreur serveur quiz inconnue",
      },
      { status: 500 }
    );
  }
}