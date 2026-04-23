"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { formatFrenchDisplayText } from "@/lib/french-display";
import type {
  IllustrationKey,
  ModuleVisual,
  VisualTone,
} from "../../../lib/supabase/elearning/module-types";

type VisualCardProps = {
  visual: ModuleVisual;
  compact?: boolean;
};

const toneClasses: Record<
  VisualTone,
  {
    wrapper: string;
    badge: string;
    dot: string;
    subtitle: string;
    panel: string;
    stroke: string;
    fillSoft: string;
    fillStrong: string;
  }
> = {
  blue: {
    wrapper: "border-blue-200 bg-blue-50",
    badge: "bg-blue-600 text-white",
    dot: "bg-blue-600",
    subtitle: "text-blue-900/80",
    panel: "bg-white",
    stroke: "#2563eb",
    fillSoft: "#dbeafe",
    fillStrong: "#2563eb",
  },
  amber: {
    wrapper: "border-amber-200 bg-amber-50",
    badge: "bg-amber-500 text-slate-950",
    dot: "bg-amber-500",
    subtitle: "text-amber-950/80",
    panel: "bg-white",
    stroke: "#d97706",
    fillSoft: "#fef3c7",
    fillStrong: "#d97706",
  },
  green: {
    wrapper: "border-green-200 bg-green-50",
    badge: "bg-green-600 text-white",
    dot: "bg-green-600",
    subtitle: "text-green-950/80",
    panel: "bg-white",
    stroke: "#16a34a",
    fillSoft: "#dcfce7",
    fillStrong: "#16a34a",
  },
  red: {
    wrapper: "border-red-200 bg-red-50",
    badge: "bg-red-600 text-white",
    dot: "bg-red-600",
    subtitle: "text-red-950/80",
    panel: "bg-white",
    stroke: "#dc2626",
    fillSoft: "#fee2e2",
    fillStrong: "#dc2626",
  },
  slate: {
    wrapper: "border-slate-200 bg-slate-100",
    badge: "bg-slate-800 text-white",
    dot: "bg-slate-700",
    subtitle: "text-slate-700",
    panel: "bg-white",
    stroke: "#334155",
    fillSoft: "#e2e8f0",
    fillStrong: "#334155",
  },
};

function Illustration({
  illustrationKey,
  stroke,
  fillSoft,
  fillStrong,
}: {
  illustrationKey?: IllustrationKey;
  stroke: string;
  fillSoft: string;
  fillStrong: string;
}) {
  switch (illustrationKey) {
    case "habilitation-scope":
      return (
        <svg viewBox="0 0 420 220" className="h-56 w-full">
          <rect x="20" y="30" width="140" height="150" rx="18" fill={fillSoft} stroke={stroke} strokeWidth="3" />
          <text x="90" y="65" textAnchor="middle" fontSize="16" fontWeight="700" fill={stroke}>
            H0B0
          </text>
          <circle cx="90" cy="105" r="26" fill="white" stroke={stroke} strokeWidth="3" />
          <path d="M90 92 L90 116" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
          <path d="M78 104 L102 104" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
          <text x="90" y="155" textAnchor="middle" fontSize="12" fill={stroke}>
            Personnel non électricien
          </text>

          <rect x="250" y="30" width="150" height="150" rx="18" fill="white" stroke={stroke} strokeWidth="3" />
          <text x="325" y="60" textAnchor="middle" fontSize="15" fontWeight="700" fill={stroke}>
            Zone électrique
          </text>
          <rect x="285" y="85" width="80" height="50" rx="8" fill={fillSoft} stroke={stroke} strokeWidth="3" />
          <path d="M325 94 L314 115 H328 L318 128" stroke={fillStrong} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M170 105 H240" stroke={stroke} strokeWidth="4" strokeDasharray="8 8" />
          <circle cx="205" cy="105" r="18" fill="white" stroke={stroke} strokeWidth="3" />
          <path d="M196 96 L214 114" stroke={stroke} strokeWidth="3" />
          <path d="M214 96 L196 114" stroke={stroke} strokeWidth="3" />
        </svg>
      );

    case "electric-risk":
      return (
        <svg viewBox="0 0 420 220" className="h-56 w-full">
          <rect x="25" y="25" width="110" height="160" rx="18" fill="white" stroke={stroke} strokeWidth="3" />
          <text x="80" y="55" textAnchor="middle" fontSize="13" fontWeight="700" fill={stroke}>
            Contact direct
          </text>
          <circle cx="80" cy="95" r="20" fill={fillSoft} stroke={stroke} strokeWidth="3" />
          <path d="M80 115 L80 145" stroke={stroke} strokeWidth="3" />
          <path d="M68 126 L92 126" stroke={stroke} strokeWidth="3" />
          <path d="M104 86 L118 70" stroke={fillStrong} strokeWidth="4" />
          <path d="M116 63 L125 73 L117 73 L123 83" stroke={fillStrong} strokeWidth="3" fill="none" />

          <rect x="155" y="25" width="110" height="160" rx="18" fill="white" stroke={stroke} strokeWidth="3" />
          <text x="210" y="55" textAnchor="middle" fontSize="13" fontWeight="700" fill={stroke}>
            Contact indirect
          </text>
          <rect x="185" y="78" width="50" height="40" rx="8" fill={fillSoft} stroke={stroke} strokeWidth="3" />
          <circle cx="210" cy="145" r="18" fill="white" stroke={stroke} strokeWidth="3" />
          <path d="M210 130 L210 155" stroke={stroke} strokeWidth="3" />
          <path d="M198 141 L222 141" stroke={stroke} strokeWidth="3" />
          <path d="M210 118 V124" stroke={fillStrong} strokeWidth="4" />

          <rect x="285" y="25" width="110" height="160" rx="18" fill="white" stroke={stroke} strokeWidth="3" />
          <text x="340" y="55" textAnchor="middle" fontSize="13" fontWeight="700" fill={stroke}>
            Voisinage
          </text>
          <rect x="320" y="78" width="34" height="56" rx="6" fill={fillSoft} stroke={stroke} strokeWidth="3" />
          <circle cx="314" cy="148" r="14" fill="white" stroke={stroke} strokeWidth="3" />
          <path d="M314 134 L314 154" stroke={stroke} strokeWidth="3" />
          <path d="M302 144 L326 144" stroke={stroke} strokeWidth="3" />
          <path d="M334 148 H368" stroke={stroke} strokeWidth="3" strokeDasharray="6 6" />
          <path d="M370 140 V156" stroke={fillStrong} strokeWidth="4" />
        </svg>
      );

    case "body-effects":
      return (
        <svg viewBox="0 0 420 220" className="h-56 w-full">
          <circle cx="120" cy="52" r="24" fill="white" stroke={stroke} strokeWidth="3" />
          <path d="M120 76 L120 145" stroke={stroke} strokeWidth="4" />
          <path d="M88 98 L152 98" stroke={stroke} strokeWidth="4" />
          <path d="M120 145 L92 184" stroke={stroke} strokeWidth="4" />
          <path d="M120 145 L148 184" stroke={stroke} strokeWidth="4" />
          <path d="M168 52 L195 52" stroke={fillStrong} strokeWidth="4" />
          <path d="M182 38 L195 52 L182 66" stroke={fillStrong} strokeWidth="4" fill="none" />
          <path d="M195 52 H280" stroke={stroke} strokeWidth="4" strokeDasharray="8 6" />

          <rect x="280" y="28" width="110" height="150" rx="18" fill="white" stroke={stroke} strokeWidth="3" />
          <text x="335" y="58" textAnchor="middle" fontSize="14" fontWeight="700" fill={stroke}>
            Effets possibles
          </text>
          <circle cx="305" cy="88" r="5" fill={fillStrong} />
          <text x="320" y="93" fontSize="12" fill={stroke}>Brûlures</text>
          <circle cx="305" cy="113" r="5" fill={fillStrong} />
          <text x="320" y="118" fontSize="12" fill={stroke}>Tétanisation</text>
          <circle cx="305" cy="138" r="5" fill={fillStrong} />
          <text x="320" y="143" fontSize="12" fill={stroke}>Troubles cardiaques</text>
        </svg>
      );

    case "work-environment":
      return (
        <svg viewBox="0 0 420 220" className="h-56 w-full">
          <rect x="35" y="35" width="120" height="145" rx="14" fill="white" stroke={stroke} strokeWidth="3" />
          <text x="95" y="60" textAnchor="middle" fontSize="14" fontWeight="700" fill={stroke}>
            Local technique
          </text>
          <rect x="65" y="78" width="60" height="80" rx="8" fill={fillSoft} stroke={stroke} strokeWidth="3" />
          <path d="M95 92 L84 113 H99 L89 128" stroke={fillStrong} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="210" y="50" width="160" height="120" rx="18" fill="white" stroke={stroke} strokeWidth="3" />
          <path d="M230 145 H350" stroke={stroke} strokeWidth="4" />
          <circle cx="252" cy="145" r="10" fill={fillSoft} stroke={stroke} strokeWidth="3" />
          <circle cx="330" cy="145" r="10" fill={fillSoft} stroke={stroke} strokeWidth="3" />
          <rect x="248" y="105" width="82" height="26" rx="8" fill={fillSoft} stroke={stroke} strokeWidth="3" />
          <path d="M150 110 H205" stroke={stroke} strokeWidth="4" strokeDasharray="8 6" />
          <circle cx="178" cy="110" r="18" fill="white" stroke={stroke} strokeWidth="3" />
          <text x="178" y="115" textAnchor="middle" fontSize="18" fontWeight="700" fill={stroke}>
            !
          </text>
        </svg>
      );

    case "authorized-forbidden":
      return (
        <svg viewBox="0 0 420 220" className="h-56 w-full">
          <rect x="25" y="30" width="165" height="160" rx="18" fill="white" stroke={stroke} strokeWidth="3" />
          <text x="107" y="58" textAnchor="middle" fontSize="15" fontWeight="700" fill={stroke}>
            Autorisé
          </text>
          <circle cx="70" cy="95" r="16" fill={fillSoft} stroke={stroke} strokeWidth="3" />
          <path d="M61 95 L68 102 L80 88" stroke={fillStrong} strokeWidth="4" fill="none" strokeLinecap="round" />
          <text x="98" y="100" fontSize="12" fill={stroke}>Observer</text>
          <circle cx="70" cy="128" r="16" fill={fillSoft} stroke={stroke} strokeWidth="3" />
          <path d="M61 128 L68 135 L80 121" stroke={fillStrong} strokeWidth="4" fill="none" strokeLinecap="round" />
          <text x="98" y="133" fontSize="12" fill={stroke}>Signaler</text>
          <circle cx="70" cy="161" r="16" fill={fillSoft} stroke={stroke} strokeWidth="3" />
          <path d="M61 161 L68 168 L80 154" stroke={fillStrong} strokeWidth="4" fill="none" strokeLinecap="round" />
          <text x="98" y="166" fontSize="12" fill={stroke}>Alerter</text>

          <rect x="230" y="30" width="165" height="160" rx="18" fill="white" stroke={stroke} strokeWidth="3" />
          <text x="312" y="58" textAnchor="middle" fontSize="15" fontWeight="700" fill={stroke}>
            Interdit
          </text>
          <circle cx="275" cy="100" r="18" fill="white" stroke={fillStrong} strokeWidth="4" />
          <path d="M263 88 L287 112" stroke={fillStrong} strokeWidth="4" />
          <path d="M287 88 L263 112" stroke={fillStrong} strokeWidth="4" />
          <text x="305" y="105" fontSize="12" fill={stroke}>Ouvrir / réparer</text>
          <circle cx="275" cy="145" r="18" fill="white" stroke={fillStrong} strokeWidth="4" />
          <path d="M263 133 L287 157" stroke={fillStrong} strokeWidth="4" />
          <path d="M287 133 L263 157" stroke={fillStrong} strokeWidth="4" />
          <text x="305" y="150" fontSize="12" fill={stroke}>Improviser</text>
        </svg>
      );

    case "emergency-response":
      return (
        <svg viewBox="0 0 420 220" className="h-56 w-full">
          <rect x="30" y="80" width="90" height="55" rx="14" fill="white" stroke={stroke} strokeWidth="3" />
          <text x="75" y="112" textAnchor="middle" fontSize="16" fontWeight="700" fill={stroke}>
            STOP
          </text>
          <path d="M120 108 H190" stroke={stroke} strokeWidth="4" strokeDasharray="8 6" />
          <circle cx="210" cy="108" r="30" fill="white" stroke={stroke} strokeWidth="3" />
          <path d="M210 92 V124" stroke={stroke} strokeWidth="4" />
          <path d="M194 108 H226" stroke={stroke} strokeWidth="4" />
          <path d="M240 108 H310" stroke={stroke} strokeWidth="4" strokeDasharray="8 6" />
          <rect x="310" y="76" width="80" height="64" rx="14" fill={fillSoft} stroke={stroke} strokeWidth="3" />
          <text x="350" y="106" textAnchor="middle" fontSize="14" fontWeight="700" fill={stroke}>
            ALERTE
          </text>
        </svg>
      );

    case "summary-reflexes":
      return (
        <svg viewBox="0 0 420 220" className="h-56 w-full">
          <circle cx="90" cy="110" r="48" fill="white" stroke={stroke} strokeWidth="4" />
          <text x="90" y="104" textAnchor="middle" fontSize="14" fontWeight="700" fill={stroke}>
            OBSERVER
          </text>
          <circle cx="210" cy="110" r="48" fill="white" stroke={stroke} strokeWidth="4" />
          <text x="210" y="104" textAnchor="middle" fontSize="14" fontWeight="700" fill={stroke}>
            NE PAS
          </text>
          <text x="210" y="124" textAnchor="middle" fontSize="14" fontWeight="700" fill={stroke}>
            IMPROVISER
          </text>
          <circle cx="330" cy="110" r="48" fill="white" stroke={stroke} strokeWidth="4" />
          <text x="330" y="104" textAnchor="middle" fontSize="14" fontWeight="700" fill={stroke}>
            ALERTER
          </text>
          <path d="M138 110 H162" stroke={fillStrong} strokeWidth="4" />
          <path d="M258 110 H282" stroke={fillStrong} strokeWidth="4" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 420 220" className="h-56 w-full">
          <rect x="40" y="35" width="340" height="150" rx="22" fill="white" stroke={stroke} strokeWidth="3" />
          <circle cx="110" cy="110" r="28" fill={fillSoft} stroke={stroke} strokeWidth="3" />
          <rect x="160" y="84" width="150" height="16" rx="8" fill={fillSoft} />
          <rect x="160" y="112" width="110" height="16" rx="8" fill={fillSoft} />
          <rect x="160" y="140" width="130" height="16" rx="8" fill={fillSoft} />
        </svg>
      );
  }
}

export default function VisualCard({
  visual,
  compact = false,
}: VisualCardProps) {
  const tone = visual.tone ?? "blue";
  const styles = toneClasses[tone];
  const imagePath = visual.imagePath?.trim() ?? "";
    const [hasImageError, setHasImageError] = useState(false);
  const title = formatFrenchDisplayText(visual.title);
  const subtitle = formatFrenchDisplayText(visual.subtitle);
  const imageAlt = formatFrenchDisplayText(visual.imageAlt ?? visual.title ?? "");
  const items = (visual.items ?? []).map((item) =>
    formatFrenchDisplayText(item)
  );
  const badgeLabel = compact ? "Repère visuel" : "Illustration pédagogique";

  useEffect(() => {
    setHasImageError(false);
  }, [imagePath]);

  const shouldRenderImage = Boolean(imagePath) && !hasImageError;
  const shouldRenderIllustration =
    !shouldRenderImage && Boolean(visual.illustrationKey);
  const shouldRenderMedia = shouldRenderImage || shouldRenderIllustration;
  const hasTextBlock = Boolean(title || subtitle || items.length > 0);

  return (
    <div
      className={`rounded-[1.5rem] border shadow-sm ${styles.wrapper} ${
        compact ? "p-3" : "p-4"
      }`}
    >
      <div className={compact ? "space-y-3" : "space-y-4"}>
        {shouldRenderMedia ? (
          <div className={`rounded-[1.5rem] p-3 ${styles.panel}`}>
            {shouldRenderImage ? (
              <div
                className={`overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white ${
                  compact ? "p-2" : "p-3"
                }`}
              >
                <img
                    src={imagePath}
                    alt={imageAlt}
                    className={`mx-auto h-auto w-full object-contain object-top ${
                      compact ? "max-h-[240px]" : "max-h-[420px]"
                    }`}
                    loading="lazy"
                    onError={() => setHasImageError(true)}
                  />
              </div>
            ) : (
              <div className={`mx-auto ${compact ? "max-w-[320px]" : "max-w-[520px]"}`}>
                <Illustration
                  illustrationKey={visual.illustrationKey}
                  stroke={styles.stroke}
                  fillSoft={styles.fillSoft}
                  fillStrong={styles.fillStrong}
                />
              </div>
            )}
          </div>
        ) : null}

        {hasTextBlock ? (
          <div>
            <p
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${styles.badge}`}
            >
              {badgeLabel}
            </p>
            {title ? (
              <h3
                className={`font-bold text-slate-900 ${
                  compact ? "mt-3 text-lg" : "mt-4 text-xl"
                }`}
              >
                {title}
              </h3>
            ) : null}
            {subtitle ? (
              <p
                className={`leading-6 ${styles.subtitle} ${
                  compact ? "mt-1 text-sm" : "mt-2 text-sm"
                }`}
              >
                {subtitle}
              </p>
            ) : null}

            {items.length > 0 ? (
              <div className={`${compact ? "mt-4 space-y-2" : "mt-6 space-y-3"}`}>
                {items.map((item) => (
                  <div
                    key={item}
                    className={`flex items-start gap-3 rounded-2xl border border-white/70 bg-white/70 ${
                      compact ? "p-3" : "p-4"
                    }`}
                  >
                    <span className={`mt-2 h-2.5 w-2.5 rounded-full ${styles.dot}`} />
                    <p className="text-sm font-medium leading-6 text-slate-800">{item}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
