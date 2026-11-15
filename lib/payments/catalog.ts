import "server-only";

type PricingContext = {
  formationSlug?: string | null;
  formationTitle?: string | null;
};

type PaymentRule = {
  envKey?: string;
  kind: "direct" | "quote";
  label: string;
  allKeywords?: string[];
  anyKeywords?: string[];
  reason?: string;
};

type DirectPaymentOption = {
  kind: "direct";
  amountCents: number;
  label: string;
};

type QuotePaymentOption = {
  kind: "quote";
  label: string;
  reason: string;
};

export type EnrollmentPaymentOption =
  | DirectPaymentOption
  | QuotePaymentOption;

const paymentRules: PaymentRule[] = [
  // ── E-learning 100 % — paiement direct ────────────────────────────────────

  {
    envKey: "STRIPE_PRICE_H0B0_RECYCLAGE_CENTS",
    kind: "direct",
    label: "Recyclage H0B0 e-learning",
    allKeywords: ["h0b0", "recyclage"],
  },
  {
    envKey: "STRIPE_PRICE_H0B0_ELEARNING_CENTS",
    kind: "direct",
    label: "Habilitation électrique H0B0 / H0V",
    anyKeywords: ["h0b0", "h0v"],
  },
  {
    envKey: "STRIPE_PRICE_ATEX_ELEARNING_CENTS",
    kind: "direct",
    label: "Sensibilisation ATEX NIV 0",
    anyKeywords: ["atex", "atmosphere explosive", "atmospheres explosives"],
  },

  // ── Coordination SSI — présentiel Noisy-le-Grand ─────────────────────────

  {
    kind: "quote",
    label: "Coordination SSI",
    anyKeywords: ["coordinateur ssi", "coordination ssi", "coordonnateur ssi"],
    reason:
      "La formation Coordination SSI est dispensée en présentiel à Noisy-le-Grand. Tarif par personne — contactez contact@prevensia-formation.fr pour les prochaines sessions.",
  },

  // ── SSI Exploitation — hybride, sessions planifiées ───────────────────────

  {
    kind: "quote",
    label: "Exploitation du SSI",
    allKeywords: ["ssi", "exploitation"],
    reason:
      "La formation Exploitation SSI est disponible en demi-journée (290 € HT/pers.) ou journée complète (490 € HT/pers.), avec sessions planifiées à Noisy-le-Grand. Tarif groupe (4+ pers.) : 240 € / 420 € HT. Intra IDF : 1 200 € HT (demi-journée) ou 1 800 € HT (journée). Hors Île-de-France : sur devis. Consultez prevensia-formation.fr/formation-ssi pour les prochaines sessions.",
  },

  // ── Sprinkler Exploitation — présentiel, sessions planifiées ─────────────

  {
    kind: "quote",
    label: "Exploitation sprinkler",
    allKeywords: ["sprinkler", "exploitation"],
    reason:
      "La formation Exploitation Sprinkler est disponible en 1 jour (590 € HT/pers.) ou 2 jours renforcé (1 190 € HT/pers.), avec sessions planifiées à Noisy-le-Grand. Tarif groupe (4+ pers.) : 490 € / 990 € HT. Intra IDF : 2 200 € HT/jour. Hors Île-de-France : sur devis. Consultez prevensia-formation.fr/formation-sprinkler pour les prochaines sessions.",
  },

  {
    kind: "quote",
    label: "Formation sprinkler sur mesure",
    anyKeywords: [
      "apsad",
      "en 12845",
      "nfpa",
      "fm global",
      "referentiel",
      "referentiels",
      "technique",
      "logistique",
      "industriel",
    ],
    reason:
      "La formation sprinkler sur mesure est adaptée selon le référentiel, le site et la profondeur technique demandée. Hors Île-de-France : sur devis (déplacement formateur).",
  },

  {
    kind: "quote",
    label: "Formation SSI sur mesure",
    anyKeywords: [
      "erp",
      "igh",
      "icpe",
      "nf s 61",
      "normatif",
      "referentiel",
      "referentiels",
      "cmsi",
      "ecs",
    ],
    reason:
      "Cette formation SSI dépend du site, du système installé et du niveau technique attendu. Hors Île-de-France : sur devis.",
  },
];

function normalize(value: string | null | undefined) {
  return (value ?? "").trim().toLowerCase();
}

function readAmountFromEnv(envKey: string) {
  const rawValue = process.env[envKey]?.trim();

  if (!rawValue) {
    return null;
  }

  const parsed = Number(rawValue);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(
      `Configuration Stripe invalide: ${envKey} doit contenir un montant entier en centimes.`
    );
  }

  return parsed;
}

function matchesRule(searchableText: string, rule: PaymentRule) {
  const matchesAllKeywords =
    !rule.allKeywords ||
    rule.allKeywords.every((keyword) => searchableText.includes(keyword));

  const matchesAnyKeywords =
    !rule.anyKeywords ||
    rule.anyKeywords.some((keyword) => searchableText.includes(keyword));

  return matchesAllKeywords && matchesAnyKeywords;
}

export function getEnrollmentPaymentOption({
  formationSlug,
  formationTitle,
}: PricingContext): EnrollmentPaymentOption {
  const searchableText = [normalize(formationSlug), normalize(formationTitle)]
    .filter(Boolean)
    .join(" ");

  for (const rule of paymentRules) {
    if (!matchesRule(searchableText, rule)) {
      continue;
    }

    if (rule.kind === "quote") {
      return {
        kind: "quote",
        label: formationTitle?.trim() || rule.label,
        reason:
          rule.reason ||
          "Cette formation nécessite un devis avant validation du paiement.",
      };
    }

    if (!rule.envKey) {
      continue;
    }

    const amountCents = readAmountFromEnv(rule.envKey);

    if (!amountCents) {
      continue;
    }

    return {
      kind: "direct",
      amountCents,
      label: formationTitle?.trim() || rule.label,
    };
  }

  const defaultAmount = readAmountFromEnv("STRIPE_DEFAULT_AMOUNT_CENTS");

  if (defaultAmount) {
    return {
      kind: "direct",
      amountCents: defaultAmount,
      label: formationTitle?.trim() || "Formation PREVENSIA",
    };
  }

  return {
    kind: "quote",
    label: formationTitle?.trim() || "Formation PREVENSIA",
    reason:
      "Le paiement en ligne n'est pas encore configuré pour cette offre. Utilisez la demande de devis ou marquez le paiement manuellement.",
  };
}

export function resolveEnrollmentPricing(context: PricingContext): DirectPaymentOption {
  const option = getEnrollmentPaymentOption(context);

  if (option.kind !== "direct") {
    throw new Error(option.reason);
  }

  return option;
}
