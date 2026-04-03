import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Formation habilitation électrique | PREVENSIA FORMATION",
  description:
    "Formation habilitation électrique en présentiel et e-learning avec PREVENSIA FORMATION pour particuliers, salariés et entreprises.",
};

const parcours = [
  {
    title: "H0B0",
    audience: "Personnel non-électricien",
    description:
      "Parcours destiné aux personnes amenées à évoluer dans un environnement électrique sans réaliser d’opérations d’ordre électrique.",
    elearning: "Disponible en e-learning",
    presentiel: "Disponible en présentiel selon organisation",
    duration: "Durée indicative : 7 h",
  },
  {
    title: "BS / BE Manœuvre",
    audience: "Personnel réalisant des opérations simples ou manœuvres",
    description:
      "Parcours adapté aux opérations élémentaires, interventions simples et manœuvres sur installations basse tension selon les missions confiées.",
    elearning: "Disponible en e-learning",
    presentiel: "Disponible en présentiel selon organisation",
    duration: "Durée indicative : 10 h",
  },
  {
    title: "B1 B1V B2 B2V BR BC",
    audience: "Personnel électricien",
    description:
      "Formation destinée au personnel électricien selon le niveau visé, les tâches réalisées et l’environnement d’intervention.",
    elearning: "Disponible en e-learning",
    presentiel: "Disponible en présentiel selon organisation",
    duration: "Durée indicative : 14 h",
  },
];

const pointsForts = [
  "Parcours disponibles en e-learning et en présentiel",
  "Approche adaptée aux particuliers, salariés et entreprises",
  "Organisation souple selon le niveau recherché",
  "Possibilité d’achat direct ou de demande de devis",
  "Progression pédagogique claire et lisible",
  "Orientation possible vers la solution la plus adaptée",
];

const formats = [
  {
    title: "E-learning",
    description:
      "Format souple pour suivre les contenus théoriques à distance, avec progression structurée, accès apprenant et future intégration de modules, quiz et validation.",
    ctaLabel: "Accéder à l’espace apprenant",
    href: "/elearning",
  },
  {
    title: "Présentiel",
    description:
      "Organisation adaptée aux besoins opérationnels de l’entreprise ou du stagiaire, en inter ou en intra selon le nombre d’apprenants et le niveau visé.",
    ctaLabel: "Voir le planning présentiel",
    href: "/planning",
  },
];

const engagementCards = [
  {
    title: "Inscription rapide",
    text: "Pour un besoin individuel ou un premier parcours identifié, vous pouvez passer directement à l’inscription.",
    href: "/inscription",
    label: "S’inscrire",
    style:
      "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
  },
  {
    title: "Besoin entreprise",
    text: "Pour plusieurs apprenants, une organisation sur mesure ou une demande spécifique, privilégiez la demande de devis.",
    href: "/demande-devis",
    label: "Demander un devis",
    style:
      "bg-slate-900 text-white border border-slate-900 hover:bg-slate-800",
  },
  {
    title: "Accès e-learning",
    text: "L’espace e-learning a vocation à accueillir les parcours payants, les modules, les quiz et le suivi apprenant.",
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
              Formation habilitation électrique
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
              PREVENSIA FORMATION propose une offre en habilitation électrique
              pensée pour les particuliers, les salariés et les entreprises,
              avec des parcours disponibles en présentiel et en e-learning
              selon le niveau recherché, le profil de l’apprenant et les
              contraintes d’organisation.
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
              Cette page constitue l’entrée principale pour l’offre habilitation
              électrique. Le présentiel permet une organisation terrain et
              entreprise. Le e-learning a vocation à porter les parcours en
              ligne, les modules, les quiz et le suivi apprenant.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/inscription"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
              >
                S’inscrire
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
                Accéder à l’espace apprenant
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
              PREVENSIA FORMATION propose des formations en habilitation électrique
              adaptées aux profils non-électriciens, au personnel réalisant des
              opérations simples ou manœuvres, ainsi qu’au personnel électricien
              selon le niveau recherché.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Selon votre besoin, les parcours peuvent être organisés en présentiel
              ou en e-learning. L’objectif est de vous orienter vers la formule la
              plus adaptée à votre organisation, à vos contraintes et au niveau
              d’habilitation visé.
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
              Choisissez votre prochaine étape
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Vous avez déjà identifié votre besoin ? Passez à l’inscription.
              Vous avez un projet pour plusieurs apprenants ou une demande
              spécifique ? Faites une demande de devis. Vous souhaitez suivre un
              parcours en ligne ? Accédez à l’espace e-learning.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
              >
                Aller à l’inscription
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
                Accéder à l’espace e-learning
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
              Parcours disponibles
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Des parcours adaptés au niveau d’habilitation recherché
            </h2>

            <p className="mt-4 text-slate-600">
              Chaque parcours est conçu pour répondre à des profils et à des
              niveaux d’intervention différents. L’organisation peut ensuite être
              proposée en e-learning ou en présentiel selon le besoin.
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
            Présentiel ou e-learning selon votre organisation
          </h2>

          <p className="mt-4 text-slate-600">
            PREVENSIA FORMATION vous oriente vers le mode de formation le plus
            adapté selon le niveau recherché, le nombre d’apprenants et les
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
              Choisissez le mode de formation adapté à votre besoin
            </h2>

            <p className="mt-4 max-w-4xl text-slate-600 leading-8">
              PREVENSIA FORMATION vous accompagne dans votre habilitation
              électrique selon votre situation : inscription individuelle,
              formation en entreprise ou parcours e-learning. Accédez rapidement
              à la solution la plus adaptée à vos contraintes et à votre
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