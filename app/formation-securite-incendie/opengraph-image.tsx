import { generateOgImage } from "@/lib/og/generateOgImage";

export const runtime = "edge";
export const alt = "Formation Sécurité Incendie — PREVENSIA FORMATION";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return generateOgImage({
    title: "Formation Sécurité Incendie",
    subtitle:
      "Maniement extincteur, évacuation, guide-file, EPI. Conformité Code du travail R.4227-39. Intra-entreprise.",
    badge: "Sécurité incendie",
    accent: "#c2410c",
  });
}
