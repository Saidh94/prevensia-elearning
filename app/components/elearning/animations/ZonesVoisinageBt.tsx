"use client";

const CSS = `
@keyframes zvb-fade {
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0);   }
}
@keyframes zvb-ring {
  from { r: 0; opacity: 0; }
  to   { opacity: 1; }
}
@keyframes zvb-expand {
  0%   { r: 4;  opacity: 0; }
  100% { opacity: 1; }
}
@keyframes zvb-pop {
  from { opacity: 0; transform: scale(0.5); }
  to   { opacity: 1; transform: scale(1);   }
}
@keyframes zvb-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.55; }
}
.zvb-outer {
  opacity: 0;
  animation: zvb-fade 0.8s ease forwards;
}
.zvb-inner {
  opacity: 0;
  animation: zvb-fade 0.7s ease forwards;
}
.zvb-conductor {
  opacity: 0;
  animation: zvb-pop 0.5s ease forwards;
}
.zvb-label {
  opacity: 0;
  animation: zvb-fade 0.6s ease forwards;
}
.zvb-person {
  opacity: 0;
  animation: zvb-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards;
}
.zvb-warn {
  opacity: 0;
  animation: zvb-fade 0.6s ease forwards;
}
.zvb-bolt {
  animation: zvb-pulse 1.2s ease-in-out 3.8s infinite;
  opacity: 0;
  animation-fill-mode: forwards;
}
`;

export default function ZonesVoisinageBt() {
  // Centre du conducteur: cx=210, cy=155
  // Zone voisinage simple BT : r=110 (représente ~3 m)
  // Zone voisinage renforcé BT : r=42 (représente ~30 cm)
  return (
    <div className="w-full select-none">
      <style>{CSS}</style>
      <svg viewBox="0 0 420 310" className="h-72 w-full" aria-label="Zones de voisinage BT animées">

        {/* ── Zone voisinage simple (3 m) ── */}
        <circle
          className="zvb-outer"
          style={{ animationDelay: "0.2s" }}
          cx="210" cy="155" r="110"
          fill="#dbeafe" fillOpacity="0.5"
          stroke="#3b82f6" strokeWidth="2" strokeDasharray="8 4"
        />

        {/* ── Zone voisinage renforcé (30 cm) ── */}
        <circle
          className="zvb-inner"
          style={{ animationDelay: "1.0s" }}
          cx="210" cy="155" r="42"
          fill="#fee2e2" fillOpacity="0.7"
          stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5 3"
        />

        {/* ── Conducteur BT central ── */}
        <circle
          className="zvb-conductor"
          style={{ animationDelay: "1.8s" }}
          cx="210" cy="155" r="10"
          fill="#f59e0b"
          stroke="#92400e" strokeWidth="2"
        />
        <text
          className="zvb-conductor"
          style={{ animationDelay: "1.8s" }}
          x="210" y="159" textAnchor="middle"
          fontSize="9" fontWeight="800" fill="#92400e"
        >
          BT
        </text>

        {/* ── Étiquette zone renforcée ── */}
        <line
          className="zvb-label"
          style={{ animationDelay: "1.2s" }}
          x1="210" y1="113" x2="210" y2="92"
          stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 2"
        />
        <rect
          className="zvb-label"
          style={{ animationDelay: "1.2s" }}
          x="130" y="74" width="160" height="18" rx="9"
          fill="#fee2e2" stroke="#dc2626" strokeWidth="1"
        />
        <text
          className="zvb-label"
          style={{ animationDelay: "1.2s" }}
          x="210" y="86" textAnchor="middle"
          fontSize="10" fontWeight="700" fill="#dc2626"
        >
          Zone renforcée BT — 30 cm
        </text>

        {/* ── Étiquette zone simple ── */}
        <line
          className="zvb-label"
          style={{ animationDelay: "0.5s" }}
          x1="210" y1="45" x2="210" y2="56"
          stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 2"
        />
        <rect
          className="zvb-label"
          style={{ animationDelay: "0.5s" }}
          x="140" y="28" width="140" height="18" rx="9"
          fill="#dbeafe" stroke="#3b82f6" strokeWidth="1"
        />
        <text
          className="zvb-label"
          style={{ animationDelay: "0.5s" }}
          x="210" y="40" textAnchor="middle"
          fontSize="10" fontWeight="700" fill="#1d4ed8"
        >
          Zone voisinage BT — 3 m
        </text>

        {/* ── Flèche distance 30 cm ── */}
        <text
          className="zvb-label"
          style={{ animationDelay: "1.5s" }}
          x="246" y="158" textAnchor="start"
          fontSize="9" fill="#dc2626"
        >
          ← 30 cm →
        </text>

        {/* ── Flèche distance 3 m ── */}
        <text
          className="zvb-label"
          style={{ animationDelay: "0.8s" }}
          x="264" y="148" textAnchor="start"
          fontSize="9" fill="#1d4ed8"
        >
          ←— 3 m —→
        </text>

        {/* ── Personnage (silhouette) à la limite de la zone simple ── */}
        <g className="zvb-person" style={{ animationDelay: "2.4s", transform: "translate(330px, 100px)" }}>
          {/* tête */}
          <circle cx="0" cy="0" r="8" fill="#6b7280" />
          {/* corps */}
          <line x1="0" y1="8" x2="0" y2="34" stroke="#6b7280" strokeWidth="3.5" strokeLinecap="round" />
          {/* bras */}
          <line x1="-10" y1="18" x2="10" y2="18" stroke="#6b7280" strokeWidth="3" strokeLinecap="round" />
          {/* jambes */}
          <line x1="0" y1="34" x2="-8" y2="54" stroke="#6b7280" strokeWidth="3" strokeLinecap="round" />
          <line x1="0" y1="34" x2="8" y2="54" stroke="#6b7280" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* ── Éclair / danger renforcé ── */}
        <text
          className="zvb-bolt"
          style={{ animationDelay: "2.9s" }}
          x="210" y="155" textAnchor="middle"
          fontSize="18" fill="#dc2626"
        >
          ⚡
        </text>

        {/* ── Message récapitulatif ── */}
        <rect
          className="zvb-warn"
          style={{ animationDelay: "3.2s" }}
          x="30" y="276" width="360" height="22" rx="11"
          fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"
        />
        <text
          className="zvb-warn"
          style={{ animationDelay: "3.2s" }}
          x="210" y="290" textAnchor="middle"
          fontSize="10" fontWeight="600" fill="#92400e"
        >
          Sans habilitation → accès interdit à la zone renforcée BT
        </text>
      </svg>
    </div>
  );
}
