import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getStripeClient } from "@/lib/payments/stripe";
import { getModuleContentBySlug, getModuleLabelBySlug } from "@/lib/supabase/elearning/module-registry";
import { generateConventionPdf, sanitizeFileName } from "@/lib/convention/generate-convention-pdf";

export const runtime = "nodejs";

const TVA_EXEMPT = process.env.PREVENSIA_TVA_EXEMPT === "true";
const TVA_RATE = TVA_EXEMPT ? 0 : 20;

type EnrollmentRow = {
  id: string;
  user_id: string;
  formation_id: string | null;
  employer_id: string | null;
  company_name: string | null;
  manager_email: string | null;
  payment_status: string | null;
  access_start: string | null;
  access_end: string | null;
  created_at: string;
  stripe_invoice_id: string | null;
  formations: { title: string | null; slug: string | null } | { title: string | null; slug: string | null }[] | null;
};

type ProfileRow = {
  first_name: string | null;
  last_name: string | null;
  email: string | null;
};

type EmployerUserRow = { employer_id: string; role: string | null };
type AdminProfileRow = { role: string | null };

function getSingleFormation(
  formation: EnrollmentRow["formations"]
): { title: string | null; slug: string | null } | null {
  if (!formation) return null;
  return Array.isArray(formation) ? formation[0] ?? null : formation;
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let enrollmentId: string | null = null;

    if (contentType.includes("application/json")) {
      const body = (await request.json()) as Record<string, unknown>;
      enrollmentId = typeof body.enrollmentId === "string" ? body.enrollmentId.trim() : null;
    } else {
      const formData = await request.formData();
      enrollmentId = String(formData.get("enrollmentId") || "").trim() || null;
    }

    if (!enrollmentId) {
      return NextResponse.json({ error: "enrollmentId manquant" }, { status: 400 });
    }

    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Non authentifie" }, { status: 401 });
    }

    const [{ data: employerUser }, { data: adminProfile }] = await Promise.all([
      supabase.from("employer_users").select("employer_id, role").eq("user_id", user.id).maybeSingle<EmployerUserRow>(),
      supabase.from("profiles").select("role").eq("id", user.id).maybeSingle<AdminProfileRow>(),
    ]);

    const isAdmin = adminProfile?.role === "admin";
    const adminSupabase = isAdmin ? createAdminClient() : null;
    const readClient = adminSupabase ?? supabase;

    const { data: enrollment, error: enrollmentError } = await readClient
      .from("enrollments")
      .select(
        `
          id, user_id, formation_id, employer_id, company_name, manager_email,
          payment_status, access_start, access_end, created_at, stripe_invoice_id,
          formations ( title, slug )
        `
      )
      .eq("id", enrollmentId)
      .maybeSingle<EnrollmentRow>();

    if (enrollmentError) {
      return NextResponse.json({ error: `Erreur lecture inscription: ${enrollmentError.message}` }, { status: 500 });
    }

    if (!enrollment) {
      return NextResponse.json({ error: "Inscription introuvable." }, { status: 404 });
    }

    const isLearnerOwner = enrollment.user_id === user.id;
    const isEmployerOwner = Boolean(employerUser?.employer_id) && employerUser?.employer_id === enrollment.employer_id;

    if (!isLearnerOwner && !isEmployerOwner && !isAdmin) {
      return NextResponse.json({ error: "Acces non autorise." }, { status: 403 });
    }

    if (enrollment.payment_status !== "paid") {
      return NextResponse.json(
        { error: "La convention n'est disponible qu'apres confirmation du paiement." },
        { status: 403 }
      );
    }

    const { data: learnerProfile } = await readClient
      .from("profiles")
      .select("first_name, last_name, email")
      .eq("id", enrollment.user_id)
      .maybeSingle<ProfileRow>();

    const formation = getSingleFormation(enrollment.formations);
    const moduleContent = formation?.slug ? getModuleContentBySlug(formation.slug) : null;
    const formationTitle =
      (formation?.slug && getModuleLabelBySlug(formation.slug)) ||
      formation?.title ||
      "Formation PREVENSIA";

    const learnerFullName =
      [learnerProfile?.first_name, learnerProfile?.last_name].filter(Boolean).join(" ").trim() ||
      user.email ||
      "Apprenant";
    const learnerEmail = learnerProfile?.email || user.email || "";

    const beneficiaryIsCompany = Boolean(enrollment.company_name?.trim());
    const beneficiaryName = beneficiaryIsCompany ? enrollment.company_name!.trim() : learnerFullName;

    // ── Prix : récupéré depuis la facture Stripe déjà émise lors du paiement ──
    let priceTTC = 0;
    if (enrollment.stripe_invoice_id) {
      try {
        const stripe = getStripeClient();
        const invoice = await stripe.invoices.retrieve(enrollment.stripe_invoice_id);
        priceTTC = (invoice.total ?? 0) / 100;
      } catch {
        priceTTC = 0;
      }
    }
    const priceHT = TVA_EXEMPT ? priceTTC : Math.round((priceTTC / 1.2) * 100) / 100;

    const numero = `CONV-${enrollment.id.slice(0, 8).toUpperCase()}`;

    const pdfBytes = await generateConventionPdf({
      numero,
      dateSignature: enrollment.created_at,
      beneficiaryName,
      beneficiaryIsCompany,
      learnerFullName,
      learnerEmail,
      formationTitle,
      durationLabel: moduleContent?.duration || "",
      deliveryFormat: moduleContent?.deliveryFormat || "",
      objective: moduleContent?.objective,
      priceHT,
      priceTTC,
      tvaRate: TVA_RATE,
      tvaExempt: TVA_EXEMPT,
      accessStart: enrollment.access_start || enrollment.created_at,
      accessEnd: enrollment.access_end,
    });

    const fileName = `convention-${sanitizeFileName(formationTitle)}`;

    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Erreur generation convention :", error);
    return NextResponse.json(
      { error: error instanceof Error ? `Erreur serveur convention: ${error.message}` : "Erreur generation convention." },
      { status: 500 }
    );
  }
}
