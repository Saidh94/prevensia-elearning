export const metadata = {
  title: "Formation sprinkler et référentiels techniques | PREVENSIA FORMATION",
  description:
    "Formation sprinkler en entreprise : exploitation des installations, principes de fonctionnement et référentiels EN 12845, APSAD R1, NFPA 13 et FM Global.",
};

export default function FormationSprinkler() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">
        Formation sprinkler et référentiels techniques
      </h1>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Pourquoi se former à l’exploitation des installations sprinkler ?
      </h2>

      <p className="mb-4">
        La formation sprinkler permet de comprendre le fonctionnement général des
        installations, les exigences d’exploitation et les principes essentiels de
        maintenance et de surveillance.
      </p>

      <p className="mb-4">
        Elle s’adresse aux exploitants, responsables techniques, responsables
        sécurité, gestionnaires de site et professionnels amenés à suivre ou
        superviser des installations sprinkler dans un cadre industriel, logistique
        ou tertiaire.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Référentiels abordés
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>EN 12845</li>
        <li>APSAD R1</li>
        <li>NFPA 13</li>
        <li>FM Global</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Objectifs de la formation
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Comprendre le rôle d’une installation sprinkler</li>
        <li>Identifier les composants principaux du système</li>
        <li>Connaître les exigences d’exploitation et de surveillance</li>
        <li>Comprendre les grands principes des référentiels techniques</li>
        <li>Renforcer la prévention incendie sur site</li>
      </ul>

      <a
        href="/demande-devis"
        className="inline-block mt-8 bg-red-700 text-white px-6 py-3 rounded-xl hover:bg-red-800 transition"
      >
        Demander un devis
      </a>      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">
          Questions fréquentes sur la formation sprinkler
        </h2>

        <details className="mb-4 border rounded-xl p-4 bg-white shadow-sm">
          <summary className="cursor-pointer font-semibold">
            À qui s’adresse la formation sprinkler ?
          </summary>
          <p className="mt-2 text-slate-700">
            Cette formation s’adresse aux exploitants, responsables techniques,
            responsables sécurité, services maintenance et gestionnaires de site
            amenés à suivre ou superviser des installations sprinkler.
          </p>
        </details>

        <details className="mb-4 border rounded-xl p-4 bg-white shadow-sm">
          <summary className="cursor-pointer font-semibold">
            Quels référentiels peuvent être abordés ?
          </summary>
          <p className="mt-2 text-slate-700">
            La formation peut intégrer les grands principes des référentiels
            EN 12845, APSAD R1, NFPA 13 et FM Global selon les besoins du site
            et du public concerné.
          </p>
        </details>

        <details className="mb-4 border rounded-xl p-4 bg-white shadow-sm">
          <summary className="cursor-pointer font-semibold">
            La formation est-elle adaptée aux sites logistiques et industriels ?
          </summary>
          <p className="mt-2 text-slate-700">
            Oui, elle est particulièrement pertinente pour les sites logistiques,
            industriels, entrepôts et bâtiments techniques équipés d’installations
            sprinkler automatiques.
          </p>
        </details>

        <details className="mb-4 border rounded-xl p-4 bg-white shadow-sm">
          <summary className="cursor-pointer font-semibold">
            Peut-on organiser la formation directement sur site ?
          </summary>
          <p className="mt-2 text-slate-700">
            Oui, PREVENSIA FORMATION peut organiser des sessions directement dans
            l’entreprise afin d’adapter la formation aux équipements réellement
            présents sur le site.
          </p>
        </details>
      </div>
    </div>
  );
}