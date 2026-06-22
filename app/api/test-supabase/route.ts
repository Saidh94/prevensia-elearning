import { NextResponse } from "next/server";

// Route de test — désactivée en production
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();

    if (!url) {
      return NextResponse.json({ ok: false, error: "NEXT_PUBLIC_SUPABASE_URL manquante" }, { status: 500 });
    }
    if (!key) {
      return NextResponse.json({ ok: false, error: "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY manquante" }, { status: 500 });
    }

    const endpoint = `${url}/rest/v1/sessions?select=id&limit=1`;
    const response = await fetch(endpoint, {
      method: "GET",
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      cache: "no-store",
    });
    const text = await response.text();

    return NextResponse.json({
      ok: response.ok,
      status: response.status,
      body: text,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur inconnue";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
