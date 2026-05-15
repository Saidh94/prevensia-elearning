import { generateOgImage } from "@/lib/og/generateOgImage";

export const runtime = "edge";
export const alt = "Formation SSIAP1 — Sécurité Incendie ERP — PREVENSIA FORMATION";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return generateOgImage({
    title: "Formation SSIAP1",
    subtitle:
      "Sécurité incendie ERP. Tétraèdre du feu, extincteurs, SSI, évacuation. Conforme arrêté du 25 juin 1980.",
    badge: "Formation certifiante · Agréé préfecture · À partir de 690 € HT",
  });
}
