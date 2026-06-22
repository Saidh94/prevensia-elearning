import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const errorDesc = searchParams.get("error_description");

  if (error || !code) {
    return new NextResponse(`<html><body style="font-family:sans-serif;padding:40px;background:#fef2f2;color:#991b1b">
      <h2>❌ Erreur OAuth LinkedIn</h2>
      <p>${errorDesc ?? error ?? "Code manquant"}</p>
    </body></html>`, { headers: { "Content-Type": "text/html" } });
  }

  const clientId = process.env.LINKEDIN_CLIENT_ID!;
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET!;
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://prevensia-formation.fr";
  const redirectUri = `${baseUrl}/api/auth/linkedin/callback`;

  // Échanger le code contre un token
  const tokenRes = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  const tokens = await tokenRes.json();

  if (!tokens.access_token) {
    return new NextResponse(`<html><body style="font-family:sans-serif;padding:40px">
      <h2>❌ Échec token LinkedIn</h2>
      <pre>${JSON.stringify(tokens, null, 2)}</pre>
    </body></html>`, { headers: { "Content-Type": "text/html" } });
  }

  // Récupérer les organisations administrées
  let orgsHtml = "";
  let myId = "";

  try {
    // ID du membre
    const meRes = await fetch("https://api.linkedin.com/v2/me", {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });
    const meData = await meRes.json();
    myId = meData.id ?? "";

    // Organisations administrées
    const orgsRes = await fetch(
      `https://api.linkedin.com/v2/organizationAcls?q=roleAssignee&role=ADMINISTRATOR&projection=(elements*(organizationGrantedPermissions,organization~(id,localizedName)))`,
      { headers: { Authorization: `Bearer ${tokens.access_token}`, "X-Restli-Protocol-Version": "2.0.0" } }
    );
    const orgsData = await orgsRes.json();
    const orgs = orgsData.elements ?? [];

    orgsHtml = orgs.map((el: { "organization~": { id: number; localizedName: string } }) => {
      const org = el["organization~"] ?? {};
      return `<tr>
        <td style="padding:6px 12px;border:1px solid #e2e8f0">${org.localizedName ?? "—"}</td>
        <td style="padding:6px 12px;border:1px solid #e2e8f0;font-family:monospace;background:#f8fafc">${org.id ?? "—"}</td>
      </tr>`;
    }).join("") || `<tr><td colspan="2" style="padding:8px 12px;color:#94a3b8">Aucune organisation trouvée — vérifie tes droits admin sur la page LinkedIn</td></tr>`;
  } catch (e) {
    orgsHtml = `<tr><td colspan="2" style="color:#dc2626;padding:8px">Erreur: ${e}</td></tr>`;
  }

  // Calcul date d'expiration
  const expiresIn = tokens.expires_in ?? 5184000; // 60 jours par défaut
  const expiresDate = new Date(Date.now() + expiresIn * 1000).toLocaleDateString("fr-FR");

  return new NextResponse(`<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><title>LinkedIn connecté ✅</title>
<style>
  body{font-family:-apple-system,sans-serif;max-width:900px;margin:40px auto;padding:0 20px;background:#f8fafc}
  .card{background:white;border-radius:16px;padding:28px;margin-bottom:20px;border:1px solid #e2e8f0;box-shadow:0 1px 4px rgba(0,0,0,.05)}
  .badge{background:#dcfce7;color:#166534;padding:4px 12px;border-radius:99px;font-size:13px;font-weight:600}
  code{background:#f1f5f9;border:1px solid #e2e8f0;padding:10px 16px;display:block;border-radius:10px;font-family:monospace;font-size:13px;word-break:break-all;margin:8px 0;white-space:pre-wrap}
  .warn{background:#fefce8;border-color:#fde68a;color:#92400e}
  table{width:100%;border-collapse:collapse;font-size:13px}
  h3{color:#1e293b;margin:0 0 12px}
  p{color:#475569;font-size:14px}
</style>
</head>
<body>
  <div class="card">
    <h2>✅ LinkedIn connecté ! <span class="badge">Succès</span></h2>
    <p>Copie le token d'accès et ton Organization ID dans les variables Vercel.</p>
  </div>

  <div class="card warn">
    <h3>⚠️ Important — Token LinkedIn</h3>
    <p>LinkedIn ne fournit <strong>pas</strong> de refresh token longue durée sur les plans gratuits.<br>
    Ce token expire le <strong>${expiresDate}</strong> (dans ~60 jours). Tu devras re-connecter après.</p>
  </div>

  <div class="card">
    <h3>1. Access Token (LINKEDIN_ACCESS_TOKEN)</h3>
    <p>⚠️ Copie maintenant.</p>
    <code>${tokens.access_token}</code>
    <button onclick="navigator.clipboard.writeText('${tokens.access_token}')" style="margin-top:8px;background:#0a66c2;color:white;border:none;padding:8px 16px;border-radius:8px;cursor:pointer;font-size:13px">📋 Copier</button>
    <p style="margin-top:8px;font-size:12px;color:#94a3b8">Ton Member ID : <code style="display:inline">${myId}</code></p>
  </div>

  <div class="card">
    <h3>2. Organisations administrées</h3>
    <p>Note l'ID de ta page entreprise PREVENSIA → <strong>LINKEDIN_ORGANIZATION_ID</strong></p>
    <table><thead><tr>
      <th style="padding:6px 12px;background:#f8fafc;text-align:left;border:1px solid #e2e8f0">Nom de la page</th>
      <th style="padding:6px 12px;background:#f8fafc;text-align:left;border:1px solid #e2e8f0">Organization ID (→ LINKEDIN_ORGANIZATION_ID)</th>
    </tr></thead><tbody>${orgsHtml}</tbody></table>
  </div>

  <div class="card" style="background:#eff6ff;border-color:#bfdbfe">
    <h3>3. Variables à ajouter dans Vercel</h3>
    <code>LINKEDIN_ACCESS_TOKEN      = [token ci-dessus]
LINKEDIN_ORGANIZATION_ID   = [ID de la page entreprise]
LINKEDIN_CLIENT_ID         = [déjà configuré]
LINKEDIN_CLIENT_SECRET     = [déjà configuré]</code>
    <p style="margin-top:12px">👉 <strong>Vercel → Settings → Environment Variables</strong> → Add</p>
    <p>🔄 Pense à renouveler le token dans 60 jours en revisitant <a href="/api/auth/linkedin" style="color:#0a66c2">/api/auth/linkedin</a></p>
  </div>
</body>
</html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
