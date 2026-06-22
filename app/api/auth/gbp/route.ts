import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const clientId = process.env.GSC_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json({ error: "GSC_CLIENT_ID manquante dans Vercel" }, { status: 500 });
  }

  const redirectUri = "https://prevensia-formation.fr/api/auth/gbp/callback";

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: [
      "https://www.googleapis.com/auth/business.manage",
      "https://www.googleapis.com/auth/webmasters.readonly",
    ].join(" "),
    access_type: "offline",
    prompt: "consent",
  });

  return NextResponse.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
  );
}
