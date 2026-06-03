import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de PREVENSIA FORMATION, organisme de formation certifié Qualiopi basé à Paris (Île-de-France). Tu aides les apprenants, les entreprises et les visiteurs.

Tu réponds toujours en français, avec un ton professionnel mais chaleureux. Tu es concis (max 3-4 phrases). Si tu ne sais pas, invite l'utilisateur à contacter PREVENSIA.

PREVENSIA FORMATION
- Adresse : 33, avenue Philippe Auguste, 75011 Paris
- Téléphone : 01 89 62 94 92
- Email : contact@prevensia-formation.fr
- Certifié Qualiopi — éligible CPF

FORMATIONS PROPOSÉES :
- H0B0 / H0V : Personnel non électricien — E-learning — 129 EUR HT
- BS / BE Manoeuvre : E-learning + classe virtuelle — 199 EUR HT
- B1/B2/BR/BC : Parcours multi-symboles BT — tarif sur devis
- ATEX Niveau 1 : Sensibilisation — 3h e-learning — 129 EUR HT
- ATEX Niveau 2 : Travailleur exposé — E-learning 3h + entretien — 490 EUR HT
- ATEX Niveau 3 : Chargé de travaux — E-learning + classe virtuelle — à partir de 790 EUR HT
- SSIAP1 initial : 105h — à partir de 1 490 EUR HT
- Exploitation SSI : 1 jour — 350 EUR HT inter
- Exploitation Sprinkler : 1 jour — 490 EUR HT
- SST initial : 2 jours — 240 EUR HT inter
- MAC SST (recyclage) : 1 jour — 130 EUR HT inter
- Manipulation extincteurs : 0,5 jour — 149 EUR HT

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
        model: "claude-3-5-haiku-20241022",
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: apiMessages,
      }),
    });

    if (!anthropicRes.ok) {
      const errBody = await anthropicRes.text();
      console.error("[Chat] Anthropic error", anthropicRes.status, errBody);
      return NextResponse.json(
        { error: `Erreur API (${anthropicRes.status}). Contactez-nous au 01 89 62 94 92.` },
        { status: 500 }
      );
    }

    const data = await anthropicRes.json();
    const reply = data?.content?.[0]?.text ?? "Je n'ai pas pu générer de réponse. Contactez-nous au 01 89 62 94 92.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[Chat] Erreur inattendue:", error);
    return NextResponse.json(
      { error: "Erreur technique. Contactez-nous au 01 89 62 94 92 ou contact@prevensia-formation.fr." },
      { status: 500 }
    );
  }
}
