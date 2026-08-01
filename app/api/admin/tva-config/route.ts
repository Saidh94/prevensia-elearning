import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/require-admin";

export const runtime = "nodejs";

export async function GET() {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;

  const tvaExempt = process.env.PREVENSIA_TVA_EXEMPT === "true";
  const tvaRate   = tvaExempt ? 0 : 20;

  return NextResponse.json({ tvaExempt, tvaRate });
}
