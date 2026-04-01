import { NextResponse } from "next/server";

export async function GET() {
  try {
    const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const rawKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    const url = rawUrl?.trim();
    const key = rawKey?.trim();

    if (!url) {
      return NextResponse.json(
        { ok: false, error: "NEXT_PUBLIC_SUPABASE_URL manquante" },
        { status: 500 }
      );
    }

    if (!key) {
      return NextResponse.json(
        { ok: false, error: "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY manquante" },
        { status: 500 }
      );
    }

    const endpoint = `${url}/rest/v1/sessions?select=id&limit=1`;

    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
        cache: "no-store",
      });

      const text = await response.text();

      return NextResponse.json({
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        endpoint,
        body: text,
      });
    } catch (fetchError) {
      return NextResponse.json(
        {
          ok: false,
          error: fetchError instanceof Error ? fetchError.message : "fetch failed",
          endpoint,
          supabaseUrlPreview: url,
          keyPreview: `${key.slice(0, 20)}...`,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}