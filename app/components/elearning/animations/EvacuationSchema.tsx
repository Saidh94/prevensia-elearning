export default function EvacuationSchema() {
  return (
    <svg viewBox="0 0 420 220" className="h-56 w-full" aria-hidden="true">
      <style>{`
        @keyframes ev-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes ev-arrow {
          from { stroke-dashoffset: 50; opacity: 0; }
          to   { stroke-dashoffset: 0;  opacity: 1; }
        }
        @keyframes ev-pop {
          from { opacity: 0; transform: scale(0.6); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes ev-blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }
        .ev-building { animation: ev-fade .6s ease both .1s; }
        .ev-arr1     { stroke-dasharray: 50; animation: ev-arrow .5s ease both .8s; }
        .ev-arr2     { stroke-dasharray: 50; animation: ev-arrow .5s ease both 1.2s; }
        .ev-arr3     { stroke-dasharray: 50; animation: ev-arrow .5s ease both 1.6s; }
        .ev-exit     { animation: ev-pop .4s ease both 2.1s; }
        .ev-rassemb  { animation: ev-pop .5s ease both 2.7s; }
        .ev-label    { animation: ev-fade .4s ease both 3.0s; }
        .ev-sign     { animation: ev-blink 1.5s ease-in-out 2.2s infinite; }
      `}</style>

      {/* Bâtiment */}
      <g className="ev-building">
        <rect x="20" y="50" width="100" height="130" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="3" />
        <rect x="35" y="65" width="28" height="28" rx="4" fill="white" stroke="#16a34a" strokeWidth="2" />
        <rect x="77" y="65" width="28" height="28" rx="4" fill="white" stroke="#16a34a" strokeWidth="2" />
        <rect x="35" y="108" width="28" height="28" rx="4" fill="white" stroke="#16a34a" strokeWidth="2" />
        <rect x="77" y="108" width="28" height="28" rx="4" fill="white" stroke="#16a34a" strokeWidth="2" />
        {/* Porte */}
        <rect x="51" y="148" width="20" height="32" rx="3" fill="white" stroke="#16a34a" strokeWidth="2" />
        <text x="70" y="44" textAnchor="middle" fontSize="11" fontWeight="700" fill="#16a34a">Bâtiment</text>
      </g>

      {/* Flèches d'évacuation intérieures */}
      <path className="ev-arr1" d="M71 164 L71 186 H130" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path className="ev-arr2" d="M130 186 H200" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
      <path className="ev-arr3" d="M200 186 H255" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />

      {/* Flèches pointe */}
      <path className="ev-arr3" d="M249 180 L259 186 L249 192" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Sortie */}
      <g className="ev-exit" style={{ transformOrigin: "273px 164px" }}>
        <rect x="255" y="140" width="36" height="48" rx="6" fill="#16a34a" />
        <text x="273" y="160" textAnchor="middle" fontSize="9" fontWeight="800" fill="white">SOR-</text>
        <text x="273" y="174" textAnchor="middle" fontSize="9" fontWeight="800" fill="white">TIE</text>
        {/* Bonhomme vert */}
        <circle cx="273" cy="152" r="4" fill="white" />
      </g>
      <rect className="ev-sign" x="259" y="128" width="28" height="10" rx="3" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
      <text className="ev-sign" x="273" y="136" textAnchor="middle" fontSize="7" fontWeight="700" fill="#15803d">SORTIE ▶</text>

      {/* Point de rassemblement */}
      <g className="ev-rassemb" style={{ transformOrigin: "355px 130px" }}>
        <rect x="305" y="50" width="100" height="140" rx="14" fill="white" stroke="#16a34a" strokeWidth="3" />
        <text x="355" y="74" textAnchor="middle" fontSize="10" fontWeight="700" fill="#16a34a">POINT DE</text>
        <text x="355" y="88" textAnchor="middle" fontSize="10" fontWeight="700" fill="#16a34a">RASSEMBLEMENT</text>
        {/* Silhouettes */}
        {[330, 345, 360, 375].map((cx, i) => (
          <g key={i}>
            <circle cx={cx} cy={112} r={7} fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <line x1={cx} y1={119} x2={cx} y2={140} stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
            <line x1={cx} y1={140} x2={cx - 7} y2={155} stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
            <line x1={cx} y1={140} x2={cx + 7} y2={155} stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        ))}
        {/* Drapeau */}
        <line x1="355" y1="160" x2="355" y2="185" stroke="#16a34a" strokeWidth="2.5" />
        <polygon points="355,160 375,168 355,176" fill="#16a34a" />
      </g>

      {/* Étiquettes */}
      <g className="ev-label">
        <text x="70" y="214" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="600">1. Quitter</text>
        <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="600">2. Cheminement</text>
        <text x="273" y="200" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="600">3. Sortir</text>
        <text x="355" y="205" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="600">4. Compter &amp; attendre</text>
      </g>
    </svg>
  );
}
