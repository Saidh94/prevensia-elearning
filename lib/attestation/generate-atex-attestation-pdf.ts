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

export type AtexLevel = 0 | 1 | 2 | 3;

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
  if (
    n.includes("niveau1") || n.includes("niveau 1") || n.includes("niveau-1") ||
    n.includes("niv1") || n.includes("niv. 1") ||
    n.includes("sensibilisation")
  ) return 1;
  // "ATEX" sans numéro de niveau → Level 0 (initiation)
  return 0;
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
  0: {
    badge: "N0",
    title: "ATEX NIVEAU 0",
    subtitle: "Initiation — Personnel non exposé",
    description:
      "Initiation aux risques liés aux atmosphères explosives. " +
      "Personnel amené à traverser occasionnellement des zones ATEX " +
      "sans y réaliser de travaux. Sensibilisation aux risques et aux " +
      "comportements à adopter en présence de zones classées " +
      "(industrie chimique, pétrochimique, agroalimentaire, logistique...).",
    validityYears: 3,
    zones: [
      { cat: "Gaz / vapeurs inflammables",  zones: "Zone 2 uniquement" },
      { cat: "Poussières combustibles",     zones: "Zone 22 uniquement" },
    ],
    interventions: [
      { label: "Identifier la signalisation réglementaire ATEX",              ok: true  },
      { label: "Traverser ponctuellement une zone ATEX (Zone 2 / Zone 22)",   ok: true  },
      { label: "Respecter les consignes de comportement en zone ATEX",        ok: true  },
      { label: "Circuler de manière prolongée en zones ATEX classées",        ok: false },
      { label: "Utiliser des EPI antistatiques certifiés Ex",                 ok: false },
      { label: "Exécuter des travaux sur équipements en zone classée",        ok: false },
      { label: "Appliquer des permis de travail ou autorisations ATEX",       ok: false },
      { label: "Diriger ou superviser des interventions en zone ATEX",        ok: false },
    ],
  },
  1: {
    badge: "N1",
    title: "ATEX N0 – Sensibilisation",
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
      { label: "Élaborer ou valider un plan de prévention / DRPCE",                 ok: false },
    ],
  },
  2: {
    badge: "N2",
    title: "ATEX N1 – Intervenant",
    subtitle: "Travailleur exposé — Zone classée",
    description:
      "Travailleur intervenant régulièrement en zone ATEX classée. " +
      "Habilité à exécuter des travaux conformément aux plans de prévention " +
      "et sous respect du Document Relatif à la Protection Contre les Explosions (DRPCE). " +
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
      { label: "Élaborer ou valider le DRPCE",                                       ok: false },
    ],
  },
  3: {
    badge: "N3",
    title: "ATEX N2 – Encadrant / Référent",
    subtitle: "Chargé de travaux — Responsable ATEX",
    description:
      "Encadrant et responsable de travaux en zone ATEX. " +
      "Habilité à superviser les interventions, élaborer et valider " +
      "les plans de prévention ainsi que le Document Relatif à la Protection " +
      "Contre les Explosions (DRPCE). Recyclage recommandé tous les 3 ans.",
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
      { label: "Élaborer ou faire évoluer le DRPCE",                                       ok: true },
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
  formateur: string; nda: string;
}) {
  const { page, R, B, C, logo, ref, issueDate, validationDate, validityDate, learner, employer, formation, level, formateur, nda } = p;
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
      `en fonction de l'analyse des risques du poste, des conditions réelles d'intervention et du DRPCE en vigueur.`
    ),
    m, y - discH, cw, discH,
    { font: R, size: 7.1, border: C.line, bg: rgb(0.99, 0.97, 0.90), lh: 8.6, va: "middle" }
  );

  // ── Signatures (ancrées en bas) ───────────────────────────────────────────────
  const sigCY = 68, sigHY = sigCY + 58;
  const sL = 148, sC = 200, sR = cw - sL - sC;

  cell(page, sp("Signature du titulaire"), m, sigHY, sL, 18,
    { font: B, size: 8.4, border: C.line, bg: C.softGrey, va: "middle" });
  cell(page, sp("L'employeur"), m + sL, sigHY, sC, 18,
    { font: B, size: 8.4, border: C.line, bg: C.softGrey, va: "middle" });
  cell(page, sp("Formateur PREVENSIA"), m + sL + sC, sigHY, sR, 18,
    { font: B, size: 8.4, border: C.line, bg: C.softGrey, va: "middle" });

  cell(page, learner, m, sigCY, sL, 58,
    { font: B, size: 10.8, border: C.line, align: "center", va: "middle" });
  cell(page, sp("Raison sociale :"), m + sL, sigCY + 28, 72, 30,
    { font: R, size: 8, border: C.line, va: "middle" });
  cell(page, employer, m + sL + 72, sigCY + 28, sC - 72, 30,
    { font: B, size: 9, border: C.line, va: "middle" });
  cell(page, sp("Fonction :"), m + sL, sigCY, 72, 28,
    { font: R, size: 8, border: C.line, va: "middle" });
  cell(page, sp(""), m + sL + 72, sigCY, sC - 72, 28,
    { font: B, size: 9, border: C.line, va: "middle" });
  // Bloc formateur
  cell(page, sp(formateur || "— à compléter —"),
    m + sL + sC, sigCY, sR, 58,
    { font: formateur ? B : R, size: 9, border: C.line, align: "center", va: "middle",
      color: formateur ? C.text : C.muted });
  if (formateur) {
    const fLabel = sp("PREVENSIA FORMATION");
    const fLabelW = R.widthOfTextAtSize(fLabel, 6.5);
    page.drawText(fLabel, {
      x: m + sL + sC + (sR - fLabelW) / 2,
      y: sigCY + 6, size: 6.5, font: R, color: C.muted,
    });
  }

  // Pied de page
  const footerY1 = 24, footerY2 = 14, footerY3 = 6;
  page.drawText(sp("PREVENSIA FORMATION  |  33, avenue Philippe Auguste — 75011 Paris"), {
    x: m, y: footerY1, size: 7, font: B, color: C.brand,
  });
  const contactLine = sp("Tél. 01 89 62 94 92  |  contact@prevensia-formation.fr");
  page.drawText(contactLine, { x: m, y: footerY2, size: 6.5, font: R, color: C.muted });
  if (nda) {
    const ndaText = sp(`N° déclaration d'activité : ${nda}`);
    const ndaW = R.widthOfTextAtSize(ndaText, 6.5);
    page.drawText(ndaText, { x: W - m - ndaW, y: footerY2, size: 6.5, font: R, color: C.muted });
  }
  page.drawText(sp(`Réf. : ${ref}`), { x: m, y: footerY3, size: 6.3, font: R, color: C.muted });
  const formW = R.widthOfTextAtSize(sp(formation), 6.3);
  page.drawText(sp(formation), { x: W - m - formW, y: footerY3, size: 6.3, font: R, color: C.muted });
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
  formateur: string; nda: string;
}) {
  const { page, R, B, C, logo, sig, ref, validationDate, learner, employer, formation, resultText, successText, level, formateur, nda } = p;
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
      "en fonction du DRPCE et de l'analyse des risques du poste."
    ),
    m, 168, cw, 74,
    { font: R, size: 8.4, border: C.line, bg: C.softGrey, lh: 10.5, va: "middle" }
  );

  // ── Zone signature / visa / tampon ──────────────────────────────────────────
  const visaAreaY = 34;
  const visaAreaH = 70;
  const sigBlockW = 190;
  const formateurW = 175;
  const stampW     = cw - sigBlockW - formateurW - 16;

  // Bloc visa PREVENSIA (signature)
  cell(page, sp("Visa PREVENSIA FORMATION"), m, visaAreaY + visaAreaH, sigBlockW, 18,
    { font: B, size: 8.3, border: C.line, bg: C.softGrey, va: "middle" });
  cell(page, "", m, visaAreaY, sigBlockW, visaAreaH, { font: R, size: 8, border: C.line });
  hline(page, m + 10, visaAreaY + 20, m + sigBlockW - 10, C.line);
  if (sig) {
    try {
      const d = sig.scale(1);
      const s = Math.min((sigBlockW - 24) / d.width, 28 / d.height);
      page.drawImage(sig, { x: m + 12, y: visaAreaY + 22, width: d.width * s, height: d.height * s });
    } catch { /* no-op */ }
  }

  // Bloc formateur
  const fX = m + sigBlockW + 8;
  cell(page, sp("Formateur PREVENSIA"), fX, visaAreaY + visaAreaH, formateurW, 18,
    { font: B, size: 8.3, border: C.line, bg: C.softGrey, va: "middle" });
  cell(page, sp(formateur || "— à compléter —"), fX, visaAreaY, formateurW, visaAreaH,
    { font: formateur ? B : R, size: 9.5, border: C.line, align: "center", va: "middle",
      color: formateur ? C.text : C.muted });

  // ── Tampon PREVENSIA — design rectangulaire ──────────────────────────────────
  const stampX  = fX + formateurW + 8;
  const sInner  = 4;                    // padding intérieur
  const sX      = stampX + sInner;
  const sW      = stampW - sInner * 2;

  // Étiquette de colonne (même style que les deux autres blocs)
  cell(page, sp("Cachet organisme"), stampX, visaAreaY + visaAreaH, stampW, 18,
    { font: B, size: 8.3, border: C.line, bg: C.softGrey, va: "middle" });

  // Bordure extérieure du bloc
  page.drawRectangle({ x: stampX, y: visaAreaY, width: stampW, height: visaAreaH,
    borderColor: C.line, borderWidth: 0.8 });

  // Bande rouge en haut : "PREVENSIA"
  const bandH    = 18;
  const bandY    = visaAreaY + visaAreaH - bandH;
  page.drawRectangle({
    x: sX, y: bandY, width: sW, height: bandH,
    color: C.brand, borderWidth: 0,
  });
  const pLabel  = sp("PREVENSIA");
  const pLabelW = B.widthOfTextAtSize(pLabel, 9.5);
  page.drawText(pLabel, {
    x: sX + sW / 2 - pLabelW / 2,
    y: bandY + (bandH - 9.5) / 2 + 1,
    size: 9.5, font: B, color: rgb(1, 1, 1),
  });

  // Ligne "FORMATION" sous la bande rouge
  const formLabel  = sp("FORMATION");
  const formLabelW = R.widthOfTextAtSize(formLabel, 8);
  page.drawText(formLabel, {
    x: sX + sW / 2 - formLabelW / 2,
    y: bandY - 12,
    size: 8, font: R, color: C.brand,
  });

  // Ligne de séparation
  const sepY = bandY - 18;
  page.drawLine({
    start: { x: sX + 8,      y: sepY },
    end:   { x: sX + sW - 8, y: sepY },
    thickness: 0.5, color: C.brand,
  });

  // Ligne "Organisme de Formation"
  const atLabel  = sp("Organisme de Formation");
  const atLabelW = R.widthOfTextAtSize(atLabel, 7.5);
  page.drawText(atLabel, {
    x: sX + sW / 2 - atLabelW / 2,
    y: sepY - 13,
    size: 7.5, font: R, color: C.dark,
  });

  // Sous-texte : SIRET
  const siretLabel  = sp("107 290 579 00013");
  const siretLabelW = R.widthOfTextAtSize(siretLabel, 5.5);
  page.drawText(siretLabel, {
    x: sX + sW / 2 - siretLabelW / 2,
    y: visaAreaY + 6,
    size: 5.5, font: R, color: C.muted,
  });

  // Pied de page page 2
  const fp2Y1 = 22, fp2Y2 = 13, fp2Y3 = 5;
  page.drawText(sp("PREVENSIA FORMATION  |  33, avenue Philippe Auguste — 75011 Paris  |  01 89 62 94 92  |  contact@prevensia-formation.fr"), {
    x: m, y: fp2Y1, size: 6.8, font: B, color: C.brand,
  });
  if (nda) {
    page.drawText(sp(`N° déclaration d'activité : ${nda}`), {
      x: m, y: fp2Y2, size: 6.5, font: R, color: C.muted,
    });
  }
  const refLine = sp(`Référence : ${ref}`);
  const refLineW = R.widthOfTextAtSize(refLine, 6.3);
  page.drawText(refLine, { x: W - m - refLineW, y: fp2Y3, size: 6.3, font: R, color: C.muted });
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
    formateur = "",
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
  const nda            = (process.env.PREVENSIA_NDA ?? "").trim();
  const formateurName  = sp((formateur ?? "").trim());

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

  drawPage1({ page: p1, R, B, C, logo, ref, issueDate, validationDate, validityDate, learner, employer, formation: safeFormation, level, formateur: formateurName, nda });
  drawPage2({ page: p2, R, B, C, logo, sig, ref, validationDate, learner, employer, formation: safeFormation, resultText, successText, level, formateur: formateurName, nda });

  const pdfBytes   = await pdfDoc.save();
  const pdfBuffer  = Buffer.from(pdfBytes);
  const safeFileName = sanitizeAtexFileName(
    `attestation-formation-atex-n${level}-${learner || "apprenant"}`
  );

  return { pdfBuffer, safeFileName, learner, ref };
}
