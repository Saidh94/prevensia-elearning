import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { COMPANY } from "@/lib/company";

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
      .select("id, status, email, contact_name, company_name, formations, employer_user_id")
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

    // Extraire les slugs de module depuis les formations
    const formations: { label: string }[] = devis.formations ?? [];
    const moduleSlugs = inferModuleSlugs(formations.map((f) => f.label));

    const resendKey = process.env.RESEND_API_KEY?.trim();
    const resend    = resendKey ? new (await import("resend")).Resend(resendKey) : null;

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
        if (i === 0 && !employerUserId) {
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

        // Créer les enrollments pour chaque module
        for (const slug of moduleSlugs) {
          await admin.from("enrollments").upsert({
            user_id:    userId,
            module_slug: slug,
            status:     "pending",
            source:     "devis",
          }, { onConflict: "user_id,module_slug", ignoreDuplicates: true });
        }

        // Email de bienvenue (uniquement si pas d'invitation Supabase envoyée — éviter doublon)
        if (resend && inviteErr) {
          // L'utilisateur existait déjà, on envoie un email spécifique
          await resend.emails.send({
            from: FROM_EMAIL,
            to: [collab.email],
            subject: "Votre accès formation PREVENSIA est activé",
            html: buildWelcomeEmail(collab, devis.company_name, formations, false),
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
          <p><strong>Société :</strong> ${escapeHtml(devis.company_name ?? "—")}</p>
          <p><strong>Contact :</strong> ${escapeHtml(devis.email)}</p>
          <p><strong>Accès créés :</strong> ${successCount}/${collaborateurs.length}</p>
          <p><strong>Modules :</strong> ${moduleSlugs.join(", ")}</p>
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

/** Mappe les labels de formation vers des slugs de module connus */
function inferModuleSlugs(labels: string[]): string[] {
  const slugs = new Set<string>();
  for (const label of labels) {
    const l = label.toLowerCase();
    if (l.includes("atex niveau 0") || l.includes("atex n0") || l.includes("sensibilisation")) slugs.add("atex-niveau0");
    if (l.includes("atex niveau 1") || l.includes("atex n1") || l.includes("intervenant"))     slugs.add("atex-niveau1");
    if (l.includes("atex niveau 2") || l.includes("atex n2") || l.includes("référent"))        slugs.add("atex-niveau2");
    if (l.includes("h0b0") || l.includes("h0v"))                                               slugs.add("habilitation-h0b0");
    if (l.includes("bs") || l.includes("be manœuvre"))                                         slugs.add("habilitation-bsbe");
    if (l.includes("b1") || l.includes("b2") || l.includes("br") || l.includes("bc"))         slugs.add("habilitation-b1b2brbc");
    if (l.includes("ssiap1") && !l.includes("recyclage"))                                      slugs.add("ssiap1");
    if (l.includes("recyclage ssiap1"))                                                        slugs.add("recyclage-ssiap1");
    if (l.includes("extincteur"))                                                               slugs.add("extincteurs");
    if (l.includes("guide-file") || l.includes("serre-file"))                                  slugs.add("guide-serre-file");
    if (l.includes("équipier") || l.includes("premiere intervention"))                         slugs.add("epi-incendie");
    if (l.includes("ssi") && l.includes("1 jour"))                                             slugs.add("ssi-exploitation-1j");
    if (l.includes("ssi") && l.includes("2 jour"))                                             slugs.add("ssi-avance-2j");
    if (l.includes("sprinkler") && l.includes("1 jour"))                                       slugs.add("sprinkler-1j");
    if (l.includes("sprinkler") && l.includes("2"))                                            slugs.add("sprinkler-2j");
    if (l.includes("sst initial"))                                                              slugs.add("sst");
    if (l.includes("mac sst"))                                                                  slugs.add("mac-sst");
  }
  return Array.from(slugs);
}

function buildWelcomeEmail(
  collab: Collaborateur,
  company: string | null,
  formations: { label: string }[],
  isNew: boolean,
): string {
  const formationList = formations.map((f) => `<li>${escapeHtml(f.label)}</li>`).join("");
  return `
    <p>Bonjour ${escapeHtml(collab.prenom)},</p>
    <p>Votre entreprise <strong>${escapeHtml(company ?? "")}</strong> a souscrit à une formation PREVENSIA.</p>
    <p>Vos accès à la plateforme sont maintenant activés pour les formations suivantes :</p>
    <ul>${formationList}</ul>
    <p>
      <a href="${SITE_URL}/connexion" style="display:inline-block;background:#b91c1c;color:#fff;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none;">
        Accéder à ma formation →
      </a>
    </p>
    <hr style="margin:24px 0;border:none;border-top:1px solid #e2e8f0;"/>
    <p style="font-size:12px;color:#64748b;">${COMPANY.name} · ${COMPANY.addressShort}</p>
  `;
}
