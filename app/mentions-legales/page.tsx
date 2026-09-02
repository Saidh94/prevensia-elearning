import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Mentions légales | PREVENSIA FORMATION",
  description: "Mentions légales de PREVENSIA FORMATION, marque du Groupe PREVENSIA SAS — organisme de formation.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Mentions légales</h1>
      <p className="mt-2 text-sm text-slate-500">Dernière mise à jour : juillet 2026</p>

      <section className="mt-10 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">1. Éditeur du site</h2>
        <p>
          Le site <strong>prevensia-formation.fr</strong> est édité par la société <strong>PREVENSIA Groupe SAS</strong>,
          dont <strong>PREVENSIA FORMATION</strong> est la marque commerciale.
        </p>
        <p><strong>Raison sociale :</strong> PREVENSIA Groupe SAS</p>
        <p><strong>Forme juridique :</strong> SAS — Société par actions simplifiée</p>
        <p><strong>Capital social :</strong> {COMPANY.capital}</p>
        <p><strong>SIREN :</strong> {COMPANY.siren}</p>
        <p><strong>SIRET (siège) :</strong> {COMPANY.siret}</p>
        <p><strong>Numéro de TVA intracommunautaire :</strong> FR44107290579</p>
        <p><strong>RCS :</strong> {COMPANY.siren} R.C.S. Paris</p>
        <p><strong>Code NAF / APE :</strong> 85.59A — Formation continue d'adultes</p>
        <p><strong>Convention collective :</strong> Organismes de formation — IDCC 1516</p>
        <p><strong>Adresse du siège social :</strong> {COMPANY.addressFull}</p>
        {COMPANY.nda ? (
          <p><strong>Numéro de déclaration d'activité de formation :</strong> {COMPANY.nda}</p>
        ) : (
          <p><strong>Numéro de déclaration d'activité de formation :</strong> <em className="text-slate-400">En cours d&apos;obtention</em></p>
        )}
        {COMPANY.qualiopiObtenu ? (
          <p><strong>Certification Qualiopi :</strong> Organisme certifié Qualiopi au titre de la catégorie Actions de formation — Cet enregistrement ne vaut pas agrément de l&apos;État.</p>
        ) : (
          <p><strong>Démarche Qualiopi :</strong> Certification visée — Actions de formation (audit prévu prochainement).</p>
        )}
        <p><strong>Téléphone :</strong> {COMPANY.phone}</p>
        <p><strong>Email :</strong> {COMPANY.email}</p>
        <p><strong>Dirigeants :</strong> Hachiba Said, Hachiba Karim</p>
      </section>

      <section className="mt-10 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">2. Hébergement</h2>
        <p><strong>Hébergeur du site :</strong> Vercel Inc.</p>
        <p><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
        <p>
          <strong>Site :</strong>{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">
            vercel.com
          </a>
        </p>
      </section>

      <section className="mt-10 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">3. Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu de ce site (textes, images, logos, vidéos, documents pédagogiques) est la propriété exclusive de
          PREVENSIA Groupe SAS / PREVENSIA FORMATION ou de ses partenaires, et est protégé par les lois françaises et internationales relatives
          à la propriété intellectuelle. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans
          autorisation préalable écrite est interdite.
        </p>
      </section>

      <section className="mt-10 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">4. Données personnelles</h2>
        <p>
          Dans le cadre de l'utilisation de ce site et de nos formations, PREVENSIA Groupe SAS peut être amenée à collecter des données
          personnelles. Les traitements sont réalisés conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679).
          Pour toute demande relative à vos données, consultez notre{" "}
          <Link href="/politique-confidentialite" className="text-red-700 hover:underline">
            politique de confidentialité
          </Link>.
        </p>
      </section>

      <section className="mt-10 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">5. Cookies</h2>
        <p>
          Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire
          ou de tracking tiers n'est utilisé sans votre consentement explicite.
        </p>
      </section>

      <section className="mt-10 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">6. Droit applicable et juridiction</h2>
        <p>
          Le présent site est soumis au droit français. En cas de litige, le Tribunal de Commerce de Paris sera compétent, conformément à l'immatriculation au R.C.S. Paris.
        </p>
      </section>

      <div className="mt-12">
        <Link href="/" className="text-sm text-red-700 hover:underline">
          ← Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
