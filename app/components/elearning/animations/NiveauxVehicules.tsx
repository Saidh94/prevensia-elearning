"use client";

const CSS = `
@keyframes nv-slide {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0);     }
}
@keyframes nv-badge {
  from { opacity: 0; transform: scale(0.4); }
  to   { opacity: 1; transform: scale(1);   }
}
@keyframes nv-line {
  from { opacity: 0; stroke-dashoffset: 60; }
  to   { opacity: 1; stroke-dashoffset: 0;  }
}
@keyframes nv-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.nv-card {
  opacity: 0;
  animation: nv-slide 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
}
.nv-badge {
  opacity: 0;
  transform-origin: center;
  animation: nv-badge 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards;
}
.nv-line {
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  opacity: 0;
  animation: nv-line 0.35s ease forwards;
}
.nv-footer {
  opacity: 0;
  animation: nv-fade 0.6s ease forwards;
}
`;

type Niveau = {
  code: string;
  label: string;
  detail: string;
  tension: string;
  bg: string;
  border: string;
  textColor: string;
  badgeBg: string;
  delay: string;
  lineDelay: string;
};

const NIVEAUX: Niveau[] = [
  {
    code: "B0L",
    label: "Exécutant non électricien",
    detail: "Travaux mécaniques non électriques, hors pièces actives HT",
    tension: "HT véhicule",
    bg: "#f0fdf4",
    border: "#16a34a",
    textColor: "#14532d",
    badgeBg: "#16a34a",
    delay: "0.2s",
    lineDelay: "0.65s",
  },
  {
    code: "B1L",
    label: "Exécutant électricien",
    detail: "Opérations électriques sur véhicule : remplacement pièces, câblage",
    tension: "HT véhicule",
    bg: "#dbeafe",
    border: "#2563eb",
    textColor: "#1e3a8a",
    badgeBg: "#2563eb",
    delay: "1.0s",
    lineDelay: "1.45s",
  },
  {
    code: "B2L",
    label: "Chargé de travaux",
    detail: "Dirige les exécutants, garantit la sécurité de l'équipe",
    tension: "HT véhicule",
    bg: "#fef3c7",
    border: "#d97706",
    textColor: "#78350f",
    badgeBg: "#d97706",
    delay: "1.8s",
    lineDelay: "2.25s",
  },
  {
    code: "B2TL",
    label: "Chargé de travaux sous tension",
    detail: "Opérations maintien sous tension HT — formation spécifique requise",
    tension: "HT véhicule sous tension",
    bg: "#fee2e2",
    border: "#dc2626",
    textColor: "#7f1d1d",
    badgeBg: "#dc2626",
    delay: "2.6s",
    lineDelay: "3.05s",
  },
];

export default function NiveauxVehicules() {
  const cardW = 340;
  const cardH = 54;
  const startX = (420 - cardW) / 2;
  const startY = 18;
  const gap = 10;
  const arrowH = 14;

  return (
    <div className="w-full select-none">
      <style>{CSS}</style>
      <svg
        viewBox="0 0 420 318"
        className="h-80 w-full"
        aria-label="Niveaux d'habilitation NF C 18-550 véhicules animés"
      >
        {/* Titre */}
        <text
          className="nv-footer"
          style={{ animationDelay: "0s" }}
          x="210"
          y="12"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="#374151"
        >
          Habilitations NF C 18-550 — Véhicules et engins électriques / hybrides
        </text>

        {NIVEAUX.map((niveau, i) => {
          const y = startY + 8 + i * (cardH + gap + arrowH);
          const arrowY = y + cardH;
          const badgeCx = startX + 26;
          const badgeCy = y + cardH / 2;

          return (
            <g key={niveau.code}>
              {/* Flèche */}
              {i < NIVEAUX.length - 1 && (
                <g>
                  <line
                    className="nv-line"
                    style={{ animationDelay: niveau.lineDelay }}
                    x1="210"
                    y1={arrowY + 1}
                    x2="210"
                    y2={arrowY + arrowH - 3}
                    stroke="#9ca3af"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <polygon
                    className="nv-badge"
                    style={{
                      animationDelay: niveau.lineDelay,
                      transformOrigin: `210px ${arrowY + arrowH}px`,
                    }}
                    points={`204,${arrowY + arrowH - 4} 216,${arrowY + arrowH - 4} 210,${arrowY + arrowH + 2}`}
                    fill="#9ca3af"
                  />
                </g>
              )}

              {/* Carte */}
              <g className="nv-card" style={{ animationDelay: niveau.delay }}>
                <rect
                  x={startX}
                  y={y}
                  width={cardW}
                  height={cardH}
                  rx="10"
                  fill={niveau.bg}
                  stroke={niveau.border}
                  strokeWidth="1.8"
                />
                {/* Badge code */}
                <rect
                  x={startX + 6}
                  y={y + 8}
                  width={44}
                  height={cardH - 16}
                  rx="7"
                  fill={niveau.badgeBg}
                />
                <text
                  x={badgeCx}
                  y={badgeCy + 5}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="900"
                  fill="#fff"
                >
                  {niveau.code}
                </text>
                {/* Label */}
                <text
                  x={startX + 60}
                  y={y + 22}
                  fontSize="11.5"
                  fontWeight="700"
                  fill={niveau.textColor}
                >
                  {niveau.label}
                </text>
                {/* Détail */}
                <text
                  x={startX + 60}
                  y={y + 37}
                  fontSize="9"
                  fill={niveau.textColor}
                >
                  {niveau.detail}
                </text>
                {/* Tag tension */}
                <rect
                  x={startX + cardW - 110}
                  y={y + cardH - 20}
                  width={104}
                  height={14}
                  rx="7"
                  fill={niveau.border}
                  fillOpacity="0.15"
                />
                <text
                  x={startX + cardW - 58}
                  y={y + cardH - 9}
                  textAnchor="middle"
                  fontSize="8"
                  fontWeight="600"
                  fill={niveau.textColor}
                >
                  {niveau.tension}
                </text>
              </g>
            </g>
          );
        })}

        {/* Pied de page */}
        <rect
          className="nv-footer"
          style={{ animationDelay: "3.4s" }}
          x="30"
          y="292"
          width="360"
          height="20"
          rx="10"
          fill="#f0fdf4"
          stroke="#86efac"
          strokeWidth="1.5"
        />
        <text
          className="nv-footer"
          style={{ animationDelay: "3.4s" }}
          x="210"
          y="305"
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          fill="#166534"
        >
          Chaque niveau nécessite une formation et une habilitation spécifiques
        </text>
      </svg>
    </div>
  );
}
