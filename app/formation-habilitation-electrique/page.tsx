import Link from "next/link";
import Image from "next/image";
import { electricalCommercialOffers } from "@/lib/electrical-offers";
import CourseJsonLd from "@/components/seo/CourseJsonLd";

export const metadata = {
  alternates: { canonical: "https://prevensia-formation.fr/formation-habilitation-electrique" },
  title: "Formation habilitation électrique | PREVENSIA FORMATION",
  description:
    "Formation habilitation électrique en e-learning, visio et présentiel avec PREVENSIA FORMATION pour particuliers, salariés et entreprises.",
};

const pointsForts = [
  "Offres séparées par symbole et par rôle visé",
  "Logique alignée sur la NF C 18-510 et le Code du travail",
  "La formation prépare, l'employeur délivre l'habilitation",
  "Achat direct uniquement pour H0B0 / H0V et BS / BE Manœuvre encadrés",
  "B1, B2, BR, BC et BE : e-learning inclus avec la formation encadrée",
  "Progression pédagogique claire avec quiz, visio ou présentiel",
];

const formats = [
  {
    title: "E-learning encadré",
    description:
      "Format disponible en achat direct pour H0B0 / H0V et BS / BE Manœuvre, avec entretien, visio ou classes virtuelle selon le parcours. Pour les autres symboles, l'e-learning accompagné la formation encadrée.",
    ctaLabel: "Accéder a l'espace apprenant",
    href: "/elearning",
  },
  {
    title: "Présentiel ou visio selon le symbole",
    description:
      "H0B0 / H0V reste sur un format e-learning avec entretien. BS / BE Manœuvre ajoute une classes virtuelle ou une session entreprise. Les symboles B1, B2, BR, BC et BE demandent une séquence encadrée, avec accès e-learning inclus pour préparer et réviser.",
    ctaLabel: "Voir le planning présentiel",
    href: "/planning",
  },
];

const engagementCards = [
  {
    title: "Inscription rapide",
    text: "Pour un besoin individuel déjà identifié sur une offre ouverte a l'achat direct, vous pouvez passer directement a l'inscription.",
    href: "/inscription",
    label: "S'inscrire",
    style:
      "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
  },
  {
    title: "Projet entreprise",
    text: "Pour plusieurs apprenants, un symbole cible ou une organisation sur mesure, la demande de devis reste la voie la plus propre.",
    href: "/demande-devis?type=habilitation",
    label: "Demander un devis",
    style:
      "bg-slate-900 text-white border border-slate-900 hover:bg-slate-800",
  },
  {
    title: "Accès e-learning",
    text: "L'espace e-learning accueille les parcours H0B0 / BS-BE payants et les supports inclus pour les apprenants inscrits aux formations encadrées.",
    href: "/elearning",
    label: "Espace apprenant",
    style:
      "bg-red-700 text-white border border-red-700 hover:bg-red-800",
  },
];

const offerSections = [
  {
    key: "non-electriciens",
    eyebrow: "Formation habilitation électrique pour non-électriciens",
    title: "Parcours non-électriciens",
    description:
      "Offres pensées pour les opérations d'ordre non électrique, les interventions élémentaires, les manœuvres simples et les chantiers au voisinage de réseaux enterrés.",
  },
  {
    key: "electriciens-bt",
    eyebrow: "Formation habilitation électrique pour électriciens",
    title: "Parcours électriciens basse tension",
    description:
      "Lecture plus fine des symboles B1 / B1V, B2 / B2V, BR, BC, BE et du parcours BT multi-symboles, avec tarifs et durées alignés sur les usages du marche.",
  },
  {
    key: "haute-tension",
    eyebrow: "Formation habilitation électrique haute tension",
    title: "Parcours haute tension",
    description:
      "Offre HTA sur devis, pour les postes ou les missions réelles imposent un cadrage plus exigeant sur les travaux, la consignation et l'exploitation.",
  },
] as const;

export default function FormationHabilitationElectriquePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <CourseJsonLd
        name="Formation habilitation électrique (H0B0, BS, B1, B2, BR, BC)"
        description="Formations habilitation électrique conformes NF C 18-510 : H0B0/H0V, BS / BE Manœuvre, B1/B1V, B2/B2V, BR, BC. E-learning, classes virtuelle et présentiel."
        courseCode="HABILITATION-ELEC"
        url="/formation-habilitation-electrique"
        timeRequired="P1D"
        educationalLevel="Beginner"
        audience="Particuliers, salariés, entreprises – électriciens et non-électriciens"
        educationalCredentialAwarded="Attestation de formation Prevensia (l'employeur délivre l'habilitation)"
      />
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/armoire-electrique.jpg"
            alt="Armoire électrique"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-red-900/80" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-100">
            PREVENSIA FORMATION
          </p>

          <div className="mt-6 max-w-5xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Formation habilitation électrique avec e-learning inclus
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
              PREVENSIA FORMATION propose une offre en habilitation électrique
              pensee pour les particuliers, les salariés et les entreprises,
              avec deux formats clairement distingués : les parcours H0B0 / H0V
              et BS / BE Manœuvre accessibles en e-learning encadré, puis les
              parcours B1 / B1V, B2 / B2V, BR, BC et BE vendus avec une séquence
              encadrée et un accès e-learning inclus.
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
              La formation prépare l&apos;apprenant aux prescriptions de sécurité.
              Le titre d&apos;habilitation reste délivre par l&apos;employeur après
              vérification de l&apos;aptitude, de la pratique et de l&apos;adéquation au
              poste, dans l&apos;esprit du Code du travail et de la NF C 18-510.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/inscription"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
              >
                S&apos;inscrire
              </Link>

              <Link
                href="/demande-devis?type=habilitation"
                className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Demander un devis
              </Link>

              <Link
                href="/elearning"
                className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Accéder a l&apos;espace apprenant
              </Link>

              <Link
                href="/planning"
                className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Voir le planning présentiel
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Formation habilitation électrique
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Une offre claire pour les particuliers, les salariés et les entreprises
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              PREVENSIA FORMATION propose des formations en habilitation
              électrique adaptées aux profils non électriciens, au personnel
              charge d&apos;opérations élémentaires ou de manœuvres, ainsi qu&apos;au
              personnel électricien selon les symboles et responsabilites
              effectivement recherches.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              L&apos;objectif n&apos;est pas de reduire une habilitation a un simple
              module en ligne ni de vendre un symbole trop large par commodite.
              L&apos;e-learning sert de socle de préparation et de revision ; la
              séquence encadrée, les mises en situation et l&apos;évaluation pratique
              restent indispensables pour les symboles électriciens.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pointsForts.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-slate-900 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
              Accès rapide
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Choisissez votre prochaine etape
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Vous avez déjà identifié un parcours H0B0 / H0V ou BS / BE Manœuvre
              ouvert a l&apos;achat direct ? Passez a l&apos;inscription. Pour B1, B2, BR,
              BC, BE, recyclage ou format entreprise, l&apos;accès e-learning est inclus
              dans l&apos;offre encadrée : faites une demande de devis.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
              >
                Aller a l&apos;inscription
              </Link>

              <Link
                href="/demande-devis?type=habilitation"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Faire une demande de devis
              </Link>

              <Link
                href="/elearning"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Accéder a l&apos;espace e-learning
              </Link>

              <Link
                href="/planning"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Voir le planning présentiel
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Offres disponibles
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Une lecture plus fine des habilitations electriques
            </h2>

            <p className="mt-4 text-slate-600">
              Chaque offre est pensee pour un public, un rôle et un niveau
              d&apos;encadrement precis. Le but est d&apos;afficher une offre lisible,
              credible et raccord avec les missions réelles confiees aux
              apprenants.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {offerSections.map((section) => {
              const sectionOffers = electricalCommercialOffers.filter(
                (item) => item.segment === section.key
              );

              return (
                <div key={section.key}>
                  <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
                      {section.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                      {section.title}
                    </h3>
                    <p className="mt-3 text-slate-600">{section.description}</p>
                  </div>

                  <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {sectionOffers.map((item) => (
                      <article
                        key={item.slug}
                        className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
                      >
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
                          {item.availability === "direct"
                            ? "Inscription directe"
                            : "Parcours sur devis"}
                        </p>

                        <h3 className="mt-3 text-2xl font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-slate-500">
                          {item.audience}
                        </p>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                          {item.objective}
                        </p>

                        <div className="mt-5 space-y-2 text-sm">
                          <p className="rounded-xl bg-white px-3 py-2 font-medium text-slate-700 ring-1 ring-slate-200">
                            {item.delivery}
                          </p>
                          <p className="rounded-xl bg-white px-3 py-2 font-medium text-slate-700 ring-1 ring-slate-200">
                            Metiers visés : {item.jobs}
                          </p>
                        </div>

                        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                          <p>
                            <span className="font-semibold text-slate-900">Initiale :</span>{" "}
                            {item.initialDuration}
                          </p>
                          <p className="mt-1">
                            <span className="font-semibold text-slate-900">Recyclage :</span>{" "}
                            {item.recycleDuration ?? "Selon besoin"}
                          </p>
                          <p className="mt-3">
                            <span className="font-semibold text-slate-900">Inter :</span>{" "}
                            {item.interPrice}
                          </p>
                          <p className="mt-1">
                            <span className="font-semibold text-slate-900">Intra :</span>{" "}
                            {item.intraPrice}
                          </p>
                          <p className="mt-1">
                            <span className="font-semibold text-slate-900">Participants :</span>{" "}
                            {item.participants}
                          </p>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                          {item.note}
                        </p>

                        <Link
                          href={item.ctaHref}
                          className="mt-6 inline-flex rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                          {item.ctaLabel}
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Modes de formation
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Présentiel ou e-learning selon votre organisation
          </h2>

          <p className="mt-4 text-slate-600">
            PREVENSIA FORMATION vous oriente vers le mode de formation le plus
            adapté selon le symbole recherche, le nombre d&apos;apprenants et les
            contraintes de votre structure.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {formats.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Format
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-slate-600">{item.description}</p>
              <Link
                href={item.href}
                className="mt-8 inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {item.ctaLabel}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Votre parcours
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Choisissez le mode de formation adapté a votre besoin
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              PREVENSIA FORMATION vous accompagné selon votre situation :
              inscription individuelle, besoin entreprise, symbole cible, ou
              parcours e-learning déjà ouvert. Accedez rapidement a la solution
              la plus adaptée a vos contraintes et a votre organisation.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {engagementCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-xl font-bold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {card.text}
                  </p>
                  <Link
                    href={card.href}
                    className={`mt-6 inline-flex rounded-2xl px-4 py-3 text-sm font-semibold transition ${card.style}`}
                  >
                    {card.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Questions fréquentes
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Sur l’habilitation électrique
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                La formation me délivre-t-elle l’habilitation ?
                <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Non. La formation Prevensia atteste de vos acquis théoriques
                (et pratiques pour les parcours encadrés). Le titre
                d’habilitation est délivré par votre employeur après
                vérification de l’aptitude médicale, des tâches confiées et de
                l’environnement de travail (Code du travail R.4544-10, NF C
                18-510).
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                Quel symbole choisir pour mes équipes ?
                <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                H0B0 / H0V pour les non-électriciens évoluant en environnement
                électrique. BS / BE Manœuvre pour les interventions
                élémentaires et les manœuvres simples. B1 / B1V pour les
                exécutants travaux. B2 / B2V pour les chargés de travaux.
                BR pour le dépannage et les interventions générales. BC pour
                la consignation. Notre équipe vous oriente sur devis selon les
                postes réels de vos collaborateurs.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                Quelle est la durée de validité d’une habilitation ?
                <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                La NF C 18-510 recommande un recyclage tous les 3 ans pour
                maintenir les compétences. L’employeur reste libre d’en
                demander un plus fréquent si l’environnement de travail le
                justifie (incident, changement de poste, évolution des
                installations).
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                Le e-learning H0B0 / H0V est-il accepté pour la délivrance ?
                <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Oui, dès lors qu’il est complété par un entretien de validation
                avec le formateur (inclus dans notre formule). Pour les autres
                symboles (B1, B2, BR, BC, BE), une séquence pratique encadrée
                est obligatoire en plus du e-learning.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                Pouvez-vous intervenir sur notre site ?
                <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Oui, en intra-entreprise partout en France. Le devis intègre
                les frais de déplacement et l’adaptation du contenu à vos
                installations réelles, vos consignes et vos retours
                d’expérience.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
