/**
 * Black Friday 2026 — utilitaires pricing
 * Remise de 25 % sur H0B0/H0V et ATEX NIV 0 uniquement.
 * Pas de remise sur ATEX NIV 1/2, SSI, Sprinkler, Coordination SSI.
 */

export const BF_START = new Date("2026-11-20T00:00:00").getTime();
export const BF_END   = new Date("2026-12-05T00:00:00").getTime(); // 4 déc. minuit

export function isBFActive(): boolean {
  const now = Date.now();
  return now >= BF_START && now < BF_END;
}

export const BF_DISCOUNT = 0.25; // 25 %

/** Prix après remise, arrondi à l'euro. */
export function bfPrice(original: number): number {
  return Math.round(original * (1 - BF_DISCOUNT));
}

/**
 * Formations éligibles à la remise BF.
 * Clé = slug de la formation.
 */
export const BF_ELIGIBLE: Record<string, { original: number; discounted: number }> = {
  "h0b0":    { original: 190, discounted: bfPrice(190) },   // 143 €
  "atex":    { original: 129, discounted: bfPrice(129) },   // 97 €
  "atex-n0": { original: 129, discounted: bfPrice(129) },   // 97 € (alias)
};
