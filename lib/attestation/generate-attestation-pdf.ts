import {
  PDFDocument,
  PDFFont,
  PDFImage,
  PDFPage,
  StandardFonts,
  rgb,
} from "pdf-lib";
import fs from "fs/promises";
import path from "path";

export type AttestationPdfInput = {
  userId: string;
  formation: string;
  date?: string;
  score?: number;
  total?: number;
  scorePercent?: number;
  passingScore?: number;
  passed?: boolean;
  companyName?: string;
  employeeFirstName?: string;
  employeeLastName?: string;
  orderedByEmployer?: boolean;
  learnerEmail?: string;
};

type CellOptions = {
  font: PDFFont;
  size?: number;
  textColor?: ReturnType<typeof rgb>;
  fillColor?: ReturnType<typeof rgb>;
  borderColor?: ReturnType<typeof rgb>;
  borderWidth?: number;
  align?: "left" | "center" | "right";
  paddingX?: number;
  paddingY?: number;
  lineHeight?: number;
  verticalAlign?: "top" | "middle";
};

type SuggestedRow = {
  symbol: string;
  domain: string;
  scope: string;
  notes: string;
};

function formatDateFr(value?: string) {
  if (!value) return new Date().toLocaleDateString("fr-FR");

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;

  return parsed.toLocaleDateString("fr-FR");
}

export function sanitizeFileName(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9-_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function shortAttestationId(userId: string) {
  const d = new Date();
  const yy = String(d.getFullYear()).slice(-2);
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");

  return `PF-${yy}${mm}${dd}-${userId.slice(0, 4).toUpperCase()}`;
}

function normalizeFormationKey(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function wrapText(
  text: string,
  maxWidth: number,
  font: PDFFont,
  fontSize: number
): string[] {
  // Split on forced line breaks first, then word-wrap each segment
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
      const width = font.widthOfTextAtSize(testLine, fontSize);

      if (width <= maxWidth) {
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

function drawCell(
  page: PDFPage,
  text: string,
  x: number,
  y: number,
  width: number,
  height: number,
  options: CellOptions
) {
  const {
    font,
    size = 8.5,
    textColor = rgb(0.08, 0.08, 0.08),
    fillColor,
    borderColor = rgb(0.2, 0.2, 0.2),
    borderWidth = 0.8,
    align = "left",
    paddingX = 5,
    paddingY = 4,
    lineHeight = size + 2,
    verticalAlign = "middle",
  } = options;

  page.drawRectangle({
    x,
    y,
    width,
    height,
    color: fillColor,
    borderColor,
    borderWidth,
  });

  if (!text.trim()) return;

  const lines = wrapText(text, width - paddingX * 2, font, size);
  const totalHeight = lines.length * lineHeight;
  const startY =
    verticalAlign === "middle"
      ? y + (height + totalHeight) / 2 - lineHeight
      : y + height - paddingY - size;

  lines.forEach((line, index) => {
    const lineWidth = font.widthOfTextAtSize(line, size);
    let textX = x + paddingX;

    if (align === "center") {
      textX = x + (width - lineWidth) / 2;
    } else if (align === "right") {
      textX = x + width - paddingX - lineWidth;
    }

    page.drawText(line, {
      x: textX,
      y: startY - index * lineHeight,
      size,
      font,
      color: textColor,
    });
  });
}

function drawLine(
  page: PDFPage,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: ReturnType<typeof rgb>,
  thickness = 0.8
) {
  page.drawLine({
    start: { x: x1, y: y1 },
    end: { x: x2, y: y2 },
    color,
    thickness,
  });
}

async function readFirstExistingAsset(relativePaths: string[]) {
  // process.cwd() = racine du projet Next.js, fiable en dev ET en production
  // contrairement à import.meta.url qui pointe vers le fichier compilé dans .next/
  for (const relativePath of relativePaths) {
    // Les chemins sont passés sous forme "public/images/..." (sans les "../..")
    const filePath = path.join(process.cwd(), relativePath);
    try {
      return await fs.readFile(filePath);
    } catch {
      // continue
    }
  }

  return null;
}

async function loadLogoBuffer() {
  return readFirstExistingAsset([
    "public/images/logo-prevensia.png",
    "public/images/logo-prevensia-formation.jpg",
    "public/images/logo-prevensia.jpg",
  ]);
}

async function loadSignatureBuffer() {
  return readFirstExistingAsset([
    "public/images/signature-prevensia.png",
    "public/images/signature-prevensia.jpg",
  ]);
}

function getSuggestedRows(formation: string): Record<string, SuggestedRow> {
  const normalized = normalizeFormationKey(formation);

  if (normalized.includes("h0b0")) {
    return {
      executant: {
        symbol: "B0 / H0 / H0V",
        domain: "BT / HT",
        scope: "Environnement électrique",
        notes: "Opérations non électriques uniquement",
      },
    };
  }

  if (
    normalized.includes("bs") ||
    normalized.includes("be manoeuvre") ||
    normalized.includes("manoeuvre")
  ) {
    return {
      bs: {
        symbol: "BS",
        domain: "BT",
        scope: "Circuits terminaux identifiés",
        notes: "Hors tension, sans voisinage, limites NF C 18-510",
      },
      beManoeuvre: {
        symbol: "BE Manoeuvre",
        domain: "BT",
        scope: "Organes de commande identifiés",
        notes: "Manœuvres uniquement, pas de dépannage",
      },
    };
  }

  if (
    normalized.includes("b1") ||
    normalized.includes("b2") ||
    normalized.includes("br") ||
    normalized.includes("bc")
  ) {
    return {
      executantElectricien: {
        symbol: "B1V / B2V",
        domain: "BT",
        scope: "Installation client",
        notes: "À préciser selon mission",
      },
      chargeIntervention: {
        symbol: "BR",
        domain: "BT",
        scope: "Installation client",
        notes: "À préciser selon mission",
      },
      chargeConsignation: {
        symbol: "BC",
        domain: "BT",
        scope: "Installation client",
        notes: "À préciser selon mission",
      },
    };
  }

  return {};
}

function getFormationFrameLabel(formation: string) {
  const normalized = normalizeFormationKey(formation);

  if (normalized.includes("h0b0") && normalized.includes("hov")) {
    return "H0B0 / H0V";
  }

  if (normalized.includes("h0b0")) {
    return "H0B0";
  }

  if (
    normalized.includes("bs") &&
    (normalized.includes("be manoeuvre") || normalized.includes("manoeuvre"))
  ) {
    return "BS et BE Manœuvre";
  }

  if (normalized.includes("be manoeuvre") || normalized.includes("manoeuvre")) {
    return "BE Manœuvre";
  }

  if (normalized.includes("bs")) {
    return "BS";
  }

  if (
    normalized.includes("b1") ||
    normalized.includes("b2") ||
    normalized.includes("br") ||
    normalized.includes("bc")
  ) {
    return "B1 / B1V / B2 / B2V / BR / BC";
  }

  if (normalized.includes("sst")) {
    return "SST";
  }

  return formation;
}

function drawFirstPage(params: {
  page: PDFPage;
  fontRegular: PDFFont;
  fontBold: PDFFont;
  colors: Record<string, ReturnType<typeof rgb>>;
  logoImage: PDFImage | null;
  attestationId: string;
  issueDate: string;
  validationDate: string;
  learnerFullName: string;
  employerName: string;
  formation: string;
  suggestedRows: Record<string, SuggestedRow>;
}) {
  const {
    page,
    fontRegular,
    fontBold,
    colors,
    logoImage,
    attestationId,
    issueDate,
    validationDate,
    learnerFullName,
    employerName,
    formation,
    suggestedRows,
  } = params;

  const pageWidth = page.getWidth();
  const pageHeight = page.getHeight();
  const margin = 22;
  const contentWidth = pageWidth - margin * 2;

  page.drawRectangle({
    x: 0,
    y: 0,
    width: pageWidth,
    height: pageHeight,
    color: colors.page,
  });

  page.drawRectangle({
    x: margin,
    y: margin,
    width: contentWidth,
    height: pageHeight - margin * 2,
    borderColor: colors.line,
    borderWidth: 1.1,
  });

  const headerY = pageHeight - 84;
  const headerHeight = 62;
  const titleWidth = 320;
  const metaWidth = 132;
  const logoWidth = contentWidth - titleWidth - metaWidth;
  page.drawRectangle({
    x: margin,
    y: headerY,
    width: contentWidth,
    height: headerHeight,
    borderColor: colors.line,
    borderWidth: 1.1,
    color: colors.softGrey,
  });

  drawLine(
    page,
    margin + titleWidth,
    headerY,
    margin + titleWidth,
    headerY + headerHeight,
    colors.line,
    1.1
  );
  drawLine(
    page,
    margin + titleWidth + metaWidth,
    headerY,
    margin + titleWidth + metaWidth,
    headerY + headerHeight,
    colors.line,
    1.1
  );

  page.drawRectangle({
    x: margin + titleWidth,
    y: headerY,
    width: metaWidth,
    height: headerHeight,
    color: rgb(0.985, 0.988, 0.995),
  });

  page.drawRectangle({
    x: margin + titleWidth + metaWidth,
    y: headerY,
    width: logoWidth,
    height: headerHeight,
    color: colors.page,
  });

  page.drawText("TITRE D'HABILITATION", {
    x: margin + 11,
    y: headerY + 37,
    size: 14,
    font: fontBold,
    color: colors.text,
  });

  drawCell(
    page,
    `Référence : ${attestationId}\nÉdité le : ${issueDate}`,
    margin + titleWidth,
    headerY,
    metaWidth,
    headerHeight,
    {
      font: fontRegular,
      size: 7.5,
      align: "right",
      borderColor: colors.line,
      borderWidth: 1.1,
      fillColor: rgb(0.985, 0.988, 0.995),
      verticalAlign: "middle",
      lineHeight: 10,
    }
  );

  if (logoImage) {
    try {
      const dims = logoImage.scale(1);
      const scale = Math.min(78 / dims.width, 42 / dims.height);
      const imageWidth = dims.width * scale;
      const imageHeight = dims.height * scale;

      page.drawRectangle({
        x: margin + titleWidth + metaWidth + 8,
        y: headerY + 8,
        width: logoWidth - 16,
        height: headerHeight - 16,
        color: colors.page,
      });

      page.drawImage(logoImage, {
        x: margin + titleWidth + metaWidth + (logoWidth - imageWidth) / 2,
        y: headerY + (headerHeight - imageHeight) / 2,
        width: imageWidth,
        height: imageHeight,
      });
    } catch (error) {
      console.error("Erreur logo titre habilitation :", error);
    }
  }

  let y = pageHeight - 116;
  const topCol1 = 236;
  const topCol2 = 190;
  const topCol3 = contentWidth - topCol1 - topCol2;
  const labelRowHeight = 20;
  const valueRowHeight = 24;
  const titleValueRowHeight = 30;

  drawCell(page, "", margin, y, topCol1, labelRowHeight, {
    font: fontRegular,
    borderColor: colors.line,
  });
  drawCell(page, "", margin + topCol1, y, topCol2, labelRowHeight, {
    font: fontRegular,
    borderColor: colors.line,
  });
  drawCell(page, "", margin + topCol1 + topCol2, y, topCol3, labelRowHeight, {
    font: fontRegular,
    borderColor: colors.line,
  });

  page.drawText("Nom et prénom du titulaire du titre", {
    x: margin + 8,
    y: y + 12,
    size: 6.9,
    font: fontRegular,
    color: colors.muted,
  });
  page.drawText("Fonction", {
    x: margin + topCol1 + 8,
    y: y + 12,
    size: 6.9,
    font: fontRegular,
    color: colors.muted,
  });
  page.drawText("Date de délivrance", {
    x: margin + topCol1 + topCol2 + 8,
    y: y + 12,
    size: 6.9,
    font: fontRegular,
    color: colors.muted,
  });

  y -= labelRowHeight;
  drawCell(page, learnerFullName, margin, y, topCol1, valueRowHeight, {
    font: fontBold,
    size: 11,
    borderColor: colors.line,
    verticalAlign: "middle",
  });
  drawCell(page, "À compléter", margin + topCol1, y, topCol2, valueRowHeight, {
    font: fontBold,
    size: 9.2,
    borderColor: colors.line,
    verticalAlign: "middle",
  });
  drawCell(page, "À compléter", margin + topCol1 + topCol2, y, topCol3, valueRowHeight, {
    font: fontBold,
    size: 9.2,
    borderColor: colors.line,
    verticalAlign: "middle",
  });

  y -= valueRowHeight;
  drawCell(page, "", margin, y, topCol1, labelRowHeight, {
    font: fontRegular,
    borderColor: colors.line,
  });
  drawCell(page, "", margin + topCol1, y, topCol2, labelRowHeight, {
    font: fontRegular,
    borderColor: colors.line,
  });
  drawCell(page, "", margin + topCol1 + topCol2, y, topCol3, labelRowHeight, {
    font: fontRegular,
    borderColor: colors.line,
  });

  page.drawText("Formation théorique de référence", {
    x: margin + 8,
    y: y + 12,
    size: 6.9,
    font: fontRegular,
    color: colors.muted,
  });
  page.drawText("Affectation / entreprise", {
    x: margin + topCol1 + 8,
    y: y + 12,
    size: 6.9,
    font: fontRegular,
    color: colors.muted,
  });
  page.drawText("Date de validité", {
    x: margin + topCol1 + topCol2 + 8,
    y: y + 12,
    size: 6.9,
    font: fontRegular,
    color: colors.muted,
  });

  y -= labelRowHeight;
  drawCell(page, formation, margin, y, topCol1, titleValueRowHeight, {
    font: fontBold,
    size: 8.8,
    borderColor: colors.line,
    verticalAlign: "middle",
  });
  drawCell(page, employerName, margin + topCol1, y, topCol2, titleValueRowHeight, {
    font: fontBold,
    size: 9.2,
    borderColor: colors.line,
    verticalAlign: "middle",
  });
  drawCell(page, "À compléter", margin + topCol1 + topCol2, y, topCol3, titleValueRowHeight, {
    font: fontBold,
    size: 9.2,
    borderColor: colors.line,
    verticalAlign: "middle",
  });

  y -= titleValueRowHeight + 6;

  const colRole = 176;
  const colSymbol = 92;
  const colDomain = 76;
  const colScope = 90;
  const colNotes = contentWidth - colRole - colSymbol - colDomain - colScope;
  const xRole = margin;
  const xSymbol = xRole + colRole;
  const xDomain = xSymbol + colSymbol;
  const xScope = xDomain + colDomain;
  const xNotes = xScope + colScope;

  drawCell(page, "PERSONNEL", xRole, y - 52, colRole, 52, {
    font: fontRegular,
    size: 8.8,
    align: "center",
    verticalAlign: "middle",
    borderColor: colors.line,
  });
  drawCell(page, "Symboles d'habilitation / Attributs", xSymbol, y - 52, colSymbol, 52, {
    font: fontRegular,
    size: 7.7,
    align: "center",
    verticalAlign: "middle",
    borderColor: colors.brand,
    borderWidth: 1.1,
  });
  drawCell(page, "Champ d'application", xDomain, y - 24, colDomain + colScope + colNotes, 24, {
    font: fontBold,
    size: 8.2,
    align: "center",
    verticalAlign: "middle",
    borderColor: colors.line,
  });
  drawCell(page, "Domaine de tension", xDomain, y - 52, colDomain, 28, {
    font: fontRegular,
    size: 7.2,
    align: "center",
    verticalAlign: "middle",
    borderColor: colors.line,
    fillColor: colors.softBlue,
  });
  drawCell(page, "Ouvrages ou installations concernés", xScope, y - 52, colScope, 28, {
    font: fontRegular,
    size: 6.9,
    align: "center",
    verticalAlign: "middle",
    borderColor: colors.line,
  });
  drawCell(page, "Indications supplémentaires", xNotes, y - 52, colNotes, 28, {
    font: fontRegular,
    size: 6.9,
    align: "center",
    verticalAlign: "middle",
    borderColor: colors.line,
  });

  y -= 52;

  const rows = [
    { type: "section", label: "Opérations d'ordre non électrique" },
    { type: "data", key: "executant", label: "Exécutant" },
    { type: "data", key: "chargeChantier", label: "Chargé de chantier" },
    { type: "section", label: "Opérations d'ordre électrique" },
    { type: "data", key: "bs", label: "BS - Intervention BT élémentaire" },
    { type: "data", key: "beManoeuvre", label: "BE Manœuvre" },
    { type: "data", key: "executantElectricien", label: "Exécutant électricien" },
    { type: "data", key: "chargeTravaux", label: "Chargé de travaux" },
    { type: "data", key: "chargeIntervention", label: "Chargé d'intervention BT" },
    { type: "data", key: "chargeConsignation", label: "Chargé de consignation" },
    { type: "data", key: "chargeSpecifique", label: "Chargé d'opération spécifique" },
    { type: "data", key: "habiliteSpecial", label: "Habilité spécial" },
    { type: "data", key: "documentSupp", label: "Document supplémentaire (oui/non)" },
  ] as const;

  for (const row of rows) {
    if (row.type === "section") {
      drawCell(page, row.label, margin, y - 18, contentWidth, 18, {
        font: fontBold,
        size: 8.4,
        borderColor: colors.line,
        fillColor: colors.softGrey,
        verticalAlign: "middle",
      });
      y -= 18;
      continue;
    }

    const rowHeight = 24;
    const suggested = suggestedRows[row.key] ?? {
      symbol: "",
      domain: "",
      scope: "",
      notes: "",
    };
    const isSuggested = Boolean(suggested.symbol);

    drawCell(page, row.label, xRole, y - rowHeight, colRole, rowHeight, {
      font: fontRegular,
      size: 7.8,
      borderColor: colors.line,
      verticalAlign: "middle",
      fillColor: isSuggested ? rgb(0.985, 0.99, 1) : undefined,
    });
    drawCell(page, suggested.symbol, xSymbol, y - rowHeight, colSymbol, rowHeight, {
      font: fontBold,
      size: 9.6,
      align: "center",
      verticalAlign: "middle",
      borderColor: colors.brand,
      borderWidth: 1.1,
      fillColor: isSuggested ? rgb(0.95, 0.97, 1) : undefined,
    });
    drawCell(page, suggested.domain, xDomain, y - rowHeight, colDomain, rowHeight, {
      font: fontBold,
      size: 8.8,
      align: "center",
      verticalAlign: "middle",
      borderColor: colors.line,
      fillColor: isSuggested ? rgb(0.88, 0.93, 0.98) : colors.softBlue,
    });
    drawCell(page, suggested.scope, xScope, y - rowHeight, colScope, rowHeight, {
      font: fontRegular,
      size: 6.9,
      borderColor: colors.line,
      verticalAlign: "middle",
      fillColor: isSuggested ? rgb(0.985, 0.99, 1) : undefined,
    });
    drawCell(page, suggested.notes, xNotes, y - rowHeight, colNotes, rowHeight, {
      font: fontRegular,
      size: 6.8,
      borderColor: colors.line,
      verticalAlign: "middle",
      lineHeight: 8.2,
      fillColor: isSuggested ? rgb(0.985, 0.99, 1) : undefined,
    });

    y -= rowHeight;
  }

  // Signature section pinned to fixed position at page bottom
  // ─── fixed anchors (from page bottom, above footer text at y=10–22) ───
  const signLeft = 160;
  const signCenter = 248;
  const signRight = contentWidth - signLeft - signCenter;

  const sigContentY = 36;            // bottom of content row (58pt tall)
  const sigHeaderY  = sigContentY + 58;   // = 94  — bottom of header row
  const discBottomY = sigHeaderY + 18 + 10; // = 122 — bottom of disclaimer box
  const discHeight  = 54;

  // Disclaimer anchored just above signatures
  drawCell(
    page,
    "Ce document est une trame pré-remplie préparée à l'issue de la validation théorique du parcours le " +
      `${validationDate}. Les informations suggérées ci-dessus ne valent pas habilitation. Les symboles retenus, les limites d'intervention, le domaine de tension, les dates, l'affectation et les signatures doivent être déterminés, validés et formalisés exclusivement par l'employeur conformément au Code du travail, à l'analyse de risque du poste et à la NF C 18-510.`,
    margin,
    discBottomY,
    contentWidth,
    discHeight,
    {
      font: fontRegular,
      size: 7.1,
      borderColor: colors.line,
      fillColor: colors.pale,
      verticalAlign: "middle",
      lineHeight: 8.7,
    }
  );

  // Signature header row
  drawCell(page, "Signature du titulaire", margin, sigHeaderY, signLeft, 18, {
    font: fontBold,
    size: 8.4,
    borderColor: colors.line,
    fillColor: colors.softGrey,
    verticalAlign: "middle",
  });
  drawCell(page, "L'employeur", margin + signLeft, sigHeaderY, signCenter, 18, {
    font: fontBold,
    size: 8.4,
    borderColor: colors.line,
    fillColor: colors.softGrey,
    verticalAlign: "middle",
  });
  drawCell(page, "Signature", margin + signLeft + signCenter, sigHeaderY, signRight, 18, {
    font: fontBold,
    size: 8.4,
    borderColor: colors.line,
    fillColor: colors.softGrey,
    verticalAlign: "middle",
  });

  // Signature content row
  drawCell(page, learnerFullName, margin, sigContentY, signLeft, 58, {
    font: fontBold,
    size: 10.8,
    borderColor: colors.line,
    align: "center",
    verticalAlign: "middle",
  });
  drawCell(page, "Raison sociale :", margin + signLeft, sigContentY + 28, 76, 30, {
    font: fontRegular,
    size: 8.1,
    borderColor: colors.line,
    verticalAlign: "middle",
  });
  drawCell(page, employerName, margin + signLeft + 76, sigContentY + 28, signCenter - 76, 30, {
    font: fontBold,
    size: 9.1,
    borderColor: colors.line,
    verticalAlign: "middle",
  });
  drawCell(page, "Fonction :", margin + signLeft, sigContentY, 76, 28, {
    font: fontRegular,
    size: 8.1,
    borderColor: colors.line,
    verticalAlign: "middle",
  });
  drawCell(page, "À compléter", margin + signLeft + 76, sigContentY, signCenter - 76, 28, {
    font: fontBold,
    size: 9.1,
    borderColor: colors.line,
    verticalAlign: "middle",
  });
  drawCell(page, "", margin + signLeft + signCenter, sigContentY, signRight, 58, {
    font: fontRegular,
    size: 8,
    borderColor: colors.line,
  });
  drawLine(
    page,
    margin + signLeft + signCenter + 12,
    sigContentY + 16,
    margin + signLeft + signCenter + signRight - 12,
    sigContentY + 16,
    colors.line
  );

  page.drawText("PREVENSIA FORMATION", {
    x: margin,
    y: 20,
    size: 7.1,
    font: fontBold,
    color: colors.brand,
  });
  page.drawText(`Référence document : ${attestationId}`, {
    x: margin,
    y: 10,
    size: 6.6,
    font: fontRegular,
    color: colors.muted,
  });
}

function drawSuccessPage(params: {
  page: PDFPage;
  fontRegular: PDFFont;
  fontBold: PDFFont;
  colors: Record<string, ReturnType<typeof rgb>>;
  logoImage: PDFImage | null;
  signatureImage: PDFImage | null;
  attestationId: string;
  validationDate: string;
  learnerFullName: string;
  employerName: string;
  formation: string;
  resultText: string;
  successText: string;
  frameText: string;
}) {
  const {
    page,
    fontRegular,
    fontBold,
    colors,
    logoImage,
    signatureImage,
    attestationId,
    validationDate,
    learnerFullName,
    employerName,
    formation,
    resultText,
    successText,
    frameText,
  } = params;

  const pageWidth = page.getWidth();
  const pageHeight = page.getHeight();
  const margin = 34;

  page.drawRectangle({
    x: 18,
    y: 18,
    width: pageWidth - 36,
    height: pageHeight - 36,
    borderColor: colors.line,
    borderWidth: 1,
    color: colors.page,
  });

  page.drawRectangle({
    x: margin,
    y: pageHeight - 126,
    width: pageWidth - margin * 2,
    height: 90,
    color: colors.brand,
  });

  if (logoImage) {
    try {
      const dims = logoImage.scale(1);
      const scale = Math.min(102 / dims.width, 52 / dims.height);

      page.drawRectangle({
        x: margin + 14,
        y: pageHeight - 106,
        width: 108,
        height: 54,
        color: colors.page,
      });

      page.drawImage(logoImage, {
        x: margin + 18,
        y: pageHeight - 104,
        width: dims.width * scale,
        height: dims.height * scale,
      });
    } catch {
      // no-op
    }
  }

  page.drawText("PREVENSIA FORMATION", {
    x: margin + 136,
    y: pageHeight - 66,
    size: 17,
    font: fontBold,
    color: rgb(1, 1, 1),
  });
  page.drawText("FICHE DE RÉUSSITE", {
    x: margin + 136,
    y: pageHeight - 90,
    size: 12.5,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  drawCell(
    page,
    `Référence : ${attestationId}\nDate de réussite : ${validationDate}`,
    pageWidth - margin - 144,
    pageHeight - 109,
    110,
    58,
    {
      font: fontRegular,
      size: 7.8,
      textColor: rgb(1, 1, 1),
      borderColor: rgb(1, 1, 1),
      borderWidth: 0.8,
      align: "right",
      verticalAlign: "middle",
      lineHeight: 10,
    }
  );

  const title = "VALIDATION THÉORIQUE DU PARCOURS";
  page.drawText(title, {
    x: (pageWidth - fontBold.widthOfTextAtSize(title, 22)) / 2,
    y: pageHeight - 168,
    size: 22,
    font: fontBold,
    color: colors.brand,
  });

  const subtitle = "Document de résultat PREVENSIA à joindre au dossier employeur";
  page.drawText(subtitle, {
    x: (pageWidth - fontRegular.widthOfTextAtSize(subtitle, 9.5)) / 2,
    y: pageHeight - 186,
    size: 9.5,
    font: fontRegular,
    color: colors.muted,
  });

  drawCell(page, "Apprenant", margin, pageHeight - 286, 120, 22, {
    font: fontRegular,
    size: 8.2,
    borderColor: colors.line,
  });
  drawCell(page, learnerFullName, margin + 120, pageHeight - 286, pageWidth - margin * 2 - 120, 22, {
    font: fontBold,
    size: 10.4,
    borderColor: colors.line,
  });

  drawCell(page, "Formation", margin, pageHeight - 314, 120, 28, {
    font: fontRegular,
    size: 8.2,
    borderColor: colors.line,
  });
  drawCell(page, formation, margin + 120, pageHeight - 314, pageWidth - margin * 2 - 120, 28, {
    font: fontBold,
    size: 10,
    borderColor: colors.line,
    verticalAlign: "middle",
  });

  drawCell(page, "Entreprise", margin, pageHeight - 342, 120, 22, {
    font: fontRegular,
    size: 8.2,
    borderColor: colors.line,
  });
  drawCell(page, employerName, margin + 120, pageHeight - 342, pageWidth - margin * 2 - 120, 22, {
    font: fontBold,
    size: 10,
    borderColor: colors.line,
  });

  const boxY = pageHeight - 458;
  const boxGap = 12;
  const boxWidth = (pageWidth - margin * 2 - boxGap * 2) / 3;
  drawCell(page, "Réussite", margin, boxY, boxWidth, 78, {
    font: fontRegular,
    size: 8.2,
    borderColor: colors.line,
    fillColor: colors.pale,
    verticalAlign: "top",
  });
  drawCell(page, successText, margin + 8, boxY + 10, boxWidth - 16, 38, {
    font: fontBold,
    size: 17,
    textColor: successText === "OUI" ? rgb(0.1, 0.5, 0.25) : rgb(0.72, 0.16, 0.16),
    borderColor: colors.pale,
    fillColor: colors.pale,
    align: "center",
    verticalAlign: "middle",
  });

  drawCell(page, "Résultat obtenu", margin + boxWidth + boxGap, boxY, boxWidth, 78, {
    font: fontRegular,
    size: 8.2,
    borderColor: colors.line,
    fillColor: colors.pale,
    verticalAlign: "top",
  });
  drawCell(page, resultText, margin + boxWidth + boxGap + 8, boxY + 10, boxWidth - 16, 42, {
    font: fontBold,
    size: 11.2,
    textColor: colors.text,
    borderColor: colors.pale,
    fillColor: colors.pale,
    align: "center",
    verticalAlign: "middle",
    lineHeight: 12.5,
  });

  drawCell(page, "Cadre formation", margin + (boxWidth + boxGap) * 2, boxY, boxWidth, 78, {
    font: fontRegular,
    size: 8.2,
    borderColor: colors.line,
    fillColor: colors.pale,
    verticalAlign: "top",
  });
  drawCell(page, frameText, margin + (boxWidth + boxGap) * 2 + 8, boxY + 10, boxWidth - 16, 42, {
    font: fontBold,
    size: 11,
    textColor: colors.brand,
    borderColor: colors.pale,
    fillColor: colors.pale,
    align: "center",
    verticalAlign: "middle",
    lineHeight: 12.5,
  });

  drawCell(
    page,
    "Cette fiche atteste la réussite à l'évaluation théorique du parcours. Elle ne remplace pas le titre d'habilitation, ni l'évaluation pratique éventuelle, ni la décision finale de l'employeur. Le titre d'habilitation doit être établi séparément par l'employeur en fonction des tâches confiées, du poste, de l'environnement de travail et de l'analyse des risques.",
    margin,
    168,
    pageWidth - margin * 2,
    74,
    {
      font: fontRegular,
      size: 8.4,
      borderColor: colors.line,
      fillColor: colors.softGrey,
      lineHeight: 10.5,
      verticalAlign: "middle",
    }
  );

  drawCell(page, "Visa PREVENSIA FORMATION", margin, 86, 210, 18, {
    font: fontBold,
    size: 8.3,
    borderColor: colors.line,
    fillColor: colors.softGrey,
    verticalAlign: "middle",
  });
  drawCell(page, "", margin, 34, 210, 52, {
    font: fontRegular,
    size: 8,
    borderColor: colors.line,
  });
  drawLine(page, margin + 12, 48, margin + 198, 48, colors.line);

  if (signatureImage) {
    try {
      const dims = signatureImage.scale(1);
      const scale = Math.min(160 / dims.width, 28 / dims.height);

      page.drawImage(signatureImage, {
        x: margin + 22,
        y: 48,
        width: dims.width * scale,
        height: dims.height * scale,
      });
    } catch (error) {
      console.error("Erreur signature visa PREVENSIA :", error);
    }
  }

  drawCell(page, "Référence dossier", pageWidth - margin - 180, 86, 180, 18, {
    font: fontBold,
    size: 8.3,
    borderColor: colors.line,
    fillColor: colors.softGrey,
    verticalAlign: "middle",
  });
  drawCell(page, attestationId, pageWidth - margin - 180, 34, 180, 52, {
    font: fontBold,
    size: 11,
    borderColor: colors.line,
    align: "center",
    verticalAlign: "middle",
  });
}

export async function generateAttestationPdf(input: AttestationPdfInput) {
  const {
    userId,
    formation,
    date = new Date().toISOString(),
    score = 0,
    total = 0,
    scorePercent = 0,
    passingScore,
    passed,
    companyName = "",
    employeeFirstName = "",
    employeeLastName = "",
    learnerEmail = "",
  } = input;

  const learnerFullName =
    [employeeFirstName?.trim(), employeeLastName?.trim()]
      .filter(Boolean)
      .join(" ")
      .trim() || learnerEmail || "À compléter";

  const employerName = companyName?.trim() || "À compléter";
  const validationDate = formatDateFr(date);
  const issueDate = new Date().toLocaleDateString("fr-FR");
  const attestationId = shortAttestationId(userId);
  const suggestedRows = getSuggestedRows(formation);
  const frameText = getFormationFrameLabel(formation);
  const hasQuizResult = Number.isFinite(total) && total > 0;
  const effectivePassingScore =
    typeof passingScore === "number" && Number.isFinite(passingScore)
      ? passingScore
      : hasQuizResult
        ? Math.ceil(total * 0.7)
        : 0;
  const didPass =
    typeof passed === "boolean"
      ? passed
      : hasQuizResult
        ? score >= effectivePassingScore
        : true;
  const resultText = hasQuizResult
    ? `${score} / ${total} (${scorePercent}%)`
    : "Validation administrative";
  const successText = didPass ? "OUI" : "NON";

  const pdfDoc = await PDFDocument.create();
  const pageOne = pdfDoc.addPage([595.28, 841.89]);
  const pageTwo = pdfDoc.addPage([595.28, 841.89]);

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const colors = {
    page: rgb(1, 1, 1),
    text: rgb(0.08, 0.08, 0.08),
    muted: rgb(0.33, 0.33, 0.33),
    brand: rgb(0.12, 0.27, 0.53),
    line: rgb(0.18, 0.18, 0.18),
    softBlue: rgb(0.92, 0.96, 0.99),
    softGrey: rgb(0.96, 0.96, 0.96),
    pale: rgb(0.985, 0.985, 0.985),
  };

  const logoBuffer = await loadLogoBuffer();
  const signatureBuffer = await loadSignatureBuffer();
  let logoImage: PDFImage | null = null;
  let signatureImage: PDFImage | null = null;

  if (logoBuffer) {
    try {
      logoImage =
        logoBuffer[0] === 0x89
          ? await pdfDoc.embedPng(logoBuffer)
          : await pdfDoc.embedJpg(logoBuffer);
    } catch (error) {
      console.error("Erreur embed logo PDF :", error);
      logoImage = null;
    }
  }

  if (signatureBuffer) {
    try {
      signatureImage =
        signatureBuffer[0] === 0x89
          ? await pdfDoc.embedPng(signatureBuffer)
          : await pdfDoc.embedJpg(signatureBuffer);
    } catch (error) {
      console.error("Erreur embed signature PDF :", error);
      signatureImage = null;
    }
  }

  drawFirstPage({
    page: pageOne,
    fontRegular,
    fontBold,
    colors,
    logoImage,
    attestationId,
    issueDate,
    validationDate,
    learnerFullName,
    employerName,
    formation,
    suggestedRows,
  });

  drawSuccessPage({
    page: pageTwo,
    fontRegular,
    fontBold,
    colors,
    logoImage,
    signatureImage,
    attestationId,
    validationDate,
    learnerFullName,
    employerName,
    formation,
    resultText,
    successText,
    frameText,
  });

  const pdfBytes = await pdfDoc.save();
  const pdfBuffer = Buffer.from(pdfBytes);

  const safeFileName = sanitizeFileName(
    `dossier-habilitation-${formation}-${learnerFullName || "apprenant"}`
  );

  return {
    pdfBuffer,
    safeFileName,
    learnerFullName,
    attestationId,
  };
}
