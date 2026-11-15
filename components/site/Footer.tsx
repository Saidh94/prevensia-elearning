import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Colonne 1 — Identité */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-prevensia-formation.svg"
                alt="Prevensia Formation"
                width={160}
                height={40}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-6">
              Organisme de formation — H0B0 e-learning, ATEX, Exploitation SSI, Exploitation Sprinkler, Coordination SSI.{COMPANY.qualiopiObtenu && <>{" "}<span className="font-semibold text-white">Certifié Qualiopi.</span></>}
            </p>
            <p className="mt-3 text-sm">
              <a href="tel:+33189629492" className="hover:text-white">
                01 89 62 94 92
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a href="mailto:contact@prevensia-formation.fr" className="hover:text-white">
                contact@prevensia-formation.fr
              </a>
            </p>
          </div>

          {/* Colonne 2 — Formations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Nos formations
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/formation-h0b0" className="hover:text-white">
                  Habilitation H0B0 / H0V
                </Link>
              </li>
              <li>
                <Link href="/formation-atex" className="hover:text-white">
                  ATEX NIV 0 — Atmosphères explosives
                </Link>
              </li>
              <li>
                <Link href="/formation-ssi" className="hover:text-white">
                  Exploitation SSI
                </Link>
              </li>
              <li>
                <Link href="/formation-sprinkler" className="hover:text-white">
                  Exploitation Sprinkler
                </Link>
              </li>
              <li>
                <Link href="/formation-coordinateur-ssi" className="hover:text-white">
                  Coordination SSI
                </Link>
              </li>
              <li>
                <Link href="/planning" className="hover:text-white">
                  Planning des sessions
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 — Accès rapide */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Accès rapide
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/elearning" className="hover:text-white">
                  Espace e-learning
                </Link>
              </li>
              <li>
                <Link href="/planning" className="hover:text-white">
                  Planning des sessions
                </Link>
              </li>
              <li>
                <Link href="/demande-devis" className="hover:text-white">
                  Demande de devis
                </Link>
              </li>
              <li>
                <Link href="/aide" className="hover:text-white">
                  Aide & Support
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog & Ressources
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white">
                  Espace client
                </Link>
              </li>
              <li>
                <a
                  href="/formateur/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Espace formateur ↗
                </a>
              </li>
              <li>
                <a
                  href="/employeur/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Espace employeur ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 — Légal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Informations légales
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/qui-sommes-nous" className="hover:text-white">
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-white">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="hover:text-white">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/qualite" className="hover:text-white">
                  Qualité &amp; Qualiopi
                </Link>
              </li>
              <li>
                <Link href="/handicap-accessibilite" className="hover:text-white">
                  Accessibilité handicap
                </Link>
              </li>
              <li>
                <Link href="/reclamation" className="hover:text-white">
                  Réclamation
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="hover:text-white">
                  CGV
                </Link>
              </li>
              <li>
                <Link href="/cgu" className="hover:text-white">
                  CGU
                </Link>
              </li>
              <li>
                <Link href="/reglement-interieur" className="hover:text-white">
                  Règlement intérieur
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-5 text-slate-500">
              PREVENSIA FORMATION est une marque du<br />
              <span className="font-medium text-slate-300">PREVENSIA Groupe SAS</span><br />
              {COMPANY.addressFull}
            </p>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              SIRET : {COMPANY.siret}
            </p>
            {COMPANY.nda && (
              <p className="mt-1 text-xs leading-5 text-slate-500">
                N° déclaration d&apos;activité : {COMPANY.nda}
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {year} PREVENSIA FORMATION — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
