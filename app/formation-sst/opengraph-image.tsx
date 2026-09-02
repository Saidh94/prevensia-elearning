import { generateOgImage } from "@/lib/og/generateOgImage";

export const runtime = "edge";
export const alt = "Formation SST Sauveteur Secouriste du Travail — PREVENSIA FORMATION";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return generateOgImage({
    title: "Formation SST",
    subtitle:
      "Sauveteur Secouriste du Travail — Formation initiale 14h et MAC SST 7h. Certifié INRS. Prise en charge OPCO possible.",
    badge: "SST",
    accent: "#b91c1c",
  });
}
