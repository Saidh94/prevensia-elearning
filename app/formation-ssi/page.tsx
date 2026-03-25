export const metadata = {
  title: "Formation exploitation SSI | PREVENSIA FORMATION",
  description:
    "Formation exploitation du système de sécurité incendie (SSI) pour entreprises, exploitants et responsables techniques. Comprendre le fonctionnement du SSI, les normes AFNOR série NF S 61 et les cadres ERP, IGH, Code du Travail et ICPE.",
};

export default function FormationSSI() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-14 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            PREVENSIA FORMATION
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Formation exploitation du SSI
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            PREVENSIA FORMATION propose des formations à l’exploitation du
            système de sécurité incendie pour les exploitants, responsables
            techniques, équipes maintenance et personnels amenés à utiliser ou
            surveiller un SSI dans un bâtiment tertiaire, industriel ou
            logistique.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/demande-devis"
              className="rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-red-800"
            >
              Demander un devis
            </a>

            <a
              href="#programmes"
              className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-red-300 hover:text-red-700"
            >
              Voir les programmes
            </a>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Modalités
            </p>
            <p className="mt-3 text-lg font-semibold">Présentiel</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Sessions organisées sur site ou dans un cadre adapté à la
              compréhension des installations et des consignes de sécurité.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Public
            </p>
            <p className="mt-3 text-lg font-semibold">
              Exploitants et équipes techniques
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Formation destinée aux personnels amenés à exploiter un SSI au
              quotidien ou à intervenir en cas d’alarme incendie.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Objectif
            </p>
            <p className="mt-3 text-lg font-semibold">Comprendre et exploiter</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Savoir lire les informations du SSI, comprendre son rôle et
              appliquer les bons réflexes en situation normale ou dégradée.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Pourquoi suivre une formation à l’exploitation du SSI ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Le système de sécurité incendie joue un rôle central dans la
            détection incendie, l’alarme, la mise en sécurité et la gestion des
            informations techniques liées au feu. Une bonne compréhension du SSI
            permet aux exploitants et aux équipes de réagir de manière plus
            efficace et plus sûre.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Cette formation aide les participants à mieux identifier les
            équipements, comprendre les signalisations et adopter les bonnes
            pratiques d’exploitation au quotidien.
          </p>
        </section>

        <section
          id="programmes"
          className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
        >
          <h2 className="text-2xl font-bold">
            Programme de la formation exploitation SSI
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">
                Architecture et fonctionnement du SSI
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Compréhension des principes de détection incendie, d’alarme, de
                compartimentage, de désenfumage et de mise en sécurité.
                Identification des différents équipements du système de sécurité
                incendie et lecture des informations issues des ECS et CMSI.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">
                Exploitation quotidienne du système
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Lecture des signalisations, distinction entre alarmes feu,
                défauts et dérangements techniques, conduite à tenir en cas de
                déclenchement, levée de doute et consignes d’exploitation
                adaptées au site.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">
                Cadre normatif des systèmes de sécurité incendie
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Présentation des principales normes AFNOR de la série NF S 61
                relatives aux systèmes de sécurité incendie, notamment les
                règles générales d’installation, d’exploitation et de
                maintenance des équipements de détection, d’alarme et de mise en
                sécurité.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">
                Réglementation applicable selon le type d’établissement
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Présentation des exigences réglementaires liées aux
                établissements recevant du public (ERP), aux immeubles de grande
                hauteur (IGH), aux bâtiments à usage professionnel au sens du
                Code du Travail (BUP) ainsi qu’aux installations classées pour
                la protection de l’environnement (ICPE).
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Une formation utile pour les sites exploités
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              La formation SSI est particulièrement pertinente pour les ERP,
              bâtiments tertiaires, plateformes logistiques, sites industriels
              et établissements disposant d’un système de sécurité incendie
              exploité en routine.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Elle permet de mieux structurer les réactions du personnel face à
              un événement feu ou à un défaut technique signalé par
              l’installation.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Une approche adaptée au niveau des participants
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              PREVENSIA FORMATION adapte le contenu en fonction du profil des
              participants, du système installé sur site et du niveau
              d’exploitation attendu dans l’établissement.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              L’objectif est de proposer une formation claire, utile et
              immédiatement applicable dans le contexte réel du client.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Pourquoi choisir PREVENSIA FORMATION ?
          </h2>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Formation SSI pensée pour les besoins d’exploitation réels des sites
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Contenu clair orienté lecture du système, conduite à tenir et sécurité
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Intégration des principales normes AFNOR série NF S 61 et des
              exigences réglementaires applicables
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Réponse rapide pour les demandes de devis et l’organisation des sessions
            </li>
          </ul>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Questions fréquentes sur la formation SSI
          </h2>

          <div className="mt-6">
            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                À qui s’adresse la formation SSI ?
              </summary>
              <p className="mt-3 text-slate-700">
                Elle s’adresse aux exploitants, responsables techniques,
                équipes maintenance, services généraux et personnels amenés à
                utiliser ou surveiller un système de sécurité incendie.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                Que permet de comprendre la formation SSI ?
              </summary>
              <p className="mt-3 text-slate-700">
                Elle permet de comprendre le rôle du SSI, l’architecture du
                système, les signaux courants, les normes applicables et les
                réactions attendues en cas d’alarme, de défaut ou de
                dérangement.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                Peut-on adapter la formation au site de l’entreprise ?
              </summary>
              <p className="mt-3 text-slate-700">
                Oui, PREVENSIA FORMATION peut adapter la session au système
                installé, aux consignes du site, aux référentiels applicables et
                au niveau de connaissance des participants.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-red-200 bg-red-50 p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">Besoin d’un devis rapide ?</h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Indiquez votre besoin, votre effectif, votre localisation et le
            délai souhaité. PREVENSIA FORMATION vous adresse une proposition
            adaptée à votre demande.
          </p>

          <div className="mt-6">
            <a
              href="/demande-devis"
              className="inline-flex rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-red-800"
            >
              Demander un devis
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}