import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | PREVENSIA FORMATION",
  description: "Mentions légales de PREVENSIA FORMATION, marque du Groupe PREVENSIA SAS, organisme de formation certifié Qualiopi.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Mentions légales</h1>
      <p className="mt-2 text-sm text-slate-500">Dernière mise à jour : mai 2026</p>

      <section className="mt-10 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">1. Éditeur du site</h2>
        <p>
          Le site <strong>prevensia-formation.fr</strong> est édité par la société <strong>PREVENSIA Groupe SAS</strong>,
          dont <strong>PREVENSIA FORMATION</strong> est la marque commerciale.
        </p>
        <p><strong>Raison sociale :</strong> PREVENSIA Groupe SAS</p>
        <p><strong>Forme juridique :</strong> SAS — Société par actions simplifiée</p>
        <p><strong>SIRET :</strong> En cours d'immatriculation</p>
        <p><strong>Code NAF / APE :</strong> 85.59A — Formation continue d'adultes</p>
        <p><strong>Adresse du siège social :</strong> 38, rue des Mathurins, 75008 Paris</p>
        <p><strong>Numéro de déclaration d'activité de formation :</strong> [À compléter — préfecture de région]</p>
        <p><strong>Certification Qualiopi :</strong> [À compléter — organisme certificateur]</p>
        <p><strong>Téléphone :</strong> 01 89 62 94 92</p>
        <p><strong>Email :</strong> contact@prevensia-formation.fr</p>
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
          Le présent site est soumis au droit français. En cas de litige, les tribunaux du ressort du greffe de Bobigny seront compétents.
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
