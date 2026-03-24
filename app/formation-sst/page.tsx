export const metadata = {
  title: "Formation SST Sauveteur Secouriste du Travail | PREVENSIA FORMATION",
  description:
    "Formation SST en présentiel ou sur site avec PREVENSIA FORMATION. Apprenez les gestes de premiers secours et la prévention des risques professionnels.",
};

export default function FormationSST() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">
        Formation Sauveteur Secouriste du Travail (SST)
      </h1>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Pourquoi suivre une formation SST ?
      </h2>

      <p className="mb-4">
        La formation Sauveteur Secouriste du Travail permet aux salariés de
        réagir efficacement face à une situation d’accident ou de malaise sur
        le lieu de travail. Elle contribue également à la prévention des
        risques professionnels.
      </p>

      <p className="mb-4">
        Cette formation est essentielle pour améliorer la sécurité au sein des
        entreprises et répondre aux obligations réglementaires en matière de
        santé et sécurité.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Objectifs de la formation
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Intervenir efficacement face à un accident du travail</li>
        <li>Mettre en œuvre les gestes de premiers secours</li>
        <li>Participer à la prévention des risques professionnels</li>
        <li>Adopter les bons réflexes en situation d’urgence</li>
      </ul>

      <a
        href="/demande-devis"
        className="inline-block mt-8 bg-red-700 text-white px-6 py-3 rounded-xl hover:bg-red-800 transition"
      >
        Demander un devis
      </a>      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">
          Questions fréquentes sur la formation SST
        </h2>

        <details className="mb-4 border rounded-xl p-4">
          <summary className="font-semibold cursor-pointer">
            À qui s’adresse la formation SST ?
          </summary>
          <p className="mt-3 text-slate-700">
            La formation SST s’adresse aux salariés, agents, techniciens et personnels
            d’entreprise souhaitant apprendre les gestes de premiers secours et
            contribuer à la prévention des risques professionnels.
          </p>
        </details>

        <details className="mb-4 border rounded-xl p-4">
          <summary className="font-semibold cursor-pointer">
            Quelle différence entre SST initiale et MAC SST ?
          </summary>
          <p className="mt-3 text-slate-700">
            La formation SST initiale permet d’acquérir les bases, tandis que le MAC SST
            correspond au maintien et à l’actualisation des compétences du sauveteur
            secouriste du travail.
          </p>
        </details>

        <details className="mb-4 border rounded-xl p-4">
          <summary className="font-semibold cursor-pointer">
            La formation SST est-elle obligatoire ?
          </summary>
          <p className="mt-3 text-slate-700">
            Selon l’activité et les risques de l’entreprise, la présence de salariés
            formés au secourisme peut être nécessaire pour répondre aux obligations de
            prévention et de sécurité au travail.
          </p>
        </details>
      </div>
    </div>
  );
}