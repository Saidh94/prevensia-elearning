import { checkCsrfOrigin } from "@/lib/security/csrf";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/require-admin";
import { logAdminAction } from "@/lib/supabase/audit";

export async function POST(req: Request) {
  try {
    const csrfError = checkCsrfOrigin(req);
    if (csrfError) return csrfError;

    const supabase = await createClient();

    const auth = await requireAdmin();
    if ("error" in auth) return auth.error;
    const { userId } = auth;


    // Lire soit JSON soit formData
    let id = "";
    let motif = "";
    const contentType = req.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      const body = await req.json() as { enrollmentId?: string; motif?: string };
      id = String(body.enrollmentId ?? "").trim();
      motif = String(body.motif ?? "").trim();
    } else {
      const formData = await req.formData();
      id = String(formData.get("enrollmentId") || "").trim();
      motif = String(formData.get("motif") || "").trim();
    }

    if (!id) {
      return NextResponse.json({ error: "ID manquant" }, { status: 400 });
    }

    const { error } = await supabase
      .from("enrollments")
      .update({ payment_status: "paid" })
      .eq("id", id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    await logAdminAction({
      adminId: userId,
      action: "payment_confirmed",
      targetType: "enrollment",
      targetId: id,
      metadata: { motif: motif || null },
    });

    if (contentType.includes("application/json")) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.redirect(new URL("/admin", req.url));
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
