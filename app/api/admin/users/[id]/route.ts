import { requireAdmin } from "@/lib/auth/require-admin";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: targetId } = await params;

    const supabase = await createClient();
    const auth = await requireAdmin();
    if ("error" in auth) return auth.error;
    const { userId } = auth;


    // Un admin ne peut pas se bloquer lui-même
    if (targetId === userId) {
      return NextResponse.json(
        { error: "Vous ne pouvez pas bloquer votre propre compte" },
        { status: 400 }
      );
    }

    const body = await req.json() as { action?: string };
    const { action } = body;

    if (action !== "block" && action !== "unblock") {
      return NextResponse.json(
        { error: "Action invalide. Valeurs acceptées : \"block\" ou \"unblock\"" },
        { status: 400 }
      );
    }

    const is_blocked = action === "block";

    const adminClient = createAdminClient();
    if (!adminClient) {
      return NextResponse.json({ error: "Client admin indisponible" }, { status: 500 });
    }

    const { error: updateError } = await adminClient
      .from("profiles")
      .update({ is_blocked })
      .eq("id", targetId);

    if (updateError) {
      return NextResponse.json(
        { error: `Erreur lors de la mise à jour : ${updateError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, is_blocked });
  } catch (err) {
    console.error("[Admin users PATCH]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
