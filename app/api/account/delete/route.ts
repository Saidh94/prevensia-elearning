import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

/**
 * Droit à l'effacement (RGPD art. 17) — un utilisateur connecté peut
 * demander la suppression de son compte.
 *
 * On anonymise l'identité plutôt que de supprimer les lignes en base, pour
 * deux raisons : (1) les formations validées (enrollments/quiz_attempts)
 * sont des pièces d'audit Qualiopi à conserver 5 ans, et les factures ont une
 * obligation comptable de 10 ans — les supprimer serait illégal ; (2) une
 * suppression brute de l'utilisateur Supabase Auth casserait les clés
 * étrangères vers ces tables. Après anonymisation, la personne n'est plus
 * identifiable et le compte est désactivé (connexion bloquée).
 */
export async function POST(req: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  if (body?.confirm !== true) {
    return NextResponse.json(
      { error: "Confirmation requise (confirm: true) pour supprimer définitivement votre compte." },
      { status: 400 }
    );
  }

  const admin = createAdminClient();
  if (!admin) return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });

  const anonymizedEmail = `supprime+${user.id}@purge.prevensia-formation.fr`;

  try {
    // 1. Anonymiser le profil (identité)
    await admin
      .from("profiles")
      .update({
        first_name: "Compte",
        last_name: "supprimé",
        email: anonymizedEmail,
        company: null,
      })
      .eq("id", user.id);

    // 2. Désactiver le compte Supabase Auth (email + mot de passe randomisés,
    //    connexion bloquée) sans supprimer la ligne — préserve les clés
    //    étrangères vers enrollments / quiz_attempts / factures.
    await admin.auth.admin.updateUserById(user.id, {
      email: anonymizedEmail,
      password: randomUUID(),
      user_metadata: { deleted: true, deleted_at: new Date().toISOString() },
      ban_duration: "87600h", // ~10 ans — effectivement permanent
    });

    // 3. Trace admin (best-effort)
    try {
      await admin.from("admin_audit_log").insert({
        action: "account_self_delete",
        target_id: user.id,
        target_type: "profile",
        reason: "Demande de suppression par l'utilisateur (droit à l'oubli RGPD)",
      });
    } catch {
      // table éventuellement absente — ne bloque pas la suppression
    }

    return NextResponse.json({
      ok: true,
      message:
        "Votre compte a été anonymisé et désactivé. Les données requises par nos obligations légales (Qualiopi, comptabilité) sont conservées sous forme anonyme pour la durée restante de leur conservation.",
    });
  } catch (error) {
    console.error("[account/delete] Erreur:", error);
    return NextResponse.json({ error: "Erreur lors de la suppression" }, { status: 500 });
  }
}
