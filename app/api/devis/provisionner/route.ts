import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { COMPANY } from "@/lib/company";
import { resolveFormation, type FormationRecord } from "@/lib/formations/resolve-formation";

export const runtime = "nodejs";

const SITE_URL   = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prevensia-formation.fr";
const FROM_EMAIL = "PREVENSIA <contact@prevensia-formation.fr>";

type Collaborateur = { prenom: string; nom: string; email: string };

function escapeHtml(s: string) {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token, collaborateurs } = body as { token: string; collaborateurs: Collaborateur[] };

    if (!token || !Array.isArray(collaborateurs) || collaborateurs.length === 0) {
      return NextResponse.json({ error: "Données manquantes" }, { status: 400 });
    }

    const admin = createAdminClient();
    if (!admin) {
      return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }

    // Charger le devis
    const { data: devis, error: fetchErr } = await admin
      .from("devis")
      .select("id, status, account_type, email, contact_name, company_name, formations, employer_user_id")
      .eq("token", token)
      .single();

    if (fetchErr || !devis) {
      return NextResponse.json({ error: "Devis introuvable" }, { status: 404 });
    }

    if (devis.status === "provisioned") {
      return NextResponse.json({ error: "Devis déjà provisionné" }, { status: 409 });
    }

    if (devis.status !== "validated") {
      return NextResponse.json({ error: "Devis non encore validé" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY?.trim();
    const resend    = resendKey ? new (await import("resend")).Resend(resendKey) : null;

    const isParticulier = devis.account_type === "particulier";

    // Résoudre chaque formation du devis vers son enregistrement réel (formation_id).
    // Un particulier sur une formation à prix fixe (pas "sur devis") doit payer en
    // ligne avant d'accéder au contenu ; une entreprise reste sur le circuit facture
    // (accès accordé, réglement par virement suivi manuellement par l'admin).
    type FormationLine = { label: string; priceHT?: number | null };
    const formations: FormationLine[] = devis.formations ?? [];
    const resolvedFormations: { record: FormationRecord; requiresPayment: boolean }[] = [];
    for (const f of formations) {
      try {
        const record = await resolveFormation(admin, f.label, "");
        const requiresPayment = isParticulier && f.priceHT !== null && f.priceHT !== undefined;
        const existing = resolvedFormations.find((r) => r.record.id === record.id);
        if (!existing) {
          resolvedFormations.push({ record, requiresPayment });
        } else if (requiresPayment) {
          existing.requiresPayment = true;
        }
      } catch (err) {
        console.error(`[devis/provisionner] Formation introuvable pour "${f.label}":`, err);
      }
    }
    const anyPaymentRequired = resolvedFormations.some((r) => r.requiresPayment);

    const results: { email: string; userId?: string; error?: string }[] = [];
    let employerUserId: string | null = devis.employer_user_id ?? null;

    for (let i = 0; i < collaborateurs.length; i++) {
      const collab = collaborateurs[i];
      try {
        // Inviter l'utilisateur via Supabase Auth
        const { data: inviteData, error: inviteErr } = await admin.auth.admin.inviteUserByEmail(
          collab.email,
          {
            data: {
              first_name: collab.prenom,
              last_name:  collab.nom,
              company:    devis.company_name ?? "",
              role:       "stagiaire",
            },
            redirectTo: `${SITE_URL}/connexion`,
          }
        );

        if (inviteErr || !inviteData?.user) {
          // L'utilisateur existe peut-être déjà — récupérer par email
          const { data: existingList } = await admin.auth.admin.listUsers();
          const existing = existingList?.users?.find((u) => u.email === collab.email);
          if (!existing) {
            results.push({ email: collab.email, error: inviteErr?.message ?? "Invitation échouée" });
            continue;
          }
          inviteData!.user = existing as typeof inviteData.user;
        }

        const userId = inviteData!.user!.id;

        // Premier collaborateur = contact principal → rôle employeur aussi
        // (sauf pour un particulier, qui n'a pas de collaborateurs à superviser)
        if (i === 0 && !employerUserId && !isParticulier) {
          employerUserId = userId;
          // Créer l'entrée dans la table profiles si elle existe
          await admin.from("profiles").upsert({
            id: userId,
            first_name: collab.prenom,
            last_name:  collab.nom,
            email:      collab.email,
            company:    devis.company_name ?? "",
            role:       "employeur",
          }, { onConflict: "id", ignoreDuplicates: false }).select().maybeSingle();
        } else {
          await admin.from("profiles").upsert({
            id: userId,
            first_name: collab.prenom,
            last_name:  collab.nom,
            email:      collab.email,
            company:    devis.company_name ?? "",
            role:       "stagiaire",
          }, { onConflict: "id", ignoreDuplicates: false }).select().maybeSingle();
        }

        // Créer les enrollments pour chaque formation résolue.
        // status "not_started" = état LMS de départ (reconnu par la logique d'accès).
        // payment_status: "pending" bloque l'accès jusqu'au paiement Stripe (particulier
        // + prix fixe) ; null = accès accordé tout de suite (circuit facture B2B).
        for (const { record: formationRecord, requiresPayment } of resolvedFormations) {
          const { data: existingEnrollment } = await admin
            .from("enrollments")
            .select("id")
            .eq("user_id", userId)
            .eq("formation_id", formationRecord.id)
            .maybeSingle();

          if (!existingEnrollment) {
            const { error: enrollError } = await admin.from("enrollments").insert({
              user_id:       userId,
              formation_id:  formationRecord.id,
              status:        "not_started",
              payment_status: requiresPayment ? "pending" : null,
              company_name:  devis.company_name ?? null,
            });
            if (enrollError) {
              console.error(
                `[devis/provisionner] Erreur creation enrollment pour ${collab.email} / ${formationRecord.title}:`,
                enrollError.message
              );
            }
          }
        }

        // Email de bienvenue (uniquement si pas d'invitation Supabase envoyée — éviter doublon)
        if (resend && inviteErr) {
          // L'utilisateur existait déjà, on envoie un email spécifique
          await resend.emails.send({
            from: FROM_EMAIL,
            to: [collab.email],
            subject: "Votre accès formation PREVENSIA est activé",
            html: buildWelcomeEmail(collab, devis.company_name, formations, false, isParticulier, anyPaymentRequired),
          });
        }

        results.push({ email: collab.email, userId });
      } catch (collabErr) {
        const msg = collabErr instanceof Error ? collabErr.message : "Erreur";
        results.push({ email: collab.email, error: msg });
      }
    }

    // Marquer le devis comme provisionné + lier l'employeur
    await admin
      .from("devis")
      .update({
        status:          "provisioned",
        provisioned_at:  new Date().toISOString(),
        employer_user_id: employerUserId,
      })
      .eq("token", token);

    // Email récap admin
    if (resend) {
      const adminEmail = process.env.ADMIN_EMAIL ?? "contact@prevensia-formation.fr";
      const successCount = results.filter((r) => !r.error).length;
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [adminEmail],
        subject: `🚀 Devis provisionné — ${devis.company_name ?? devis.email} (${successCount}/${collaborateurs.length} accès)`,
        html: `
          <h2>Devis provisionné</h2>
          <p><strong>Type :</strong> ${isParticulier ? "Particulier" : "Entreprise / employeur"}</p>
          ${!isParticulier ? `<p><strong>Société :</strong> ${escapeHtml(devis.company_name ?? "—")}</p>` : ""}
          <p><strong>Contact :</strong> ${escapeHtml(devis.email)}</p>
          <p><strong>Accès créés :</strong> ${successCount}/${collaborateurs.length}</p>
          <p><strong>Formations :</strong> ${resolvedFormations.map((r) => r.record.title ?? r.record.slug ?? r.record.id).join(", ")}</p>
          ${anyPaymentRequired ? `<p><strong>⚠️ Paiement en ligne requis</strong> (particulier, formation(s) à prix fixe) — non encore réglé.</p>` : ""}
          <ul>${results.map((r) => `<li>${escapeHtml(r.email)} — ${r.error ? "❌ " + escapeHtml(r.error) : "✅ OK"}</li>`).join("")}</ul>
        `,
      });
    }

    const errors = results.filter((r) => r.error);
    if (errors.length > 0 && errors.length === collaborateurs.length) {
      return NextResponse.json({ error: "Tous les provisionnements ont échoué", details: results }, { status: 500 });
    }

    return NextResponse.json({ success: true, results });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function buildWelcomeEmail(
  collab: Collaborateur,
  company: string | null,
  formations: { label: string }[],
  isNew: boolean,
  isParticulier = false,
  paymentRequired = false,
): string {
  const formationList = formations.map((f) => `<li>${escapeHtml(f.label)}</li>`).join("");
  const introLine = isParticulier
    ? `<p>Votre inscription à une formation PREVENSIA a bien été prise en compte.</p>`
    : `<p>Votre entreprise <strong>${escapeHtml(company ?? "")}</strong> a souscrit à une formation PREVENSIA.</p>`;
  const employerNote = isParticulier
    ? ""
    : `
    <p style="font-size:13px;color:#475569;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px 16px;">
      Votre entreprise, en tant que financeur de cette formation, a accès à votre statut de progression
      et à votre attestation de suivi. Le détail de vos réponses aux quiz reste confidentiel. Pour en
      savoir plus, consultez notre <a href="${SITE_URL}/politique-confidentialite" style="color:#b91c1c;">politique de confidentialité</a>.
    </p>`;
  const paymentNote = paymentRequired
    ? `
    <p style="font-size:13px;color:#92400e;background:#fef9ec;border:1px solid #f59e0b;border-radius:8px;padding:12px 16px;">
      💳 Il ne reste plus qu'une étape : réglez votre formation depuis votre espace pour débloquer l'accès au contenu.
    </p>`
    : "";
  return `
    <p>Bonjour ${escapeHtml(collab.prenom)},</p>
    ${introLine}
    <p>Vos accès à la plateforme sont maintenant activés pour les formations suivantes :</p>
    <ul>${formationList}</ul>
    <p>
      <a href="${SITE_URL}/connexion" style="display:inline-block;background:#b91c1c;color:#fff;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none;">
        Accéder à ma formation →
      </a>
    </p>
    ${paymentNote}
    ${employerNote}
    <hr style="margin:24px 0;border:none;border-top:1px solid #e2e8f0;"/>
    <p style="font-size:12px;color:#64748b;">${COMPANY.name} · ${COMPANY.addressShort}</p>
  `;
}
