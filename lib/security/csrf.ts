/**
 * Verification CSRF legere basee sur l'en-tete Origin.
 * Bloque les requetes cross-origin vers les routes POST sensibles.
 */

const ALLOWED_ORIGINS = [
  "https://prevensia-formation.fr",
  "https://www.prevensia-formation.fr",
];

if (process.env.NODE_ENV !== "production") {
  ALLOWED_ORIGINS.push("http://localhost:3000", "http://localhost:3001");
}

/**
 * Retourne null si la requete est autorisee, ou une Response 403 a renvoyer.
 */
export function checkCsrfOrigin(request: Request): Response | null {
  const origin = request.headers.get("origin");
  if (!origin) return null;
  if (ALLOWED_ORIGINS.includes(origin)) return null;
  return new Response(
    JSON.stringify({ error: "Origine non autorisee" }),
    { status: 403, headers: { "Content-Type": "application/json" } }
  );
}
