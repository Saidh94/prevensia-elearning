export const metadata = {
  title: "Formation sécurité incendie entreprise | PREVENSIA FORMATION",
  description:
    "Formation sécurité incendie en entreprise : manipulation extincteurs, évacuation, EPI, SSI. Intervention partout en France avec PREVENSIA FORMATION.",
};

export default function FormationIncendie() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">
        Formation sécurité incendie en entreprise
      </h1>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Pourquoi former vos salariés à la sécurité incendie ?
      </h2>

      <p className="mb-4">
        La formation sécurité incendie permet aux salariés de réagir
        efficacement face à un départ de feu, de maîtriser l’utilisation des
        extincteurs et d’assurer une évacuation rapide et sécurisée.
      </p>

      <p className="mb-4">
        Elle contribue à réduire les risques matériels et humains tout en
        répondant aux obligations réglementaires en matière de prévention des
        incendies en entreprise.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Objectifs de la formation
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Identifier les causes d’incendie</li>
        <li>Manipuler les extincteurs en situation réelle</li>
        <li>Organiser une évacuation efficace</li>
        <li>Comprendre le rôle des équipiers d’intervention</li>
        <li>Maîtriser les consignes de sécurité incendie</li>
      </ul>

      <a
        href="/demande-devis"
        className="inline-block mt-8 bg-red-700 text-white px-6 py-3 rounded-xl hover:bg-red-800 transition"
      >
        Demander un devis
      </a><div className="mt-12">
  <h2 className="text-2xl font-semibold mb-6">
    Questions fréquentes sur la formation sécurité incendie
  </h2>

  <details className="mb-4 border rounded-xl p-4">
    <summary className="font-semibold cursor-pointer">
      À qui s’adresse la formation sécurité incendie ?
    </summary>
    <p className="mt-3 text-slate-700">
      Elle s’adresse aux salariés, exploitants, responsables techniques et équipes
      d’entreprise souhaitant renforcer la prévention incendie et la réaction en
      cas de départ de feu.
    </p>
  </details>

  <details className="mb-4 border rounded-xl p-4">
    <summary className="font-semibold cursor-pointer">
      Quels thèmes peuvent être abordés ?
    </summary>
    <p className="mt-3 text-slate-700">
      Les formations peuvent porter sur la manipulation des extincteurs,
      l’évacuation incendie, le rôle des guide-file / serre-file ou encore
      l’exploitation du SSI selon les besoins.
    </p>
  </details>

  <details className="mb-4 border rounded-xl p-4">
    <summary className="font-semibold cursor-pointer">
      Peut-on organiser la formation directement en entreprise ?
    </summary>
    <p className="mt-3 text-slate-700">
      Oui, PREVENSIA FORMATION peut organiser des sessions en entreprise afin
      d’adapter les exercices, consignes et scénarios au site concerné.
    </p>
  </details>
</div>
    </div>
  );
}