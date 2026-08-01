import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import FormateurDashboardClient from "./FormateurDashboardClient";

type Session = {
  id: string;
  formation: string;
  date: string;
  start_time: string;
  end_time: string;
  format: string;
  meeting_url: string | null;
  note: string | null;
  seats: number;
  category: string;
};

type Presence = {
  user_id: string;
  present: boolean;
  validated_at: string | null;
  profile: { first_name: string | null; last_name: string | null; email: string | null } | null;
  enrollment: { id: string; status: string | null; module_slug: string | null } | null;
};

type SessionWithPresences = Session & { presences: Presence[] };

export default async function FormateurDashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  // Vérifier le rôle formateur
  const { data: profile } = await supabase
    .from("profiles").select("role, first_name, last_name").eq("id", user.id).single();

  if (!profile || !["formateur", "admin"].includes(profile.role ?? "")) {
    redirect("/dashboard");
  }

  const admin = createAdminClient();
  if (!admin) return <div>Erreur serveur</div>;

  // Récupérer l'entrée formateur — 1) par user_id, 2) fallback par email
  let { data: formateur } = await admin
    .from("formateurs")
    .select("id, prenom, nom, specialites, user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  // Fallback : chercher par email si user_id ne correspond pas
  if (!formateur && user.email) {
    const { data: byEmail } = await admin
      .from("formateurs")
      .select("id, prenom, nom, specialites, user_id")
      .ilike("email", user.email)
      .maybeSingle();

    if (byEmail) {
      // Auto-corriger le user_id manquant ou erroné
      if (!byEmail.user_id || byEmail.user_id !== user.id) {
        await admin
          .from("formateurs")
          .update({ user_id: user.id })
          .eq("id", byEmail.id);
      }
      formateur = byEmail;
    }
  }

  if (!formateur) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-md text-center space-y-4">
          <div className="text-5xl">⚠️</div>
          <h1 className="text-xl font-bold text-slate-900">Compte non associé</h1>
          <p className="text-sm text-slate-500">
            Votre compte n&apos;est pas encore lié à un profil formateur. Contactez l&apos;admin PREVENSIA.
          </p>
          <p className="text-xs text-slate-400">{user.email}</p>
        </div>
      </div>
    );
  }

  // Sessions assignées (futures et passées récentes)
  const today = new Date();
  const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  const { data: rawSessions } = await admin
    .from("virtual_sessions")
    .select("id, formation, date, start_time, end_time, format, meeting_url, note, seats, category")
    .eq("formateur_id", formateur.id)
    .gte("date", thirtyDaysAgo)
    .order("date", { ascending: true });

  const sessions: SessionWithPresences[] = [];

  for (const s of rawSessions ?? []) {
    // Inscriptions à cette session (via bookings)
    const { data: bookings } = await admin
      .from("interview_bookings")
      .select("user_id, enrollment_id, status")
      .eq("slot_id", s.id)
      .eq("status", "confirmed");

    // Présences déjà saisies
    const { data: presences } = await admin
      .from("session_presences")
      .select("user_id, present, validated_at")
      .eq("session_id", s.id);

    const presenceMap = new Map((presences ?? []).map(p => [p.user_id, p]));

    const enrichedPresences: Presence[] = [];
    for (const b of bookings ?? []) {
      const { data: prof } = await admin
        .from("profiles")
        .select("first_name, last_name, email")
        .eq("id", b.user_id)
        .maybeSingle();

      let enrollment = null;
      if (b.enrollment_id) {
        const { data: enr } = await admin
          .from("enrollments")
          .select("id, status, module_slug")
          .eq("id", b.enrollment_id)
          .maybeSingle();
        enrollment = enr;
      }

      const pres = presenceMap.get(b.user_id);
      enrichedPresences.push({
        user_id: b.user_id,
        present: pres?.present ?? true,
        validated_at: pres?.validated_at ?? null,
        profile: prof ?? null,
        enrollment,
      });
    }

    sessions.push({ ...s, presences: enrichedPresences });
  }

  const upcoming = sessions.filter(s => s.date >= today.toISOString().split("T")[0]);
  const past     = sessions.filter(s => s.date <  today.toISOString().split("T")[0]);

  return (
    <FormateurDashboardClient
      formateur={formateur}
      upcoming={upcoming}
      past={past}
      userEmail={user.email ?? ""}
    />
  );
}
