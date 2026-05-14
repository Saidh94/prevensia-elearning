import { generateOgImage } from "@/lib/og/generateOgImage";

export const runtime = "edge";
export const alt = "Formation Habilitation Électrique NF C 18-510 — PREVENSIA FORMATION";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return generateOgImage({
    title: "Formation Habilitation Électrique",
    subtitle:
      "H0B0 · BS/BE Manœuvre · B1 · B2 · BR · BC — Conforme NF C 18-510. Présentiel, visio et e-learning.",
    badge: "Habilitation électrique",
  });
}
