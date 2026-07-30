import { PDFDocument, PDFFont, StandardFonts, rgb } from "pdf-lib";
import fs from "fs/promises";
import path from "path";

// ── Helpers ──────────────────────────────────────────────────────────────────

function s(text: string): string {
  return (text ?? "")
    .replace(/œ/g, "oe").replace(/Œ/g, "Oe")
    .replace(/æ/g, "ae").replace(/Æ/g, "Ae")
    .replace(/€/g, "EUR").replace(/[–—]/g, "-")
    .replace(/['']/g, "'").replace(/[""]/g, '"')
    .replace(/…/g, "...");
}

function dateFr(iso?: string): string {
  const d = iso ? new Date(iso) : new Date();
  return isNaN(d.getTime()) ? "" : d.toLocaleDateString("fr-FR");
}

function addDays(iso: string, days: number): string {
  const d = new Date(iso);
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

function wrapText(text: string, maxW: number, font: PDFFont, size: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(test, size) <= maxW) { line = test; }
    else { if (line) lines.push(line); line = word; }
  }
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

// ── Types ────────────────────────────────────────────────────────────────────

export type FactureLine = {
  label: string;
  qty: number;
  puHT: number | null;   // null = sur devis
};

export type FacturePdfInput = {
  numero: string;           // ex: PREV-2026-001
  dateFacture: string;      // YYYY-MM-DD
  clientName: string;
  clientEmail: string;
  clientCompany?: string;
  lines: FactureLine[];
  totalHT: number;
  tvaRate: number;          // ex: 20
  iban?: string;
  bic?: string;
};

// ── Constantes mise en page ───────────────────────────────────────────────────

const W = 595.28;   // A4 width  (pt)
const H = 841.89;   // A4 height (pt)
const ML = 48;      // marge gauche
const MR = 48;      // marge droite
const CW = W - ML - MR;  // largeur contenu

const RED   = rgb(0.72, 0.07, 0.07);  // rouge PREVENSIA
const DARK  = rgb(0.06, 0.09, 0.15);  // slate-900
const GRAY  = rgb(0.40, 0.45, 0.52);  // slate-500
const LIGHT = rgb(0.96, 0.97, 0.98);  // slate-50
const WHITE = rgb(1, 1, 1);

// ── Générateur principal ──────────────────────────────────────────────────────

export async function generateFacturePdf(input: FacturePdfInput): Promise<Uint8Array> {
  const {
    numero, dateFacture, clientName, clientEmail, clientCompany,
    lines, totalHT, tvaRate, iban, bic,
  } = input;

  const tvaAmount = Math.round(totalHT * tvaRate) / 100;
  const totalTTC  = totalHT + tvaAmount;
  const dateEch   = addDays(dateFacture, 30);

  const doc  = await PDFDocument.create();
  const page = doc.addPage([W, H]);

  const fontR = await doc.embedFont(StandardFonts.Helvetica);
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);

  // Logo PREVENSIA
  const logoPath = path.join(process.cwd(), "public", "images", "logo-prevensia-fond-blanc.png");
  let logoY = H - 48;
  try {
    const logoBytes = await fs.readFile(logoPath);
    const logo = await doc.embedPng(logoBytes);
    const lDims = logo.scaleToFit(140, 50);
    page.drawImage(logo, { x: ML, y: H - 48 - lDims.height, width: lDims.width, height: lDims.height });
    logoY = H - 48 - lDims.height;
  } catch { /* pas de logo */ }

  // Titre FACTURE (droite)
  page.drawText("FACTURE", {
    x: W - MR - fontB.widthOfTextAtSize("FACTURE", 26),
    y: H - 58, font: fontB, size: 26, color: RED,
  });
  page.drawText(s(numero), {
    x: W - MR - fontR.widthOfTextAtSize(s(numero), 11),
    y: H - 78, font: fontR, size: 11, color: GRAY,
  });

  // Ligne séparatrice
  const sepY = Math.min(logoY, H - 90) - 12;
  page.drawLine({ start: { x: ML, y: sepY }, end: { x: W - MR, y: sepY }, thickness: 1, color: rgb(0.88, 0.9, 0.93) });

  // ── Blocs émetteur / client ──
  let y = sepY - 18;

  // Émetteur (gauche)
  const emetteur = [
    ["bold", "PREVENSIA FORMATION"],
    ["normal", "33, avenue Philippe Auguste"],
    ["normal", "75011 Paris"],
    ["normal", "SIRET : 107 290 579 00013"],
    ["normal", "TVA : FR44107290579"],
    ["normal", "contact@prevensia-formation.fr"],
  ];
  let ey = y;
  for (const [style, line] of emetteur) {
    page.drawText(s(line as string), {
      x: ML, y: ey,
      font: style === "bold" ? fontB : fontR,
      size: style === "bold" ? 10 : 9,
      color: style === "bold" ? DARK : GRAY,
    });
    ey -= (style === "bold" ? 14 : 12);
  }

  // Client (droite, dans un encadré)
  const clientLines: [string, string][] = [
    ["bold", "Facturé à"],
    ["normal", clientName],
    ...(clientCompany ? [["normal", clientCompany] as [string, string]] : []),
    ["normal", clientEmail],
  ];
  const boxX = ML + CW * 0.55;
  const boxW = CW * 0.45;
  const boxH = clientLines.length * 13 + 16;
  const boxY = y - boxH;
  page.drawRectangle({ x: boxX, y: boxY, width: boxW, height: boxH, color: LIGHT, borderColor: rgb(0.88, 0.9, 0.93), borderWidth: 0.5 });
  let cy = y - 10;
  for (const [style, line] of clientLines) {
    page.drawText(s(line), {
      x: boxX + 10, y: cy,
      font: style === "bold" ? fontB : fontR,
      size: style === "bold" ? 9 : 9,
      color: style === "bold" ? GRAY : DARK,
    });
    cy -= 13;
  }

  // ── Détails facture ──
  y = Math.min(ey, boxY) - 20;
  const details: [string, string][] = [
    ["Date de facture", dateFr(dateFacture)],
    ["Date d'échéance", dateFr(dateEch) + " (30 jours)"],
  ];
  for (const [label, val] of details) {
    page.drawText(s(label + " :"), { x: ML, y, font: fontR, size: 9, color: GRAY });
    page.drawText(s(val), { x: ML + 140, y, font: fontB, size: 9, color: DARK });
    y -= 14;
  }

  y -= 14;

  // ── Tableau formations ──
  const colX  = [ML, ML + CW * 0.52, ML + CW * 0.68, ML + CW * 0.83];
  const colW  = [CW * 0.50, CW * 0.16, CW * 0.15, CW * 0.17];
  const headers = ["Désignation", "Qté", "PU HT", "Total HT"];

  // En-tête tableau
  page.drawRectangle({ x: ML, y: y - 18, width: CW, height: 22, color: DARK });
  for (let i = 0; i < headers.length; i++) {
    page.drawText(s(headers[i]), {
      x: colX[i] + 6, y: y - 13,
      font: fontB, size: 8.5, color: WHITE,
    });
  }
  y -= 22;

  // Lignes formations
  let rowBg = false;
  for (const line of lines) {
    const wrapped = wrapText(s(line.label), colW[0] - 12, fontR, 8.5);
    const rowH = Math.max(18, wrapped.length * 12 + 6);

    if (rowBg) {
      page.drawRectangle({ x: ML, y: y - rowH, width: CW, height: rowH, color: LIGHT });
    }

    // Label (avec wrap)
    let textY = y - 12;
    for (const wl of wrapped) {
      page.drawText(wl, { x: colX[0] + 6, y: textY, font: fontR, size: 8.5, color: DARK });
      textY -= 12;
    }

    const puStr    = line.puHT !== null ? `${line.puHT.toFixed(2)} EUR` : "Sur devis";
    const totalStr = line.puHT !== null ? `${(line.puHT * line.qty).toFixed(2)} EUR` : "Sur devis";

    page.drawText(String(line.qty),  { x: colX[1] + 6, y: y - 12, font: fontR, size: 8.5, color: DARK });
    page.drawText(s(puStr),          { x: colX[2] + 6, y: y - 12, font: fontR, size: 8.5, color: DARK });
    page.drawText(s(totalStr),       { x: colX[3] + 6, y: y - 12, font: fontB, size: 8.5, color: DARK });

    // Séparateur de ligne
    page.drawLine({ start: { x: ML, y: y - rowH }, end: { x: W - MR, y: y - rowH }, thickness: 0.3, color: rgb(0.88, 0.9, 0.93) });

    y -= rowH;
    rowBg = !rowBg;
  }

  y -= 16;

  // ── Totaux ──
  const totals: [string, string, boolean][] = [
    ["Total HT",      `${totalHT.toFixed(2)} EUR`,    false],
    [`TVA ${tvaRate} %`, `${tvaAmount.toFixed(2)} EUR`, false],
    ["Total TTC",     `${totalTTC.toFixed(2)} EUR`,   true ],
  ];
  const totW = CW * 0.4;
  const totX = ML + CW - totW;

  for (const [label, val, bold] of totals) {
    if (bold) {
      page.drawRectangle({ x: totX, y: y - 18, width: totW, height: 22, color: RED });
      page.drawText(s(label), { x: totX + 10, y: y - 13, font: fontB, size: 9.5, color: WHITE });
      page.drawText(s(val),   { x: totX + totW - fontB.widthOfTextAtSize(s(val), 9.5) - 10, y: y - 13, font: fontB, size: 9.5, color: WHITE });
      y -= 22;
    } else {
      page.drawText(s(label), { x: totX + 10, y: y - 12, font: fontR, size: 9, color: GRAY });
      page.drawText(s(val),   { x: totX + totW - fontR.widthOfTextAtSize(s(val), 9) - 10, y: y - 12, font: fontR, size: 9, color: DARK });
      y -= 16;
    }
  }

  // ── RIB / Règlement ──
  y -= 28;
  if (y > 130) {
    page.drawLine({ start: { x: ML, y: y + 8 }, end: { x: W - MR, y: y + 8 }, thickness: 0.5, color: rgb(0.88, 0.9, 0.93) });
    page.drawText("Informations de règlement", { x: ML, y, font: fontB, size: 9, color: DARK });
    y -= 14;
    if (iban) {
      page.drawText(s(`IBAN : ${iban}`), { x: ML, y, font: fontR, size: 8.5, color: GRAY });
      y -= 12;
    }
    if (bic) {
      page.drawText(s(`BIC : ${bic}`),  { x: ML, y, font: fontR, size: 8.5, color: GRAY });
      y -= 12;
    }
    page.drawText("Conditions : paiement a 30 jours date de facture.", { x: ML, y, font: fontR, size: 8.5, color: GRAY });
    y -= 12;
    page.drawText("En cas de retard, penalites de 3x le taux d'interet legal + indemnite forfaitaire de 40 EUR.", { x: ML, y, font: fontR, size: 7.5, color: GRAY });
  }

  // ── Pied de page ──
  page.drawLine({ start: { x: ML, y: 40 }, end: { x: W - MR, y: 40 }, thickness: 0.5, color: rgb(0.88, 0.9, 0.93) });
  page.drawText("PREVENSIA FORMATION - 33, av. Philippe Auguste 75011 Paris - SIRET 107 290 579 00013 - TVA FR44107290579", {
    x: ML, y: 26, font: fontR, size: 7, color: GRAY,
  });

  return doc.save();
}
