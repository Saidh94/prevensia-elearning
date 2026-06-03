import Anthropic from "@anthropic-ai/sdk";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de PREVENSIA FORMATION, organisme de formation certifié Qualiopi basé à Paris (Île-de-France), marque du Groupe PREVENSIA SAS. Tu aides les apprenants, les entreprises et les visiteurs à trouver les informations dont ils ont besoin.

Tu réponds toujours en français, avec un ton professionnel mais chaleureux. Tu es concis (max 3-4 phrases par réponse). Si tu ne sais pas quelque chose ou si la question est trop spécifique (ex: statut d'une commande précise), tu invites l'utilisateur à contacter directement PREVENSIA.

─── PREVENSIA FORMATION ────────────────────────────────────────
• Adresse : 33, avenue Philippe Auguste, 75011 Paris
• Téléphone : 01 89 62 94 92
• Email : contact@prevensia-formation.fr
• Certifié Qualiopi — éligible CPF
• Site : prevensia-formation.fr

─── FORMATIONS PROPOSÉES ───────────────────────────────────────

HABILITATIONS ÉLECTRIQUES (NF C 18-510)
• H0B0 / H0V — Personnel non électricien — E-learning — 129 € HT
• BS / BE Manœuvre — E-learning + classe virtuelle — 199 € HT
• B1/B2/BR/BC — Parcours multi-symboles BT — tarif sur devis
• Renouvellement / recyclage — disponible pour tous les niveaux
• Intra-entreprise à partir de 1 200 € HT/groupe

ATEX (Atmosphères Explosives)
• Niveau 1 — Sensibilisation — 3h e-learning — 129 € HT — individuel
• Niveau 2 — Travailleur exposé — E-learning 3h + entretien 30 min — 490 € HT
• Niveau 3 — Chargé de travaux / Responsable — E-learning 3h + classe virtuelle 2h — à partir de 790 € HT
• Conforme Directive 1999/92/CE et Code du travail

SSIAP1 (Sécurité Incendie)
• SSIAP1 initial — 105h (e-learning + présentiel) — à partir de 1 490 € HT
• Recyclage SSIAP1 (MAC) — 14h — à partir de 250 € HT
• L'attestation officielle est délivrée après examen devant jury agréé préfecture

SSI (Systèmes de Sécurité Incendie)
• Exploitation SSI — 1 jour — 350 € HT inter / à partir de 1 800 € HT intra
• SSI avancé — 2 jours — 690 € HT inter / à partir de 2 800 € HT intra

SPRINKLER
• Exploitation sprinkler — 1 jour — 490 € HT
• Sprinkler technique + visite terrain — 2 jours — 990 € HT

SÉCURITÉ INCENDIE
• Manipulation extincteurs — 0,5 jour — 149 € HT
• Guide-file / Serre-file — 0,5 jour — 150 € HT
• Équipier de Première Intervention (EPI) — 1 jour — 220 € HT

SST (Sauveteur Secouriste du Travail)
• SST initial — 2 jours — 240 € HT inter / à partir de 1 190 € HT intra
• MAC SST (recyclage) — 1 jour — 130 € HT inter / à partir de 690 € HT intra

─── PROCESSUS E-LEARNING ──────────────────────────────────────
1. L'apprenant reçoit ses identifiants par e-mail après inscription et paiement
2. Il se connecte sur prevensia-formation.fr → "Connexion"
3. Accès au module e-learning depuis le Dashboard apprenant
4. Quiz de validation à la fin du parcours (score minimum requis selon formation)
5. Pour les formations avec entretien (H0B0, ATEX Niv.2…) : planification via /booking
6. Attestation de réussite disponible en PDF après validation complète

─── ATTESTATIONS ──────────────────────────────────────────────
• Attestation de formation disponible en PDF depuis le dashboard apprenant
• ATEX : attestation spécifique par niveau (N1/N2/N3), valable 3 ans
• Habilitation électrique : attestation conforme NF C 18-510
• SSIAP1 : certificat officiel délivré après jury préfecture (pas en ligne)

─── FINANCEMENT ───────────────────────────────────────────────
• CPF (Compte Personnel de Formation) : certaines formations éligibles
• OPCO : financement possible via l'organisme paritaire de l'entreprise
• Prise en charge employeur : facture disponible
• Paiement CB sécurisé en ligne via Stripe

─── VÉRIFICATION D'IDENTITÉ — RÈGLE ABSOLUE ─────────────────
Pour toute demande sensible, tu dois TOUJOURS vérifier l'identité du demandeur AVANT d'agir ou de transmettre quoi que ce soit.

Sont considérées comme demandes sensibles :
• Demande de facture ou document comptable
• Demande de lien de reconnexion / réinitialisation de mot de passe
• Demande d'identifiants ou d'accès à un compte
• Toute question sur le statut d'une commande ou inscription précise

PROTOCOLE OBLIGATOIRE (à suivre dans cet ordre) :
1. Dès qu'une demande sensible est identifiée, dis : "Pour sécuriser votre demande, pouvez-vous me confirmer votre nom complet et l'adresse email utilisée lors de votre inscription ?"
2. Si la demande concerne une entreprise (employeur) : demande aussi le nom de la société
3. Attends que l'utilisateur fournisse ces informations AVANT de procéder
4. Une fois les éléments confirmés, utilise l'outil approprié

Ne jamais envoyer un lien de réinitialisation, une facture ou toute information de compte sans avoir obtenu au minimum le nom complet + l'email de l'utilisateur.

─── SUPPORT — COMMENT UTILISER LES OUTILS ───────────────────
Tu as accès à deux outils pour aider les utilisateurs en difficulté :

OUTIL 1 — create_support_ticket
Utilise cet outil pour : problème technique, demande de facture, accès bloqué, PDF non généré, lien cassé, autre problème.
Étapes à suivre :
1. Applique d'abord le protocole de vérification d'identité ci-dessus
2. Identifie le type de problème : no_access_course, pdf_not_generated, no_account_access, broken_link, invoice_request, other
3. Une fois nom + email + description obtenus, appelle create_support_ticket
4. Informe l'utilisateur que son ticket a été créé et qu'il recevra un email de confirmation

Pour les demandes de facture (invoice_request) : après vérification, indique que l'équipe lui renverra sa facture sous 24h ouvrées.

OUTIL 2 — reset_password
Utilise cet outil quand l'utilisateur dit avoir oublié son mot de passe ou ne plus pouvoir se connecter.
1. Applique d'abord le protocole de vérification d'identité (nom complet + email)
2. Une fois les éléments confirmés, appelle reset_password avec l'email
3. Informe l'utilisateur qu'un email de réinitialisation lui a été envoyé (sans confirmer si le compte existe ou non)

─── CE QUE TU NE DOIS PAS FAIRE ──────────────────────────────
• Ne jamais envoyer un lien de réinitialisation sans avoir vérifié le nom complet au préalable
• Ne jamais communiquer d'informations de compte sans vérification d'identité
• Ne jamais inventer un tarif ou une date qui n'est pas listée ci-dessus
• Ne jamais promettre qu'une formation est CPF sans confirmation
• Pour toute question sur un compte, une commande ou un accès spécifique,
  utiliser les outils ou rediriger vers contact@prevensia-formation.fr ou 01 89 62 94 92`;

// ── Définition des outils ─────────────────────────────────────────────────
const TOOLS: Anthropic.Tool[] = [
  {
    name: "create_support_ticket",
    description:
      "Crée un ticket de support dans le système PREVENSIA et envoie un email de confirmation à l'utilisateur. À utiliser quand l'utilisateur a un problème technique et a fourni son nom et email.",
    input_schema: {
      type: "object" as const,
      properties: {
        user_name: {
          type: "string",
          description: "Nom complet de l'utilisateur",
        },
        user_email: {
          type: "string",
          description: "Adresse email de l'utilisateur",
        },
        issue_type: {
          type: "string",
          enum: [
            "no_access_course",
            "pdf_not_generated",
            "no_account_access",
            "broken_link",
            "invoice_request",
            "other",
          ],
          description:
            "Type de problème : no_access_course (pas d'accès au cours), pdf_not_generated (PDF non généré), no_account_access (problème de compte), broken_link (lien cassé), invoice_request (demande de facture ou document comptable), other (autre)",
        },
        message: {
          type: "string",
          description: "Description complète du problème signalé par l'utilisateur",
        },
      },
      required: ["user_name", "user_email", "issue_type", "message"],
    },
  },
  {
    name: "reset_password",
    description:
      "Envoie un email de réinitialisation de mot de passe à l'utilisateur via Supabase.",
    input_schema: {
      type: "object" as const,
      properties: {
        email: {
          type: "string",
          description: "Adresse email du compte à réinitialiser",
        },
      },
      required: ["email"],
    },
  },
];

const ISSUE_LABELS: Record<string, string> = {
  no_access_course: "Pas d'accès à mon cours",
  pdf_not_generated: "Attestation PDF non générée",
  no_account_access: "Pas d'accès à mon compte",
  broken_link: "Lien qui ne fonctionne pas",
  invoice_request: "Demande de facture / document comptable",
  other: "Autre problème",
};

// ── Exécution des outils ──────────────────────────────────────────────────
async function executeTool(
  toolName: string,
  toolInput: Record<string, string>
): Promise<string> {
  if (toolName === "create_support_ticket") {
    const { user_name, user_email, issue_type, message } = toolInput;

    try {
      const adminClient = createAdminClient();
      if (adminClient) {
        await adminClient.from("support_tickets").insert({
          user_email,
          user_name: user_name || null,
          issue_type,
          message: message || null,
          status: "open",
        });
      }

      const issueLabel = ISSUE_LABELS[issue_type] ?? issue_type;
      const resendKey = process.env.RESEND_API_KEY?.trim();

      if (resendKey) {
        const resend = new Resend(resendKey);

        await Promise.allSettled([
          resend.emails.send({
            from: "PREVENSIA Support <contact@prevensia-formation.fr>",
            to: ["contact@prevensia-formation.fr"],
            subject: `[Support Chat] ${issueLabel} — ${user_name || user_email}`,
            html: `
              <h2>Ticket créé depuis le chat</h2>
              <p><strong>Problème :</strong> ${issueLabel}</p>
              <p><strong>Nom :</strong> ${user_name || "Non renseigné"}</p>
              <p><strong>Email :</strong> ${user_email}</p>
              <p><strong>Message :</strong></p>
              <blockquote style="border-left:3px solid #ccc;padding-left:12px;color:#444">
                ${message || "(Aucun message)"}
              </blockquote>
              <p><a href="https://prevensia-formation.fr/admin/support">Voir le dashboard support</a></p>
            `,
          }),
          resend.emails.send({
            from: "PREVENSIA Formation <contact@prevensia-formation.fr>",
            to: [user_email],
            subject: "Votre demande de support a bien été reçue — PREVENSIA FORMATION",
            html: `
              <p>Bonjour ${user_name || ""},</p>
              <p>Nous avons bien reçu votre demande concernant : <strong>${issueLabel}</strong>.</p>
              <p>Notre équipe vous répondra dans les meilleurs délais (généralement sous 24h ouvrées).</p>
              <p>Si votre problème est urgent, appelez-nous au <strong>01 89 62 94 92</strong>.</p>
              <br/>
              <p>Cordialement,<br/>L'équipe PREVENSIA FORMATION<br/>33, avenue Philippe Auguste — 75011 Paris</p>
            `,
          }),
        ]);
      }

      return JSON.stringify({ success: true, message: "Ticket créé avec succès. Email de confirmation envoyé à " + user_email });
    } catch (err) {
      console.error("[Tool] create_support_ticket erreur :", err);
      return JSON.stringify({ success: false, message: "Erreur lors de la création du ticket." });
    }
  }

  if (toolName === "reset_password") {
    const { email } = toolInput;

    try {
      const supabase = await createClient();
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://prevensia-formation.fr"}/connexion?reset=1`,
      });
      return JSON.stringify({ success: true, message: "Email de réinitialisation envoyé si le compte existe." });
    } catch (err) {
      console.error("[Tool] reset_password erreur :", err);
      return JSON.stringify({ success: true, message: "Email de réinitialisation envoyé si le compte existe." });
    }
  }

  return JSON.stringify({ error: "Outil inconnu" });
}

// ── Types ─────────────────────────────────────────────────────────────────
type Message = {
  role: "user" | "assistant";
  content: string;
};

// ── Route POST ────────────────────────────────────────────────────────────
export async function POST(request: Request) {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Service de chat temporairement indisponible." },
        { status: 503 }
      );
    }

    const body = (await request.json()) as { messages?: Message[] };
    const messages = body.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages manquants." },
        { status: 400 }
      );
    }

    const trimmedMessages = messages.slice(-20);
    const client = new Anthropic({ apiKey });

    // ── Premier appel ────────────────────────────────────────────────────
    let response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      tools: TOOLS,
      messages: trimmedMessages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    // ── Boucle tool use ──────────────────────────────────────────────────
    while (response.stop_reason === "tool_use") {
      const toolUseBlock = response.content.find(
        (b): b is Anthropic.ToolUseBlock => b.type === "tool_use"
      );

      if (!toolUseBlock) break;

      const toolResult = await executeTool(
        toolUseBlock.name,
        toolUseBlock.input as Record<string, string>
      );

      // Renvoyer le résultat de l'outil à Claude
      const messagesWithTool: Anthropic.MessageParam[] = [
        ...trimmedMessages.map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
        {
          role: "assistant" as const,
          content: response.content,
        },
        {
          role: "user" as const,
          content: [
            {
              type: "tool_result" as const,
              tool_use_id: toolUseBlock.id,
              content: toolResult,
            },
          ],
        },
      ];

      response = await client.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 600,
        system: SYSTEM_PROMPT,
        tools: TOOLS,
        messages: messagesWithTool,
      });
    }

    // ── Réponse finale ────────────────────────────────────────────────────
    const text =
      response.content.find((b): b is Anthropic.TextBlock => b.type === "text")
        ?.text ?? "";

    return NextResponse.json({ reply: text });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const status = (error as { status?: number })?.status;
    console.error("[Chat API] Erreur:", { message, status });

    if (status === 401) {
      return NextResponse.json(
        { error: "Clé API invalide. Contactez l'administrateur." },
        { status: 500 }
      );
    }
    if (status === 403) {
      return NextResponse.json(
        { error: "Accès API refusé. Vérifiez les crédits Anthropic." },
        { status: 500 }
      );
    }
    if (status === 400) {
      return NextResponse.json(
        { error: "Requête invalide. Contactez l'administrateur." },
        { status: 500 }
      );
    }
    if (status === 404) {
      return NextResponse.json(
        { error: "Modèle IA indisponible. Contactez l'administrateur." },
        { status: 500 }
      );
    }
    if (status === 429) {
      return NextResponse.json(
        { error: "Trop de requêtes. Réessayez dans quelques secondes." },
    