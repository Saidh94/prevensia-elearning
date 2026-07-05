import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { Resend } from "resend";

export const runtime = "nodejs";

// GET /api/cron/sessions-cleanup
// Supprime automatiquement les sessions dont la date est passée depuis plus de 24h.
// Déclenché chaque nuit à 2h par Vercel Cron.
export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  try {
    // Hier à minuit = sessions passées depuis au moins 24h
    const hier = new Date();
    hier.setDate(hier.getDate() - 1);
    const hierDate = hier.toISOString().split("T")[0]; // "YYYY-MM-DD"

    // 1. Lister les sessions à supprimer (pour le récap email)
    const { data: sessionsList, error: listError } = await supabase
      .from("sessions")
      .select("id, title, date_start")
      .lt("date_start", hierDate)
      .order("date_start", { ascending: false });

    if (listError) {
      return NextResponse.json({ error: listError.message }, { status: 500 });
    }

    if (!sessionsList || sessionsList.length === 0) {
      await supabase.from("agent_logs").insert({
        agent_name: "sessions-cleanup",
        status: "info",
        output_summary: "Aucune session passée à supprimer",
        metadata: { date_limite: hierDate },
      });
      return NextResponse.json({ ok: true, supprimees: 0, message: "Aucune session passée" });
    }

    // 2. Supprimer d'abord les registrations liées (contrainte FK)
    const sessionIds = sessionsList.map((s) => s.id);
    const { error: regDeleteError } = await supabase
      .from("registrations")
      .delete()
      .in("session_id", sessionIds);

    if (regDeleteError) {
      await supabase.from("agent_logs").insert({
        agent_name: "sessions-cleanup",
        status: "error",
        output_summary: `Erreur suppression registrations : ${regDeleteError.message}`,
        metadata: { date_limite: hierDate, session_ids: sessionIds },
      });
      return NextResponse.json(
        { ok: false, error: regDeleteError.message, etape: "registrations" },
        { status: 500 }
      );
    }

    // 3. Supprimer les sessions passées (registrations déjà nettoyées)
    const { error: deleteError } = await supabase
      .from("sessions")
      .delete()
      .lt("date_start", hierDate);

    if (deleteError) {
      // En cas d'erreur (ex : contrainte de clé étrangère), on log et on alerte
      await supabase.from("agent_logs").insert({
        agent_name: "sessions-cleanup",
        status: "error",
        output_summary: `Erreur suppression : ${deleteError.message}`,
        metadata: { date_limite: hierDate, sessions_trouvees: sessionsList.length },
      });

      const resendKey = process.env.RESEND_API_KEY;
      if (resendKey) {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: "PREVENSIA IA <ia@prevensia-formation.fr>",
          to: ["contact@prevensia-formation.fr"],
          subject: "⚠️ Erreur nettoyage planning — action manuelle requise",
          html: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px">
  <h2 style="color:#dc2626">⚠️ Nettoyage du planning — erreur automatique</h2>
  <p>La suppression automatique des sessions passées a échoué :</p>
  <pre style="background:#fef2f2;padding:12px;border-radius:6px;font-size:13px">${deleteError.message}</pre>
  <p><strong>${sessionsList.length} session(s)</strong> passée(s) n'ont pas pu être supprimées :</p>
  <ul>
    ${sessionsList.map(s => `<li>${s.title} — ${new Date(s.date_start).toLocaleDateString("fr-FR")}</li>`).join("")}
  </ul>
  <p>
    <a href="https://prevensia-formation.fr/admin/calendrier" style="color:#2563eb">
      → Supprimer manuellement depuis l'admin
    </a>
  </p>
</div>`,
        });
      }

      return NextResponse.json(
        { ok: false, error: deleteError.message, sessions_concernees: sessionsList.length },
        { status: 500 }
      );
    }

    // 3. Log succès
    const nbSupprimees = sessionsList.length;

    await supabase.from("agent_logs").insert({
      agent_name: "sessions-cleanup",
      status: "success",
      output_summary: `${nbSupprimees} session(s) passée(s) supprimée(s) automatiquement`,
      metadata: {
        date_limite: hierDate,
        sessions: sessionsList.map(s => ({ title: s.title, date: s.date_start })),
      },
    });

    // 4. Email récap à Said (seulement si des sessions ont été supprimées)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const rows = sessionsList
        .map(
          (s) =>
            `<tr>
              <td style="padding:6px 12px;border-bottom:1px solid #f1f5f9">${s.title}</td>
              <td style="padding:6px 12px;border-bottom:1px solid #f1f5f9;color:#64748b">
                ${new Date(s.date_start).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
              </td>
            </tr>`
        )
        .join("");

      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "PREVENSIA IA <ia@prevensia-formation.fr>",
        to: ["contact@prevensia-formation.fr"],
        subject: `🗓️ Planning nettoyé — ${nbSupprimees} session(s) supprimée(s)`,
        html: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1e293b">
  <h2 style="color:#1e293b;margin-bottom:4px">🗓️ Nettoyage automatique du planning</h2>
  <p style="color:#64748b;margin-top:0">${new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}</p>

  <p><strong>${nbSupprimees} session(s)</strong> passée(s) ont été supprimées automatiquement du planning :</p>

  <table style="width:100%;border-collapse:collapse;font-size:14px;margin-top:8px">
    <thead>
      <tr style="background:#f8fafc">
        <th style="padding:8px 12px;text-align:left;border-bottom:2px solid #e2e8f0">Formation</th>
        <th style="padding:8px 12px;text-align:left;border-bottom:2px solid #e2e8f0">Date</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>

  <p style="margin-top:20px;font-size:13px;color:#64748b">
    Le planning public ne montre désormais que les sessions à venir.<br/>
    <a href="https://prevensia-formation.fr/planning" style="color:#2563eb">→ Voir le planning en ligne</a>
    &nbsp;·&nbsp;
    <a href="https://prevensia-formation.fr/admin/calendrier" style="color:#2563eb">→ Admin planning</a>
  </p>
</div>`,
      });
    }

    return NextResponse.json({
      ok: true,
      supprimees: nbSupprimees,
      sessions: sessionsList.map(s => ({ title: s.title, date: s.date_start })),
    });

  } catch (error) {
    console.error("[sessions-cleanup] Erreur:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
