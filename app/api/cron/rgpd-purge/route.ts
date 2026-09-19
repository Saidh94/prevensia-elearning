import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const maxDuration = 60;

/**
 * Purge RGPD automatique — aligne le code sur les durées de conservation
 * annoncées dans /politique-confidentialite :
 *  - Contacts / devis non convertis : 3 ans
 *  - Données de formation (Qualiopi) : 5 ans
 *
 * Appelée mensuellement par Vercel Cron (voir vercel.json). Protégée par
 * CRON_SECRET, comme les autres jobs de ce dossier.
 */

const MS_DAY = 24 * 60 * 60 * 1000;
const isoYearsAgo = (years: number) => new Date(Date.now() - years * 365 * MS_DAY).toISOString();

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  const threeYearsAgo = isoYearsAgo(3);
  const fiveYearsAgo = isoYearsAgo(5);

  const report = {
    leads_deleted: 0,
    devis_anonymized: 0,
    profiles_anonymized: 0,
    errors: [] as string[],
  };

  try {
    // ── 1. Leads / prospects non convertis de plus de 3 ans : suppression ──
    // (pas de relation commerciale établie → aucune obligation de conservation)
    const { data: oldLeads, error: leadsSelectErr } = await supabase
      .from("leads")
      .select("id")
      .lt("created_at", threeYearsAgo)
      .neq("status", "converted");

    if (leadsSelectErr) report.errors.push(`leads select: ${leadsSelectErr.message}`);
    if (oldLeads?.length) {
      const { error } = await supabase
        .from("leads")
        .delete()
        .in("id", oldLeads.map((l) => l.id));
      if (error) report.errors.push(`leads delete: ${error.message}`);
      else report.leads_deleted = oldLeads.length;
    }

    // ── 2. Devis non provisionnés de plus de 3 ans : anonymisation ──
    // (un devis "provisioned" a donné lieu à une formation réelle : ses données
    // suivent la règle de conservation "formation", pas "contact/devis")
    const { data: oldDevis, error: devisSelectErr } = await supabase
      .from("devis")
      .select("id")
      .lt("created_at", threeYearsAgo)
      .neq("status", "provisioned");

    if (devisSelectErr) report.errors.push(`devis select: ${devisSelectErr.message}`);
    if (oldDevis?.length) {
      const { error } = await supabase
        .from("devis")
        .update({
          contact_name: "Anonymisé (purge RGPD)",
          company_name: null,
          email: "anonymise@purge.prevensia-formation.fr",
          phone: null,
          notes: null,
        })
        .in("id", oldDevis.map((d) => d.id));
      if (error) report.errors.push(`devis anonymize: ${error.message}`);
      else report.devis_anonymized = oldDevis.length;
    }

    // ── 3. Profils dont TOUTES les formations validées ont plus de 5 ans ──
    // On anonymise l'identité (profiles) mais on conserve enrollments et
    // quiz_attempts : ce sont les pièces d'audit Qualiopi, qui n'ont pas
    // besoin d'être nominatives une fois le délai légal écoulé.
    const { data: oldEnrollments, error: enrSelectErr } = await supabase
      .from("enrollments")
      .select("user_id")
      .not("validated_at", "is", null)
      .lt("validated_at", fiveYearsAgo);

    if (enrSelectErr) report.errors.push(`enrollments select: ${enrSelectErr.message}`);

    if (oldEnrollments?.length) {
      const candidateUserIds = Array.from(new Set(oldEnrollments.map((e) => e.user_id).filter(Boolean)));

      // Exclure les utilisateurs ayant une formation en cours ou validée il y a moins de 5 ans
      const { data: recentEnrollments, error: recentErr } = await supabase
        .from("enrollments")
        .select("user_id")
        .in("user_id", candidateUserIds)
        .or(`validated_at.is.null,validated_at.gte.${fiveYearsAgo}`);

      if (recentErr) report.errors.push(`enrollments recent check: ${recentErr.message}`);

      const excludeIds = new Set((recentEnrollments ?? []).map((e) => e.user_id));
      const toAnonymize = candidateUserIds.filter((id) => !excludeIds.has(id));

      for (const userId of toAnonymize) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("email")
          .eq("id", userId)
          .maybeSingle();

        if (!profile || profile.email?.startsWith("anonymise+")) continue; // déjà traité

        const { error } = await supabase
          .from("profiles")
          .update({
            first_name: "Ancien",
            last_name: "stagiaire",
            email: `anonymise+${userId}@purge.prevensia-formation.fr`,
            company: null,
          })
          .eq("id", userId);

        if (error) report.errors.push(`profile ${userId}: ${error.message}`);
        else report.profiles_anonymized++;
      }
    }

    try {
      await supabase.from("agent_logs").insert({
        agent_name: "rgpd-purge",
        status: report.errors.length ? "partial" : "success",
        output_summary: `${report.leads_deleted} leads supprimés, ${report.devis_anonymized} devis anonymisés, ${report.profiles_anonymized} profils anonymisés`,
        metadata: report,
      });
    } catch {
      // best-effort — ne bloque pas la réponse si la table de logs n'existe pas
    }

    return NextResponse.json({ ok: true, ...report });
  } catch (error) {
    console.error("[rgpd-purge] Erreur:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
