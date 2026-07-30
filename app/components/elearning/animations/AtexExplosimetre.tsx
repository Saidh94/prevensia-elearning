"use client";

import { useEffect, useRef, useState } from "react";

const CSS = `
@keyframes axp-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes axp-slide {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes axp-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0.1; }
}
@keyframes axp-shake {
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-4px); }
  40%       { transform: translateX(4px); }
  60%       { transform: translateX(-3px); }
  80%       { transform: translateX(3px); }
}
.axp-device { animation: axp-slide 0.6s 0.2s ease forwards; opacity: 0; }
.axp-label  { animation: axp-fade 0.5s 0.8s ease forwards; opacity: 0; }
.axp-alarm-text { animation: axp-blink 0.6s 3.8s ease infinite; opacity: 0; }
.axp-alarm-light { animation: axp-blink 0.5s 3.8s ease infinite; opacity: 0; }
.axp-device-alarm { animation: axp-shake 0.4s 3.8s ease; }
.axp-footer { animation: axp-fade 0.5s 1.0s ease forwards; opacity: 0; }
`;

// Converts a percentage (0-100) to SVG arc path on a semicircle
// Center (cx, cy), radius r, arc from -180° to 0° (left to right)
function describeArc(cx: number, cy: number, r: number, pct: number): string {
  const startAngle = -180;
  const endAngle = startAngle + (pct / 100) * 180;
  const rad = (deg: number) => (deg * Math.PI) / 180;
  const x1 = cx + r * Math.cos(rad(startAngle));
  const y1 = cy + r * Math.sin(rad(startAngle));
  const x2 = cx + r * Math.cos(rad(endAngle));
  const y2 = cy + r * Math.sin(rad(endAngle));
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`;
}

// Needle angle: 0% = -180° (left), 100% = 0° (right) → we use 0-100 pct mapped to -180 to 0 deg
function needleCoords(cx: number, cy: number, r: number, pct: number) {
  const angleDeg = -180 + (pct / 100) * 180;
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x2: cx + r * Math.cos(rad),
    y2: cy + r * Math.sin(rad),
  };
}

export default function AtexExplosimetre() {
  const [pct, setPct] = useState(0);
  const [alarme, setAlarme] = useState(false);
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Animate: 0 → 22% over ~3.5s, with a pause at 20% for alarm
    let start: number | null = null;
    const DURATION = 3500; // ms to reach 22%
    const TARGET = 22;

    function step(ts: number) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const rawPct = Math.min((elapsed / DURATION) * TARGET, TARGET);
      setPct(rawPct);
      if (rawPct >= 20 && !alarme) {
        setAlarme(true);
      }
      if (elapsed < DURATION + 500) {
        rafRef.current = requestAnimationFrame(step) as unknown as ReturnType<typeof setTimeout>;
      }
    }

    const delay = setTimeout(() => {
      rafRef.current = requestAnimationFrame(step) as unknown as ReturnType<typeof setTimeout>;
    }, 1200);

    return () => {
      clearTimeout(delay);
      if (rafRef.current) cancelAnimationFrame(rafRef.current as unknown as number);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const cx = 200;
  const cy = 170;
  const R = 110;
  const needle = needleCoords(cx, cy, R - 12, pct);
  const isAlarm = pct >= 20;

  return (
    <div className="w-full select-none">
      <style>{CSS}</style>
      <svg viewBox="0 0 400 280" className="h-64 w-full" aria-label="Explosimètre certifié Ex animé">

        {/* Title */}
        <text x="200" y="22" textAnchor="middle" fontSize="14" fontWeight="900" fill="#1a1a1a">
          EXPLOSIMÈTRE CERTIFIÉ Ex
        </text>
        <text x="200" y="38" textAnchor="middle" fontSize="10" fill="#555">
          Lecture en % de la LIE — Seuil d&apos;alarme : 20 %
        </text>

        {/* Device body */}
        <g className={`axp-device ${isAlarm ? "axp-device-alarm" : ""}`}>
          <rect x="60" y="48" width="280" height="200" rx="16" fill="#1a1a1a" />
          <rect x="66" y="54" width="268" height="194" rx="13" fill="#111827" />

          {/* Screen background */}
          <rect x="76" y="62" width="248" height="158" rx="8"
            fill={isAlarm ? "#3f0000" : "#0a1628"} />

          {/* Gauge track — full semicircle */}
          <path
            d={`M ${cx - R} ${cy} A ${R} ${R} 0 0 1 ${cx + R} ${cy}`}
            fill="none" stroke="#1f2937" strokeWidth="18" strokeLinecap="round"
          />

          {/* Gauge fill — green zone 0-20% */}
          <path
            d={describeArc(cx, cy, R, Math.min(pct, 20))}
            fill="none" stroke="#16a34a" strokeWidth="16" strokeLinecap="round"
          />

          {/* Gauge fill — red zone 20%+ */}
          {pct > 20 && (
            <path
              d={describeArc(cx, cy, R, pct).replace(
                `M ${cx - R} ${cy}`,
                `M ${needleCoords(cx, cy, R, 20).x2} ${needleCoords(cx, cy, R, 20).y2}`
              )}
              fill="none" stroke="#dc2626" strokeWidth="16" strokeLinecap="round"
            />
          )}

          {/* 20% LIE threshold tick */}
          {(() => {
            const tickAngle = (-180 + 0.2 * 180) * (Math.PI / 180);
            const x1 = cx + (R - 22) * Math.cos(tickAngle);
            const y1 = cy + (R - 22) * Math.sin(tickAngle);
            const x2 = cx + (R + 4) * Math.cos(tickAngle);
            const y2 = cy + (R + 4) * Math.sin(tickAngle);
            return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f59e0b" strokeWidth="3" />;
          })()}

          {/* Alarm label at 20% */}
          <text x="88" y="97" fontSize="8" fill="#f59e0b" fontWeight="700">20%</text>

          {/* Needle */}
          <line
            x1={cx} y1={cy}
            x2={needle.x2} y2={needle.y2}
            stroke={isAlarm ? "#ef4444" : "#fff"}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx={cx} cy={cy} r="6" fill={isAlarm ? "#ef4444" : "#e5e7eb"} />

          {/* Digital readout */}
          <rect x="163" y="178" width="74" height="30" rx="4" fill="#0f172a" />
          <text x="200" y="199" textAnchor="middle" fontSize="18" fontWeight="900"
            fill={isAlarm ? "#ef4444" : "#4ade80"}
            style={{ fontFamily: "monospace" }}>
            {pct.toFixed(1)}%
          </text>

          {/* LIE label */}
          <text x="200" y="215" textAnchor="middle" fontSize="9" fill="#6b7280">
            % LIE
          </text>

          {/* Alarm LED */}
          <circle className={isAlarm ? "axp-alarm-light" : ""} cx="340" cy="68" r="8"
            fill={isAlarm ? "#ef4444" : "#374151"} />

          {/* ALARM text */}
          {isAlarm && (
            <text className="axp-alarm-text" x="200" y="240" textAnchor="middle"
              fontSize="13" fontWeight="900" fill="#ef4444">
              ⚠ ALARME — ARRÊT IMMÉDIAT
            </text>
          )}

          {/* EX badge */}
          <rect x="76" y="230" width="36" height="16" rx="3" fill="#fbbf24" />
          <text x="94" y="242" textAnchor="middle" fontSize="9" fontWeight="900" fill="#1a1a1a">Ex</text>

          {/* Buttons */}
          <circle cx="106" cy="238" r="7" fill="#374151" />
          <circle cx="122" cy="238" r="7" fill="#374151" />
        </g>

        {/* Labels */}
        <text className="axp-label" x="82" y="170" textAnchor="middle" fontSize="9" fill="#4ade80" fontWeight="700">SAFE</text>
        <text className="axp-label" x="318" y="170" textAnchor="middle" fontSize="9" fill="#ef4444" fontWeight="700">DANGER</text>

        {/* Footer */}
        <rect className="axp-footer" x="20" y="256" width="360" height="20" rx="5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
        <text className="axp-footer" x="200" y="270" textAnchor="middle" fontSize="9" fill="#92400e" fontWeight="600">
          Étalonner au gaz du site · Vérifier batterie · Mesurer en points bas ET hauts
        </text>

      </svg>
    </div>
  );
}
