"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ModuleSection = {
  id: string;
  title: string;
  content: string[];
};

type ModuleContent = {
  title: string;
  subtitle: string;
  duration: string;
  level: string;
  objective: string;
  sections: ModuleSection[];
};

const modulesContent: Record<string, ModuleContent> = {
  h0b0: {
    title: "H0B0 - Sensibilisation au risque électrique",
    subtitle:
      "Module e-learning d’initiation à la prévention du risque électrique pour les personnels non électriciens.",
    duration: "Environ 30 à 45 minutes",
    level: "Débutant",
    objective:
      "Comprendre les principaux risques électriques, identifier les situations dangereuses, adopter les bons comportements et connaître la conduite à tenir en cas d’anomalie, d’accident ou de départ de feu.",
    sections: [
      {
        id: "introduction",
        title: "1. Introduction",
        content: [
          "La formation H0B0 s’adresse aux personnes non électriciennes amenées à travailler dans un environnement où un risque électrique peut exister, sans réaliser elles-mêmes d’opérations d’ordre électrique.",
          "Elle a pour objectif de sensibiliser les apprenants aux dangers de l’électricité et de leur transmettre les règles essentielles de prévention pour intervenir ou circuler en sécurité à proximité d’installations électriques.",
          "Cette sensibilisation constitue une base indispensable pour limiter les accidents, protéger les personnes et garantir un comportement adapté sur le lieu de travail.",
        ],
      },
      {
        id: "risque-electrique",
        title: "2. Le risque électrique",
        content: [
          "Le risque électrique peut résulter d’un contact avec une pièce nue sous tension, d’un défaut d’isolement, d’un matériel dégradé, d’une intervention inadaptée ou d’une présence trop proche d’une zone dangereuse.",
          "On distingue notamment le contact direct, lorsqu’une personne touche directement une partie active normalement sous tension, et le contact indirect, lorsqu’elle touche une masse métallique devenue accidentellement sous tension à la suite d’un défaut.",
          "Le risque de voisinage existe également lorsqu’une personne s’approche d’une installation sans la toucher, mais à une distance insuffisante pour garantir sa sécurité.",
          "Même une situation qui semble banale peut devenir dangereuse : rallonge abîmée, prise défectueuse, coffret laissé ouvert, matériel bricolé ou environnement humide.",
        ],
      },
      {
        id: "effets-courant",
        title: "3. Les effets du courant électrique sur le corps humain",
        content: [
          "Le passage du courant électrique dans le corps humain peut provoquer des effets très graves, voire mortels, selon l’intensité, la durée de contact, le trajet du courant dans le corps et l’état de la personne.",
          "Parmi les effets possibles, on retrouve la tétanisation musculaire, qui peut empêcher la victime de lâcher le conducteur, les brûlures internes et externes, ainsi que les troubles cardiaques pouvant aller jusqu’à la fibrillation ventriculaire.",
          "L’électricité peut aussi provoquer des chutes, des pertes de connaissance ou des blessures indirectes liées à un mouvement réflexe ou à un départ de feu.",
          "Il ne faut jamais sous-estimer une électrisation, même en apparence légère, car certaines conséquences peuvent apparaître après coup.",
        ],
      },
      {
        id: "environnement-travail",
        title: "4. L’environnement de travail",
        content: [
          "Avant toute intervention ou présence dans une zone comportant des installations électriques, il est essentiel d’identifier l’environnement : armoires électriques, tableaux, prises, rallonges, câbles apparents, machines alimentées ou locaux techniques.",
          "Les zones présentant un risque doivent être repérées par une signalisation adaptée, des accès maîtrisés et, si nécessaire, des protections empêchant l’approche des parties dangereuses.",
          "Le respect des distances de sécurité, des consignes du site et des restrictions d’accès est indispensable.",
          "Un local électrique n’est pas un espace de stockage. Il doit rester dégagé, propre, accessible et réservé aux personnes autorisées.",
        ],
      },
      {
        id: "comportements",
        title: "5. Comportements autorisés et interdits",
        content: [
          "Une personne habilitée H0B0 ne réalise pas de travaux électriques. Elle ne doit ni ouvrir un tableau électrique, ni remplacer un appareillage, ni intervenir sur un câble, ni démonter un capot de protection donnant accès à des éléments sous tension.",
          "Elle doit en revanche respecter les consignes, signaler toute anomalie observée et s’assurer que son activité ne crée pas de situation dangereuse pour elle-même ou pour autrui.",
          "Il est interdit d’utiliser du matériel endommagé, de manipuler une prise ou un câble avec les mains mouillées, d’improviser une réparation ou de neutraliser une protection.",
          "Le bon réflexe consiste toujours à arrêter l’utilisation du matériel concerné, baliser si nécessaire, puis alerter la personne compétente.",
        ],
      },
      {
        id: "conduite-tenir",
        title: "6. Conduite à tenir en cas d’anomalie, d’accident ou d’incendie",
        content: [
          "En cas d’anomalie, il faut immédiatement cesser l’utilisation du matériel concerné, sécuriser la zone si cela est possible sans s’exposer, puis informer le responsable ou le service compétent.",
          "En cas d’accident d’origine électrique, il ne faut jamais toucher directement la victime si elle est encore en contact avec la source de danger. Il faut d’abord supprimer ou faire supprimer le risque, puis alerter les secours et appliquer les consignes de premiers secours.",
          "En cas de départ de feu d’origine électrique, la priorité est d’alerter, de faire évacuer si nécessaire, puis d’utiliser uniquement les moyens adaptés et autorisés, sans prise de risque.",
          "Toute situation anormale doit être traitée avec sérieux : odeur suspecte, échauffement, bruit inhabituel, étincelles, disjonctions répétées ou traces de brûlure.",
        ],
      },
      {
        id: "synthese",
        title: "7. Synthèse",
        content: [
          "L’électricité est une énergie indispensable, mais potentiellement très dangereuse. La prévention repose avant tout sur la connaissance des risques, le respect des limites d’intervention et l’application stricte des consignes de sécurité.",
          "Une personne non électricienne doit savoir reconnaître une situation anormale, éviter toute initiative dangereuse et alerter immédiatement en cas de doute.",
          "Le respect des règles simples permet de réduire fortement le risque d’accident et de préserver la sécurité de tous sur le lieu de travail.",
        ],
      },
      {
        id: "quiz-final",
        title: "8. Quiz final",
        content: [
          "Le quiz final permettra de vérifier l’acquisition des notions essentielles abordées dans ce module.",
          "Il portera sur les risques électriques, les effets du courant, les comportements à adopter et la conduite à tenir en situation anormale.",
          "Dans la prochaine étape, nous pourrons connecter ce quiz à ton dashboard pour afficher automatiquement le statut : non commencé, en cours ou terminé.",
        ],
      },
    ],
  },
};

export default function ModulePage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug?.toLowerCase() ?? "";
  const moduleData = useMemo(() => modulesContent[slug], [slug]);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrolled)));

      if (!moduleData) return;

      const offsets = moduleData.sections.map((section) => {
        const element = document.getElementById(section.id);
        if (!element) return null;
        return {
          id: section.id,
          top: element.getBoundingClientRect().top,
        };
      });

      const visibleSections = offsets.filter(Boolean) as { id: string; top: number }[];
      const current = visibleSections
        .filter((item) => item.top <= 140)
        .sort((a, b) => b.top - a.top)[0];

      if (current) {
        setActiveSection(current.id);
      } else if (moduleData.sections[0]) {
        setActiveSection(moduleData.sections[0].id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [moduleData]);

  if (!moduleData) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-medium text-slate-500">Module</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Module introuvable
          </h1>
          <p className="mt-4 text-slate-600">
            Le module demandé n’existe pas encore ou n’est pas disponible.
          </p>

          <Link
            href="/dashboard"
            className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Retour au dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="sticky top-0 z-50 h-2 w-full bg-slate-200">
        <div
          className="h-2 bg-slate-900 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 lg:flex-row lg:px-6">
        <aside className="lg:sticky lg:top-10 lg:h-fit lg:w-80">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Module e-learning
            </p>

            <h1 className="mt-2 text-2xl font-bold text-slate-900">
              {moduleData.title}
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {moduleData.subtitle}
            </p>

            <div className="mt-5 space-y-2 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
              <p>
                <span className="font-semibold">Durée :</span> {moduleData.duration}
              </p>
              <p>
                <span className="font-semibold">Niveau :</span> {moduleData.level}
              </p>
              <p>
                <span className="font-semibold">Objectif :</span> {moduleData.objective}
              </p>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-slate-900">Sommaire</p>
              <nav className="space-y-2">
                {moduleData.sections.map((section) => {
                  const isActive = activeSection === section.id;

                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block rounded-xl px-3 py-2 text-sm transition ${
                        isActive
                          ? "bg-slate-900 font-semibold text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {section.title}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-900">
                Progression de lecture
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {Math.round(progress)}%
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Cette progression est basée sur le défilement de la page.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Retour dashboard
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Mes formations
              </Link>
            </div>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            {moduleData.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 border-b border-slate-200 py-8 first:pt-0 last:border-b-0 last:pb-0"
              >
                <h2 className="text-2xl font-bold text-slate-900">
                  {section.title}
                </h2>

                <div className="mt-4 space-y-4">
                  {section.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base leading-8 text-slate-700"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}