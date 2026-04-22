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
  finalMessage?: string;
  quizCtaLabel?: string;
};
