"use client";

import { useState, useEffect } from "react";
import { BF_START, BF_END } from "@/lib/blackfriday";

type Props = {
  original: number;   // prix normal HT
  unit?: string;      // ex: "/ pers." — facultatif
};

/**
 * Affiche le prix barré + prix réduit pendant la période Black Friday.
 * En dehors de la période, affiche simplement le prix normal.
 */
export function BFPrice({ original, unit = "EUR HT" }: Props) {
  const [bf, setBf] = useState(false);

  useEffect(() => {
    setBf(Date.now() >= BF_START && Date.now() < BF_END);
  }, []);

  const discounted = Math.round(original * 0.75);

  if (!bf) {
    return (
      <span>
        {original}&nbsp;{unit}
      </span>
    );
  }

  return (
    <span style={{ display: "inline-flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
      <span style={{
        textDecoration: "line-through",
        color: "#94a3b8",
        fontWeight: 500,
        fontSize: "0.9em",
      }}>
        {original}&nbsp;{unit}
      </span>
      <span style={{
        color: "#cc1a1a",
        fontWeight: 800,
        fontSize: "1.1em",
      }}>
        {discounted}&nbsp;{unit}
      </span>
      <span style={{
        background: "#cc1a1a",
        color: "#fff",
        fontWeight: 700,
        fontSize: "0.72em",
        padding: "2px 7px",
        borderRadius: "4px",
        letterSpacing: "0.05em",
        verticalAlign: "middle",
      }}>
        −25&nbsp;%
      </span>
    </span>
  );
}
