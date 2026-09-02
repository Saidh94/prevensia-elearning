"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface RecapConfig {
  title: string;
  accent: string;      // Tailwind-compatible hex color for brand
  slides: React.ReactNode[];
  narration: string[];
}

// ─── Slug → Config mapping ────────────────────────────────────────────────────
function getSlug(raw: string): string {
  if (/^atex/.test(raw)) return "atex";
  if (/^h0b0/.test(raw) || raw === "h0b0") return "h0b0";
  if (/^bsbe/.test(raw) || raw.startsWith("bs-be") || raw.startsWith("bs_be")) return "bsbe";
  if (/^(ssiap|ssi|securite-incendie|incendie)/.test(raw)) return "ssiap1";
  if (raw === "sst") return "sst";
  if (raw === "sprinkler") return "sprinkler";
  return "";
}

// ─── Slide components (generic reusable blocks) ───────────────────────────────
function SlideWrap({ bg = "#0f172a", children }: { bg?: string; children: React.ReactNode }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: bg, overflow: "hidden" }}>
      {children}
    </div>
  );
}

// ─── ATEX slides ──────────────────────────────────────────────────────────────
const ATEX_SLIDES: React.ReactNode[] = [
  <SlideWrap key="a0" bg="linear-gradient(135deg,#0f172a 45%,#1a1400)">
    <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "28px 32px", gap: 28 }}>
      <svg width="100" height="116" viewBox="0 0 130 150" xmlns="http://www.w3.org/2000/svg" aria-label="Logo ATEX Ex" style={{ flexShrink: 0 }}>
        <defs>
          <linearGradient id="yg" x1="0%" y1="0%" x2="30%" y2="100%"><stop offset="0%" stopColor="#FFE84D"/><stop offset="100%" stopColor="#F0B500"/></linearGradient>
          <filter id="ds"><feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.45"/></filter>
        </defs>
        <polygon points="65,6 122,38 122,112 65,144 8,112 8,38" fill="url(#yg)" stroke="#111" strokeWidth="8" strokeLinejoin="round" filter="url(#ds)"/>
        <text x="65" y="107" textAnchor="middle" fontFamily="'Arial Black','Impact',Arial,sans-serif" fontWeight="900" fontSize="72" fontStyle="italic" fill="#111" letterSpacing="-3">Ex</text>
      </svg>
      <div>
        <h2 style={{ fontSize: 23, fontWeight: 600, color: "#f1f5f9", marginBottom: 10, lineHeight: 1.25 }}>Qu'est-ce qu'une ATEX ?</h2>
        <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.75 }}>Un entrepôt, des vapeurs de solvant qui s'accumulent, une étincelle — et c'est l'explosion. C'est exactement ce risque que couvre la réglementation ATEX : identifier ces zones dangereuses et tout faire pour les sécuriser.</p>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(251,146,60,.1)", border: "1px solid rgba(251,146,60,.25)", color: "#fb923c", fontSize: 12, fontWeight: 600, padding: "5px 13px", borderRadius: 20, marginTop: 14 }}>⚠ Risque réel en milieu industriel</span>
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="a1">
    <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div style={{ padding: "22px 18px", display: "flex", flexDirection: "column", gap: 9, background: "rgba(129,140,248,.07)", borderRight: "1px solid rgba(129,140,248,.12)" }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, padding: "3px 10px", borderRadius: 20, width: "fit-content", background: "rgba(129,140,248,.15)", color: "#a5b4fc" }}>ATEX 137 — 99/92/CE</span>
        <div style={{ fontSize: 17, fontWeight: 600, color: "#f1f5f9" }}>L'employeur</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {["Identifier et classer les zones", "Rédiger le DRPCE", "Former et habiliter le personnel"].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#cbd5e1" }}>
              <span style={{ color: "#a5b4fc", marginTop: 2 }}>›</span>{t}
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: "22px 18px", display: "flex", flexDirection: "column", gap: 9, background: "rgba(251,146,60,.07)" }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, padding: "3px 10px", borderRadius: 20, width: "fit-content", background: "rgba(251,146,60,.15)", color: "#fb923c" }}>ATEX 95 — 2014/34/UE</span>
        <div style={{ fontSize: 17, fontWeight: 600, color: "#f1f5f9" }}>Le fabricant</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {["Certifier ses équipements Ex", "Apposer le marquage CE + Ex", "Fournir la déclaration de conformité"].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#cbd5e1" }}>
              <span style={{ color: "#fb923c", marginTop: 2 }}>›</span>{t}
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="a2">
    <div style={{ flex: 1, padding: "18px 24px", display: "flex", flexDirection: "column", gap: 11 }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9" }}>Classification des zones — du plus au moins risqué</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, flex: 1 }}>
        {[{ label: "Gaz & vapeurs", color: "#f87171", rows: [{ n: "0", t: "Présence permanente", s: "Danger en continu", a: .13 }, { n: "1", t: "Présence probable", s: "En fonctionnement normal", a: .07 }, { n: "2", t: "Présence accidentelle", s: "Seulement en anomalie", a: .03 }] }, { label: "Poussières", color: "#60a5fa", rows: [{ n: "20", t: "Présence permanente", s: "Danger en continu", a: .13 }, { n: "21", t: "Présence probable", s: "En fonctionnement normal", a: .07 }, { n: "22", t: "Présence accidentelle", s: "Seulement en anomalie", a: .03 }] }].map((col) => (
          <div key={col.label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: col.color, marginBottom: 2 }}>{col.label}</div>
            {col.rows.map((r) => (
              <div key={r.n} style={{ display: "flex", alignItems: "center", gap: 10, borderRadius: 8, padding: "8px 11px", background: col.color.replace("#", "rgba(").replace(")", `,${r.a})`) || `rgba(200,200,200,${r.a})` }}>
                <span style={{ fontSize: 20, fontWeight: 800, minWidth: 38, color: r.a > .1 ? col.color : "#475569" }}>{r.n}</span>
                <div><strong style={{ display: "block", fontSize: 12.5, color: "#e2e8f0", fontWeight: 600 }}>{r.t}</strong><span style={{ fontSize: 11, color: "#475569" }}>{r.s}</span></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="a3">
    <div style={{ flex: 1, padding: "20px 24px", display: "flex", gap: 22, alignItems: "center" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
        <span style={{ fontSize: 52, color: "#f97316" }}>📄</span>
        <div style={{ fontSize: 14, fontWeight: 800, color: "#f97316", letterSpacing: 1 }}>DRPCE</div>
        <div style={{ fontSize: 10, color: "#475569", textAlign: "center", maxWidth: 82, lineHeight: 1.45 }}>Document Relatif à la Protection Contre les Explosions</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9", marginBottom: 2 }}>Le document obligatoire de l'employeur</div>
        {[{ icon: "🗺", c: "#f97316", t: "Cartographie des zones", d: "— toutes les zones ATEX du site, avec leur classification" }, { icon: "🛡", c: "#34d399", t: "Mesures de prévention", d: "— procédures, équipements certifiés, consignes d'intervention" }, { icon: "🕐", c: "#60a5fa", t: "Avant tout début de travaux", d: "et mis à jour à chaque modification du site" }].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "rgba(255,255,255,.04)", borderRadius: 8, padding: "9px 11px" }}>
            <span style={{ fontSize: 17, marginTop: 1, flexShrink: 0 }}>{item.icon}</span>
            <p style={{ fontSize: 12.5, color: "#cbd5e1", lineHeight: 1.55 }}><strong style={{ color: "#f1f5f9" }}>{item.t}</strong> {item.d}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="a4" bg="linear-gradient(140deg,#0f172a,#0c1a2e)">
    <div style={{ flex: 1, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 18, fontWeight: 600, color: "#f1f5f9" }}>Ce qu'il faut retenir</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9, flex: 1 }}>
        {[{ icon: "🏭", label: "ATEX 137", val: "L'employeur", sub: "Zones · DRPCE · Formation", bg: "rgba(129,140,248,.08)", bc: "rgba(129,140,248,.15)", lc: "#a5b4fc" }, { icon: "🔧", label: "ATEX 95", val: "Le fabricant", sub: "Certification Ex · Marquage CE", bg: "rgba(251,146,60,.08)", bc: "rgba(251,146,60,.15)", lc: "#fb923c" }, { icon: "⚡", label: "Zones gaz", val: "0 — 1 — 2", sub: "Du permanent à l'accidentel", bg: "rgba(248,113,113,.08)", bc: "rgba(248,113,113,.15)", lc: "#f87171" }, { icon: "📄", label: "Document clé", val: "DRPCE", sub: "Pas DPPE — le DRPCE", bg: "rgba(96,165,250,.08)", bc: "rgba(96,165,250,.15)", lc: "#60a5fa" }].map((c) => (
          <div key={c.label} style={{ borderRadius: 10, padding: "11px 13px", display: "flex", flexDirection: "column", gap: 4, background: c.bg, border: `1px solid ${c.bc}` }}>
            <span style={{ fontSize: 20 }}>{c.icon}</span>
            <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: .8, color: c.lc }}>{c.label}</span>
            <span style={{ fontSize: 15, fontWeight: 600, color: "#f1f5f9" }}>{c.val}</span>
            <span style={{ fontSize: 11.5, color: "#64748b" }}>{c.sub}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,
];

const ATEX_NARRATION = [
  "Imaginez un entrepôt, des vapeurs de solvant qui s'accumulent au sol, et une simple étincelle. C'est l'explosion. C'est exactement ce risque que couvre la réglementation ATEX. Dans ce récap, on revoit ensemble les points essentiels à connaître.",
  "La réglementation repose sur deux directives européennes. La première, ATEX cent trente-sept, s'adresse à l'employeur : identifier les zones, rédiger le DRPCE, former le personnel. La deuxième, ATEX quatre-vingt-quinze, concerne les fabricants : certifier les équipements Ex et apposer le marquage.",
  "Les zones sont classées selon la fréquence du risque. Zone zéro : atmosphère explosive permanente. Zone un : présence probable en fonctionnement normal. Zone deux : seulement en cas d'anomalie. Pour les poussières, même logique avec les zones vingt, vingt-et-un et vingt-deux.",
  "Votre obligation principale : le DRPCE. Le Document Relatif à la Protection Contre les Explosions. Il cartographie toutes les zones, liste les mesures de prévention, et doit exister avant tout début de travaux.",
  "Pour conclure. ATEX cent trente-sept pour l'employeur, ATEX quatre-vingt-quinze pour le fabricant. Zones gaz de zéro à deux, zones poussières de vingt à vingt-deux. Et le document obligatoire s'appelle le DRPCE. Ce sont ces termes précis que vous retrouverez dans votre évaluation.",
];

// ─── H0B0 slides ──────────────────────────────────────────────────────────────
const H0B0_SLIDES: React.ReactNode[] = [
  <SlideWrap key="h0" bg="linear-gradient(135deg,#0f172a 50%,#001833)">
    <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 28, padding: "28px 32px" }}>
      <div style={{ background: "#1e3a5f", border: "3px solid #38bdf8", borderRadius: 12, width: 90, height: 90, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 900, color: "#38bdf8", letterSpacing: -1, flexShrink: 0 }}>H0B0</div>
      <div>
        <h2 style={{ fontSize: 23, fontWeight: 600, color: "#f1f5f9", marginBottom: 10 }}>Habilitation électrique H0B0</h2>
        <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.75 }}>H0B0, c'est le titre pour les non-électriciens. Il ne vous autorise pas à toucher à l'électricité. Il vous autorise à évoluer en sécurité dans un environnement où le risque électrique existe. C'est une nuance essentielle.</p>
        <span style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: 1, display: "block", marginTop: 10 }}>NF C 18-510 + A1:2020 + A2:2023</span>
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="h1">
    <div style={{ flex: 1, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9" }}>Les trois symboles à connaître</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, flex: 1 }}>
        {[{ code: "B0", name: "Basse tension", desc: "Opérations non électriques en environnement BT. Ex : cariste, agent de nettoyage.", color: "#38bdf8", bg: "rgba(56,189,248,.07)", bc: "rgba(56,189,248,.2)" }, { code: "H0", name: "Haute tension", desc: "Opérations non électriques en environnement HTA/HTB. Distances plus strictes.", color: "#fb923c", bg: "rgba(251,146,60,.07)", bc: "rgba(251,146,60,.2)" }, { code: "H0V", name: "HT + voisinage", desc: "Travail à proximité de pièces nues sous haute tension. Vigilance renforcée.", color: "#f87171", bg: "rgba(248,113,113,.07)", bc: "rgba(248,113,113,.2)" }].map((s) => (
          <div key={s.code} style={{ borderRadius: 10, padding: "14px 12px", display: "flex", flexDirection: "column", gap: 6, background: s.bg, border: `1px solid ${s.bc}` }}>
            <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: -1, color: s.color }}>{s.code}</span>
            <span style={{ fontSize: 12.5, fontWeight: 600, color: "#f1f5f9" }}>{s.name}</span>
            <span style={{ fontSize: 11.5, color: "#64748b", lineHeight: 1.45 }}>{s.desc}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="h2">
    <div style={{ flex: 1, padding: "20px 24px", display: "flex", gap: 16 }}>
      {[{ title: "✓ Ce que H0B0 autorise", color: "#34d399", bg: "rgba(52,211,153,.06)", tbg: "rgba(52,211,153,.1)", items: ["Circuler à proximité d'installations sous tension balisées", "Reconnaître les zones balisées et les panneaux de danger", "Signaler une anomalie visible (câble dégradé, armoire ouverte)", "S'écarter immédiatement en cas de doute et alerter"] }, { title: "✗ Ce que H0B0 N'autorise PAS", color: "#f87171", bg: "rgba(248,113,113,.06)", tbg: "rgba(248,113,113,.1)", items: ["Ouvrir une armoire ou un coffret électrique", "Réarmer un disjoncteur ou remettre en service", "Mesurer une tension ou diagnostiquer une panne", "Consigner, intervenir ou toucher un équipement électrique"] }].map((col) => (
        <div key={col.title} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: .8, padding: "4px 10px", borderRadius: 20, width: "fit-content", background: col.tbg, color: col.color }}>{col.title}</div>
          {col.items.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, background: col.bg, borderRadius: 8, padding: "8px 10px", fontSize: 12.5, color: "#cbd5e1" }}>
              <span style={{ color: col.color, flexShrink: 0 }}>›</span>{item}
            </div>
          ))}
        </div>
      ))}
    </div>
  </SlideWrap>,

  <SlideWrap key="h3">
    <div style={{ flex: 1, padding: "18px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9" }}>Zones d'environnement et distances de sécurité</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        {[{ name: "DLI", desc: "Distance Limite d'Investigation — zone de danger extrême.", val: "Accès interdit H0B0", bg: "rgba(248,113,113,.1)", nc: "#f87171" }, { name: "DLVR", desc: "Distance Limite de Voisinage Renforcé — surveillance permanente requise.", val: "H0V uniquement", bg: "rgba(251,146,60,.08)", nc: "#fb923c" }, { name: "DLVS", desc: "Distance Limite de Voisinage Simple — vigilance et consignes obligatoires.", val: "H0B0 avec consignes", bg: "rgba(250,204,21,.06)", nc: "#facc15" }, { name: "Au-delà", desc: "Zone sans risque de contact. Travail normal sans contrainte.", val: "Zone libre", bg: "rgba(52,211,153,.06)", nc: "#34d399" }].map((z) => (
          <div key={z.name} style={{ display: "grid", gridTemplateColumns: "100px 1fr 110px", gap: 10, alignItems: "center", borderRadius: 8, padding: "9px 12px", background: z.bg }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: z.nc }}>{z.name}</span>
            <span style={{ fontSize: 12, color: "#cbd5e1" }}>{z.desc}</span>
            <span style={{ fontSize: 11.5, textAlign: "right", color: "#94a3b8" }}>{z.val}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="h4" bg="linear-gradient(140deg,#0f172a,#0c1a2e)">
    <div style={{ flex: 1, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 18, fontWeight: 600, color: "#f1f5f9" }}>Ce qu'il faut retenir</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9, flex: 1 }}>
        {[{ icon: "📋", label: "Norme", val: "NF C 18-510 + A1 + A2", sub: "Recyclage tous les 3 ans", bg: "rgba(56,189,248,.08)", bc: "rgba(56,189,248,.15)", lc: "#38bdf8" }, { icon: "✅", label: "Habilitation", val: "Délivrée par l'employeur", sub: "Pas par la formation seule", bg: "rgba(34,197,94,.08)", bc: "rgba(34,197,94,.15)", lc: "#22c55e" }, { icon: "🚫", label: "Interdit", val: "Toute intervention électrique", sub: "Même simple, même ponctuelle", bg: "rgba(248,113,113,.08)", bc: "rgba(248,113,113,.15)", lc: "#f87171" }, { icon: "⚡", label: "Réflexe", val: "Doute → s'écarter → alerter", sub: "Jamais improviser", bg: "rgba(250,204,21,.08)", bc: "rgba(250,204,21,.15)", lc: "#facc15" }].map((c) => (
          <div key={c.label} style={{ borderRadius: 10, padding: "11px 13px", display: "flex", flexDirection: "column", gap: 4, background: c.bg, border: `1px solid ${c.bc}` }}>
            <span style={{ fontSize: 20 }}>{c.icon}</span>
            <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: .8, color: c.lc }}>{c.label}</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#f1f5f9", lineHeight: 1.3 }}>{c.val}</span>
            <span style={{ fontSize: 11, color: "#64748b" }}>{c.sub}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,
];

const H0B0_NARRATION = [
  "H0B0. Deux lettres, deux zéros. Le titre pour les salariés non électriciens. Ce titre ne vous autorise pas à toucher à l'électricité. Il vous autorise à évoluer en sécurité dans un environnement où le risque électrique existe. C'est une nuance que beaucoup oublient.",
  "La norme NF C 18-510 distingue trois symboles. B0 pour les opérations non électriques en basse tension. H0 pour la haute tension. Et H0V pour le travail à proximité de pièces nues sous haute tension, avec vigilance renforcée.",
  "Qu'est-ce que H0B0 autorise vraiment ? Circuler à proximité d'installations balisées, reconnaître les panneaux, signaler une anomalie, s'écarter et alerter. Ce titre n'autorise pas à ouvrir une armoire, réarmer un disjoncteur, mesurer une tension, consigner ou intervenir. Jamais.",
  "La norme définit des zones autour des installations. La DLI est inaccessible en H0B0. La DLVR est réservée au H0V. La DLVS est accessible avec consignes. Au-delà, on est en zone libre. Ne jamais franchir une limite sans y être expressément autorisé.",
  "Pour conclure. L'habilitation H0B0 est délivrée par l'employeur, pas par la formation seule. Norme NF C 18-510, recyclage tous les trois ans. Aucune intervention électrique autorisée. Et face à une situation anormale : s'écarter, ne pas improviser, alerter.",
];

// ─── BSBE slides ─────────────────────────────────────────────────────────────
const BSBE_SLIDES: React.ReactNode[] = [
  <SlideWrap key="b0" bg="linear-gradient(135deg,#0f172a 50%,#160d2b)">
    <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 28, padding: "28px 32px" }}>
      <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
        <div style={{ borderRadius: 10, padding: "10px 16px", fontSize: 24, fontWeight: 900, letterSpacing: -1, background: "rgba(167,139,250,.12)", border: "2px solid #a78bfa", color: "#a78bfa" }}>BS</div>
        <div style={{ borderRadius: 10, padding: "10px 16px", fontSize: 24, fontWeight: 900, letterSpacing: -1, background: "rgba(251,146,60,.12)", border: "2px solid #fb923c", color: "#fb923c" }}>BE</div>
      </div>
      <div>
        <h2 style={{ fontSize: 23, fontWeight: 600, color: "#f1f5f9", marginBottom: 10 }}>BS et BE Manœuvre</h2>
        <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.75 }}>Ces deux habilitations s'adressent aux non-électriciens qui doivent réaliser des opérations simples ou des manœuvres. Leur limite est précise : ce n'est pas parce qu'une opération semble simple qu'elle entre dans le cadre BS ou BE.</p>
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="b1">
    <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      {[{ code: "BS", sub: "Interventions élémentaires", title: "Gestes simples, hors tension", items: ["Remplacement prise, interrupteur, luminaire identifié", "Raccordement élémentaire sur circuit désigné", "Toujours hors tension, matériel identifié et prévu", "Dans les limites strictes du titre employeur"], color: "#a78bfa", bg: "rgba(167,139,250,.07)", br: "1px solid rgba(167,139,250,.12)" }, { code: "BE", sub: "Manœuvres d'exploitation", title: "Manœuvres sur organe identifié", items: ["Ouvrir, fermer, basculer un organe prévu pour ça", "Mettre en marche, arrêter, réarmer selon consignes", "L'organe est identifié, documenté et autorisé", "Toute autre action sort du cadre BE Manœuvre"], color: "#fb923c", bg: "rgba(251,146,60,.07)", br: "none" }].map((c) => (
        <div key={c.code} style={{ padding: "22px 18px", display: "flex", flexDirection: "column", gap: 9, background: c.bg, borderRight: c.br }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, padding: "3px 10px", borderRadius: 20, width: "fit-content", background: c.color.replace("#", "rgba(").replace(")", ",.15)") || "rgba(200,200,200,.15)", color: c.color }}>{c.code} — {c.sub}</span>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9" }}>{c.title}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {c.items.map((t, i) => (<div key={i} style={{ display: "flex", gap: 8, fontSize: 12.5, color: "#cbd5e1" }}><span style={{ color: c.color }}>›</span>{t}</div>))}
          </div>
        </div>
      ))}
    </div>
  </SlideWrap>,

  <SlideWrap key="b2">
    <div style={{ flex: 1, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9" }}>Ce que BS et BE Manœuvre n'autorisent jamais</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, flex: 1 }}>
        {[{ icon: "🔧", title: "Travaux d'électricien", desc: "Diagnostiquer, câbler, modifier une installation. C'est le rôle du B1 ou B2." }, { icon: "🔍", title: "Recherche de panne", desc: "Détecter une anomalie, tester des circuits ou analyser un dysfonctionnement." }, { icon: "🔒", title: "Consignation", desc: "Mettre hors tension, condamner, vérifier l'absence de tension. Rôle du BC." }, { icon: "⚡", title: "Intervention générale", desc: "Dépannage, remplacement sur installation complexe. Réservé au BR." }].map((n) => (
          <div key={n.title} style={{ display: "flex", alignItems: "flex-start", gap: 9, background: "rgba(248,113,113,.06)", border: "1px solid rgba(248,113,113,.12)", borderRadius: 8, padding: "10px 12px" }}>
            <span style={{ fontSize: 18, color: "#f87171", flexShrink: 0, marginTop: 1 }}>{n.icon}</span>
            <div><strong style={{ display: "block", fontSize: 12.5, color: "#f87171", marginBottom: 2 }}>{n.title}</strong><p style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.5 }}>{n.desc}</p></div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="b3">
    <div style={{ flex: 1, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9" }}>Les bons réflexes face aux situations limites</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
        {[{ num: 1, c: "#fb923c", t: "Votre remplacement révèle un câblage dégradé ou un coffret mal repéré", a: "Arrêter immédiatement. L'opération sort du cadre BS." }, { num: 2, c: "#a78bfa", t: "On vous demande de manœuvrer un organe non prévu dans votre titre", a: "Refuser. L'autorisation est nominative et spécifique." }, { num: 3, c: "#34d399", t: "On vous demande de continuer sans attendre la régularisation", a: "Refuser. L'urgence ne modifie pas le périmètre d'habilitation." }, { num: 4, c: "#38bdf8", t: "Votre titre d'habilitation est expiré", a: "Ne pas intervenir. L'habilitation expirée n'est plus valide." }].map((r) => (
          <div key={r.num} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "rgba(255,255,255,.03)", borderRadius: 8, padding: "10px 13px" }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, background: r.c.replace("#", "rgba(").replace(")", ",.15)") || "rgba(200,200,200,.15)", color: r.c }}>{r.num}</div>
            <p style={{ fontSize: 12.5, color: "#cbd5e1", lineHeight: 1.55 }}><strong style={{ color: "#f1f5f9" }}>{r.t}</strong> : {r.a}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="b4" bg="linear-gradient(140deg,#0f172a,#0c1a2e)">
    <div style={{ flex: 1, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 18, fontWeight: 600, color: "#f1f5f9" }}>Ce qu'il faut retenir</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9, flex: 1 }}>
        {[{ icon: "🔌", label: "BS", val: "Interventions élémentaires", sub: "Hors tension, matériel identifié", bg: "rgba(167,139,250,.08)", bc: "rgba(167,139,250,.15)", lc: "#a78bfa" }, { icon: "🔀", label: "BE Manœuvre", val: "Manœuvres d'exploitation", sub: "Organe prévu et documenté", bg: "rgba(251,146,60,.08)", bc: "rgba(251,146,60,.15)", lc: "#fb923c" }, { icon: "🚫", label: "Jamais", val: "Diagnostic, consignation, dépannage", sub: "≠ B1, BR, BC", bg: "rgba(248,113,113,.08)", bc: "rgba(248,113,113,.15)", lc: "#f87171" }, { icon: "📋", label: "Norme", val: "NF C 18-510 + A1 + A2", sub: "Habilitation = titre employeur", bg: "rgba(52,211,153,.08)", bc: "rgba(52,211,153,.15)", lc: "#34d399" }].map((c) => (
          <div key={c.label} style={{ borderRadius: 10, padding: "11px 13px", display: "flex", flexDirection: "column", gap: 4, background: c.bg, border: `1px solid ${c.bc}` }}>
            <span style={{ fontSize: 20 }}>{c.icon}</span>
            <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: .8, color: c.lc }}>{c.label}</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#f1f5f9", lineHeight: 1.3 }}>{c.val}</span>
            <span style={{ fontSize: 11, color: "#64748b" }}>{c.sub}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,
];

const BSBE_NARRATION = [
  "BS et BE Manœuvre. Deux habilitations pour les non-électriciens qui doivent réaliser des opérations simples en basse tension. La règle d'or : une opération qui semble simple n'est pas forcément dans le cadre BS ou BE. C'est le titre délivré par votre employeur qui définit ce que vous pouvez faire.",
  "Le BS vise les remplacements simples et raccordements élémentaires, toujours hors tension. Le BE Manœuvre, c'est l'exploitation d'un organe prévu pour ça : ouvrir, fermer, réarmer selon les consignes du site. Dans les deux cas, le périmètre est strict et défini par le titre.",
  "Ce que BS et BE Manœuvre n'autorisent jamais. Diagnostiquer une panne : rôle du BR. Modifier ou câbler : rôle du B1 ou B2. Consigner : rôle du BC. Si l'opération sort de votre cadre, vous exposez à des risques graves.",
  "Quelques situations limites. Votre remplacement révèle un câblage dégradé : vous stoppez. On vous demande de manœuvrer un organe non prévu : vous refusez. Votre titre est expiré : vous n'intervenez pas. L'urgence ne modifie jamais le périmètre d'habilitation.",
  "Pour conclure. BS, interventions élémentaires hors tension. BE Manœuvre, manœuvres d'exploitation sur organe documenté. Aucun des deux n'autorise diagnostic, consignation ou dépannage. Norme NF C 18-510. Habilitation délivrée par l'employeur.",
];

// ─── SSIAP1 slides ────────────────────────────────────────────────────────────
const SSIAP1_SLIDES: React.ReactNode[] = [
  <SlideWrap key="ss0" bg="linear-gradient(135deg,#0f172a 50%,#1a0808)">
    <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 26, padding: "26px 30px" }}>
      <div style={{ fontSize: 72, color: "#f87171", flexShrink: 0, lineHeight: 1 }}>🔥</div>
      <div>
        <h2 style={{ fontSize: 23, fontWeight: 600, color: "#f1f5f9", marginBottom: 9 }}>SSIAP1 — Sécurité Incendie ERP</h2>
        <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.75 }}>Le SSIAP1 est l'agent de sécurité incendie en ERP. Son rôle : surveiller, prévenir, déclencher l'alarme, utiliser les premiers moyens d'extinction, et guider les secours.</p>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(248,113,113,.1)", border: "1px solid rgba(248,113,113,.25)", color: "#f87171", fontSize: 11.5, fontWeight: 600, padding: "4px 12px", borderRadius: 20, marginTop: 12 }}>📋 Arrêté du 2 mai 2005 modifié</span>
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="ss1">
    <div style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9" }}>Organisation SSIAP et catégories d'ERP</div>
      <div style={{ display: "flex", gap: 8 }}>
        {[{ n: "SSIAP 1", t: "Agent", d: "Surveillance, rondes, extinction, évacuation", c: "#f87171", bg: "rgba(248,113,113,.07)", bc: "rgba(248,113,113,.2)" }, { n: "SSIAP 2", t: "Chef d'équipe", d: "Coordination agents, interface secours", c: "#fb923c", bg: "rgba(251,146,60,.07)", bc: "rgba(251,146,60,.2)" }, { n: "SSIAP 3", t: "Chef de service", d: "Responsable SSI, commission sécurité", c: "#facc15", bg: "rgba(250,204,21,.07)", bc: "rgba(250,204,21,.2)" }].map((l) => (
          <div key={l.n} style={{ flex: 1, borderRadius: 8, padding: "10px 12px", background: l.bg, border: `1px solid ${l.bc}` }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: l.c }}>{l.n}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#f1f5f9", margin: "4px 0" }}>{l.t}</div>
            <div style={{ fontSize: 11.5, color: "#64748b", lineHeight: 1.4 }}>{l.d}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6 }}>
        {[{ c: "1re cat.", v: "> 1 500 pers.", bg: "rgba(248,113,113,.1)", cc: "#f87171" }, { c: "2e cat.", v: "701 – 1 500", bg: "rgba(251,146,60,.08)", cc: "#fb923c" }, { c: "3e cat.", v: "301 – 700", bg: "rgba(250,204,21,.06)", cc: "#facc15" }, { c: "4e cat.", v: "≤ 300 (seuils)", bg: "rgba(52,211,153,.06)", cc: "#34d399" }, { c: "5e cat.", v: "Sans obligation", bg: "rgba(100,116,139,.08)", cc: "#64748b" }].map((ec) => (
          <div key={ec.c} style={{ borderRadius: 7, padding: "7px 8px", textAlign: "center", background: ec.bg }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: ec.cc }}>{ec.c}</div>
            <div style={{ fontSize: 10.5, color: "#64748b", marginTop: 2, lineHeight: 1.3 }}>{ec.v}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="ss2">
    <div style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9" }}>Les trois organes du SSI</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
        {[{ code: "ECS", name: "Équipement de Contrôle et de Signalisation", desc: "Le cerveau. Reçoit les signaux des détecteurs et déclenche l'alarme. C'est la grande façade au poste de sécurité.", c: "#38bdf8", bg: "rgba(56,189,248,.07)" }, { code: "CMSI", name: "Centralisateur de Mise en Sécurité Incendie", desc: "Le chef d'orchestre. Déclenche désenfumage, ferme portes coupe-feu, bloque ascenseurs, active alarme via UGA.", c: "#a78bfa", bg: "rgba(167,139,250,.07)" }, { code: "DAS", name: "Dispositifs Actionnés de Sécurité", desc: "Les exécutants. Portes coupe-feu, clapets de ventilation, volets de désenfumage. Un défaut DAS = équipement qui ne répond plus.", c: "#fb923c", bg: "rgba(251,146,60,.07)" }].map((s) => (
          <div key={s.code} style={{ display: "flex", alignItems: "flex-start", gap: 14, borderRadius: 9, padding: "11px 14px", background: s.bg }}>
            <span style={{ fontSize: 18, fontWeight: 900, minWidth: 55, letterSpacing: .5, color: s.c }}>{s.code}</span>
            <div><strong style={{ display: "block", fontSize: 13.5, color: "#f1f5f9", fontWeight: 600, marginBottom: 3 }}>{s.name}</strong><p style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.5 }}>{s.desc}</p></div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="ss3">
    <div style={{ flex: 1, padding: "16px 22px", display: "flex", gap: 16 }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: .8, color: "#64748b", marginBottom: 2 }}>Classes de feux</div>
        {[{ l: "A", d: "Solides (bois, papier)", s: "Eau, mousse, poudre ABC", bg: "rgba(248,113,113,.07)", bc: "#7f1d1d", lc: "#f87171" }, { l: "B", d: "Liquides inflammables", s: "Mousse, CO₂ — JAMAIS eau seule", bg: "rgba(251,146,60,.07)", bc: "#7c2d12", lc: "#fb923c" }, { l: "C", d: "Gaz", s: "Couper l'alimentation en priorité", bg: "rgba(250,204,21,.06)", bc: "#713f12", lc: "#facc15" }, { l: "D", d: "Métaux", s: "Poudre D uniquement", bg: "rgba(56,189,248,.06)", bc: "#0c4a6e", lc: "#38bdf8" }, { l: "F", d: "Graisses alimentaires", s: "Agent F — JAMAIS eau", bg: "rgba(52,211,153,.06)", bc: "#064e3b", lc: "#34d399" }].map((f) => (
          <div key={f.l} style={{ display: "flex", alignItems: "center", gap: 8, borderRadius: 7, padding: "6px 9px", background: f.bg }}>
            <div style={{ width: 26, height: 26, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900, flexShrink: 0, background: f.bc, color: f.lc }}>{f.l}</div>
            <div><div style={{ fontSize: 12.5, color: "#cbd5e1" }}>{f.d}</div><div style={{ fontSize: 10.5, color: "#475569" }}>{f.s}</div></div>
          </div>
        ))}
      </div>
      <div style={{ width: 140, display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: .8, color: "#64748b", marginBottom: 2 }}>Méthode DAPS</div>
        {[{ l: "D", t: "Dégoupiller", s: "Retirer la goupille" }, { l: "A", t: "Acheminer", s: "Approcher à 3–4 m" }, { l: "P", t: "Pointer", s: "Viser la base des flammes" }, { l: "S", t: "Supprimer", s: "Balayer gauche-droite" }].map((d) => (
          <div key={d.l} style={{ display: "flex", alignItems: "center", gap: 8, borderRadius: 7, padding: "7px 10px", background: "rgba(249,115,22,.07)" }}>
            <div style={{ width: 26, height: 26, borderRadius: 6, background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, color: "#fff", flexShrink: 0 }}>{d.l}</div>
            <div><strong style={{ display: "block", fontSize: 12, color: "#f1f5f9" }}>{d.t}</strong><span style={{ fontSize: 10.5, color: "#64748b" }}>{d.s}</span></div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="ss4" bg="linear-gradient(140deg,#0f172a,#1a0808)">
    <div style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 18, fontWeight: 600, color: "#f1f5f9" }}>Ce qu'il faut retenir</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, flex: 1 }}>
        {[{ icon: "📋", label: "Texte clé", val: "Arrêté 2 mai 2005", sub: "Formation 70 h + recyclage 14 h / 3 ans", bg: "rgba(248,113,113,.08)", bc: "rgba(248,113,113,.15)", lc: "#f87171" }, { icon: "💻", label: "SSI", val: "ECS · CMSI · DAS", sub: "Détecter · Commander · Exécuter", bg: "rgba(56,189,248,.08)", bc: "rgba(56,189,248,.15)", lc: "#38bdf8" }, { icon: "🔥", label: "Classes", val: "A · B · C · D · F", sub: "Pas de classe E — 5 classes", bg: "rgba(251,146,60,.08)", bc: "rgba(251,146,60,.15)", lc: "#fb923c" }, { icon: "🧯", label: "Extincteur", val: "Méthode DAPS", sub: "Dégoupiller · Acheminer · Pointer · Supprimer", bg: "rgba(167,139,250,.08)", bc: "rgba(167,139,250,.15)", lc: "#a78bfa" }].map((c) => (
          <div key={c.label} style={{ borderRadius: 10, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 3, background: c.bg, border: `1px solid ${c.bc}` }}>
            <span style={{ fontSize: 18 }}>{c.icon}</span>
            <span style={{ fontSize: 9.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: .8, color: c.lc }}>{c.label}</span>
            <span style={{ fontSize: 13.5, fontWeight: 600, color: "#f1f5f9", lineHeight: 1.3 }}>{c.val}</span>
            <span style={{ fontSize: 10.5, color: "#64748b" }}>{c.sub}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,
];

const SSIAP1_NARRATION = [
  "SSIAP1, Service de Sécurité Incendie et d'Assistance aux Personnes. L'agent SSIAP1 est présent dans les ERP. Il surveille, fait des rondes, gère le poste de sécurité, met en œuvre les premiers moyens d'extinction et guide les secours.",
  "Le SSIAP est organisé en trois niveaux. SSIAP1, l'agent sur le terrain. SSIAP2, le chef d'équipe. SSIAP3, le chef de service. Les ERP sont classés de la première à la cinquième catégorie selon leur capacité. La formation certifiante SSIAP1 représente soixante-dix heures minimum, avec un recyclage de quatorze heures tous les trois ans.",
  "Le Système de Sécurité Incendie repose sur trois organes. L'ECS est le cerveau : il détecte et déclenche l'alarme. Le CMSI est le chef d'orchestre : il commande le désenfumage, ferme les portes coupe-feu, bloque les ascenseurs. Les DAS sont les exécutants : portes, clapets, volets, exutoires.",
  "Il existe cinq classes de feux. A pour les solides : eau ou mousse. B pour les liquides : mousse ou CO₂, jamais d'eau seule. C pour les gaz : couper l'alimentation en priorité. D pour les métaux : poudre D spéciale. F pour les graisses alimentaires : agent F uniquement. Pour l'extincteur, méthode DAPS : Dégoupiller, Acheminer, Pointer, Supprimer.",
  "Pour conclure. Texte de référence : arrêté du deux mai deux mille cinq. Le SSI en trois étages : ECS, CMSI, DAS. Cinq classes de feux : A, B, C, D, F. Méthode DAPS pour l'extinction. Intervenir uniquement en phase d'éclosion ou début de développement. Après, on évacue.",
];

// ─── SST slides ───────────────────────────────────────────────────────────────
const SST_SLIDES: React.ReactNode[] = [
  <SlideWrap key="st0" bg="linear-gradient(135deg,#0f172a 50%,#0a1f15)">
    <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 26, padding: "26px 30px" }}>
      <div style={{ fontSize: 72, color: "#34d399", flexShrink: 0 }}>❤️</div>
      <div>
        <h2 style={{ fontSize: 23, fontWeight: 600, color: "#f1f5f9", marginBottom: 9 }}>Sauveteur Secouriste du Travail</h2>
        <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.75 }}>Le SST est la première personne à intervenir lors d'un accident sur le lieu de travail. Sa mission repose sur trois mots dans l'ordre exact : Protéger, Alerter, Secourir.</p>
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="st1">
    <div style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9" }}>La méthode P.A.S. — dans cet ordre précis</div>
      <div style={{ display: "flex", gap: 8, flex: 1, alignItems: "stretch" }}>
        {[{ n: "1 — Protéger", icon: "🛡", t: "Baliser et sécuriser", d: "Évaluer les dangers, baliser la zone. Ne jamais toucher la victime si un danger persiste.", c: "#fb923c", bg: "rgba(251,146,60,.07)", bc: "rgba(251,146,60,.2)" }, { n: "2 — Alerter", icon: "📞", t: "Déclencher les secours", d: "Appeler le 15, 18 ou 112. Lieu, nature, victimes, état, gestes effectués.", c: "#38bdf8", bg: "rgba(56,189,248,.07)", bc: "rgba(56,189,248,.2)" }, { n: "3 — Secourir", icon: "🩺", t: "Gestes de survie", d: "Appliquer le geste adapté : RCP, PLS, compression selon la situation.", c: "#34d399", bg: "rgba(52,211,153,.07)", bc: "rgba(52,211,153,.2)" }].map((p) => (
          <div key={p.n} style={{ flex: 1, borderRadius: 10, padding: "14px 12px", display: "flex", flexDirection: "column", gap: 7, background: p.bg, border: `1px solid ${p.bc}` }}>
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: p.c }}>{p.n}</span>
            <span style={{ fontSize: 28 }}>{p.icon}</span>
            <span style={{ fontSize: 15, fontWeight: 600, color: "#f1f5f9" }}>{p.t}</span>
            <span style={{ fontSize: 11.5, color: "#64748b", lineHeight: 1.45 }}>{p.d}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="st2">
    <div style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9" }}>Les gestes de survie essentiels</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, flex: 1 }}>
        {[{ icon: "❤️", t: "RCP — Réanimation", d: "30 compressions sternales + 2 insufflations. Rythme 100–120/min. Continuer jusqu'aux secours. Utiliser le DEA si disponible.", bg: "rgba(248,113,113,.07)" }, { icon: "🔄", t: "PLS — Position Latérale", d: "Pour victime inconsciente qui respire. Placer sur le côté pour éviter l'inhalation de vomissements.", bg: "rgba(56,189,248,.07)" }, { icon: "🩹", t: "Hémorragie — Compression", d: "Appuyer fort et sans relâcher sur la plaie. Maintenir la pression jusqu'aux secours. Ne pas retirer le pansement.", bg: "rgba(251,146,60,.07)" }, { icon: "🫁", t: "Étouffement — Heimlich", d: "5 claques dans le dos, puis 5 compressions abdominales. Alterner jusqu'à l'expulsion ou perte de conscience.", bg: "rgba(167,139,250,.07)" }].map((g) => (
          <div key={g.t} style={{ borderRadius: 9, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 4, background: g.bg }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#f1f5f9", display: "flex", alignItems: "center", gap: 7 }}><span>{g.icon}</span>{g.t}</div>
            <div style={{ fontSize: 11.5, color: "#64748b", lineHeight: 1.4 }}>{g.d}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="st3">
    <div style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9" }}>Situations spécifiques à connaître</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
        {[{ icon: "🔥", t: "Brûlure", d: "Refroidir à l'eau tempérée (15°C) pendant 15 min minimum. Ne jamais percer les cloques, ni appliquer de corps gras.", bg: "rgba(248,113,113,.07)" }, { icon: "😵", t: "Malaise / perte de connaissance", d: "Allonger, desserrer les vêtements. Inconscient qui respire : PLS. Inconscient sans respiration : RCP immédiat.", bg: "rgba(251,146,60,.07)" }, { icon: "⚡", t: "Accident électrique", d: "Ne jamais toucher la victime sous tension. Couper l'alimentation en priorité. Puis : protéger, alerter, secourir.", bg: "rgba(56,189,248,.07)" }].map((s) => (
          <div key={s.t} style={{ display: "flex", alignItems: "flex-start", gap: 12, borderRadius: 8, padding: "9px 12px", background: s.bg }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>{s.icon}</span>
            <div><strong style={{ display: "block", fontSize: 13, color: "#f1f5f9", fontWeight: 600, marginBottom: 2 }}>{s.t}</strong><p style={{ fontSize: 11.5, color: "#94a3b8", lineHeight: 1.4 }}>{s.d}</p></div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="st4" bg="linear-gradient(140deg,#0f172a,#0a1f15)">
    <div style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 18, fontWeight: 600, color: "#f1f5f9" }}>Ce qu'il faut retenir</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, flex: 1 }}>
        {[{ icon: "🛡", label: "Priorité 1", val: "Protéger", sub: "Sécuriser avant tout geste", bg: "rgba(251,146,60,.08)", bc: "rgba(251,146,60,.15)", lc: "#fb923c" }, { icon: "📞", label: "Alerter", val: "15 · 18 · 112", sub: "Lieu, victimes, état, gestes", bg: "rgba(56,189,248,.08)", bc: "rgba(56,189,248,.15)", lc: "#38bdf8" }, { icon: "❤️", label: "RCP", val: "30 comp. + 2 insuff.", sub: "100–120 / min + DEA", bg: "rgba(248,113,113,.08)", bc: "rgba(248,113,113,.15)", lc: "#f87171" }, { icon: "🔄", label: "PLS", val: "Inconscient + respire", sub: "Surveiller jusqu'aux secours", bg: "rgba(52,211,153,.08)", bc: "rgba(52,211,153,.15)", lc: "#34d399" }].map((c) => (
          <div key={c.label} style={{ borderRadius: 10, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 3, background: c.bg, border: `1px solid ${c.bc}` }}>
            <span style={{ fontSize: 18 }}>{c.icon}</span>
            <span style={{ fontSize: 9.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: .8, color: c.lc }}>{c.label}</span>
            <span style={{ fontSize: 13.5, fontWeight: 600, color: "#f1f5f9", lineHeight: 1.3 }}>{c.val}</span>
            <span style={{ fontSize: 10.5, color: "#64748b" }}>{c.sub}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,
];

const SST_NARRATION = [
  "SST, Sauveteur Secouriste du Travail. La première personne à intervenir lors d'un accident sur le lieu de travail. Sa mission repose sur trois mots dans un ordre non négociable : Protéger, Alerter, Secourir.",
  "La méthode PAS. D'abord Protéger : évaluer les dangers, baliser la zone, ne jamais toucher la victime si un risque persiste. Ensuite Alerter : quinze, dix-huit ou cent douze, en donnant lieu, nombre de victimes, état et gestes effectués. Enfin Secourir : appliquer le geste adapté à la situation.",
  "Les gestes essentiels. La RCP : trente compressions et deux insufflations, à cent à cent vingt par minute, sans interruption. Le DEA si disponible. La PLS pour l'inconscient qui respire. En cas d'hémorragie : comprimer fort sans relâcher. En cas d'étouffement : cinq claques dans le dos, puis cinq compressions abdominales.",
  "Trois situations spécifiques. La brûlure : eau tempérée pendant quinze minutes, ne jamais percer les cloques. Le malaise : PLS si respire, RCP si ne respire plus. L'accident électrique : couper l'alimentation avant de toucher la victime, sans exception.",
  "Pour conclure. Protéger, Alerter au quinze, dix-huit ou cent douze, puis Secourir. RCP : trente compressions et deux insufflations à cent à cent vingt par minute. PLS pour l'inconscient qui respire. Accident électrique : couper avant de toucher. Ces réflexes dans le bon ordre peuvent sauver une vie.",
];

// ─── SPRINKLER slides ─────────────────────────────────────────────────────────
const SPRINKLER_SLIDES: React.ReactNode[] = [
  <SlideWrap key="sp0" bg="linear-gradient(135deg,#0f172a 50%,#0c1a30)">
    <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 26, padding: "26px 30px" }}>
      <div style={{ fontSize: 72, color: "#60a5fa", flexShrink: 0 }}>💧</div>
      <div>
        <h2 style={{ fontSize: 23, fontWeight: 600, color: "#f1f5f9", marginBottom: 9 }}>Exploitation d'une installation Sprinkler</h2>
        <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.75 }}>Une installation sprinkler ne sauve un entrepôt que si elle est disponible le jour du sinistre. Le rôle de l'exploitant : surveiller, tracer, reconnaître les indisponibilités.</p>
        <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
          {[{ l: "EN 12845", c: "#60a5fa", bg: "rgba(96,165,250,.12)" }, { l: "APSAD R1", c: "#fb923c", bg: "rgba(251,146,60,.12)" }, { l: "NFPA 13", c: "#a78bfa", bg: "rgba(167,139,250,.12)" }].map((r) => (
            <span key={r.l} style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, background: r.bg, color: r.c }}>{r.l}</span>
          ))}
        </div>
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="sp1">
    <div style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9" }}>Principe et têtes sprinkler</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <div style={{ borderRadius: 9, padding: "11px 13px", background: "rgba(96,165,250,.07)", display: "flex", flexDirection: "column", gap: 5 }}>
          <span style={{ fontSize: 22, color: "#60a5fa" }}>💧</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#f1f5f9" }}>Déclenchement thermique automatique</span>
          <span style={{ fontSize: 11.5, color: "#64748b", lineHeight: 1.4 }}>L'ampoule se brise quand la température atteint le seuil. L'eau s'écoule uniquement sur la tête activée.</span>
        </div>
        <div style={{ borderRadius: 9, padding: "11px 13px", background: "rgba(251,146,60,.07)", display: "flex", flexDirection: "column", gap: 5 }}>
          <span style={{ fontSize: 22, color: "#fb923c" }}>🔔</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#f1f5f9" }}>Alarme A et Alarme B</span>
          <span style={{ fontSize: 11.5, color: "#64748b", lineHeight: 1.4 }}>Alarme A = mouvement d'eau. Alarme B = écoulement confirmé au gong hydraulique → appel secours.</span>
        </div>
      </div>
      <div style={{ background: "rgba(255,255,255,.03)", borderRadius: 8, padding: "10px 13px" }}>
        <div style={{ fontSize: 11, color: "#64748b", marginBottom: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: .8 }}>Couleurs des ampoules → température de déclenchement</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
          {[{ bg: "#f97316", l: "Or", t: "57°C" }, { bg: "#ef4444", l: "Rouge", t: "68°C" }, { bg: "#22c55e", l: "Vert", t: "79°C" }, { bg: "#3b82f6", l: "Bleu", t: "93°C" }, { bg: "#7c3aed", l: "Mauve", t: "141°C" }, { bg: "#1e293b", l: "Noir", t: "182°C+" }].map((a) => (
            <React.Fragment key={a.l}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: a.bg, border: "2px solid rgba(255,255,255,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#fff", fontWeight: 700 }}></div>
              <span style={{ fontSize: 11, color: "#64748b" }}>{a.l} {a.t}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="sp2">
    <div style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9" }}>Les 3 principales causes d'indisponibilité</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        {[{ n: 1, t: "Vanne fermée — 1ère cause mondiale", d: "Une vanne d'arrêt fermée pour une intervention, oubliée rouverte. À chaque ronde : vérifier que les vannes sont ouvertes, plombées, voyant de position correct.", bg: "rgba(248,113,113,.08)", nc: "#f87171", nbg: "rgba(248,113,113,.2)" }, { n: 2, t: "Stockage masquant les têtes", d: "Minimum 50 cm de dégagement sous chaque tête. Un stockage qui déborde empêche le rideau d'eau de s'épanouir.", bg: "rgba(251,146,60,.08)", nc: "#fb923c", nbg: "rgba(251,146,60,.2)" }, { n: 3, t: "Source d'eau indisponible", d: "Réservoir vide, pompe désamorcée, gel des canalisations. Tester le gong d'alarme chaque semaine, relever les pressions.", bg: "rgba(96,165,250,.08)", nc: "#60a5fa", nbg: "rgba(96,165,250,.2)" }].map((r) => (
          <div key={r.n} style={{ display: "flex", alignItems: "flex-start", gap: 12, borderRadius: 9, padding: "10px 13px", background: r.bg }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0, background: r.nbg, color: r.nc }}>{r.n}</div>
            <div><strong style={{ display: "block", fontSize: 13, color: "#f1f5f9", marginBottom: 3 }}>{r.t}</strong><p style={{ fontSize: 11.5, color: "#94a3b8", lineHeight: 1.4 }}>{r.d}</p></div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="sp3">
    <div style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9" }}>Les contrôles obligatoires de l'exploitant</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
        {[{ freq: "Hebdo", freqC: "#60a5fa", freqBg: "rgba(96,165,250,.15)", t: "Test gong d'alarme + relevé manomètres", d: "Ouvrir la vanne d'essai alarme B, vérifier déclenchement du gong. Lire et noter les pressions amont et aval.", bg: "rgba(96,165,250,.07)" }, { freq: "Mensuel", freqC: "#34d399", freqBg: "rgba(52,211,153,.15)", t: "Vérification vannes et têtes", d: "Contrôler toutes les vannes (position, plombage), inspecter les têtes (non peintes, dégagement ≥ 50 cm).", bg: "rgba(52,211,153,.07)" }, { freq: "Annuel", freqC: "#fb923c", freqBg: "rgba(251,146,60,.15)", t: "Maintenance complète par installateur agréé APSAD", d: "Essai pompe incendie, contrôle réserve d'eau, vérification réseau, mise à jour registre.", bg: "rgba(251,146,60,.07)" }].map((c) => (
          <div key={c.freq} style={{ display: "flex", alignItems: "flex-start", gap: 10, borderRadius: 8, padding: "9px 12px", background: c.bg }}>
            <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: .8, padding: "2px 8px", borderRadius: 20, flexShrink: 0, marginTop: 2, background: c.freqBg, color: c.freqC }}>{c.freq}</span>
            <div><strong style={{ display: "block", fontSize: 12.5, color: "#f1f5f9", marginBottom: 2 }}>{c.t}</strong><p style={{ fontSize: 11.5, color: "#64748b" }}>{c.d}</p></div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,

  <SlideWrap key="sp4" bg="linear-gradient(140deg,#0f172a,#0c1a30)">
    <div style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontSize: 18, fontWeight: 600, color: "#f1f5f9" }}>Ce qu'il faut retenir</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, flex: 1 }}>
        {[{ icon: "📚", label: "Normes", val: "EN 12845 · APSAD R1 · NFPA 13", sub: "Trois référentiels complémentaires", bg: "rgba(96,165,250,.08)", bc: "rgba(96,165,250,.15)", lc: "#60a5fa" }, { icon: "🔴", label: "Risque n°1", val: "Vanne fermée", sub: "À vérifier à chaque ronde", bg: "rgba(248,113,113,.08)", bc: "rgba(248,113,113,.15)", lc: "#f87171" }, { icon: "📏", label: "Dégagement", val: "≥ 50 cm sous les têtes", sub: "Aucun stockage au-dessus", bg: "rgba(251,146,60,.08)", bc: "rgba(251,146,60,.15)", lc: "#fb923c" }, { icon: "📋", label: "Registre", val: "Hebdo · Mensuel · Annuel", sub: "Traçabilité obligatoire", bg: "rgba(52,211,153,.08)", bc: "rgba(52,211,153,.15)", lc: "#34d399" }].map((c) => (
          <div key={c.label} style={{ borderRadius: 10, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 3, background: c.bg, border: `1px solid ${c.bc}` }}>
            <span style={{ fontSize: 18 }}>{c.icon}</span>
            <span style={{ fontSize: 9.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: .8, color: c.lc }}>{c.label}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#f1f5f9", lineHeight: 1.3 }}>{c.val}</span>
            <span style={{ fontSize: 10.5, color: "#64748b" }}>{c.sub}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideWrap>,
];

const SPRINKLER_NARRATION = [
  "Une installation sprinkler peut sauver un entrepôt. À condition d'être disponible le jour du sinistre. Le rôle de l'exploitant : surveiller, tracer, et savoir reconnaître les indisponibilités. Les normes de référence sont la EN douze mille huit cent quarante-cinq, l'APSAD R1 et la NFPA treize.",
  "Le principe : la chaleur brise l'ampoule d'une tête sprinkler, et l'eau s'écoule uniquement sur cette tête. La couleur indique la température de déclenchement : orange pour cinquante-sept degrés, rouge pour soixante-huit, vert pour soixante-dix-neuf. L'alarme A détecte un mouvement d'eau, l'alarme B confirme l'écoulement et déclenche les secours.",
  "Les trois causes d'indisponibilité. Première cause mondiale : la vanne fermée. Une vanne oubliée fermée après une intervention. À chaque ronde, vérifier les vannes ouvertes et plombées. Deuxième cause : le stockage trop proche des têtes. Minimum cinquante centimètres de dégagement. Troisième cause : la source d'eau indisponible, réservoir vide ou pompe désamorcée.",
  "Les contrôles obligatoires. Chaque semaine : tester le gong d'alarme et relever les pressions sur les manomètres. Chaque mois : inspecter toutes les vannes et têtes. Chaque année : maintenance complète par un installateur agréé APSAD avec essai de la pompe et contrôle de la réserve d'eau.",
  "Pour conclure. Normes : EN douze mille huit cent quarante-cinq, APSAD R1, NFPA treize. Risque numéro un : vanne fermée. Dégagement minimum : cinquante centimètres sous les têtes. Contrôles hebdomadaires, mensuels et annuels, tous consignés dans le registre. Surveiller, tracer, vérifier : c'est ça, exploiter un sprinkler.",
];

// ─── Config map ───────────────────────────────────────────────────────────────
const CONFIGS: Record<string, RecapConfig> = {
  atex:     { title: "Récap ATEX",         accent: "#f97316", slides: ATEX_SLIDES,     narration: ATEX_NARRATION },
  h0b0:     { title: "Récap H0B0",          accent: "#38bdf8", slides: H0B0_SLIDES,     narration: H0B0_NARRATION },
  bsbe:     { title: "Récap BS / BE Manœuvre", accent: "#a78bfa", slides: BSBE_SLIDES, narration: BSBE_NARRATION },
  ssiap1:   { title: "Récap SSIAP1",        accent: "#f87171", slides: SSIAP1_SLIDES,   narration: SSIAP1_NARRATION },
  sst:      { title: "Récap SST",           accent: "#34d399", slides: SST_SLIDES,      narration: SST_NARRATION },
  sprinkler:{ title: "Récap Sprinkler",     accent: "#60a5fa", slides: SPRINKLER_SLIDES, narration: SPRINKLER_NARRATION },
};

// ─── Voice helpers ────────────────────────────────────────────────────────────
function pickBestVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  let v = voices.find((v) => v.name.toLowerCase().includes("paul"));
  if (v) return v;
  v = voices.find((v) => v.lang?.startsWith("fr") && (v.name.toLowerCase().includes("neural") || v.name.toLowerCase().includes("natural") || v.name.toLowerCase().includes("online")));
  if (v) return v;
  v = voices.find((v) => v.lang?.startsWith("fr"));
  return v ?? voices[0] ?? null;
}

function labelVoice(v: SpeechSynthesisVoice): string {
  return v.name.replace("Microsoft ", "").replace(" Online (Natural) - French (France)", "").replace("(fr-FR)", "").trim();
}

function isStar(v: SpeechSynthesisVoice): boolean {
  const n = v.name.toLowerCase();
  return n.includes("paul") || n.includes("neural") || n.includes("natural") || n.includes("online");
}

// ─── Main component ───────────────────────────────────────────────────────────
export function RecapVideoWidget({ slug }: { slug: string }) {
  const key = getSlug(slug);
  const config = CONFIGS[key];

  const [cur, setCur] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [waveHeights, setWaveHeights] = useState([3, 3, 3, 3, 3]);
  const [status, setStatus] = useState("Voix Paul — appuyez sur Play");

  const waveRef = useRef<number | null>(null);
  const playingRef = useRef(false);

  // Load voices
  useEffect(() => {
    if (typeof window === "undefined") return;
    const sy = window.speechSynthesis;

    const load = () => {
      const all = sy.getVoices();
      const fr = all.filter((v) => v.lang?.startsWith("fr") || v.name.toLowerCase().includes("paul"));
      const list = fr.length ? fr : all;
      setVoices(list);
      const best = pickBestVoice(list);
      setVoice(best);
      setStatus(best ? `Voix : ${labelVoice(best)} — Play` : "Appuyez sur Play");
    };
    load();
    sy.onvoiceschanged = load;
    return () => { sy.onvoiceschanged = null; };
  }, []);

  // Wave animation
  const startWave = useCallback(() => {
    const tick = () => {
      setWaveHeights([3,3,3,3,3].map(() => 3 + Math.random() * 12));
      waveRef.current = requestAnimationFrame(tick);
    };
    waveRef.current = requestAnimationFrame(tick);
  }, []);

  const stopWave = useCallback(() => {
    if (waveRef.current) cancelAnimationFrame(waveRef.current);
    setWaveHeights([3, 3, 3, 3, 3]);
  }, []);

  const speak = useCallback((idx: number, onEnd: () => void) => {
    if (!config) return;
    const sy = window.speechSynthesis;
    sy.cancel();
    const u = new SpeechSynthesisUtterance(config.narration[idx]);
    u.lang = "fr-FR";
    u.rate = 0.87;
    u.pitch = 1.0;
    if (voice) u.voice = voice;
    setStatus("");
    startWave();
    u.onend = () => { stopWave(); setStatus(""); setTimeout(onEnd, 800); };
    u.onerror = () => { stopWave(); onEnd(); };
    sy.speak(u);
  }, [config, voice, startWave, stopWave]);

  const runFrom = useCallback((start: number) => {
    if (!config) return;
    playingRef.current = true;
    setPlaying(true);

    const step = (i: number) => {
      if (!playingRef.current || i >= config.slides.length) {
        playingRef.current = false;
        setPlaying(false);
        stopWave();
        if (i >= config.slides.length) setStatus("Module terminé ✓");
        return;
      }
      setCur(i);
      speak(i, () => { if (playingRef.current) step(i + 1); });
    };
    step(start);
  }, [config, speak, stopWave]);

  const stop = useCallback(() => {
    playingRef.current = false;
    setPlaying(false);
    window.speechSynthesis?.cancel();
    stopWave();
    setStatus("");
  }, [stopWave]);

  const handlePlay = useCallback(() => {
    if (playing) { stop(); return; }
    const start = cur >= (config?.slides.length ?? 0) ? 0 : cur;
    if (start === 0) setCur(0);
    runFrom(start);
  }, [playing, stop, cur, config, runFrom]);

  if (!config) return null;

  const N = config.slides.length;
  const accent = config.accent;
  const progress = N > 1 ? (cur / (N - 1)) * 100 : 0;

  return (
    <div style={{ background: "#0f172a", borderRadius: 14, overflow: "hidden", fontFamily: "system-ui,-apple-system,sans-serif", marginTop: 24 }}>
      {/* Header */}
      <div style={{ background: "#1e293b", padding: "9px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: accent, fontSize: 13, fontWeight: 600 }}>PREVENSIA — {config.title}</span>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <label style={{ fontSize: 11, color: "#475569" }}>Voix :</label>
          <select
            style={{ background: "#0f172a", color: "#94a3b8", border: "1px solid #334155", borderRadius: 6, fontSize: 11, padding: "3px 7px", cursor: "pointer", maxWidth: 200 }}
            value={voices.indexOf(voice!)}
            onChange={(e) => {
              const v = voices[parseInt(e.target.value)];
              setVoice(v);
            }}
          >
            {voices.map((v, i) => (
              <option key={i} value={i}>{isStar(v) ? "★ " : ""}{labelVoice(v)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Stage */}
      <div style={{ height: 340, position: "relative", overflow: "hidden" }}>
        {config.slides.map((slide, i) => (
          <div key={i} style={{ position: "absolute", inset: 0, display: i === cur ? "flex" : "none", flexDirection: "column" }}>
            {slide}
          </div>
        ))}
      </div>

      {/* Wave bar */}
      <div style={{ background: "#1e293b", padding: "7px 16px", display: "flex", alignItems: "center", gap: 8, minHeight: 36 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 14, flexShrink: 0 }}>
          {waveHeights.map((h, i) => (
            <div key={i} style={{ width: 3, height: h, background: accent, borderRadius: 2, transition: "height 0.05s" }} />
          ))}
        </div>
        <span style={{ fontSize: 11, color: "#475569", flex: 1, fontStyle: "italic" }}>{status}</span>
      </div>

      {/* Controls */}
      <div style={{ background: "#0f172a", padding: "9px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={handlePlay}
          style={{ width: 34, height: 34, borderRadius: "50%", background: accent, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 15, color: "#fff" }}
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? "⏸" : "▶"}
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", gap: 5, marginBottom: 6 }}>
            {config.slides.map((_, i) => (
              <div
                key={i}
                onClick={() => { if (playing) stop(); setCur(i); }}
                style={{ width: 5, height: 5, borderRadius: "50%", background: i === cur ? accent : "#334155", cursor: "pointer", transition: "background 0.2s" }}
              />
            ))}
          </div>
          <div style={{ height: 2, background: "#1e293b", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ height: "100%", background: accent, width: `${progress}%`, transition: "width 0.3s" }} />
          </div>
        </div>
        <span style={{ fontSize: 11, color: "#334155" }}>{cur + 1} / {N}</span>
      </div>
    </div>
  );
}
