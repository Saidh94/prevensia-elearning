"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import TrainingCatalogTabsClean from "@/components/site/TrainingCatalogTabsClean";
import FloatingContactButtons from "@/components/site/FloatingContactButtons";
import LocationCoverageSection from "@/components/site/LocationCoverageSection";
import { homepageElectricalSummary } from "@/lib/electrical-offers";

type HomeSession = {
  id: string;
  title: string;
  date_start: string;
  format?: string | null;
  places_total: number;
  places_taken: number;
  places_restantes?: number;
};

const formations = [
  {
    title: "Habilitation électrique",
    href: "/formation-habilitation-electrique",
    badge: "NF C 18-510",
    description: homepageElectricalSummary,
    image: "/images/armoire-electrique.jpg",
    imageClass: "object-cover object-[center_48%]",
  },
  {
    title: "Sécurité incendie",
    href: "/formation-securite-incendie",
    badge: "Extincteurs · EPI",
    description:
      "Manipulation extincteurs, guide-file / serre-file et équipier de première intervention.",
    image: "/images/alarme-incendie.jpg",
    imageClass: "object-cover object-[center_42%]",
  },
  {
    title: "Formation SSI",
    href: "/formation-ssi",
    badge: "NF S 61",
    description:
      "Exploitation du SSI, logiques SDI / CMSI / UGA / DAS et conduite à tenir en cas d'alarme.",
    image: "/images/image-ssi.jpg",
    imageClass: "object-cover object-[center_30%]",
  },
  {
    title: "Exploitation sprinkler",
    href: "/formation-sprinkler",
    badge: "APSAD · NFPA · FM",
    description:
      "Formation sur l'exploitation des installations sprinkler et les principaux référentiels techniques.",
    image: "/images/installation-spk.jpg",
    imageClass: "object-cover object-[center_46%]",
  },
  {
    title: "Formation SST",
    href: "/formation-sst",
    badge: "Secourisme",
    description:
      "SST initial et MAC SST pour les entreprises et les apprenants souhaitant se former aux premiers secours.",
    image: "/images/sst.jpg",
    imageClass: "object-cover object-[center_30%]",
  },
];

const testimonials = [
  {
    name: "Nadia Benyahia",
    text: "Formation claire, bien structurée et adaptée à notre environnement de travail.",
  },
  {
    name: "Karim El Mansouri",
    text: "Très bon niveau technique, avec une vraie compréhension des contraintes d’exploitation.",
  },
  {
    name: "Sophie Martin",
    text: "Approche concrète, utile et directement applicable sur site.",
  },
];

const inrsVideoResources = [
  {
    title: "INRS - Les bases de l'habilitation electrique",
    description:
      "Une ressource officielle utile pour comprendre le rôle de l'habilitation, la place de la formation et la responsabilite de l'employeur.",
    href: "https://www.inrs.fr/media.html?refINRS=Anim-132",
    badge: "Vidéo INRS",
  },
  {
    title: "INRS - Comment choisir les habilitations electriques ?",
    description:
      "Webinaire officiel pour recaler les symboles, les rôles et le choix du bon parcours selon les missions réelles.",
    href: "https://www.inrs.fr/media.html?refINRS=Anim-184",
    badge: "Webinaire INRS",
  },
];

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFormationsOpen, setIsMobileFormationsOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [homeSessions, setHomeSessions] = useState<HomeSession[]>([]);
  const [loading, setLoading] = useState(true);

  const desktopMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    const loadSessions = async () => {
      try {
        const res = await fetch("/api/sessions", { cache: "no-store" });

        if (!res.ok) {
          console.error("Erreur API /api/sessions :", res.status);
          if (isMounted) setHomeSessions([]);
          return;
        }

        const text = await res.text();
        let data: unknown;

        try {
          data = JSON.parse(text);
        } catch {
          console.error("Réponse non JSON /api/sessions :", text);
          if (isMounted) setHomeSessions([]);
          return;
        }

        if (!Array.isArray(data)) {
          if (isMounted) setHomeSessions([]);
          return;
        }

        const filtered = (data as HomeSession[])
          .filter((s) => {
            const format = (s.format ?? "").toLowerCase();
            const title = (s.title ?? "").toLowerCase();

            return (
              !format.includes("e-learning") &&
              !format.includes("elearning") &&
              !title.includes("e-learning") &&
              !title.includes("elearning")
            );
          })
          .sort(
            (a, b) =>
              new Date(a.date_start).getTime() -
              new Date(b.date_start).getTime()
          )
          .slice(0, 6);

        if (isMounted) {
          setHomeSessions(filtered);
        }
      } catch (err) {
        console.error("Erreur chargement sessions Home :", err);
        if (isMounted) setHomeSessions([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadSessions();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isDesktopMenuOpen) return;

    const handleOutsideClick = (event: globalThis.MouseEvent) => {
      const target = event.target as Node;
      if (!desktopMenuRef.current?.contains(target)) {
        setIsDesktopMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, [isDesktopMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsMobileFormationsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsMobileFormationsOpen(false);
    setIsDesktopMenuOpen(false);
  };

  const goTo = (path: string) => {
    closeAllMenus();
    router.push(path);
  };

  const handleAccueilClick = (
    event?: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    event?.preventDefault();
    closeAllMenus();

    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    router.push("/");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileFormationsOpen(false);
  };

  const closeDesktopMenu = () => {
    setIsDesktopMenuOpen(false);
  };

  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex shrink-0 items-center gap-4">
            <Image
              src="/images/logo-prevensia.png"
              alt="Logo Prevensia Formation — Prévenir · Former · Protéger"
              width={420}
              height={109}
              className="h-auto w-[220px] sm:w-[300px]"
              priority
            />
          </div>

          <div className="ml-6 hidden lg:flex">
            <button
              type="button"
              onClick={handleAccueilClick}
              className="text-sm font-semibold text-slate-700 transition hover:text-red-700"
            >
              Accueil
            </button>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="relative hidden lg:block" ref={desktopMenuRef}>
              <button
                type="button"
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-red-300 hover:text-red-700"
                aria-expanded={isDesktopMenuOpen}
                onClick={() => setIsDesktopMenuOpen((prev) => !prev)}
              >
                Menu
              </button>

              {isDesktopMenuOpen ? (
                <div className="absolute right-0 top-full z-50 mt-2 w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
                  <div className="flex flex-col gap-3 text-sm font-medium text-slate-700">
                    <Link
                      href="/#catalogue"
                      className="transition hover:text-red-700"
                      onClick={closeDesktopMenu}
                    >
                      Catalogue
                    </Link>

                    <button
                      type="button"
                      className="text-left transition hover:text-red-700"
                      onClick={() => goTo("/planning")}
                    >
                      Planning présentiel
                    </button>

                    <Link
                      href="/elearning"
                      className="transition hover:text-red-700"
                      onClick={closeDesktopMenu}
                    >
                      E-learning / Espace apprenant
                    </Link>

                    <Link
                      href="/employeur/dashboard"
                      className="transition hover:text-red-700"
                      onClick={closeDesktopMenu}
                    >
                      Espace employeur
                    </Link>

                    <Link
                      href="/demande-devis"
                      className="transition hover:text-red-700"
                      onClick={closeDesktopMenu}
                    >
                      Demande de devis
                    </Link>

                    <Link
                      href="/#contact"
                      className="transition hover:text-red-700"
                      onClick={closeDesktopMenu}
                    >
                      Contact
                    </Link>

                    <div className="rounded-xl border border-slate-200 p-3">
                      <p className="font-semibold text-slate-700">Formations</p>
                      <div className="mt-3 flex flex-col gap-2 pl-2 text-sm">
                        <Link
                          href="/formation-habilitation-electrique"
                          className="transition hover:text-red-700"
                          onClick={closeDesktopMenu}
                        >
                          Habilitation électrique
                        </Link>
                        <Link
                          href="/formation-sst"
                          className="transition hover:text-red-700"
                          onClick={closeDesktopMenu}
                        >
                          Formation SST
                        </Link>
                        <Link
                          href="/formation-securite-incendie"
                          className="transition hover:text-red-700"
                          onClick={closeDesktopMenu}
                        >
                          Sécurité incendie
                        </Link>
                        <Link
                          href="/formation-ssi"
                          className="transition hover:text-red-700"
                          onClick={closeDesktopMenu}
                        >
                          Formation SSI
                        </Link>
                        <Link
                          href="/formation-sprinkler"
                          className="transition hover:text-red-700"
                          onClick={closeDesktopMenu}
                        >
                          Exploitation sprinkler
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <button
              type="button"
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-red-300 hover:text-red-700 lg:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              Menu
            </button>

            <Link
              href="/demande-devis"
              className="rounded-2xl bg-red-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-red-800"
            >
              Obtenir un devis
            </Link>
          </div>
        </div>
      </header>

      {isMobileMenuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-slate-950/60 lg:hidden"
            aria-label="Fermer le menu"
            onClick={closeMobileMenu}
          />
          <aside
            id="mobile-navigation"
            className="fixed inset-y-0 right-0 z-50 w-[min(92vw,360px)] border-l border-slate-200 bg-white p-6 shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation mobile"
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Navigation
              </p>
              <button
                type="button"
                className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700"
                onClick={closeMobileMenu}
              >
                Fermer
              </button>
            </div>

            <nav className="flex h-full flex-col gap-2 overflow-y-auto text-sm font-medium text-slate-700">
              <button
                type="button"
                className="rounded-xl px-3 py-2 text-left transition hover:bg-slate-100 hover:text-red-700"
                onClick={handleAccueilClick}
              >
                Accueil
              </button>

              <Link
                href="/#catalogue"
                className="rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-red-700"
                onClick={closeMobileMenu}
              >
                Catalogue
              </Link>

              <button
                type="button"
                className="rounded-xl px-3 py-2 text-left transition hover:bg-slate-100 hover:text-red-700"
                onClick={() => goTo("/planning")}
              >
                Planning présentiel
              </button>

              <Link
                href="/elearning"
                className="rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-red-700"
                onClick={closeMobileMenu}
              >
                E-learning / Espace apprenant
              </Link>

              <Link
                href="/employeur/dashboard"
                className="rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-red-700"
                onClick={closeMobileMenu}
              >
                Espace employeur
              </Link>

              <Link
                href="/demande-devis"
                className="rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-red-700"
                onClick={closeMobileMenu}
              >
                Demande de devis
              </Link>

              <Link
                href="/#contact"
                className="rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-red-700"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>

              <div className="mt-2 rounded-2xl border border-slate-200 p-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left font-semibold"
                  aria-expanded={isMobileFormationsOpen}
                  onClick={() => setIsMobileFormationsOpen((prev) => !prev)}
                >
                  Formations
                  <span className="text-slate-500">
                    {isMobileFormationsOpen ? "−" : "+"}
                  </span>
                </button>

                {isMobileFormationsOpen ? (
                  <div className="mt-2 flex flex-col gap-1 border-t border-slate-200 pt-2">
                    <Link
                      href="/formation-habilitation-electrique"
                      className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-red-700"
                      onClick={closeMobileMenu}
                    >
                      Habilitation électrique
                    </Link>
                    <Link
                      href="/formation-sst"
                      className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-red-700"
                      onClick={closeMobileMenu}
                    >
                      Formation SST
                    </Link>
                    <Link
                      href="/formation-securite-incendie"
                      className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-red-700"
                      onClick={closeMobileMenu}
                    >
                      Sécurité incendie
                    </Link>
                    <Link
                      href="/formation-sprinkler"
                      className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-red-700"
                      onClick={closeMobileMenu}
                    >
                      Formation sprinkler
                    </Link>
                    <Link
                      href="/formation-ssi"
                      className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-red-700"
                      onClick={closeMobileMenu}
                    >
                      Formation SSI
                    </Link>
                  </div>
                ) : null}
              </div>
            </nav>
          </aside>
        </>
      ) : null}

      <main>
       <section className="relative overflow-hidden bg-slate-950 text-white">
  <div className="absolute inset-0">
    <Image
      src="/images/hero-prevensia.jpg"
      alt="Prévensia Formation - prévention des risques en entreprise"
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
  </div>

  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/60 to-slate-900/75" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_38%)]" />

  <div className="relative border-b border-white/10 bg-slate-950/35 backdrop-blur-[2px]">
    <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/qualiopi.jpg"
            alt="Certification Qualiopi"
            width={44}
            height={44}
            className="h-auto w-9 shrink-0"
          />
          <span className="text-xs font-bold uppercase tracking-wide text-white">
            Certifié Qualiopi
          </span>
        </div>

        <span className="hidden h-3 w-px bg-white/20 sm:block" />

        <span className="text-xs font-semibold text-white/70">
          Référentiel NF C 18-510
        </span>

        <span className="hidden h-3 w-px bg-white/20 sm:block" />

        <span className="text-xs font-semibold text-white/70">
          Habilitation électrique · Incendie · SSI · SST
        </span>

        <span className="hidden h-3 w-px bg-white/20 sm:block" />

        <span className="text-xs font-semibold text-white/70">
          Présentiel · E-learning · Intra
        </span>
      </div>
    </div>
  </div>

  <div className="relative mx-auto max-w-7xl px-4 pt-16 text-center sm:px-6 lg:px-8">
    <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-100 backdrop-blur">
      Organisme de formation Qualiopi
    </p>

    <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
      La sécurité, c’est une compétence qui se forme.
      <span className="mt-2 block text-red-400">
        Habilitation électrique, incendie, SSI, sprinkler, SST.
      </span>
    </h1>

    <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200">
      Formations conformes au Code du travail et à la NF&nbsp;C&nbsp;18-510, en
      présentiel, e-learning ou intra-entreprise. Pour les employeurs qui doivent
      délivrer l’habilitation, et les apprenants qui doivent l’obtenir.
    </p>

    {/* Preuve sociale au-dessus du pli */}
    <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 text-center md:grid-cols-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
        <p className="text-2xl font-bold text-white sm:text-3xl">Qualiopi</p>
        <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-300">
          Certifié actions de formation
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
        <p className="text-2xl font-bold text-red-400 sm:text-3xl">NF&nbsp;C&nbsp;18-510</p>
        <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-300">
          Référentiel respecté
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
        <p className="text-2xl font-bold text-white sm:text-3xl">10+</p>
        <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-300">
          Parcours e-learning
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
        <p className="text-2xl font-bold text-white sm:text-3xl">France</p>
        <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-300">
          Inter et intra-entreprise
        </p>
      </div>
    </div>
  </div>

  <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8">
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="flex flex-col rounded-[2rem] border border-red-700/30 bg-gradient-to-br from-red-900/50 to-slate-900/80 p-8 shadow-2xl">
        <span className="inline-flex w-fit rounded-xl bg-red-700/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-300">
          Entreprises
        </span>
        <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          Formation intra, groupe et accompagnement sur mesure
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Plusieurs salariés à former, un besoin réglementaire précis ou
          une organisation sur site ? Nous vous orientons vers une
          solution adaptée à votre activité et à vos contraintes.
        </p>
        <ul className="mt-5 space-y-2 text-sm text-slate-300">
          <li className="flex items-center gap-2">
            <span className="mt-0.5 text-red-400">✓</span>
            Formations sur mesure et intra-entreprise
          </li>
          <li className="flex items-center gap-2">
            <span className="mt-0.5 text-red-400">✓</span>
            Prise en charge OPCO possible
          </li>
          <li className="flex items-center gap-2">
            <span className="mt-0.5 text-red-400">✓</span>
            Attestations et documents de conformité
          </li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/demande-devis"
            className="rounded-2xl bg-red-700 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-red-600"
          >
            Demander un devis
          </Link>
          <button
            type="button"
            onClick={() => goTo("/planning")}
            className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            Voir le planning
          </button>
        </div>
      </div>

      <div className="flex flex-col rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/80 p-8 shadow-2xl">
        <span className="inline-flex w-fit rounded-xl bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-300">
          Particuliers &amp; Apprenants
        </span>
        <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          E-learning et espace apprenant
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Accédez à vos modules, quiz, résultats et attestations dans un
          espace dédié, avec un parcours souple et lisible.
        </p>
        <ul className="mt-5 space-y-2 text-sm text-slate-300">
          <li className="flex items-center gap-2">
            <span className="mt-0.5 text-slate-400">✓</span>
            Parcours 100&nbsp;% en ligne, à votre rythme
          </li>
          <li className="flex items-center gap-2">
            <span className="mt-0.5 text-slate-400">✓</span>
            Quiz, résultats et attestation intégrés
          </li>
          <li className="flex items-center gap-2">
            <span className="mt-0.5 text-slate-400">✓</span>
            Conforme NF&nbsp;C&nbsp;18-510
          </li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/elearning"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:bg-slate-100"
          >
            Accéder à l&apos;espace e-learning
          </Link>
          <a
            href="#catalogue"
            className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            Voir le catalogue
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <Image
                  src="/images/qualiopi.jpg"
                  alt="Certification Qualiopi"
                  width={70}
                  height={70}
                  className="h-auto w-14 shrink-0 sm:w-16"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Organisme certifié Qualiopi
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Pour les actions de formation.
                  </p>
                </div>
              </div>

              <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Présentiel, intra et e-learning
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Des formats adaptés aux particuliers, entreprises et
                    groupes.
                  </p>
                </div>
              </div>

              <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Approche technique et réglementaire
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Formation pensée pour les environnements tertiaires,
                    industriels, logistiques et techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Île-de-France et France entière
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Interventions sur site selon la nature de la prestation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 piliers Prevensia — différenciation et conversion */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Trois engagements concrets
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Pourquoi les employeurs et les apprenants nous choisissent
              </h2>
              <p className="mt-4 text-slate-600">
                Une logique simple : la formation prépare, l’employeur délivre l’habilitation,
                et nous facilitons toute la chaîne de bout en bout.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="flex flex-col rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-700 text-xl font-bold text-white">
                  1
                </div>
                <h3 className="mt-5 text-xl font-bold">Conformité réglementaire</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Formations alignées sur le Code du travail (R.4544-9, R.4544-10), la
                  NF C 18-510, les référentiels INRS, EN 12845, APSAD R1, NF S 61.
                  Vous tenez vos obligations sans approximation.
                </p>
              </div>

              <div className="flex flex-col rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-700 text-xl font-bold text-white">
                  2
                </div>
                <h3 className="mt-5 text-xl font-bold">Souplesse de format</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  E-learning encadré pour H0B0/H0V et BS/BE Manœuvre. Présentiel et
                  classes virtuelle pour les habilitations B1, B2, BR, BC. Intra-entreprise
                  pour les groupes. Vous choisissez ce qui colle à votre organisation.
                </p>
              </div>

              <div className="flex flex-col rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-700 text-xl font-bold text-white">
                  3
                </div>
                <h3 className="mt-5 text-xl font-bold">Traçabilité et attestations</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Plateforme apprenant, suivi des progressions, quiz avec corrigés
                  explicatifs, attestations PDF prêtes à archiver. Pour l’employeur,
                  un accès dédié pour piloter ses inscrits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ rapide — accélère la conversion et capture les longues traînes SEO */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Questions fréquentes
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Les questions qu’on nous pose souvent
              </h2>
            </div>

            <div className="mt-10 grid gap-4">
              <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                  La formation me délivre-t-elle l’habilitation électrique ?
                  <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Non. La formation Prevensia vous prépare et atteste de vos acquis
                  théoriques. Le titre d’habilitation est délivré par votre employeur
                  selon votre poste, vos tâches réelles et votre aptitude médicale,
                  conformément au Code du travail (R.4544-10) et à la NF C 18-510.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                  En combien de temps puis-je commencer ?
                  <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Pour les parcours e-learning H0B0/H0V et BS/BE Manœuvre, l’accès est
                  ouvert immédiatement après inscription et paiement. Pour les
                  formations encadrées (B1, B2, BR, BC, SST, incendie, sprinkler),
                  consultez le planning ou demandez un devis : nous proposons
                  généralement une session sous 2 à 4 semaines.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                  Est-ce finançable par l’OPCO ou Pôle emploi ?
                  <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Prevensia étant certifié Qualiopi, nos formations sont éligibles aux
                  dispositifs de financement par OPCO et France Travail. Nous fournissons
                  les documents justificatifs nécessaires sur demande lors du devis.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                  Quelle est la durée de validité d’une habilitation ?
                  <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  La NF C 18-510 recommande un recyclage tous les 3 ans pour le maintien
                  des compétences. L’employeur reste libre de demander un recyclage plus
                  fréquent si l’environnement de travail le justifie.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                  Pouvez-vous intervenir directement sur notre site ?
                  <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Oui. Toutes nos formations encadrées peuvent être organisées en
                  intra-entreprise sur votre site, partout en France. Le devis intègre
                  les frais de déplacement et l’adaptation du contenu à vos installations
                  réelles.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section
          id="catalogue"
          className="relative overflow-hidden bg-slate-50 py-16"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/armoire-electrique.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-[0.06]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-slate-50/95" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                  Catalogue de formations
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Toutes les formations en un seul endroit
                </h2>
              </div>
              <p className="max-w-2xl text-slate-600">
                Une lecture claire des principales offres proposées par
                PREVENSIA FORMATION.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {formations.map((item) => (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className={`transition duration-500 group-hover:scale-[1.03] ${
                        item.imageClass ?? "object-cover object-center"
                      }`}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/45 to-transparent" />
                  </div>

                  <div className="p-6">
                    <span className="w-fit rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                      {item.badge}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 min-h-[88px] text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-5 inline-flex rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Voir la formation
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

          <TrainingCatalogTabsClean />

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Ressources INRS
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Deux vidéos utiles pour cadrer le risque electrique
              </h2>
              <p className="mt-4 text-slate-600">
                PREVENSIA s'appuie sur ses propres parcours, mais recommande
                aussi des ressources officielles INRS pour consolider les
                reperes reglementaires, le choix des symboles et la logique de
                prévention.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {inrsVideoResources.map((item) => (
                <article
                  key={item.href}
                  className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                    {item.badge}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Voir la ressource officielle
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Formation SSI
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Comprendre et exploiter un système de sécurité incendie
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Formation dédiée à l’exploitation des systèmes de sécurité
                incendie, à la compréhension de leur architecture et à la
                conduite à tenir face aux événements d’alarme, de défaut ou de
                mise en sécurité.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                L’approche est conçue pour les exploitants, les responsables
                techniques, les services maintenance et les référents sécurité
                évoluant dans des contextes ERP, Code du travail, ICPE ou IGH.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-bold text-slate-900">
                    Exploitation réelle du SSI
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Comprendre les chaînes de détection, l’alarme, la mise en
                    sécurité et les réactions attendues face aux défauts.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-bold text-slate-900">
                    Référentiels et contexte réglementaire
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Lecture structurée des logiques NF S 61, ERP, Code du
                    travail, ICPE, IGH et principes APSAD liés à l’exploitation.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/formation-ssi"
                  className="inline-flex rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
                >
                  Découvrir la formation SSI
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="relative mx-auto aspect-[16/10] w-full max-w-[560px] overflow-hidden rounded-[1.5rem] bg-slate-100">
                <Image
                  src="/images/image-ssi.jpg"
                  alt="Système de sécurité incendie"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-[center_30%]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Avis clients
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Ce que disent les personnes formées
              </h2>
              <p className="mt-4 text-slate-600">
                Des formations adaptées aux réalités du terrain, avec une
                approche concrète et opérationnelle.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="text-amber-500">★★★★★</div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    “{item.text}”
                  </p>
                  <p className="mt-5 text-sm font-bold text-slate-900">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LocationCoverageSection />

        <section id="planning" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Sessions présentielles
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Quelques prochaines dates
              </h2>
              <p className="mt-4 text-slate-600">
                Aperçu des prochaines sessions en présentiel. Consultez le
                planning complet pour visualiser toutes les dates disponibles.
              </p>
            </div>

            {loading ? (
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
                Chargement des sessions...
              </div>
            ) : homeSessions.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
                Aucune session disponible pour le moment.
              </div>
            ) : (
              <div className="mt-8 grid gap-4">
                {homeSessions.map((s) => {
                  const places =
                    s.places_restantes ?? s.places_total - s.places_taken;

                  return (
                    <div
                      key={s.id}
                      className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:grid-cols-[180px_1fr_180px] md:items-center"
                    >
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
                          Date
                        </p>
                        <p className="mt-1 text-lg font-bold">
                          {new Date(s.date_start).toLocaleDateString("fr-FR", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })}
                        </p>
                      </div>

                      <div>
                        <p className="text-xl font-semibold">{s.title}</p>
                        <p className="mt-1 text-sm text-slate-600">
                          {s.format || "Présentiel"}
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-700">
                          Places restantes :{" "}
                          <span className="font-bold text-red-700">
                            {places}
                          </span>
                        </p>
                      </div>

                      <div className="flex justify-start md:justify-end">
                        <Link
                          href={`/inscription?sessionId=${s.id}&formation=${encodeURIComponent(
                            s.title
                          )}&date=${encodeURIComponent(
                            s.date_start
                          )}&format=${encodeURIComponent(
                            s.format ?? "Présentiel"
                          )}`}
                          className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                          Réserver
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="mt-8">
              <Link
                href="/planning"
                className="inline-flex rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Voir toutes les sessions
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                À qui s&apos;adresse PREVENSIA FORMATION ?
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Un chemin clair selon votre situation
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex h-full flex-col rounded-[1.75rem] bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                  Entreprises
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  Formation intra et devis groupe
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Plusieurs salariés à former, une organisation intra ou un
                  besoin spécifique de conformité ? La demande de devis est le
                  point d&apos;entrée adapté.
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-700">✓</span>
                    Formations sur mesure et intra-entreprise
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-700">✓</span>
                    Prise en charge OPCO possible
                 
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-700">✓</span>
                    Attestations et documents de conformité
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/demande-devis"
                    className="inline-flex rounded-2xl bg-red-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-800"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>

              <div className="flex h-full flex-col rounded-[1.75rem] bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                  Apprenants
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  E-learning et espace apprenant
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Accédez à vos modules, quiz, résultats et attestations dans
                  un espace dédié, à votre rythme.
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-700">✓</span>
                    Parcours 100&nbsp;% en ligne
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-700">✓</span>
                    Quiz, corrigés et attestation intégrés
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-700">✓</span>
                    Conforme NF&nbsp;C&nbsp;18-510
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/elearning"
                    className="inline-flex rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Accéder à l&apos;espace
                  </Link>
                </div>
              </div>

              <div
                id="contact"
                className="flex h-full flex-col rounded-[1.75rem] bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                  Contact
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  Échangeons sur votre besoin
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  PREVENSIA FORMATION accompagne particuliers et professionnels
                  partout en France selon la prestation.
                </p>
                <div className="mt-4 space-y-1.5 text-sm text-slate-800">
                  <p className="font-medium">contact@prevensia-formation.fr</p>
                  <p className="font-medium">01 89 62 94 92</p>
                </div>
                <div className="mt-auto pt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+33189629492"
                    className="inline-flex rounded-2xl bg-red-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-800"
                  >
                    Appeler
                  </a>
                  <a
                    href="https://wa.me/33780992417?text=Bonjour%20je%20souhaite%20des%20informations%20sur%20vos%20formations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-2xl border border-green-300 px-4 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-50"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prevensia-formation-3450a0385/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-2xl border border-blue-300 px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <FloatingContactButtons />
    </div>
  );
}
