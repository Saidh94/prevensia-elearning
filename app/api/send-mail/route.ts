import { NextResponse } from "next/server";
import { Resend } from "resend";
import { randomBytes } from "node:crypto";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  getModuleContentBySlug,
  getModuleSlugCandidates,
  resolveModuleSlug,
} from "@/lib/supabase/elearning/module-registry";

export const runtime = "nodejs";

const apiKey = process.env.RESEND_API_KEY?.trim();

if (!apiKey) {
  throw new Error("RESEND_API_KEY manquante dans Vercel");
}

const resend = new Resend(apiKey);

const FROM_EMAIL = "PREVENSIA <contact@prevensia-formation.fr>";
const ADMIN_EMAIL = "prevensia.formation@outlook.fr";

type FormationRecord = {
  id: string;
  slug: string | null;
  title: string | null;
};

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

type CanonicalFormationKey =
  | "h0b0"
  | "bsbe"
  | "b1b2brbc"
  | "incendie"
  | "ssi-exploitation"
  | "sprinkler"
  | "sst";

type FormationSeed = {
  slug: string;
  title: string;
  description: string;
  durationHours: number | null;
  mode: string;
  isPublished: boolean;
  elearningDuration: string | null;
};

const FORMATION_SEEDS: Record<CanonicalFormationKey, FormationSeed> = {
  h0b0: {
    slug: "h0b0",
    title: "Habilitation electrique H0B0",
    description: "Formation destinee au personnel non electricien.",
    durationHours: 7,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "1 h 20 a 1 h 45",
  },
  bsbe: {
    slug: "bs-be-manoeuvre",
    title: "BS et BE Manoeuvre",
    description: "Operations elementaires et manoeuvres BT.",
    durationHours: 10,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "7 h 30 a 9 h 30",
  },
  b1b2brbc: {
    slug: "b1-b1v-b2-b2v-br-bc",
    title: "B1 / B1V / B2 / B2V / BR / BC",
    description: "Formation complete personnel electricien.",
    durationHours: 14,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "8 h 00 a 11 h 00",
  },
  incendie: {
    slug: "securite-incendie",
    title: "Securite incendie, alerte et evacuation",
    description: "Module PREVENSIA sur la prevention incendie et les premiers reflexes.",
    durationHours: 4,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "45 a 60 minutes",
  },
  "ssi-exploitation": {
    slug: "ssi-exploitation",
    title: "Exploitation des SSI - fondamentaux",
    description: "Module PREVENSIA d'exploitation des systemes de securite incendie.",
    durationHours: 5,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "45 a 60 minutes",
  },
  sprinkler: {
    slug: "sprinkler",
    title: "Exploitation sprinkler et referentiels techniques",
    description: "Module PREVENSIA d'exploitation sprinkler et reperes techniques.",
    durationHours: 5,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "45 a 60 minutes",
  },
  sst: {
    slug: "sst",
    title: "SST - Sauveteur Secouriste du Travail",
    description: "Module PREVENSIA d'introduction a la prevention et aux gestes de premier secours.",
    durationHours: 7,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "45 a 60 minutes",
  },
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

function inferCanonicalFormationSlug(
  formation: string,
  categorie: string
): CanonicalFormationKey | null {
  const normalizedFormation = normalize(formation);
  const normalizedCategory = normalize(categorie);

  if (normalizedFormation.includes("h0b0") || normalizedFormation.includes("h0v")) {
    return "h0b0";
  }

  if (
    normalizedFormation.includes("bs") ||
    normalizedFormation.includes("be manoeuvre") ||
    normalizedFormation.includes("manoeuvre")
  ) {
    return "bsbe";
  }

  if (
    normalizedFormation.includes("b1") ||
    normalizedFormation.includes("b2") ||
    normalizedFormation.includes("br") ||
    normalizedFormation.includes("bc")
  ) {
    return "b1b2brbc";
  }

  if (normalizedFormation.includes("sprinkler")) {
    return "sprinkler";
  }

  if (normalizedFormation.includes("ssi")) {
    return "ssi-exploitation";
  }

  if (normalizedFormation.includes("sst") || normalizedCategory === "sst") {
    return "sst";
  }

  if (
    normalizedCategory === "incendie" ||
    normalizedFormation.includes("extincteur") ||
    normalizedFormation.includes("guide-file") ||
    normalizedFormation.includes("serre-file") ||
    normalizedFormation.includes("premiere intervention")
  ) {
    return "incendie";
  }

  const resolvedSlug = resolveModuleSlug(formation);

  if (
    resolvedSlug &&
    Object.prototype.hasOwnProperty.call(FORMATION_SEEDS, resolvedSlug)
  ) {
    return resolvedSlug as CanonicalFormationKey;
  }

  return null;
}

function buildSearchTokens(formation: string, categorie: string) {
  const normalizedFormation = normalize(formation);
  const normalizedCategory = normalize(categorie);
  const rawTokens = `${normalizedFormation} ${normalizedCategory}`
    .split(/[^a-z0-9]+/)
    .map((token) => token.trim())
    .filter((token) => token.length >= 2);

  return [...new Set(rawTokens)];
}

function getFormationSeed(canonicalSlug: CanonicalFormationKey): FormationSeed {
  const seed = FORMATION_SEEDS[canonicalSlug];
  const moduleContent = getModuleContentBySlug(canonicalSlug);

  if (!moduleContent) {
    return seed;
  }

  return {
    ...seed,
    title: seed.title || moduleContent.title,
    description: seed.description || moduleContent.subtitle || moduleContent.objective || "",
    elearningDuration: seed.elearningDuration || moduleContent.duration || null,
  };
}

async function ensureFormationRecord(
  adminClient: NonNullable<ReturnType<typeof createAdminClient>>,
  canonicalSlug: CanonicalFormationKey
) {
  const seed = getFormationSeed(canonicalSlug);

  const { data: existingBySlug, error: existingBySlugError } = await adminClient
    .from("formations")
    .select("id, slug, title")
    .eq("slug", seed.slug)
    .maybeSingle<FormationRecord>();

  if (existingBySlugError) {
    throw new Error(`Erreur lecture formation: ${existingBySlugError.message}`);
  }

  if (existingBySlug) {
    return existingBySlug;
  }

  const { data: insertedRecord, error: insertError } = await adminClient
    .from("formations")
    .insert({
      slug: seed.slug,
      title: seed.title,
      description: seed.description,
      duration_hours: seed.durationHours,
      mode: seed.mode,
      is_published: seed.isPublished,
      elearning_duration: seed.elearningDuration,
    })
    .select("id, slug, title")
    .single<FormationRecord>();

  if (insertError || !insertedRecord) {
    throw new Error(
      `Erreur creation formation: ${insertError?.message || "Insertion impossible"}`
    );
  }

  return insertedRecord;
}

async function resolveFormation(
  adminClient: NonNullable<ReturnType<typeof createAdminClient>>,
  formation: string,
  categorie: string
) {
  const { data, error } = await adminClient
    .from("formations")
    .select("id, slug, title")
    .returns<FormationRecord[]>();

  if (error) {
    throw new Error(`Erreur lecture formations: ${error.message}`);
  }

  const formations = data ?? [];
  const normalizedRequestedTitle = normalize(formation);
  const canonicalSlug = inferCanonicalFormationSlug(formation, categorie);
  const slugCandidates = canonicalSlug
    ? [...new Set([getFormationSeed(canonicalSlug).slug, ...getModuleSlugCandidates(canonicalSlug)])]
    : [];
  const searchTokens = buildSearchTokens(formation, categorie);

  if (canonicalSlug) {
    const expectedDbSlug = getFormationSeed(canonicalSlug).slug;
    const exactCanonicalRecord = formations.find(
      (item) => normalize(item.slug) === normalize(expectedDbSlug)
    );

    if (exactCanonicalRecord) {
      return exactCanonicalRecord;
    }
  }

  let bestMatch: FormationRecord | null = null;
  let bestScore = -1;

  for (const item of formations) {
    const itemTitle = normalize(item.title);
    const itemSlug = normalize(item.slug);
    let score = 0;

    if (itemTitle && itemTitle === normalizedRequestedTitle) {
      score += 200;
    }

    if (itemSlug && slugCandidates.includes(itemSlug)) {
      score += 120;
    }

    if (canonicalSlug && itemSlug === canonicalSlug) {
      score += 140;
    }

    const matchingTokens = searchTokens.filter(
      (token) => itemTitle.includes(token) || itemSlug.includes(token)
    ).length;

    score += matchingTokens * 10;

    if (itemTitle && normalizedRequestedTitle && itemTitle.includes(normalizedRequestedTitle)) {
      score += 30;
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  if (!bestMatch || bestScore <= 0) {
    if (canonicalSlug) {
      return ensureFormationRecord(adminClient, canonicalSlug);
    }

    throw new Error(`Aucune formation correspondante n'a ete trouvee pour "${formation}".`);
  }

  return bestMatch;
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

    const body = await request.json();

    const type = String(body?.type ?? "").trim();

    const firstName = String(body?.firstName ?? body?.prenom ?? "").trim();
    const lastName = String(body?.lastName ?? body?.nom ?? "").trim();
    const email = String(body?.email ?? "").trim().toLowerCase();
    const phone = String(body?.phone ?? body?.telephone ?? "").trim();
    const company = String(body?.company ?? body?.entreprise ?? "").trim();
    const sessionId = String(body?.sessionId ?? "").trim();
    const formation = String(body?.formation ?? "").trim();
    const categorie = String(body?.categorie ?? "").trim();
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

    if (type && type !== "inscription") {
      return NextResponse.json(
        {
          success: false,
          error: "Type de demande non gere par cette route.",
        },
        { status: 400 }
      );
    }

    const formationRecord = await resolveFormation(adminClient, formation, categorie);
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
      <p><strong>Prenom :</strong> ${escapeHtml(firstName)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Telephone :</strong> ${escapeHtml(phone || "Non renseigne")}</p>
      <p><strong>Entreprise :</strong> ${escapeHtml(company || "Non renseignee")}</p>
      <p><strong>Categorie :</strong> ${escapeHtml(categorie || "Non renseignee")}</p>
      <p><strong>Formation demandee :</strong> ${escapeHtml(formation)}</p>
      <p><strong>Formation rattachee :</strong> ${escapeHtml(
        formationRecord.title || formationRecord.slug || "Formation"
      )}</p>
      <p><strong>Date de session :</strong> ${escapeHtml(dateSession || "Non renseignee")}</p>
      <p><strong>Format :</strong> ${escapeHtml(format || "Non renseigne")}</p>
      <p><strong>ID session :</strong> ${escapeHtml(sessionId || "Non renseigne")}</p>
      <p><strong>Compte PREVENSIA :</strong> ${
        userAccount.accountState === "created"
          ? "Compte cree et email d'acces envoye"
          : "Compte existant reutilise"
      }</p>
      <p><strong>Inscription :</strong> ${
        enrollment.enrollmentState === "created"
          ? "Nouvelle inscription creee"
          : "Inscription existante reutilisee"
      }</p>
      <p><strong>ID inscription :</strong> ${escapeHtml(enrollment.enrollmentId)}</p>
    `;

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
        ? "Vos acces PREVENSIA FORMATION"
        : "Confirmation de votre inscription PREVENSIA";

    const userHtml =
      userAccount.accountState === "created"
        ? `
          ${logoHtml}
          <p>Bonjour ${escapeHtml(firstName)},</p>
          <p>
            Votre inscription a bien ete enregistree pour
            <strong>${escapeHtml(formation)}</strong>.
          </p>
          <p>
            Votre compte PREVENSIA a ete cree. Voici vos acces de premiere connexion :
          </p>
          <p><strong>Identifiant :</strong> ${escapeHtml(email)}</p>
          <p><strong>Mot de passe provisoire :</strong> ${escapeHtml(
            userAccount.temporaryPassword || ""
          )}</p>
          ${
            dateSession
              ? `<p><strong>Date de session reperee :</strong> ${escapeHtml(dateSession)}</p>`
              : ""
          }
          ${
            format
              ? `<p><strong>Format PREVENSIA :</strong> ${escapeHtml(format)}</p>`
              : ""
          }
          <p>
            Premiere connexion :
            <a href="${loginUrl}">${loginUrl}</a>
          </p>
          <p>
            Important : apres votre premiere connexion, remplacez votre mot de passe
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
            Votre inscription a bien ete enregistree pour
            <strong>${escapeHtml(formation)}</strong>.
          </p>
          <p>
            Un compte PREVENSIA existe deja avec cette adresse email. Vous pouvez vous
            connecter avec vos identifiants habituels ici :
            <a href="${loginUrl}">${loginUrl}</a>
          </p>
          ${
            dateSession
              ? `<p><strong>Date de session reperee :</strong> ${escapeHtml(dateSession)}</p>`
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
      temporaryPassword:
        process.env.NODE_ENV !== "production"
          ? userAccount.temporaryPassword
          : undefined,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
