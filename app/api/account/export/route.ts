import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

/**
 * Droit à la portabilité (RGPD art. 20) — un utilisateur connecté peut
 * télécharger l'ensemble de ses données personnelles au format JSON.
 * Auto-service : aucune donnée d'un tiers n'est jamais retournée.
 */
export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  // Le client admin est utilisé uniquement pour lire les propres données de
  // l'utilisateur déjà authentifié ci-dessus (évite les surprises de RLS
  // entre tables), jamais pour accéder aux données d'un tiers.
  const admin = createAdminClient();
  if (!admin) return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });

  const [{ data: profile }, { data: enrollments }, { data: quizAttempts }, { data: devis }] =
    await Promise.all([
      admin.from("profiles").select("*").eq("id", user.id).maybeSingle(),
      admin.from("enrollments").select("*").eq("user_id", user.id),
      admin.from("quiz_attempts").select("*").eq("user_id", user.id),
      user.email ? admin.from("devis").select("*").eq("email", user.email) : Promise.resolve({ data: [] }),
    ]);

  const exportPayload = {
    export_genere_le: new Date().toISOString(),
    compte: { id: user.id, email: user.email, cree_le: user.created_at },
    profil: profile ?? null,
    formations: enrollments ?? [],
    resultats_quiz: quizAttempts ?? [],
    devis_associes: devis ?? [],
  };

  return new NextResponse(JSON.stringify(exportPayload, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="mes-donnees-prevensia.json"`,
    },
  });
}
