import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const SITE_URL   = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prevensia-formation.fr";
const FROM_EMAIL = "PREVENSIA <contact@prevensia-formation.fr>";

async function assertAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data: profile } = await supabase
    .from("profiles").select("role").eq("id", user.id).single();
  return profile?.role === "admin" ? user : null;
}

// GET — liste tous les formateurs
export async function GET() {
  const user = await assertAdmin();
  if (!user) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const admin = createAdminClient();
  if (!admin) return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });

  const { data, error } = await admin
    .from("formateurs")
    .select("*")
    .order("nom", { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data ?? []);
}

// POST — créer un formateur (+ invite Supabase Auth optionnelle)
export async function POST(request: Request) {
  const adminUser = await assertAdmin();
  if (!adminUser) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const body = await request.json();
  const { prenom, nom, email, phone, specialites, bio, inviteAuth } = body;

  if (!prenom || !nom || !email) {
    return NextResponse.json({ error: "Prénom, nom et email requis" }, { status: 400 });
  }

  const admin = createAdminClient();
  if (!admin) return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });

  // Créer le compte Supabase Auth si demandé
  let userId: string | null = null;
  if (inviteAuth) {
    const { data: invite, error: inviteErr } = await admin.auth.admin.inviteUserByEmail(email, {
      data: { first_name: prenom, last_name: nom, role: "formateur" },
      redirectTo: `${SITE_URL}/formateur/dashboard`,
    });
    if (inviteErr) {
      // Peut déjà exister
      const { data: existing } = await admin.auth.admin.listUsers();
      const found = existing?.users?.find(u => u.email === email);
      userId = found?.id ?? null;
    } else {
      userId = invite?.user?.id ?? null;
    }

    // Upsert dans profiles avec rôle formateur
    if (userId) {
      await admin.from("profiles").upsert({
        id: userId, first_name: prenom, last_name: nom,
        email, role: "formateur",
      }, { onConflict: "id" });
    }
  }

  // Insérer le formateur
  const { data: formateur, error } = await admin
    .from("formateurs")
    .insert({ prenom, nom, email, phone: phone || null, specialites: specialites ?? [], bio: bio || null, user_id: userId })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Email de bienvenue si compte créé
  if (inviteAuth) {
    const resendKey = process.env.RESEND_API_KEY?.trim();
    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: FROM_EMAIL, to: [email],
        subject: "Bienvenue sur PREVENSIA — votre espace formateur",
        html: `
          <p>Bonjour ${prenom},</p>
          <p>Vous venez d'être ajouté(e) comme formateur indépendant PREVENSIA.</p>
          <p>Vérifiez votre email pour activer votre compte, puis accédez à votre espace :</p>
          <a href="${SITE_URL}/formateur/dashboard" style="display:inline-block;background:#b91c1c;color:#fff;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none;">
            Mon espace formateur →
          </a>
          <p style="margin-top:16px;font-size:12px;color:#64748b;">PREVENSIA FORMATION · contact@prevensia-formation.fr</p>
        `,
      });
    }
  }

  return NextResponse.json(formateur, { status: 201 });
}
