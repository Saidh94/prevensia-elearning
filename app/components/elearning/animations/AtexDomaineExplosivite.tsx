"use client";

import { useEffect, useRef, useState } from "react";

/** Easing: ease-out cubic */
function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/** Linear interpolation */
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

const LEFT_X     = 20;
const LEFT_W     = 175;
const CENTER_X   = 195;
const CENTER_W   = 190;
const RIGHT_X    = 385;
const RIGHT_W    = 175;
const ZONE_Y     = 100;
const ZONE_H     = 90;
const AXIS_Y     = 145;

// Cursor moves across the X range from LEFT_X to RIGHT_X+RIGHT_W
const CURSOR_RANGE = RIGHT_X + RIGHT_W - LEFT_X; // 540

export default function AtexDomaineExplosivite() {
  // Zone widths (grow from 0 to full)
  const [leftW,   setLeftW]   = useState(0);
  const [centerW, setCenterW] = useState(0);
  const [rightW,  setRightW]  = useState(0);

  // Label opacities
  const [labelsOp,  setLabelsOp]  = useState(0);
  const [centerOp,  setCenterOp]  = useState(0);
  const [rightLOp,  setRightLOp]  = useState(0);
  const [lieOp,     setLieOp]     = useState(0);
  const [lseOp,     setLseOp]     = useState(0);
  const [footerOp,  setFooterOp]  = useState(0);

  // Cursor X position (offset from LEFT_X)
  const [cursorX,  setCursorX]    = useState(0);
  const [alarmOp,  setAlarmOp]    = useState(0);

  const startRef = useRef<number | null>(null);
  const rafRef   = useRef<number | null>(null);

  useEffect(() => {
    // Phase timings (ms)
    const P = {
      leftStart:   300,  leftEnd:   1000,
      centerStart: 900,  centerEnd: 1700,
      rightStart:  1400, rightEnd:  2100,
      labelsAt:    1000,
      centerLAt:   1700,
      rightLAt:    2100,
      lieAt:       1600,
      lseAt:       1800,
      footerAt:    2000,
      cursorStart: 2200, cursorEnd: 6200, // 4s loop
    };

    let alarmBlink = false;
    let alarmInterval: ReturnType<typeof setInterval> | null = null;

    function tick(ts: number) {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;

      // Helper: progress in [0,1] for a phase
      const prog = (start: number, end: number) =>
        Math.min(1, Math.max(0, (elapsed - start) / (end - start)));

      setLeftW(  easeOut(prog(P.leftStart,   P.leftEnd))   * LEFT_W);
      setCenterW(easeOut(prog(P.centerStart, P.centerEnd)) * CENTER_W);
      setRightW( easeOut(prog(P.rightStart,  P.rightEnd))  * RIGHT_W);

      setLabelsOp(prog(P.labelsAt, P.labelsAt + 400));
      setCenterOp(prog(P.centerLAt, P.centerLAt + 400));
      setRightLOp(prog(P.rightLAt,  P.rightLAt + 400));
      setLieOp(   prog(P.lieAt,     P.lieAt + 400));
      setLseOp(   prog(P.lseAt,     P.lseAt + 400));
      setFooterOp(prog(P.footerAt,  P.footerAt + 400));

      // Cursor loop
      if (elapsed >= P.cursorStart) {
        const loopMs = 4000;
        const loopElapsed = (elapsed - P.cursorStart) % loopMs;
        const loopProg = loopElapsed / loopMs;
        const x = lerp(0, CURSOR_RANGE, loopProg);
        setCursorX(x);

        // Alarm: cursor is in explosive zone (CENTER_X..CENTER_X+CENTER_W relative to LEFT_X)
        const inZone = x >= (CENTER_X - LEFT_X) && x <= (CENTER_X - LEFT_X + CENTER_W);
        if (!alarmInterval && inZone) {
          // Start blinking
          alarmInterval = setInterval(() => {
            alarmBlink = !alarmBlink;
            setAlarmOp(alarmBlink ? 1 : 0);
          }, 400);
        } else if (alarmInterval && !inZone) {
          clearInterval(alarmInterval);
          alarmInterval = null;
          alarmBlink = false;
          setAlarmOp(0);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (alarmInterval)  clearInterval(alarmInterval);
    };
  }, []);

  const cursorAbsX = LEFT_X + cursorX;

  return (
    <div className="w-full select-none">
      <svg
        viewBox="0 0 580 300"
        className="h-64 w-full"
        aria-label="Domaine d'explosivité ATEX animé"
      >
        {/* Clip paths for growing zones */}
        <defs>
          <clipPath id="clip-left">
            <rect x={LEFT_X}   y={ZONE_Y - 5} width={leftW}   height={ZONE_H + 10} />
          </clipPath>
          <clipPath id="clip-center">
            <rect x={CENTER_X} y={ZONE_Y - 5} width={centerW} height={ZONE_H + 10} />
          </clipPath>
          <clipPath id="clip-right">
            <rect x={RIGHT_X}  y={ZONE_Y - 5} width={rightW}  height={ZONE_H + 10} />
          </clipPath>
        </defs>

        {/* Title */}
        <text x="290" y="26" textAnchor="middle" fontSize="15" fontWeight="900" fill="#1a1a1a">
          DOMAINE D&apos;EXPLOSIVITÉ
        </text>
        <text x="290" y="44" textAnchor="middle" fontSize="10" fill="#555">
          Concentration du combustible dans l&apos;air (%)
        </text>

        {/* Axis */}
        <line x1={LEFT_X} y1={AXIS_Y} x2="560" y2={AXIS_Y} stroke="#ccc" strokeWidth="2" />
        <polygon points="560,145 550,140 550,150" fill="#ccc" />

        {/* LEFT ZONE — Trop pauvre */}
        <g clipPath="url(#clip-left)">
          <rect x={LEFT_X} y={ZONE_Y} width={LEFT_W} height={ZONE_H} rx="4" fill="#bbf7d0" />
        </g>
        <text x="107" y="130" textAnchor="middle" fontSize="11" fontWeight="700"
          fill="#15803d" opacity={labelsOp}>Trop pauvre</text>
        <text x="107" y="146" textAnchor="middle" fontSize="10"
          fill="#166534" opacity={labelsOp}>Pas d&apos;explosion</text>
        <text x="107" y="175" textAnchor="middle" fontSize="10"
          fill="#15803d" opacity={labelsOp}>0 %</text>

        {/* CENTER ZONE — Explosif */}
        <g clipPath="url(#clip-center)">
          <rect x={CENTER_X} y={ZONE_Y} width={CENTER_W} height={ZONE_H} rx="4" fill="#fca5a5" />
          <rect x={CENTER_X} y={ZONE_Y} width={CENTER_W} height={ZONE_H} rx="4"
            fill="#ef4444" opacity={0.25 * Math.abs(Math.sin(Date.now() / 700))} />
        </g>
        <text x="290" y="126" textAnchor="middle" fontSize="12" fontWeight="900"
          fill="#991b1b" opacity={centerOp}>DOMAINE</text>
        <text x="290" y="142" textAnchor="middle" fontSize="12" fontWeight="900"
          fill="#991b1b" opacity={centerOp}>D&apos;EXPLOSIVITÉ</text>
        <text x="290" y="158" textAnchor="middle" fontSize="10"
          fill="#7f1d1d" opacity={centerOp}>⚡ EXPLOSION POSSIBLE</text>

        {/* RIGHT ZONE — Trop riche */}
        <g clipPath="url(#clip-right)">
          <rect x={RIGHT_X} y={ZONE_Y} width={RIGHT_W} height={ZONE_H} rx="4" fill="#bfdbfe" />
        </g>
        <text x="472" y="130" textAnchor="middle" fontSize="11" fontWeight="700"
          fill="#1d4ed8" opacity={rightLOp}>Trop riche</text>
        <text x="472" y="146" textAnchor="middle" fontSize="10"
          fill="#1e40af" opacity={rightLOp}>Pas d&apos;explosion</text>
        <text x="472" y="175" textAnchor="middle" fontSize="10"
          fill="#1d4ed8" opacity={rightLOp}>100 %</text>

        {/* LIE marker */}
        <g opacity={lieOp}>
          <line x1={CENTER_X} y1="88" x2={CENTER_X} y2="198"
            stroke="#15803d" strokeWidth="2.5" strokeDasharray="5,3" />
          <rect x={CENTER_X - 22} y="198" width="44" height="22" rx="5" fill="#15803d" />
          <text x={CENTER_X} y="213" textAnchor="middle" fontSize="12" fontWeight="900" fill="#fff">
            LIE
          </text>
        </g>

        {/* LSE marker */}
        <g opacity={lseOp}>
          <line x1={RIGHT_X} y1="88" x2={RIGHT_X} y2="198"
            stroke="#1d4ed8" strokeWidth="2.5" strokeDasharray="5,3" />
          <rect x={RIGHT_X - 22} y="198" width="44" height="22" rx="5" fill="#1d4ed8" />
          <text x={RIGHT_X} y="213" textAnchor="middle" fontSize="12" fontWeight="900" fill="#fff">
            LSE
          </text>
        </g>

        {/* Cursor */}
        {cursorX > 0 && (
          <g>
            <polygon
              points={`${cursorAbsX},94 ${cursorAbsX - 8},80 ${cursorAbsX + 8},80`}
              fill="#f97316"
            />
            <line
              x1={cursorAbsX} y1="80" x2={cursorAbsX} y2="195"
              stroke="#f97316" strokeWidth="2" strokeDasharray="3,3"
            />
            {/* Alarm badge */}
            <g opacity={alarmOp}>
              <rect x={cursorAbsX - 31} y="55" width="62" height="22" rx="6" fill="#dc2626" />
              <text x={cursorAbsX} y="70" textAnchor="middle"
                fontSize="10" fontWeight="800" fill="#fff">
                ⚠ ALARME
              </text>
            </g>
          </g>
        )}

        {/* Footer */}
        <g opacity={footerOp}>
          <rect x="30" y="236" width="520" height="24" rx="6"
            fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.2" />
          <text x="290" y="252" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="600">
            Seuil d&apos;alarme = 20 % de la LIE · Évacuation immédiate si dépassement
          </text>
        </g>

        {/* Axis label */}
        <text x="290" y="278" textAnchor="middle" fontSize="9" fill="#888" opacity={labelsOp}>
          → Concentration croissante en combustible
        </text>
      </svg>
    </div>
  );
}
