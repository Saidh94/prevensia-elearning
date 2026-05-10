"use client";

const CSS = `
@keyframes peas-slide {
  from { opacity: 0; transform: translateX(-18px); }
  to   { opacity: 1; transform: translateX(0);     }
}
@keyframes peas-arrow {
  from { opacity: 0; transform: scaleY(0); }
  to   { opacity: 1; transform: scaleY(1); }
}
@keyframes peas-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.peas-card {
  opacity: 0;
  animation: peas-slide 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
}
.peas-arrow {
  opacity: 0;
  transform-origin: top center;
  animation: peas-arrow 0.35s ease forwards;
}
.peas-footer {
  opacity: 0;
  animation: peas-fade 0.6s ease forwards;
}
`;

type Step = {
  letter: string;
  word: string;
  desc: string;
  bg: string;
  border: string;
  textColor: string;
  letterColor: string;
  delay: string;
  arrowDelay: string;
};

const STEPS: Step[] = [
  {
    letter: "P",
    word: "Protéger",
    desc: "Baliser, sécuriser la zone. Éviter tout sur-accident.",
    bg: "#fef3c7",
    border: "#f59e0b",
    textColor: "#78350f",
    letterColor: "#d97706",
    delay: "0.2s",
    arrowDelay: "0.65s",
  },
  {
    letter: "E",
    word: "Examiner",
    desc: "Évaluer l'état de la victime : conscience, respiration.",
    bg: "#dbeafe",
    border: "#3b82f6",
    textColor: "#1e3a8a",
    letterColor: "#2563eb",
    delay: "0.9s",
    arrowDelay: "1.35s",
  },
  {
    letter: "A",
    word: "Alerter",
    desc: "Appeler le 15 (SAMU), 18 (pompiers) ou 112.",
    bg: "#fee2e2",
    border: "#ef4444",
    textColor: "#7f1d1d",
    letterColor: "#dc2626",
    delay: "1.6s",
    arrowDelay: "2.05s",
  },
  {
    letter: "S",
    word: "Secourir",
    desc: "Appliquer les gestes appris : PLS, RCP, défibrillateur…",
    bg: "#dcfce7",
    border: "#22c55e",
    textColor: "#14532d",
    letterColor: "#16a34a",
    delay: "2.3s",
    arrowDelay: "2.75s",
  },
];

export default function PeasSst() {
  const cardH = 52;
  const cardW = 340;
  const startX = (420 - cardW) / 2;
  const startY = 20;
  const gap = 16;
  const arrowH = 14;

  return (
    <div className="w-full select-none">
      <style>{CSS}</style>
      <svg
        viewBox="0 0 420 310"
        className="h-72 w-full"
        aria-label="Méthode PEAS SST animée"
      >
        {STEPS.map((step, i) => {
          const y = startY + i * (cardH + gap + arrowH);
          const arrowY = y + cardH;
          return (
            <g key={step.letter}>
              {/* Flèche entre cartes */}
              {i < STEPS.length - 1 && (
                <g
                  className="peas-arrow"
                  style={{ animationDelay: step.arrowDelay }}
                >
                  <line
                    x1="210"
                    y1={arrowY + 1}
                    x2="210"
                    y2={arrowY + arrowH - 4}
                    stroke="#6b7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <polygon
                    points={`204,${arrowY + arrowH - 5} 216,${arrowY + arrowH - 5} 210,${arrowY + arrowH + 1}`}
                    fill="#6b7280"
                  />
                </g>
              )}

              {/* Carte */}
              <g
                className="peas-card"
                style={{ animationDelay: step.delay }}
              >
                <rect
                  x={startX}
                  y={y}
                  width={cardW}
                  height={cardH}
                  rx="10"
                  fill={step.bg}
                  stroke={step.border}
                  strokeWidth="1.8"
                />
                {/* Lettre */}
                <text
                  x={startX + 22}
                  y={y + 34}
                  fontSize="28"
                  fontWeight="900"
                  fill={step.letterColor}
                >
                  {step.letter}
                </text>
                {/* Séparateur */}
                <line
                  x1={startX + 46}
                  y1={y + 10}
                  x2={startX + 46}
                  y2={y + cardH - 10}
                  stroke={step.border}
                  strokeWidth="1.2"
                />
                {/* Mot-clé */}
                <text
                  x={startX + 58}
                  y={y + 22}
                  fontSize="13"
                  fontWeight="700"
                  fill={step.textColor}
                >
                  {step.word}
                </text>
                {/* Description */}
                <text
                  x={startX + 58}
                  y={y + 38}
                  fontSize="10.5"
                  fill={step.textColor}
                >
                  {step.desc}
                </text>
              </g>
            </g>
          );
        })}

        {/* Pied de page */}
        <rect
          className="peas-footer"
          style={{ animationDelay: "3.2s" }}
          x="60"
          y="282"
          width="300"
          height="20"
          rx="10"
          fill="#f0fdf4"
          stroke="#86efac"
          strokeWidth="1.5"
        />
        <text
          className="peas-footer"
          style={{ animationDelay: "3.2s" }}
          x="210"
          y="295"
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          fill="#166534"
        >
          Ne jamais déplacer la victime sauf danger immédiat
        </text>
      </svg>
    </div>
  );
}
