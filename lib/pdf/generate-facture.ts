import { PDFDocument, PDFFont, PDFPage, StandardFonts, rgb } from "pdf-lib";

export type FacturePdfInput = {
  numero: string;
  date: string;
  clientName: string;
  clientEmail: string;
  clientCompany?: string;
  formationLabel: string;
  montantHT: number;
  tvaRate: number;
  montantTTC: number;
  notes?: string;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function sanitize(text: string): string {
  return text
    .replace(/œ/g, "oe")
    .replace(/Œ/g, "Oe")
    .replace(/æ/g, "ae")
    .replace(/Æ/g, "Ae")
    .replace(/€/g, "EUR")
    .replace(/[–—]/g, "-")
    .replace(/['']/g, "'")
    .replace(/[""]/g, '"')
    .replace(/…/g, "...");
}

function fmtEur(amount: number): string {
  return amount.toFixed(2).replace(".", ",") + " EUR";
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) {
    const now = new Date();
    now.setDate(now.getDate() + days);
    return now.toLocaleDateString("fr-FR");
  }
  d.setDate(d.getDate() + days);
  return d.toLocaleDateString("fr-FR");
}

function parseDateLabel(dateStr: string): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("fr-FR");
}

function wrapText(
  text: string,
  maxWidth: number,
  font: PDFFont,
  fontSize: number
): string[] {
  const segments = text.split("\n");
  const result: string[] = [];

  for (const segment of segments) {
    const words = segment.split(/\s+/).filter(Boolean);
    if (words.length === 0) {
      result.push("");
      continue;
    }
    let currentLine = "";
    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      if (font.widthOfTextAtSize(testLine, fontSize) <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) result.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) result.push(currentLine);
  }
  return result;
}

function drawHRule(
  page: PDFPage,
  x: number,
  y: number,
  width: number,
  color: ReturnType<typeof rgb> = rgb(0.8, 0.8, 0.82),
  thickness = 0.5
) {
  page.drawLine({
    start: { x, y },
    end: { x: x + width, y },
    color,
    thickness,
  });
}

function drawTableRow(
  page: PDFPage,
  cols: { text: string; x: number; width: number; align?: "left" | "right" | "center" }[],
  y: number,
  font: PDFFont,
  size: number,
  color: ReturnType<typeof rgb>,
  rowBg?: ReturnType<typeof rgb>
) {
  const rowHeight = 22;
  if (rowBg) {
    const firstCol = cols[0];
    const lastCol = cols[cols.length - 1];
    page.drawRectangle({
      x: firstCol.x,
      y: y - rowHeight + 4,
      width: lastCol.x + lastCol.width - firstCol.x,
      height: rowHeight,
      color: rowBg,
    });
  }
  for (const col of cols) {
    const s = sanitize(col.text);
    const tw = font.widthOfTextAtSize(s, size);
    let textX = col.x + 6;
    if (col.align === "right") textX = col.x + col.width - tw - 6;
    else if (col.align === "center") textX = col.x + (col.width - tw) / 2;
    page.drawText(s, { x: textX, y, size, font, color });
  }
}

// ─── Generator ────────────────────────────────────────────────────────────────

export async function generateFacturePdf(input: FacturePdfInput): Promise<Uint8Array> {
  const {
    numero,
    date,
    clientName,
    clientEmail,
    clientCompany,
    formationLabel,
    montantHT,
    tvaRate,
    montantTTC,
    notes,
  } = input;

  const dateLabel = parseDateLabel(date);
  const echeanceLabel = addDays(date, 30);

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]);

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const RED = rgb(0.86, 0.15, 0.15);
  const SLATE = rgb(0.1, 0.1, 0.15);
  const MUTED = rgb(0.4, 0.4, 0.45);
  const LIGHT_BG = rgb(0.97, 0.97, 0.98);
  const HEAD_BG = rgb(0.12, 0.12, 0.18);

  const pageW = 595.28;
  const pageH = 841.89;
  const margin = 50;
  const contentW = pageW - margin * 2;

  // ── En-tête société ──────────────────────────────────────────────────────
  let y = pageH - margin;

  page.drawRectangle({
    x: 0,
    y: pageH - 120,
    width: pageW,
    height: 120,
    color: rgb(0.99, 0.99, 1),
  });

  page.drawText("PREVENSIA FORMATION", {
    x: margin,
    y,
    size: 20,
    font: fontBold,
    color: RED,
  });
  y -= 18;

  page.drawText("PREVENSIA Groupe SAS", { x: margin, y, size: 9, font: fontRegular, color: MUTED });
  y -= 13;
  page.drawText("33, avenue Philippe Auguste — 75011 Paris", { x: margin, y, size: 9, font: fontRegular, color: MUTED });
  y -= 13;
  page.drawText("SIRET : 107 290 579 00013", { x: margin, y, size: 9, font: fontRegular, color: MUTED });
  y -= 13;
  page.drawText("contact@prevensia-formation.fr | 01 89 62 94 92", { x: margin, y, size: 9, font: fontRegular, color: MUTED });

  // Date + numéro (coin droit)
  const dateLineY = pageH - margin;
  page.drawText(`Date : ${dateLabel}`, {
    x: pageW - margin - 160,
    y: dateLineY,
    size: 9,
    font: fontRegular,
    color: MUTED,
  });
  page.drawText(`N° : ${sanitize(numero)}`, {
    x: pageW - margin - 160,
    y: dateLineY - 14,
    size: 9,
    font: fontBold,
    color: SLATE,
  });
  page.drawText(`Echeance : ${echeanceLabel}`, {
    x: pageW - margin - 160,
    y: dateLineY - 28,
    size: 9,
    font: fontBold,
    color: RED,
  });

  y = pageH - 138;
  drawHRule(page, margin, y, contentW, RED, 2);

  // ── Titre ────────────────────────────────────────────────────────────────
  y -= 30;
  const title = `FACTURE N° ${sanitize(numero)}`;
  const titleW = fontBold.widthOfTextAtSize(title, 22);
  page.drawText(title, {
    x: (pageW - titleW) / 2,
    y,
    size: 22,
    font: fontBold,
    color: SLATE,
  });

  y -= 30;
  drawHRule(page, margin, y, contentW);

  // ── Section Client ───────────────────────────────────────────────────────
  y -= 24;
  page.drawText("CLIENT", { x: margin, y, size: 10, font: fontBold, color: RED });
  y -= 16;

  const clientLineCount = clientCompany ? 3 : 2;
  const clientBoxH = clientLineCount * 16 + 18;
  page.drawRectangle({ x: margin, y: y - (clientBoxH - 10), width: contentW, height: clientBoxH, color: LIGHT_BG });

  page.drawText("Nom / Responsable :", { x: margin + 10, y, size: 9, font: fontRegular, color: MUTED });
  page.drawText(sanitize(clientName), { x: margin + 145, y, size: 9, font: fontBold, color: SLATE });
  y -= 16;

  page.drawText("Email :", { x: margin + 10, y, size: 9, font: fontRegular, color: MUTED });
  page.drawText(sanitize(clientEmail), { x: margin + 145, y, size: 9, font: fontRegular, color: SLATE });
  y -= 16;

  if (clientCompany) {
    page.drawText("Societe :", { x: margin + 10, y, size: 9, font: fontRegular, color: MUTED });
    page.drawText(sanitize(clientCompany), { x: margin + 145, y, size: 9, font: fontBold, color: SLATE });
    y -= 16;
  }

  y -= 12;
  drawHRule(page, margin, y, contentW);

  // ── Tableau prestation ───────────────────────────────────────────────────
  y -= 24;
  page.drawText("PRESTATION", { x: margin, y, size: 10, font: fontBold, color: RED });
  y -= 26;

  // ── Layout colonnes ───────────────────────────────────────────────────────
  const GAP = 8;
  const col1X = margin;
  const col1W = 215;
  const col2X = col1X + col1W + GAP; // 273
  const col2W = 90;
  const col3X = col2X + col2W + GAP; // 371
  const col3W = 58;
  const col4X = col3X + col3W + GAP; // 437
  const col4W = margin + contentW - col4X; // 108
  const rightEdge = margin + contentW; // 545.28

  page.drawRectangle({ x: margin, y: y - 8, width: contentW, height: 26, color: HEAD_BG });

  const headerY = y + 6;
  page.drawText("Designation", { x: col1X + 6, y: headerY, size: 8.5, font: fontBold, color: rgb(1, 1, 1) });
  const htLabel = "HT (EUR)";
  page.drawText(htLabel, {
    x: col2X + col2W - fontBold.widthOfTextAtSize(htLabel, 8.5) - 6,
    y: headerY, size: 8.5, font: fontBold, color: rgb(1, 1, 1),
  });
  const tvaLabel = "TVA";
  page.drawText(tvaLabel, {
    x: col3X + (col3W - fontBold.widthOfTextAtSize(tvaLabel, 8.5)) / 2,
    y: headerY, size: 8.5, font: fontBold, color: rgb(1, 1, 1),
  });
  const ttcLabel = "TTC (EUR)";
  page.drawText(ttcLabel, {
    x: rightEdge - fontBold.widthOfTextAtSize(ttcLabel, 8.5) - 6,
    y: headerY, size: 8.5, font: fontBold, color: rgb(1, 1, 1),
  });
  y -= 26;

  drawTableRow(
    page,
    [
      { text: formationLabel, x: col1X, width: col1W },
      { text: fmtEur(montantHT), x: col2X, width: col2W, align: "right" },
      { text: tvaRate === 0 ? "Exonere" : `${tvaRate} %`, x: col3X, width: col3W, align: "center" },
      { text: fmtEur(montantTTC), x: col4X, width: col4W, align: "right" },
    ],
    y,
    fontRegular,
    9,
    SLATE,
    LIGHT_BG
  );
  y -= 28;

  drawHRule(page, margin, y, contentW);

  // ── Totaux (valeurs alignées à droite sur rightEdge) ──────────────────────
  y -= 16;
  const totX = col3X - 4;

  function valX(text: string, font: PDFFont, size: number) {
    return rightEdge - font.widthOfTextAtSize(text, size);
  }

  const htStr = fmtEur(montantHT);
  page.drawText("Total HT :", { x: totX, y, size: 9, font: fontRegular, color: MUTED });
  page.drawText(htStr, { x: valX(htStr, fontBold, 9), y, size: 9, font: fontBold, color: SLATE });
  y -= 14;

  if (tvaRate === 0) {
    const tvaStr = "Non applicable";
    page.drawText("TVA :", { x: totX, y, size: 9, font: fontRegular, color: MUTED });
    page.drawText(tvaStr, { x: valX(tvaStr, fontRegular, 9), y, size: 9, font: fontRegular, color: MUTED });
  } else {
    const tvaMontant = montantTTC - montantHT;
    const tvaStr = fmtEur(tvaMontant);
    page.drawText(`TVA ${tvaRate}% :`, { x: totX, y, size: 9, font: fontRegular, color: MUTED });
    page.drawText(tvaStr, { x: valX(tvaStr, fontRegular, 9), y, size: 9, font: fontRegular, color: SLATE });
  }
  y -= 28;

  // Barre TOTAL TTC
  page.drawRectangle({ x: totX - 4, y: y - 6, width: rightEdge - (totX - 4), height: 26, color: RED });
  const ttcStr = fmtEur(montantTTC);
  page.drawText("TOTAL TTC :", { x: totX, y: y + 4, size: 10, font: fontBold, color: rgb(1, 1, 1) });
  page.drawText(ttcStr, { x: valX(ttcStr, fontBold, 10), y: y + 4, size: 10, font: fontBold, color: rgb(1, 1, 1) });
  y -= 36;

  // ── Date d'échéance ──────────────────────────────────────────────────────
  y -= 10;
  page.drawText(`Date d'echeance : ${echeanceLabel}`, {
    x: margin,
    y,
    size: 9,
    font: fontBold,
    color: RED,
  });
  y -= 20;

  // ── Mention TVA ──────────────────────────────────────────────────────────
  drawHRule(page, margin, y, contentW);
  y -= 18;

  if (tvaRate === 0) {
    page.drawRectangle({ x: margin, y: y - 6, width: contentW, height: 28, color: rgb(0.995, 0.97, 0.97) });
    page.drawText(
      "TVA non applicable - art. 261-4-4 du CGI (organisme de formation enregistre)",
      { x: margin + 8, y: y + 6, size: 8, font: fontRegular, color: rgb(0.7, 0.15, 0.15) }
    );
  } else {
    page.drawRectangle({ x: margin, y: y - 6, width: contentW, height: 28, color: rgb(0.97, 0.97, 0.99) });
    page.drawText(
      `TVA ${tvaRate}% applicable - PREVENSIA Groupe SAS - TVA intracommunautaire : [numero TVA]`,
      { x: margin + 8, y: y + 6, size: 8, font: fontRegular, color: rgb(0.2, 0.3, 0.6) }
    );
  }
  y -= 36;

  // ── Notes ────────────────────────────────────────────────────────────────
  if (notes && notes.trim()) {
    drawHRule(page, margin, y, contentW);
    y -= 20;
    page.drawText("Notes :", { x: margin, y, size: 9, font: fontBold, color: SLATE });
    y -= 14;
    const noteLines = wrapText(sanitize(notes), contentW - 20, fontRegular, 9);
    for (const line of noteLines) {
      page.drawText(line, { x: margin + 10, y, size: 9, font: fontRegular, color: MUTED });
      y -= 13;
    }
    y -= 10;
  }

  // ── Mentions légales obligatoires françaises ─────────────────────────────
  drawHRule(page, margin, y, contentW);
  y -= 18;
  page.drawText("MENTIONS LEGALES", { x: margin, y, size: 9, font: fontBold, color: SLATE });
  y -= 14;

  const mentions = [
    "Penalites de retard : taux legal en vigueur (art. L.441-10 C. com.)",
    "Indemnite forfaitaire pour frais de recouvrement : 40 EUR",
    "Escompte pour paiement anticipe : aucun",
    tvaRate === 0
      ? "TVA non applicable - art. 261-4-4 du CGI - Organisme de formation enregistre (NDA a completer aupres de la DREETS)"
      : `TVA ${tvaRate}% - PREVENSIA Groupe SAS - Numero TVA intracommunautaire : FR44107290579`,
  ];
  for (const mention of mentions) {
    page.drawText(`- ${mention}`, { x: margin + 10, y, size: 8, font: fontRegular, color: MUTED });
    y -= 13;
  }

  // ── Pied de page ─────────────────────────────────────────────────────────
  const footerY = 60;
  drawHRule(page, margin, footerY + 24, contentW, RED, 1.5);

  page.drawText("PREVENSIA FORMATION | PREVENSIA Groupe SAS", {
    x: margin,
    y: footerY + 10,
    size: 7.5,
    font: fontBold,
    color: RED,
  });
  page.drawText(
    "33, av. Philippe Auguste — 75011 Paris | SIRET : 107 290 579 00013 | contact@prevensia-formation.fr | 01 89 62 94 92",
    {
      x: margin,
      y: footerY - 2,
      size: 7,
      font: fontRegular,
      color: MUTED,
    }
  );
  page.drawText("Organisme de formation", {
    x: pageW - margin - fontBold.widthOfTextAtSize("Organisme de formation", 7.5),
    y: footerY + 10,
    size: 7.5,
    font: fontBold,
    color: MUTED,
  });

  return pdfDoc.save();
}
