import { generateAttestationPdf } from "@/lib/attestation/generate-attestation-pdf";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type EmployerUserRow = {
  employer_id: string;
  role: string | null;
};

type AdminProfileRow = {
  role: string | null;
};

type EnrollmentRow = {
  id: string;
  user_id: string;
  formation_id: string | null;
  employer_id: string | null;
  ordered_by_employer: boolean | null;
  company_name: string | null;
  manager_email: string | null;
  status: string | null;
  validated_at: string | null;
  access_end: string | null;
};

type LearnerProfileRow = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
};

type FormationRow = {
  id: string;
  title: string | null;
  slug: string | null;
};

type AttestationPayload = {
  enrollmentId?: string;
  forceAdminCompletion?: boolean;
  formation?: string;
  date?: string;
  score?: number;
  total?: number;
  scorePercent?: number;
  passingScore?: number;
  passed?: boolean;
  companyName?: string;
  employeeFirstName?: string;
  employeeLastName?: string;
  orderedByEmployer?: boolean;
};

function normalizeString(value: unknown): string {
  if (typeof value === "string") return value.trim();
  if (typeof value === "number") return String(value);
  if (typeof value === "boolean") return value ? "true" : "false";
  return "";
}

function readOptionalNumber(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) return value;

  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : undefined;
  }

  return undefined;
}

function readOptionalBoolean(value: unknown): boolean | undefined {
  if (typeof value === "boolean") return value;

  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();

    if (normalized === "true") return true;
    if (normalized === "false") return false;
  }

  return undefined;
}

function normalizeText(value: string | null | undefined, fallback = "") {
  return (value ?? fallback).toString().trim();
}

function normalizeFormationKey(value: string | null | undefined) {
  return normalizeText(value).toLowerCase();
}

function estimateQuizTotal(score?: number, scorePercent?: number) {
  if (
    typeof score !== "number" ||
    !Number.isFinite(score) ||
    typeof scorePercent !== "number" ||
    !Number.isFinite(scorePercent) ||
    scorePercent <= 0
  ) {
    return undefined;
  }

  const estimatedTotal = Math.round(score / (scorePercent / 100));
  return estimatedTotal > 0 ? estimatedTotal : undefined;
}

async function readPayload(request: Request): Promise<AttestationPayload> {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = (await request.json()) as Record<string, unknown>;

    return {
      enrollmentId: normalizeString(body.enrollmentId) || undefined,
      forceAdminCompletion: readOptionalBoolean(body.forceAdminCompletion),
      formation: normalizeString(body.formation) || undefined,
      date: normalizeString(body.date) || undefined,
      score: readOptionalNumber(body.score),
      total: readOptionalNumber(body.total),
      scorePercent: readOptionalNumber(body.scorePercent),
      passingScore: readOptionalNumber(body.passingScore),
      passed: readOptionalBoolean(body.passed),
      companyName: normalizeString(body.companyName) || undefined,
      employeeFirstName: normalizeString(body.employeeFirstName) || undefined,
      employeeLastName: normalizeString(body.employeeLastName) || undefined,
      orderedByEmployer: readOptionalBoolean(body.orderedByEmployer),
    };
  }

  const formData = await request.formData();

  return {
    enrollmentId: normalizeString(formData.get("enrollmentId")) || undefined,
    forceAdminCompletion: readOptionalBoolean(
      formData.get("forceAdminCompletion")
    ),
    formation: normalizeString(formData.get("formation")) || undefined,
    date: normalizeString(formData.get("date")) || undefined,
    score: readOptionalNumber(formData.get("score")),
    total: readOptionalNumber(formData.get("total")),
    scorePercent: readOptionalNumber(formData.get("scorePercent")),
    passingScore: readOptionalNumber(formData.get("passingScore")),
    passed: readOptionalBoolean(formData.get("passed")),
    companyName: normalizeString(formData.get("companyName")) || undefined,
    employeeFirstName:
      normalizeString(formData.get("employeeFirstName")) || undefined,
    employeeLastName:
      normalizeString(formData.get("employeeLastName")) || undefined,
    orderedByEmployer: readOptionalBoolean(formData.get("orderedByEmployer")),
  };
}

async function forceCompleteEnrollmentForAdmin(
  supabase:
    | Awaited<ReturnType<typeof createClient>>
    | NonNullable<ReturnType<typeof createAdminClient>>,
  enrollmentId: string,
  adminUserId: string
) {
  const validatedAt = new Date().toISOString();

  const { error } = await supabase
    .from("enrollments")
    .update({
      status: "completed",
      validated_at: validatedAt,
      validated_by: adminUserId,
    })
    .eq("id", enrollmentId);

  return { error, validatedAt };
}

async function loadActorRights(supabase: Awaited<ReturnType<typeof createClient>>, userId: string) {
  const [{ data: employerUser, error: employerUserError }, { data: adminProfile, error: adminProfileError }] =
    await Promise.all([
      supabase
        .from("employer_users")
        .select("employer_id, role")
        .eq("user_id", userId)
        .maybeSingle<EmployerUserRow>(),
      supabase
        .from("profiles")
        .select("role")
        .eq("id", userId)
        .maybeSingle<AdminProfileRow>(),
    ]);

  return {
    employerUser,
    employerUserError,
    isEmployerManager: Boolean(employerUser?.employer_id) && !employerUserError,
    adminProfile,
    adminProfileError,
    isAdmin: adminProfile?.role === "admin",
  };
}

async function loadEnrollmentById(
  supabase: Awaited<ReturnType<typeof createClient>> | NonNullable<ReturnType<typeof createAdminClient>>,
  enrollmentId: string
) {
  return supabase
    .from("enrollments")
    .select(
      `
        id,
        user_id,
        formation_id,
        employer_id,
        ordered_by_employer,
        company_name,
        manager_email,
        status,
        validated_at,
        access_end
      `
    )
    .eq("id", enrollmentId)
    .maybeSingle<EnrollmentRow>();
}

async function loadLatestCompletedEnrollment(
  supabase: Awaited<ReturnType<typeof createClient>> | NonNullable<ReturnType<typeof createAdminClient>>,
  userId: string,
  formationHint?: string
) {
  const { data: enrollments, error } = await supabase
    .from("enrollments")
    .select(
      `
        id,
        user_id,
        formation_id,
        employer_id,
        ordered_by_employer,
        company_name,
        manager_email,
        status,
        validated_at,
        access_end
      `
    )
    .eq("user_id", userId)
    .eq("status", "completed")
    .order("validated_at", { ascending: false })
    .returns<EnrollmentRow[]>();

  if (error) {
    return { enrollment: null, error };
  }

  const completedEnrollments = enrollments ?? [];

  if (!formationHint || completedEnrollments.length === 0) {
    return { enrollment: completedEnrollments[0] ?? null, error: null };
  }

  const formationIds = [
    ...new Set(
      completedEnrollments
        .map((item) => item.formation_id)
        .filter((value): value is string => Boolean(value))
    ),
  ];

  const { data: formations, error: formationError } = formationIds.length
    ? await supabase
        .from("formations")
        .select("id, title, slug")
        .in("id", formationIds)
        .returns<FormationRow[]>()
    : { data: [] as FormationRow[], error: null };

  if (formationError) {
    return { enrollment: null, error: formationError };
  }

  const formationsMap = new Map((formations ?? []).map((item) => [item.id, item]));
  const normalizedHint = normalizeFormationKey(formationHint);

  const matchedEnrollment =
    completedEnrollments.find((item) => {
      const formation = item.formation_id
        ? formationsMap.get(item.formation_id)
        : null;

      return (
        normalizeFormationKey(formation?.title).includes(normalizedHint) ||
        normalizeFormationKey(formation?.slug).includes(normalizedHint)
      );
    }) ?? null;

  return { enrollment: matchedEnrollment ?? completedEnrollments[0] ?? null, error: null };
}

async function loadLearnerProfile(
  supabase: Awaited<ReturnType<typeof createClient>> | NonNullable<ReturnType<typeof createAdminClient>>,
  userId: string
) {
  return supabase
    .from("profiles")
    .select("id, first_name, last_name, email")
    .eq("id", userId)
    .maybeSingle<LearnerProfileRow>();
}

async function loadFormation(
  supabase: Awaited<ReturnType<typeof createClient>> | NonNullable<ReturnType<typeof createAdminClient>>,
  formationId: string | null
) {
  if (!formationId) {
    return { data: null, error: null };
  }

  return supabase
    .from("formations")
    .select("id, title, slug")
    .eq("id", formationId)
    .maybeSingle<FormationRow>();
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const payload = await readPayload(request);

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: "Utilisateur non authentifié." },
        { status: 401 }
      );
    }

    const actorRights = await loadActorRights(supabase, user.id);
    const adminSupabase = actorRights.isAdmin ? createAdminClient() : null;
    const attestationReadClient = adminSupabase ?? supabase;

    if (actorRights.adminProfileError) {
      return NextResponse.json(
        { error: `Erreur lecture profil admin: ${actorRights.adminProfileError.message}` },
        { status: 500 }
      );
    }

    let enrollment: EnrollmentRow | null = null;

    if (payload.enrollmentId) {
      const { data, error } = await loadEnrollmentById(
        attestationReadClient,
        payload.enrollmentId
      );

      if (error) {
        return NextResponse.json(
          { error: `Erreur lecture inscription: ${error.message}` },
          { status: 500 }
        );
      }

      enrollment = data;

      if (!enrollment) {
        return NextResponse.json(
          { error: "Inscription introuvable." },
          { status: 404 }
        );
      }

      const isLearnerOwner = enrollment.user_id === user.id;
      const isEmployerOwner =
        actorRights.isEmployerManager &&
        Boolean(enrollment.employer_id) &&
        enrollment.employer_id === actorRights.employerUser?.employer_id;

      if (!isLearnerOwner && !isEmployerOwner && !actorRights.isAdmin) {
        return NextResponse.json(
          { error: "Accès non autorisé à cette attestation." },
          { status: 403 }
        );
      }
    } else {
      const { enrollment: inferredEnrollment, error } =
        await loadLatestCompletedEnrollment(
          attestationReadClient,
          user.id,
          payload.formation
        );

      if (error) {
        return NextResponse.json(
          { error: `Erreur recherche attestation: ${error.message}` },
          { status: 500 }
        );
      }

      enrollment = inferredEnrollment;

      if (!enrollment) {
        // Admins can generate a preview attestation even without an enrollment record
        if (actorRights.isAdmin) {
          enrollment = {
            id: "admin-preview",
            user_id: user.id,
            formation_id: null,
            employer_id: null,
            ordered_by_employer: false,
            company_name: null,
            manager_email: null,
            status: "completed",
            validated_at: new Date().toISOString(),
            access_end: null,
          };
        } else {
          return NextResponse.json(
            {
              error:
                "Aucune attestation terminée n'a été trouvée pour ce compte.",
            },
            { status: 404 }
          );
        }
      }
    }

    if (enrollment.status !== "completed") {
      const canForceAdminCompletion =
        actorRights.isAdmin &&
        Boolean(payload.enrollmentId) &&
        payload.forceAdminCompletion === true;

      if (!canForceAdminCompletion) {
        return NextResponse.json(
          {
            error:
              "L'attestation n'est disponible qu'après validation complète de la formation.",
          },
          { status: 403 }
        );
      }

      const { error: forceError, validatedAt } =
        await forceCompleteEnrollmentForAdmin(
          adminSupabase ?? supabase,
          enrollment.id,
          user.id
        );

      if (forceError) {
        return NextResponse.json(
          {
            error: `Erreur forçage attestation: ${forceError.message}`,
          },
          { status: 500 }
        );
      }

      enrollment = {
        ...enrollment,
        status: "completed",
        validated_at: enrollment.validated_at ?? validatedAt,
      };
    }

    const [{ data: learnerProfile, error: learnerProfileError }, { data: formation, error: formationError }] =
      await Promise.all([
        loadLearnerProfile(attestationReadClient, enrollment.user_id),
        loadFormation(attestationReadClient, enrollment.formation_id),
      ]);

    if (learnerProfileError) {
      return NextResponse.json(
        { error: `Erreur lecture profil apprenant: ${learnerProfileError.message}` },
        { status: 500 }
      );
    }

    if (formationError) {
      return NextResponse.json(
        { error: `Erreur lecture formation: ${formationError.message}` },
        { status: 500 }
      );
    }

    const score = payload.score ?? 0;
    const scorePercent = payload.scorePercent ?? 0;
    const total = payload.total ?? estimateQuizTotal(score, scorePercent) ?? 0;
    const completionDate =
      enrollment.validated_at ?? payload.date ?? enrollment.access_end ?? undefined;

    const formationTitle =
      normalizeText(formation?.title) ||
      normalizeText(formation?.slug) ||
      normalizeText(payload.formation, "Formation");

    const companyName =
      normalizeText(enrollment.company_name) ||
      normalizeText(payload.companyName);

    const employeeFirstName =
      normalizeText(learnerProfile?.first_name) ||
      normalizeText(payload.employeeFirstName);

    const employeeLastName =
      normalizeText(learnerProfile?.last_name) ||
      normalizeText(payload.employeeLastName);

    const orderedByEmployer =
      enrollment.ordered_by_employer ?? payload.orderedByEmployer ?? false;

    const { pdfBuffer, safeFileName } = await generateAttestationPdf({
      userId: enrollment.user_id,
      formation: formationTitle,
      date: completionDate,
      score,
      total,
      scorePercent,
      passingScore: payload.passingScore,
      passed: payload.passed,
      companyName,
      employeeFirstName,
      employeeLastName,
      orderedByEmployer,
      learnerEmail: normalizeText(learnerProfile?.email) || user.email || "",
    });

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${safeFileName}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Erreur génération attestation :", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `Erreur serveur attestation: ${error.message}`
            : "Erreur lors de la génération de l'attestation.",
      },
      { status: 500 }
    );
  }
}
