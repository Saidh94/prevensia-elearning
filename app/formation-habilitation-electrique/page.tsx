import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Formation habilitation electrique | PREVENSIA FORMATION",
  description:
    "Formation habilitation electrique en e-learning, visio et presentiel avec PREVENSIA FORMATION pour particuliers, salaries et entreprises.",
};

const parcours = [
  {
    title: "H0B0 / H0V",
    audience: "Personnel non electricien",
    description:
      "Parcours destine aux personnes amenees a evoluer dans un environnement electrique sans realiser d'operations d'ordre electrique, avec un entretien de validation en complement du module en ligne.",
    elearning: "E-learning theorique structure",
    presentiel: "Entretien de validation : 30 min",
    duration: "Duree e-learning : 3 h a 4 h",
    pricing: "A partir de 150 EUR HT",
  },
  {
    title: "BS / BE Manoeuvre",
    audience: "Personnel realisant des operations simples et manoeuvres",
    description:
      "Parcours pense pour les interventions elementaires et manoeuvres en basse tension, avec une partie theorique en ligne puis une sequence d'accompagnement en visio sur une demi-journee.",
    elearning: "E-learning + quiz de validation",
    presentiel: "Classe virtuelle / visio accompagnee",
    duration: "E-learning : 5 h a 7 h + visio : 2 h 30 a 3 h",
    pricing: "A partir de 320 EUR HT",
  },
  {
    title: "B1 B1V B2 B2V BR BC",
    audience: "Personnel electricien",
    description:
      "Parcours mixte destine au personnel electricien avec une partie theorique solide en ligne, un quiz de validation et une journee presentielle pour l'application, l'echange et la mise en situation.",
    elearning: "Parcours mixte e-learning + quiz",
    presentiel: "Journee presentielle d'application",
    duration: "E-learning : 7 h a 10 h + presentiel : 1 jour",
    pricing: "A partir de 549 EUR HT",
  },
];

const pointsForts = [
  "Parcours structures selon le niveau d'habilitation vise",
  "Approche adaptee aux particuliers, salaries et entreprises",
  "Positionnement plus solide que le simple e-learning low cost",
  "Possibilite d'achat direct ou de demande de devis",
  "Progression pedagogique claire avec quiz et validation",
  "Orientation vers le format le plus adapte au besoin reel",
];

const formats = [
  {
    title: "E-learning encadre",
    description:
      "Format pense pour la theorie, la progression apprenant, les quiz et la validation intermediaire. Selon le niveau vise, il est complete par un entretien de validation, une visio accompagnee ou une journee presentielle.",
    ctaLabel: "Acceder a l'espace apprenant",
    href: "/elearning",
  },
  {
    title: "Parcours mixte / presentiel",
    description:
      "Organisation adaptee au niveau d'habilitation recherche, avec sequence visio ou presentielle selon la formation : entretien H0B0, visio BS/BE ou journee terrain pour B1 a BC.",
    ctaLabel: "Voir le planning presentiel",
    href: "/planning",
  },
];

const engagementCards = [
  {
    title: "Inscription rapide",
    text: "Pour un besoin individuel ou un premier parcours identifie, vous pouvez passer directement a l'inscription.",
    href: "/inscription",
    label: "S'inscrire",
    style:
      "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
  },
  {
    title: "Besoin entreprise",
    text: "Pour plusieurs apprenants, une organisation sur mesure ou une demande specifique, privilegiez la demande de devis.",
    href: "/demande-devis",
    label: "Demander un devis",
    style:
      "bg-slate-900 text-white border border-slate-900 hover:bg-slate-800",
  },
  {
    title: "Acces e-learning",
    text: "L'espace e-learning accueille les parcours payants, les modules, les quiz et le suivi apprenant.",
    href: "/elearning",
    label: "Espace apprenant",
    style:
      "bg-red-700 text-white border border-red-700 hover:bg-red-800",
  },
];

export default function FormationHabilitationElectriquePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/armoire-electrique.jpg"
            alt="Armoire electrique"
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
              Formation habilitation electrique
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
              PREVENSIA FORMATION propose une offre en habilitation electrique
              pensee pour les particuliers, les salaries et les entreprises,
              avec des parcours structures en e-learning, visio ou presentiel
              selon le niveau recherche, le profil de l&apos;apprenant et les
              contraintes d&apos;organisation.
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
              Nous assumons une logique claire : H0B0 / H0V en e-learning avec
              entretien de validation, BS / BE Manoeuvre en e-learning +
              visio, et B1 a BC en parcours mixte avec journee presentielle.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/inscription"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
              >
                S&apos;inscrire
              </Link>

              <Link
                href="/demande-devis"
                className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Demander un devis
              </Link>

              <Link
                href="/elearning"
                className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Acceder a l&apos;espace apprenant
              </Link>

              <Link
                href="/planning"
                className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Voir le planning presentiel
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Formation habilitation electrique
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Une offre claire pour les particuliers, les salaries et les entreprises
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              PREVENSIA FORMATION propose des formations en habilitation
              electrique adaptees aux profils non electriciens, au personnel
              realisant des operations simples ou manoeuvres, ainsi qu&apos;au
              personnel electricien selon le niveau recherche.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              L&apos;objectif n&apos;est pas de sous-vendre une habilitation par un simple
              module en ligne. Nous privilegions des parcours credibles,
              structures et raccords aux attentes du marche.
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
              Acces rapide
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Choisissez votre prochaine etape
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Vous avez deja identifie votre besoin ? Passez a l&apos;inscription.
              Vous avez un projet pour plusieurs apprenants ou une demande
              specifique ? Faites une demande de devis. Vous souhaitez suivre un
              parcours en ligne ? Accedez a l&apos;espace e-learning.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
              >
                Aller a l&apos;inscription
              </Link>

              <Link
                href="/demande-devis"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Faire une demande de devis
              </Link>

              <Link
                href="/elearning"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Acceder a l&apos;espace e-learning
              </Link>

              <Link
                href="/planning"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Voir le planning presentiel
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Parcours disponibles
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Des parcours adaptes au niveau d&apos;habilitation recherche
            </h2>

            <p className="mt-4 text-slate-600">
              Chaque parcours est pense pour un public, un format et un niveau
              d&apos;encadrement precis. Le but est d&apos;afficher une offre lisible,
              credible et commercialement solide.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {parcours.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
                  Parcours
                </p>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-500">
                  {item.audience}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 space-y-2 text-sm">
                  <p className="rounded-xl bg-white px-3 py-2 font-medium text-slate-700 ring-1 ring-slate-200">
                    {item.elearning}
                  </p>
                  <p className="rounded-xl bg-white px-3 py-2 font-medium text-slate-700 ring-1 ring-slate-200">
                    {item.presentiel}
                  </p>
                </div>

                <p className="mt-5 text-sm font-semibold text-slate-800">
                  {item.duration}
                </p>

                <p className="mt-2 text-sm font-bold text-red-700">
                  {item.pricing}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Modes de formation
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Presentiel ou e-learning selon votre organisation
          </h2>

          <p className="mt-4 text-slate-600">
              PREVENSIA FORMATION vous oriente vers le mode de formation le plus
              adapte selon le niveau recherche, le nombre d&apos;apprenants et les
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
              <p className="mt-4 text-slate-600 leading-8">
                {item.description}
              </p>
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
              Choisissez le mode de formation adapte a votre besoin
            </h2>

            <p className="mt-4 max-w-4xl text-slate-600 leading-8">
              PREVENSIA FORMATION vous accompagne dans votre habilitation
              electrique selon votre situation : inscription individuelle,
              formation en entreprise ou parcours e-learning. Accedez rapidement
              a la solution la plus adaptee a vos contraintes et a votre
              organisation.
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
    </main>
  );
}
