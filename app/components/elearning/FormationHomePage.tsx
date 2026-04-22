import Link from "next/link";
import type { ModuleContent } from "../../../lib/supabase/elearning/module-types";
import InfoCard from "./InfoCard";

type FormationHomePageProps = {
  slug: string;
  moduleData: ModuleContent;
};

export default function FormationHomePage({
  slug,
  moduleData,
}: FormationHomePageProps) {
  const topCards = [
    { label: "Parcours", value: moduleData.shortTitle ?? "" },
    { label: "Duree estimee", value: moduleData.duration ?? "" },
    ...(moduleData.deliveryFormat
      ? [{ label: "Format", value: moduleData.deliveryFormat }]
      : []),
    { label: "Niveau", value: moduleData.level ?? "" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 px-6 py-8 text-white sm:px-8 sm:py-10">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
              {moduleData.heroBadge}
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">
              {moduleData.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
              {moduleData.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/modules/${slug}/cours`}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Commencer le cours
              </Link>

              <Link
                href={`/modules/${slug}/quiz`}
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Acceder au quiz
              </Link>
            </div>
          </div>

          <div className="grid gap-4 px-6 py-6 sm:grid-cols-2 xl:grid-cols-4 sm:px-8 sm:py-8">
            {topCards.map((card) => (
              <InfoCard key={card.label} label={card.label} value={card.value} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Objectif pedagogique
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              {moduleData.objective}
            </p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Public concerne
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                {moduleData.audience}
              </p>
            </div>

            {moduleData.deliveryFormat ? (
              <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-800">
                  Format pedagogique
                </p>
                <p className="mt-3 text-sm leading-7 text-blue-950">
                  {moduleData.deliveryFormat}
                </p>
              </div>
            ) : null}

            {moduleData.certificationNote ? (
              <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-800">
                  Important
                </p>
                <p className="mt-3 text-sm leading-7 text-amber-950">
                  {moduleData.certificationNote}
                </p>
              </div>
            ) : null}
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Plan du module
            </p>

            <div className="mt-6 space-y-3">
              {moduleData.sections.map((section, index) => (
                <div
                  key={section.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Chapitre {index + 1}
                    </p>
                    {section.estimatedMinutes ? (
                      <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-600">
                        ~ {section.estimatedMinutes} min
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">
                    {section.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href={`/modules/${slug}/cours`}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Ouvrir le cours complet
              </Link>

              <Link
                href={`/modules/${slug}/attestation`}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Voir l&apos;attestation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
