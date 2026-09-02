import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { COMPANY } from "@/lib/company";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de PREVENSIA FORMATION, organisme de formation certifié Qualiopi basé à Paris (Île-de-France). Tu aides les apprenants, les entreprises et les visiteurs.

Tu réponds toujours en français, avec un ton professionnel mais chaleureux. Tu es concis (max 3-4 phrases). Si tu ne sais pas, invite l'utilisateur à contacter PREVENSIA.

PREVENSIA FORMATION
- Adresse : ${COMPANY.addressFull}
- Téléphone : 01 89 62 94 92
- Email : contact@prevensia-formation.fr
- Certifié Qualiopi — financement OPCO et FNE-Formation

FORMATIONS PROPOSÉES (tarifs inter-entreprise HT) :
- H0B0 / H0V : Personnel non électricien — E-learning + entretien formateur — 190 EUR HT
- BS / BE Manœuvre : E-learning + visio — 350 EUR HT
- B1/B2/BR/BC : Parcours multi-symboles BT — tarif sur devis
- ATEX NIV 0 — Sensibilisation atmosphères explosives : E-learning 2h + entretien 30 min — 129 EUR HT
- ATEX NIV 1 — Intervenant zone ATEX : E-learning 5-6h + classe virtuelle 4h — 490 EUR HT
- ATEX NIV 2 — Encadrant/Chargé de travaux ATEX : E-learning 7h + journée présentielle — à partir de 990 EUR HT (sur devis)
- SSIAP1 initial : 70h hybride (e-learning + présentiel + examen) — 1090 EUR HT
- Recyclage SSIAP1 : 14h obligatoire tous les 3 ans — 390 EUR HT inter
- Exploitation Sprinkler : 1 jour — 590 EUR HT / apprenant (inter) | intra sur devis
- Coordinateur SSI (CSSI) — NF S 61-931 : Formation pour futurs CSSI, ingénieurs de bureaux d'études, SSIAP 3 en évolution de carrière, architectes. Objectif : maîtriser la CONCEPTION et la COORDINATION d'un SSI (Système de Sécurité Incendie) neuf ou en rénovation — rédaction du CCF (Cahier des Charges Fonctionnel), construction de la matrice de corrélation ZDA/ZDM × DAS, coordination des installateurs, constitution du DIS (Dossier d'Identité SSI). Ce n'est PAS une formation sur l'exploitation ou la maintenance d'un SSI existant. E-learning + 7 jours de présentiel sur dossiers réels — tarif sur devis.
- SST initial : sur devis (présentiel obligatoire — pratique indispensable)
- MAC SST (recyclage SST) : sur devis
- EPI / Extincteurs / Évacuation / Guide-file : sur devis selon effectif et site

IMPORTANT — À ne JAMAIS dire :
- Ne jamais dire que la formation Coordinateur SSI est "adaptée à votre site et votre système installé" : elle concerne la phase de conception/installation d'un SSI neuf, pas l'exploitation d'un bâtiment existant.
- Ne jamais inventer de tarifs ou de durées non mentionnés ci-dessus.
- Ne jamais citer le guide AFNOR N0366 ni APAVE.

Pour tout problème de compte, mot de passe, attestation ou facture, invite l'utilisateur à contacter contact@prevensia-formation.fr ou le 01 89 62 94 92.`;

type Message = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Service de chat indisponible. Contactez-nous au 01 89 62 94 92." },
        { status: 503 }
      );
    }

    const body = (await request.json()) as { messages?: Message[] };
    const messages = body.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Messages manquants." }, { status: 400 });
    }

    // Garder seulement les 20 derniers messages et s'assurer que le premier est "user"
    let apiMessages = messages
      .slice(-20)
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role, content: m.content }));

    while (apiMessages.length > 0 && apiMessages[0].role === "assistant") {
      apiMessages = apiMessages.slice(1);
    }

    if (apiMessages.length === 0) {
      return NextResponse.json({ error: "Aucun message utilisateur." }, { status: 400 });
    }

    // Appel direct à l'API Anthropic via fetch (sans SDK pour éviter tout problème de version)
    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: apiMessages,
      }),
    });

    if (!anthropicRes.ok) {
      const errBody = await anthropicRes.text();
      console.error("[Chat] Anthropic error", anthropicRes.status, errBody);
      return NextResponse.json(
        { error: `Erreur technique (${anthropicRes.status}). Contactez-nous au 01 89 62 94 92.` },
        { status: 500 }
      );
    }

    const data = await anthropicRes.json();
    const reply = data?.content?.[0]?.text ?? "Je n'ai pas pu générer de réponse. Contactez-nous au 01 89 62 94 92.";

    // ── Capture de lead chatbot ──────────────────────────────────────────────
    // Détecter un email dans les messages utilisateur
    try {
      const allUserText = messages
        .filter((m) => m.role === "user")
        .map((m) => m.content)
        .join(" ");

      const emailMatch = allUserText.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/);
      if (emailMatch) {
        const email = emailMatch[0].toLowerCase();

        // Détecter la formation citée dans la conversation
        const fullText = messages.map((m) => m.content).join(" ").toLowerCase();
        const formationMap: Record<string, string> = {
          "atex 2": "ATEX N2 – Encadrant / Référent", "atex2": "ATEX N2 – Encadrant / Référent",
          "atex 1": "ATEX Niveau 1", "atex1": "ATEX Niveau 1", "atex": "ATEX",
          "ssiap1": "SSIAP1", "ssiap 1": "SSIAP1", "ssiap": "SSIAP1",
          "sst": "SST", "b1": "B1/B2", "b2": "B1/B2",
          "bs be": "BS/BE", "bs/be": "BS/BE",
          "h0b0": "H0B0", "h0v": "H0V", "h0": "H0B0",
          "sprinkler": "Exploitation Sprinkler",
          "coordinateur ssi": "Coordinateur SSI", "cssi": "Coordinateur SSI",
          "coordination ssi": "Coordinateur SSI", "ssi": "Coordinateur SSI",
          "extincteur": "Extincteurs",
        };
        let formationInterest = "chatbot";
        for (const [keyword, label] of Object.entries(formationMap)) {
          if (fullText.includes(keyword)) { formationInterest = label; break; }
        }

        const supabaseAdmin = createAdminClient();
        if (supabaseAdmin) {
          // Vérifier si déjà en base (éviter doublons)
          const { data: existing } = await supabaseAdmin
            .from("leads")
            .select("id")
            .eq("email", email)
            .maybeSingle();

          if (!existing) {
            await supabaseAdmin.from("leads").insert({
              email,
              source: "chatbot",
              formation_interest: formationInterest,
              status: "new",
              score: 20, // score minimal (email seul)
              created_at: new Date().toISOString(),
            });

            // KPI
            const today = new Date().toISOString().split("T")[0];
            await supabaseAdmin.from("kpi_daily").upsert(
              { date: today, new_leads: 1 },
              { onConflict: "date", ignoreDuplicates: false }
            );
          }
        }
      }
    } catch (leadErr) {
      // Non bloquant
      console.error("[Chat] Erreur capture lead :", leadErr);
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[Chat] Erreur inattendue:", error);
    return NextResponse.json(
      { error: "Erreur technique. Contactez-nous au 01 89 62 94 92 ou contact@prevensia-formation.fr." },
      { status: 500 }
    );
  }
}
