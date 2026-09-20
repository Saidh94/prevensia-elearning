import { NextResponse } from "next/server";
import { Resend } from "resend";
import { randomBytes } from "node:crypto";
import { createAdminClient } from "@/lib/supabase/admin";
import { resolveFormation } from "@/lib/formations/resolve-formation";

export const runtime = "nodejs";

// ── Rate-limiter en mémoire (par IP, max 5 req / 10 min) ─────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

// Validation email stricte
function isValidEmail(email: string): boolean {
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
}

// Validation téléphone (optionnel mais si présent : chiffres + indicatifs)
function isValidPhone(phone: string): boolean {
  if (!phone) return true; // optionnel
  return /^[\d\s().+\-]{6,20}$/.test(phone);
}


// Resend instancié à la demande dans POST pour éviter le throw au chargement.
let _resend: import("resend").Resend | null = null;
function getResend() {
  if (_resend) return _resend;
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) throw new Error("RESEND_API_KEY manquante – configurez-la dans Vercel.");
  _resend = new Resend(apiKey);
  return _resend;
}

const FROM_EMAIL = "PREVENSIA <contact@prevensia-formation.fr>";
const ADMIN_EMAIL = "contact@prevensia-formation.fr";

type ProfileRecord = {
  id: string;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  company: string | null;
};

type EnrollmentRecord = {
  id: string;
  status: string | null;
};

function normalize(value: string | null | undefined) {
  return (value ?? "").trim().toLowerCase();
}

function escapeHtml(value: string | null | undefined) {
  return (value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function generateTemporaryPassword() {
  return `Prevensia-${randomBytes(5).toString("hex")}-A1`;
}

async function findProfileByEmail(
  adminClient: NonNullable<ReturnType<typeof createAdminClient>>,
  email: string
) {
  const { data, error } = await adminClient
    .from("profiles")
    .select("id, email, first_name, last_name, phone, company")
    .eq("email", email)
    .maybeSingle<ProfileRecord>();

  if (error) {
    throw new Error(`Erreur lecture profil: ${error.message}`);
  }

  return data ?? null;
}

async function upsertProfile(
  adminClient: NonNullable<ReturnType<typeof createAdminClient>>,
  profile: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    company: string;
  }
) {
  const { error } = await adminClient.from("profiles").upsert(
    {
      id: profile.id,
      email: profile.email,
      first_name: profile.firstName || null,
      last_name: profile.lastName || null,
      phone: profile.phone || null,
      company: profile.company || null,
      role: "learner",
    },
    { onConflict: "id" }
  );

  if (error) {
    throw new Error(`Erreur mise a jour profil: ${error.message}`);
  }
}

async function createOrReuseUser(
  adminClient: NonNullable<ReturnType<typeof createAdminClient>>,
  payload: {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    company: string;
  }
) {
  const existingProfile = await findProfileByEmail(adminClient, payload.email);

  if (existingProfile) {
    await upsertProfile(adminClient, {
      id: existingProfile.id,
      email: payload.email,
      firstName: payload.firstName || existingProfile.first_name || "",
      lastName: payload.lastName || existingProfile.last_name || "",
      phone: payload.phone || existingProfile.phone || "",
      company: payload.company || existingProfile.company || "",
    });

    return {
      userId: existingProfile.id,
      temporaryPassword: null as string | null,
      accountState: "existing" as const,
    };
  }

  const temporaryPassword = generateTemporaryPassword();
  const { data, error } = await adminClient.auth.admin.createUser({
    email: payload.email,
    password: temporaryPassword,
    email_confirm: true,
    user_metadata: {
      first_name: payload.firstName,
      last_name: payload.lastName,
      must_change_password: true,
      onboarding_source: "public_registration",
    },
  });

  if (error || !data.user) {
    throw new Error(
      error?.message ||
        "Creation du compte impossible pour cette adresse email."
    );
  }

  await upsertProfile(adminClient, {
    id: data.user.id,
    email: payload.email,
    firstName: payload.firstName,
    lastName: payload.lastName,
    phone: payload.phone,
    company: payload.company,
  });

  return {
    userId: data.user.id,
    temporaryPassword,
    accountState: "created" as const,
  };
}

async function createOrReuseEnrollment(
  adminClient: NonNullable<ReturnType<typeof createAdminClient>>,
  payload: {
    userId: string;
    formationId: string;
    company: string;
  }
) {
  const { data: existingEnrollments, error: existingEnrollmentError } =
    await adminClient
      .from("enrollments")
      .select("id, status")
      .eq("user_id", payload.userId)
      .eq("formation_id", payload.formationId)
      .in("status", ["not_started", "in_progress", "pending_interview", "quiz_passed"])
      .order("created_at", { ascending: false })
      .limit(1)
      .returns<EnrollmentRecord[]>();

  if (existingEnrollmentError) {
    throw new Error(
      `Erreur lecture inscription existante: ${existingEnrollmentError.message}`
    );
  }

  const existingEnrollment = existingEnrollments?.[0] ?? null;

  if (existingEnrollment) {
    const { error } = await adminClient
      .from("enrollments")
      .update({
        company_name: payload.company || null,
      })
      .eq("id", existingEnrollment.id);

    if (error) {
      throw new Error(`Erreur mise a jour inscription: ${error.message}`);
    }

    return {
      enrollmentId: existingEnrollment.id,
      enrollmentState: "existing" as const,
    };
  }

  const { data: insertedEnrollment, error: insertError } = await adminClient
    .from("enrollments")
    .insert({
      user_id: payload.userId,
      formation_id: payload.formationId,
      status: "not_started",
      payment_status: "pending",
      company_name: payload.company || null,
      manager_email: null,
      ordered_by_employer: false,
      employer_id: null,
      access_start: null,
      access_end: null,
    })
    .select("id")
    .single<{ id: string }>();

  if (insertError || !insertedEnrollment) {
    throw new Error(
      `Erreur creation inscription: ${insertError?.message || "Insertion impossible"}`
    );
  }

  return {
    enrollmentId: insertedEnrollment.id,
    enrollmentState: "created" as const,
  };
}

export async function POST(request: Request) {
  try {
    const adminClient = createAdminClient();

    if (!adminClient) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Configuration Supabase admin manquante. Ajoutez NEXT_PUBLIC_SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY.",
        },
        { status: 500 }
      );
    }

    // ── Sécurité : rate-limit par IP ─────────────────────────────────────────
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = (forwarded ? forwarded.split(",")[0] : "unknown").trim();
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Trop de demandes. Réessayez dans 10 minutes." },
        { status: 429 }
      );
    }

    const body = await request.json();

    const type = String(body?.type ?? "").trim();

    const firstName = String(body?.firstName ?? body?.prenom ?? "").trim();
    const lastName = String(body?.lastName ?? body?.nom ?? "").trim();
    const email = String(body?.email ?? "").trim().toLowerCase();
    const phone = String(body?.phone ?? body?.telephone ?? "").trim();
    const company = String(body?.company ?? body?.entreprise ?? "").trim();
    const sessionId = String(body?.sessionId ?? "").trim();
    const formation = String(body?.formation ?? "").trim();
    const catégorie = String(body?.catégorie ?? "").trim();
    const dateSession = String(body?.dateSession ?? body?.date ?? "").trim();
    const format = String(body?.format ?? "").trim();

    if (!firstName || !lastName || !email || !formation) {
      return NextResponse.json(
        {
          success: false,
          error: "Champs obligatoires manquants.",
        },
        { status: 400 }
      );
    }

    // ── Honeypot anti-bot ────────────────────────────────────────────────────
    const honeypot = String(body?.website ?? body?._hp ?? "").trim();
    if (honeypot) {
      // Champ piège rempli par un bot — on renvoie 200 pour ne pas alerter
      return NextResponse.json({ success: true });
    }

    // ── Validation stricte email et téléphone ─────────────────────────────
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Adresse email invalide." },
        { status: 400 }
      );
    }
    if (phone && !isValidPhone(phone)) {
      return NextResponse.json(
        { success: false, error: "Numéro de téléphone invalide." },
        { status: 400 }
      );
    }

    if (type && type !== "inscription") {
      return NextResponse.json(
        {
          success: false,
          error: "Type de demande non gere par cette route.",
        },
        { status: 400 }
      );
    }

    const formationRecord = await resolveFormation(adminClient, formation, catégorie);
    const userAccount = await createOrReuseUser(adminClient, {
      email,
      firstName,
      lastName,
      phone,
      company,
    });
    const enrollment = await createOrReuseEnrollment(adminClient, {
      userId: userAccount.userId,
      formationId: formationRecord.id,
      company,
    });

    const adminSubject = `Nouvelle inscription - ${formation || "Formation"}`;

    const logoHtml = `<div style="margin-bottom:20px;"><img src="https://prevensia-formation.fr/images/logo-prevensia.png" alt="PREVENSIA FORMATION" width="220" style="display:block;" /></div>`;

    const adminHtml = `
      ${logoHtml}
      <h2>Nouvelle inscription PREVENSIA</h2>
      <p><strong>Nom :</strong> ${escapeHtml(lastName)}</p>
      <p><strong>Prénom :</strong> ${escapeHtml(firstName)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Téléphone :</strong> ${escapeHtml(phone || "Non renseigné")}</p>
      <p><strong>Entreprise :</strong> ${escapeHtml(company || "Non renseignée")}</p>
      <p><strong>Catégorie :</strong> ${escapeHtml(catégorie || "Non renseignée")}</p>
      <p><strong>Formation demandée :</strong> ${escapeHtml(formation)}</p>
      <p><strong>Formation rattachee :</strong> ${escapeHtml(
        formationRecord.title || formationRecord.slug || "Formation"
      )}</p>
      <p><strong>Date de session :</strong> ${escapeHtml(dateSession || "Non renseignée")}</p>
      <p><strong>Format :</strong> ${escapeHtml(format || "Non renseigné")}</p>
      <p><strong>ID session :</strong> ${escapeHtml(sessionId || "Non renseigné")}</p>
      <p><strong>Compte PREVENSIA :</strong> ${
        userAccount.accountState === "created"
          ? "Compte créé et email d'accès envoyé"
          : "Compte existant réutilisé"
      }</p>
      <p><strong>Inscription :</strong> ${
        enrollment.enrollmentState === "created"
          ? "Nouvelle inscription créée"
          : "Inscription existante réutilisée"
      }</p>
      <p><strong>ID inscription :</strong> ${escapeHtml(enrollment.enrollmentId)}</p>
    `;

    const resend = getResend();
    const adminResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: adminSubject,
      html: adminHtml,
    });

    if (adminResult.error) {
      return NextResponse.json(
        {
          success: false,
          step: "admin",
          error: adminResult.error.message,
        },
        { status: 500 }
      );
    }

    const loginUrl = "https://prevensia-formation.fr/connexion";
    const passwordUrl = "https://prevensia-formation.fr/mot-de-passe";

    const userSubject =
      userAccount.accountState === "created"
        ? "Vos accès PREVENSIA FORMATION"
        : "Confirmation de votre inscription PREVENSIA";

    const userHtml =
      userAccount.accountState === "created"
        ? `
          ${logoHtml}
          <p>Bonjour ${escapeHtml(firstName)},</p>
          <p>
            Votre inscription a bien été enregistrée pour
            <strong>${escapeHtml(formation)}</strong>.
          </p>
          <p>
            Votre compte PREVENSIA a été créé. Voici vos accès de première connexion :
          </p>
          <p><strong>Identifiant :</strong> ${escapeHtml(email)}</p>
          <p><strong>Mot de passe provisoire :</strong> ${escapeHtml(
            userAccount.temporaryPassword || ""
          )}</p>
          ${
            dateSession
              ? `<p><strong>Date de session repérée :</strong> ${escapeHtml(dateSession)}</p>`
              : ""
          }
          ${
            format
              ? `<p><strong>Format PREVENSIA :</strong> ${escapeHtml(format)}</p>`
              : ""
          }
          <p>
            Première connexion :
            <a href="${loginUrl}">${loginUrl}</a>
          </p>
          <p>
            Important : après votre première connexion, remplacez votre mot de passe
            provisoire par un mot de passe personnel ici :
            <a href="${passwordUrl}">${passwordUrl}</a>
          </p>
          <p>
            Vous retrouverez ensuite votre parcours, votre quiz, vos validations et
            vos documents dans votre espace PREVENSIA.
          </p>
          <p>Cordialement,<br />PREVENSIA FORMATION</p>
        `
        : `
          ${logoHtml}
          <p>Bonjour ${escapeHtml(firstName)},</p>
          <p>
            Votre inscription a bien été enregistrée pour
            <strong>${escapeHtml(formation)}</strong>.
          </p>
          <p>
            Un compte PREVENSIA existe déjà avec cette adresse email. Vous pouvez vous
            connecter avec vos identifiants habituels ici :
            <a href="${loginUrl}">${loginUrl}</a>
          </p>
          ${
            dateSession
              ? `<p><strong>Date de session repérée :</strong> ${escapeHtml(dateSession)}</p>`
              : ""
          }
          ${
            format
              ? `<p><strong>Format PREVENSIA :</strong> ${escapeHtml(format)}</p>`
              : ""
          }
          <p>
            Si vous utilisez encore un mot de passe provisoire, pensez a le remplacer
            ici :
            <a href="${passwordUrl}">${passwordUrl}</a>
          </p>
          <p>Cordialement,<br />PREVENSIA FORMATION</p>
        `;

    const userResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: userSubject,
      html: userHtml,
    });

    if (userResult.error) {
      return NextResponse.json(
        {
          success: false,
          step: "user",
          error: userResult.error.message,
          adminSent: true,
          adminMessageId: adminResult.data?.id ?? null,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      enrollmentId: enrollment.enrollmentId,
      accountState: userAccount.accountState,
      adminMessageId: adminResult.data?.id ?? null,
      userMessageId: userResult.data?.id ?? null,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}