import { resolveModuleSlug } from "./module-registry";

function normalizeSlug(value: string | null | undefined): string {
  return (value ?? "").trim().toLowerCase();
}

const BT_MULTI_SYMBOLS_GRANTED = [
  "bt-multi-symboles",
  "b1-b1v",
  "b2-b2v",
  "br",
  "bc",
  "be-verification-mesurage",
] as const;

const MODULE_ACCESS_GROUPS: Record<string, readonly string[]> = {
  "bt-multi-symboles": BT_MULTI_SYMBOLS_GRANTED,
};

export function getCanonicalModuleSlug(value: string | null | undefined): string {
  return resolveModuleSlug(value) ?? normalizeSlug(value);
}

export function getGrantedModuleSlugs(
  formationSlug: string | null | undefined
): string[] {
  const canonical = getCanonicalModuleSlug(formationSlug);
  const granted = MODULE_ACCESS_GROUPS[canonical];

  if (granted?.length) {
    return [...granted];
  }

  return canonical ? [canonical] : [];
}

export function canFormationAccessModule(
  formationSlug: string | null | undefined,
  requestedModuleSlug: string | null | undefined
): boolean {
  const requestedCanonical = getCanonicalModuleSlug(requestedModuleSlug);

  if (!requestedCanonical) {
    return false;
  }

  return getGrantedModuleSlugs(formationSlug).includes(requestedCanonical);
}

export function getAcceptedEnrollmentSlugsForModule(
  requestedModuleSlug: string | null | undefined
): string[] {
  const requestedCanonical = getCanonicalModuleSlug(requestedModuleSlug);

  if (!requestedCanonical) {
    return [];
  }

  const accepted = new Set<string>([requestedCanonical]);

  for (const [formationSlug, grantedSlugs] of Object.entries(MODULE_ACCESS_GROUPS)) {
    if (grantedSlugs.includes(requestedCanonical)) {
      accepted.add(formationSlug);
    }
  }

  return [...accepted];
}
