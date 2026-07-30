import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();
    if (!token) {
      return NextResponse.json({ error: "Token manquant" }, { status: 400 });
    }

    const admin = createAdminClient();
    if (!admin) {
      return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }

    // Vérifier que le devis existe et est dans l'état "sent"
    const { data: devis, error: fetchError } = await admin
      .from("devis")
      .select("id, status, email, contact_name, company_name, participants")
      .eq("token", token)
      .single();

    if (fetchError || !devis) {
      return NextResponse.json({ error: "Devis introuvable" }, { status: 404 });
    }

    if (devis.status === "provisioned") {
      return NextResponse.json({ error: "Devis déjà provisionné" }, { status: 409 });
    }

    // Marquer comme validé
    const { error: updateError } = await admin
      .from("devis")
      .update({ status: "validated", validated_at: new Date().toISOString() })
      .eq("id", devis.id);

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    // Notifier l'admin
    const adminEmail = process.env.ADMIN_EMAIL ?? "contact@prevensia-formation.fr";
    const resendKey  = process.env.RESEND_API_KEY?.trim();
    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "PREVENSIA <contact@prevensia-formation.fr>",
        to: [adminEmail],
        subject: `✅ Devis validé — ${devis.company_name ?? devis.contact_name ?? devis.email}`,
        html: `
          <h2>Devis validé</h2>
          <p><strong>Client :</strong> ${devis.contact_name ?? ""} — ${devis.company_name ?? ""}</p>
          <p><strong>Email :</strong> ${devis.email}</p>
          <p><strong>Participants :</strong> ${devis.participants}</p>
          <p>Le client est en train de renseigner ses collaborateurs.</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
