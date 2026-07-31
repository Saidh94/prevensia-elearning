/**
 * GET  /api/formateur/factures  — liste des factures du formateur connecté
 * POST /api/formateur/factures  — dépôt d'une nouvelle facture (multipart/form-data)
 */
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const FROM_EMAIL = "PREVENSIA <contact@prevensia-formation.fr>";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "contact@prevensia-formation.fr";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prevensia-formation.fr";

// ── GET ──────────────────────────────────────────────────────
export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

    const admin = createAdminClient();
    if (!admin) return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });

    // Récupérer l'id formateur
    const { data: formateur } = await admin
      .from("formateurs").select("id").eq("user_id", user.id).maybeSingle();
    if (!formateur) return NextResponse.json({ error: "Formateur introuvable" }, { status: 404 });

    const { data, error } = await admin
      .from("factures_formateurs")
      .select("*, session:virtual_sessions(formation, date)")
      .eq("formateur_id", formateur.id)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Erreur" }, { status: 500 });
  }
}

// ── POST ─────────────────────────────────────────────────────
export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

    // Vérifier rôle formateur
    const { data: profile } = await supabase
      .from("profiles").select("role").eq("id", user.id).single();
    if (!["formateur", "admin"].includes(profile?.role ?? "")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 403 });
    }

    const admin = createAdminClient();
    if (!admin) return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });

    const { data: formateur } = await admin
      .from("formateurs").select("id, prenom, nom, email").eq("user_id", user.id).maybeSingle();
    if (!formateur) return NextResponse.json({ error: "Formateur introuvable" }, { status: 404 });

    const formData = await request.formData();
    const numero      = formData.get("numero") as string | null;
    const montant_ht  = parseFloat(formData.get("montant_ht") as string);
    const tva_rate    = parseInt(formData.get("tva_rate") as string ?? "0", 10);
    const periode     = formData.get("periode") as string;
    const description = formData.get("description") as string | null;
    const session_id  = formData.get("session_id") as string | null;
    const fichier     = formData.get("fichier") as File | null;

    if (!montant_ht || !periode) {
      return NextResponse.json({ error: "Montant et période requis" }, { status: 400 });
    }

    let fichier_url: string | null = null;
    let fichier_nom: string | null = null;

    // Upload PDF vers Supabase Storage
    if (fichier && fichier.size > 0) {
      const ext      = fichier.name.split(".").pop() ?? "pdf";
      const path     = `${formateur.id}/${Date.now()}.${ext}`;
      const buffer   = Buffer.from(await fichier.arrayBuffer());

      const { error: uploadError } = await admin.storage
        .from("factures-formateurs")
        .upload(path, buffer, { contentType: fichier.type, upsert: false });

      if (uploadError) throw new Error(`Upload échoué : ${uploadError.message}`);

      const { data: urlData } = admin.storage
        .from("factures-formateurs")
        .getPublicUrl(path);

      fichier_url = urlData.publicUrl;
      fichier_nom = fichier.name;
    }

    // Insérer en base
    const { data: facture, error: insertError } = await admin
      .from("factures_formateurs")
      .insert({
        formateur_id: formateur.id,
        session_id:   session_id || null,
        numero:       numero || null,
        montant_ht,
        tva_rate,
        periode,
        description:  description || null,
        fichier_url,
        fichier_nom,
        statut:       "en_attente",
      })
      .select()
      .single();

    if (insertError) throw insertError;

    // Notification email à l'admin
    const resendKey = process.env.RESEND_API_KEY?.trim();
    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject: `📄 Nouvelle facture formateur — ${formateur.prenom} ${formateur.nom}`,
        html: `
          <p>Le formateur <strong>${formateur.prenom} ${formateur.nom}</strong> a déposé une facture.</p>
          <table style="border-collapse:collapse;width:100%;max-width:400px;">
            <tr><td style="padding:6px;color:#64748b;">Période</td><td style="padding:6px;font-weight:600;">${periode}</td></tr>
            <tr><td style="padding:6px;color:#64748b;">Montant HT</td><td style="padding:6px;font-weight:600;">${montant_ht.toFixed(2)} €</td></tr>
            ${numero ? `<tr><td style="padding:6px;color:#64748b;">N° facture</td><td style="padding:6px;">${numero}</td></tr>` : ""}
            ${description ? `<tr><td style="padding:6px;color:#64748b;">Description</td><td style="padding:6px;">${description}</td></tr>` : ""}
          </table>
          ${fichier_url ? `<p><a href="${fichier_url}" style="color:#b91c1c;font-weight:700;">📎 Télécharger la facture PDF</a></p>` : ""}
          <p><a href="${SITE_URL}/admin/factures-formateurs" style="display:inline-block;background:#0f172a;color:#fff;padding:10px 20px;border-radius:8px;font-weight:700;text-decoration:none;">Gérer les factures →</a></p>
        `,
      });
    }

    return NextResponse.json({ success: true, facture });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Erreur" }, { status: 500 });
  }
}
