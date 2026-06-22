import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error || !code) {
    return new NextResponse(`<html><body style="font-family:sans-serif;padding:40px;background:#fef2f2;color:#991b1b">
      <h2>❌ Erreur OAuth GBP</h2>
      <p>${error ?? "Code manquant"}</p>
    </body></html>`, { headers: { "Content-Type": "text/html" } });
  }

  const clientId = process.env.GSC_CLIENT_ID!;
  const clientSecret = process.env.GSC_CLIENT_SECRET!;
  const redirectUri = "https://prevensia-formation.fr/api/auth/gbp/callback";

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    }),
  });

  const tokens = await tokenRes.json();

  if (!tokens.refresh_token) {
    return new NextResponse(`<html><body style="font-family:sans-serif;padding:40px">
      <h2>⚠️ Pas de refresh_token</h2>
      <p>Google n'a pas retourné de refresh_token. Essaie de révoquer l'accès dans <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a> puis recommence.</p>
    </body></html>`, { headers: { "Content-Type": "text/html" } });
  }

  // Récupérer la liste des comptes GBP
  let accountsHtml = "";
  let locationsHtml = "";

  try {
    const accountsRes = await fetch(
      "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
      { headers: { Authorization: `Bearer ${tokens.access_token}` } }
    );
    const accountsData = await accountsRes.json();
    const accounts = accountsData.accounts ?? [];

    accountsHtml = accounts.map((a: { name: string; accountName: string }) =>
      `<tr><td style="padding:6px 12px;border:1px solid #e2e8f0">${a.accountName}</td>
       <td style="padding:6px 12px;border:1px solid #e2e8f0;font-family:monospace;background:#f8fafc">${a.name}</td></tr>`
    ).join("");

    // Pour chaque compte, lister les établissements
    for (const account of accounts.slice(0, 3)) {
      const locRes = await fetch(
        `https://mybusinessbusinessinformation.googleapis.com/v1/${account.name}/locations?readMask=name,title`,
        { headers: { Authorization: `Bearer ${tokens.access_token}` } }
      );
      const locData = await locRes.json();
      const locs = locData.locations ?? [];
      locationsHtml += locs.map((l: { name: string; title: string }) =>
        `<tr>
          <td style="padding:6px 12px;border:1px solid #e2e8f0">${account.accountName}</td>
          <td style="padding:6px 12px;border:1px solid #e2e8f0">${l.title ?? "—"}</td>
          <td style="padding:6px 12px;border:1px solid #e2e8f0;font-family:monospace;background:#f8fafc;font-size:12px">${l.name}</td>
        </tr>`
      ).join("");
    }
  } catch (e) {
    accountsHtml = `<tr><td colspan="2" style="padding:6px 12px;color:#dc2626">Erreur lors de la récupération des comptes: ${e}</td></tr>`;
  }

  return new NextResponse(`<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><title>GBP connecté ✅</title>
<style>
  body{font-family:-apple-system,sans-serif;max-width:900px;margin:40px auto;padding:0 20px;background:#f8fafc}
  .card{background:white;border-radius:16px;padding:28px;margin-bottom:20px;border:1px solid #e2e8f0;box-shadow:0 1px 4px rgba(0,0,0,.05)}
  .badge{background:#dcfce7;color:#166534;padding:4px 12px;border-radius:99px;font-size:13px;font-weight:600}
  code{background:#f1f5f9;border:1px solid #e2e8f0;padding:10px 16px;display:block;border-radius:10px;font-family:monospace;font-size:13px;word-break:break-all;margin:8px 0;white-space:pre-wrap}
  table{width:100%;border-collapse:collapse;font-size:13px}
  h3{color:#1e293b;margin:0 0 12px}
  p{color:#475569;font-size:14px}
</style>
</head>
<body>
  <div class="card">
    <h2>✅ Google Business Profile connecté ! <span class="badge">Succès</span></h2>
    <p>Copie le refresh token et les IDs ci-dessous dans tes variables d'environnement Vercel.</p>
  </div>

  <div class="card">
    <h3>1. Refresh Token (GOOGLE_GBP_REFRESH_TOKEN)</h3>
    <p>⚠️ Copie maintenant — il ne sera plus affiché.</p>
    <code>${tokens.refresh_token}</code>
    <button onclick="navigator.clipboard.writeText('${tokens.refresh_token}')" style="margin-top:8px;background:#1e293b;color:white;border:none;padding:8px 16px;border-radius:8px;cursor:pointer;font-size:13px">📋 Copier</button>
  </div>

  <div class="card">
    <h3>2. Comptes Google Business Profile</h3>
    <p>Note le <strong>Account Name</strong> (format <code>accounts/XXXXXXXXX</code>) et le <strong>Location Name</strong>.</p>
    <h4 style="color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:.05em">Comptes</h4>
    <table><thead><tr>
      <th style="padding:6px 12px;background:#f8fafc;text-align:left;border:1px solid #e2e8f0">Nom du compte</th>
      <th style="padding:6px 12px;background:#f8fafc;text-align:left;border:1px solid #e2e8f0">Account Name (→ GBP_ACCOUNT_NAME)</th>
    </tr></thead><tbody>${accountsHtml || '<tr><td colspan="2" style="padding:8px 12px;color:#94a3b8">Aucun compte trouvé — vérifie que l\'API "Business Profile Performance" est activée</td></tr>'}</tbody></table>

    ${locationsHtml ? `<h4 style="color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:.05em;margin-top:20px">Établissements</h4>
    <table><thead><tr>
      <th style="padding:6px 12px;background:#f8fafc;text-align:left;border:1px solid #e2e8f0">Compte</th>
      <th style="padding:6px 12px;background:#f8fafc;text-align:left;border:1px solid #e2e8f0">Établissement</th>
      <th style="padding:6px 12px;background:#f8fafc;text-align:left;border:1px solid #e2e8f0">Location Name (→ GBP_LOCATION_NAME)</th>
    </tr></thead><tbody>${locationsHtml}</tbody></table>` : ""}
  </div>

  <div class="card" style="background:#eff6ff;border-color:#bfdbfe">
    <h3>3. Variables à ajouter dans Vercel</h3>
    <code>GOOGLE_GBP_REFRESH_TOKEN = [refresh token ci-dessus]
GBP_ACCOUNT_NAME      = accounts/XXXXXXXXX
GBP_LOCATION_NAME     = accounts/XXXXXXXXX/locations/YYYYY</code>
    <p style="margin-top:12px">👉 <strong>Vercel → Settings → Environment Variables</strong> → Add</p>
  </div>
</body>
</html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
