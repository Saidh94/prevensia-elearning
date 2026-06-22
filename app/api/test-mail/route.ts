import { NextResponse } from "next/server";

// Route de test — désactivée en production
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const { Resend } = await import("resend");
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
      html: "<p>Test email envoyé depuis /api/test-mail (dev uniquement)</p>",
    });

    return NextResponse.json({ ok: true, result });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur inconnue";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
