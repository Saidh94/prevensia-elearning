import { generateOgImage } from "@/lib/og/generateOgImage";

export const runtime = "edge";
export const alt = "Formation BS BE Manœuvre — PREVENSIA FORMATION";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return generateOgImage({
    title: "Formation BS / BE Manœuvre",
    subtitle:
      "Habilitation électrique pour personnel non-électricien intervenant sur des opérations simples. Conforme NF C 18-510.",
    badge: "BS · BE Manœuvre",
  });
}
