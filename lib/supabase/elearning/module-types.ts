export type VisualTone = "blue" | "amber" | "green" | "red" | "slate";

export type IllustrationKey =
  | "habilitation-scope"
  | "electric-risk"
  | "body-effects"
  | "work-environment"
  | "authorized-forbidden"
  | "emergency-response"
  | "summary-reflexes"
  | "generic";

export type AnimationKey =
  | "triangle-du-feu"
  | "zones-voisinage-bt"
  | "peas-sst"
  | "consignation-chaine"
  | "classes-extincteurs"
  | "niveaux-vehicules"
  | "alerte-incendie"
  | "evacuation-schema"
  | "permis-feu-etapes"
  | "ssi-chaine-fonctionnelle"
  | "sprinkler-activation"
  | "atex-domaine-explosivite"
  | "atex-explosimetre";

export type ModuleVisual = {
  title?: string;
  subtitle?: string;
  items?: string[];
  tone?: VisualTone;
  illustrationKey?: IllustrationKey;
  animationKey?: AnimationKey;
  imagePath?: string;
  imageAlt?: string;
};

export type ModuleResourceVideo = {
  title: string;
  description: string;
  url: string;
  provider?: string;
  ctaLabel?: string;
};

export type ModuleResourceFile = {
  title: string;
  description?: string;
  url: string;
  fileType?: string;
  ctaLabel?: string;
};

export type PracticalScenario = {
  /** Question posée au stagiaire : "Que faites-vous si…" */
  situation: string;
  /** Reformulation courte affichée en titre de carte */
  question: string;
  /** Actions incorrectes / erreurs à ne pas commettre */
  wrongActions: string[];
  /** Actions correctes dans l'ordre à respecter */
  correctActions: string[];
  /** Explication pédagogique de la bonne réponse */
  explanation: string;
  /** Référence normative précise (NF C 18-510, Code du travail…) */
  normRef?: string;
};

export type ModuleSection = {
  id: string;
  title: string;
  estimatedMinutes?: number;
  intro?: string;
  content?: string[];
  deepDive?: string[];
  keyPoints?: string[];
  forbiddenPoints?: string[];
  practicalCase?: string;
  scenarios?: PracticalScenario[];
  legalRefs?: string[];
  chapterImagePath?: string;
  chapterImageAlt?: string;
  resourceVideos?: ModuleResourceVideo[];
  visual?: ModuleVisual;
};

export type ModuleContent = {
  title: string;
  shortTitle: string;
  subtitle?: string;
  duration?: string;
  deliveryFormat?: string;
  level?: string;
  objective?: string;
  audience?: string;
  certificationNote?: string;
  heroBadge?: string;
  sections: ModuleSection[];
  resourceFiles?: ModuleResourceFile[];
  finalMessage?: string;
  quizCtaLabel?: string;
};
