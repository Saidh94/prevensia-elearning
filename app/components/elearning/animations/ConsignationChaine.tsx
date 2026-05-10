"use client";

const CSS = `
@keyframes cc-slide {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0);    }
}
@keyframes cc-arrow {
  from { opacity: 0; stroke-dashoffset: 30; }
  to   { opacity: 1; stroke-dashoffset: 0;  }
}
@keyframes cc-badge {
  from { opacity: 0; transform: scale(0.4); }
  to   { opacity: 1; transform: scale(1);   }
}
@keyframes cc-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.cc-step {
  opacity: 0;
  animation: cc-slide 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
}
.cc-arrow {
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  opacity: 0;
  animation: cc-arrow 0.4s ease forwards;
}
.cc-badge {
  opacity: 0;
  transform-origin: center;
  animation: cc-badge 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards;
}
.cc-footer {
  opacity: 0;
  animation: cc-fade 0.6s ease forwards;
}
`;

type ConsStep = {
  num: string;
  title: string;
  detail: string;
  color: string;
  fill: string;
  delay: string;
  arrowDelay: string;
};

const STEPS: ConsStep[] = [
  {
    num: "1",
    title: "Séparer",
    detail: "Ouvrir le dispositif de séparation (sectionneur, disjoncteur…)",
    color: "#dc2626",
    fill: "#fee2e2",
    delay: "0.2s",
    arrowDelay: "0.65s",
  },
  {
    num: "2",
    title: "Condamner",
    detail: "Verrouiller en position ouverte (cadenas, étiquette de consignation)",
    color: "#d97706",
    fill: "#fef3c7",
    delay: "1.0s",
    arrowDelay: "1.45s",
  },
  {
    num: "3",
    title: "Vérifier l'absence de tension",
    detail: "Mesurer avec un VAT conforme avant tout contact",
    color: "#7c3aed",
    fill: "#ede9fe",
    delay: "1.8s",
    arrowDelay: "2.25s",
  },
  {
    num: "4",
    title: "Mettre à la terre et en court-circuit",
    detail: "MALT + CCT côté travaux (si tension > 1 000 V ou risque de réalimentation)",
    color: "#0369a1",
    fill: "#e0f2fe",
    delay: "2.6s",
    arrowDelay: "3.05s",
  },
  {
    num: "5",
    title: "Délimiter la zone de travail",
    detail: "Balisage, panneaux, protection des pièces nues voisines",
    color: "#15803d",
    fill: "#dcfce7",
    delay: "3.4s",
    arrowDelay: "3.85s",
  },
];

export default function ConsignationChaine() {
  const cardW = 340;
  const cardH = 46;
  const startX = (420 - cardW) / 2;
  const startY = 14;
  const gapH = 10;
  const arrowLen = 12;

  return (
    <div className="w-full select-none">
      <style>{CSS}</style>
      <svg
        viewBox="0 0 420 318"
        className="h-80 w-full"
        aria-label="Chaîne de consignation électrique animée"
      >
        {STEPS.map((step, i) => {
          const y = startY + i * (cardH + gapH + arrowLen);
          const arrowY = y + cardH;
          const badgeCx = startX + 22;
          const badgeCy = y + cardH / 2;

          return (
            <g key={step.num}>
              {/* Flèche */}
              {i < STEPS.length - 1 && (
                <g>
                  <line
                    className="cc-arrow"
                    style={{ animationDelay: step.arrowDelay }}
                    x1="210"
                    y1={arrowY + 1}
                    x2="210"
                    y2={arrowY + arrowLen - 3}
                    stroke="#6b7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <polygon
                    className="cc-badge"
                    style={{ animationDelay: step.arrowDelay, transformOrigin: `210px ${arrowY + arrowLen}px` }}
                    points={`204,${arrowY + arrowLen - 4} 216,${arrowY + arrowLen - 4} 210,${arrowY + arrowLen + 2}`}
                    fill="#6b7280"
                  />
                </g>
              )}

              {/* Carte */}
              <g className="cc-step" style={{ animationDelay: step.delay }}>
                <rect
                  x={startX}
                  y={y}
                  width={cardW}
                  height={cardH}
                  rx="9"
                  fill={step.fill}
                  stroke={step.color}
                  strokeWidth="1.8"
                />
                {/* Badge numéro */}
                <circle cx={badgeCx} cy={badgeCy} r="13" fill={step.color} />
                <text
                  x={badgeCx}
                  y={badgeCy + 4.5}
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="900"
                  fill="#fff"
                >
                  {step.num}
                </text>
                {/* Titre */}
                <text
                  x={startX + 44}
                  y={y + 19}
                  fontSize="11.5"
                  fontWeight="700"
                  fill={step.color}
                >
                  {step.title}
                </text>
                {/* Détail */}
                <text
                  x={startX + 44}
                  y={y + 34}
                  fontSize="9.5"
                  fill="#374151"
                >
                  {step.detail}
                </text>
              </g>
            </g>
          );
        })}

        {/* Pied de page */}
        <rect
          className="cc-footer"
          style={{ animationDelay: "4.2s" }}
          x="30"
          y="294"
          width="360"
          height="20"
          rx="10"
          fill="#fef3c7"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />
        <text
          className="cc-footer"
          style={{ animationDelay: "4.2s" }}
          x="210"
          y="307"
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          fill="#78350f"
        >
          Ordre impératif — ne jamais sauter d'étape
        </text>
      </svg>
    </div>
  );
}
