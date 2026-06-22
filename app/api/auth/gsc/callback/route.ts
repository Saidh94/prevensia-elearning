import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error) {
    return new NextResponse(
      `<html><body><h2>❌ Erreur Google OAuth</h2><p>${error}</p></body></html>`,
      { headers: { "Content-Type": "text/html" } }
    );
  }

  if (!code) {
    return new NextResponse(
      `<html><body><h2>❌ Pas de code reçu</h2></body></html>`,
      { headers: { "Content-Type": "text/html" } }
    );
  }

  // Échanger le code contre les tokens
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: process.env.GSC_CLIENT_ID!,
      client_secret: process.env.GSC_CLIENT_SECRET!,
      redirect_uri: "https://prevensia-formation.fr/api/auth/gsc/callback",
      grant_type: "authorization_code",
    }),
  });

  const tokens = await res.json();

  if (!tokens.refresh_token) {
    return new NextResponse(
      `<html><body style="font-family:sans-serif;padding:40px">
        <h2>⚠️ Pas de refresh_token</h2>
        <p>Essaie de révoquer l'accès sur <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a> puis réessaie.</p>
        <pre>${JSON.stringify(tokens, null, 2)}</pre>
      </body></html>`,
      { headers: { "Content-Type": "text/html" } }
    );
  }

  return new NextResponse(
    `<html><body style="font-family:sans-serif;padding:40px;max-width:700px;margin:auto">
      <h2>✅ Google Search Console connecté !</h2>
      <p>Copie ce token et ajoute-le dans Vercel comme variable d'environnement :</p>
      <p><strong>Clé :</strong> <code>GSC_REFRESH_TOKEN</code></p>
      <p><strong>Valeur :</strong></p>
      <textarea rows="3" style="width:100%;padding:8px;font-family:monospace;font-size:12px" onclick="this.select()">${tokens.refresh_token}</textarea>
      <br/><br/>
      <p>→ Vercel → Settings → Environment Variables → Ajouter <code>GSC_REFRESH_TOKEN</code></p>
      <p>→ Puis redéployer</p>
    </body></html>`,
    { headers: { "Content-Type": "text/html" } }
  );
}
