export default function SsiChaineFonctionnelle() {
  return (
    <svg viewBox="0 0 420 220" className="h-56 w-full" aria-hidden="true">
      <style>{`
        @keyframes sc-pop {
          from { opacity: 0; transform: scale(0.75); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes sc-flow {
          from { stroke-dashoffset: 60; opacity: 0; }
          to   { stroke-dashoffset: 0;  opacity: 1; }
        }
        @keyframes sc-glow {
          0%,100% { fill-opacity: 1; }
          50%      { fill-opacity: 0.4; }
        }
        .sc-s1  { animation: sc-pop .5s ease both .1s; }
        .sc-s2  { animation: sc-pop .5s ease both .9s; }
        .sc-s3  { animation: sc-pop .5s ease both 1.7s; }
        .sc-s4  { animation: sc-pop .5s ease both 2.5s; }
        .sc-f1  { stroke-dasharray: 60; animation: sc-flow .4s ease both .7s; }
        .sc-f2  { stroke-dasharray: 60; animation: sc-flow .4s ease both 1.5s; }
        .sc-f3  { stroke-dasharray: 60; animation: sc-flow .4s ease both 2.3s; }
        .sc-det { animation: sc-glow 1.4s ease-in-out 2.8s infinite; }
      `}</style>

      {/* Bloc 1 — Détecteur (SDI) */}
      <g className="sc-s1" style={{ transformOrigin: "52px 105px" }}>
        <rect x="8" y="55" width="88" height="100" rx="14" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
        <text x="52" y="78" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1d4ed8">SDI</text>
        {/* Détecteur optique stylisé */}
        <circle className="sc-det" cx="52" cy="110" r="20" fill="#2563eb" fillOpacity="0.15" />
        <circle cx="52" cy="110" r="12" fill="white" stroke="#2563eb" strokeWidth="2.5" />
        <circle cx="52" cy="110" r="5" fill="#2563eb" />
        {/* Ondes */}
        <path d="M36 97 Q30 110 36 123" stroke="#2563eb" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
        <path d="M68 97 Q74 110 68 123" stroke="#2563eb" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
        <text x="52" y="144" textAnchor="middle" fontSize="9" fill="#1e3a8a">Détection</text>
      </g>

      {/* Flèche 1 */}
      <line className="sc-f1" x1="98" y1="105" x2="128" y2="105" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
      <path className="sc-f1" d="M123 99 L133 105 L123 111" stroke="#2563eb" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Bloc 2 — CMSI */}
      <g className="sc-s2" style={{ transformOrigin: "182px 105px" }}>
        <rect x="133" y="55" width="98" height="100" rx="14" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
        <text x="182" y="78" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1d4ed8">CMSI</text>
        {/* Tableau de commande */}
        <rect x="150" y="88" width="64" height="44" rx="6" fill="white" stroke="#2563eb" strokeWidth="2" />
        <circle cx="162" cy="100" r="4" fill="#dc2626" />
        <circle cx="175" cy="100" r="4" fill="#d97706" />
        <circle cx="188" cy="100" r="4" fill="#16a34a" />
        <rect x="156" y="110" width="48" height="6" rx="3" fill="#dbeafe" />
        <rect x="156" y="120" width="32" height="6" rx="3" fill="#dbeafe" />
        <text x="182" y="144" textAnchor="middle" fontSize="9" fill="#1e3a8a">Traitement</text>
      </g>

      {/* Flèche 2 */}
      <line className="sc-f2" x1="233" y1="105" x2="263" y2="105" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
      <path className="sc-f2" d="M258 99 L268 105 L258 111" stroke="#2563eb" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Bloc 3 — DAS */}
      <g className="sc-s3" style={{ transformOrigin: "322px 80px" }}>
        <rect x="267" y="40" width="110" height="82" rx="14" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
        <text x="322" y="62" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1d4ed8">DAS</text>
        {/* Porte coupe-feu */}
        <rect x="286" y="70" width="28" height="36" rx="4" fill="white" stroke="#2563eb" strokeWidth="2" />
        <path d="M290 80 Q290 68 300 68 Q310 68 310 80" stroke="#2563eb" strokeWidth="2" fill="none" />
        {/* Désenfumage */}
        <path d="M330 75 Q336 72 342 75 Q336 78 330 81Z" fill="#2563eb" opacity="0.7" />
        <path d="M330 85 Q338 80 346 85" stroke="#2563eb" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M330 93 Q338 88 346 93" stroke="#2563eb" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
        <text x="295" y="118" textAnchor="middle" fontSize="8" fill="#1e3a8a">Porte CF</text>
        <text x="340" y="118" textAnchor="middle" fontSize="8" fill="#1e3a8a">Désenfumage</text>
      </g>

      {/* Flèche 3 */}
      <line className="sc-f3" x1="322" y1="122" x2="322" y2="148" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeDasharray="0" />
      <path className="sc-f3" d="M316 143 L322 153 L328 143" stroke="#2563eb" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Bloc 4 — Alarme sonore / évacuation */}
      <g className="sc-s4" style={{ transformOrigin: "322px 180px" }}>
        <rect x="267" y="152" width="110" height="52" rx="14" fill="#dcfce7" stroke="#16a34a" strokeWidth="3" />
        <text x="322" y="174" textAnchor="middle" fontSize="10" fontWeight="700" fill="#15803d">ALARME + ÉVACUATION</text>
        <text x="322" y="191" textAnchor="middle" fontSize="9" fill="#166534">Diffusion &amp; mise en sécurité</text>
      </g>
    </svg>
  );
}
