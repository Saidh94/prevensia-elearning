"use client";

const CSS = `
@keyframes adx-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes adx-slide-up {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes adx-grow-left {
  from { width: 0; }
  to   { width: 175px; }
}
@keyframes adx-grow-right {
  from { width: 0; }
  to   { width: 175px; }
}
@keyframes adx-grow-center {
  from { width: 0; }
  to   { width: 190px; }
}
@keyframes adx-pulse {
  0%, 100% { opacity: 0.7; }
  50%       { opacity: 1;   }
}
@keyframes adx-cursor {
  0%   { transform: translateX(0px);   }
  30%  { transform: translateX(80px);  }
  55%  { transform: translateX(160px); }
  70%  { transform: translateX(260px); }
  85%  { transform: translateX(380px); }
  100% { transform: translateX(380px); }
}
@keyframes adx-alarm {
  0%, 49% { opacity: 0; }
  50%, 100% { opacity: 1; }
}
.adx-zone-left  { animation: adx-grow-left   0.7s 0.3s ease forwards; width: 0; overflow: hidden; }
.adx-zone-right { animation: adx-grow-right  0.7s 1.4s ease forwards; width: 0; overflow: hidden; }
.adx-zone-center{ animation: adx-grow-center 0.8s 0.9s ease forwards; width: 0; overflow: hidden; }
.adx-label      { opacity: 0; }
.adx-lie        { animation: adx-fade 0.5s 1.6s ease forwards; opacity: 0; }
.adx-lse        { animation: adx-fade 0.5s 1.8s ease forwards; opacity: 0; }
.adx-cursor-g   { animation: adx-cursor 4s 2.2s ease-in-out infinite; }
.adx-alarm-blink{ animation: adx-alarm 0.5s 4.5s ease infinite; opacity: 0; }
.adx-footer     { animation: adx-slide-up 0.6s 2.0s ease forwards; opacity: 0; }
`;

export default function AtexDomaineExplosivite() {
  // Layout: three zone rects on a horizontal axis
  // Total inner width = 540, zones: left=175, center=190, right=175
  const leftX = 20;
  const centerX = 195;
  const rightX = 385;
  const zoneY = 100;
  const zoneH = 90;

  return (
    <div className="w-full select-none">
      <style>{CSS}</style>
      <svg viewBox="0 0 580 300" className="h-64 w-full" aria-label="Domaine d'explosivité ATEX animé">

        {/* Title */}
        <text x="290" y="26" textAnchor="middle" fontSize="15" fontWeight="900" fill="#1a1a1a">
          DOMAINE D&apos;EXPLOSIVITÉ
        </text>
        <text x="290" y="44" textAnchor="middle" fontSize="10" fill="#555">
          Concentration du combustible dans l&apos;air (%)
        </text>

        {/* Axis */}
        <line x1={leftX} y1="145" x2="560" y2="145" stroke="#ccc" strokeWidth="2" />
        <polygon points="560,145 550,140 550,150" fill="#ccc" />

        {/* LEFT ZONE — Trop pauvre */}
        <g className="adx-zone-left" style={{ transformOrigin: `${leftX}px ${zoneY}px` }}>
          <rect x={leftX} y={zoneY} width="175" height={zoneH} rx="4" fill="#bbf7d0" />
        </g>
        <text className="adx-label" style={{ animation: "adx-fade 0.5s 1.0s ease forwards", opacity: 0 }}
          x="107" y="130" textAnchor="middle" fontSize="11" fontWeight="700" fill="#15803d">
          Trop pauvre
        </text>
        <text className="adx-label" style={{ animation: "adx-fade 0.5s 1.0s ease forwards", opacity: 0 }}
          x="107" y="146" textAnchor="middle" fontSize="10" fill="#166534">
          Pas d&apos;explosion
        </text>
        <text className="adx-label" style={{ animation: "adx-fade 0.5s 1.0s ease forwards", opacity: 0 }}
          x="107" y="175" textAnchor="middle" fontSize="10" fill="#15803d">
          0 %
        </text>

        {/* CENTER ZONE — Explosif */}
        <g className="adx-zone-center" style={{ transformOrigin: `${centerX}px ${zoneY}px` }}>
          <rect x={centerX} y={zoneY} width="190" height={zoneH} rx="4" fill="#fca5a5" />
          <rect x={centerX} y={zoneY} width="190" height={zoneH} rx="4" fill="#ef4444" opacity="0.25"
            style={{ animation: "adx-pulse 1.4s 1.8s ease infinite" }} />
        </g>
        <text className="adx-label" style={{ animation: "adx-fade 0.5s 1.7s ease forwards", opacity: 0 }}
          x="290" y="126" textAnchor="middle" fontSize="12" fontWeight="900" fill="#991b1b">
          DOMAINE
        </text>
        <text className="adx-label" style={{ animation: "adx-fade 0.5s 1.7s ease forwards", opacity: 0 }}
          x="290" y="142" textAnchor="middle" fontSize="12" fontWeight="900" fill="#991b1b">
          D&apos;EXPLOSIVITÉ
        </text>
        <text className="adx-label" style={{ animation: "adx-fade 0.5s 1.7s ease forwards", opacity: 0 }}
          x="290" y="158" textAnchor="middle" fontSize="10" fill="#7f1d1d">
          ⚡ EXPLOSION POSSIBLE
        </text>

        {/* RIGHT ZONE — Trop riche */}
        <g className="adx-zone-right" style={{ transformOrigin: `${rightX}px ${zoneY}px` }}>
          <rect x={rightX} y={zoneY} width="175" height={zoneH} rx="4" fill="#bfdbfe" />
        </g>
        <text className="adx-label" style={{ animation: "adx-fade 0.5s 2.1s ease forwards", opacity: 0 }}
          x="472" y="130" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1d4ed8">
          Trop riche
        </text>
        <text className="adx-label" style={{ animation: "adx-fade 0.5s 2.1s ease forwards", opacity: 0 }}
          x="472" y="146" textAnchor="middle" fontSize="10" fill="#1e40af">
          Pas d&apos;explosion
        </text>
        <text className="adx-label" style={{ animation: "adx-fade 0.5s 2.1s ease forwards", opacity: 0 }}
          x="472" y="175" textAnchor="middle" fontSize="10" fill="#1d4ed8">
          100 %
        </text>

        {/* LIE marker */}
        <g className="adx-lie">
          <line x1={centerX} y1="88" x2={centerX} y2="198" stroke="#15803d" strokeWidth="2.5" strokeDasharray="5,3" />
          <rect x={centerX - 22} y="198" width="44" height="22" rx="5" fill="#15803d" />
          <text x={centerX} y="213" textAnchor="middle" fontSize="12" fontWeight="900" fill="#fff">LIE</text>
        </g>

        {/* LSE marker */}
        <g className="adx-lse">
          <line x1={rightX} y1="88" x2={rightX} y2="198" stroke="#1d4ed8" strokeWidth="2.5" strokeDasharray="5,3" />
          <rect x={rightX - 22} y="198" width="44" height="22" rx="5" fill="#1d4ed8" />
          <text x={rightX} y="213" textAnchor="middle" fontSize="12" fontWeight="900" fill="#fff">LSE</text>
        </g>

        {/* Animated cursor — a triangle moving along the axis */}
        <g className="adx-cursor-g">
          <polygon points={`${leftX + 6},94 ${leftX - 2},80 ${leftX + 14},80`} fill="#f97316" />
          <line x1={leftX + 6} y1="80" x2={leftX + 6} y2="195" stroke="#f97316" strokeWidth="2" strokeDasharray="3,3" />
          {/* Alarm badge — shows only when cursor is in explosive zone */}
          <rect className="adx-alarm-blink" x={leftX - 8} y="55" width="62" height="22" rx="6" fill="#dc2626" />
          <text className="adx-alarm-blink" x={leftX + 23} y="70" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff">
            ⚠ ALARME
          </text>
        </g>

        {/* Footer */}
        <rect className="adx-footer" x="30" y="236" width="520" height="24" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.2" />
        <text className="adx-footer" x="290" y="252" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="600">
          Seuil d&apos;alarme explosimètre = 20 % de la LIE · Évacuation immédiate si dépassement
        </text>

        {/* Axis label */}
        <text className="adx-label" style={{ animation: "adx-fade 0.5s 0.8s ease forwards", opacity: 0 }}
          x="290" y="278" textAnchor="middle" fontSize="9" fill="#888">
          → Concentration croissante en combustible
        </text>

      </svg>
    </div>
  );
}
