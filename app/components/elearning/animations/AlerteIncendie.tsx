export default function AlerteIncendie() {
  return (
    <svg viewBox="0 0 420 220" className="h-56 w-full" aria-hidden="true">
      <style>{`
        @keyframes ai-pop {
          from { opacity: 0; transform: scale(0.7); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes ai-arrow {
          from { opacity: 0; stroke-dashoffset: 40; }
          to   { opacity: 1; stroke-dashoffset: 0; }
        }
        @keyframes ai-pulse {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.4; }
        }
        .ai-step1 { animation: ai-pop .5s ease both; animation-delay: 0.1s; }
        .ai-step2 { animation: ai-pop .5s ease both; animation-delay: 0.8s; }
        .ai-step3 { animation: ai-pop .5s ease both; animation-delay: 1.5s; }
        .ai-arr1  { stroke-dasharray: 40; animation: ai-arrow .4s ease both; animation-delay: 0.65s; }
        .ai-arr2  { stroke-dasharray: 40; animation: ai-arrow .4s ease both; animation-delay: 1.35s; }
        .ai-flame { animation: ai-pulse 1.2s ease-in-out 2.1s infinite; }
      `}</style>

      {/* Étape 1 — DÉCOUVRIR */}
      <g className="ai-step1" style={{ transformOrigin: "90px 100px" }}>
        <rect x="20" y="40" width="140" height="120" rx="16" fill="#fee2e2" stroke="#dc2626" strokeWidth="3" />
        <text x="90" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="#dc2626" letterSpacing="1">DÉCOUVRIR</text>
        {/* Flamme stylisée */}
        <path className="ai-flame" d="M82 130 Q72 110 85 100 Q80 90 92 80 Q94 95 100 92 Q106 80 108 68 Q118 85 115 102 Q126 95 120 115 Q128 125 120 135 Q108 145 92 142 Q80 145 82 130Z"
          fill="#dc2626" opacity="0.85" />
        <path d="M90 125 Q84 115 90 108 Q96 115 90 125Z" fill="#fef3c7" />
      </g>

      {/* Flèche 1 */}
      <path className="ai-arr1" d="M165 100 H195" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
      <path className="ai-arr1" d="M190 94 L200 100 L190 106" stroke="#dc2626" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Étape 2 — ALERTER */}
      <g className="ai-step2" style={{ transformOrigin: "210px 100px" }}>
        <rect x="140" y="40" width="140" height="120" rx="16" fill="#fef3c7" stroke="#d97706" strokeWidth="3" />
        <text x="210" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="#d97706" letterSpacing="1">ALERTER</text>
        {/* Cloche d'alarme */}
        <path d="M210 82 Q195 88 193 105 L193 118 H227 L227 105 Q225 88 210 82Z" fill="#d97706" opacity="0.9" />
        <rect x="204" y="118" width="12" height="6" rx="2" fill="#d97706" />
        <circle cx="210" cy="126" r="5" fill="#d97706" />
        {/* Ondes sonores */}
        <path d="M232 93 Q238 103 232 113" stroke="#d97706" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M240 88 Q249 103 240 118" stroke="#d97706" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
        <path d="M188 93 Q182 103 188 113" stroke="#d97706" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M180 88 Q171 103 180 118" stroke="#d97706" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
        {/* 18 */}
        <circle cx="210" cy="148" r="14" fill="white" stroke="#d97706" strokeWidth="2.5" />
        <text x="210" y="153" textAnchor="middle" fontSize="12" fontWeight="800" fill="#d97706">18</text>
      </g>

      {/* Flèche 2 */}
      <path className="ai-arr2" d="M285 100 H315" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
      <path className="ai-arr2" d="M310 94 L320 100 L310 106" stroke="#dc2626" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Étape 3 — ÉVACUER */}
      <g className="ai-step3" style={{ transformOrigin: "330px 100px" }}>
        <rect x="260" y="40" width="140" height="120" rx="16" fill="#dcfce7" stroke="#16a34a" strokeWidth="3" />
        <text x="330" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="#16a34a" letterSpacing="1">ÉVACUER</text>
        {/* Bonhomme qui court */}
        <circle cx="318" cy="92" r="9" fill="#16a34a" />
        <line x1="318" y1="101" x2="318" y2="125" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="318" y1="125" x2="308" y2="142" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="318" y1="125" x2="330" y2="140" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="306" y1="110" x2="320" y2="105" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="320" y1="105" x2="330" y2="112" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" />
        {/* Sortie */}
        <rect x="340" y="88" width="44" height="50" rx="6" fill="white" stroke="#16a34a" strokeWidth="2" />
        <text x="362" y="107" textAnchor="middle" fontSize="9" fontWeight="700" fill="#16a34a">SOR-</text>
        <text x="362" y="120" textAnchor="middle" fontSize="9" fontWeight="700" fill="#16a34a">TIE</text>
        {/* Flèche sortie */}
        <path d="M322 113 H338" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M334 108 L340 113 L334 118" stroke="#16a34a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}
