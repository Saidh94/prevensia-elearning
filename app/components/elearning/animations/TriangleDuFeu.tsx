"use client";

const CSS = `
@keyframes tdv-fade {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
}
@keyframes tdv-draw {
  from { stroke-dashoffset: 400; opacity: 0; }
  to   { stroke-dashoffset: 0;   opacity: 1; }
}
@keyframes tdv-pop {
  from { opacity: 0; transform: scale(0.6); }
  to   { opacity: 1; transform: scale(1);   }
}
.tdv-side {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  opacity: 0;
  animation: tdv-draw 0.8s ease forwards;
  transform-origin: center;
}
.tdv-label {
  opacity: 0;
  animation: tdv-fade 0.6s ease forwards;
}
.tdv-flame {
  opacity: 0;
  animation: tdv-pop 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards;
  transform-origin: 210px 148px;
}
.tdv-hint {
  opacity: 0;
  animation: tdv-fade 0.6s ease forwards;
}
`;

export default function TriangleDuFeu() {
  // Triangle équilatéral
  // A (top) = 210, 28   B (bottom-left) = 52, 248   C (bottom-right) = 368, 248
  return (
    <div className="w-full select-none">
      <style>{CSS}</style>
      <svg viewBox="0 0 420 290" className="h-64 w-full" aria-label="Triangle du feu animé">

        {/* ── Côté bas : Combustible ── */}
        <line
          className="tdv-side"
          style={{ animationDelay: "0.2s" }}
          x1="52" y1="248" x2="368" y2="248"
          stroke="#dc2626" strokeWidth="5" strokeLinecap="round"
        />
        <text
          className="tdv-label"
          style={{ animationDelay: "0.7s" }}
          x="210" y="270" textAnchor="middle"
          fontSize="14" fontWeight="700" fill="#dc2626"
        >
          Combustible
        </text>
        <text
          className="tdv-label"
          style={{ animationDelay: "0.9s" }}
          x="210" y="284" textAnchor="middle"
          fontSize="11" fill="#ef4444"
        >
          (bois, carton, solvants…)
        </text>

        {/* ── Côté gauche : Comburant ── */}
        <line
          className="tdv-side"
          style={{ animationDelay: "1.2s" }}
          x1="52" y1="248" x2="210" y2="28"
          stroke="#2563eb" strokeWidth="5" strokeLinecap="round"
        />
        <text
          className="tdv-label"
          style={{ animationDelay: "1.7s" }}
          x="95" y="138" textAnchor="middle"
          fontSize="13" fontWeight="700" fill="#2563eb"
          transform="rotate(-60 95 138)"
        >
          Comburant (O₂)
        </text>

        {/* ── Côté droit : Énergie ── */}
        <line
          className="tdv-side"
          style={{ animationDelay: "2.0s" }}
          x1="210" y1="28" x2="368" y2="248"
          stroke="#d97706" strokeWidth="5" strokeLinecap="round"
        />
        <text
          className="tdv-label"
          style={{ animationDelay: "2.5s" }}
          x="325" y="138" textAnchor="middle"
          fontSize="13" fontWeight="700" fill="#d97706"
          transform="rotate(60 325 138)"
        >
          Énergie thermique
        </text>

        {/* ── Flamme centrale ── */}
        <g className="tdv-flame" style={{ animationDelay: "2.9s" }}>
          {/* Corps de la flamme */}
          <path
            d="M210 105
               C224 118 238 122 234 138
               C230 154 220 160 210 172
               C200 160 190 154 186 138
               C182 122 196 118 210 105 Z"
            fill="#ef4444"
          />
          {/* Cœur plus clair */}
          <path
            d="M210 120
               C218 129 224 133 222 142
               C220 151 215 156 210 164
               C205 156 200 151 198 142
               C196 133 202 129 210 120 Z"
            fill="#fb923c"
          />
          <path
            d="M210 133
               C214 139 216 142 215 147
               C214 152 212 155 210 159
               C208 155 206 152 205 147
               C204 142 206 139 210 133 Z"
            fill="#fde047"
          />
          <text
            x="210" y="195"
            textAnchor="middle"
            fontSize="13" fontWeight="800" fill="#7f1d1d"
            letterSpacing="2"
          >
            FEU
          </text>
        </g>

        {/* ── Sommet du triangle : label Énergie ── */}
        <text
          className="tdv-label"
          style={{ animationDelay: "2.3s" }}
          x="210" y="18" textAnchor="middle"
          fontSize="11" fill="#92400e"
        >
          ▲ Chaleur
        </text>

        {/* ── Message extinction ── */}
        <rect
          className="tdv-hint"
          style={{ animationDelay: "3.6s" }}
          x="60" y="4" width="300" height="20" rx="10"
          fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5"
        />
        <text
          className="tdv-hint"
          style={{ animationDelay: "3.6s" }}
          x="210" y="17" textAnchor="middle"
          fontSize="10.5" fill="#166534" fontWeight="600"
        >
          Supprimer 1 côté → extinction du feu
        </text>
      </svg>
    </div>
  );
}
