import { requireAdmin } from "@/lib/auth/require-admin";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type EnrollmentPatchBody = {
  status?: string;
  payment_status?: string;
  access_end?: string;
  access_start?: string;
  activate?: true;
};

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: enrollmentId } = await params;

    const supabase = await createClient();
    const auth = await requireAdmin();
    if ("error" in auth) return auth.error;


    const adminClient = createAdminClient();
    if (!adminClient) {
      return NextResponse.json({ error: "Client admin indisponible" }, { status: 500 });
    }

    const body = await req.json() as EnrollmentPatchBody;

    let updates: Record<string, unknown> = {};

    if (body.activate === true) {
      const start = new Date();
      const end = new Date();
      end.setDate(start.getDate() + 30);
      updates = {
        access_start: start.toISOString(),
        access_end: end.toISOString(),
        status: "in_progress",
      };
    } else {
      if (body.status !== undefined) updates.status = body.status;
      if (body.payment_status !== undefined) updates.payment_status = body.payment_status;
      if (body.access_start !== undefined) updates.access_start = body.access_start;
      if (body.access_end !== undefined) updates.access_end = body.access_end;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: "Aucun champ à mettre à jour" }, { status: 400 });
    }

    const { error: updateError } = await adminClient
      .from("enrollments")
      .update(updates)
      .eq("id", enrollmentId);

    if (updateError) {
      return NextResponse.json(
        { error: `Erreur lors de la mise à jour : ${updateError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Admin enrollments PATCH]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
