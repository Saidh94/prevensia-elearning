import Link from "next/link";
import { formatFrenchDisplayText } from "../../../lib/french-display";
import type {
  ModuleContent,
  ModuleSection,
} from "../../../lib/supabase/elearning/module-types";
import InfoCard from "./InfoCard";

type FormationHomePageProps = {
  slug: string;
  moduleData: ModuleContent;
};

const H0B0_OVERVIEW_SECTIONS: ModuleSection[] = [
  {
    id: "intro",
    title: "Cadre du B0 / H0 / H0V et logique de l'habilitation",
    estimatedMinutes: 4,
  },
  {
    id: "symbols",
    title: "Lecture des symboles d'habilitation",
    estimatedMinutes: 4,
  },
  {
    id: "roles",
    title: "Rôles et responsabilités",
    estimatedMinutes: 3,
  },
  {
    id: "voltage-domains",
    title: "Domaines de tension en courant alternatif et en courant continu",
    estimatedMinutes: 4,
  },
  {
    id: "zones",
    title: "Zones d’environnement électrique et distances d’approche",
    estimatedMinutes: 5,
  },
  {
    id: "access",
    title: "Accès aux locaux et zones électriques",
    estimatedMinutes: 5,
  },
  {
    id: "documents",
    title: "Consignes, signalisation et documents applicables",
    estimatedMinutes: 4,
  },
  {
    id: "environments",
    title: "Types d’environnements électriques",
    estimatedMinutes: 4,
  },
  {
    id: "movement-tools",
    title: "Déplacement, outillage et situations de travail",
    estimatedMinutes: 4,
  },
  {
    id: "contacts",
    title: "Contacts directs et indirects",
    estimatedMinutes: 3,
  },
  {
    id: "current-effects",
    title: "Intensité du courant, durée d’exposition et dommages",
    estimatedMinutes: 4,
  },
  {
    id: "electrisation",
    title: "Électrisation et électrocution",
    estimatedMinutes: 3,
  },
  {
    id: "body-resistance",
    title: "Résistance du corps humain, peau sèche ou humide",
    estimatedMinutes: 3,
  },
  {
    id: "equipment",
    title: "Matériels défectueux et signaux d’alerte",
    estimatedMinutes: 3,
  },
  {
    id: "ppe",
    title: "Équipements de protection collective et individuelle",
    estimatedMinutes: 3,
  },
  {
    id: "authorized-forbidden",
    title: "Comportements autorisés et interdits",
    estimatedMinutes: 4,
  },
  {
    id: "conduct",
    title: "Conduite à tenir en cas d’anomalie, d’électrisation ou de départ de feu",
    estimatedMinutes: 4,
  },
  {
    id: "summary",
    title: "Synthèse opérationnelle",
    estimatedMinutes: 3,
  },
];

function getDisplaySectionTitle(title: string) {
  return formatFrenchDisplayText(title)
    .replace(/^Chapitre\s+\d+\s+[—-]\s*/i, "")
    .replace(/^\d+\.\s*/, "")
    .trim();
}

export default function FormationHomePage({
  slug,
  moduleData,
}: FormationHomePageProps) {
  const displaySections = slug === "h0b0" ? H0B0_OVERVIEW_SECTIONS : moduleData.sections;

  const topCards = [
    { label: "Parcours", value: moduleData.shortTitle ?? "" },
    { label: "Durée estimée", value: moduleData.duration ?? "" },
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
              {formatFrenchDisplayText(moduleData.heroBadge)}
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">
              {formatFrenchDisplayText(moduleData.title)}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
              {formatFrenchDisplayText(moduleData.subtitle)}
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
                Accéder au quiz
              </Link>
            </div>
          </div>

          <div className="grid gap-4 px-6 py-6 sm:grid-cols-2 xl:grid-cols-4 sm:px-8 sm:py-8">
            {topCards.map((card) => (
              <InfoCard
                key={card.label}
                label={card.label}
                value={formatFrenchDisplayText(card.value)}
              />
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Objectif pédagogique
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              {formatFrenchDisplayText(moduleData.objective)}
            </p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Public concerné
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                {formatFrenchDisplayText(moduleData.audience)}
              </p>
            </div>

            {moduleData.deliveryFormat ? (
              <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-800">
                  Format pédagogique
                </p>
                <p className="mt-3 text-sm leading-7 text-blue-950">
                  {formatFrenchDisplayText(moduleData.deliveryFormat)}
                </p>
              </div>
            ) : null}

            {moduleData.certificationNote ? (
              <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-800">
                  Important
                </p>
                <p className="mt-3 text-sm leading-7 text-amber-950">
                  {formatFrenchDisplayText(moduleData.certificationNote)}
                </p>
              </div>
            ) : null}
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Plan du module
            </p>

            <div className="mt-6 space-y-3">
              {displaySections.map((section, index) => (
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
                    {getDisplaySectionTitle(section.title)}
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
