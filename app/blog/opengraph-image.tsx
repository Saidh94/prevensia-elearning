import { generateOgImage } from "@/lib/og/generateOgImage";

export const runtime = "edge";
export const alt = "Blog Sécurité & Prévention — PREVENSIA FORMATION";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return generateOgImage({
    title: "Blog Sécurité & Prévention",
    subtitle:
      "Guides pratiques, obligations réglementaires et conseils sur l'habilitation électrique, le SST et la sécurité incendie.",
    badge: "Blog",
    accent: "#dc2626",
  });
}
