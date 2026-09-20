/**
 * Générateur de Programme de formation — PREVENSIA FORMATION
 *
 * Document conforme aux mentions attendues d'un programme de formation
 * professionnelle (Code du travail Art. L.6353-1) : objectifs pédagogiques,
 * public visé et prérequis, contenu détaillé, durée, moyens pédagogiques et
 * d'encadrement, modalités d'évaluation, sanction de la formation.
 *
 * Généré dynamiquement à partir du contenu structuré de chaque module
 * e-learning (lib/supabase/elearning/*-content.ts) — pas de saisie manuelle
 * à maintenir en double.
 */

import { PDFDocument, PDFFont, StandardFonts, rgb } from "pdf-lib";
import fs from "fs/promises";
import path from "path";
import { COMPANY } from "@/lib/company";
import type { ModuleContent } from "@/lib/supabase/elearning/module-types";

/** Construit l'input du générateur de programme à partir du contenu structuré d'un module. */
export function buildProgrammeInputFromModuleContent(
  content: ModuleContent,
  formationTitleOverride?: string
): ProgrammePdfInput {
  return {
    formationTitle: formationTitleOverride?.trim() || content.title,
    subtitle: content.subtitle,
    objective: content.objective,
    audience: content.audience,
    level: content.level,
    duration: content.duration,
    deliveryFormat: content.deliveryFormat,
    certificationNote: content.certificationNote,
    sections: content.sections.map((sec) => ({
      title: sec.title,
      estimatedMinutes: sec.estimatedMinutes,
    })),
  };
}

function s(text: string): string {
  return (text ?? "")
    .replace(/œ/g, "oe").replace(/Œ/g, "Oe")
    .replace(/æ/g, "ae").replace(/Æ/g, "Ae")
    .replace(/€/g, "EUR").replace(/[–—]/g, "-")
    .replace(/['']/g, "'").replace(/[""]/g, '"')
    .replace(/…/g, "...");
}

function wrapText(text: string, maxW: number, font: PDFFont, size: number): string[] {
  const lines: string[] = [];
  for (const seg of text.split("\n")) {
    const words = seg.split(/\s+/).filter(Boolean);
    if (!words.length) { lines.push(""); continue; }
    let line = "";
    for (const w of words) {
      const test = line ? `${line} ${w}` : w;
      if (font.widthOfTextAtSize(test, size) <= maxW) line = test;
      else { if (line) lines.push(line); line = w; }
    }
    if (line) lines.push(line);
  }
  return lines;
}

export function sanitizeFileName(value: string): string {
  return value
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9-_]+/g, "-").replace(/-+/g, "-")
    .replace(/^-|-$/g, "").toLowerCase();
}

export type ProgrammeSection = {
  title: string;
  estimatedMinutes?: number;
};

export type ProgrammePdfInput = {
  formationTitle: string;
  subtitle?: string;
  objective?: string;
  audience?: string;
  level?: string;
  duration?: string;
  deliveryFormat?: string;
  certificationNote?: string;
  sections: ProgrammeSection[];
};

const W = 595.28;
const H = 841.89;
const ML = 48;
const MR = 48;
const CW = W - ML - MR;

const RED = rgb(0.72, 0.07, 0.07);
const DARK = rgb(0.06, 0.09, 0.15);
const GRAY = rgb(0.40, 0.45, 0.52);
const LIGHT = rgb(0.96, 0.97, 0.98);
const WHITE = rgb(1, 1, 1);

export async function generateProgrammePdf(input: ProgrammePdfInput): Promise<Uint8Array> {
  const { formationTitle, subtitle, objective, audience, level, duration, deliveryFormat, certificationNote, sections } = input;

  const doc = await PDFDocument.create();
  let page = doc.addPage([W, H]);
  const fontR = await doc.embedFont(StandardFonts.Helvetica);
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);

  let y = H - 48;

  function ensureSpace(needed: number) {
    if (y - needed < 60) {
      page = doc.addPage([W, H]);
      y = H - 48;
    }
  }

  function heading(text: string) {
    ensureSpace(30);
    page.drawText(s(text), { x: ML, y, font: fontB, size: 11.5, color: RED });
    y -= 8;
    page.drawLine({ start: { x: ML, y }, end: { x: W - MR, y }, thickness: 0.7, color: rgb(0.85, 0.87, 0.9) });
    y -= 16;
  }

  function paragraph(text: string, size = 9, color = DARK) {
    const lines = wrapText(s(text), CW, fontR, size);
    for (const line of lines) {
      ensureSpace(size + 4);
      page.drawText(line, { x: ML, y, font: fontR, size, color });
      y -= size + 4;
    }
  }

  // ── En-tête ──
  const logoPath = path.join(process.cwd(), "public", "images", "logo-prevensia-fond-blanc.png");
  try {
    const logoBytes = await fs.readFile(logoPath);
    const logo = await doc.embedPng(logoBytes);
    const lDims = logo.scaleToFit(130, 46);
    page.drawImage(logo, { x: ML, y: y - lDims.height, width: lDims.width, height: lDims.height });
  } catch { /* pas de logo */ }

  page.drawText("PROGRAMME DE FORMATION", {
    x: W - MR - fontB.widthOfTextAtSize("PROGRAMME DE FORMATION", 16),
    y: y - 12, font: fontB, size: 16, color: RED,
  });

  y -= 58;
  page.drawLine({ start: { x: ML, y }, end: { x: W - MR, y }, thickness: 1, color: rgb(0.85, 0.87, 0.9) });
  y -= 22;

  // ── Titre formation ──
  const titleLines = wrapText(s(formationTitle), CW, fontB, 15);
  for (const line of titleLines) {
    ensureSpace(19);
    page.drawText(line, { x: ML, y, font: fontB, size: 15, color: DARK });
    y -= 19;
  }
  if (subtitle) {
    y -= 2;
    paragraph(subtitle, 9.5, GRAY);
  }
  y -= 10;

  // ── Bandeau infos clés ──
  const infoItems = [
    ["Duree", duration || "voir detail ci-dessous"],
    ["Modalites", deliveryFormat || "E-learning a distance"],
    ["Niveau", level || "Tous niveaux"],
    ["Public", audience ? (audience.length > 60 ? audience.slice(0, 57) + "..." : audience) : "Salaries et particuliers"],
  ];
  const chipW = CW / 4;
  ensureSpace(46);
  const chipY = y;
  infoItems.forEach(([label, val], i) => {
    const x = ML + i * chipW;
    page.drawRectangle({ x, y: chipY - 40, width: chipW - 8, height: 40, color: LIGHT, borderColor: rgb(0.88, 0.9, 0.93), borderWidth: 0.5 });
    page.drawText(s(label.toUpperCase()), { x: x + 8, y: chipY - 14, font: fontB, size: 7, color: GRAY });
    const wrapped = wrapText(s(val), chipW - 24, fontR, 7.5);
    let vy = chipY - 24;
    for (const wl of wrapped.slice(0, 2)) { page.drawText(wl, { x: x + 8, y: vy, font: fontR, size: 7.5, color: DARK }); vy -= 9; }
  });
  y = chipY - 52;

  // ── Objectifs pédagogiques ──
  if (objective) {
    heading("Objectifs pedagogiques");
    paragraph(objective);
    y -= 8;
  }

  // ── Public visé et prérequis ──
  if (audience) {
    heading("Public vise et prerequis");
    paragraph(audience);
    paragraph("Aucun prerequis specifique n'est exige pour suivre ce module de sensibilisation e-learning, hormis un acces internet et une adresse email valide. L'employeur reste responsable de verifier l'adequation entre le contenu suivi, le poste occupe et les risques reellement rencontres par le salarie.", 8.5, GRAY);
    y -= 8;
  }

  // ── Contenu détaillé / séquencement ──
  heading("Contenu detaille et sequencement");
  const totalMinutes = sections.reduce((acc, sec) => acc + (sec.estimatedMinutes ?? 0), 0);
  if (totalMinutes > 0) {
    paragraph(`Duree pedagogique totale estimee : ${Math.round(totalMinutes / 60 * 10) / 10} heure(s) (${totalMinutes} minutes), hors temps de revision et de passage du quiz final.`, 8.5, GRAY);
    y -= 4;
  }

  // Tableau chapitres
  const colChapW = CW * 0.82;
  const colTimeW = CW * 0.18;
  ensureSpace(24);
  page.drawRectangle({ x: ML, y: y - 18, width: CW, height: 20, color: DARK });
  page.drawText("Chapitre", { x: ML + 6, y: y - 13, font: fontB, size: 8.5, color: WHITE });
  page.drawText("Duree mini.", { x: ML + colChapW + 6, y: y - 13, font: fontB, size: 8.5, color: WHITE });
  y -= 20;

  let rowBg = false;
  sections.forEach((sec, idx) => {
    const label = `${idx + 1}. ${sec.title}`;
    const wrapped = wrapText(s(label), colChapW - 12, fontR, 8.5);
    const rowH = Math.max(16, wrapped.length * 11 + 6);
    ensureSpace(rowH + 2);

    if (rowBg) page.drawRectangle({ x: ML, y: y - rowH, width: CW, height: rowH, color: LIGHT });

    let ty = y - 11;
    for (const wl of wrapped) { page.drawText(wl, { x: ML + 6, y: ty, font: fontR, size: 8.5, color: DARK }); ty -= 11; }

    const timeLabel = sec.estimatedMinutes ? `${sec.estimatedMinutes} min` : "-";
    page.drawText(s(timeLabel), { x: ML + colChapW + 6, y: y - 11, font: fontR, size: 8.5, color: DARK });

    page.drawLine({ start: { x: ML, y: y - rowH }, end: { x: W - MR, y: y - rowH }, thickness: 0.3, color: rgb(0.88, 0.9, 0.93) });

    y -= rowH;
    rowBg = !rowBg;
  });
  y -= 16;

  // ── Moyens pédagogiques et d'encadrement ──
  heading("Moyens pedagogiques, techniques et d'encadrement");
  paragraph("Formation dispensee en e-learning : cours redige, illustrations et schemas techniques, points cles recapitulatifs, references reglementaires et normatives par chapitre, quiz de validation. Acces individuel securise depuis un espace apprenant en ligne, disponible sur ordinateur, tablette et smartphone. Un referent pedagogique PREVENSIA FORMATION est joignable a " + COMPANY.email + " pour toute question relative au parcours.");
  y -= 8;

  // ── Modalités d'évaluation ──
  heading("Modalites d'evaluation et de suivi");
  paragraph("Progression et temps de lecture suivis chapitre par chapitre. Validation des connaissances par un questionnaire a choix multiples (QCM) en fin de parcours, avec score minimal de reussite. Une attestation de suivi de formation est delivree automatiquement a l'issue du parcours valide.");
  y -= 8;

  // ── Sanction de la formation ──
  heading("Sanction de la formation");
  paragraph(
    certificationNote ||
    "A l'issue du parcours, une attestation de suivi de formation est delivree, mentionnant les objectifs, la duree et les modalites d'evaluation. Ce document ne constitue pas une habilitation ou une certification professionnelle reglementaire lorsque celle-ci necessite un organisme agree ou une evaluation pratique en presentiel."
  );

  // ── Pied de page toutes pages ──
  for (const p of doc.getPages()) {
    p.drawLine({ start: { x: ML, y: 40 }, end: { x: W - MR, y: 40 }, thickness: 0.5, color: rgb(0.88, 0.9, 0.93) });
    p.drawText(
      s(`${COMPANY.name} - ${COMPANY.addressFull} - SIRET ${COMPANY.siret}${COMPANY.nda ? ` - NDA ${COMPANY.nda}` : ""}`),
      { x: ML, y: 26, font: fontR, size: 7, color: GRAY }
    );
  }

  return doc.save();
}
