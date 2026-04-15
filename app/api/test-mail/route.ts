import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  try {
    const apiKey = process.env.RESEND_API_KEY?.trim();

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "RESEND_API_KEY manquante" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: "PREVENSIA <onboarding@resend.dev>",
      to: ["prevensia.formation@outlook.fr"],
      subject: "Test Resend PREVENSIA",
      html: "<p>Test email envoyé depuis Vercel.</p>",
    });

    if (result.error) {
      return NextResponse.json(
        {
          ok: false,
          error: result.error.message,
          details: result.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      data: result.data,
    });
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