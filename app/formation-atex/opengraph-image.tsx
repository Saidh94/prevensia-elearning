import { generateOgImage } from "@/lib/og/generateOgImage";

export const runtime = "edge";
export const alt = "Formation ATEX — Atmosphères Explosives — PREVENSIA FORMATION";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return generateOgImage({
    title: "Formation ATEX",
    subtitle:
      "Atmosphères explosives. Zonage, équipements certifiés Ex, EPI. Conforme directive 99/92/CE.",
    badge: "ATEX · 3h · 129 € HT",
  });
}
