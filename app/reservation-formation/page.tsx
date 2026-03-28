"use client";

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFormationsOpen, setIsMobileFormationsOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isDesktopFormationsOpen, setIsDesktopFormationsOpen] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  // Gestion du scroll body en menu mobile
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Fermeture avec touche Échap
  useEffect(() => {
    if (!isMobileMenuOpen && !isDesktopMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsMobileFormationsOpen(false);
        setIsDesktopMenuOpen(false);
        setIsDesktopFormationsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isDesktopMenuOpen, isMobileMenuOpen, isDesktopFormationsOpen, isMobileFormationsOpen]);

  // Bouton Scroll top visible après 320px
  useEffect(() => {
    const handleScroll = () => setShowScrollTopButton(window.scrollY > 320);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu quand clic à l’extérieur
  useEffect(() => {
    if (!isDesktopMenuOpen) return;
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!desktopMenuRef.current?.contains(target)) {
        setIsDesktopMenuOpen(false);
        setIsDesktopFormationsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutsideClick);
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, [isDesktopMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileFormationsOpen(false);
  };

  const closeDesktopMenu = () => {
    setIsDesktopMenuOpen(false);
    setIsDesktopFormationsOpen(false);
  };

  const handleAccueilClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    closeMobileMenu();
    closeDesktopMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "/");
  };

  // Données
  const formationLinks = [
    { href: "/formation-habilitation-electrique", label: "Habilitation électrique" },
    { href: "/formation-sst", label: "Formation SST" },
    { href: "/formation-securite-incendie", label: "Sécurité incendie" },
    { href: "/formation-sprinkler", label: "Formation sprinkler" },
    { href: "/formation-ssi", label: "Formation SSI" },
  ];

  const formationsElearning = [
    {
      title: "Habilitation électrique H0B0",
      mode: "E-learning",
      description:
        "Formation destinée au personnel non-électricien intervenant à proximité d'installations électriques.",
      duration: "7 h",
    },
    {
      title: "BS / BE Manœuvre",
      mode: "E-learning",
      description:
        "Parcours pour les opérations élémentaires et les manœuvres sur installations basse tension.",
      duration: "10 h",
    },
    {
      title: "B1 B1V B2 B2V BR BC",
      mode: "E-learning",
      description:
        "Formation complète pour personnel électricien avec modules théoriques et évaluation des connaissances.",
      duration: "14 h",
    },
  ];

  const formationsPresentiel = [
    {
      title: "Manipulation des extincteurs",
      mode: "Présentiel",
      description:
        "Apprentissage des classes de feu, choix de l'agent extincteur et mise en situation pratique.",
      duration: "2 à 3 h",
    },
    {
      title: "Guide-file / Serre-file",
      mode: "Présentiel",
      description:
        "Organisation de l'évacuation, consignes, rôles et exercices adaptés à votre établissement.",
      duration: "3 h",
    },
    {
      title: "Équipier de Première Intervention (EPI)",
      mode: "Présentiel",
      description:
        "Sensibilisation opérationnelle pour agir rapidement en cas de départ de feu et sécuriser l'évacuation.",
      duration: "1/2 journée",
    },
    {
      title: "Exploitation SSI",
      mode: "Présentiel",
      description:
        "Lecture du SSI, conduite à tenir, levée de doute, acquittement et exploitation des informations.",
      duration: "1/2 journée à 1 jour",
    },
    {
      title: "Exploitation sprinkler et référentiels techniques",
      mode: "Présentiel",
      description:
        "Formation dédiée à l’exploitation des installations sprinkler et aux exigences EN 12845, APSAD R1, NFPA 13 et FM Global.",
      duration: "1 à 2 jours",
    },
    {
      title: "Sauveteur Secouriste du Travail (SST) - Initial",
      mode: "Présentiel",
      description:
        "Formation SST conforme au référentiel INRS pour intervenir efficacement face à un accident du travail.",
      duration: "2 jours",
    },
    {
      title: "MAC SST - Maintien et Actualisation des Compétences",
      mode: "Présentiel",
      description:
        "Recyclage SST pour actualiser et maintenir les compétences du sauveteur secouriste du travail.",
      duration: "1 jour",
    },
  ];

  const planning = [
    {
      date: "10 juin 2026",
      title: "Habilitation électrique H0B0",
      format: "E-learning accompagné",
      audience: "Professionnels / Particuliers",
    },
    {
      date: "18 juin 2026",
      title: "BS / BE Manœuvre",
      format: "E-learning accompagné",
      audience: "Professionnels",
    },
    {
      date: "02 juillet 2026",
      title: "Manipulation extincteurs",
      format: "Présentiel",
      audience: "Professionnels",
    },
    {
      date: "09 juillet 2026",
      title: "Guide-file / Serre-file",
      format: "Présentiel inter / intra",
      audience: "Tous publics",
    },
  ];

  const stats = [
    { value: "3 pôles", label: "Électrique, incendie & SST" },
    { value: "Qualiopi", label: "Organisme certifié" },
    { value: "B2B / B2C", label: "Particuliers & entreprises" },
    { value: "Rapide", label: "Devis simplifié" },
  ];

  const blocsIllustres = [
    {
      title: "Habilitation électrique",
      image: "/images/armoire-electrique.jpg",
      text: "Formations en e-learning et accompagnées pour les habilitations H0B0, BS, BE manœuvre, B1, B2, BR et BC.",
    },
    {
      title: "SSI & sécurité incendie",
      image: "/images/image-ssi.jpg",
      text: "Formations SSI, manipulation extincteurs, guide-file, serre-file, EPI ...",
    },
    {
      title: "Exploitation sprinkler",
      image: "/images/installation-spk.jpg",
      text: "Formation pratique sur les installations sprinkler et les référentiels EN 12845, APSAD R1, NFPA 13 et FM Global.",
    },
    {
      title: "Formation en salle",
      image: "/images/salle-de-formation.jpg",
      text: "Sessions inter ou intra-entreprises pour bureaux, industriels, exploitants et collectivités.",
    },
    {
      title: "SST / MAC SST",
      image: "/images/sst.jpg",
      text: "Gestes de secours, conduite à tenir, maintien des compétences en entreprise.",
    },
  ];

  const catalog = [...formationsElearning, ...formationsPresentiel];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "[prevensia-elearning.vercel.app](https://prevensia-elearning.vercel.app)";

  const homeStructuredData = {
    "@context": "[schema.org](https://schema.org)",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "PREVENSIA FORMATION",
        url: siteUrl,
        logo: `${siteUrl}/images/logo-prevensia-formation.jpg`,
        email: "prevensia.formation@outlook.fr",
        telephone: "+33189629492",
        sameAs: ["[linkedin.com](https://linkedin.com/in/prevensia-formation-3450a0385)"],
      },
      {
        "@type": "ItemList",
        name: "Catalogue de formations PREVENSIA",
        itemListElement: catalog.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          description: item.description,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER + MENU */}
      {/* ... (même header que la version précédente) ... */}

      {/* -- le reste de tes sections ici : hero, catalogue, planning, contact, footer -- */}

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
      />

      {/* BOUTON RETOUR HAUT */}
      {showScrollTopButton && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-xl transition hover:-translate-y-0.5 hover:text-red-700"
          aria-label="Retour haut de page"
        >
          ↑ Accueil
        </button>
      )}
    </div>
  );
}
