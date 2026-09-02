import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Conditions générales de vente (CGV) | PREVENSIA FORMATION",
  description: "Conditions générales de vente de PREVENSIA FORMATION — modalités d'inscription, paiement, annulation, financement.",
  alternates: { canonical: "https://prevensia-formation.fr/cgv" },
};

export default function CgvPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Conditions générales de vente</h1>
      <p className="mt-2 text-sm text-slate-500">Dernière mise à jour : septembre 2026</p>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">1. Identification du prestataire</h2>
        <p>
          <strong>PREVENSIA FORMATION</strong> est une marque commerciale de{" "}
          <strong>PREVENSIA Groupe SAS</strong>, SIREN {COMPANY.siren}, dont le siège social est situé
          au {COMPANY.addressFull}.
        </p>
        <p>Contact : {COMPANY.email} · {COMPANY.phone}</p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">2. Objet</h2>
        <p>
          Les présentes CGV s&apos;appliquent à toute commande de formation professionnelle passée auprès
          de PREVENSIA FORMATION, qu&apos;elle soit réalisée en présentiel, en e-learning ou en modalité
          hybride.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">3. Inscription et confirmation</h2>
        <p>
          Toute inscription est définitive à réception du devis signé ou du bon de commande de
          l&apos;employeur, ou après validation du paiement en ligne. Un email de confirmation est
          adressé au stagiaire ou à l&apos;employeur dans les 48h ouvrées.
        </p>
        <p>
          Pour les formations e-learning, l&apos;accès à la plateforme est ouvert dans les 24h suivant
          la confirmation de paiement.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">4. Tarifs et modalités de paiement</h2>
        <p>
          Les tarifs sont indiqués en euros HT (hors taxes). La TVA applicable est précisée sur le
          devis ou la facture.
        </p>
        <p>
          Modes de paiement acceptés : carte bancaire (en ligne), virement bancaire. Pour les
          formations inter-entreprises, le paiement est dû à réception de la facture. Pour les
          formations intra-entreprise, des conditions particulières sont précisées dans le devis.
        </p>
        <p>
          En cas de prise en charge par un OPCO ou un financeur tiers, l&apos;inscription n&apos;est
          confirmée qu&apos;après accord écrit du financeur.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">5. Annulation et report</h2>
        <p>
          <strong>Annulation par le stagiaire ou l&apos;employeur :</strong>
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Plus de 10 jours ouvrés avant la formation : aucun frais.</li>
          <li>Entre 5 et 10 jours ouvrés : 30 % du montant HT.</li>
          <li>Moins de 5 jours ouvrés ou absence le jour J : 100 % du montant HT.</li>
        </ul>
        <p>
          <strong>Annulation par PREVENSIA FORMATION :</strong> en cas d&apos;annulation pour cause de
          force majeure ou nombre insuffisant de participants, le stagiaire est informé au plus tôt
          et proposé un report sans frais. Aucun dédommagement supplémentaire ne sera dû.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">6. Droit de rétractation</h2>
        <p>
          Conformément à l&apos;article L.221-18 du Code de la consommation, le stagiaire particulier
          dispose d&apos;un délai de 14 jours à compter de la conclusion du contrat pour exercer son
          droit de rétractation, sauf si la formation a déjà débuté avec son accord exprès.
        </p>
        <p>
          Ce droit ne s&apos;applique pas aux formations financées par un employeur dans le cadre d&apos;un
          plan de développement des compétences.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">7. Propriété intellectuelle</h2>
        <p>
          Les supports de formation (présentations, exercices, documents e-learning) sont la
          propriété exclusive de PREVENSIA FORMATION. Toute reproduction, distribution ou
          utilisation commerciale sans autorisation écrite est interdite.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">8. Réclamations et litiges</h2>
        <p>
          Toute réclamation doit être adressée conformément à la{" "}
          <Link href="/reclamation" className="text-red-700 underline underline-offset-2">
            procédure de réclamation
          </Link>{" "}
          de PREVENSIA FORMATION.
        </p>
        <p>
          En cas de litige, les parties s&apos;engagent à rechercher une solution amiable avant toute
          action judiciaire. À défaut, le tribunal compétent est celui du siège social de PREVENSIA
          FORMATION (Paris).
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">9. Droit applicable</h2>
        <p>Les présentes CGV sont soumises au droit français.</p>
      </section>

      <div className="mt-12 border-t border-slate-200 pt-8 flex gap-6 text-sm">
        <Link href="/qualite" className="text-red-700 underline underline-offset-2">
          ← Qualité &amp; Qualiopi
        </Link>
        <Link href="/" className="text-red-700 underline underline-offset-2">
          Accueil
        </Link>
      </div>
    </main>
  );
}
