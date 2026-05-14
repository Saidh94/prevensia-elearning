import { generateOgImage } from "@/lib/og/generateOgImage";

export const runtime = "edge";
export const alt = "Formation Exploitation SSI — PREVENSIA FORMATION";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return generateOgImage({
    title: "Formation Exploitation SSI",
    subtitle:
      "Systèmes de Sécurité Incendie — SDI, CMSI, UGA. Obligatoire ERP et IGH. Conforme NFS 61-931.",
    badge: "SSI",
    accent: "#7c3aed",
  });
}
