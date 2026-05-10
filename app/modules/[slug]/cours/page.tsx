"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import VisualBlock from "@/app/components/elearning/VisualBlock";
import { formatFrenchDisplayText } from "@/lib/french-display";
import type {
  ModuleContent,
  ModuleResourceVideo,
} from "@/lib/supabase/elearning/module-types";
import {
  getModuleContentBySlug,
  getModuleLabelBySlug,
  resolveModuleSlug,
} from "@/lib/supabase/elearning/module-registry";

type ChapterReference = {
  label: string;
  url?: string;
};

type Chapter = {
  key: string;
  title: string;
  subtitle: string;
  minSeconds: number;
  image?: string;
  imageAlt?: string;
  highlights?: string[];
  content: string[];
  essentials?: string[];
  references?: ChapterReference[];
  resourceVideos?: ModuleResourceVideo[];
};

type ChapterProgress = {
  chapter_key: string;
  seconds_spent: number;
  min_seconds_required: number;
  is_completed: boolean;
};

type ModuleViewerContext = {
  isAdmin: boolean;
};

const REG_REFERENCES = {
  codeTravail: {
    label:
      "Code du travail — dispositions relatives aux opérations sur les installations électriques ou dans leur voisinage",
  },
  r4544_1_11: {
    label:
      "Code du travail — articles R.4544-1 à R.4544-11 : prévention du risque électrique, formation, habilitation et organisation",
  },
  r4544_9: {
    label:
      "Code du travail — article R.4544-9 : les opérations sur les installations électriques ou dans leur voisinage ne peuvent être effectuées que par des travailleurs habilités lorsque la réglementation l’exige",
  },
  r4544_10: {
    label:
      "Code du travail — article R.4544-10 : formation théorique et pratique adaptée, délivrance de l’habilitation par l’employeur, maintien des compétences",
  },
  nfC18510: {
    label:
      "NF C 18-510 — prévention du risque électrique lors des opérations sur les ouvrages et installations électriques et dans un environnement électrique",
  },
  nfC15100: {
    label:
      "NF C 15-100 — règles relatives aux installations électriques basse tension",
  },
  inrs: {
    label:
      "habilitation électrique, prévention du risque électrique, formation préalable et maintien des compétences",
  },
};

const INRS_VIDEO_RESOURCES = {
  basics: {
    title: "Video INRS - Les bases de l'habilitation electrique",
    description:
      "Ressource officielle INRS pour rappeler le role de l'habilitation, la place de l'employeur et les grands reperes de prevention.",
    url: "https://www.inrs.fr/media.html?refINRS=Anim-132",
    provider: "INRS",
    ctaLabel: "Voir la video INRS",
  },
  webinar: {
    title: "Webinaire INRS - Comment choisir les habilitations electriques ?",
    description:
      "Support INRS utile pour recaler les symboles, les roles, les limites d'action et la logique de choix des habilitations.",
    url: "https://www.inrs.fr/media.html?refINRS=Anim-184",
    provider: "INRS",
    ctaLabel: "Voir le webinaire INRS",
  },
  channel: {
    title: "Chaine INRS France - selection risque electrique",
    description:
      "Acces direct a la selection officielle INRS sur YouTube autour du risque electrique et de l'habilitation.",
    url: "https://www.youtube.com/@INRSFrance/search?query=Risque%20%C3%A9lectrique",
    provider: "INRS France",
    ctaLabel: "Voir la selection YouTube",
  },
} as const;

const H0B0_CHAPTERS: Chapter[] = [
  {
    key: "intro",
    title: "Chapitre 1 — Cadre du B0 / H0 / H0V et logique de l’habilitation",
    subtitle:
      "Comprendre le périmètre de l’habilitation, la place de la formation et le rôle de l’employeur dans la prévention du risque électrique",
    minSeconds: 240,
    image: "/elearning/references/symboles-travaux-non-electriques.jpg",
    imageAlt:
      "Tableau des symboles d'habilitation utilises pour les travaux d'ordre non electrique",
    highlights: [
      "Le B0, le H0 et le H0V concernent exclusivement des opérations d’ordre non électrique.",
      "La formation préalable ne vaut jamais habilitation à elle seule.",
      "L’habilitation est délivrée par l’employeur selon le poste, les risques et l’environnement réel de travail.",
    ],
    content: [
      "L’habilitation électrique est une reconnaissance formalisée par l’employeur de la capacité d’un travailleur à accomplir en sécurité les opérations qui lui sont confiées dans un environnement présentant un risque électrique. Elle s’inscrit dans le cadre du Code du travail et de la norme NF C 18-510.",
      "Les symboles B0, H0 et H0V concernent des opérations d’ordre non électrique. Ils ne permettent ni intervention électrique, ni dépannage, ni consignation, ni mesurage, ni vérification, ni modification d’un équipement électrique, ni ouverture d’enveloppe pour agir sur l’installation.",
      "La formation préalable constitue un prérequis indispensable, mais elle ne vaut jamais habilitation à elle seule. L’employeur doit vérifier l’adéquation entre le symbole délivré, le poste occupé, les tâches confiées, les zones fréquentées et les risques réellement rencontrés.",
      "L’article R.4544-9 du Code du travail impose que les opérations sur les installations électriques ou dans leur voisinage soient confiées à des travailleurs habilités lorsque la réglementation le requiert. L’article R.4544-10 précise la nécessité d’une formation théorique et pratique adaptée ainsi que le maintien des compétences.",
      "Le B0 concerne les opérations d’ordre non électrique en basse tension. Le H0 concerne les opérations d’ordre non électrique en haute tension hors voisinage dangereux. Le H0V concerne les opérations d’ordre non électrique réalisées au voisinage d’installations haute tension, dans un cadre strictement défini.",
      "Cette distinction ne donne jamais le droit d’agir sur l’installation électrique. Elle permet uniquement de définir le niveau d’exposition au risque et les conditions dans lesquelles une présence ou une activité non électrique est autorisée.",
    ],
    essentials: [
      "B0 / H0 / H0V = opérations d’ordre non électrique uniquement.",
      "La formation ne vaut pas habilitation.",
      "L’employeur délivre l’habilitation selon le poste, les risques et l’environnement.",
      "Respecter son périmètre est une règle de sécurité fondamentale.",
    ],
    references: [
      REG_REFERENCES.codeTravail,
      REG_REFERENCES.r4544_1_11,
      REG_REFERENCES.r4544_9,
      REG_REFERENCES.r4544_10,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
    resourceVideos: [INRS_VIDEO_RESOURCES.basics],
  },
  {
    key: "symbols",
    title: "Chapitre 2 — Lecture des symboles d’habilitation",
    subtitle:
      "Comprendre précisément ce que signifient B, H, 0 et V, et ce qu’un symbole n’autorise jamais",
    minSeconds: 210,
    image: "/elearning/references/symboles-travaux-non-electriques.jpg",
    imageAlt:
      "Tableau des symboles d'habilitation utilises pour les travaux d'ordre non electrique",
    highlights: [
      "B = basse tension, H = haute tension.",
      "0 = opérations d’ordre non électrique.",
      "V = voisinage : présence autorisée dans une zone plus exposée, sans intervention électrique.",
    ],
    content: [
      "Les symboles d’habilitation électrique sont construits de manière logique et doivent être lus caractère par caractère. Chaque élément du symbole a une signification précise qui ne doit jamais être interprétée de façon approximative.",
      "La lettre indique le domaine de tension : B signifie basse tension et H signifie haute tension. Cette distinction conditionne le niveau de danger, les distances de sécurité et les règles d’accès aux installations.",
      "Le chiffre 0 désigne les opérations d’ordre non électrique. Le titulaire n’est donc pas autorisé à intervenir sur l’installation électrique, à réaliser un dépannage, une mesure, une consignation ou une remise en service.",
      "La lettre V signifie voisinage. Elle indique que l’opérateur est amené à évoluer dans une zone où le risque électrique existe du fait de la proximité d’éléments sous tension. En haute tension, ce voisinage est particulièrement critique car un amorçage peut se produire sans contact direct.",
      "Le symbole B0 correspond à des opérations d’ordre non électrique en basse tension. Le symbole H0 correspond à des opérations d’ordre non électrique en environnement haute tension hors voisinage dangereux. Le symbole H0V correspond à des opérations d’ordre non électrique réalisées au voisinage d’installations haute tension.",
      "Le symbole H0V ne donne aucun droit supplémentaire sur l’installation électrique. Il traduit seulement une situation de travail plus exposée nécessitant une vigilance renforcée, le respect strict des distances et l’application rigoureuse des consignes.",
      "Dans la pratique, la distinction entre B0, H0 et H0V ne donne jamais de droit d’action sur l’installation électrique. Elle permet uniquement de définir le niveau d’exposition au risque et les conditions dans lesquelles une présence est autorisée.",
      "Une erreur fréquente consiste à croire qu’une proximité, un besoin d’exploitation ou une urgence donne le droit d’ouvrir, de réarmer, de déplacer ou de modifier un équipement électrique. C’est faux. Le symbole d’habilitation doit toujours être interprété strictement.",
    ],
    essentials: [
      "B = basse tension, H = haute tension.",
      "0 = opérations d’ordre non électrique.",
      "V = voisinage : zone plus exposée, sans droit d’intervention électrique.",
      "H0V n’est pas une habilitation “supérieure” : c’est une situation plus exposée.",
      "Le symbole n’autorise jamais à agir sur l’installation électrique.",
    ],
    references: [
      REG_REFERENCES.r4544_9,
      REG_REFERENCES.r4544_10,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
    resourceVideos: [INRS_VIDEO_RESOURCES.channel],
  },
  {
    key: "roles",
    title: "Chapitre 3 — Rôles et responsabilités",
    subtitle:
      "Identifier qui fait quoi dans la prévention du risque électrique et comprendre la chaîne de responsabilité",
    minSeconds: 180,
    image: "/elearning/h0b0/roles-responsabilites.png",
    imageAlt:
      "Illustration des rôles et responsabilités en habilitation électrique",
    highlights: [
      "L’employeur organise la prévention et délivre l’habilitation.",
      "L’encadrement veille à la cohérence entre mission confiée et niveau d’habilitation.",
      "Le salarié doit respecter strictement ses limites et signaler les écarts.",
    ],
    content: [
      "La prévention du risque électrique repose sur une organisation claire. L’employeur évalue les risques, définit les règles d’accès, met à disposition les protections, organise la formation et délivre les habilitations adaptées.",
      "L’encadrement de proximité s’assure que les tâches confiées correspondent réellement aux habilitations détenues, que les consignes sont comprises, que les conditions de sécurité sont réunies et que les écarts sont traités.",
      "Le salarié habilité doit appliquer les consignes, respecter les limites de son symbole, utiliser correctement les protections, refuser toute action hors périmètre et signaler immédiatement toute situation anormale.",
      "Le formateur transmet le cadre théorique et pratique nécessaire à la compréhension du risque, mais il ne délivre pas l’habilitation. Celle-ci relève uniquement de l’employeur.",
      "Dans les situations réelles, cette organisation évite notamment qu’un salarié non électricien prenne l’initiative d’intervenir sur un équipement en cas d’anomalie, ce qui constitue l’une des causes classiques d’accident.",
      "La sécurité ne repose donc pas sur une simple connaissance individuelle. Elle résulte d’une articulation entre réglementation, organisation, supervision, compétences et comportement professionnel.",
    ],
    essentials: [
      "L’employeur délivre l’habilitation.",
      "L’encadrement contrôle l’adéquation mission / habilitation.",
      "Le salarié respecte son périmètre et signale toute anomalie.",
    ],
    references: [
      REG_REFERENCES.codeTravail,
      REG_REFERENCES.r4544_10,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
    resourceVideos: [INRS_VIDEO_RESOURCES.webinar],
  },
  {
    key: "voltage-domains",
    title:
      "Chapitre 4 — Domaines de tension en courant alternatif et en courant continu",
    subtitle:
      "Distinguer BT et HT en alternatif et en continu, et comprendre les conséquences pratiques sur le niveau de danger",
    minSeconds: 240,
    image: "/elearning/h0b0/domaines-tension.png",
    imageAlt:
      "Schema pedagogique des domaines de tension et de la difference entre basse tension et haute tension",
    highlights: [
      "Le domaine de tension conditionne le danger, les distances et les règles d’accès.",
      "Le courant alternatif et le courant continu n’impliquent pas exactement les mêmes seuils.",
      "En haute tension, le risque d’arc s’ajoute au risque de contact.",
    ],
    content: [
      "La norme NF C 18-510 distingue les domaines de tension afin de qualifier le niveau de danger et d’adapter les mesures de prévention. En courant alternatif, la très basse tension est inférieure ou égale à 50 V, la basse tension est supérieure à 50 V et inférieure ou égale à 1 000 V, et la haute tension est supérieure à 1 000 V.",
      "En courant continu, la très basse tension est inférieure ou égale à 120 V, la basse tension est supérieure à 120 V et inférieure ou égale à 1 500 V, et la haute tension est supérieure à 1 500 V.",
      "Cette distinction conditionne les règles d’accès, les distances de voisinage, les protections à mettre en place, les procédures applicables et le niveau d’habilitation requis. Il ne s’agit donc pas d’une simple classification théorique.",
      "En basse tension, le risque principal est le contact direct avec une partie active normalement sous tension ou le contact indirect avec une masse métallique devenue dangereuse après défaut d’isolement. En haute tension, il faut intégrer en plus le risque d’amorçage et d’arc électrique, qui peut se produire sans contact direct.",
      "Le danger ne dépend pas uniquement de la valeur de la tension. Il dépend aussi de la durée d’exposition, du trajet du courant dans le corps, de l’état du matériel, de l’environnement, du niveau d’humidité et des protections présentes ou absentes.",
      "Dans les installations modernes, le courant continu est de plus en plus présent, notamment dans les batteries, les systèmes photovoltaïques, les onduleurs ou certains équipements industriels. Contrairement au courant alternatif, le courant continu peut présenter un risque d’arc plus stable et une coupure plus difficile.",
      "La présence de batteries, de chargeurs, d’installations photovoltaïques ou d’équipements secourus impose donc une vigilance particulière, même en l’absence de réseau classique visible.",
      "Dans un parcours B0 / H0 / H0V, il n’est pas demandé de manipuler ces domaines comme un électricien, mais il est indispensable de savoir les reconnaître, d’en comprendre les conséquences et de ne jamais banaliser une installation parce qu’elle semble fermée ou éloignée.",
      "En cas de doute sur le domaine de tension ou sur les limites d’accès, la bonne conduite consiste à s’arrêter, ne pas s’engager et demander l’avis d’une personne compétente.",
    ],
    essentials: [
      "BT et HT n’impliquent pas les mêmes risques ni les mêmes distances.",
      "Le courant alternatif et le courant continu ne se rencontrent pas dans les mêmes contextes.",
      "Batteries, photovoltaïque et onduleurs imposent une vigilance spécifique.",
      "En HT, le danger peut exister sans contact direct.",
    ],
    references: [
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.nfC15100,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "zones",
    title:
      "Chapitre 5 — Zones d’environnement électrique et distances d’approche",
    subtitle:
      "Identifier les zones à risque, comprendre le voisinage et respecter strictement les limites d’approche",
    minSeconds: 300,
    image: "/images/modules/electricite/zones-voisinage-bt.jpg",
    imageAlt:
      "Schema des zones de voisinage et des limites d'approche autour d'un conducteur nu en basse tension",
    highlights: [
      "Le danger commence avant le contact.",
      "Le voisinage d’une pièce nue sous tension constitue déjà un risque.",
      "Le balisage, les obstacles et les distances doivent être respectés sans exception.",
    ],
    content: [
      "La norme NF C 18-510 structure la prévention autour de zones d’environnement électrique définies par des distances de sécurité autour des pièces nues sous tension. Ces zones permettent de prévenir le risque de contact direct et, en haute tension, le risque d’amorçage à distance.",
      "Plusieurs distances normatives structurent ces zones, notamment la distance limite de voisinage simple et la distance limite de voisinage renforcé. Ces distances dépendent du domaine de tension et ne doivent jamais être appréciées de manière approximative ou empirique.",
      "En basse tension, la distance de voisinage simple est souvent illustrée pédagogiquement autour de 30 cm des pièces nues sous tension. Cette valeur aide à visualiser le danger, mais elle ne remplace ni les prescriptions du site, ni les dispositions normatives, ni le balisage réellement en place.",
      "En haute tension, les distances sont nettement plus importantes et le risque d’arc rend la proximité dangereuse même sans contact physique avec l’installation. Le simple fait de ne pas toucher une installation ne garantit donc jamais la sécurité.",
      "Ces zones peuvent être matérialisées par un balisage, des pancartes, des écrans, des obstacles, des capotages, des enveloppes fermées, un verrouillage d’accès ou des règles strictes d’entrée dans les locaux électriques. L’absence de balisage visible ne signifie jamais absence de risque.",
      "Une armoire ouverte, un bornier accessible, un jeu de barres apparent, un capot retiré, une cellule haute tension ouverte ou un local électrique non sécurisé constituent immédiatement des situations de voisinage à risque.",
      "Dans la pratique, ces zones sont fréquemment rencontrées lors de l’ouverture d’une armoire électrique, de la présence de coffrets provisoires sur chantier, de tableaux accessibles dans des locaux techniques ou lors d’interventions à proximité d’équipements en fonctionnement.",
      "La distinction entre H0 et H0V repose directement sur cette notion de voisinage. Un titulaire H0 évolue en environnement haute tension sans pénétrer dans une zone de voisinage dangereux. Un titulaire H0V est amené à évoluer dans une zone où le respect des distances devient critique.",
      "Le titulaire B0 / H0 / H0V ne réalise aucune opération électrique. Il doit reconnaître les limites de sécurité, respecter les distances d’approche, ne jamais pénétrer dans une zone douteuse et ne jamais contourner un dispositif de protection pour des raisons pratiques.",
      "La règle opérationnelle est stricte : repérer la zone, identifier le danger avant le contact, respecter sans discussion les limites d’approche et, en cas de doute, s’arrêter immédiatement, se mettre en sécurité et alerter.",
    ],
    essentials: [
      "Le voisinage dangereux existe avant le contact.",
      "En HT, le risque d’arc impose une vigilance renforcée.",
      "Une armoire ouverte ou un capot retiré créent immédiatement une situation à risque.",
      "En cas de doute sur une distance ou une limite : arrêt et signalement.",
    ],
    references: [
      REG_REFERENCES.codeTravail,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "access",
    title: "Chapitre 6 — Accès aux locaux et zones électriques",
    subtitle:
      "Comprendre dans quelles conditions un accès est autorisé et reconnaître les situations où il faut immédiatement s’arrêter",
    minSeconds: 270,
    image: "/elearning/references/distances-locaux-acces.jpg",
    imageAlt:
      "Schema des distances limites et des zones definies dans les locaux et emplacements d'acces",
    highlights: [
      "L’accès à une zone électrique n’est jamais banal.",
      "Signalisation, protections et consignes conditionnent l’autorisation d’accès.",
      "Une situation dégradée impose l’arrêt et le signalement.",
    ],
    content: [
      "L’accès à un local ou à une zone électrique n’est jamais anodin. Il dépend des consignes du site, de la fonction du local, du niveau d’habilitation, des protections en place, du balisage, de l’état apparent des installations et de la mission réellement confiée.",
      "La norme distingue ici des situations très différentes. Un titulaire H0 peut évoluer en haute tension hors voisinage dangereux, alors qu’un titulaire H0V intervient dans un cadre plus exigeant, au voisinage renforcé HT, avec des distances à respecter, un accès encadré et une surveillance permanente organisée pour empêcher tout franchissement de la limite dangereuse.",
      "Dans la zone de voisinage renforcé HT, l’accès n’est pas une simple tolérance orale. Il suppose une désignation par l’employeur, une autorisation adaptée délivrée par le chargé d’exploitation électrique ou l’organisation compétente, un balisage de la zone de travail, et un contrôle réel des personnes qui y évoluent.",
      "Le chargé de chantier H0V doit prendre connaissance des instructions de sécurité, faire appliquer les consignes, vérifier les protections en place, organiser la surveillance du personnel et s’assurer que chacun dispose du bon niveau d’habilitation pour la zone concernée. Cette logique doit être comprise même par l’exécutant, car elle explique pourquoi on n’entre jamais seul ni 'pour deux minutes' dans une zone HT sensible.",
      "Une porte ouverte sur un local réservé, une armoire déverrouillée, une enveloppe manquante, un capot retiré, une odeur anormale, une fuite d’eau, un câble détérioré, un bruit inhabituel ou une signalisation temporaire de chantier doivent être considérés comme des signaux d’alerte imposant une vigilance renforcée, voire l’arrêt immédiat de l’accès.",
      "Le titulaire B0 / H0 / H0V n’a pas à forcer un accès, franchir une séparation, entrer dans un local électrique pour récupérer un objet, contourner un verrouillage, ni pénétrer dans une zone technique au motif qu’aucun électricien n’est présent. En H0V, il n’a pas non plus à apprécier seul si la distance reste acceptable : la surveillance et le balisage sont justement là pour empêcher cette dérive.",
      "L’accès n’est acceptable que si la situation est prévue, lisible, protégée et compatible avec les consignes du site. Cela suppose une zone clairement définie, l’absence d’anomalie visible, le maintien des protections et un environnement compatible avec une présence non électrique.",
      "Dans tous les autres cas, la réaction attendue n’est pas l’adaptation improvisée mais l’arrêt de l’action, la mise à distance et le signalement à l’encadrement ou à une personne compétente. En matière de risque électrique, l’hésitation doit toujours être traitée comme un signal faible de danger.",
    ],
    essentials: [
      "L’accès dépend des consignes, de l’état des protections et du cadre d’autorisation.",
      "Le H0V implique un contrôle plus strict en voisinage HT.",
      "Une situation anormale impose l’arrêt immédiat.",
      "Une facilité d’accès apparente ne vaut jamais autorisation.",
    ],
    references: [
      REG_REFERENCES.codeTravail,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "documents",
    title: "Chapitre 7 — Consignes, signalisation et documents applicables",
    subtitle:
      "Comprendre que la sécurité ne repose pas seulement sur la mémoire du cours, mais aussi sur les consignes et dispositifs du site",
    minSeconds: 240,
    image: "/elearning/references/document-chantier.jpg",
    imageAlt:
      "Exemple de document technique ou administratif associe a une installation electrique",
    highlights: [
      "Le balisage et la signalisation doivent être respectés sans interprétation personnelle.",
      "Les consignes du site complètent la formation générale.",
      "Un document, une pancarte ou une procédure ont une valeur opérationnelle immédiate.",
    ],
    content: [
      "La prévention du risque électrique ne repose pas uniquement sur la connaissance générale des dangers. Elle repose aussi sur les consignes du site, la signalisation en place, les règles d’accès, le balisage, les autorisations éventuelles et l’organisation retenue par l’employeur.",
      "Une pancarte d’interdiction, un affichage de danger électrique, un balisage temporaire, une condamnation d’accès ou une procédure interne doivent être considérés comme des dispositifs de sécurité à part entière. Ils ne doivent ni être ignorés, ni déplacés, ni contournés.",
      "Dans certaines entreprises, des documents spécifiques complètent le cadre général : consignes de sécurité, plans de prévention, permis d’accès, procédures d’intervention, règles de coactivité ou carnets de prescriptions. Même si un titulaire B0 / H0 / H0V n’en rédige pas le contenu, il doit connaître ceux qui s’appliquent à sa mission.",
      "Pour les opérations d’ordre non électrique concourant à l’exploitation ou à la maintenance, la norme fait aussi apparaître des documents de pilotage comme l’autorisation de travail, le certificat pour tiers ou l’avis de fin de travail selon la situation. Tous les salariés n’émettent pas ces documents, mais ils doivent comprendre leur rôle: matérialiser qu’un accès, une zone et un cadre de sécurité ont bien été définis.",
      "En H0V, cette culture documentaire est encore plus importante. L’autorisation ne sert pas à 'faire joli': elle confirme la zone concernée, les protections attendues, les limites à ne pas franchir et l’existence d’une surveillance compatible avec le voisinage HT.",
      "Le non-respect d’une signalisation ou d’une consigne écrite constitue une prise de risque, même lorsqu’aucun danger n’est immédiatement visible. En environnement électrique, le fait de ne rien voir ne signifie jamais qu’il n’y a rien à craindre.",
      "La bonne conduite consiste à lire, comprendre et appliquer les consignes du site avant toute activité, puis à s’arrêter en cas de doute sur une règle d’accès, une zone balisée ou un document applicable. Un compte rendu de fin d’activité fait aussi partie de la prévention, car il interdit les retours non autorisés dans la zone de travail et permet à l’organisation de reprendre la main.",
    ],
    essentials: [
      "Le balisage et la signalisation ont une valeur opérationnelle immédiate.",
      "Les consignes du site complètent la formation générale.",
      "Autorisation de travail et cadre documentaire sécurisent l’accès.",
      "On ne contourne jamais un affichage, un verrouillage ou une interdiction.",
      "En cas de doute sur une consigne : arrêt et demande d’avis.",
    ],
    references: [
      REG_REFERENCES.codeTravail,
      REG_REFERENCES.r4544_1_11,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "environments",
    title: "Chapitre 8 — Types d’environnements électriques",
    subtitle:
      "Reconnaître les contextes où le risque varie selon le lieu, l’activité, l’humidité, l’état des matériels et l’organisation",
    minSeconds: 210,
    image: "/elearning/h0b0/environnement-travail.png",
    imageAlt: "Illustration des différents types d’environnements électriques",
    highlights: [
      "Le niveau de risque dépend aussi du contexte de travail.",
      "Local technique, atelier, chantier ou zone logistique n’exposent pas de la même manière.",
      "L’observation de l’environnement précède toujours l’action.",
    ],
    content: [
      "Le risque électrique ne dépend pas uniquement du niveau de tension. Il dépend aussi de l’environnement de travail : atelier, chantier, zone logistique, local technique, extérieur, environnement humide, milieu conducteur ou installation provisoire.",
      "Un local technique contenant des tableaux, armoires ou câbles accessibles présente un niveau de vigilance supérieur à une zone administrative. Un chantier temporaire avec coffrets mobiles, rallonges et outillages portatifs présente des vulnérabilités spécifiques.",
      "En extérieur, la pluie, la poussière, la boue ou la corrosion peuvent dégrader les enveloppes et l’isolement. En milieu humide ou conducteur, la résistance du corps et du sol diminue, ce qui augmente le risque d’électrisation.",
      "Le personnel B0 / H0 / H0V doit donc observer avant d’agir : présence d’armoires, câbles au sol, coffrets ouverts, matériels provisoires, protections absentes, sols humides, balisage insuffisant ou anomalies visibles.",
      "Certains environnements modernes présentent des risques spécifiques, notamment les zones équipées de batteries de stockage, les installations photovoltaïques ou les systèmes automatisés. Ces environnements peuvent présenter des sources d’énergie non visibles et maintenir un risque même en l’absence d’alimentation apparente.",
      "L’environnement de travail fait partie intégrante de l’analyse du risque. Il ne s’agit jamais d’un simple décor autour de l’installation électrique.",
    ],
    essentials: [
      "Le risque varie selon le contexte de travail.",
      "Une installation provisoire ou un milieu humide aggravent le danger.",
      "Batteries, photovoltaïque et automatismes imposent une vigilance spécifique.",
      "L’observation de l’environnement précède toute action.",
    ],
    references: [
      REG_REFERENCES.codeTravail,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "movement-tools",
    title: "Chapitre 9 — Déplacement, outillage et situations de travail",
    subtitle:
      "Identifier les situations courantes où un déplacement, un outil ou une manutention créent un risque électrique sans intervention directe",
    minSeconds: 210,
    image: "/elearning/h0b0/outillage-risque.png",
    imageAlt:
      "Illustration des déplacements, manutentions et outillages en environnement électrique",
    highlights: [
      "Un outil ou une manutention peuvent créer un risque même sans intention d’agir sur l’installation.",
      "Les objets longs, métalliques ou conducteurs exigent une vigilance renforcée.",
      "Le danger naît souvent d’une action banale réalisée au mauvais endroit.",
    ],
    content: [
      "En environnement électrique, le risque ne provient pas uniquement d’une action directe sur une installation. Il peut aussi résulter d’un déplacement, d’une manutention, de l’usage d’un outil ou d’un matériel inadapté à proximité d’une zone dangereuse.",
      "L’utilisation d’une échelle métallique, le transport d’un tube, d’une barre, d’un profilé, d’un outil long ou d’un matériel encombrant peut provoquer un rapprochement dangereux d’une partie sous tension ou le franchissement involontaire d’une limite de sécurité.",
      "Le nettoyage d’un local technique, l’usage d’un aspirateur, le passage d’une rallonge, la manutention d’un chariot, l’installation d’un escabeau ou le déplacement de matériel à proximité d’armoires, de coffrets ou de câbles exigent une analyse préalable de l’environnement.",
      "Un titulaire B0 / H0 / H0V ne doit jamais choisir seul d’adapter son outillage ou sa méthode si l’environnement devient douteux. Il doit s’arrêter dès qu’une manœuvre banale risque de le rapprocher d’une zone électrique dangereuse.",
      "Le danger apparaît souvent lorsque l’on veut gagner du temps, finir une tâche rapidement ou rendre service. Or une activité non électrique reste interdite dès lors qu’elle conduit à pénétrer dans une zone de risque ou à exposer une personne, un outil ou une charge à proximité d’éléments sous tension.",
      "La bonne pratique consiste à observer l’environnement, vérifier les cheminements, choisir un matériel adapté, respecter le balisage et interrompre toute action dès qu’un doute apparaît sur les distances ou sur la sécurité de la manœuvre.",
    ],
    essentials: [
      "Un objet long, métallique ou conducteur peut créer un risque majeur.",
      "Une tâche banale devient dangereuse si elle se déroule au mauvais endroit.",
      "On n’improvise jamais une adaptation d’outillage en zone à risque.",
      "En cas de doute sur un déplacement ou une manutention : arrêt immédiat.",
    ],
    references: [
      REG_REFERENCES.codeTravail,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "contacts",
    title: "Chapitre 10 — Contacts directs et indirects",
    subtitle:
      "Différencier les principaux mécanismes d’exposition et comprendre pourquoi un matériel apparemment banal peut devenir dangereux",
    minSeconds: 180,
    image: "/elearning/h0b0/electrisation-electrocution.png",
    imageAlt: "Illustration pedagogique du contact direct, du contact indirect et de leurs consequences",
    highlights: [
      "Le contact direct concerne une partie active normalement sous tension.",
      "Le contact indirect concerne une masse devenue dangereuse après défaut.",
      "Les deux situations peuvent entraîner des conséquences graves.",
    ],
    content: [
      "Le contact direct correspond au fait de toucher une partie active normalement sous tension : conducteur nu, borne accessible, pièce interne d’un coffret ouvert ou élément d’un tableau électrique non protégé.",
      "Le contact indirect correspond au fait de toucher une masse métallique devenue accidentellement sous tension à la suite d’un défaut d’isolement : carcasse de machine, enveloppe métallique, coffret, châssis ou appareil présentant un défaut interne.",
      "Le contact indirect est souvent plus trompeur, car l’équipement peut sembler normal visuellement alors qu’il est devenu dangereux. C’est pourquoi les installations reposent sur l’isolement, la mise à la terre, les protections différentielles et les enveloppes pour limiter ce risque.",
      "Dans les deux cas, le passage du courant dans le corps peut produire douleur, contraction musculaire, impossibilité de lâcher, brûlures, troubles respiratoires, fibrillation cardiaque ou décès.",
      "Le titulaire B0 / H0 / H0V doit retenir qu’un danger électrique n’est pas toujours visible et qu’une partie métallique ou un appareil fermé peuvent devenir dangereux en présence d’un défaut.",
    ],
    essentials: [
      "Le contact direct concerne une partie active.",
      "Le contact indirect concerne une masse devenue sous tension.",
      "Un matériel d’apparence banale peut devenir dangereux en cas de défaut.",
    ],
    references: [
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.nfC15100,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "current-effects",
    title:
      "Chapitre 11 — Intensité du courant, durée d’exposition et dommages",
    subtitle:
      "Comprendre comment l’intensité, la durée de passage et le trajet du courant conditionnent la gravité des effets",
    minSeconds: 210,
    image: "/elearning/h0b0/intensites-effets.png",
    imageAlt:
      "Illustration pédagogique de la relation entre intensité du courant et dommages",
    highlights: [
      "Les effets dépendent de l’intensité, de la durée et du trajet du courant.",
      "Une durée d’exposition plus longue aggrave fortement les conséquences.",
      "Le trajet traversant le thorax est particulièrement dangereux.",
    ],
    content: [
      "Les effets du courant électrique sur le corps humain dépendent principalement de l’intensité du courant, de la durée d’exposition et du trajet du courant dans l’organisme.",
      "Dès quelques milliampères, le courant devient perceptible. Autour de 10 mA, il peut provoquer une contraction musculaire involontaire rendant le lâcher difficile. Entre 10 et 30 mA, la tétanisation devient possible. Au-delà de 30 mA, des troubles respiratoires peuvent apparaître. Vers 75 à 100 mA, le risque de fibrillation cardiaque devient majeur.",
      "La durée de passage joue un rôle aggravant essentiel. Plus le contact est long, plus le risque de lésions graves augmente. Le trajet du courant est également déterminant, notamment lorsqu’il passe entre les membres supérieurs ou traverse le thorax.",
      "Le danger n’est donc jamais lié à une seule valeur abstraite de tension. Il résulte d’une combinaison de paramètres physiques et de conditions réelles d’exposition.",
      "Toute exposition électrique doit être considérée comme potentiellement grave, même lorsque les signes apparents semblent limités.",
    ],
    essentials: [
      "Intensité, durée et trajet conditionnent la gravité.",
      "La tétanisation peut empêcher le lâcher.",
      "Le risque cardiaque devient majeur lorsque le courant traverse le thorax.",
    ],
    references: [
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.nfC15100,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "electrisation",
    title: "Chapitre 12 — Électrisation et électrocution",
    subtitle:
      "Distinguer le passage du courant dans le corps et l’issue mortelle, et comprendre pourquoi toute électrisation est grave",
    minSeconds: 150,
    image: "/elearning/h0b0/electrisation-electrocution.png",
    imageAlt:
      "Illustration pédagogique de l’électrisation et de l’électrocution",
    highlights: [
      "L’électrisation correspond au passage du courant dans le corps.",
      "L’électrocution correspond à une électrisation mortelle.",
      "Toute électrisation impose une réaction sérieuse et méthodique.",
    ],
    content: [
      "L’électrisation désigne le passage du courant électrique dans le corps humain. Elle peut provoquer des brûlures, des contractions musculaires, des troubles cardiaques, respiratoires ou neurologiques, ainsi que des lésions internes parfois retardées.",
      "L’électrocution désigne une électrisation mortelle, généralement à la suite d’une fibrillation cardiaque, d’un arrêt respiratoire ou d’un traumatisme grave lié au passage du courant.",
      "L’absence de perte de connaissance immédiate ne signifie pas absence de gravité. Des complications peuvent apparaître secondairement, ce qui justifie une prise en charge médicale après toute électrisation.",
      "Le danger est particulièrement élevé lorsque le courant traverse le thorax, le cœur ou le système nerveux central. Les conditions de contact, l’humidité, le temps de passage et l’état du matériel aggravent le risque.",
      "Le message opérationnel est simple : toute électrisation doit être prise au sérieux, sans minimisation.",
    ],
    essentials: [
      "Électrisation = passage du courant dans le corps.",
      "Électrocution = électrisation mortelle.",
      "Toute électrisation nécessite une réaction rapide et sérieuse.",
    ],
    references: [REG_REFERENCES.nfC18510, REG_REFERENCES.inrs],
  },
  {
    key: "body-resistance",
    title:
      "Chapitre 13 — Résistance du corps humain, peau sèche ou humide",
    subtitle:
      "Comprendre l’influence de l’état du corps, du milieu et de l’humidité sur le niveau réel de danger",
    minSeconds: 180,
    image: "/elearning/h0b0/milieu-sec-humide.png",
    imageAlt:
      "Illustration de l’influence du milieu sec ou humide sur le risque électrique",
    highlights: [
      "La résistance du corps humain n’est pas constante.",
      "L’humidité réduit fortement cette résistance.",
      "Le milieu conducteur augmente le risque d’électrisation.",
    ],
    content: [
      "La résistance du corps humain au passage du courant n’est pas constante. Elle dépend de l’état de la peau, de l’humidité, de la sueur, de la présence de blessures, de la pression de contact, de la surface touchée ainsi que de la nature du sol et de l’environnement.",
      "En conditions sèches, la résistance du corps humain peut atteindre plusieurs milliers d’ohms, généralement de l’ordre de 1 000 à 10 000 Ω. À l’inverse, en milieu humide ou avec une peau mouillée, cette résistance chute fortement et peut descendre en dessous de 1 000 Ω, voire quelques centaines d’ohms.",
      "Cette diminution de résistance augmente le courant traversant le corps pour une même tension. La gravité des effets physiologiques s’en trouve fortement accrue.",
      "Les environnements humides ou conducteurs, tels que les zones de nettoyage, les chantiers extérieurs, les ateliers avec structures métalliques ou les sols mouillés, favorisent le passage du courant et aggravent significativement le risque.",
      "Ainsi, un même contact électrique n’a pas les mêmes conséquences dans un environnement sec et isolant que dans un milieu humide ou conducteur.",
      "Le titulaire B0 / H0 / H0V doit intégrer que le milieu fait partie intégrante du risque et qu’un environnement dégradé impose une vigilance renforcée et une stricte limitation des actions.",
    ],
    essentials: [
      "La résistance du corps varie selon l’état de la peau et du milieu.",
      "L’humidité favorise le passage du courant.",
      "Un milieu conducteur augmente fortement le danger.",
    ],
    references: [
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.nfC15100,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "equipment",
    title: "Chapitre 14 — Matériels défectueux et signaux d’alerte",
    subtitle:
      "Reconnaître rapidement un matériel dangereux et adopter la bonne réaction sans bricolage ni improvisation",
    minSeconds: 180,
    image: "/elearning/h0b0/materiel-defectueux.png",
    imageAlt:
      "Illustration de matériels, câbles et équipements électriques défectueux",
    highlights: [
      "Une anomalie visible est déjà un motif d’arrêt.",
      "Échauffement, fumée, déclenchements répétés ou gaine abîmée doivent alerter immédiatement.",
      "Le titulaire B0 / H0 / H0V ne doit jamais réparer ni remettre en service un matériel défectueux.",
    ],
    content: [
      "Un matériel électrique défectueux peut devenir dangereux même sans pièce nue visible. Une gaine abîmée, une prise fissurée, un câble écrasé, une odeur anormale, un échauffement, de la fumée, des étincelles ou des déclenchements répétés constituent des signaux d’alerte.",
      "Ces anomalies peuvent traduire un défaut d’isolement, un serrage défectueux, un échauffement interne, une surcharge, un vieillissement ou une dégradation mécanique.",
      "Le risque peut prendre la forme d’un contact indirect, d’un arc interne, d’un départ de feu ou d’une mise sous tension accidentelle d’une masse métallique.",
      "Le titulaire B0 / H0 / H0V ne doit ni réparer, ni réenclencher à répétition, ni bricoler, ni ouvrir pour “voir ce qu’il y a”. La bonne réaction consiste à arrêter l’usage, empêcher la réutilisation si nécessaire, sécuriser la zone et signaler immédiatement.",
      "Dans un contexte professionnel, ces situations sont fréquemment rencontrées sur les chantiers, dans les zones logistiques ou dans les ateliers. Le réflexe attendu n’est jamais de réparer ou d’adapter le matériel, mais d’isoler la situation et de la signaler.",
      "En matière de prévention, voir un écart constitue déjà une raison valable de stopper l’action.",
    ],
    essentials: [
      "Une anomalie visible est un signal d’alerte.",
      "Un matériel défectueux ne doit jamais être remis en service par un titulaire non électricien.",
      "Réaction attendue : arrêt, mise en sécurité, signalement.",
    ],
    references: [
      REG_REFERENCES.codeTravail,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.nfC15100,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "ppe",
    title:
      "Chapitre 15 — Équipements de protection collective et individuelle",
    subtitle:
      "Identifier les protections qui réduisent le risque et comprendre leur hiérarchie dans la prévention",
    minSeconds: 180,
    image: "/elearning/h0b0/epi-epc.png",
    imageAlt:
      "Illustration des equipements de protection collective et individuelle avec priorite a la protection collective",
    highlights: [
      "La protection collective est prioritaire sur la protection individuelle.",
      "Les EPI viennent en complément et ne rendent jamais licite une opération interdite.",
      "Une protection déposée, absente ou neutralisée constitue un signal d’alerte immédiat.",
    ],
    content: [
      "La prévention du risque électrique repose d’abord sur les mesures de protection collective. Il s’agit notamment des enveloppes fermées, capotages, écrans, obstacles, séparations physiques, balisages, signalisations, verrouillages d’accès et dispositifs empêchant l’exposition ou limitant l’approche du danger.",
      "Ces protections collectives sont prioritaires car elles agissent à la source ou sur l’environnement de travail et protègent simultanément plusieurs personnes. Leur présence ne doit jamais être banalisée, déplacée ou neutralisée pour des raisons de confort, de rapidité ou d’habitude.",
      "Les équipements de protection individuelle interviennent en complément lorsque l’analyse de risque, l’organisation de l’activité ou une situation particulière le justifient. Ils peuvent comprendre, selon les cas prévus par l’entreprise, des équipements adaptés de protection des mains, du visage, du corps ou des pieds.",
      "Dans une logique B0 / H0 / H0V, il faut être très clair : le port d’un EPI ne transforme jamais une opération interdite en opération autorisée. Un titulaire non électricien ne devient pas autorisé à ouvrir une enveloppe, à intervenir sur un matériel ou à s’approcher d’une zone interdite au motif qu’il porte une protection individuelle.",
      "Le rôle attendu du titulaire est d’identifier les protections en place, de comprendre leur fonction, de les respecter, de ne pas les détériorer et de signaler immédiatement toute protection absente, déposée, contournée ou manifestement dégradée.",
      "La hiérarchie des mesures de prévention doit être retenue sans ambiguïté : organisation et consignes, protections collectives, protections individuelles en complément, puis comportement rigoureux de l’opérateur. Dans le doute, l’arrêt de l’action reste la règle.",
    ],
    essentials: [
      "EPC d’abord : enveloppes, obstacles, écrans, balisage, verrouillage.",
      "EPI ensuite, uniquement en complément.",
      "Le port d’un EPI n’autorise jamais une action électrique.",
      "Toute protection absente, déplacée ou dégradée doit être signalée.",
    ],
    references: [REG_REFERENCES.nfC18510, REG_REFERENCES.inrs],
  },
  {
    key: "authorized-forbidden",
    title: "Chapitre 16 — Comportements autorisés et interdits",
    subtitle:
      "Savoir précisément ce qu’un titulaire B0 / H0 / H0V peut faire, ne peut pas faire, et doit immédiatement signaler",
    minSeconds: 240,
    image: "/elearning/h0b0/autorise-interdit.png",
    imageAlt:
      "Illustration des comportements autorisés et interdits en B0 H0 H0V",
    highlights: [
      "Le B0 / H0 / H0V n’autorise aucune opération d’ordre électrique.",
      "Respecter ses limites est une compétence professionnelle de sécurité.",
      "Toute situation anormale doit être signalée sans improvisation.",
    ],
    content: [
      "L’habilitation B0 / H0 / H0V autorise exclusivement des opérations d’ordre non électrique réalisées dans un environnement où existe un risque électrique. Elle ne permet jamais d’intervenir sur l’installation électrique elle-même, même pour une action présentée comme rapide, simple ou de dépannage.",
      "Sont notamment interdits : ouvrir une armoire ou un coffret électrique, déposer un capot, accéder à des bornes ou conducteurs, remplacer un appareillage, raccorder ou débrancher un élément d’installation, intervenir sur un câble, rechercher un défaut, effectuer une mesure, réarmer techniquement un dispositif ou remettre en service un matériel après anomalie.",
      "Sont également interdits les comportements consistant à contourner un balisage, entrer dans un local réservé sans cadre prévu, utiliser une échelle métallique à proximité d’une zone dangereuse sans maîtrise du risque, manipuler une prise ou un câble dégradé, ou chercher à apprécier seul si une distance reste acceptable.",
      "Les comportements autorisés relèvent d’une logique d’observation, de respect des consignes et de maintien dans le périmètre prévu : circuler sur les cheminements autorisés, réaliser sa tâche non électrique dans les limites définies, respecter la signalisation, signaler une anomalie, s’arrêter si les protections ne sont plus conformes ou si l’environnement devient douteux.",
      "Les situations les plus accidentogènes surviennent souvent lorsqu’un salarié souhaite dépanner rapidement un équipement, réarmer un disjoncteur ou rendre service. Ces comportements doivent être strictement évités car ils sortent du périmètre d’un non-électricien habilité B0 / H0 / H0V.",
      "La règle professionnelle est stricte : ce qui n’est pas explicitement autorisé dans le cadre de la mission, de l’habilitation et des consignes doit être considéré comme interdit ou doit faire l’objet d’une vérification préalable auprès d’une personne compétente.",
    ],
    essentials: [
      "Le B0 / H0 / H0V autorise des opérations d’ordre non électrique uniquement.",
      "Ouvrir, mesurer, dépanner, raccorder ou modifier est interdit.",
      "Le respect du périmètre fait partie de la compétence sécurité attendue.",
      "En cas de doute : arrêt, mise à distance, signalement.",
    ],
    references: [
      REG_REFERENCES.r4544_9,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "conduct",
    title:
      "Chapitre 17 — Conduite à tenir en cas d’anomalie, d’électrisation ou de départ de feu",
    subtitle:
      "Réagir avec méthode, éviter le suraccident et appliquer la bonne séquence de protection et d’alerte",
    minSeconds: 240,
    image: "/elearning/h0b0/conduite-tenir.png",
    imageAlt:
      "Illustration de la conduite à tenir en cas d’anomalie ou d’accident électrique",
    highlights: [
      "La priorité est de se protéger avant toute autre action.",
      "Il ne faut jamais improviser face à une anomalie électrique.",
      "En présence d’une victime, il faut éviter de devenir soi-même une seconde victime.",
    ],
    content: [
      "En cas d’anomalie électrique, la réaction doit être immédiate : arrêter l’activité en cours, s’écarter du danger et alerter. Une anomalie peut se manifester par une odeur anormale, un échauffement, de la fumée, un bruit inhabituel, des étincelles, un câble dégradé, un déclenchement répété ou un comportement anormal d’un équipement.",
      "Face à une situation dégradée, il est strictement interdit d’improviser une action sur l’installation. Le titulaire B0 / H0 / H0V ne doit ni intervenir, ni tenter de réparer, ni remettre en service un équipement électrique.",
      "En cas d’électrisation, il ne faut jamais toucher directement la victime tant que le risque électrique persiste. Le danger doit être supprimé en priorité, notamment par la coupure de l’alimentation via un organe identifié, uniquement si cette action peut être réalisée sans s’exposer.",
      "Une fois le risque maîtrisé, il convient de sécuriser la zone, d’alerter les secours, puis d’appliquer les gestes de premiers secours si l’on est formé. L’objectif est d’éviter tout suraccident.",
      "En cas de départ de feu d’origine électrique, il faut appliquer les consignes du site. Si les conditions le permettent, un moyen d’extinction adapté peut être utilisé selon l’organisation prévue. L’utilisation d’eau sur une installation sous tension est strictement interdite.",
      "Si le doute subsiste sur la mise hors tension, aucune action d’extinction ne doit être engagée. La priorité reste l’évacuation de la zone et l’alerte.",
      "La séquence d’action doit rester constante : STOP, PROTECTION, ALERTE, sans jamais improviser une action sur le risque électrique.",
    ],
    essentials: [
      "En cas d’anomalie : arrêt, mise en sécurité, alerte.",
      "Ne jamais toucher une victime tant que le danger persiste.",
      "Face à un feu d’origine électrique, appliquer les consignes du site sans improvisation.",
    ],
    references: [
      REG_REFERENCES.codeTravail,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "classes-materiels-ip",
    title: "Chapitre 18 — Classes des matériels et indices de protection IP",
    subtitle:
      "Reconnaître la classe d'un équipement électrique et lire un indice IP pour évaluer le risque et adopter le bon comportement",
    minSeconds: 240,
    image: "/elearning/bsbe/bsbe-classes-materiels.svg",
    imageAlt: "Tableau des 4 classes de matériels électriques — Classe 0, I, II, III",
    highlights: [
      "La classe 0 est interdite en milieu professionnel en France : signaler immédiatement.",
      "L'indice IP indique le niveau de protection contre les solides et les liquides.",
      "IP2X sur les parties actives est le seuil minimum en basse tension.",
    ],
    content: [
      "Les matériels électriques sont classés en quatre catégories selon leur niveau de protection intrinsèque contre le risque d'électrocution. Cette classification, définie par la norme NF EN 61140, est lisible sur la plaque signalétique ou dans la documentation du matériel.",
      "La classe 0 ne possède qu'une isolation principale, sans protection supplémentaire. Elle est interdite en milieu professionnel en France. Si un titulaire B0 / H0 rencontre un matériel classe 0 en service, il doit le signaler et ne pas l'utiliser.",
      "La classe I est la plus répandue dans les environnements professionnels. Elle combine une isolation principale et une mise à la terre de toutes les masses métalliques via un conducteur PE. Ces matériels utilisent une fiche 3 broches (la troisième broche assure la mise à la terre). En cas de défaut d'isolement, le courant est dévié vers la terre et le disjoncteur différentiel déclenche.",
      "La classe II dispose d'une double isolation ou d'une isolation renforcée. Elle ne nécessite pas de mise à la terre. Ces matériels portent le symbole d'un carré inscrit dans un autre carré (□□). Outils portatifs, appareils électroménagers courants, certains luminaires. Ne jamais tenter de brancher une prise de terre sur un matériel classe II : il n'est pas conçu pour.",
      "La classe III fonctionne sous très basse tension de sécurité (TBTS), soit 50 V alternatif maximum ou 120 V continu. Lampes LED 12 V, jouets, certains équipements médicaux. Le risque d'électrocution est intrinsèquement limité par la tension d'alimentation.",
      "L'indice de protection IP (norme NF EN 60529) indique à quel point un équipement est protégé contre la pénétration de corps étrangers solides (premier chiffre, de 0 à 6) et de liquides (second chiffre, de 0 à 8). Une lettre additionnelle optionnelle précise la protection des personnes contre l'accès aux parties dangereuses.",
      "Pour le titulaire B0 / H0, la lecture de l'indice IP sert principalement à évaluer si l'enveloppe du matériel offre une protection suffisante : un IP2X ou IPXXB signifie qu'un doigt ne peut pas atteindre les parties actives. C'est le seuil minimum requis en basse tension. En dessous de ce seuil, le risque de contact direct existe dès que l'enveloppe est approchée.",
      "En pratique, le titulaire B0 / H0 n'intervient jamais sur l'installation. Mais connaître ces notions lui permet de comprendre pourquoi certaines enveloppes doivent rester fermées, pourquoi une armoire dégradée ou ouverte devient immédiatement dangereuse, et pourquoi le choix de l'emplacement d'un matériel (intérieur sec, extérieur exposé) est régi par des règles précises.",
    ],
    essentials: [
      "Classe 0 : isolation simple uniquement — INTERDITE en milieu professionnel.",
      "Classe I : isolation + mise à la terre (prise 3 broches) — la plus courante.",
      "Classe II : double isolation, symbole □□ — pas de mise à la terre.",
      "Classe III : TBTS ≤ 50 V AC — tension intrinsèquement sûre.",
      "IP 1er chiffre = corps solides, 2e chiffre = liquides.",
      "IP2X = doigt ne peut pas atteindre les parties actives — seuil minimal BT.",
      "Enveloppe ouverte ou dégradée = perte de la protection IP → danger immédiat.",
    ],
    references: [
      { label: "NF EN 61140 — classification des classes de protection des matériels électriques" },
      { label: "NF EN 60529 — degrés de protection IP" },
      { label: "NF C 18-510 — conditions d'accès et de protection en présence du risque électrique" },
    ],
  },

  {
    key: "summary",
    title: "Chapitre 19 — Synthèse opérationnelle",
    subtitle:
      "Consolider les réflexes essentiels avant l’évaluation finale et fixer les règles à retenir durablement",
    minSeconds: 180,
    image: "/elearning/h0b0/reflexes-h0b0.png",
    imageAlt: "Illustration de synthèse des réflexes B0 H0 H0V",
    highlights: [
      "L’habilitation est délivrée par l’employeur, pas par la formation seule.",
      "Le B0 / H0 / H0V concerne uniquement les opérations d’ordre non électrique.",
      "Observer, respecter, ne pas improviser et alerter sont les réflexes fondamentaux.",
    ],
    content: [
      "Le B0 / H0 / H0V concerne des opérations d’ordre non électrique réalisées dans un environnement où un risque électrique existe. Il ne permet jamais d’agir sur l’installation électrique elle-même.",
      "L’habilitation est délivrée par l’employeur après analyse des tâches confiées, des zones accessibles, des risques identifiés et des compétences détenues. La formation préalable ne vaut donc jamais habilitation à elle seule.",
      "La compréhension des domaines de tension, des zones d’environnement, des distances d’approche, des risques de contact direct et indirect, des effets du courant, de l’influence du milieu, du rôle des protections et des consignes du site constitue le socle minimal du titulaire B0 / H0 / H0V.",
      "Le danger électrique peut être visible ou invisible. Il peut résulter d’une pièce active accessible, d’une masse sous tension, d’un défaut d’isolement, d’un voisinage dangereux, d’une installation dégradée, d’un environnement humide ou d’un comportement inadapté.",
      "La distinction entre B0, H0 et H0V constitue un point clé à retenir. Le B0 concerne la basse tension, le H0 concerne la haute tension hors voisinage dangereux, et le H0V concerne la haute tension avec notion de voisinage. Cette distinction ne donne jamais le droit d’intervenir sur une installation, mais elle modifie le niveau d’exposition au risque.",
      "Les installations modernes peuvent intégrer à la fois du courant alternatif et du courant continu. La présence de batteries, de panneaux photovoltaïques, d’onduleurs ou d’équipements automatisés implique que le risque électrique peut persister même après une coupure partielle ou lorsqu’aucun réseau classique n’est visible.",
      "La règle opérationnelle finale est simple : observer l’environnement, reconnaître le risque, respecter les distances et les protections, rester strictement dans son périmètre, stopper en cas de doute et alerter immédiatement sans jamais improviser une action électrique.",
    ],
    essentials: [
      "Le B0 / H0 / H0V ne permet jamais d’intervenir sur l’installation électrique.",
      "Le niveau de risque dépend de la tension, du voisinage, de l’environnement et du comportement adopté.",
      "Les protections collectives et les consignes priment toujours.",
      "Le réflexe final est : observer, respecter, ne pas improviser, alerter.",
    ],
    references: [
      REG_REFERENCES.r4544_9,
      REG_REFERENCES.r4544_10,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.nfC15100,
      REG_REFERENCES.inrs,
    ],
  },
];

function formatSeconds(value: number) {
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function chapterProgressPercent(seconds: number, minSeconds: number) {
  if (!minSeconds || minSeconds <= 0) return 0;

  return Math.min(100, Math.round((seconds / minSeconds) * 100));
}

function buildModuleChapters(moduleData: ModuleContent): Chapter[] {
  return moduleData.sections.map((section, index) => {
    const normalizedSectionTitle = section.title.replace(/^\d+\.\s*/, "");

    const chapterContent = [
      ...(section.intro ? [section.intro] : []),
      ...(section.content ?? []),
      ...(section.deepDive ?? []),
      ...(section.practicalCase
        ? [`Cas pratique : ${section.practicalCase}`]
        : []),
    ];

    const highlights = [
      ...(section.keyPoints ?? []).slice(0, 3),
      ...(!section.keyPoints?.length && section.visual?.items?.length
        ? section.visual.items.slice(0, 3)
        : []),
    ];

    const essentials = [...(section.keyPoints ?? [])];

    const computedSeconds = Math.max(
      90,
      Math.min(240, 75 + chapterContent.length * 18 + essentials.length * 8)
    );

    const minSeconds =
      typeof section.estimatedMinutes === "number"
        ? Math.max(0, section.estimatedMinutes * 60)
        : computedSeconds;

    return {
      key: section.id,
      title: `Chapitre ${index + 1} - ${normalizedSectionTitle}`,
      subtitle: section.intro ?? moduleData.subtitle ?? moduleData.title,
      minSeconds,
      image: section.chapterImagePath ?? section.visual?.imagePath,
      imageAlt:
        section.chapterImageAlt ??
        section.visual?.imageAlt ??
        section.visual?.title ??
        section.title,
      highlights,
      content:
        chapterContent.length > 0
          ? chapterContent
          : ["Contenu à enrichir pour cette section."],
      essentials,
      references: (section.legalRefs ?? []).map((label) => ({ label })),
      resourceVideos: section.resourceVideos,
    };
  });
}

export default function CoursPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug ?? "";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressData, setProgressData] = useState<ChapterProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewerContext, setViewerContext] = useState<ModuleViewerContext>({
    isAdmin: false,
  });
  const [, setTick] = useState(0);

  const normalizedSlug = String(slug).toLowerCase();
  const canonicalSlug = resolveModuleSlug(normalizedSlug) ?? normalizedSlug;

  const currentModuleData = useMemo(() => {
    if (canonicalSlug === "h0b0") {
      return null;
    }

    return getModuleContentBySlug(canonicalSlug);
  }, [canonicalSlug]);

  const chapters = useMemo<Chapter[]>(() => {
    if (canonicalSlug === "h0b0") {
      return H0B0_CHAPTERS;
    }

    if (currentModuleData) {
      return buildModuleChapters(currentModuleData);
    }

    return [
      {
        key: "default-1",
        title: "Chapitre 1 — Introduction",
        subtitle: "Contenu à enrichir",
        minSeconds: 60,
        image: "/elearning/commun/risque-electrique.png",
        imageAlt: "Illustration de formation",
        highlights: ["Contenu à compléter."],
        content: ["Contenu à enrichir pour cette formation."],
        references: [REG_REFERENCES.nfC18510],
      },
    ];
  }, [canonicalSlug, currentModuleData]);

  const formationTitle = useMemo(
    () => getModuleLabelBySlug(canonicalSlug),
    [canonicalSlug]
  );

  const currentChapter = chapters[currentIndex] ?? chapters[0];
  const currentSectionVisual =
    currentModuleData?.sections[currentIndex]?.visual ?? null;

  const leadingParagraphs = currentChapter?.content?.slice(0, 4) ?? [];
  const bodyParagraphs = currentChapter?.content?.slice(4) ?? [];

  const formattedFormationTitle = formatFrenchDisplayText(formationTitle);
  const formattedCurrentTitle = formatFrenchDisplayText(currentChapter?.title);
  const formattedCurrentSubtitle = formatFrenchDisplayText(
    currentChapter?.subtitle
  );

  const formattedSectionVisual = currentSectionVisual
    ? {
        ...currentSectionVisual,
        title: formatFrenchDisplayText(currentSectionVisual.title),
        subtitle: formatFrenchDisplayText(currentSectionVisual.subtitle),
        imageAlt: formatFrenchDisplayText(
          currentSectionVisual.imageAlt ?? currentSectionVisual.title ?? ""
        ),
        items: (currentSectionVisual.items ?? []).map((item) =>
          formatFrenchDisplayText(item)
        ),
      }
    : null;

  const fallbackVisualBlock =
    !currentChapter.image && formattedSectionVisual
      ? {
          title:
            formattedSectionVisual.title ??
            formatFrenchDisplayText(currentChapter.title),
          subtitle:
            formattedSectionVisual.subtitle ??
            formatFrenchDisplayText(currentChapter.subtitle),
          items: formattedSectionVisual.items ?? [],
          tone: formattedSectionVisual.tone ?? "blue",
          imagePath: formattedSectionVisual.imagePath ?? "",
          imageAlt: formatFrenchDisplayText(
            formattedSectionVisual.imageAlt ?? currentChapter.title
          ),
        }
      : null;

  useEffect(() => {
    if (!canonicalSlug) return;

    const load = async () => {
      try {
        const res = await fetch(`/api/chapter-progress/${canonicalSlug}`, {
          cache: "no-store",
        });

        const data = await res.json();
        setProgressData(Array.isArray(data) ? data : []);
      } catch {
        setProgressData([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [canonicalSlug]);

  useEffect(() => {
    if (!canonicalSlug) return;

    const loadViewerContext = async () => {
      try {
        const response = await fetch(`/api/quiz/context/${canonicalSlug}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Impossible de charger le contexte du module");
        }

        const data = await response.json();

        setViewerContext({
          isAdmin: Boolean(data?.isAdmin),
        });
      } catch {
        setViewerContext({ isAdmin: false });
      }
    };

    loadViewerContext();
  }, [canonicalSlug]);

  const currentProgress = progressData.find(
    (item) => item.chapter_key === currentChapter?.key
  );

  const currentSeconds = currentProgress?.seconds_spent ?? 0;
  const currentCompleted = currentProgress?.is_completed ?? false;

  const currentPercent = chapterProgressPercent(
    currentSeconds,
    currentChapter?.minSeconds ?? 1
  );

  const remainingSeconds = Math.max(
    0,
    (currentChapter?.minSeconds ?? 0) - currentSeconds
  );

  const completedCount = chapters.filter((chapter) =>
    progressData.some(
      (item) => item.chapter_key === chapter.key && item.is_completed
    )
  ).length;

  const globalPercent =
    chapters.length > 0
      ? Math.round((completedCount / chapters.length) * 100)
      : 0;

  const isLastChapter = currentIndex === chapters.length - 1;

  const canGoNext =
    viewerContext.isAdmin ||
    currentCompleted ||
    currentSeconds >= (currentChapter?.minSeconds ?? 0);

  useEffect(() => {
    if (!canonicalSlug || !currentChapter) return;

    const saveInterval = setInterval(async () => {
      try {
        await fetch("/api/chapter-progress", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formation_slug: canonicalSlug,
            chapter_key: currentChapter.key,
            chapter_order: currentIndex + 1,
            seconds: 5,
            min_seconds_required: currentChapter.minSeconds,
          }),
        });

        const res = await fetch(`/api/chapter-progress/${canonicalSlug}`, {
          cache: "no-store",
        });

        const data = await res.json();
        setProgressData(Array.isArray(data) ? data : []);
      } catch {
        // Ne bloque pas l'utilisateur si la sauvegarde de progression échoue.
      }
    }, 5000);

    return () => clearInterval(saveInterval);
  }, [canonicalSlug, currentChapter, currentIndex]);

  useEffect(() => {
    const visualTick = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(visualTick);
  }, []);

  if (loading || !currentChapter) {
    return (
      <main className="min-h-screen bg-slate-100 px-4 py-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8 shadow-sm">
          Chargement du cours…
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-700">
              Formation {String(slug).toUpperCase()}
            </p>

            <h1 className="mt-3 text-2xl font-bold text-slate-900">
              {formattedFormationTitle}
            </h1>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Progression globale</span>
                <span className="font-semibold text-slate-900">
                  {globalPercent}%
                </span>
              </div>

              <div className="mt-3 h-3 w-full rounded-full bg-slate-200">
                <div
                  className="h-3 rounded-full bg-slate-900 transition-all duration-500"
                  style={{ width: `${globalPercent}%` }}
                />
              </div>

              <p className="mt-3 text-sm text-slate-600">
                {completedCount} chapitre(s) validé(s)
              </p>
            </div>

            <div className="mt-6 space-y-2">
              {chapters.map((chapter, index) => {
                const itemProgress = progressData.find(
                  (item) => item.chapter_key === chapter.key
                );

                const done = itemProgress?.is_completed ?? false;
                const itemSeconds = itemProgress?.seconds_spent ?? 0;
                const itemPercent = chapterProgressPercent(
                  itemSeconds,
                  chapter.minSeconds
                );

                const unlocked =
                  viewerContext.isAdmin ||
                  index === 0 ||
                  progressData.some(
                    (item) =>
                      item.chapter_key === chapters[index - 1]?.key &&
                      item.is_completed
                  ) ||
                  index <= currentIndex;

                const isCurrent = currentIndex === index;

                return (
                  <button
                    key={chapter.key}
                    type="button"
                    onClick={() => {
                      if (unlocked) setCurrentIndex(index);
                    }}
                    disabled={!unlocked}
                    aria-current={isCurrent ? "step" : undefined}
                    className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                      isCurrent
                        ? "border-slate-900 bg-slate-900 text-white"
                        : done
                          ? "border-green-200 bg-green-50 text-slate-800 hover:bg-green-100"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    } disabled:cursor-not-allowed disabled:opacity-40`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          {done ? (
                            <span
                              aria-hidden="true"
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                                isCurrent
                                  ? "bg-green-400 text-white"
                                  : "bg-green-600 text-white"
                              }`}
                            >
                              ✓
                            </span>
                          ) : (
                            <span
                              aria-hidden="true"
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                                isCurrent
                                  ? "bg-white/20 text-white"
                                  : "bg-slate-100 text-slate-500"
                              }`}
                            >
                              {index + 1}
                            </span>
                          )}
                          <p className="truncate text-sm font-semibold leading-5">
                            {formatFrenchDisplayText(chapter.title)}
                          </p>
                        </div>

                        <p
                          className={`mt-1.5 text-xs ${
                            isCurrent ? "text-slate-300" : "text-slate-500"
                          }`}
                        >
                          {done
                            ? "Chapitre validé"
                            : `Temps mini : ${formatSeconds(chapter.minSeconds)}`}
                        </p>

                        {!done && unlocked && itemPercent > 0 ? (
                          <div className="mt-2">
                            <div
                              className={`h-1.5 w-full rounded-full ${
                                isCurrent ? "bg-white/20" : "bg-slate-200"
                              }`}
                            >
                              <div
                                className={`h-1.5 rounded-full transition-all duration-500 ${
                                  isCurrent ? "bg-green-400" : "bg-emerald-500"
                                }`}
                                style={{ width: `${itemPercent}%` }}
                              />
                            </div>
                            <p
                              className={`mt-1 text-[10px] font-medium ${
                                isCurrent ? "text-slate-300" : "text-slate-400"
                              }`}
                            >
                              {itemPercent}% lu
                            </p>
                          </div>
                        ) : null}
                      </div>

                      {!done && !unlocked ? (
                        <span
                          aria-label="Chapitre verrouillé"
                          className="mt-0.5 shrink-0 text-slate-400"
                        >
                          🔒
                        </span>
                      ) : null}
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-red-800 px-6 py-6 text-white md:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                {formattedCurrentTitle}
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {formattedCurrentSubtitle}
              </h2>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                    Temps requis
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    {formatSeconds(currentChapter.minSeconds)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                    Temps validé
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    {formatSeconds(currentSeconds)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                    Décompte restant
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    {formatSeconds(remainingSeconds)}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-sm text-white/80">
                  <span>Validation du chapitre</span>
                  <span>{currentPercent}%</span>
                </div>

                <div className="h-3 w-full rounded-full bg-white/20">
                  <div
                    className="h-3 rounded-full bg-green-400 transition-all duration-500"
                    style={{ width: `${currentPercent}%` }}
                  />
                </div>
              </div>

              {viewerContext.isAdmin ? (
                <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white/90 backdrop-blur">
                  Mode admin : navigation libre entre les chapitres pour
                  vérification du parcours.
                </div>
              ) : null}
            </div>

            <div className="px-6 py-6 md:px-8">
              {leadingParagraphs.length > 0 ? (
                <div className="mb-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Lecture du chapitre
                  </p>

                  <div className="mt-3 space-y-4 text-[15px] leading-8 text-slate-700">
                    {leadingParagraphs.map((paragraph, index) => (
                      <p key={`${currentChapter.key}-lead-${index}`}>
                        {formatFrenchDisplayText(paragraph)}
                      </p>
                    ))}
                  </div>
                </div>
              ) : null}

              {(currentChapter.resourceVideos ?? []).length > 0 ? (
                <div className="mb-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Ressources vidéo
                  </p>

                  <div className="mt-4 grid gap-5">
                    {(currentChapter.resourceVideos ?? []).map(
                      (video, index) => (
                        <article
                          key={`${currentChapter.key}-video-${index}`}
                          className="rounded-[1.25rem] border border-slate-200 bg-white p-5"
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                            {video.provider ?? "Vidéo pédagogique"}
                          </p>

                          <h3 className="mt-3 text-lg font-bold text-slate-900">
                            {formatFrenchDisplayText(video.title)}
                          </h3>

                          {video.description ? (
                            <p className="mt-3 text-sm leading-7 text-slate-600">
                              {formatFrenchDisplayText(video.description)}
                            </p>
                          ) : null}

                          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm leading-6 text-slate-700">
                              Cliquez sur le bouton ci-dessous pour ouvrir la
                              vidéo dans un nouvel onglet.
                            </p>

                            <a
                              href={video.url}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-4 inline-flex rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                            >
                              {video.ctaLabel ?? "Voir la vidéo"}
                            </a>
                          </div>
                        </article>
                      )
                    )}
                  </div>
                </div>
              ) : null}

              {currentChapter.image ? (
                <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="relative mx-auto h-[520px] w-full max-w-5xl overflow-hidden rounded-2xl">
                    <Image
                      src={currentChapter.image}
                      alt={currentChapter.imageAlt ?? currentChapter.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 960px"
                      unoptimized={currentChapter.image.toLowerCase().endsWith(".svg")}
                    />
                  </div>
                </div>
              ) : null}

              {formattedSectionVisual?.animationKey ? (
                <div className="mb-6">
                  <VisualBlock visual={formattedSectionVisual} />
                </div>
              ) : !currentChapter.image && fallbackVisualBlock ? (
                <div className="mb-6">
                  <VisualBlock visual={fallbackVisualBlock} />
                </div>
              ) : null}

              {currentChapter.highlights?.length ? (
                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {currentChapter.highlights.map((item, index) => (
                    <div
                      key={`${currentChapter.key}-highlight-${index}`}
                      className="rounded-2xl border border-red-100 bg-red-50 p-4"
                    >
                      <p className="text-sm font-semibold text-slate-900">
                        Point clé {index + 1}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {formatFrenchDisplayText(item)}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-8 space-y-5 text-[15px] leading-8 text-slate-700">
                {bodyParagraphs.map((paragraph, index) => (
                  <p key={`${currentChapter.key}-content-${index}`}>
                    {formatFrenchDisplayText(paragraph)}
                  </p>
                ))}
              </div>

              {(currentChapter.essentials ?? []).length > 0 ? (
                <div className="mt-8 rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
                    Rappel de l’essentiel
                  </p>

                  <div className="mt-4 space-y-3">
                    {(currentChapter.essentials ?? []).map((item, index) => (
                      <div
                        key={`${currentChapter.key}-essential-${index}`}
                        className="rounded-xl border border-amber-100 bg-white p-4"
                      >
                        <p className="text-sm leading-6 text-slate-700">
                          {formatFrenchDisplayText(item)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {(currentChapter.references ?? []).length > 0 ? (
                <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Références réglementaires et normatives
                  </p>

                  <div className="mt-4 space-y-3">
                    {(currentChapter.references ?? []).map((ref, index) => (
                      <div
                        key={`${currentChapter.key}-ref-${index}`}
                        className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                      >
                        <p className="text-sm leading-6 text-slate-700">
                          {formatFrenchDisplayText(ref.label)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Décompte visuel en direct
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      Temps minimum
                    </p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">
                      {formatSeconds(currentChapter.minSeconds)}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      Temps acquis
                    </p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">
                      {formatSeconds(currentSeconds)}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      Temps restant
                    </p>
                    <p className="mt-2 text-2xl font-bold text-red-700">
                      {formatSeconds(remainingSeconds)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex((prev) => Math.max(0, prev - 1))
                  }
                  disabled={currentIndex === 0}
                  className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Chapitre précédent
                </button>

                {!isLastChapter ? (
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((prev) => prev + 1)}
                    disabled={!canGoNext}
                    className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Chapitre suivant
                  </button>
                ) : (
                  <Link
                    href={`/modules/${canonicalSlug}/quiz`}
                    className={`rounded-xl px-5 py-3 text-sm font-semibold text-white transition ${
                      viewerContext.isAdmin || globalPercent === 100
                        ? "bg-green-600 hover:opacity-90"
                        : "pointer-events-none bg-slate-400"
                    }`}
                  >
                    Accéder au quiz
                  </Link>
                )}
              </div>

              {!canGoNext && !isLastChapter ? (
                <p className="mt-4 text-sm font-medium text-amber-700">
                  Vous devez encore patienter {formatSeconds(remainingSeconds)}{" "}
                  sur ce chapitre avant d’accéder au suivant.
                </p>
              ) : null}

              {isLastChapter && globalPercent < 100 && !viewerContext.isAdmin ? (
                <p className="mt-4 text-sm font-medium text-amber-700">
                  Le quiz sera débloqué lorsque tous les chapitres auront été
                  validés.
                </p>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}