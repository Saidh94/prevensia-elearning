import { generateOgImage } from "@/lib/og/generateOgImage";

export const runtime = "edge";
export const alt = "Formation B1 B2 BR BC — PREVENSIA FORMATION";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return generateOgImage({
    title: "Formation B1 / B2 / BR / BC",
    subtitle:
      "Habilitation électrique pour électriciens. Exécutant, chargé de travaux, chargé d'intervention, chargé de consignation.",
    badge: "B1 · B2 · BR · BC",
  });
}
