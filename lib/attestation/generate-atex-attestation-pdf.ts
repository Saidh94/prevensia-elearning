/**
 * Générateur d'Attestation de Formation ATEX — PREVENSIA FORMATION
 *
 * Format : 2 pages A4
 *  - Page 1 : Attestation de formation ATEX (Niveaux 1 / 2 / 3)
 *             Zones couvertes, périmètre d'intervention, références réglementaires
 *  - Page 2 : Fiche de réussite parcours ATEX
 *
 * Références réglementaires : Directive 1999/92/CE (ATEX 137),
 * Code du travail R.4227-46 et s., Décret n° 2002-1553 du 24 décembre 2002.
 * PREVENSIA FORMATION n'est pas organisme certificateur ISM-ATEX / INERIS.
 * Ce document est une attestation de formation interne.
 */

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
import type { AttestationPdfInput } from "./generate-attestation-pdf";

// ─── Helpers texte / fichier ───────────────────────────────────────────────────

function sp(text: string): string {
  return text
    .replace(/œ/g, "oe").replace(/Œ/g, "Oe")
    .replace(/æ/g, "ae").replace(/Æ/g, "Ae")
    .replace(/€/g, "EUR")
    .replace(/[–—]/g, "-")
    .replace(/['']/g, "'").replace(/[""]/g, '"')
    .replace(/…/g, "...");
}

export function sanitizeAtexFileName(value: string): string {
  return value
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9-_]+/g, "-").replace(/-+/g, "-")
    .replace(/^-|-$/g, "").toLowerCase();
}

function fmtDate(value?: string): string {
  if (!value) return new Date().toLocaleDateString("fr-FR");
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? value : d.toLocaleDateString("fr-FR");
}

function addYearsFr(dateStr: string, years: number): string {
  let d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) {
    const p = dateStr.split("/");
    if (p.length === 3)
      d = new Date(`${p[2]}-${p[1].padStart(2, "0")}-${p[0].padStart(2, "0")}`);
  }
  if (Number.isNaN(d.getTime())) return dateStr;
  d.setFullYear(d.getFullYear() + years);
  return d.toLocaleDateString("fr-FR");
}

function atexRef(userId: string): string {
  const d = new Date();
  const yy = String(d.getFullYear()).slice(-2);
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `PF-ATEX-${yy}${mm}${dd}-${userId.slice(0, 4).toUpperCase()}`;
}

// ─── Primitives PDF ────────────────────────────────────────────────────────────

function wrapText(text: string, maxW: number, font: PDFFont, size: number): string[] {
  const result: string[] = [];
  for (const seg of text.split("\n")) {
    const words = seg.split(/\s+/).filter(Boolean);
    if (!words.length) { result.push(""); continue; }
    let line = "";
    for (const w of words) {
      const test = line ? `${line} ${w}` : w;
      if (font.widthOfTextAtSize(test, size) <= maxW) { line = test; }
      else { if (line) result.push(line); line = w; }
    }
    if (line) result.push(line);
  }
  return result;
}

type CO = {
  font: PDFFont;
  size?: number;
  color?: ReturnType<typeof rgb>;
  bg?: ReturnType<typeof rgb>;
  border?: ReturnType<typeof rgb>;
  bw?: number;
  align?: "left" | "center" | "right";
  px?: number;
  lh?: number;
  va?: "top" | "middle";
};

function cell(
  page: PDFPage, text: string,
  x: number, y: number, w: number, h: number,
  o: CO
) {
  const {
    font, size = 8.5,
    color = rgb(0.08, 0.08, 0.08),
    bg, border = rgb(0.2, 0.2, 0.2), bw = 0.8,
    align = "left", px = 5, lh = size + 2, va = "middle",
  } = o;
  page.drawRectangle({ x, y, width: w, height: h, color: bg, borderColor: border, borderWidth: bw });
  if (!text.trim()) return;
  const lines = wrapText(text, w - px * 2, font, size);
  const th = lines.length * lh;
  const sy = va === "middle" ? y + (h + th) / 2 - lh : y + h - 4 - size;
  lines.forEach((line, i) => {
    const lw = font.widthOfTextAtSize(line, size);
    let tx = x + px;
    if (align === "center") tx = x + (w - lw) / 2;
    else if (align === "right") tx = x + w - px - lw;
    page.drawText(line, { x: tx, y: sy - i * lh, size, font, color });
  });
}

function hline(
  page: PDFPage,
  x1: number, y: number, x2: number,
  c: ReturnType<typeof rgb>, t = 0.8
) {
  page.drawLine({ start: { x: x1, y }, end: { x: x2, y }, color: c, thickness: t });
}

function vline(
  page: PDFPage,
  x: number, y1: number, y2: number,
  c: ReturnType<typeof rgb>, t = 0.8
) {
  page.drawLine({ start: { x, y: y1 }, end: { x, y: y2 }, color: c, thickness: t });
}

// ─── Assets ────────────────────────────────────────────────────────────────────

async function loadAsset(paths: string[]): Promise<Buffer | null> {
  for (const p of paths) {
    try { return await fs.readFile(path.join(process.cwd(), p)); } catch { /* next */ }
  }
  return null;
}

const loadLogo = () => loadAsset([
  "public/images/logo-prevensia.png",
  "public/images/logo-prevensia-formation.jpg",
  "public/images/logo-prevensia.jpg",
]);
const loadSig = () => loadAsset([
  "public/images/signature-prevensia.png",
  "public/images/signature-prevensia.jpg",
]);

// ─── Configuration par niveau ATEX ────────────────────────────────────────────

export type AtexLevel = 1 | 2 | 3;

export function isAtexFormation(formation: string): boolean {
  return formation.toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .includes("atex");
}

export function detectAtexLevel(formation: string): AtexLevel {
  const n = formation.toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "");
  if (
    n.includes("niveau3") || n.includes("niveau 3") || n.includes("niveau-3") ||
    n.includes("niv3") || n.includes("niv. 3") ||
    n.includes("charge") || n.includes("responsable")
  ) return 3;
  if (
    n.includes("niveau2") || n.includes("niveau 2") || n.includes("niveau-2") ||
    n.includes("niv2") || n.includes("niv. 2") ||
    n.includes("travailleur") || n.includes("expose")
  ) return 2;
  return 1;
}

type ZoneLine  = { cat: string; zones: string };
type IntervLine = { label: string; ok: boolean };

type LevelCfg = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  validityYears: number;
  zones: ZoneLine[];
  interventions: IntervLine[];
};

const LEVEL_CFG: Record<AtexLevel, LevelCfg> = {
  1: {
    badge: "N1",
    title: "ATEX NIVEAU 1",
    subtitle: "Sensibilisation — Atmosphères explosives",
    description:
      "Sensibilisation aux risques liés aux atmosphères explosives. " +
      "Personnel amené à circuler ou à travailler ponctuellement dans un " +
      "environnement susceptible de présenter un risque d'explosion " +
      "(industrie chimique, pétrochimique, agroalimentaire, métallurgie…).",
    validityYears: 3,
    zones: [
      { cat: "Gaz / vapeurs inflammables",  zones: "Zone 1  —  Zone 2" },
      { cat: "Poussières combustibles",     zones: "Zone 21  —  Zone 22" },
    ],
    interventions: [
      { label: "Circuler en zones ATEX classées",                                    ok: true  },
      { label: "Identifier la signalisation réglementaire ATEX",                     ok: true  },
      { label: "Respecter les consignes et règles de comportement en zone ATEX",     ok: true  },
      { label: "Utiliser des EPI antistatiques certifiés Ex",                        ok: true  },
      { label: "Exécuter des travaux sur équipements en zone classée",               ok: false },
      { label: "Appliquer des permis de travail ou autorisations ATEX",              ok: false },
      { label: "Diriger ou superviser des interventions en zone ATEX",               ok: false },
      { label: "Élaborer ou valider un plan de prévention / DRPE",                  ok: false },
    ],
  },
  2: {
    badge: "N2",
    title: "ATEX NIVEAU 2",
    subtitle: "Travailleur exposé — Zone classée",
    description:
      "Travailleur intervenant régulièrement en zone ATEX classée. " +
      "Habilité à exécuter des travaux conformément aux plans de prévention " +
      "et sous respect du Document Relatif à la Protection contre les Explosions (DRPE). " +
      "Recyclage recommandé tous les 3 ans.",
    validityYears: 3,
    zones: [
      { cat: "Gaz / vapeurs inflammables",  zones: "Zone 1  —  Zone 2" },
      { cat: "Poussières combustibles",     zones: "Zone 21  —  Zone 22" },
    ],
    interventions: [
      { label: "Circuler en zones ATEX classées",                                    ok: true  },
      { label: "Respecter les consignes et règles de comportement en zone ATEX",     ok: true  },
      { label: "Utiliser des EPI antistatiques certifiés Ex",                        ok: true  },
      { label: "Exécuter des travaux sur équipements en zone classée",               ok: true  },
      { label: "Appliquer les permis de travail et autorisations ATEX",              ok: true  },
      { label: "Diriger ou superviser des interventions en zone ATEX",               ok: false },
      { label: "Élaborer ou valider le DRPE",                                        ok: false },
    ],
  },
  3: {
    badge: "N3",
    title: "ATEX NIVEAU 3",
    subtitle: "Chargé de travaux — Responsable ATEX",
    description:
      "Encadrant et responsable de travaux en zone ATEX. " +
      "Habilité à superviser les interventions, élaborer et valider " +
      "les plans de prévention ainsi que le Document Relatif à la Protection " +
      "contre les Explosions (DRPE). Recyclage recommandé tous les 3 ans.",
    validityYears: 3,
    zones: [
      { cat: "Gaz / vapeurs inflammables",  zones: "Zone 0  —  Zone 1  —  Zone 2" },
      { cat: "Poussières combustibles",     zones: "Zone 20  —  Zone 21  —  Zone 22" },
    ],
    interventions: [
      { label: "Circuler en zones ATEX classées",                                          ok: true },
      { label: "Utiliser des EPI antistatiques certifiés Ex",                              ok: true },
      { label: "Exécuter des travaux sur équipements en zone classée",                     ok: true },
      { label: "Diriger et superviser des interventions en zone ATEX",                     ok: true },
      { label: "Établir et valider des plans de prévention et permis de travail ATEX",     ok: true },
      { label: "Élaborer ou faire évoluer le DRPE",                                        ok: true },
      { label: "Coordonner les entreprises extérieures en zone classée",                   ok: true },
    ],
  },
};

// ─── Page 1 : Avis d'habilitation ─────────────────────────────────────────────

function drawPage1(p: {
  page: PDFPage; R: PDFFont; B: PDFFont;
  C: Record<string, ReturnType<typeof rgb>>;
  logo: PDFImage | null;
  ref: string; issueDate: string; validationDate: string; validityDate: string;
  learner: string; employer: string; formation: string;
  level: AtexLevel;
}) {
  const { page, R, B, C, logo, ref, issueDate, validationDate, validityDate, learner, employer, formation, level } = p;
  const cfg = LEVEL_CFG[level];
  const W = page.getWidth();   // 595.28
  const H = page.getHeight();  // 841.89
  const m = 22;
  const cw = W - m * 2;        // ≈ 551

  // Fond blanc + cadre extérieur
  page.drawRectangle({ x: 0, y: 0, width: W, height: H, color: C.page });
  page.drawRectangle({ x: m, y: m, width: cw, height: H - m * 2, borderColor: C.line, borderWidth: 1.1 });

  // ── En-tête ──────────────────────────────────────────────────────────────────
  const hY = H - 84;
  const hH = 62;
  const logoW = 190, metaW = 150, titleW = cw - logoW - metaW;

  page.drawRectangle({ x: m, y: hY, width: cw, height: hH, color: C.softGrey, borderColor: C.line, borderWidth: 1.1 });
  page.drawRectangle({ x: m, y: hY, width: logoW, height: hH, color: C.page });
  vline(page, m + logoW, hY, hY + hH, C.line, 1.1);
  vline(page, m + logoW + titleW, hY, hY + hH, C.line, 1.1);
  page.drawRectangle({ x: m + logoW + titleW, y: hY, width: metaW, height: hH, color: rgb(0.985, 0.988, 0.995) });

  page.drawText(sp("ATTESTATION DE FORMATION ATEX"), {
    x: m + logoW + 10, y: hY + 39, size: 13, font: B, color: C.text,
  });
  page.drawText(sp("Directive 1999/92/CE (ATEX 137)"), {
    x: m + logoW + 10, y: hY + 23, size: 7.5, font: R, color: C.muted,
  });
  page.drawText(sp("Code du travail — Art. R.4227-46 et suivants"), {
    x: m + logoW + 10, y: hY + 12, size: 7, font: R, color: C.muted,
  });
  cell(page, sp(`Référence : ${ref}\nÉdité le : ${issueDate}`),
    m + logoW + titleW, hY, metaW, hH,
    { font: R, size: 7.5, align: "right", border: C.line, bw: 1.1, bg: rgb(0.985, 0.988, 0.995), va: "middle", lh: 10 }
  );

  if (logo) {
    try {
      const d = logo.scale(1);
      const s = Math.min((logoW - 14) / d.width, (hH - 14) / d.height);
      page.drawImage(logo, {
        x: m + (logoW - d.width * s) / 2,
        y: hY + (hH - d.height * s) / 2,
        width: d.width * s, height: d.height * s,
      });
    } catch { /* no-op */ }
  }

  // ── Badge niveau ─────────────────────────────────────────────────────────────
  const badgeY = H - 166;
  const badgeH = 52;
  const accentW = 96;

  page.drawRectangle({ x: m, y: badgeY, width: cw, height: badgeH, color: C.atexLight, borderColor: C.line, borderWidth: 1.1 });
  page.drawRectangle({ x: m, y: badgeY, width: accentW, height: badgeH, color: C.atex });
  vline(page, m + accentW, badgeY, badgeY + badgeH, C.line, 1.1);

  const bLetterW = B.widthOfTextAtSize(cfg.badge, 27);
  page.drawText(cfg.badge, { x: m + (accentW - bLetterW) / 2, y: badgeY + 15, size: 27, font: B, color: rgb(1, 1, 1) });

  const titleX = m + accentW + 14;
  page.drawText(sp(cfg.title), { x: titleX, y: badgeY + 31, size: 15, font: B, color: C.text });
  page.drawText(sp(cfg.subtitle), { x: titleX, y: badgeY + 14, size: 9, font: R, color: C.muted });

  // ── Grille identité ───────────────────────────────────────────────────────────
  let y = badgeY - 8;
  const col1 = Math.round(cw * 0.40);
  const col2 = Math.round(cw * 0.32);
  const col3 = cw - col1 - col2;
  const lbH = 18, valH = 26;

  // Étiquettes
  cell(page, sp("Titulaire"), m, y - lbH, col1, lbH,
    { font: R, size: 7, color: C.muted, border: C.line, bg: C.softGrey });
  cell(page, sp("Entreprise / Affectation"), m + col1, y - lbH, col2, lbH,
    { font: R, size: 7, color: C.muted, border: C.line, bg: C.softGrey });
  cell(page, sp("Validité (3 ans)"), m + col1 + col2, y - lbH, col3, lbH,
    { font: R, size: 7, color: C.muted, border: C.line, bg: C.softGrey });
  y -= lbH;

  // Valeurs
  cell(page, learner, m, y - valH, col1, valH,
    { font: B, size: 11, border: C.line, va: "middle" });
  cell(page, employer, m + col1, y - valH, col2, valH,
    { font: B, size: 9.5, border: C.line, va: "middle" });
  cell(page, sp(`${validationDate}  au  ${validityDate}`), m + col1 + col2, y - valH, col3, valH,
    { font: B, size: 8.2, border: C.line, va: "middle" });
  y -= valH;

  // ── Zones ATEX ───────────────────────────────────────────────────────────────
  y -= 8;
  const zSecH = 20, zColH = 18, zRowH = 27;
  const zCatW = 162;

  cell(page, sp("ZONES ATEX COUVERTES PAR L'HABILITATION"), m, y - zSecH, cw, zSecH,
    { font: B, size: 8.5, border: C.line, bg: C.navyLight, va: "middle" });
  y -= zSecH;

  cell(page, sp("Catégorie"), m, y - zColH, zCatW, zColH,
    { font: B, size: 8, border: C.line, bg: C.softGrey, va: "middle" });
  cell(page, sp("Zones couvertes"), m + zCatW, y - zColH, cw - zCatW, zColH,
    { font: B, size: 8, border: C.line, bg: C.softGrey, align: "center", va: "middle" });
  y -= zColH;

  for (const zr of cfg.zones) {
    cell(page, sp(zr.cat), m, y - zRowH, zCatW, zRowH,
      { font: R, size: 8.5, border: C.line, va: "middle" });
    cell(page, sp(zr.zones), m + zCatW, y - zRowH, cw - zCatW, zRowH,
      { font: B, size: 9.5, border: C.line, bg: C.atexLight, align: "center", va: "middle" });
    y -= zRowH;
  }

  // ── Périmètre d'intervention ──────────────────────────────────────────────────
  y -= 8;
  const iSecH = 20, iColH = 18, iRowH = 22;
  const iLabelW = cw - 68;

  cell(page, sp("PÉRIMÈTRE D'INTERVENTION AUTORISÉ"), m, y - iSecH, cw, iSecH,
    { font: B, size: 8.5, border: C.line, bg: C.navyLight, va: "middle" });
  y -= iSecH;

  cell(page, sp("Opération"), m, y - iColH, iLabelW, iColH,
    { font: B, size: 8, border: C.line, bg: C.softGrey, va: "middle" });
  cell(page, sp("Autorisé"), m + iLabelW, y - iColH, 68, iColH,
    { font: B, size: 8, border: C.line, bg: C.softGrey, align: "center", va: "middle" });
  y -= iColH;

  for (const iv of cfg.interventions) {
    const okBg  = iv.ok ? rgb(0.90, 0.97, 0.91) : rgb(0.99, 0.94, 0.94);
    const okCol = iv.ok ? rgb(0.06, 0.44, 0.20) : rgb(0.72, 0.16, 0.16);
    cell(page, sp(iv.label), m, y - iRowH, iLabelW, iRowH,
      { font: R, size: 7.8, border: C.line, va: "middle" });
    cell(page, iv.ok ? "OUI" : "NON", m + iLabelW, y - iRowH, 68, iRowH,
      { font: B, size: 9.5, align: "center", border: C.line, color: okCol, bg: okBg, va: "middle" });
    y -= iRowH;
  }

  // ── Références réglementaires ─────────────────────────────────────────────────
  y -= 8;
  const refsH = 50;
  cell(page,
    sp(
      "Références réglementaires : Directive 1999/92/CE (ATEX 137) — Directive 2014/34/UE (ATEX 114) — " +
      "Code du travail, art. R.4227-46 à R.4227-54 — " +
      "Décret n° 2002-1553 du 24 décembre 2002."
    ),
    m, y - refsH, cw, refsH,
    { font: R, size: 7.4, border: C.line, bg: C.pale, lh: 9.2, va: "middle" }
  );
  y -= refsH;

  // ── Disclaimer ────────────────────────────────────────────────────────────────
  y -= 6;
  const discH = 48;
  cell(page,
    sp(
      `Cette attestation est délivrée à l'issue de la validation théorique du parcours PREVENSIA FORMATION ` +
      `le ${validationDate}. Elle ne constitue pas une certification ISM-ATEX ni une habilitation formelle. ` +
      `La décision d'autoriser un salarié à intervenir en zone ATEX appartient exclusivement à l'employeur, ` +
      `en fonction de l'analyse des risques du poste, des conditions réelles d'intervention et du DRPE en vigueur.`
    ),
    m, y - discH, cw, discH,
    { font: R, size: 7.1, border: C.line, bg: rgb(0.99, 0.97, 0.90), lh: 8.6, va: "middle" }
  );

  // ── Signatures (ancrées en bas) ───────────────────────────────────────────────
  const sigCY = 58, sigHY = sigCY + 58;
  const sL = 160, sC = 248, sR = cw - sL - sC;

  cell(page, sp("Signature du titulaire"), m, sigHY, sL, 18,
    { font: B, size: 8.4, border: C.line, bg: C.softGrey, va: "middle" });
  cell(page, sp("L'employeur"), m + sL, sigHY, sC, 18,
    { font: B, size: 8.4, border: C.line, bg: C.softGrey, va: "middle" });
  cell(page, "Signature", m + sL + sC, sigHY, sR, 18,
    { font: B, size: 8.4, border: C.line, bg: C.softGrey, va: "middle" });

  cell(page, learner, m, sigCY, sL, 58,
    { font: B, size: 10.8, border: C.line, align: "center", va: "middle" });
  cell(page, sp("Raison sociale :"), m + sL, sigCY + 28, 76, 30,
    { font: R, size: 8.1, border: C.line, va: "middle" });
  cell(page, employer, m + sL + 76, sigCY + 28, sC - 76, 30,
    { font: B, size: 9.1, border: C.line, va: "middle" });
  cell(page, sp("Fonction :"), m + sL, sigCY, 76, 28,
    { font: R, size: 8.1, border: C.line, va: "middle" });
  cell(page, sp("À compléter"), m + sL + 76, sigCY, sC - 76, 28,
    { font: B, size: 9.1, border: C.line, va: "middle" });
  cell(page, "", m + sL + sC, sigCY, sR, 58,
    { font: R, size: 8, border: C.line });
  hline(page, m + sL + sC + 12, sigCY + 16, m + sL + sC + sR - 12, C.line);

  // Pied de page
  page.drawText("PREVENSIA FORMATION", { x: m, y: 20, size: 7.1, font: B, color: C.brand });
  page.drawText(sp(`Référence : ${ref}`), { x: m, y: 10, size: 6.6, font: R, color: C.muted });
  const formW = R.widthOfTextAtSize(sp(formation), 6.6);
  page.drawText(sp(formation), { x: W - m - formW, y: 10, size: 6.6, font: R, color: C.muted });
}

// ─── Page 2 : Fiche de réussite ATEX ──────────────────────────────────────────

function drawPage2(p: {
  page: PDFPage; R: PDFFont; B: PDFFont;
  C: Record<string, ReturnType<typeof rgb>>;
  logo: PDFImage | null; sig: PDFImage | null;
  ref: string; validationDate: string;
  learner: string; employer: string; formation: string;
  resultText: string; successText: string;
  level: AtexLevel;
}) {
  const { page, R, B, C, logo, sig, ref, validationDate, learner, employer, formation, resultText, successText, level } = p;
  const cfg = LEVEL_CFG[level];
  const W = page.getWidth();
  const H = page.getHeight();
  const m = 34;
  const cw = W - m * 2;

  page.drawRectangle({ x: 18, y: 18, width: W - 36, height: H - 36, borderColor: C.line, borderWidth: 1, color: C.page });

  // Bande en-tête ambrée (couleur distinctive ATEX vs bleu marine électrique)
  page.drawRectangle({ x: m, y: H - 126, width: cw, height: 90, color: C.atex });

  if (logo) {
    try {
      const d = logo.scale(1);
      const s = Math.min(190 / d.width, 66 / d.height);
      const cx = m + cw / 2, cy = H - 126 + 45;
      const pw = d.width * s / 2, ph = d.height * s / 2;
      page.drawRectangle({ x: cx - pw - 8, y: cy - ph - 5, width: pw * 2 + 16, height: ph * 2 + 10, color: C.page });
      page.drawImage(logo, { x: cx - pw, y: cy - ph, width: d.width * s, height: d.height * s });
    } catch { /* no-op */ }
  }

  page.drawText(sp("FICHE DE RÉUSSITE"), {
    x: m + 10, y: H - 72, size: 10, font: B, color: rgb(1, 1, 1),
  });

  // Boîte référence (coin droit de la bande)
  const rbW = 144, rbX = W - m - rbW, rbH = 58;
  const rbY = H - 126 + (90 - rbH) / 2;
  cell(page, sp(`Référence : ${ref}\nDate de réussite : ${validationDate}`),
    rbX, rbY, rbW, rbH,
    { font: R, size: 7.8, color: rgb(1, 1, 1), border: rgb(1, 1, 1), bw: 0.8, align: "right", va: "middle", lh: 10 }
  );

  // Titre principal
  const bigTitle = sp("VALIDATION THÉORIQUE DU PARCOURS ATEX");
  page.drawText(bigTitle, {
    x: (W - B.widthOfTextAtSize(bigTitle, 20)) / 2,
    y: H - 165, size: 20, font: B, color: C.atex,
  });

  const sub = sp(`Attestation de formation PREVENSIA — ${cfg.title}`);
  page.drawText(sub, {
    x: (W - R.widthOfTextAtSize(sub, 9)) / 2,
    y: H - 183, size: 9, font: R, color: C.muted,
  });

  // Grille identité
  cell(page, sp("Apprenant"),  m, H - 280, 120, 22, { font: R, size: 8.2, border: C.line });
  cell(page, learner,          m + 120, H - 280, cw - 120, 22, { font: B, size: 10.4, border: C.line });
  cell(page, sp("Formation"),  m, H - 308, 120, 28, { font: R, size: 8.2, border: C.line });
  cell(page, formation,        m + 120, H - 308, cw - 120, 28, { font: B, size: 9.5, border: C.line, va: "middle" });
  cell(page, sp("Entreprise"), m, H - 336, 120, 22, { font: R, size: 8.2, border: C.line });
  cell(page, employer,         m + 120, H - 336, cw - 120, 22, { font: B, size: 10, border: C.line });

  // 3 boîtes résultat
  const boxY = H - 452;
  const gap = 12;
  const bw3 = (cw - gap * 2) / 3;

  cell(page, sp("Réussite"), m, boxY, bw3, 80, { font: R, size: 8.2, border: C.line, bg: C.pale, va: "top" });
  cell(page, successText, m + 8, boxY + 10, bw3 - 16, 42,
    { font: B, size: 18,
      color: successText === "OUI" ? rgb(0.06, 0.44, 0.20) : rgb(0.72, 0.16, 0.16),
      border: C.pale, bg: C.pale, align: "center", va: "middle" });

  cell(page, sp("Résultat obtenu"), m + bw3 + gap, boxY, bw3, 80,
    { font: R, size: 8.2, border: C.line, bg: C.pale, va: "top" });
  cell(page, resultText, m + bw3 + gap + 8, boxY + 10, bw3 - 16, 44,
    { font: B, size: 11.5, border: C.pale, bg: C.pale, align: "center", va: "middle", lh: 13 });

  cell(page, sp("Niveau ATEX"), m + (bw3 + gap) * 2, boxY, bw3, 80,
    { font: R, size: 8.2, border: C.line, bg: C.pale, va: "top" });
  cell(page, sp(cfg.title), m + (bw3 + gap) * 2 + 8, boxY + 10, bw3 - 16, 44,
    { font: B, size: 11, color: C.atex, border: C.pale, bg: C.pale, align: "center", va: "middle", lh: 13 });

  // Description du niveau
  cell(page, sp(cfg.description), m, boxY - 12 - 60, cw, 60,
    { font: R, size: 8.2, border: C.line, bg: rgb(0.99, 0.97, 0.91), lh: 10, va: "middle" });

  // Disclaimer
  cell(page,
    sp(
      "Cette attestation certifie la réussite à l'évaluation théorique du parcours de formation ATEX " +
      "dispensé par PREVENSIA FORMATION. Elle ne constitue pas une certification ISM-ATEX, ni une " +
      "habilitation formelle, ni un titre délivré par un organisme accrédité INERIS. " +
      "L'autorisation d'intervenir en zone ATEX relève exclusivement de la décision de l'employeur, " +
      "en fonction du DRPE et de l'analyse des risques du poste."
    ),
    m, 168, cw, 74,
    { font: R, size: 8.4, border: C.line, bg: C.softGrey, lh: 10.5, va: "middle" }
  );

  // Visa PREVENSIA
  cell(page, sp("Visa PREVENSIA FORMATION"), m, 86, 210, 18,
    { font: B, size: 8.3, border: C.line, bg: C.softGrey, va: "middle" });
  cell(page, "", m, 34, 210, 52, { font: R, size: 8, border: C.line });
  hline(page, m + 12, 48, m + 198, C.line);

  if (sig) {
    try {
      const d = sig.scale(1);
      const s = Math.min(160 / d.width, 28 / d.height);
      page.drawImage(sig, { x: m + 22, y: 48, width: d.width * s, height: d.height * s });
    } catch { /* no-op */ }
  }

  // Référence dossier
  cell(page, sp("Référence dossier"), W - m - 180, 86, 180, 18,
    { font: B, size: 8.3, border: C.line, bg: C.softGrey, va: "middle" });
  cell(page, ref, W - m - 180, 34, 180, 52,
    { font: B, size: 11, border: C.line, align: "center", va: "middle" });
}

// ─── Export principal ──────────────────────────────────────────────────────────

export async function generateAtexAttestationPdf(input: AttestationPdfInput) {
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

  const learner = sp(
    [employeeFirstName?.trim(), employeeLastName?.trim()]
      .filter(Boolean).join(" ").trim() || learnerEmail || "A compléter"
  );
  const employer      = sp(companyName?.trim() || "A compléter");
  const safeFormation = sp(formation);
  const validationDate = fmtDate(date);
  const issueDate      = new Date().toLocaleDateString("fr-FR");
  const ref            = atexRef(userId);
  const level          = detectAtexLevel(formation);
  const cfg            = LEVEL_CFG[level];
  const validityDate   = addYearsFr(validationDate, cfg.validityYears);

  const hasQuiz = Number.isFinite(total) && total > 0;
  const effPassing =
    typeof passingScore === "number" && Number.isFinite(passingScore)
      ? passingScore
      : hasQuiz ? Math.ceil(total * 0.7) : 0;
  const didPass =
    typeof passed === "boolean" ? passed : hasQuiz ? score >= effPassing : true;

  const resultText  = hasQuiz ? `${score} / ${total} (${scorePercent}%)` : sp("Validation administrative");
  const successText = didPass ? "OUI" : "NON";

  // Création du document PDF
  const pdfDoc = await PDFDocument.create();
  const p1 = pdfDoc.addPage([595.28, 841.89]);
  const p2 = pdfDoc.addPage([595.28, 841.89]);
  const R  = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const B  = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const C = {
    page:     rgb(1, 1, 1),
    text:     rgb(0.08, 0.08, 0.08),
    muted:    rgb(0.33, 0.33, 0.33),
    brand:    rgb(0.12, 0.27, 0.53),    // navy PREVENSIA
    line:     rgb(0.18, 0.18, 0.18),
    softGrey: rgb(0.96, 0.96, 0.96),
    pale:     rgb(0.985, 0.985, 0.985),
    atex:     rgb(0.76, 0.34, 0.04),    // ambre profond — couleur signature ATEX
    atexLight: rgb(0.99, 0.96, 0.88),   // fond ambre léger
    navyLight: rgb(0.91, 0.94, 0.98),   // fond bleu très clair pour les sections
  };

  // Chargement des assets
  const [logoBuffer, sigBuffer] = await Promise.all([loadLogo(), loadSig()]);
  let logo: PDFImage | null = null;
  let sig:  PDFImage | null = null;

  if (logoBuffer) {
    try {
      logo = logoBuffer[0] === 0x89
        ? await pdfDoc.embedPng(logoBuffer)
        : await pdfDoc.embedJpg(logoBuffer);
    } catch { /* no-op */ }
  }
  if (sigBuffer) {
    try {
      sig = sigBuffer[0] === 0x89
        ? await pdfDoc.embedPng(sigBuffer)
        : await pdfDoc.embedJpg(sigBuffer);
    } catch { /* no-op */ }
  }

  drawPage1({ page: p1, R, B, C, logo, ref, issueDate, validationDate, validityDate, learner, employer, formation: safeFormation, level });
  drawPage2({ page: p2, R, B, C, logo, sig, ref, validationDate, learner, employer, formation: safeFormation, resultText, successText, level });

  const pdfBytes   = await pdfDoc.save();
  const pdfBuffer  = Buffer.from(pdfBytes);
  const safeFileName = sanitizeAtexFileName(
    `attestation-formation-atex-${cfg.badge}-${learner || "apprenant"}`
  );

  return { pdfBuffer, safeFileName, learner, ref };
}
