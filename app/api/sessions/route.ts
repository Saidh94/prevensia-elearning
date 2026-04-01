import { NextResponse } from "next/server";

export async function GET() {
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();

    if (!url || !key) {
      return NextResponse.json(
        { error: "Variables Supabase manquantes" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${url}/rest/v1/sessions?select=*&order=date_start.asc`,
      {
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
        cache: "no-store",
      }
    );

    const text = await response.text();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: `Supabase ${response.status} ${response.statusText}`,
          body: text,
        },
        { status: response.status }
      );
    }

    return NextResponse.json(JSON.parse(text));
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}