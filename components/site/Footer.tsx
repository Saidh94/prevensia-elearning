import Link from "next/link";
import Image from "next/image";

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
              Organisme de formation certifié <span className="font-semibold text-white">Qualiopi</span>.
              Habilitation électrique, ATEX, sécurité incendie, SSIAP1, SST, SSI et sprinkler.
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
              Habilitation électrique
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/formation-habilitation-electrique" className="hover:text-white">
                  Toutes les habilitations
                </Link>
              </li>
              <li>
                <Link href="/formation-h0b0" className="hover:text-white">
                  Formation H0B0 / H0V
                </Link>
              </li>
              <li>
                <Link href="/formation-bs-be-manoeuvre" className="hover:text-white">
                  Formation BS / BE Manœuvre
                </Link>
              </li>
              <li>
                <Link href="/formation-b1-b2-br-bc" className="hover:text-white">
                  Formation B1 / B2 / BR / BC
                </Link>
              </li>
              <li>
                <Link href="/formation-habilitation-electrique-ile-de-france" className="hover:text-white">
                  Formation IDF
                </Link>
              </li>
            </ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-white">
              Autres formations
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/formation-sst" className="hover:text-white">
                  SST — Premiers secours
                </Link>
              </li>
              <li>
                <Link href="/formation-securite-incendie" className="hover:text-white">
                  Sécurité incendie
                </Link>
              </li>
              <li>
                <Link href="/formation-ssiap1" className="hover:text-white">
                  SSIAP1
                </Link>
              </li>
              <li>
                <Link href="/formation-ssi" className="hover:text-white">
                  Exploitation SSI
                </Link>
              </li>
              <li>
                <Link href="/formation-sprinkler" className="hover:text-white">
                  Exploitation sprinkler
                </Link>
              </li>
              <li>
                <Link href="/formation-atex" className="hover:text-white">
                  ATEX — Atmosphères explosives
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
            </ul>
            <p className="mt-6 text-xs leading-5 text-slate-500">
              PREVENSIA FORMATION est une marque du<br />
              <span className="font-medium text-slate-300">PREVENSIA Groupe SAS</span><br />
              33, avenue Philippe Auguste — 75011 Paris
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {year} PREVENSIA FORMATION — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
