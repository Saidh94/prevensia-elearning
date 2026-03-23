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
      </a>
    </div>
  );
}