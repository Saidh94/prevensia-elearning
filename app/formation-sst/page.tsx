export const metadata = {
  title: "Formation SST et MAC SST | PREVENSIA FORMATION",
  description:
    "Formation SST initiale et MAC SST en présentiel pour entreprises et professionnels. Apprenez les gestes de premiers secours et la prévention des risques avec PREVENSIA FORMATION.",
};

export default function FormationSST() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-14 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            PREVENSIA FORMATION
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Formation SST – Sauveteur Secouriste du Travail
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            PREVENSIA FORMATION propose des formations SST initiales et MAC SST
            pour les entreprises et les professionnels souhaitant renforcer la
            sécurité au travail, développer les réflexes de premiers secours et
            contribuer à la prévention des risques professionnels.
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
              Sessions organisées en entreprise ou dans un cadre adapté aux
              exercices pratiques et aux mises en situation.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Public
            </p>
            <p className="mt-3 text-lg font-semibold">Salariés et entreprises</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Formation destinée aux salariés amenés à intervenir en cas
              d’accident du travail et à participer à la prévention.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Objectif
            </p>
            <p className="mt-3 text-lg font-semibold">Secourir et prévenir</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Acquérir les bons gestes face à une urgence et contribuer à la
              réduction des risques dans l’entreprise.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Pourquoi suivre une formation SST ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            La formation Sauveteur Secouriste du Travail permet aux salariés
            d’intervenir rapidement en cas d’accident, de malaise ou de situation
            d’urgence sur le lieu de travail. Elle contribue également à
            développer une culture de prévention au sein de l’entreprise.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Cette formation répond à un besoin concret de sécurité des personnes,
            tout en renforçant l’organisation interne des entreprises face aux
            risques professionnels.
          </p>
        </section>

        <section
          id="programmes"
          className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
        >
          <h2 className="text-2xl font-bold">Programmes proposés</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">SST initial</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Formation complète permettant d’apprendre à protéger, examiner,
                alerter, secourir et participer à la prévention des risques
                professionnels dans l’entreprise.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">MAC SST</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Maintien et actualisation des compétences pour conserver les bons
                réflexes, réviser les gestes de secours et actualiser les
                connaissances du sauveteur secouriste du travail.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Une formation orientée terrain
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              La formation SST repose sur des mises en situation concrètes, des
              cas pratiques et un apprentissage opérationnel des gestes de
              premiers secours. Elle favorise l’acquisition de réflexes simples,
              efficaces et adaptés au contexte professionnel.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Elle convient particulièrement aux entreprises souhaitant former
              leurs équipes sur site avec une approche réaliste et applicable
              immédiatement.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Un levier de prévention pour l’entreprise
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Au-delà des gestes de secours, la formation SST permet aussi
              d’identifier les situations à risque et de participer à la
              prévention au quotidien. Elle s’inscrit pleinement dans une
              démarche de sécurité et de protection des salariés.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              C’est une formation particulièrement utile pour les structures
              souhaitant renforcer leur organisation face aux accidents du
              travail et améliorer la sécurité globale de leurs équipes.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">Pourquoi choisir PREVENSIA FORMATION ?</h2>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Sessions SST initiales et MAC SST adaptées aux besoins des entreprises
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Approche concrète orientée terrain, gestes de secours et prévention
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Organisation rapide des sessions et adaptation au nombre de stagiaires
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Réponse claire et rapide pour les demandes de devis et de planification
            </li>
          </ul>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Questions fréquentes sur la formation SST
          </h2>

          <div className="mt-6">
            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                À qui s’adresse la formation SST ?
              </summary>
              <p className="mt-3 text-slate-700">
                La formation SST s’adresse aux salariés, agents, techniciens et
                personnels d’entreprise souhaitant apprendre les gestes de
                premiers secours et contribuer à la prévention des risques
                professionnels.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                Quelle différence entre SST initiale et MAC SST ?
              </summary>
              <p className="mt-3 text-slate-700">
                La formation SST initiale permet d’acquérir les bases, tandis que
                le MAC SST correspond au maintien et à l’actualisation des
                compétences du sauveteur secouriste du travail.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                La formation SST est-elle obligatoire ?
              </summary>
              <p className="mt-3 text-slate-700">
                Selon l’activité et les risques de l’entreprise, la présence de
                salariés formés au secourisme peut être nécessaire pour répondre
                aux obligations de prévention et de sécurité au travail.
              </p>
            </details>
          </div>
        </section>
<section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
  <h2 className="text-2xl font-bold">
    Découvrir nos autres formations professionnelles
  </h2>

  <p className="mt-4 max-w-3xl leading-8 text-slate-700">
    PREVENSIA FORMATION propose également des formations en habilitation électrique,
    sécurité incendie, exploitation du système de sécurité incendie (SSI) et
    exploitation sprinkler pour les entreprises et collectivités.
  </p>

  <div className="mt-6 flex flex-wrap gap-4">
    <a href="/formation-habilitation-electrique" className="rounded-xl border px-4 py-2 hover:border-red-600 hover:text-red-600">
      Habilitation électrique
    </a>

    <a href="/formation-ssi" className="rounded-xl border px-4 py-2 hover:border-red-600 hover:text-red-600">
      Formation SSI
    </a>

    <a href="/formation-securite-incendie" className="rounded-xl border px-4 py-2 hover:border-red-600 hover:text-red-600">
      Sécurité incendie
    </a>

    <a href="/formation-sprinkler" className="rounded-xl border px-4 py-2 hover:border-red-600 hover:text-red-600">
      Exploitation sprinkler
    </a>
  </div>
</section>
        <section className="mt-10 rounded-[2rem] border border-red-200 bg-red-50 p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">Besoin d’un devis rapide ?</h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Indiquez votre besoin, le nombre de participants, votre localisation
            et le délai souhaité. PREVENSIA FORMATION vous adresse une proposition
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