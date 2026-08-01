import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

type AdminAuthOk = { userId: string };
type AdminAuthFail = { error: NextResponse };

/**
 * À appeler en tête de chaque route /api/admin/*.
 * Retourne { userId } si l'appelant est admin, { error: NextResponse 401/403 } sinon.
 *
 * Usage :
 *   const auth = await requireAdmin();
 *   if ("error" in auth) return auth.error;
 */
export async function requireAdmin(): Promise<AdminAuthOk | AdminAuthFail> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      error: NextResponse.json(
        { error: "Non authentifié" },
        { status: 401 }
      ),
    };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle<{ role: string | null }>();

  if (profile?.role !== "admin") {
    return {
      error: NextResponse.json(
        { error: "Accès refusé — réservé aux administrateurs" },
        { status: 403 }
      ),
    };
  }

  return { userId: user.id };
}
