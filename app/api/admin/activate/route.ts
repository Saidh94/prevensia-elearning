import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

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

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (profile?.role !== "admin") {
      return NextResponse.json({ error: "Accès interdit" }, { status: 403 });
    }

    const formData = await req.formData();
    const enrollmentId = String(formData.get("enrollmentId") || "");

    if (!enrollmentId) {
      return NextResponse.json({ error: "enrollmentId manquant" }, { status: 400 });
    }

    const { data: enrollment, error: enrollmentError } = await supabase
      .from("enrollments")
      .select("payment_status")
      .eq("id", enrollmentId)
      .maybeSingle<{ payment_status: string | null }>();

    if (enrollmentError) {
      return NextResponse.json(
        { error: `Erreur lecture paiement: ${enrollmentError.message}` },
        { status: 500 }
      );
    }

    if (!enrollment) {
      return NextResponse.json(
        { error: "Inscription introuvable" },
        { status: 404 }
      );
    }

    if (enrollment.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Paiement requis avant activation de l'acces." },
        { status: 403 }
      );
    }

    const start = new Date();
    const end = new Date();
    end.setDate(start.getDate() + 30);

    const { error: updateError } = await supabase
      .from("enrollments")
      .update({
        access_start: start.toISOString(),
        access_end: end.toISOString(),
        status: "in_progress",
      })
      .eq("id", enrollmentId);

    if (updateError) {
      return NextResponse.json(
        { error: `Erreur activation: ${updateError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.redirect(new URL("/admin", req.url));
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Erreur serveur inconnue",
      },
      { status: 500 }
    );
  }
}
