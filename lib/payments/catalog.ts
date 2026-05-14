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
    envKey: "STRIPE_PRICE_ATEX_NIVEAU1_CENTS",
    kind: "direct",
    label: "Formation ATEX Niveau 1 - Intervenant en zone ATEX",
    anyKeywords: ["atex-niveau1", "atex niveau1", "atex niveau 1"],
  },
  {
    kind: "quote",
    label: "Formation ATEX Niveau 2 - Encadrant et Referent ATEX",
    anyKeywords: ["atex-niveau2", "atex niveau2", "atex niveau 2"],
    reason:
      "La formation ATEX Niveau 2 est adaptee selon le role, les responsabilites et les installations du site. Tarif a partir de 790 EUR HT.",
  },
  {
    envKey: "STRIPE_PRICE_ATEX_ELEARNING_CENTS",
    kind: "direct",
    label: "Prevention des risques ATEX - Atmospheres Explosives - Niveau 0",
    anyKeywords: ["atex", "atmosphere explosive", "atmospheres explosives"],
  },
  {
    kind: "quote",
    label: "Recyclage SSIAP1 - Remise a niveau Securite Incendie ERP",
    anyKeywords: ["recyclage-ssiap1", "recyclage ssiap1", "recyclage ssiap 1", "recyclage ssiap"],
    reason:
      "Le recyclage SSIAP1 (14 heures obligatoires tous les 3 ans selon l'arrete du 2 mai 2005) comprend une partie pratique encadree. La tarification depend de l'effectif et du format choisi (inter 190 EUR HT ou intra sur devis).",
  },
  {
    kind: "quote",
    label: "Sensibilisation SSIAP1 - Securite Incendie ERP",
    anyKeywords: ["ssiap1", "ssiap 1", "sensibilisation ssiap", "securite incendie erp"],
    reason:
      "L'acces e-learning SSIAP1 est inclus avec la formation initiale (67h) ou le recyclage (14h/3 ans). Il n'est pas vendu separement.",
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
    kind: "quote",
    label: "Recyclage B1 / B1V / B2 / B2V / BR / BC",
    allKeywords: ["recyclage", "b1", "b2", "br", "bc"],
    reason:
      "Les parcours B1, B2, BR, BC et BE sont vendus avec une sequence encadree/presentielle. L'acces e-learning est inclus pour les apprenants inscrits.",
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
    kind: "quote",
    label: "B1 / B1V / B2 / B2V / BR / BC - parcours mixte",
    allKeywords: ["b1", "b2", "br", "bc"],
    reason:
      "Ce parcours n'est pas vendu comme e-learning seul : l'acces aux cours et quiz accompagne la formation presentielle ou classe virtuelle.",
  },
  {
    kind: "quote",
    label: "Manipulation des extincteurs",
    anyKeywords: ["extincteur", "extincteurs"],
    reason:
      "Le support e-learning est inclus avec la formation incendie encadree. La tarification depend du format, de l'effectif et du site.",
  },
  {
    kind: "quote",
    label: "Guide-file / Serre-file",
    anyKeywords: ["guide-file", "guide file", "serre-file", "serre file"],
    reason:
      "Le support e-learning est inclus avec la formation evacuation encadree. La tarification depend du format, de l'effectif et du site.",
  },
  {
    kind: "quote",
    label: "Evacuation incendie",
    anyKeywords: ["evacuation"],
    reason:
      "Le support e-learning est inclus avec la formation evacuation encadree. La tarification depend du format, de l'effectif et du site.",
  },
  {
    kind: "quote",
    label: "Equipier de premiere intervention",
    anyKeywords: ["epi", "equipier de premiere intervention"],
    reason:
      "Le support e-learning est inclus avec la formation EPI encadree. La tarification depend du format, de l'effectif et du site.",
  },
  {
    kind: "quote",
    label: "Duo incendie et evacuation",
    anyKeywords: ["duo incendie", "incendie & evacuation", "incendie evacuation"],
    reason:
      "Le support e-learning est inclus avec la formation incendie/evacuation encadree. La tarification depend du format, de l'effectif et du site.",
  },
  {
    kind: "quote",
    label: "Exploitation du SSI",
    allKeywords: ["ssi", "exploitation"],
    reason:
      "Le support e-learning SSI est inclus avec la formation encadree. La tarification depend du site, du systeme installe et du niveau attendu.",
  },
  {
    kind: "quote",
    label: "Exploitation sprinkler",
    allKeywords: ["sprinkler", "exploitation"],
    reason:
      "Le support e-learning sprinkler est inclus avec la formation encadree. La tarification depend du site, du referentiel et du niveau technique.",
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
    kind: "quote",
    label: "Habilitation électrique Véhicules / Engins (NF C 18-550)",
    anyKeywords: ["vehicule", "engin", "18-550", "18550", "b0l", "b1l", "b2l", "habilitation-vehicules"],
    reason:
      "Ce parcours est ajusté selon le type de véhicule/engin, la tension batterie et les opérations réellement confiées.",
  },
  {
    kind: "quote",
    label: "MAC SST",
    allKeywords: ["mac"],
    anyKeywords: ["sst", "secouriste"],
    reason:
      "Le support e-learning SST est inclus avec la formation encadree. La pratique reste indispensable pour la validation des competences.",
  },
  {
    kind: "quote",
    label: "Formation SST initiale",
    anyKeywords: ["sst", "secouriste"],
    reason:
      "Le support e-learning SST est inclus avec la formation encadree. La pratique reste indispensable pour la validation des competences.",
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
