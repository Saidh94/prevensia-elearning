export const metadata = {
  title: "Formation SSI – Exploitation et fonctionnement du système de sécurité incendie",
  description:
    "Formation SSI PREVENSIA FORMATION : comprendre le fonctionnement du système de sécurité incendie, l’exploitation quotidienne et les consignes en cas d’alarme incendie."
};

export default function FormationSSI() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-8">
        Formation exploitation du Système de Sécurité Incendie (SSI)
      </h1>

      <p className="mb-4">
        La formation SSI permet aux exploitants et aux salariés d’acquérir les connaissances essentielles pour comprendre le fonctionnement d’un système de sécurité incendie et adopter les bons réflexes en cas d’alarme feu.
      </p>

      <p className="mb-4">
        Elle s’adresse notamment aux responsables de site, aux agents de maintenance, aux équipes sécurité, aux exploitants d’ERP ou d’entrepôts logistiques ainsi qu’aux entreprises souhaitant renforcer la prévention incendie.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Objectifs de la formation SSI
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Comprendre l’architecture d’un système de sécurité incendie</li>
        <li>Identifier les équipements : CMSI, ECS, détecteurs, déclencheurs manuels</li>
        <li>Connaître les procédures en cas de déclenchement d’alarme</li>
        <li>Participer à l’évacuation en sécurité</li>
        <li>Contribuer à la prévention du risque incendie</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Public concerné
      </h2>

      <p>
        Salariés d’entreprise, exploitants ERP, responsables techniques, services généraux, équipes maintenance, personnel logistique ou industriel.
      </p>

      <a
        href="/demande-devis"
        className="inline-block mt-10 bg-red-700 text-white px-6 py-3 rounded-xl hover:bg-red-800 transition"
      >
        Demander un devis pour une formation SSI
      </a>

    </div>
  );
}