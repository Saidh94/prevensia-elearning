import { generateOgImage } from "@/lib/og/generateOgImage";

export const runtime = "edge";
export const alt = "Formation H0B0 H0V — PREVENSIA FORMATION";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return generateOgImage({
    title: "Formation H0B0 / H0V",
    subtitle:
      "Habilitation électrique non-électricien. Sensibilisation aux risques électriques conforme NF C 18-510.",
    badge: "H0B0 · H0V",
  });
}
