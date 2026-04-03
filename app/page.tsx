"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";

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
    description:
      "Formations en présentiel et e-learning pour H0B0, BS / BE Manœuvre et personnel électricien.",
  },
  {
    title: "Sécurité incendie",
    href: "/formation-securite-incendie",
    description:
      "Manipulation extincteurs, guide-file / serre-file et équipier de première intervention.",
  },
  {
    title: "Formation SSI",
    href: "/formation-ssi",
    description:
      "Formation dédiée à l’exploitation du SSI et à la conduite à tenir face aux événements.",
  },
  {
    title: "Exploitation sprinkler",
    href: "/formation-sprinkler",
    description:
      "Formation sur l’exploitation des installations sprinkler et les principaux référentiels techniques.",
  },
  {
    title: "Formation SST",
    href: "/formation-sst",
    description:
      "SST initial et MAC SST pour les entreprises et les apprenants souhaitant se former aux premiers secours.",
  },
];

export default function Home() {
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
      } catch (error) {
        console.error("Réponse non JSON /api/sessions :", text);
        if (isMounted) setHomeSessions([]);
        return;
      }

      if (!Array.isArray(data)) {
        if (isMounted) setHomeSessions([]);
        return;
      }

      const filtered = data
        .filter((s: HomeSession) => {
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

  const goTo = (path: string) => {
    setIsMobileMenuOpen(false);
    setIsMobileFormationsOpen(false);
    setIsDesktopMenuOpen(false);
    window.location.href = path;
  };

  const handleAccueilClick = (
    event?: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    event?.preventDefault();
    setIsMobileMenuOpen(false);
    setIsMobileFormationsOpen(false);
    setIsDesktopMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "/");
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
              src="/images/logo-prevensia-formation.jpg"
              alt="Logo Prevensia Formation"
              width={200}
              height={70}
              className="h-auto w-[130px] sm:w-[190px]"
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
                      Espace apprenant
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
                Espace apprenant
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
              src="/images/salle-de-formation.jpg"
              alt="Formation en salle"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-red-900/80" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="mb-3 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-100">
                Organisme de formation
              </p>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Formations en habilitation électrique, sécurité incendie, SSI et SST
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                PREVENSIA FORMATION accompagne les particuliers et les professionnels
                avec des formations en présentiel et des parcours e-learning pensés
                pour la conformité réglementaire, la montée en compétence et
                l’efficacité opérationnelle.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#catalogue"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
                >
                  Voir le catalogue
                </a>

                <button
                  type="button"
                  onClick={() => goTo("/planning")}
                  className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Voir le planning présentiel
                </button>

                <Link
                  href="/elearning"
                  className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Espace apprenant
                </Link>

                <Link
                  href="/demande-devis"
                  className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Demander un devis
                </Link>
              </div>
            </div>

            <div className="grid gap-4 self-center">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-100">
                  Accès rapide
                </p>

                <div className="mt-5 grid gap-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm font-semibold text-red-100">
                      Habilitation électrique
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Présentiel et e-learning
                    </p>
                    <p className="mt-2 text-sm text-slate-200">
                      Une page commerciale unique pour orienter vers le présentiel,
                      l’e-learning, l’inscription ou la demande de devis.
                    </p>
                    <Link
                      href="/formation-habilitation-electrique"
                      className="mt-4 inline-flex text-sm font-semibold text-white underline underline-offset-4"
                    >
                      Découvrir l’offre
                    </Link>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm font-semibold text-red-100">
                      Présentiel
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Sessions planifiées
                    </p>
                    <p className="mt-2 text-sm text-slate-200">
                      Consultez les prochaines dates pour les formations en sécurité
                      incendie, SSI, sprinkler, SST et habilitation électrique.
                    </p>
                    <Link
                      href="/planning"
                      className="mt-4 inline-flex text-sm font-semibold text-white underline underline-offset-4"
                    >
                      Accéder au planning
                    </Link>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm font-semibold text-red-100">
                      E-learning
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Accès apprenant
                    </p>
                    <p className="mt-2 text-sm text-slate-200">
                      L’espace e-learning a vocation à accueillir les parcours,
                      modules, quiz, résultats et certificats.
                    </p>
                    <Link
                      href="/elearning"
                      className="mt-4 inline-flex text-sm font-semibold text-white underline underline-offset-4"
                    >
                      Accéder à l’espace apprenant
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="catalogue"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
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
              Une lecture claire des principales offres proposées par PREVENSIA FORMATION.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {formations.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Voir la formation
                </Link>
              </div>
            ))}
          </div>
        </section>

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
                Aperçu des prochaines sessions en présentiel. Consultez le planning complet
                pour visualiser toutes les dates disponibles.
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
                  const places = s.places_restantes ?? s.places_total - s.places_taken;

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
                          <span className="font-bold text-red-700">{places}</span>
                        </p>
                      </div>

                      <div className="flex justify-start md:justify-end">
                        <Link
                          href={`/inscription?sessionId=${s.id}`}
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
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                  Entreprises
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  Demandes de devis
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Pour plusieurs apprenants, des besoins intra-entreprise ou une organisation spécifique,
                  la demande de devis reste l’entrée la plus pertinente.
                </p>
                <Link
                  href="/demande-devis"
                  className="mt-5 inline-flex rounded-2xl bg-red-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
                >
                  Demander un devis
                </Link>
              </div>

              <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                  Apprenants
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  Espace e-learning
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  L’espace apprenant a vocation à accueillir les comptes, les modules, les quiz,
                  la progression et les certificats de réussite.
                </p>
                <Link
                  href="/elearning"
                  className="mt-5 inline-flex rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Accéder à l’espace apprenant
                </Link>
              </div>

              <div id="contact" className="rounded-[1.75rem] bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                  Contact
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  Échangeons sur votre besoin
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  PREVENSIA FORMATION accompagne les particuliers et les professionnels sur toute la France
                  selon la prestation.
                </p>
                <p className="mt-4 text-sm font-medium text-slate-800">
                  prevensia.formation@outlook.fr
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  01 89 62 94 92
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-slate-900 py-16 text-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* INTRO */}
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
        Pourquoi choisir PREVENSIA FORMATION
      </p>

      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        Une expertise technique et réglementaire au service de vos formations
      </h2>

      <p className="mt-4 text-slate-300 leading-8">
        Nos formations sont conçues pour répondre aux exigences réglementaires en vigueur,
        notamment en matière d’habilitation électrique (référentiel NF C 18-510),
        de sécurité incendie et de prévention des risques. Elles s’appuient sur une approche
        concrète du terrain, adaptée aux contraintes opérationnelles des entreprises.
      </p>
    </div>

    {/* POINTS FORTS */}
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-bold">Conformité réglementaire</h3>
        <p className="mt-2 text-sm text-slate-300">
          Programmes construits selon les référentiels en vigueur (NF C 18-510,
          Code du travail, exigences sécurité incendie).
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-bold">Approche terrain</h3>
        <p className="mt-2 text-sm text-slate-300">
          Formations basées sur des situations réelles d’exploitation et des retours
          d’expérience issus du terrain.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-bold">Adaptabilité</h3>
        <p className="mt-2 text-sm text-slate-300">
          Organisation en présentiel, en e-learning ou en intra-entreprise selon
          vos contraintes opérationnelles.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-bold">Lisibilité des parcours</h3>
        <p className="mt-2 text-sm text-slate-300">
          Une offre structurée pour orienter rapidement vers le bon niveau
          d’habilitation et le bon format.
        </p>
      </div>

    </div>

    {/* DOMAINES D'INTERVENTION */}
    <div className="mt-16 grid gap-10 lg:grid-cols-2">

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
          Domaines d’intervention
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          Des formations adaptées aux enjeux techniques et réglementaires
        </h3>

        <ul className="mt-6 space-y-3 text-sm text-slate-300 leading-7">
          <li>• Habilitation électrique (NF C 18-510)</li>
          <li>• Sécurité incendie et évacuation</li>
          <li>• Équipier de première intervention (EPI)</li>
          <li>• Exploitation des systèmes de sécurité incendie (SSI)</li>
          <li>• Exploitation sprinkler et référentiels techniques (APSAD, NFPA, FM Global)</li>
          <li>• Sauveteur Secouriste du Travail (SST)</li>
        </ul>

        <p className="mt-6 text-sm text-slate-300 leading-7">
          Chaque formation est conçue pour intégrer les obligations réglementaires
          applicables et garantir une mise en conformité opérationnelle des
          apprenants et des entreprises.
        </p>
      </div>

      {/* LOCALISATION */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
          Zone d’intervention
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          Une présence en Île-de-France et des interventions partout en France
        </h3>

        <p className="mt-6 text-sm text-slate-300 leading-7">
          PREVENSIA FORMATION intervient principalement en Île-de-France pour
          les formations en présentiel. Des sessions peuvent également être
          organisées sur l’ensemble du territoire national selon vos besoins,
          notamment dans le cadre de formations intra-entreprise.
        </p>

        <p className="mt-4 text-sm text-slate-300 leading-7">
          Cette organisation permet de concilier proximité, réactivité et
          adaptation aux contraintes spécifiques de chaque site.
        </p>
      </div>

    </div>

    {/* QUI SOMMES-NOUS */}
    <div className="mt-16 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
        Qui sommes-nous ?
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        Un organisme de formation ancré dans la réalité du terrain
      </h3>

      <p className="mt-4 text-slate-300 leading-8">
        PREVENSIA FORMATION s’appuie sur une expertise issue de l’ingénierie
        sécurité et de la prévention des risques. Notre objectif est de proposer
        des formations claires, efficaces et directement applicables en
        exploitation, en intégrant les exigences réglementaires et normatives
        propres à chaque domaine.
      </p>

      <p className="mt-4 text-slate-300 leading-8">
        Nous accompagnons les entreprises et les apprenants avec une approche
        pragmatique, orientée résultats et conformité, afin de garantir une
        montée en compétence réelle et durable.
      </p>
    </div>

  </div>
</section>
      </main>

      {showScrollTopButton ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-xl transition hover:-translate-y-0.5 hover:text-red-700"
          aria-label="Revenir en haut de la page"
        >
          ↑
        </button>
      ) : null}
    </div>
  );
}
