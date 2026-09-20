import { createAdminClient } from "@/lib/supabase/admin";
import {
  getModuleContentBySlug,
  getModuleSlugCandidates,
  resolveModuleSlug,
} from "@/lib/supabase/elearning/module-registry";

type AdminClient = NonNullable<ReturnType<typeof createAdminClient>>;

export type FormationRecord = {
  id: string;
  slug: string | null;
  title: string | null;
};

export type CanonicalFormationKey =
  | "h0b0"
  | "bsbe"
  | "b1b2brbc"
  | "incendie"
  | "ssi-exploitation"
  | "sprinkler"
  | "sst"
  | "habilitation-vehicules"
  | "be-verification-mesurage"
  | "br"
  | "bc";

type FormationSeed = {
  slug: string;
  title: string;
  description: string;
  durationHours: number | null;
  mode: string;
  isPublished: boolean;
  elearningDuration: string | null;
};

export const FORMATION_SEEDS: Record<CanonicalFormationKey, FormationSeed> = {
  h0b0: {
    slug: "h0b0",
    title: "Habilitation électrique H0B0",
    description: "Formation destinée au personnel non électricien.",
    durationHours: 7,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "1 h 20 à 1 h 45",
  },
  bsbe: {
    slug: "bs-be-manoeuvre",
    title: "BS et BE Manœuvre",
    description: "Opérations élémentaires et manœuvres BT.",
    durationHours: 10,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "7 h 30 à 9 h 30",
  },
  b1b2brbc: {
    slug: "b1-b1v-b2-b2v-br-bc",
    title: "B1 / B1V / B2 / B2V / BR / BC",
    description: "Formation complète personnel électricien.",
    durationHours: 14,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "8 h 00 à 11 h 00",
  },
  incendie: {
    slug: "securite-incendie",
    title: "Sécurité incendie, alerte et évacuation",
    description: "Module PREVENSIA sur la prévention incendie et les premiers réflexes.",
    durationHours: 4,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "45 à 60 minutes",
  },
  "ssi-exploitation": {
    slug: "ssi-exploitation",
    title: "Exploitation des SSI – fondamentaux",
    description: "Module PREVENSIA d'exploitation des systèmes de sécurité incendie.",
    durationHours: 5,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "45 à 60 minutes",
  },
  sprinkler: {
    slug: "sprinkler",
    title: "Exploitation sprinkler et référentiels techniques",
    description: "Module PREVENSIA d'exploitation sprinkler et repères techniques.",
    durationHours: 5,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "45 à 60 minutes",
  },
  sst: {
    slug: "sst",
    title: "SST - Sauveteur Secouriste du Travail",
    description: "Module PREVENSIA d'introduction à la prévention et aux gestes de premiers secours.",
    durationHours: 7,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "45 à 60 minutes",
  },
  "habilitation-vehicules": {
    slug: "habilitation-vehicules",
    title: "Habilitation électrique — Véhicules et engins (NF C 18-550)",
    description: "Module PREVENSIA dédié aux techniciens intervenant sur des véhicules ou engins à énergie embarquée : symboles L, IP2X, batteries, démarche 7 étapes.",
    durationHours: 9,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "1 h 30 à 2 h",
  },
  "be-verification-mesurage": {
    slug: "be-verification-mesurage",
    title: "BE Vérification / BE Mesurage",
    description: "Parcours PREVENSIA centré sur la vérification, le mesurage et les limites entre contrôle, intervention et travaux en basse tension.",
    durationHours: 14,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "8 h 00 à 11 h 00",
  },
  br: {
    slug: "br",
    title: "Habilitation BR — Interventions générales en basse tension",
    description: "Parcours PREVENSIA centré sur l'intervention générale : diagnostic, dépannage, remplacement, mesure et remise en service contrôlée dans les limites du BR.",
    durationHours: 14,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "8 h 00 à 11 h 00",
  },
  bc: {
    slug: "bc",
    title: "Habilitation BC — Consignation en basse tension",
    description: "Parcours PREVENSIA centré sur la chaîne de consignation : séparation, condamnation, identification, VAT et sécurisation fiable de l'installation.",
    durationHours: 14,
    mode: "e-learning",
    isPublished: true,
    elearningDuration: "8 h 00 à 11 h 00",
  },
};

export function normalize(value: string | null | undefined) {
  return (value ?? "").trim().toLowerCase();
}

export function inferCanonicalFormationSlug(
  formation: string,
  categorie: string
): CanonicalFormationKey | null {
  const normalizedFormation = normalize(formation);
  const normalizedCategory = normalize(categorie);

  if (normalizedFormation.includes("h0b0") || normalizedFormation.includes("h0v")) {
    return "h0b0";
  }

  if (
    normalizedFormation.includes("bs") ||
    normalizedFormation.includes("be manoeuvre") ||
    normalizedFormation.includes("manoeuvre")
  ) {
    return "bsbe";
  }

  if (
    normalizedFormation.includes("be verification") ||
    normalizedFormation.includes("be mesurage") ||
    normalizedFormation.includes("be mesure") ||
    (normalizedFormation.includes("be") && normalizedFormation.includes("verification")) ||
    (normalizedFormation.includes("be") && normalizedFormation.includes("mesurage"))
  ) {
    return "be-verification-mesurage";
  }

  if (
    normalizedFormation.includes("habilitation br") ||
    normalizedFormation.includes("formation br") ||
    normalizedFormation === "br" ||
    normalizedFormation.includes("intervention generale") ||
    normalizedFormation.includes("interventions generales")
  ) {
    return "br";
  }

  if (
    normalizedFormation.includes("habilitation bc") ||
    normalizedFormation.includes("formation bc") ||
    normalizedFormation === "bc" ||
    normalizedFormation.includes("charge de consignation") ||
    (normalizedFormation.includes("bc") && normalizedFormation.includes("consignation"))
  ) {
    return "bc";
  }

  if (
    normalizedFormation.includes("b1") ||
    normalizedFormation.includes("b2") ||
    normalizedFormation.includes("br") ||
    normalizedFormation.includes("bc")
  ) {
    return "b1b2brbc";
  }

  if (normalizedFormation.includes("sprinkler")) {
    return "sprinkler";
  }

  if (normalizedFormation.includes("ssi")) {
    return "ssi-exploitation";
  }

  if (
    normalizedFormation.includes("vehicule") ||
    normalizedFormation.includes("engin") ||
    normalizedFormation.includes("18-550") ||
    normalizedFormation.includes("18550") ||
    normalizedFormation.includes("b0l") ||
    normalizedFormation.includes("b1l") ||
    normalizedFormation.includes("b2l")
  ) {
    return "habilitation-vehicules";
  }

  if (normalizedFormation.includes("sst") || normalizedCategory === "sst") {
    return "sst";
  }

  if (
    normalizedCategory === "incendie" ||
    normalizedFormation.includes("extincteur") ||
    normalizedFormation.includes("guide-file") ||
    normalizedFormation.includes("serre-file") ||
    normalizedFormation.includes("premiere intervention")
  ) {
    return "incendie";
  }

  const resolvedSlug = resolveModuleSlug(formation);

  if (
    resolvedSlug &&
    Object.prototype.hasOwnProperty.call(FORMATION_SEEDS, resolvedSlug)
  ) {
    return resolvedSlug as CanonicalFormationKey;
  }

  return null;
}

function buildSearchTokens(formation: string, categorie: string) {
  const normalizedFormation = normalize(formation);
  const normalizedCategory = normalize(categorie);
  const rawTokens = `${normalizedFormation} ${normalizedCategory}`
    .split(/[^a-z0-9]+/)
    .map((token) => token.trim())
    .filter((token) => token.length >= 2);

  return [...new Set(rawTokens)];
}

export function getFormationSeed(canonicalSlug: CanonicalFormationKey): FormationSeed {
  const seed = FORMATION_SEEDS[canonicalSlug];
  const moduleContent = getModuleContentBySlug(canonicalSlug);

  if (!moduleContent) {
    return seed;
  }

  return {
    ...seed,
    title: seed.title || moduleContent.title,
    description: seed.description || moduleContent.subtitle || moduleContent.objective || "",
    elearningDuration: seed.elearningDuration || moduleContent.duration || null,
  };
}

export async function ensureFormationRecord(
  adminClient: AdminClient,
  canonicalSlug: CanonicalFormationKey
) {
  const seed = getFormationSeed(canonicalSlug);

  const { data: existingBySlug, error: existingBySlugError } = await adminClient
    .from("formations")
    .select("id, slug, title")
    .eq("slug", seed.slug)
    .maybeSingle<FormationRecord>();

  if (existingBySlugError) {
    throw new Error(`Erreur lecture formation: ${existingBySlugError.message}`);
  }

  if (existingBySlug) {
    return existingBySlug;
  }

  const { data: insertedRecord, error: insertError } = await adminClient
    .from("formations")
    .insert({
      slug: seed.slug,
      title: seed.title,
      description: seed.description,
      duration_hours: seed.durationHours,
      mode: seed.mode,
      is_published: seed.isPublished,
      elearning_duration: seed.elearningDuration,
    })
    .select("id, slug, title")
    .single<FormationRecord>();

  if (insertError || !insertedRecord) {
    throw new Error(
      `Erreur creation formation: ${insertError?.message || "Insertion impossible"}`
    );
  }

  return insertedRecord;
}

/**
 * Résout un libellé de formation (texte libre, tel que saisi dans un devis
 * ou un formulaire) vers l'enregistrement réel de la table `formations`.
 * Utilisé partout où l'on doit retrouver un `formation_id` fiable à partir
 * d'un simple libellé (ex : provisioning post-devis, envoi d'invitations).
 */
export async function resolveFormation(
  adminClient: AdminClient,
  formation: string,
  categorie: string
): Promise<FormationRecord> {
  const { data, error } = await adminClient
    .from("formations")
    .select("id, slug, title")
    .returns<FormationRecord[]>();

  if (error) {
    throw new Error(`Erreur lecture formations: ${error.message}`);
  }

  const formations = data ?? [];
  const normalizedRequestedTitle = normalize(formation);
  const canonicalSlug = inferCanonicalFormationSlug(formation, categorie);
  const slugCandidates = canonicalSlug
    ? [...new Set([getFormationSeed(canonicalSlug).slug, ...getModuleSlugCandidates(canonicalSlug)])]
    : [];
  const searchTokens = buildSearchTokens(formation, categorie);

  if (canonicalSlug) {
    const expectedDbSlug = getFormationSeed(canonicalSlug).slug;
    const exactCanonicalRecord = formations.find(
      (item) => normalize(item.slug) === normalize(expectedDbSlug)
    );

    if (exactCanonicalRecord) {
      return exactCanonicalRecord;
    }
  }

  let bestMatch: FormationRecord | null = null;
  let bestScore = -1;

  for (const item of formations) {
    const itemTitle = normalize(item.title);
    const itemSlug = normalize(item.slug);
    let score = 0;

    if (itemTitle && itemTitle === normalizedRequestedTitle) {
      score += 200;
    }

    if (itemSlug && slugCandidates.includes(itemSlug)) {
      score += 120;
    }

    if (canonicalSlug && itemSlug === canonicalSlug) {
      score += 140;
    }

    const matchingTokens = searchTokens.filter(
      (token) => itemTitle.includes(token) || itemSlug.includes(token)
    ).length;

    score += matchingTokens * 10;

    if (itemTitle && normalizedRequestedTitle && itemTitle.includes(normalizedRequestedTitle)) {
      score += 30;
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  if (!bestMatch || bestScore <= 0) {
    if (canonicalSlug) {
      return ensureFormationRecord(adminClient, canonicalSlug);
    }

    throw new Error(`Aucune formation correspondante n'a ete trouvee pour "${formation}".`);
  }

  return bestMatch;
}
