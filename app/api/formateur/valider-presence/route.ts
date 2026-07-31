/**
 * POST /api/formateur/valider-presence
 * Appelé par le formateur depuis son portail.
 * Pour chaque stagiaire présent : marque l'enrollment completed + génère attestation.
 */
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const SITE_URL   = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prevensia-formation.fr";
const FROM_EMAIL = "PREVENSIA <contact@prevensia-formation.fr>";

type PresenceEntry = {
  user_id: string;
  enrollment_id: string | null;
  present: boolean;
};

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

    // Vérifier rôle formateur ou admin
    const { data: profile } = await supabase
      .from("profiles").select("role").eq("id", user.id).single();
    if (!["formateur", "admin"].includes(profile?.role ?? "")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 403 });
    }

    const body = await request.json();
    const { session_id, formateur_id, presences } = body as {
      session_id: string;
      formateur_id: string;
      presences: PresenceEntry[];
    };

    if (!session_id || !presences?.length) {
      return NextResponse.json({ error: "session_id et presences requis" }, { status: 400 });
    }

    const admin = createAdminClient();
    if (!admin) return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });

    // Charger la session
    const { data: session } = await admin
      .from("virtual_sessions")
      .select("formation, date, category, meeting_url")
      .eq("id", session_id)
      .single();

    const now = new Date().toISOString();
    const results: { user_id: string; ok: boolean; error?: string }[] = [];

    const resendKey = process.env.RESEND_API_KEY?.trim();
    const resend    = resendKey ? new (await import("resend")).Resend(resendKey) : null;

    for (const entry of presences) {
      try {
        // Upsert présence
        await admin.from("session_presences").upsert({
          session_id,
          user_id:      entry.user_id,
          enrollment_id: entry.enrollment_id ?? null,
          present:      entry.present,
          validated_by: formateur_id ?? null,
          validated_at: now,
        }, { onConflict: "session_id,user_id" });

        if (!entry.present) {
          results.push({ user_id: entry.user_id, ok: true });
          continue;
        }

        // Marquer l'enrollment comme completed si présent
        if (entry.enrollment_id) {
          await admin.from("enrollments").update({
            status: "completed",
            validated_at: now,
          }).eq("id", entry.enrollment_id);
        }

        // Charger le profil pour l'email
        const { data: learner } = await admin
          .from("profiles")
          .select("first_name, last_name, email")
          .eq("id", entry.user_id)
          .maybeSingle();

        // Email avec lien de téléchargement de l'attestation
        if (resend && learner?.email) {
          const attestationUrl = `${SITE_URL}/api/attestation?` + new URLSearchParams({
            ...(entry.enrollment_id ? { enrollmentId: entry.enrollment_id } : {}),
            formation: session?.formation ?? "Formation PREVENSIA",
            passed:    "true",
          }).toString();

          await resend.emails.send({
            from: FROM_EMAIL,
            to: [learner.email],
            subject: `🎓 Votre attestation de formation — ${session?.formation ?? "PREVENSIA"}`,
            html: `
              <p>Bonjour ${learner.first_name ?? ""},</p>
              <p>Félicitations pour votre participation à la session <strong>${session?.formation ?? "PREVENSIA"}</strong> du <strong>${new Date(session?.date ?? now).toLocaleDateString("fr-FR")}</strong>.</p>
              <p>Votre attestation de formation est disponible :</p>
              <a href="${attestationUrl}"
                 style="display:inline-block;background:#b91c1c;color:#fff;padding:14px 28px;border-radius:10px;font-weight:700;font-size:15px;text-decoration:none;margin:16px 0;">
                📄 Télécharger mon attestation
              </a>
              <p style="font-size:12px;color:#64748b;margin-top:20px;">
                PREVENSIA FORMATION · 33, avenue Philippe Auguste — 75011 Paris<br/>
                contact@prevensia-formation.fr · 01 89 62 94 92
              </p>
            `,
          });
        }

        results.push({ user_id: entry.user_id, ok: true });
      } catch (e) {
        results.push({ user_id: entry.user_id, ok: false, error: e instanceof Error ? e.message : "Erreur" });
      }
    }

    // Email récap au formateur
    if (resend) {
      const { data: fmt } = await admin
        .from("formateurs").select("email, prenom, nom").eq("id", formateur_id).maybeSingle();
      if (fmt?.email) {
        const presentsCount = presences.filter(p => p.present).length;
        await resend.emails.send({
          from: FROM_EMAIL,
          to: [fmt.email],
          subject: `📋 Récap session — ${session?.formation} (${presentsCount} présent${presentsCount > 1 ? "s" : ""})`,
          html: `
            <p>Bonjour ${fmt.prenom},</p>
            <p>Récapitulatif de votre session <strong>${session?.formation}</strong> du ${new Date(session?.date ?? now).toLocaleDateString("fr-FR")} :</p>
            <ul>
              ${presences.map(p => {
                const r = results.find(r => r.user_id === p.user_id);
                return `<li>${p.user_id} — ${p.present ? "✅ Présent" : "❌ Absent"}${r?.error ? ` (⚠️ ${r.error})` : ""}</li>`;
              }).join("")}
            </ul>
            <p>Merci pour votre intervention !</p>
            <p style="font-size:12px;color:#64748b;">PREVENSIA FORMATION · contact@prevensia-formation.fr</p>
          `,
        });
      }
    }

    const errors = results.filter(r => !r.ok);
    return NextResponse.json({
      success: true,
      count: presences.filter(p => p.present).length,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Erreur" }, { status: 500 });
  }
}
