import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json({ error: "LINKEDIN_CLIENT_ID manquante" }, { status: 500 });
  }

  const redirectUri = "https://prevensia-formation.fr/api/auth/linkedin/callback";

  // Scopes LinkedIn — Share on LinkedIn + OpenID Connect
  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: "w_member_social openid profile email",
    state: "prevensia_linkedin_" + Date.now(),
  });

  return NextResponse.redirect(
    `https://www.linkedin.com/oauth/v2/authorization?${params.toString()}`
  );
}
