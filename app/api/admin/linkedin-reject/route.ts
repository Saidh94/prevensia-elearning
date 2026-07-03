import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

function htmlPage(title: string, message: string, color: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title} — PREVENSIA</title>
</head>
<body style="font-family:Arial,sans-serif;max-width:520px;margin:80px auto;padding:24px;text-align:center;background:#f8fafc">
  <div style="background:#fff;border:2px solid ${color};border-radius:12px;padding:40px 32px;box-shadow:0 4px 16px rgba(0,0,0,.06)">
    <h1 style="color:${color};font-size:26px;margin-bottom:12px">${title}</h1>
    <p style="color:#475569;font-size:15px;line-height:1.6">${message}</p>
    <p style="margin-top:28px">
      <a href="https://prevensia-formation.fr/admin" style="color:#2563eb;font-size:13px;text-decoration:none">
        ← Retour à l'administration
      </a>
    </p>
  </div>
  <p style="margin-top:16px;font-size:11px;color:#94a3b8">PREVENSIA FORMATION — Système IA</p>
</body>
</html>`;
}

// GET /api/admin/linkedin-reject?token=<uuid>
// Rejette et archive le post en attente (ne publie rien sur LinkedIn)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return new Response(
      htmlPage("❌ Lien invalide", "Token manquant.", "#ef4444"),
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  const supabase = createAdminClient();
  if (!supabase) {
    return new Response(
      htmlPage("❌ Erreur serveur", "Impossible de contacter la base de données.", "#ef4444"),
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  // Chercher le post en attente
  const { data: records } = await supabase
    .from("agent_logs")
    .select("*")
    .eq("agent_name", "linkedin-post")
    .eq("status", "pending_approval")
    .order("created_at", { ascending: false })
    .limit(100);

  const record = records?.find((r) => r.metadata?.token === token);

  if (!record) {
    return new Response(
      htmlPage(
        "⚠️ Post introuvable",
        "Ce post a peut-être déjà été publié ou rejeté.",
        "#f59e0b"
      ),
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  const theme: string = record.metadata?.theme ?? "inconnu";

  // Marquer comme rejeté
  await supabase
    .from("agent_logs")
    .update({
      status: "rejected",
      output_summary: `Post rejeté manuellement — ${theme}`,
      metadata: {
        ...record.metadata,
        rejected_at: new Date().toISOString(),
      },
    })
    .eq("id", record.id);

  return new Response(
    htmlPage(
      "Post rejeté",
      `Le post sur "<strong>${theme}</strong>" a été archivé. Il ne sera pas publié sur LinkedIn.<br/><br/>Le prochain post sera généré selon le calendrier habituel.`,
      "#64748b"
    ),
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
