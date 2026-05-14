import { generateOgImage } from "@/lib/og/generateOgImage";

export const runtime = "edge";
export const alt = "Formation Exploitation Sprinkler — PREVENSIA FORMATION";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return generateOgImage({
    title: "Formation Exploitation Sprinkler",
    subtitle:
      "Extinction automatique à eau — EN 12845, APSAD R1. Entretien des installations sprinkler. Intra-entreprise.",
    badge: "Sprinkler",
    accent: "#0369a1",
  });
}
