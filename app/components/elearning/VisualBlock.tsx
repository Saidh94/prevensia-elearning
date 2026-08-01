"use client";

import Image from "next/image";
import { useState } from "react";
import { formatFrenchDisplayText } from "@/lib/french-display";
import type {
  ModuleVisual,
  VisualTone,
} from "@/lib/supabase/elearning/module-types";
import AnimationRenderer from "./animations/AnimationRenderer";
import ElearningIllustration, { TONE_COLORS } from "./ElearningIllustration";

type VisualBlockProps = {
  visual: ModuleVisual;
};

const toneClasses: Record<
  VisualTone,
  { wrapper: string; badge: string; dot: string; subtitle: string }
> = {
  blue: {
    wrapper: "border-blue-200 bg-blue-50",
    badge: "bg-blue-600 text-white",
    dot: "bg-blue-600",
    subtitle: "text-blue-950/80",
  },
  amber: {
    wrapper: "border-amber-200 bg-amber-50",
    badge: "bg-amber-500 text-slate-950",
    dot: "bg-amber-500",
    subtitle: "text-amber-950/80",
  },
  green: {
    wrapper: "border-green-200 bg-green-50",
    badge: "bg-green-600 text-white",
    dot: "bg-green-600",
    subtitle: "text-green-950/80",
  },
  red: {
    wrapper: "border-red-200 bg-red-50",
    badge: "bg-red-600 text-white",
    dot: "bg-red-600",
    subtitle: "text-red-950/80",
  },
  slate: {
    wrapper: "border-slate-200 bg-slate-50",
    badge: "bg-slate-800 text-white",
    dot: "bg-slate-700",
    subtitle: "text-slate-700",
  },
};

export default function VisualBlock({ visual }: VisualBlockProps) {
  const tone = visual.tone ?? "blue";
  const styles = toneClasses[tone] ?? toneClasses.blue;

  const title = formatFrenchDisplayText(visual.title ?? "");
  const subtitle = formatFrenchDisplayText(visual.subtitle ?? "");
  const items = (visual.items ?? []).map((item) =>
    formatFrenchDisplayText(item)
  );

  const imagePath = (visual.imagePath ?? "").trim();
  const imageAlt = formatFrenchDisplayText(
    visual.imageAlt ?? visual.title ?? "Visuel pédagogique"
  );

  const [replayKey, setReplayKey] = useState(0);

  const toneColors = TONE_COLORS[tone] ?? TONE_COLORS.blue;

  if (!title && !subtitle && items.length === 0 && !imagePath && !visual.animationKey && !visual.illustrationKey) {
    return null;
  }

  return (
    <section
      className={`rounded-[1.5rem] border p-5 shadow-sm md:p-6 ${styles.wrapper}`}
    >
      <div className="space-y-5">
        <div className="space-y-3">
          <p
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${styles.badge}`}
          >
            Visuel pédagogique
          </p>

          {title ? (
            <h3 className="text-xl font-bold leading-tight text-slate-950">
              {title}
            </h3>
          ) : null}

          {subtitle ? (
            <p className={`text-sm leading-7 ${styles.subtitle}`}>
              {subtitle}
            </p>
          ) : null}

          {items.length > 0 ? (
            <div className="grid gap-3 md:grid-cols-2">
              {items.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/80 p-4"
                >
                  <span
                    className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${styles.dot}`}
                  />
                  <p className="text-sm font-medium leading-6 text-slate-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {visual.animationKey ? (
          <div className="rounded-[1.25rem] border border-slate-200 bg-white p-4">
            <AnimationRenderer key={replayKey} animationKey={visual.animationKey} />
            <div className="mt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setReplayKey((k) => k + 1)}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-500 shadow-sm transition hover:border-slate-300 hover:text-slate-700 active:scale-95"
                aria-label="Rejouer l'animation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 3a5 5 0 1 0 4.546 2.914.75.75 0 0 1 1.36-.634A6.5 6.5 0 1 1 8 1.5v-.75a.75.75 0 0 1 1.28-.53l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5A.75.75 0 0 1 9 3.75V3Z"
                    clipRule="evenodd"
                  />
                </svg>
                Rejouer
              </button>
            </div>
          </div>
        ) : visual.illustrationKey ? (
          <div className="rounded-[1.25rem] border border-slate-200 bg-white p-4">
            <ElearningIllustration
              illustrationKey={visual.illustrationKey}
              stroke={toneColors.stroke}
              fillSoft={toneColors.fillSoft}
              fillStrong={toneColors.fillStrong}
            />
          </div>
        ) : imagePath ? (
          <div className="rounded-[1.25rem] border border-slate-200 bg-white p-4">
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl">
              <Image
                src={imagePath}
                alt={imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 720px"
                unoptimized={imagePath.toLowerCase().endsWith(".svg")}
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}