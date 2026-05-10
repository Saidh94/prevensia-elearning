"use client";

const CSS = `
@keyframes ce-pop {
  from { opacity: 0; transform: scale(0.5); }
  to   { opacity: 1; transform: scale(1);   }
}
@keyframes ce-fade {
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0);   }
}
.ce-card {
  opacity: 0;
  animation: ce-pop 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards;
}
.ce-label {
  opacity: 0;
  animation: ce-fade 0.5s ease forwards;
}
.ce-footer {
  opacity: 0;
  animation: ce-fade 0.6s ease forwards;
}
`;

type FireClass = {
  letter: string;
  name: string;
  example: string;
  agentShort: string;
  bg: string;
  border: string;
  textColor: string;
  letterBg: string;
  delay: string;
};

const CLASSES: FireClass[] = [
  {
    letter: "A",
    name: "Solides",
    example: "bois, papier, tissu",
    agentShort: "Eau pulv. / Poudre ABC",
    bg: "#fee2e2",
    border: "#dc2626",
    textColor: "#7f1d1d",
    letterBg: "#dc2626",
    delay: "0.1s",
  },
  {
    letter: "B",
    name: "Liquides",
    example: "solvants, hydrocarbures",
    agentShort: "CO₂ / Mousse / Poudre",
    bg: "#fef3c7",
    border: "#f59e0b",
    textColor: "#78350f",
    letterBg: "#d97706",
    delay: "0.5s",
  },
  {
    letter: "C",
    name: "Gaz",
    example: "propane, méthane",
    agentShort: "Poudre ABC — couper alimentation",
    bg: "#dbeafe",
    border: "#3b82f6",
    textColor: "#1e3a8a",
    letterBg: "#2563eb",
    delay: "0.9s",
  },
  {
    letter: "D",
    name: "Métaux",
    example: "magnésium, lithium",
    agentShort: "Poudre spéciale métaux",
    bg: "#f3e8ff",
    border: "#9333ea",
    textColor: "#581c87",
    letterBg: "#9333ea",
    delay: "1.3s",
  },
  {
    letter: "E",
    name: "Électrique",
    example: "armoire élec., câbles sous tension",
    agentShort: "CO₂ / Poudre — JAMAIS eau",
    bg: "#dcfce7",
    border: "#16a34a",
    textColor: "#14532d",
    letterBg: "#15803d",
    delay: "1.7s",
  },
  {
    letter: "F",
    name: "Graisses",
    example: "huile de friture",
    agentShort: "Mousse spéciale cuisines",
    bg: "#ffedd5",
    border: "#ea580c",
    textColor: "#7c2d12",
    letterBg: "#ea580c",
    delay: "2.1s",
  },
];

export default function ClassesExtincteurs() {
  // 2-column grid: 3 rows × 2 cols
  const cardW = 188;
  const cardH = 68;
  const colGap = 8;
  const rowGap = 8;
  const totalW = 2 * cardW + colGap;
  const startX = (420 - totalW) / 2;
  const startY = 14;

  return (
    <div className="w-full select-none">
      <style>{CSS}</style>
      <svg
        viewBox="0 0 420 310"
        className="h-72 w-full"
        aria-label="Classes de feux et extincteurs animées"
      >
        {/* Titre */}
        <text
          className="ce-label"
          style={{ animationDelay: "0s" }}
          x="210"
          y="12"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="#374151"
        >
          Classes de feux — agents extincteurs adaptés
        </text>

        {CLASSES.map((cls, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = startX + col * (cardW + colGap);
          const y = startY + 8 + row * (cardH + rowGap);
          const badgeCx = x + 18;
          const badgeCy = y + cardH / 2;

          return (
            <g
              key={cls.letter}
              className="ce-card"
              style={{ animationDelay: cls.delay, transformOrigin: `${x + cardW / 2}px ${y + cardH / 2}px` }}
            >
              <rect
                x={x}
                y={y}
                width={cardW}
                height={cardH}
                rx="9"
                fill={cls.bg}
                stroke={cls.border}
                strokeWidth="1.6"
              />
              {/* Badge lettre */}
              <circle cx={badgeCx} cy={badgeCy} r="13" fill={cls.letterBg} />
              <text
                x={badgeCx}
                y={badgeCy + 5}
                textAnchor="middle"
                fontSize="14"
                fontWeight="900"
                fill="#fff"
              >
                {cls.letter}
              </text>
              {/* Nom feu */}
              <text
                x={x + 38}
                y={y + 21}
                fontSize="11"
                fontWeight="700"
                fill={cls.textColor}
              >
                {cls.name}
              </text>
              {/* Exemple */}
              <text
                x={x + 38}
                y={y + 34}
                fontSize="8.5"
                fill={cls.textColor}
                fontStyle="italic"
              >
                {cls.example}
              </text>
              {/* Agent */}
              <text
                x={x + 38}
                y={y + 48}
                fontSize="8.5"
                fontWeight="600"
                fill={cls.textColor}
              >
                {cls.agentShort}
              </text>
            </g>
          );
        })}

        {/* Pied de page */}
        <rect
          className="ce-footer"
          style={{ animationDelay: "2.8s" }}
          x="30"
          y="285"
          width="360"
          height="20"
          rx="10"
          fill="#fef9ee"
          stroke="#fbbf24"
          strokeWidth="1.5"
        />
        <text
          className="ce-footer"
          style={{ animationDelay: "2.8s" }}
          x="210"
          y="298"
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          fill="#92400e"
        >
          Vérifier la classe avant d'agir — eau interdite sur classe E et F
        </text>
      </svg>
    </div>
  );
}
