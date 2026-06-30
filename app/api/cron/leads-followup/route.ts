import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const maxDuration = 60;

// Génère un email de qualification personnalisé via Claude Haiku
async function genererEmailQualification(lead: {
  first_name?: string;
  last_name?: string;
  formation_interest?: string;
  email: string;
}): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return "";

  const prenom = lead.first_name ? `, ${lead.first_name}` : "";
  const formation = lead.formation_interest ?? "une formation sécurité incendie";

  const prompt = `Tu es Said Hachiba, directeur de PREVENSIA FORMATION (organisme de formation sécurité incendie, Qualiopi).
Tu rédiges un email de prise de contact commercial en français, chaleureux et professionnel, pour qualifier un prospect.

Informations prospect :
- Prénom : ${lead.first_name ?? "non renseigné"}
- Intérêt de formation : ${formation}

Rédige uniquement le CORPS de l'email (pas de sujet, pas de signature), en HTML simple (paragraphes <p>).
Ton : professionnel, direct, humain. Pas de jargon. Environ 120 mots.
Objectif : demander 3 choses précises :
1. Le nombre de participants envisagé
2. Les dates souhaitées (mois, trimestre)
3. Si la formation est souhaitée en intra (sur leur site) ou en inter (dans nos locaux)

Commence par "Bonjour${prenom}," et termine par une phrase d'invitation à répondre directement à cet email.`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 400,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await res.json();
  return data?.content?.[0]?.text ?? "";
}

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: "DB error" }, { status: 500 });

  try {
    const now = new Date().toISOString();

    // Leads à relancer aujourd'hui
    const { data: leads } = await supabase
      .from("leads")
      .select("*")
      .lte("next_followup_at", now)
      .eq("status", "new")
      .order("next_followup_at", { ascending: true })
      .limit(20);

    if (!leads?.length) {
      return NextResponse.json({ ok: true, message: "Aucun lead à rela