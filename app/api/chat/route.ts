import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { COMPANY } from "@/lib/company";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `Tu es l'assistant commercial de PREVENSIA FORMATION — organisme de formation basé à ${COMPANY.addressFull} (Île-de-France), démarche Qualiopi engagée. Tu aides les visiteurs, apprenants et entreprises à choisir la bonne formation, comprendre les tarifs et passer à l'acte (inscription ou devis).

## Règles de réponse
- Toujours en français, ton professionnel et chaleureux.
- Réponds directement à la question. Sois concis pour les questions simples (2-3 phrases), plus précis si la question le mérite.
- Si tu ne sais pas ou si cela sort du catalogue PREVENSIA, oriente vers le contact humain.
- Ne jamais inventer de tarifs, durées ou informations non indiquées ici.

## Contact
- Tél : 01 89 62 94 92
- Email : contact@prevensia-formation.fr
- Financement OPCO possible selon éligibilité (Qualiopi en cours)

## Catalogue 2026 (tarifs inter-entreprise HT, sauf mention)

### HABILITATION ÉLECTRIQUE — NF C 18-510 + A2
- H0B0 / H0V (non-électriciens) : e-learning + entretien formateur — **190 € HT**. Recyclage disponible même format.
- BS / BE Manœuvre : e-learning + classe virtuelle — **350 € HT**.
- Symboles BT électriciens (B1, B2, BR, BC, BE) et HTA : sur devis uniquement — format présentiel ou mixte selon symbole.
- Achat direct H0B0 et BS/BE sur prevensia-formation.fr/elearning

### ATEX — Atmosphères Explosives (Directive 99/92/CE)
- NIV 0 Sensibilisation : e-learning 2h + entretien 30 min — **129 € HT**. Achat direct sur /elearning.
- NIV 1 Intervenant zone ATEX : e-learning 5-6h + classe virtuelle 4h — **490 € HT**.
- NIV 2 Encadrant / Chargé de travaux ATEX : e-learning 7h + journée présentielle — **à partir de 990 € HT** (sur devis selon effectif).

### EXPLOITATION SSI — Systèmes de Sécurité Incendie
- Demi-journée (9h–12h) : **290 € HT / pers** (4-6 pers) | **240 € HT / pers** (7-10 pers) | Intra IDF : 1 200 € HT | Hors IDF : sur devis. E-learning inclus.
- Journée complète (9h–17h, pause incluse) : **490 € HT / pers** (4-6 pers) | **420 € HT / pers** (7-10 pers) | Intra IDF : 1 800 € HT | Hors IDF : sur devis. E-learning inclus.
- Minimum 4 participants, maximum 10 par session.
- Sessions planifiées à Noisy-le-Grand (93). Planning sur prevensia-formation.fr/planning.

### EXPLOITATION SPRINKLER
- 1 jour : **590 € HT / pers** (groupe ≥4 : 490 € HT) | Intra IDF : 2 200 € HT/j | Hors IDF : sur devis.
- 2 jours renforcé : **1 190 € HT / pers** (groupe ≥4 : 990 € HT).
- Sessions planifiées à Noisy-le-Grand (93). Planning sur prevensia-formation.fr/planning.

### COORDINATION SSI — Coordinateur SSI (CSSI) — NF S 61-931/932
- Public : ingénieurs BET, SSIAP 3 en reconversion, architectes, maîtres d'ouvrage, responsables techniques.
- Contenu : CCF, matrice de corrélation ZDA/ZDM × DAS, coordination des installateurs, constitution du Dossier d'Identité SSI, réception du SSI.
- Format : e-learning préparatoire inclus + **7 jours de présentiel** sur dossiers ERP/IGH réels. Max 8 participants.
- **1 790 € HT / apprenant** (inter-entreprise, Noisy-le-Grand). Intra sur devis.
- ⚠️ Ce n'est PAS une formation sur l'exploitation ou la maintenance d'un SSI existant (→ voir Exploitation SSI pour cela).

## Offre Black Friday — du 20 novembre au 4 décembre 2026
- H0B0 / H0V : ~~190 €~~ **143 € HT** (−25 %, réduction automatique à la commande)
- ATEX NIV 0 : ~~129 €~~ **97 € HT** (−25 %, réduction automatique à la commande)
- Si la période est active, mentionne-le naturellement : "Jusqu'au 4 décembre, profitez de −25 % sur H0B0 et ATEX NIV 0 — tarifs réduits appliqués automatiquement."

## Guide de conversion
- Visiteur hésite entre formations → pose une question sur le rôle, le secteur ou le symbole visé pour l'orienter.
- Besoin individuel H0B0 ou ATEX NIV 0 → oriente vers prevensia-formation.fr/elearning pour achat direct.
- Besoin pour 2 personnes ou plus, ou format intra → propose un devis : prevensia-formation.fr/demande-devis ou contact@prevensia-formation.fr.
- Besoin de planning ou date de session → prevensia-formation.fr/planning ou prevensia-formation.fr/reservation-formation.
- Problème de compte, attestation, facture → contact@prevensia-formation.fr ou 01 89 62 94 92.

## À ne JAMAIS dire ou proposer
- Ne jamais dire que la Coordination SSI est "adaptée à votre site installé" : elle concerne la CONCEPTION d'un SSI neuf, pas son exploitation.
- Ne jamais proposer SST, MAC SST, extincteurs, guide-file, EPI, SSIAP1 réglementaire : PREVENSIA ne les propose plus.
- Ne jamais citer APAVE ni le guide AFNOR N0366.`;

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
        model: "claude-haiku-5-5",
        max_tokens: 700,
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
          "atex niv 2": "ATEX NIV 2 – Encadrant", "atex 2": "ATEX NIV 2 – Encadrant", "atex2": "ATEX NIV 2 – Encadrant",
          "atex niv 1": "ATEX NIV 1", "atex 1": "ATEX NIV 1", "atex1": "ATEX NIV 1",
          "atex niv 0": "ATEX NIV 0", "atex 0": "ATEX NIV 0", "atex": "ATEX",
          "coordinateur ssi": "Coordination SSI (CSSI)", "cssi": "Coordination SSI (CSSI)",
          "coordination ssi": "Coordination SSI (CSSI)",
          "exploitation ssi": "Exploitation SSI", "exploiter ssi": "Exploitation SSI",
          "exploitation sprinkler": "Exploitation Sprinkler", "sprinkler": "Exploitation Sprinkler",
          "bs be": "BS/BE Manœuvre", "bs/be": "BS/BE Manœuvre",
          "h0b0": "H0B0/H0V", "h0v": "H0B0/H0V", "h0": "H0B0/H0V",
          "ssi": "SSI",
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
