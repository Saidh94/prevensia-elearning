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

export type ModuleVisual = {
  title?: string;
  subtitle?: string;
  items?: string[];
  tone?: VisualTone;
  illustrationKey?: IllustrationKey;
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