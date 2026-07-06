import { createAdminClient } from "@/lib/supabase/admin";
import { Resend } from "resend";

export const runtime = "nodejs";

// Page HTML simple retournée après l'action
function htmlPage(title: string, message: string, color: string, extra = ""): string {
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
    ${extra}
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

async function postToLinkedIn(content: string): Promise<string> {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const memberId = process.env.LINKEDIN_MEMBER_ID;

  if (!accessToken || !memberId) {
    throw new Error("LINKEDIN_ACCESS_TOKEN ou LINKEDIN_MEMBER_ID manquant");
  }

  const res = await fetch("https://api.linkedin.com/v2/ugcPosts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "X-Restli-Protocol-Version": "2.0.0",
    },
    body: JSON.stringify({
      author: `urn:li:person:${memberId}`,
      lifecycleState: "PUBLISHED",
      specificContent: {
        "com.linkedin.ugc.ShareContent": {
          shareCommentary: { text: content },
          shareMediaCategory: "NONE",
        },
      },
      visibility: {
        "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
      },
    }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(`LinkedIn API (${res.status}): ${JSON.stringify(data)}`);
  return data.id ?? "unknown";
}

// GET /api/admin/linkedin-publish?token=<uuid>
// Lien reçu par email — un seul clic publie le post sur LinkedIn
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return new Response(
      htmlPage("❌ Lien invalide", "Le token est manquant. Vérifiez le lien reçu par email.", "#ef4444"),
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

  // Chercher le post en attente par token dans les métadonnées
  const { data: records, error } = await supabase
    .from("agent_logs")
    .select("*")
    .eq("agent_name", "linkedin-post")
    .eq("status", "pending_approval")
    .limit(100);

  if (error) {
    return new Response(
      htmlPage("❌ Erreur base de données", error.message, "#ef4444"),
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  const record = records?.find((r) => r.metadata?.token === token);

  if (!record) {
    return new Response(
      htmlPage(
        "⚠️ Post introuvable ou déjà traité",
        "Ce post a peut-être déjà été publié ou rejeté. Vérifiez l'admin LinkedIn.",
        "#f59e0b"
      ),
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  const content: string = record.metadata?.content ?? "";
  const theme: string = record.metadata?.theme ?? "inconnu";

  try {
    // Publier sur LinkedIn
    const postId = await postToLinkedIn(content);

    // Mettre à jour le statut en base
    await supabase
      .from("agent_logs")
      .update({
        status: "success",
        output_summary: `Post LinkedIn publié — ${theme} (approuvé manuellement)`,
        metadata: {
          ...record.metadata,
          post_id: postId,
          published_at: new Date().toISOString(),
          approved_by: "said_manuel",
        },
      })
      .eq("id", record.id);

    // Email de confirmation à Said
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "PREVENSIA IA <ia@prevensia-formation.fr>",
        to: ["contact@prevensia-formation.fr"],
        subject: `✅ Post LinkedIn publié — ${theme}`,
        html: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px">
  <h2 style="color:#16a34a">✅ Post LinkedIn publié avec succès</h2>
  <p><strong>Thème :</strong> ${theme}</p>
  <p><strong>ID du post LinkedIn :</strong> <code>${postId}</code></p>
  <p><strong>Publié le :</strong> ${new Date().toLocaleDateString("fr-FR")} à ${new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}</p>
</div>`,
      });
    }

    return new Response(
      htmlPage(
        "✅ Post publié sur LinkedIn !",
        `Le post sur "<strong>${theme}</strong>" a été publié avec succès sur votre page LinkedIn.<br/><br/>ID : <code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;font-size:12px">${postId}</code>`,
        "#16a34a"
      ),
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);

    return new Response(
      htmlPage(
        "❌ Erreur lors de la publication",
        `Impossible de publier sur LinkedIn : <br/><em style="font-size:13px;color:#94a3b8">${msg}</em>`,
        "#ef4444"
      ),
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }
}
