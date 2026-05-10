export default function SprinklerActivation() {
  return (
    <svg viewBox="0 0 420 220" className="h-56 w-full" aria-hidden="true">
      <style>{`
        @keyframes sp-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes sp-pop {
          from { opacity: 0; transform: scale(0.7); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes sp-heat {
          0%,100% { opacity: 0.5; r: 18px; }
          50%      { opacity: 1;   r: 24px; }
        }
        @keyframes sp-drop {
          from { transform: translateY(-8px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes sp-spray {
          from { stroke-dashoffset: 40; opacity: 0; }
          to   { stroke-dashoffset: 0;  opacity: 1; }
        }
        .sp-pipe   { animation: sp-fade .5s ease both .1s; }
        .sp-head   { animation: sp-pop  .4s ease both .7s; }
        .sp-bulb   { animation: sp-pop  .4s ease both 1.2s; }
        .sp-heat   { animation: sp-pop  .5s ease both 1.8s; }
        .sp-crack  { animation: sp-pop  .3s ease both 2.5s; }
        .sp-water  { stroke-dasharray: 40; animation: sp-spray .5s ease both 2.9s; }
        .sp-label  { animation: sp-fade .4s ease both 3.2s; }
        .sp-hpulse { animation: sp-heat 1.2s ease-in-out 1.9s infinite; }
      `}</style>

      {/* Réseau de tuyaux */}
      <g className="sp-pipe">
        <rect x="20" y="50" width="380" height="18" rx="9" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
        <text x="210" y="43" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1d4ed8">Réseau sous pression</text>
      </g>

      {/* Tête sprinkler */}
      <g className="sp-head" style={{ transformOrigin: "210px 95px" }}>
        {/* Corps */}
        <rect x="196" y="68" width="28" height="16" rx="4" fill="#60a5fa" stroke="#2563eb" strokeWidth="2.5" />
        {/* Déflecteur */}
        <rect x="188" y="84" width="44" height="8" rx="4" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
        {/* Bras déflecteur */}
        <line x1="210" y1="92" x2="190" y2="108" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="210" y1="92" x2="230" y2="108" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Ampoule */}
      <g className="sp-bulb" style={{ transformOrigin: "210px 80px" }}>
        <ellipse cx="210" cy="80" rx="6" ry="9" fill="#fca5a5" stroke="#dc2626" strokeWidth="2" />
        <ellipse cx="210" cy="74" rx="3" ry="2" fill="#fed7aa" />
      </g>

      {/* Source de chaleur */}
      <g className="sp-heat" style={{ transformOrigin: "210px 148px" }}>
        <circle className="sp-hpulse" cx="210" cy="148" r="18" fill="#fef3c7" stroke="#f59e0b" strokeWidth="0" />
        <path d="M210 130 Q202 138 206 146 Q200 140 204 150 Q208 144 210 156 Q212 144 216 150 Q220 140 214 146 Q218 138 210 130Z"
          fill="#f59e0b" />
        <path d="M210 135 Q206 141 208 147 Q210 143 210 150 Q210 143 212 147 Q214 141 210 135Z"
          fill="#fbbf24" />
        <text x="210" y="175" textAnchor="middle" fontSize="10" fontWeight="700" fill="#92400e">68°C</text>
      </g>

      {/* Ampoule craquée */}
      <g className="sp-crack" style={{ transformOrigin: "210px 80px" }}>
        <path d="M204 78 L208 82 L206 85 L212 80 L215 83" stroke="#dc2626" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* Jets d'eau */}
      {[
        { d: "M192 96 L168 140", delay: "2.9s" },
        { d: "M198 100 L184 148", delay: "3.0s" },
        { d: "M210 100 L210 152", delay: "3.1s" },
        { d: "M222 100 L236 148", delay: "3.0s" },
        { d: "M228 96 L252 140", delay: "2.9s" },
      ].map((jet, i) => (
        <path
          key={i}
          className="sp-water"
          d={jet.d}
          stroke="#2563eb"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          style={{ animationDelay: jet.delay }}
        />
      ))}

      {/* Labels */}
      <g className="sp-label">
        <text x="55" y="100" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="600">1. Réseau</text>
        <text x="55" y="112" textAnchor="middle" fontSize="9" fill="#3b82f6">sous pression</text>
        <text x="155" y="84" textAnchor="end" fontSize="10" fill="#1d4ed8" fontWeight="600">2. Tête + ampoule</text>
        <text x="282" y="150" textAnchor="start" fontSize="10" fill="#92400e" fontWeight="600">3. Chaleur &gt; seuil</text>
        <text x="282" y="163" textAnchor="start" fontSize="9" fill="#b45309">→ rupture ampoule</text>
        <text x="210" y="200" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="600">4. Diffusion automatique de l'eau</text>
      </g>
    </svg>
  );
}
