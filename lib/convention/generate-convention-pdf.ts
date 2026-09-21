/**
 * Générateur de Convention de formation professionnelle — PREVENSIA FORMATION
 *
 * Document contractuel généré automatiquement (après paiement pour un
 * particulier, ou dès validation du devis pour une entreprise), conforme
 * aux mentions obligatoires du Code du travail Art. L6353-1 (obligation de
 * conclure une convention entre l'organisme de formation et l'acheteur —
 * bénéficiaire/employeur) et Art. D6353-1 (contenu obligatoire) :
 *   - dénomination et adresse de l'organisme dispensateur
 *   - nature, durée, modalités de déroulement et objectifs de la formation
 *   - effectifs concernés
 *   - prix et modalités de règlement
 *   - modalités de résiliation / dédit (renvoi aux CGV)
 *
 * Remarque : PREVENSIA FORMATION n'est pas un organisme certificateur SSIAP /
 * habilitation électrique. Cette convention porte sur la formation e-learning
 * dispensée par PREVENSIA FORMATION elle-même, pas sur une certification tierce.
 */

import { PDFDocument, PDFFont, PDFPage, StandardFonts, rgb } from "pdf-lib";
import fs from "fs/promises";
import path from "path";
import { COMPANY } from "@/lib/company";

// ── Helpers texte ────────────────────────────────────────────────────────────

function s(text: string): string {
  return (text ?? "")
    .replace(/œ/g, "oe").replace(/Œ/g, "Oe")
    .replace(/æ/g, "ae").replace(/Æ/g, "Ae")
    .replace(/€/g, "EUR").replace(/[–—]/g, "-")
    .replace(/['']/g, "'").replace(/[""]/g, '"')
    .replace(/…/g, "...");
}

function dateFr(iso?: string | null): string {
  const d = iso ? new Date(iso) : new Date();
  return Number.isNaN(d.getTime()) ? new Date().toLocaleDateString("fr-FR") : d.toLocaleDateString("fr-FR");
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

// ── Types ────────────────────────────────────────────────────────────────────

export type ConventionPdfInput = {
  numero: string;
  dateSignature: string;
  beneficiaryName: string;
  beneficiaryIsCompany: boolean;
  beneficiaryAddress?: string;
  learnerFullName: string;
  learnerEmail: string;
  formationTitle: string;
  durationLabel: string;
  deliveryFormat: string;
  objective?: string;
  priceHT: number;
  priceTTC: number;
  tvaRate: number;
  tvaExempt: boolean;
  accessStart: string;
  accessEnd?: string | null;
};

// ── Constantes mise en page ───────────────────────────────────────────────────

const W = 595.28;
const H = 841.89;
const ML = 48;
const MR = 48;
const CW = W - ML - MR;

const RED = rgb(0.72, 0.07, 0.07);
const DARK = rgb(0.06, 0.09, 0.15);
const GRAY = rgb(0.40, 0.45, 0.52);
const LIGHT = rgb(0.96, 0.97, 0.98);

export async function generateConventionPdf(input: ConventionPdfInput): Promise<Uint8Array> {
  const {
    numero, dateSignature, beneficiaryName, beneficiaryIsCompany, beneficiaryAddress,
    learnerFullName, learnerEmail, formationTitle, durationLabel, deliveryFormat,
    objective, priceHT, priceTTC, tvaRate, tvaExempt, accessStart, accessEnd,
  } = input;

  const doc = await PDFDocument.create();
  let page = doc.addPage([W, H]);
  const fontR = await doc.embedFont(StandardFonts.Helvetica);
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontI = await doc.embedFont(StandardFonts.HelveticaOblique);

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

  function paragraph(text: string, size = 9, color = DARK, font = fontR) {
    const lines = wrapText(s(text), CW, font, size);
    for (const line of lines) {
      ensureSpace(size + 4);
      page.drawText(line, { x: ML, y, font, size, color });
      y -= size + 4;
    }
  }

  function bullet(text: string) {
    const lines = wrapText(s(text), CW - 14, fontR, 9);
    ensureSpace(13);
    page.drawText("-", { x: ML, y, font: fontR, size: 9, color: DARK });
    lines.forEach((line) => {
      ensureSpace(13);
      page.drawText(line, { x: ML + 12, y, font: fontR, size: 9, color: DARK });
      y -= 13;
    });
  }

  // ── En-tête ──
  const logoPath = path.join(process.cwd(), "public", "images", "logo-prevensia-fond-blanc.png");
  try {
    const logoBytes = await fs.readFile(logoPath);
    const logo = await doc.embedPng(logoBytes);
    const lDims = logo.scaleToFit(130, 46);
    page.drawImage(logo, { x: ML, y: y - lDims.height, width: lDims.width, height: lDims.height });
  } catch { /* pas de logo */ }

  page.drawText("CONVENTION DE FORMATION", {
    x: W - MR - fontB.widthOfTextAtSize("CONVENTION DE FORMATION", 16),
    y: y - 12, font: fontB, size: 16, color: RED,
  });
  page.drawText(s(`Convention n. ${numero} — Article L.6353-1 du Code du travail`), {
    x: W - MR - fontR.widthOfTextAtSize(s(`Convention n. ${numero} — Article L.6353-1 du Code du travail`), 8.5),
    y: y - 28, font: fontR, size: 8.5, color: GRAY,
  });

  y -= 58;
  page.drawLine({ start: { x: ML, y }, end: { x: W - MR, y }, thickness: 1, color: rgb(0.85, 0.87, 0.9) });
  y -= 20;

  // ── Parties ──
  const boxW = (CW - 16) / 2;
  const boxH = 92;

  page.drawRectangle({ x: ML, y: y - boxH, width: boxW, height: boxH, color: LIGHT, borderColor: rgb(0.88, 0.9, 0.93), borderWidth: 0.6 });
  let by = y - 16;
  page.drawText("ORGANISME DE FORMATION", { x: ML + 10, y: by, font: fontB, size: 8, color: GRAY });
  by -= 14;
  const orgLines = [COMPANY.name, COMPANY.legalName, COMPANY.addressFull, `SIRET : ${COMPANY.siret}`, COMPANY.email];
  for (const l of orgLines) { page.drawText(s(l), { x: ML + 10, y: by, font: fontR, size: 8.5, color: DARK }); by -= 12; }

  const box2X = ML + boxW + 16;
  page.drawRectangle({ x: box2X, y: y - boxH, width: boxW, height: boxH, color: LIGHT, borderColor: rgb(0.88, 0.9, 0.93), borderWidth: 0.6 });
  let by2 = y - 16;
  page.drawText(beneficiaryIsCompany ? "BENEFICIAIRE (ENTREPRISE)" : "BENEFICIAIRE (PARTICULIER)", { x: box2X + 10, y: by2, font: fontB, size: 8, color: GRAY });
  by2 -= 14;
  const benLines = [
    beneficiaryName,
    ...(beneficiaryAddress ? [beneficiaryAddress] : []),
    beneficiaryIsCompany ? `Stagiaire : ${learnerFullName}` : learnerFullName,
    learnerEmail,
  ];
  for (const l of benLines) {
    const wrapped = wrapText(s(l), boxW - 20, fontR, 8.5);
    for (const wl of wrapped) { page.drawText(wl, { x: box2X + 10, y: by2, font: fontR, size: 8.5, color: DARK }); by2 -= 12; }
  }

  y -= boxH + 26;

  // ── Article 1 ──
  heading("Article 1 — Objet");
  paragraph(
    `La presente convention est conclue en application des dispositions du Code du travail (Art. L.6353-1 et D.6353-1) entre ${COMPANY.name} (organisme de formation) et ${beneficiaryName} (beneficiaire), en vue de la realisation de l'action de formation suivante : "${formationTitle}".`
  );
  if (objective) {
    y -= 4;
    paragraph(`Objectifs pedagogiques : ${objective}`);
  }

  // ── Article 2 ──
  y -= 8;
  heading("Article 2 — Nature, duree et modalites");
  bullet(`Nature de l'action : formation e-learning de sensibilisation / preparation theorique.`);
  bullet(`Duree indicative : ${durationLabel || "voir programme de formation joint"}.`);
  bullet(`Modalites : ${deliveryFormat || "formation a distance (e-learning), acces individuel via compte apprenant securise."}`);
  bullet(`Periode d'acces : du ${dateFr(accessStart)}${accessEnd ? ` au ${dateFr(accessEnd)}` : " (acces valable selon les CGV en vigueur)"}.`);
  bullet(`Le detail du contenu pedagogique, des sequences, des moyens d'encadrement et des modalites d'evaluation figure dans le programme de formation joint a la presente convention.`);

  // ── Article 3 ──
  y -= 8;
  heading("Article 3 — Effectifs concernes");
  paragraph(
    beneficiaryIsCompany
      ? `Le present contrat concerne un salarie de l'entreprise ${beneficiaryName}, nommement designe : ${learnerFullName}.`
      : `Le present contrat concerne le beneficiaire nommement designe : ${learnerFullName}, agissant en son nom propre.`
  );

  // ── Article 4 ──
  y -= 8;
  heading("Article 4 — Prix et modalites de reglement");
  const priceLine = tvaExempt
    ? `Prix de l'action de formation : ${priceTTC.toFixed(2)} EUR net de taxe (TVA non applicable — Art. 261-4-4 du CGI).`
    : `Prix de l'action de formation : ${priceHT.toFixed(2)} EUR HT, TVA ${tvaRate} % incluse, soit ${priceTTC.toFixed(2)} EUR TTC.`;
  paragraph(priceLine);
  paragraph(`Reglement effectue en totalite au moment de la commande, par carte bancaire ou prelevement SEPA via la plateforme de paiement securisee Stripe. Une facture est adressee au beneficiaire des l'encaissement.`);

  // ── Article 5 ──
  y -= 8;
  heading("Article 5 — Dedit, resiliation, abandon");
  paragraph(
    `Les conditions d'annulation, de retractation et de remboursement applicables sont celles detaillees dans les Conditions Generales de Vente (CGV) de ${COMPANY.name}, disponibles a tout moment sur ${COMPANY.website}/cgv et reputees acceptees par le beneficiaire lors de la commande. En cas d'interruption de la formation du fait du beneficiaire en cours de parcours, seules les dispositions prevues aux CGV s'appliquent.`
  );

  // ── Article 6 ──
  y -= 8;
  heading("Article 6 — Litiges");
  paragraph(
    `Pour toute contestation relative a l'execution de la presente convention, le beneficiaire peut adresser une reclamation a ${COMPANY.email}. A defaut d'accord amiable, les tribunaux competents seront ceux du ressort du siege social de ${COMPANY.legalName}.`
  );

  // ── Signatures ──
  y -= 20;
  ensureSpace(90);
  paragraph(`Fait a Paris, le ${dateFr(dateSignature)}, en deux exemplaires.`, 9, GRAY, fontI);
  y -= 20;
  const sigW = (CW - 16) / 2;
  page.drawText("Pour l'organisme de formation", { x: ML, y, font: fontB, size: 8.5, color: DARK });
  page.drawText("Pour le beneficiaire", { x: ML + sigW + 16, y, font: fontB, size: 8.5, color: DARK });
  y -= 12;
  page.drawText(s(COMPANY.name), { x: ML, y, font: fontR, size: 8.5, color: GRAY });
  page.drawText(s(beneficiaryName), { x: ML + sigW + 16, y, font: fontR, size: 8.5, color: GRAY });
  y -= 12;
  page.drawText("(signature electronique valant acceptation lors du paiement en ligne)", { x: ML, y, font: fontI, size: 7.5, color: GRAY });

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
