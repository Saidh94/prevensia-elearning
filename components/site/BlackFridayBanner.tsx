"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const BF_START = new Date("2026-11-20T00:00:00").getTime();
const BF_END   = new Date("2026-12-05T00:00:00").getTime();

const ITEMS = [
  "🔥 BLACK FRIDAY — −25 % SUR NOS E-LEARNINGS",
  "⚡ Habilitation H0B0 / H0V — 190 € → 143 € HT",
  "💥 ATEX NIV 0 Sensibilisation — 129 € → 97 € HT",
  "📅 OFFRE DU 20 NOV. AU 4 DÉC. 2026",
  "👉 RÉDUCTION AUTOMATIQUE À LA COMMANDE",
  "🎯 2 FORMATIONS E-LEARNING EN PROMOTION",
];

export function BlackFridayBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (Date.now() >= BF_START && Date.now() < BF_END) {
      setVisible(true);
    }
  }, []);

  if (!visible || dismissed) return null;

  const track = [...ITEMS, ...ITEMS];

  return (
    <div role="banner" style={{ background: "#0a0a0a", borderBottom: "2px solid #cc1a1a" }}>

      {/* Ligne 1 — titre + CTA */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 16px",
        gap: "12px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
          <span style={{
            background: "#cc1a1a",
            color: "#fff",
            fontWeight: 900,
            fontSize: "13px",
            letterSpacing: "0.15em",
            padding: "4px 10px",
            borderRadius: "6px",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}>
            BLACK FRIDAY
          </span>
          <p style={{ color: "#fff", fontWeight: 800, fontSize: "17px", margin: 0 }}>
            <span style={{ color: "#ff3333" }}>−25&nbsp;%</span>
            {" "}sur H0B0 et ATEX NIV&nbsp;0
            <span style={{ color: "#aaa", fontWeight: 400, fontSize: "14px" }}>
              {" · du 20 nov. au 4 déc. 2026"}
            </span>
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
          <Link href="/elearning" style={{
            background: "#cc1a1a",
            color: "#fff",
            fontWeight: 800,
            fontSize: "14px",
            padding: "8px 16px",
            borderRadius: "8px",
            textDecoration: "none",
            border: "2px solid #ff3333",
            whiteSpace: "nowrap",
          }}>
            En profiter →
          </Link>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Fermer"
            style={{
              background: "none",
              border: "none",
              color: "#666",
              cursor: "pointer",
              fontSize: "18px",
              padding: "4px 6px",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Ligne 2 — ticker défilant */}
      <div style={{ background: "#cc1a1a", overflow: "hidden", padding: "6px 0" }}>
        <div className="bf-marquee-track">
          {track.map((item, i) => (
            <span key={i} style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
              padding: "0 24px",
            }}>
              {item}
              <span style={{ marginLeft: "24px", opacity: 0.5 }}>|</span>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
