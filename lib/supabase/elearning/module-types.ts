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

export type ModuleSection = {
  id: string;
  title: string;
  intro?: string;
  content?: string[]; // 🔥 devient optionnel
  deepDive?: string[];
  keyPoints?: string[];
  forbiddenPoints?: string[];
  practicalCase?: string;
  legalRefs?: string[];
  visual?: ModuleVisual;
};

export type ModuleContent = {
  title: string;
  shortTitle: string;
  subtitle?: string;
  duration?: string;
  level?: string;
  objective?: string;
  audience?: string;
  certificationNote?: string;
  heroBadge?: string;
  sections: ModuleSection[];
  finalMessage?: string;
  quizCtaLabel?: string;
};