"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const BF_START = new Date("2026-11-20T00:00:00").getTime();
const BF_END   = new Date("2026-12-05T00:00:00").getTime();

const ITEMS = [
  "🔥 BLACK FRIDAY — −25 % sur H0B0 et ATEX NIV 0",
  "⚡ Habilitation H0B0 / H0V — 190 € → 143 € HT",
  "💥 ATEX NIV 0 Sensibilisation — 129 € → 97 € HT",
  "📅 OFFRE DU 20 NOV. AU 4 DÉC. 2026",
  "👉 RÉDUCTION AUTOMATIQUE À LA COMMANDE",
  "🎯 2 FORMATIONS EN PROMOTION",
];

export function BlackFridayBanner() {
  const [visible, setVisible]   = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (Date.now() >= BF_START && Date.now() < BF_END) {
      setVisible(true);
    }
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
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
        padding: isMobile ? "8px 10px" : "10px 16px",
        gap: isMobile ? "6px" : "12px",
      }}>
        {/* Côté gauche */}
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? "6px" : "12px", flex: "1 1 0", minWidth: 0, overflow: "hidden" }}>
          <span style={{
            background: "#cc1a1a",
            color: "#fff",
            fontWeight: 900,
            fontSize: isMobile ? "10px" : "13px",
            letterSpacing: "0.12em",
            padding: isMobile ? "3px 6px" : "4px 10px",
            borderRadius: "5px",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}>
            {isMobile ? "BF" : "BLACK FRIDAY"}
          </span>
          <p style={{
            color: "#fff",
            fontWeight: 800,
            fontSize: isMobile ? "13px" : "17px",
            margin: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}>
            <span style={{ color: "#ff3333" }}>−25&nbsp;%</span>
            {" "}sur H0B0 et ATEX NIV&nbsp;0
            {!isMobile && (
              <span style={{ color: "#aaa", fontWeight: 400, fontSize: "14px" }}>
                {" · du 20 nov. au 4 déc. 2026"}
              </span>
            )}
          </p>
        </div>

        {/* Côté droit */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
          <Link href="/elearning" style={{
            background: "#cc1a1a",
            color: "#fff",
            fontWeight: 800,
            fontSize: isMobile ? "12px" : "14px",
            padding: isMobile ? "6px 10px" : "8px 16px",
            borderRadius: "7px",
            textDecoration: "none",
            border: "2px solid #ff3333",
            whiteSpace: "nowrap",
          }}>
            {isMobile ? "→" : "En profiter →"}
          </Link>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Fermer le bandeau Black Friday"
            style={{
              background: "none",
              border: "none",
              color: "#666",
              cursor: "pointer",
              fontSize: isMobile ? "15px" : "18px",
              padding: "4px 5px",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Ligne 2 — ticker défilant */}
      <div style={{ background: "#cc1a1a", overflow: "hidden", padding: "5px 0" }}>
        <div className="bf-marquee-track">
          {track.map((item, i) => (
            <span key={i} style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: isMobile ? "11px" : "13px",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
              padding: isMobile ? "0 16px" : "0 24px",
            }}>
              {item}
              <span style={{ marginLeft: isMobile ? "16px" : "24px", opacity: 0.5 }}>|</span>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
