import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const runtime = "nodejs";

export async function GET() {
  // Auth check — admins only
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const tvaExempt = process.env.PREVENSIA_TVA_EXEMPT === "true";
  const tvaRate   = tvaExempt ? 0 : 20;

  return NextResponse.json({ tvaExempt, tvaRate });
}
