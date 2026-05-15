import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json() as { email?: string };
    const email = (body.email ?? "").trim().toLowerCase();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
    }

    const supabase = await createClient();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/connexion?reset=1`,
    });

    if (error) {
      console.error("[Reset Password] Erreur Supabase :", error.message);
      // On retourne success quand même pour ne pas révéler si l'email existe
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Reset Password] Erreur :", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
