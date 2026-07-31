"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type {
  ModuleContent,
  ModuleResourceVideo,
  PracticalScenario,
} from "../../../lib/supabase/elearning/module-types";
import VisualCard from "./VisualCard";

type ChapterProgress = {
  chapter_key: string;
  is_completed: boolean;
};

function ResourceVideoCard({ video }: { video: ModuleResourceVideo }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 overflow-hidden rounded-2xl border border-blue-200 bg-blue-50 p-4 transition hover:border-blue-300 hover:bg-blue-100"
    >
      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <div className="min-w-0">
        {video.provider && (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
            {video.provider}
          </p>
        )}
        <p className="mt-0.5 text-sm font-semibold leading-6 text-slate-900 group-hover:text-blue-800">
          {video.title}
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-600">{video.description}</p>
        <p className="mt-2 text-xs font-semibold text-blue-700">
          {video.ctaLabel ?? "Voir la vidéo"} →
        </p>
      </div>
    </a>
  );
}

function ScenarioCard({ scenario }: { scenario: PracticalScenario }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-amber-200 bg-amber-50">
      <div className="border-b border-amber-200 px-6 pb-4 pt-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-800">
          Cas pratique interactif
        </p>
        <p className="text-sm font-semibold leading-6 text-amber-950">
          {scenario.situation}
        </p>
        <p className="mt-1 text-xs italic text-amber-700">{scenario.question}</p>
      </div>

      {!revealed ? (
        <div className="flex items-center justify-between gap-4 px-6 py-5">
          <p className="text-xs text-amber-700">
            {"Réfléchissez avant de révéler la réponse."}
          </p>
          <button
            onClick={() => setRevealed(true)}
            className="shrink-0 rounded-xl bg-amber-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-amber-700"
          >
            Voir la réponse
          </button>
        </div>
      ) : (
        <div className="space-y-4 px-6 py-5">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-red-700">
              {"✗ À ne pas faire"}
            </p>
            <ul className="space-y-1">
              {scenario.wrongActions.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-sm leading-6 text-red-900">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-green-700">
              {"✓ Bonne conduite à tenir"}
            </p>
            <ol className="space-y-1">
              {scenario.correctActions.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-sm leading-6 text-green-900">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                  {a}
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-xl border border-amber-200 bg-white/70 px-4 py-3">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-800">
              Pourquoi ?
            </p>
            <p className="text-sm leading-6 text-amber-950">{scenario.explanation}</p>
          </div>

          {scenario.normRef && (
            <p className="text-xs font-medium text-blue-700">
              {"📋 "}{scenario.normRef}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

type CoursePageProps = {
  slug: string;
  moduleData: ModuleContent;
};

export default function CoursePage({ slug, moduleData }: CoursePageProps) {
  const [progressData, setProgressData] = useState<ChapterProgress[]>([]);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/chapter-progress/${slug}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setProgressData(Array.isArray(data) ? data : []))
      .catch(() => setProgressData([]));
  }, [slug]);

  const completedCount = moduleData.sections.filter((s) =>
    progressData.some((p) => p.chapter_key === s.id && p.is_completed)
  ).length;
  const totalCount = moduleData.sections.length;
  const globalPercent =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const topCards = [
    { label: "Parcours", value: moduleData.shortTitle },
    { label: "Durée estimée", value: moduleData.duration ?? "" },
    ...(moduleData.deliveryFormat
      ? [{ label: "Format", value: moduleData.deliveryFormat }]
      : []),
    { label: "Niveau", value: moduleData.level ?? "" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 px-6 py-8 text-white sm:px-8 sm:py-10">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
              Cours e-learning
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">
              {moduleData.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
              {moduleData.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/modules/${slug}`}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Retour au module
              </Link>

              <Link
                href={`/modules/${slug}/quiz`}
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                {moduleData.quizCtaLabel ?? "Passer au quiz"}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 px-6 py-6 sm:grid-cols-2 xl:grid-cols-4 sm:px-8">
            {topCards.map((card) => (
              <div key={card.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {card.label}
                </p>
                <p className="mt-3 text-base font-semibold text-slate-900">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Sommaire
            </p>

            {totalCount > 0 ? (
              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Progression</span>
                  <span className="font-semibold text-slate-900">
                    {completedCount}/{totalCount}
                  </span>
                </div>
                <div className="mt-2 h-2.5 w-full rounded-full bg-slate-200">
                  <div
                    className="h-2.5 rounded-full bg-green-500 transition-all duration-500"
                    style={{ width: `${globalPercent}%` }}
                  />
                </div>
              </div>
            ) : null}

            <nav className="mt-4 space-y-2">
              {moduleData.sections.map((section, index) => {
                const done = progressData.some(
                  (p) => p.chapter_key === section.id && p.is_completed
                );
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block rounded-2xl border px-4 py-3 text-sm font-medium leading-6 transition ${
                      done
                        ? "border-green-200 bg-green-50 text-slate-800 hover:bg-green-100"
                        : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2 min-w-0">
                        {done ? (
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                            <svg viewBox="0 0 12 12" className="h-3 w-3 fill-current">
                              <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        ) : (
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-300 text-[10px] font-semibold text-slate-500">
                            {index + 1}
                          </span>
                        )}
                        <span className="truncate">{section.title}</span>
                      </span>
                      {section.estimatedMinutes ? (
                        <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                          {section.estimatedMinutes} min
                        </span>
                      ) : null}
                    </div>
                  </a>
                );
              })}
            </nav>

            <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Objectif du module</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">{moduleData.objective}</p>
            </div>
          </aside>

          <section className="space-y-8">
            {moduleData.sections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                {section.chapterImagePath ? (
                  <div className="relative w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                    <Image
                      src={section.chapterImagePath}
                      alt={section.chapterImageAlt ?? section.title}
                      width={900}
                      height={420}
                      className="w-full h-auto object-contain"
                      style={{ maxHeight: "420px" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 900px"
                      unoptimized={section.chapterImagePath.toLowerCase().endsWith(".svg")}
                    />
                  </div>
                ) : null}

                <div className="border-b border-slate-200 px-6 py-6 sm:px-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Chapitre {index + 1}
                    </p>
                    {section.estimatedMinutes ? (
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                        Temps estimé : {section.estimatedMinutes} min
                      </span>
                    ) : null}
                  </div>

                  <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900">
                    {section.title}
                  </h2>

                  {section.intro ? (
                    <p className="mt-4 text-base leading-8 text-slate-700">{section.intro}</p>
                  ) : null}
                </div>

                <div className="space-y-8 px-6 py-6 sm:px-8 sm:py-8">
                  <div className="space-y-5">
                    {(section.content ?? []).map((paragraph, paragraphIndex) => (
                      <p
                        key={`${section.id}-content-${paragraphIndex}`}
                        className="text-base leading-8 text-slate-700"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.visual ? <VisualCard visual={section.visual} /> : null}

                  {(section.deepDive?.length ?? 0) > 0 ? (
                    <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                        Approfondissement
                      </p>
                      <div className="mt-4 space-y-4">
                        {section.deepDive!.map((item, indexDeepDive) => (
                          <p
                            key={`${section.id}-deep-${indexDeepDive}`}
                            className="text-sm leading-7 text-slate-700"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {(section.keyPoints?.length ?? 0) > 0 ? (
                    <div className="rounded-[2rem] border border-green-200 bg-green-50 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-800">
                        Points clés à retenir
                      </p>
                      <ul className="mt-4 space-y-3">
                        {section.keyPoints!.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-green-600" />
                            <span className="text-sm leading-7 text-green-950">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {(section.forbiddenPoints?.length ?? 0) > 0 ? (
                    <div className="rounded-[2rem] border border-red-200 bg-red-50 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                        Interdictions
                      </p>
                      <ul className="mt-4 space-y-3">
                        {section.forbiddenPoints!.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-red-600" />
                            <span className="text-sm leading-7 text-red-950">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {section.practicalCase ? (
                    <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-800">
                        Cas pratique
                      </p>
                      <p className="mt-4 text-sm leading-7 text-amber-950">
                        {section.practicalCase}
                      </p>
                    </div>
                  ) : null}

                  {(section.scenarios?.length ?? 0) > 0 ? (
                    <div className="space-y-4">
                      {section.scenarios!.map((scenario, i) => (
                        <ScenarioCard key={i} scenario={scenario} />
                      ))}
                    </div>
                  ) : null}

                  {(section.legalRefs?.length ?? 0) > 0 ? (
                    <div className="rounded-[2rem] border border-blue-200 bg-blue-50 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-800">
                        Repères réglementaires et normatifs
                      </p>
                      <ul className="mt-4 space-y-3">
                        {section.legalRefs!.map((ref) => (
                          <li key={ref} className="flex items-start gap-3">
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
                            <span className="text-sm leading-7 text-blue-950">{ref}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {(section.resourceVideos?.length ?? 0) > 0 ? (
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Ressources vidéo
                      </p>
                      {section.resourceVideos!.map((video) => (
                        <ResourceVideoCard key={video.url} video={video} />
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}

            <section className="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Fin du parcours
              </p>
              <h2 className="mt-3 text-2xl font-bold">Synthèse finale</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
                {moduleData.finalMessage}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/modules/${slug}/quiz`}
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  {moduleData.quizCtaLabel ?? "Passer au quiz"}
                </Link>

                <Link
                  href={`/modules/${slug}/attestation`}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Voir l&apos;attestation
                </Link>
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}
