import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata = {
  title: "Habilitation Électrique pour les Sous-Traitants — Obligations & Symboles | PREVENSIA",
  description:
    "Quelles habilitations électriques pour les sous-traitants intervenant sur site ? Obligations du donneur d'ordre, responsabilités, symboles requis. Guide complet NF C 18-510.",
  alternates: {
    canonical: "https://prevensia-formation.fr/blog/habilitation-electrique-sous-traitants",
  },
  keywords: [
    "habilitation électrique sous-traitant",
    "habilitation électrique prestataire",
    "donneur d'ordre habilitation électrique",
    "plan de prévention habilitation",
    "sous-traitant intervention électrique",
  ],
  openGraph: {
    title: "Habilitation électrique pour les sous-traitants : ce que dit la réglementation",
    description:
      "Donneur d'ordre, prestataire extérieur, plan de prévention : qui est responsable de l'habilitation électrique des sous-traitants ?",
    url: "https://prevensia-formation.fr/blog/habilitation-electrique-sous-traitants",
  },
};

const faqItems = [
  {
    question: "Un donneur d'ordre peut-il exiger un niveau d'habilitation précis à ses sous-traitants ?",
    answer:
      "Oui. Dans le cadre du plan de prévention (R.4512-6 à R.4512-16 du Code du travail), le donneur d'ordre et l'entreprise extérieure définissent ensemble les mesures de prévention, notamment les niveaux d'habilitation requis pour chaque type d'intervention. Le donneur d'ordre peut imposer un symbole minimum.",
  },
  {
    question: "Qui délivre l'habilitation au sous-traitant : le donneur d'ordre ou l'employeur du sous-traitant ?",
    answer:
      "C'est toujours l'employeur du salarié qui délivre le titre d'habilitation. Le donneur d'ordre ne peut pas habiliter les salariés d'une autre entreprise. En revanche, il peut refuser l'accès au site si le niveau d'habilitation présenté ne correspond pas aux exigences définies dans le plan de prévention.",
  },
  {
    question: "Le plan de prévention mentionne-t-il obligatoirement les habilitations électriques ?",
    answer:
      "Oui, pour les travaux dangereux et les interventions sur installations électriques. Le plan de prévention doit préciser les risques électriques identifiés, les mesures de prévention associées et les niveaux d'habilitation requis pour les opérations concernées.",
  },
  {
    question: "Un sous-traitant peut-il utiliser l'habilitation délivrée par un précédent employeur ?",
    answer:
      "Non. L'habilitation est délivrée par l'employeur pour des installations précises. Lors d'un changement d'employeur, le titre ne se transfère pas : le nouvel employeur doit évaluer les compétences du salarié et délivrer un nouveau titre adapté aux nouvelles missions et installations.",
  },
];

export default function ArticleHabilitationSousTraitantsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Habilitation électrique sous-traitants", url: "/blog/habilitation-electrique-sous-traitants" },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Sous-traitants</span>
          </nav>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest">
            <span className="rounded-full bg-red-600 px-3 py-1 text-white">Réglementation</span>
            <span className="text-slate-400">5 min de lecture · 15 mai 2025</span>
          </div>
          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Habilitation électrique pour les sous-traitants
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Donneur d&apos;ordre, entreprise extérieure, plan de prévention : qui est responsable,
            qui contrôle, et quels symboles sont requis ?
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">

        <div className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-6">
          <p className="font-bold text-red-800 text-lg">À retenir</p>
          <ul className="mt-3 space-y-1 text-sm text-red-700 leading-7">
            <li>✓ L&apos;habilitation est délivrée par <strong>l&apos;employeur du sous-traitant</strong>, jamais par le donneur d&apos;ordre</li>
            <li>✓ Le donneur d&apos;ordre peut <strong>exiger un niveau minimum</strong> dans le plan de prévention</li>
            <li>✓ Le plan de prévention doit <strong>identifier les risques électriques</strong> et les symboles requis</li>
            <li>✓ Le donneur d&apos;ordre peut <strong>refuser l&apos;accès</strong> si le niveau présenté est insuffisant</li>
          </ul>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Le cadre réglementaire applicable</h2>
          <p className="mt-4 text-slate-600 leading-8">
            Lorsqu&apos;une entreprise extérieure intervient dans les locaux d&apos;une entreprise utilisatrice
            pour réaliser des travaux ou des prestations, deux textes s&apos;appliquent conjointement :
          </p>
          <ul className="mt-4 space-y-2 text-slate-600 text-sm leading-7 list-disc pl-6">
            <li>
              <strong>Le Code du travail (articles R.4512-1 à R.4512-16)</strong> qui impose
              l&apos;établissement d&apos;un plan de prévention pour toute opération dangereuse ou
              dépassant 400 heures par an.
            </li>
            <li>
              <strong>La NF C 18-510</strong> qui définit les niveaux d&apos;habilitation requis
              pour chaque type d&apos;opération sur installations électriques.
            </li>
          </ul>
          <p className="mt-4 text-slate-600 leading-8">
            Le plan de prévention est un document co-signé entre le donneur d&apos;ordre
            (entreprise utilisatrice) et le sous-traitant (entreprise extérieure). Il précise
            les risques identifiés et les mesures de prévention, dont les niveaux
            d&apos;habilitation électrique requis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Rôles respectifs : donneur d&apos;ordre vs sous-traitant</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-bold text-slate-900 text-lg">🏭 Donneur d&apos;ordre</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 leading-7">
                <li>✓ Informe des risques électriques présents sur son site</li>
                <li>✓ Définit les symboles d&apos;habilitation requis dans le plan de prévention</li>
                <li>✓ Vérifie que les titres présentés correspondent aux exigences</li>
                <li>✓ Peut interdire l&apos;accès si le niveau est insuffisant</li>
                <li>✗ Ne peut pas délivrer l&apos;habilitation à un salarié d&apos;une autre entreprise</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-bold text-slate-900 text-lg">🔧 Sous-traitant (entreprise extérieure)</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 leading-7">
                <li>✓ S&apos;assure que ses salariés ont les habilitations requises</li>
                <li>✓ Délivre les titres d&apos;habilitation via l&apos;employeur</li>
                <li>✓ Adapte les titres aux installations du donneur d&apos;ordre</li>
                <li>✓ Présente les titres lors de l&apos;inspection commune préalable</li>
                <li>✗ Ne peut pas déléguer la délivrance au donneur d&apos;ordre</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Quels symboles pour quelles interventions ?</h2>
          <p className="mt-4 text-slate-600">Les symboles les plus courants pour les sous-traitants intervenant sur site électrique :</p>
          <div className="mt-6 space-y-3">
            {[
              { code: "H0B0", cas: "Sous-traitant travaillant à proximité d'armoires ou de câbles (nettoyage, peinture, maçonnerie, livraison)", note: "Minimum requis si évolution en zone à risque électrique" },
              { code: "B1 / B2", cas: "Prestataire de maintenance électrique réalisant des travaux hors tension", note: "B2 obligatoire si le prestataire dirige ses propres électriciens" },
              { code: "BR", cas: "Technicien SAV ou prestataire de dépannage sur installations en exploitation", note: "Intervention seule, sans binôme nécessaire" },
              { code: "BC", cas: "Prestataire chargé de la consignation avant travaux d'un autre corps d'état", note: "Symbole spécifique — souvent demandé par le donneur d'ordre" },
            ].map((item) => (
              <div key={item.code} className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="flex h-10 w-16 shrink-0 items-center justify-center rounded-xl bg-red-600 text-sm font-bold text-white">
                  {item.code}
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{item.cas}</p>
                  <p className="text-sm text-red-600 mt-0.5">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Inspection commune préalable</h2>
          <p className="mt-4 text-slate-600 leading-8">
            Avant tout commencement de travaux, le Code du travail impose une <strong>inspection
            commune préalable</strong> entre le donneur d&apos;ordre et le sous-traitant. C&apos;est lors
            de cet échange que :
          </p>
          <ul className="mt-4 space-y-2 text-slate-600 text-sm leading-7 list-disc pl-6">
            <li>Les risques électriques du site sont identifiés et communiqués</li>
            <li>Les zones d&apos;intervention et les équipements concernés sont définis</li>
            <li>Les niveaux d&apos;habilitation requis sont précisés</li>
            <li>Les titres d&apos;habilitation des intervenants sont vérifiés</li>
          </ul>
          <p className="mt-4 text-slate-600 leading-8">
            Si les titres présentés ne correspondent pas aux exigences, le donneur d&apos;ordre
            peut suspendre l&apos;intervention et exiger une mise en conformité avant tout démarrage.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900">Questions fréquentes</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900 list-none">
                  {item.question}
                  <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Articles liés */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900">Articles liés</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/blog/comment-choisir-son-habilitation-electrique" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-red-200 hover:text-red-700 transition-colors">
              Comment choisir son habilitation ? →
            </Link>
            <Link href="/blog/duree-validite-habilitation-electrique" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-red-200 hover:text-red-700 transition-colors">
              Durée de validité de l&apos;habilitation →
            </Link>
          </div>
        </section>
      </article>

      {/* CTA */}
      <section className="bg-slate-950 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">Former vos sous-traitants ou vos équipes ?</h2>
          <p className="mt-3 text-slate-300">Devis intra sous 48h · Intervention sur site · Qualiopi</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/demande-devis" className="rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700 transition-colors">
              Demander un devis
            </Link>
            <Link href="/formation-habilitation-electrique" className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20 transition-colors">
              Voir les formations
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            <a href="tel:+33189629492" className="text-white underline">01 89 62 94 92</a>
            {" · "}
            <a href="mailto:contact@prevensia-formation.fr" className="text-white underline">contact@prevensia-formation.fr</a>
          </p>
        </div>
      </section>
    </main>
  );
}
