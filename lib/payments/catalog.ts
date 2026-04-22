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
  {
    kind: "quote",
    label: "B1 / B1V - parcours cible",
    anyKeywords: ["b1 / b1v", "b1/b1v", "parcours cible executant", "executant electricien"],
    reason:
      "Ce parcours est ajuste selon les travaux reels, le voisinage et l'organisation retenue.",
  },
  {
    kind: "quote",
    label: "B2 / B2V - parcours cible",
    anyKeywords: ["b2 / b2v", "b2/b2v", "charge de travaux"],
    reason:
      "Ce parcours est ajuste selon le role d'encadrement, le site et les procedures appliquees.",
  },
  {
    kind: "quote",
    label: "BR - parcours cible",
    anyKeywords: ["formation br", "habilitation br", "intervention generale"],
    reason:
      "Le parcours BR est dimensionne selon les interventions generales reellement confiees.",
  },
  {
    kind: "quote",
    label: "BC - parcours cible",
    anyKeywords: ["formation bc", "habilitation bc", "charge de consignation"],
    reason:
      "Le parcours BC depend des procedures de consignation et de l'organisation du site.",
  },
  {
    kind: "quote",
    label: "BE Verification / BE Mesurage",
    anyKeywords: ["be verification", "be mesurage", "verification", "mesurage"],
    reason:
      "Les attributs BE Verification et BE Mesurage doivent etre calibres selon les missions reellement prevues.",
  },
  {
    envKey: "STRIPE_PRICE_H0B0_RECYCLAGE_CENTS",
    kind: "direct",
    label: "Recyclage H0B0 e-learning",
    allKeywords: ["h0b0", "recyclage"],
  },
  {
    envKey: "STRIPE_PRICE_BSBE_RECYCLAGE_CENTS",
    kind: "direct",
    label: "Recyclage BS et BE Manoeuvre e-learning",
    allKeywords: ["recyclage"],
    anyKeywords: ["bs", "be manoeuvre", "bs/be", "bs be", "manoeuvre"],
  },
  {
    envKey: "STRIPE_PRICE_B1B2BRBC_RECYCLAGE_CENTS",
    kind: "direct",
    label: "Recyclage B1 / B1V / B2 / B2V / BR / BC",
    allKeywords: ["recyclage", "b1", "b2", "br", "bc"],
  },
  {
    envKey: "STRIPE_PRICE_H0B0_ELEARNING_CENTS",
    kind: "direct",
    label: "Habilitation electrique H0B0 / H0V",
    anyKeywords: ["h0b0", "h0v"],
  },
  {
    envKey: "STRIPE_PRICE_BSBE_ELEARNING_CENTS",
    kind: "direct",
    label: "BS et BE Manoeuvre - e-learning + visio",
    anyKeywords: ["bs", "be manoeuvre", "bs/be", "bs be", "manoeuvre"],
  },
  {
    envKey: "STRIPE_PRICE_B1B2BRBC_CENTS",
    kind: "direct",
    label: "B1 / B1V / B2 / B2V / BR / BC - parcours mixte",
    allKeywords: ["b1", "b2", "br", "bc"],
  },
  {
    envKey: "STRIPE_PRICE_INCENDIE_EXTINCTEURS_CENTS",
    kind: "direct",
    label: "Manipulation des extincteurs",
    anyKeywords: ["extincteur", "extincteurs"],
  },
  {
    envKey: "STRIPE_PRICE_INCENDIE_GUIDE_FILE_CENTS",
    kind: "direct",
    label: "Guide-file / Serre-file",
    anyKeywords: ["guide-file", "guide file", "serre-file", "serre file"],
  },
  {
    envKey: "STRIPE_PRICE_INCENDIE_EVACUATION_CENTS",
    kind: "direct",
    label: "Evacuation incendie",
    anyKeywords: ["evacuation"],
  },
  {
    envKey: "STRIPE_PRICE_INCENDIE_EPI_CENTS",
    kind: "direct",
    label: "Equipier de premiere intervention",
    anyKeywords: ["epi", "equipier de premiere intervention"],
  },
  {
    envKey: "STRIPE_PRICE_INCENDIE_DUO_CENTS",
    kind: "direct",
    label: "Duo incendie et evacuation",
    anyKeywords: ["duo incendie", "incendie & evacuation", "incendie evacuation"],
  },
  {
    envKey: "STRIPE_PRICE_SSI_EXPLOITATION_CENTS",
    kind: "direct",
    label: "Exploitation du SSI",
    allKeywords: ["ssi", "exploitation"],
  },
  {
    envKey: "STRIPE_PRICE_SPRINKLER_EXPLOITATION_CENTS",
    kind: "direct",
    label: "Exploitation sprinkler",
    allKeywords: ["sprinkler", "exploitation"],
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
      "Cette formation SSI depend du site, du systeme installe et du niveau technique attendu.",
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
      "La formation sprinkler est adaptee selon le referentiel, le site et la profondeur technique demandee.",
  },
  {
    kind: "quote",
    label: "Formation securite incendie sur mesure",
    anyKeywords: ["securite incendie", "sur site", "intra", "presentiel", "sur mesure"],
    reason:
      "Cette formation incendie est generalement dimensionnee selon l'effectif, le site et les exercices pratiques attendus.",
  },
  {
    envKey: "STRIPE_PRICE_SST_MAC_CENTS",
    kind: "direct",
    label: "MAC SST",
    allKeywords: ["mac"],
    anyKeywords: ["sst", "secouriste"],
  },
  {
    envKey: "STRIPE_PRICE_SST_INITIAL_CENTS",
    kind: "direct",
    label: "Formation SST initiale",
    anyKeywords: ["sst", "secouriste"],
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
          "Cette formation necessite un devis avant validation du paiement.",
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
      "Le paiement en ligne n'est pas encore configure pour cette offre. Utilisez la demande de devis ou marquez le paiement manuellement.",
  };
}

export function resolveEnrollmentPricing(context: PricingContext): DirectPaymentOption {
  const option = getEnrollmentPaymentOption(context);

  if (option.kind !== "direct") {
    throw new Error(option.reason);
  }

  return option;
}
