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
  b1b2brbc: [
    "b1b2brbc",
    "b1-b2-br-bc",
    "b1_b2_br_bc",
    "b1b2-brbc",
    "habilitation-b1-b2-br-bc",
    "b1-b2",
    "br-bc",
  ],
  sprinkler: ["sprinkler"],
  sst: ["sst"],
  incendie: ["incendie", "securite-incendie"],
  "ssi-exploitation": ["ssi-exploitation", "ssi_exploitation", "ssi"],
};

function normalizeSlugKey(value: string | null | undefined): string {
  return (value ?? "").trim().toLowerCase().replace(/[\s_]+/g, "-");
}

export function resolveModuleSlug(value: string | null | undefined): string | null {
  const normalized = normalizeSlugKey(value);

  if (!normalized) return null;
  if (modulesContent[normalized]) return normalized;

  for (const [canonical, aliases] of Object.entries(MODULE_ALIASES)) {
    if (aliases.includes(normalized)) {
      return canonical;
    }
  }

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
