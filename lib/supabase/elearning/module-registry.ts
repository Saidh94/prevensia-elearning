import { modulesContent } from "./module-content";
import type { ModuleContent } from "./module-types";

const MODULE_ALIASES: Record<string, string[]> = {
  h0b0: ["h0b0"],
  bsbe: [
    "bsbe",
    "bs-be",
    "bs_be",
    "bsbe-manoeuvre",
    "bs-be-manoeuvre",
    "bs_be_manoeuvre",
    "be-manoeuvre",
    "manoeuvre-bt",
  ],
  "b1b2brbc": [
    "b1b2brbc",
    "bt-multi-symboles",
    "bt_multi_symboles",
    "b1-b1v-b2-b2v-br-bc",
    "b1_b1v_b2_b2v_br_bc",
    "b1-b2-br-bc",
    "b1_b2_br_bc",
    "b1b2-brbc",
    "habilitation-b1-b2-br-bc",
    "b1-b2",
    "br-bc",
  ],
  "b1-b1v": ["b1-b1v", "b1_b1v", "b1", "b1v"],
  "b2-b2v": ["b2-b2v", "b2_b2v", "b2", "b2v"],
  br: ["br"],
  bc: ["bc"],
  "be-verification-mesurage": [
    "be-verification-mesurage",
    "be_verification_mesurage",
    "be-verification",
    "be-mesurage",
    "be-verification-be-mesurage",
    "be-mesure",
  ],
  ssiap1: [
    "ssiap1",
    "ssiap-1",
    "ssiap_1",
    "ssiap1-initial",
    "ssiap1-formation",
    "formation-ssiap1",
    "agent-securite-incendie",
  ],
  "recyclage-ssiap1": [
    "recyclage-ssiap1",
    "recyclage_ssiap1",
    "ssiap1-recyclage",
    "ssiap1_recyclage",
    "ssiap1-recylage",
    "recyclage-ssiap-1",
    "ssiap1-mac",
  ],
  atex: ["atex", "atex-niveau0", "atex-niveau-0", "atex-n0", "atex-level-0"],
  "atex-niveau1": [
    "atex-niveau1",
    "atex-niveau-1",
    "atex_niveau1",
    "atex-n1",
    "atex-level-1",
    "atex-intervenant",
  ],
  "atex-niveau2": [
    "atex-niveau2",
    "atex-niveau-2",
    "atex_niveau2",
    "atex-n2",
    "atex-level-2",
    "atex-encadrant",
    "atex-referent",
  ],
  sprinkler: ["sprinkler"],
  "extinction-automatique-gaz": [
    "extinction-automatique-gaz",
    "extinction-gaz",
    "extinction_gaz",
    "extinction-auto-gaz",
    "gaz-extinction",
  ],
  sst: ["sst"],
  "securite-incendie": ["incendie", "securite-incendie"],
  "ssi-exploitation": ["ssi-exploitation", "ssi_exploitation", "ssi"],
  "coordinateur-ssi": [
    "coordinateur-ssi",
    "coordinateur_ssi",
    "coord-ssi",
    "coord_ssi",
    "pilotage-ssi",
    "referent-ssi",
    "responsable-ssi",
  ],
  "habilitation-vehicules": [
    "habilitation-vehicules",
    "habilitation_vehicules",
    "vehicules-engins",
    "vehicules",
    "nfc18-550",
    "nf-c-18-550",
    "b0l",
    "b1l",
    "b2l",
    "habilitation-ve",
    "elec-vehicules",
  ],
};

function normalizeSlugKey(value: string | null | undefined): string {
  return (
    (value ?? "")
      .trim()
      .toLowerCase()
      // Décompose les ligatures œ/Œ et æ/Æ pour qu'elles matchent les aliases ASCII.
      // Sans ça, /modules/bs-be-manœuvre renvoyait 404 alors que
      // /modules/bs-be-manoeuvre était bien enregistré.
      .replace(/[œŒ]/g, "oe")
      .replace(/[æÆ]/g, "ae")
      // Retire les accents (é → e, à → a, ç → c, etc.) en décomposant en NFD
      // puis en supprimant les marques diacritiques. Couvre les URLs où
      // l'utilisateur tape ou colle un slug avec accents.
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[\s_]+/g, "-")
  );
}

export function resolveModuleSlug(value: string | null | undefined): string | null {
  const normalized = normalizeSlugKey(value);

  if (!normalized) return null;

  for (const [canonical, aliases] of Object.entries(MODULE_ALIASES)) {
    if (aliases.includes(normalized)) {
      return canonical;
    }
  }

  if (modulesContent[normalized]) return normalized;

  return null;
}

export function getModuleSlugCandidates(
  value: string | null | undefined
): string[] {
  const canonical = resolveModuleSlug(value);

  if (!canonical) {
    const normalized = normalizeSlugKey(value);
    return normalized ? [normalized] : [];
  }

  return MODULE_ALIASES[canonical] ?? [canonical];
}

export function getModuleContentBySlug(
  value: string | null | undefined
): ModuleContent | null {
  const canonical = resolveModuleSlug(value);
  return canonical ? modulesContent[canonical] ?? null : null;
}

export function getModuleLabelBySlug(value: string | null | undefined): string {
  const moduleData = getModuleContentBySlug(value);

  if (moduleData?.title) {
    return moduleData.title;
  }

  const fallback = normalizeSlugKey(value);
  return fallback ? `Formation ${fallback.toUpperCase()}` : "Formation";
}

export function getRequiredChapterCount(
  value: string | null | undefined
): number {
  return getModuleContentBySlug(value)?.sections.length ?? 0;
}
