import { getEnrollmentPaymentOption } from "@/lib/payments/catalog";
import { getStripeClient } from "@/lib/payments/stripe";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ProfileRow = {
  role: string | null;
};

type EmployerUserRow = {
  employer_id: string;
  role: string | null;
};

type EnrollmentRow = {
  id: string;
  user_id: string;
  employer_id: string | null;
  formation_id: string | null;
  payment_status: string | null;
  company_name: string | null;
  manager_email: string | null;
  formations:
    | {
        title: string | null;
        slug: string | null;
      }
    | {
        title: string | null;
        slug: string | null;
      }[]
    | null;
};

function normalizeReturnPath(value: string | null | undefined) {
  const trimmed = (value ?? "").trim();
  return trimmed.startsWith("/") ? trimmed : "/dashboard";
}

function getSingleFormation(
  formation: EnrollmentRow["formations"]
): { title: string | null; slug: string | null } | null {
  if (!formation) return null;
  return Array.isArray(formation) ? formation[0] ?? null : formation;
}

async function readPayload(request: Request) {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = (await request.json()) as Record<string, unknown>;
    return {
      enrollmentId:
        typeof body.enrollmentId === "string" ? body.enrollmentId.trim() : "",
      returnPath:
        typeof body.returnPath === "string" ? body.returnPath.trim() : "",
    };
  }

  const formData = await request.formData();
  return {
    enrollmentId: String(formData.get("enrollmentId") || "").trim(),
    returnPath: String(formData.get("returnPath") || "").trim(),
  };
}

export async function POST(request: Request) {
  try {
    const { enrollmentId, returnPath } = await readPayload(request);

    if (!enrollmentId) {
      return NextResponse.json(
        { error: "enrollmentId manquant" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Non authentifie" }, { status: 401 });
    }

    const [
      { data: profile, error: profileError },
      { data: employerUser, error: employerUserError },
    ] = await Promise.all([
      supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .maybeSingle<ProfileRow>(),
      supabase
        .from("employer_users")
        .select("employer_id, role")
        .eq("user_id", user.id)
        .maybeSingle<EmployerUserRow>(),
    ]);

    if (profileError) {
      return NextResponse.json(
        { error: `Erreur lecture profil: ${profileError.message}` },
        { status: 500 }
      );
    }

    if (employerUserError && employerUserError.code !== "PGRST116") {
      return NextResponse.json(
        { error: `Erreur lecture compte employeur: ${employerUserError.message}` },
        { status: 500 }
      );
    }

    const isAdmin = profile?.role === "admin";

    const { data: enrollment, error: enrollmentError } = await supabase
      .from("enrollments")
      .select(
        `
          id,
          user_id,
          employer_id,
          formation_id,
          payment_status,
          company_name,
          manager_email,
          formations (
            title,
            slug
          )
        `
      )
      .eq("id", enrollmentId)
      .maybeSingle<EnrollmentRow>();

    if (enrollmentError) {
      return NextResponse.json(
        { error: `Erreur lecture inscription: ${enrollmentError.message}` },
        { status: 500 }
      );
    }

    if (!enrollment) {
      return NextResponse.json(
        { error: "Inscription introuvable." },
        { status: 404 }
      );
    }

    const isEmployerOwner =
      Boolean(employerUser?.employer_id) &&
      Boolean(enrollment.employer_id) &&
      employerUser?.employer_id === enrollment.employer_id;

    if (!isAdmin && !isEmployerOwner) {
      return NextResponse.json({ error: "Acces interdit" }, { status: 403 });
    }

    if (enrollment.payment_status === "paid") {
      return NextResponse.redirect(
        new URL(normalizeReturnPath(returnPath), request.url)
      );
    }

    const formation = getSingleFormation(enrollment.formations);
    const paymentOption = getEnrollmentPaymentOption({
      formationSlug: formation?.slug,
      formationTitle: formation?.title,
    });

    if (paymentOption.kind === "quote") {
      const demandeDevisUrl = new URL("/demande-devis", request.url);
      if (formation?.title?.trim()) {
        demandeDevisUrl.searchParams.set("formation", formation.title.trim());
      }

      return NextResponse.redirect(demandeDevisUrl, { status: 303 });
    }

    const origin = new URL(request.url).origin;
    const safeReturnPath = normalizeReturnPath(returnPath);
    const stripe = getStripeClient();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      billing_address_collection: "auto",
      client_reference_id: enrollment.id,
      customer_email:
        user.email || enrollment.manager_email || undefined,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: paymentOption.amountCents,
            product_data: {
              name: paymentOption.label,
              description:
                enrollment.company_name?.trim() || "Paiement formation PREVENSIA",
            },
          },
        },
      ],
      invoice_creation: {
        enabled: true,
        invoice_data: {
          description: `Formation : ${paymentOption.label}`,
          footer:
            "PREVENSIA FORMATION — Groupe PREVENSIA SAS — 38, rue des Mathurins, 75008 Paris — Organisme certifié Qualiopi — contact@prevensia-formation.fr",
          metadata: {
            enrollmentId: enrollment.id,
            formationSlug: formation?.slug ?? "",
          },
        },
      },
      metadata: {
        enrollmentId: enrollment.id,
        formationSlug: formation?.slug ?? "",
        formationTitle: formation?.title ?? "",
        companyName: enrollment.company_name ?? "",
        actorUserId: user.id,
      },
      success_url: `${origin}/paiement/succes?session_id={CHECKOUT_SESSION_ID}&return_to=${encodeURIComponent(
        safeReturnPath
      )}`,
      cancel_url: `${origin}/paiement/annule?return_to=${encodeURIComponent(
        safeReturnPath
      )}`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe n'a pas retourne d'URL de paiement." },
        { status: 500 }
      );
    }

    return NextResponse.redirect(session.url, { status: 303 });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Erreur serveur paiement",
      },
      { status: 500 }
    );
  }
}
