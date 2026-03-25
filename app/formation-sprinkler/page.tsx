export const metadata = {
  title: "Formation exploitation sprinkler et référentiels techniques | PREVENSIA FORMATION",
  description:
    "Formation sprinkler pour exploitants, responsables techniques et entreprises : compréhension du fonctionnement, principes d’exploitation et référentiels EN 12845, APSAD R1, NFPA 13 et FM Global.",
};

export default function FormationSprinkler() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-14 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            PREVENSIA FORMATION
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Formation exploitation sprinkler et référentiels techniques
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            PREVENSIA FORMATION propose des formations dédiées à l’exploitation
            des installations sprinkler et à la compréhension des principaux
            référentiels techniques applicables. Cette formation s’adresse aux
            exploitants, responsables techniques, responsables sécurité et
            gestionnaires de site souhaitant mieux comprendre leur installation
            et renforcer la prévention incendie.
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
              Sessions organisées sur site ou dans un cadre adapté à la lecture
              des installations et à la compréhension des exigences techniques.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Public
            </p>
            <p className="mt-3 text-lg font-semibold">Exploitants et responsables techniques</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Formation destinée aux gestionnaires de site, responsables
              sécurité, maintenance et exploitation, notamment sur les sites
              industriels et logistiques.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Objectif
            </p>
            <p className="mt-3 text-lg font-semibold">Comprendre et exploiter</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Mieux comprendre l’installation sprinkler, son fonctionnement et
              les exigences générales des principaux référentiels techniques.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Pourquoi suivre une formation exploitation sprinkler ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Les installations sprinkler occupent une place centrale dans la
            stratégie de protection incendie de nombreux bâtiments industriels,
            logistiques et tertiaires. Une meilleure compréhension de leur rôle,
            de leur fonctionnement et des exigences générales d’exploitation
            permet de renforcer la sécurité du site et la qualité du suivi
            technique.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Cette formation aide les participants à mieux dialoguer avec les
            mainteneurs, les assureurs, les bureaux d’études et les
            intervenants techniques tout en intégrant les bonnes pratiques
            d’exploitation au quotidien.
          </p>
        </section>

        <section
          id="programmes"
          className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
        >
          <h2 className="text-2xl font-bold">
            Programme de la formation exploitation sprinkler
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">
                Fonctionnement général d’une installation sprinkler
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Présentation des principes de base, du rôle de l’installation,
                des principaux composants et des mécanismes généraux de
                déclenchement et de protection.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">
                Exploitation et surveillance de l’installation
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Compréhension des points de vigilance, des contrôles de routine,
                des bonnes pratiques d’exploitation et des interactions avec les
                acteurs de la maintenance et du suivi technique.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">
                Présentation des référentiels techniques
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Vue d’ensemble des principaux référentiels applicables selon les
                contextes de projet ou d’exploitation : EN 12845, APSAD R1,
                NFPA 13 et FM Global.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">
                Lecture des enjeux de protection incendie sur site
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Mise en perspective de l’installation sprinkler dans la stratégie
                globale de sécurité incendie du bâtiment et articulation avec les
                contraintes d’exploitation du site.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Une formation particulièrement utile en environnement logistique et industriel
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Cette formation est particulièrement pertinente pour les
              entrepôts, plateformes logistiques, bâtiments industriels et sites
              équipés d’installations sprinkler automatiques dans lesquels la
              continuité d’exploitation et la maîtrise du risque incendie sont
              essentielles.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Elle permet de mieux comprendre les enjeux techniques et
              organisationnels liés à la protection sprinkler sur des sites à
              forte sensibilité.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Une approche pédagogique orientée exploitation
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              PREVENSIA FORMATION adapte le contenu aux profils des participants
              et au contexte du site afin de proposer une lecture concrète des
              installations et des exigences générales à connaître pour une
              exploitation plus maîtrisée.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              L’objectif est de fournir une vision claire, opérationnelle et
              accessible, utile aux exploitants comme aux responsables
              techniques.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">Pourquoi choisir PREVENSIA FORMATION ?</h2>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Formation sprinkler pensée pour les besoins d’exploitation et de compréhension des installations
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Présentation claire des référentiels EN 12845, APSAD R1, NFPA 13 et FM Global
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Adaptation au contexte du site, au public formé et aux enjeux d’exploitation
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Réponse rapide pour les demandes de devis et l’organisation des sessions
            </li>
          </ul>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Questions fréquentes sur la formation sprinkler
          </h2>

          <div className="mt-6">
            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                À qui s’adresse la formation sprinkler ?
              </summary>
              <p className="mt-3 text-slate-700">
                Elle s’adresse aux exploitants, responsables techniques,
                responsables sécurité, services maintenance et gestionnaires de
                site amenés à suivre ou superviser des installations sprinkler.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                Quels référentiels peuvent être abordés ?
              </summary>
              <p className="mt-3 text-slate-700">
                La formation peut intégrer les grands principes des
                référentiels EN 12845, APSAD R1, NFPA 13 et FM Global selon le
                besoin du site et le niveau attendu.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                La formation est-elle adaptée aux sites logistiques et industriels ?
              </summary>
              <p className="mt-3 text-slate-700">
                Oui, elle est particulièrement pertinente pour les entrepôts,
                plateformes logistiques, bâtiments industriels et sites équipés
                d’installations sprinkler automatiques.
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