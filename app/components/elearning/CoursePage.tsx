import Link from "next/link";
import type { ModuleContent } from "../../../lib/supabase/elearning/module-types";
import VisualCard from "./VisualCard";

type CoursePageProps = {
  slug: string;
  moduleData: ModuleContent;
};

export default function CoursePage({ slug, moduleData }: CoursePageProps) {
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

          <div className="grid gap-4 px-6 py-6 sm:grid-cols-3 sm:px-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Parcours
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                {moduleData.shortTitle}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Durée estimée
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                {moduleData.duration}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Niveau
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                {moduleData.level}
              </p>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Sommaire
            </p>

            <nav className="mt-5 space-y-2">
              {moduleData.sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium leading-6 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                >
                  <span className="mr-2 text-slate-400">{index + 1}.</span>
                  {section.title}
                </a>
              ))}
            </nav>

            <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Objectif du module</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {moduleData.objective}
              </p>
            </div>
          </aside>

          <section className="space-y-8">
            {moduleData.sections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="border-b border-slate-200 px-6 py-6 sm:px-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Chapitre {index + 1}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900">
                    {section.title}
                  </h2>

                  {section.intro ? (
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      {section.intro}
                    </p>
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
                            <span className="text-sm leading-7 text-green-950">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {(section.forbiddenPoints?.length ?? 0) > 0 ? (
                    <div className="rounded-[2rem] border border-red-200 bg-red-50 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                        Interdictions / erreurs à éviter
                      </p>
                      <ul className="mt-4 space-y-3">
                        {section.forbiddenPoints!.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-red-600" />
                            <span className="text-sm leading-7 text-red-950">
                              {point}
                            </span>
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

                  {(section.legalRefs?.length ?? 0) > 0 ? (
                    <div className="rounded-[2rem] border border-blue-200 bg-blue-50 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-800">
                        Repères réglementaires et normatifs
                      </p>
                      <ul className="mt-4 space-y-3">
                        {section.legalRefs!.map((ref) => (
                          <li key={ref} className="flex items-start gap-3">
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
                            <span className="text-sm leading-7 text-blue-950">
                              {ref}
                            </span>
                          </li>
                        ))}
                      </ul>
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
                  Voir l’attestation
                </Link>
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}