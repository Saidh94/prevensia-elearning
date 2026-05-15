export default function PermisFeuEtapes() {
  return (
    <svg viewBox="0 0 420 220" className="h-56 w-full" aria-hidden="true">
      <style>{`
        @keyframes pf-pop {
          from { opacity: 0; transform: scale(0.7) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pf-line {
          from { stroke-dashoffset: 60; opacity: 0; }
          to   { stroke-dashoffset: 0;  opacity: 1; }
        }
        .pf-s1 { animation: pf-pop .5s ease both .1s; }
        .pf-s2 { animation: pf-pop .5s ease both .8s; }
        .pf-s3 { animation: pf-pop .5s ease both 1.5s; }
        .pf-s4 { animation: pf-pop .5s ease both 2.2s; }
        .pf-l1 { stroke-dasharray: 60; animation: pf-line .4s ease both .6s; }
        .pf-l2 { stroke-dasharray: 60; animation: pf-line .4s ease both 1.3s; }
        .pf-l3 { stroke-dasharray: 60; animation: pf-line .4s ease both 2.0s; }
      `}</style>

      {/* Connecteurs */}
      <line className="pf-l1" x1="110" y1="108" x2="150" y2="108" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
      <path className="pf-l1" d="M145 102 L155 108 L145 114" stroke="#d97706" strokeWidth="3" fill="none" strokeLinecap="round" />
      <line className="pf-l2" x1="215" y1="108" x2="255" y2="108" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
      <path className="pf-l2" d="M250 102 L260 108 L250 114" stroke="#d97706" strokeWidth="3" fill="none" strokeLinecap="round" />
      <line className="pf-l3" x1="320" y1="108" x2="360" y2="108" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
      <path className="pf-l3" d="M355 102 L365 108 L355 114" stroke="#d97706" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Étape 1 — Analyser */}
      <g className="pf-s1" style={{ transformOrigin: "60px 108px" }}>
        <circle cx="60" cy="108" r="48" fill="#fef3c7" stroke="#d97706" strokeWidth="3" />
        <circle cx="60" cy="50" r="10" fill="#d97706" />
        <text x="60" y="54" textAnchor="middle" fontSize="11" fontWeight="800" fill="white">1</text>
        {/* Loupe */}
        <circle cx="55" cy="102" r="14" fill="white" stroke="#d97706" strokeWidth="3" />
        <line x1="64" y1="113" x2="74" y2="123" stroke="#d97706" strokeWidth="3.5" strokeLinecap="round" />
        <text x="60" y="126" textAnchor="middle" fontSize="10" fontWeight="700" fill="#92400e">Analyser</text>
        <text x="60" y="138" textAnchor="middle" fontSize="9" fill="#92400e">la zone</text>
      </g>

      {/* Étape 2 — Sécuriser */}
      <g className="pf-s2" style={{ transformOrigin: "165px 108px" }}>
        <circle cx="165" cy="108" r="48" fill="#fef3c7" stroke="#d97706" strokeWidth="3" />
        <circle cx="165" cy="50" r="10" fill="#d97706" />
        <text x="165" y="54" textAnchor="middle" fontSize="11" fontWeight="800" fill="white">2</text>
        {/* Cadenas */}
        <rect x="152" y="100" width="26" height="20" rx="4" fill="white" stroke="#d97706" strokeWidth="3" />
        <path d="M156 100 Q156 88 165 88 Q174 88 174 100" stroke="#d97706" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="165" cy="110" r="3" fill="#d97706" />
        <text x="165" y="126" textAnchor="middle" fontSize="10" fontWeight="700" fill="#92400e">Sécuriser</text>
        <text x="165" y="138" textAnchor="middle" fontSize="9" fill="#92400e">combustibles</text>
      </g>

      {/* Étape 3 — Autoriser */}
      <g className="pf-s3" style={{ transformOrigin: "270px 108px" }}>
        <circle cx="270" cy="108" r="48" fill="#fef3c7" stroke="#d97706" strokeWidth="3" />
        <circle cx="270" cy="50" r="10" fill="#d97706" />
        <text x="270" y="54" textAnchor="middle" fontSize="11" fontWeight="800" fill="white">3</text>
        {/* Document + coche */}
        <rect x="257" y="88" width="26" height="32" rx="4" fill="white" stroke="#d97706" strokeWidth="2.5" />
        <path d="M262 108 L267 114 L279 100" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="270" y="126" textAnchor="middle" fontSize="10" fontWeight="700" fill="#92400e">Autoriser</text>
        <text x="270" y="138" textAnchor="middle" fontSize="9" fill="#92400e">permis de feu</text>
      </g>

      {/* Étape 4 — Surveiller */}
      <g className="pf-s4" style={{ transformOrigin: "375px 108px" }}>
        <circle cx="375" cy="108" r="48" fill="#dcfce7" stroke="#16a34a" strokeWidth="3" />
        <circle cx="375" cy="50" r="10" fill="#16a34a" />
        <text x="375" y="54" textAnchor="middle" fontSize="11" fontWeight="800" fill="white">4</text>
        {/* Oeil */}
        <ellipse cx="375" cy="103" rx="16" ry="10" fill="white" stroke="#16a34a" strokeWidth="2.5" />
        <circle cx="375" cy="103" r="5" fill="#16a34a" />
        <circle cx="377" cy="101" r="2" fill="white" />
        <text x="375" y="126" textAnchor="middle" fontSize="10" fontWeight="700" fill="#14532d">Surveiller</text>
        <text x="375" y="138" textAnchor="middle" fontSize="9" fill="#14532d">après travaux</text>
      </g>
    </svg>
  );
}
