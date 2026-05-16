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
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle<{ role: string | null }>();

    if (profile?.role !== "admin") {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    // Un admin ne peut pas se bloquer lui-même
    if (targetId === user.id) {
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
