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
      </a>      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">
          Questions fréquentes sur la formation SSI
        </h2>

        <details className="mb-4 border rounded-xl p-4 bg-white shadow-sm">
          <summary className="cursor-pointer font-semibold">
            À qui s’adresse la formation SSI ?
          </summary>
          <p className="mt-2 text-slate-700">
            Cette formation s’adresse aux exploitants, responsables techniques,
            équipes maintenance, services généraux et personnels amenés à exploiter
            ou surveiller un système de sécurité incendie au quotidien.
          </p>
        </details>

        <details className="mb-4 border rounded-xl p-4 bg-white shadow-sm">
          <summary className="cursor-pointer font-semibold">
            Que permet de comprendre la formation SSI ?
          </summary>
          <p className="mt-2 text-slate-700">
            Elle permet de comprendre l’architecture générale d’un SSI, le rôle
            des équipements comme l’ECS, le CMSI, les détecteurs automatiques,
            les déclencheurs manuels et les principes de mise en sécurité.
          </p>
        </details>

        <details className="mb-4 border rounded-xl p-4 bg-white shadow-sm">
          <summary className="cursor-pointer font-semibold">
            La formation SSI est-elle utile pour les ERP et les sites logistiques ?
          </summary>
          <p className="mt-2 text-slate-700">
            Oui, elle est particulièrement pertinente pour les ERP, bâtiments
            tertiaires, sites industriels, entrepôts et établissements disposant
            d’un système de sécurité incendie à exploiter ou à surveiller.
          </p>
        </details>

        <details className="mb-4 border rounded-xl p-4 bg-white shadow-sm">
          <summary className="cursor-pointer font-semibold">
            Peut-on adapter la formation au site de l’entreprise ?
          </summary>
          <p className="mt-2 text-slate-700">
            Oui, PREVENSIA FORMATION peut adapter la session au système installé,
            aux procédures du site et au niveau de connaissance des participants
            afin de proposer une formation concrète et opérationnelle.
          </p>
        </details>
      </div>

    </div>
  );
}