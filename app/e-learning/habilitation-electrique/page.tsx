import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "E-learning habilitation électrique | PREVENSIA FORMATION",
  description:
    "Formation habilitation électrique en e-learning pour particuliers et entreprises avec PREVENSIA FORMATION.",
};

const parcours = [
  {
    title: "H0B0",
    description:
      "Formation destinée au personnel non-électricien amené à évoluer dans un environnement électrique.",
    duration: "Durée indicative : 7 h",
  },
  {
    title: "BS / BE Manœuvre",
    description:
      "Parcours pour les opérations élémentaires, interventions simples et manœuvres sur installations basse tension.",
    duration: "Durée indicative : 10 h",
  },
  {
    title: "B1 B1V B2 B2V BR BC",
    description:
      "Formation e-learning destinée au personnel électricien selon le niveau d’habilitation visé et les opérations réalisées.",
    duration: "Durée indicative : 14 h",
  },
];

const pointsForts = [
  "Accès souple à distance pour les apprenants",
  "Contenu structuré et progression pédagogique claire",
  "Solution adaptée aux particuliers et aux entreprises",
  "Organisation rapide selon vos besoins et vos délais",
  "Possibilité de compléter le parcours par un accompagnement adapté",
];

export default function ElearningHabilitationElectrique() {
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

          <div className="mt-6 max-w-4xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              E-learning habilitation électrique
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              PREVENSIA FORMATION propose des parcours e-learning en habilitation
              électrique destinés aux particuliers, aux salariés et aux entreprises
              souhaitant organiser une montée en compétence souple, lisible et
              adaptée aux contraintes opérationnelles.
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
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Présentation
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Une solution e-learning pensée pour l’habilitation électrique
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Cette offre permet de préparer les apprenants aux exigences liées à
              l’habilitation électrique au travers d’un format digital souple et
              accessible. Elle convient particulièrement aux structures souhaitant
              former rapidement plusieurs personnes, ou aux apprenants recherchant
              une organisation plus flexible.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Les parcours peuvent être adaptés selon les profils, les missions
              confiées et le niveau d’habilitation recherché. La demande peut être
              formulée directement en ligne afin d’orienter la solution la plus
              adaptée à votre besoin.
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
              Besoin rapide
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Vous souhaitez inscrire un apprenant ?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Accédez à la page d’inscription ou faites une demande de devis pour
              une organisation individuelle ou entreprise.
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
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <p className="mt-5 text-sm font-semibold text-slate-800">
                  {item.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Orientation rapide
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Passez directement à l’étape suivante
              </h2>
              <p className="mt-4 text-slate-700">
                Vous savez déjà quel parcours vous intéresse ? Accédez à
                l’inscription. Vous avez besoin d’un cadrage ou d’une organisation
                sur mesure ? Faites une demande de devis.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                S’inscrire
              </Link>

              <Link
                href="/demande-devis"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}