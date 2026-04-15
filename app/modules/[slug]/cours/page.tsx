"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

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
};

type ChapterProgress = {
  chapter_key: string;
  seconds_spent: number;
  min_seconds_required: number;
  is_completed: boolean;
};

const REG_REFERENCES = {
  codeTravail: {
    label:
      "Code du travail — dispositions relatives aux opérations sur les installations électriques ou dans leur voisinage",
  },
  r4544_9: {
    label:
      "Code du travail — article R.4544-9 : les opérations sur les installations électriques ou dans leur voisinage ne peuvent être effectuées que par des travailleurs habilités",
  },
  r4544_10: {
    label:
      "Code du travail — article R.4544-10 : formation théorique et pratique, délivrance de l’habilitation par l’employeur, maintien et renouvellement",
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
      "INRS — habilitation électrique, prévention du risque électrique et maintien des compétences",
  },
};

const H0B0_CHAPTERS: Chapter[] = [
  {
    key: "intro",
    title: "Chapitre 1 — Cadre du H0B0 et logique de l’habilitation",
    subtitle:
      "Comprendre le périmètre du H0B0, la place de la formation et le rôle de l’employeur dans la prévention du risque électrique",
    minSeconds: 120,
    image: "/elearning/h0b0/armoire-electrique.png",
    imageAlt: "Illustration du périmètre H0B0 et des limites d’intervention",
    highlights: [
      "Le H0B0 vise exclusivement des opérations d’ordre non électrique.",
      "La formation préalable ne vaut jamais habilitation à elle seule.",
      "L’habilitation est délivrée par l’employeur après analyse du poste, des risques et des compétences.",
    ],
    content: [
      "L’habilitation électrique est une reconnaissance formalisée par l’employeur de la capacité d’un travailleur à accomplir en sécurité les opérations qui lui sont confiées dans un environnement présentant un risque électrique. Elle s’inscrit dans le cadre du Code du travail et de la norme NF C 18-510.",
      "Le symbole H0B0 concerne des opérations d’ordre non électrique. Il ne permet ni intervention électrique, ni consignation, ni mesurage, ni vérification, ni ouverture d’enveloppe pour agir sur l’installation, ni modification d’un appareil électrique.",
      "La formation préalable constitue un prérequis indispensable, mais elle ne vaut pas habilitation à elle seule. L’employeur doit vérifier l’adéquation entre le symbole délivré, le poste occupé, les conditions réelles de travail, les zones fréquentées et les risques effectivement rencontrés.",
      "L’article R.4544-9 du Code du travail impose que les opérations sur les installations électriques ou dans leur voisinage soient confiées à des travailleurs habilités lorsque la réglementation le requiert. L’article R.4544-10 précise la nécessité d’une formation théorique et pratique adaptée ainsi que le maintien des compétences.",
      "Le H0B0 s’adresse donc à des personnels non électriciens amenés à circuler, nettoyer, manutentionner, peindre, exploiter, surveiller ou réaliser d’autres tâches non électriques dans un environnement où existe un risque électrique, sans jamais sortir de leur périmètre autorisé.",
    ],
    essentials: [
      "H0B0 = opérations d’ordre non électrique uniquement.",
      "La formation ne vaut pas habilitation.",
      "L’employeur délivre l’habilitation selon le poste et les risques.",
      "Le respect du périmètre constitue la règle de base.",
    ],
    references: [
      REG_REFERENCES.codeTravail,
      REG_REFERENCES.r4544_9,
      REG_REFERENCES.r4544_10,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "symbols",
    title: "Chapitre 2 — Symboles d’habilitation électrique",
    subtitle:
      "Lire correctement les symboles pour comprendre ce qu’ils autorisent réellement et ce qu’ils n’autorisent pas",
    minSeconds: 120,
    image: "/elearning/h0b0/symboles-habilitation.png",
    imageAlt: "Illustration pédagogique des symboles d’habilitation électrique",
    highlights: [
      "B = basse tension, H = haute tension.",
      "0 = opérations d’ordre non électrique.",
      "Un symbole d’habilitation ne doit jamais être interprété au-delà de son périmètre réel.",
    ],
    content: [
  "Les symboles d’habilitation électrique sont construits de manière logique et doivent être lus caractère par caractère. Chaque élément du symbole a une signification précise qui ne doit jamais être interprétée de manière approximative.",

  "La lettre indique le domaine de tension : B signifie basse tension (BT) et H signifie haute tension (HT). Cette distinction est essentielle car elle conditionne le niveau de danger, les distances de sécurité et les règles d’accès.",

  "Le chiffre 0 désigne les opérations d’ordre non électrique. Cela signifie que le titulaire n’est pas autorisé à intervenir sur l’installation électrique, ni à réaliser de dépannage, de consignation, de mesurage, ni à ouvrir un équipement pour agir sur des parties électriques.",

  "La lettre V signifie voisinage. Elle indique que l’opérateur est amené à évoluer dans une zone où le risque électrique existe du fait de la proximité d’éléments sous tension. En haute tension, ce voisinage est particulièrement critique car un amorçage électrique peut se produire sans contact direct.",

  "Ainsi, le symbole B0 correspond à des opérations d’ordre non électrique en basse tension. Le symbole H0 correspond à des opérations d’ordre non électrique en environnement haute tension, hors zone de voisinage dangereux. Le symbole H0V correspond à des opérations d’ordre non électrique réalisées au voisinage d’installations haute tension.",

  "Le symbole H0V ne donne aucun droit supplémentaire sur l’installation électrique. Il traduit uniquement une situation de travail plus exposée nécessitant une vigilance renforcée et un respect strict des distances de sécurité définies par la norme NF C 18-510.",

  "Un symbole d’habilitation n’est jamais une autorisation générale. Il doit toujours être rapproché des tâches confiées, des zones accessibles, des consignes du site, du balisage, des protections en place et de l’analyse de risque.",

  "La compréhension exacte des symboles permet d’éviter les dérives fréquentes consistant à croire qu’un accès, une proximité ou une contrainte opérationnelle donnent le droit d’ouvrir, de réarmer, de déplacer ou de modifier un équipement électrique.",

  "Une erreur fréquente consiste à considérer le H0V comme une habilitation plus 'élevée'. Ce n’est pas le cas. Il s’agit uniquement d’une situation de travail différente, plus exposée, qui impose une discipline renforcée, sans jamais autoriser une intervention électrique."
],
    essentials: [
  "B = basse tension, H = haute tension.",
  "0 = opérations d’ordre non électrique (aucune action sur l’installation).",
  "V = voisinage : présence dans une zone où le risque existe sans contact direct.",
  "H0 = environnement haute tension hors voisinage dangereux.",
  "H0V = environnement haute tension avec contrainte de voisinage (vigilance renforcée).",
  "Le symbole ne donne jamais le droit d’intervenir sur l’installation électrique.",
  "H0V n’est pas une habilitation supérieure : il signale une situation plus exposée.",
],
    references: [
      REG_REFERENCES.r4544_9,
      REG_REFERENCES.r4544_10,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "roles",
    title: "Chapitre 3 — Rôles et responsabilités",
    subtitle:
      "Identifier qui fait quoi dans la prévention du risque électrique et comprendre la chaîne de responsabilité",
    minSeconds: 120,
    image: "/elearning/h0b0/roles-responsabilites.png",
    imageAlt: "Illustration des rôles et responsabilités en habilitation électrique",
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
      "La sécurité ne repose donc pas sur une simple connaissance individuelle. Elle résulte d’une articulation entre réglementation, organisation, supervision, compétences et comportement professionnel.",
    ],
    essentials: [
      "L’employeur délivre l’habilitation.",
      "L’encadrement doit contrôler l’adéquation mission/habilitation.",
      "Le salarié doit rester dans son périmètre et signaler les anomalies.",
    ],
    references: [
      REG_REFERENCES.codeTravail,
      REG_REFERENCES.r4544_10,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "voltage-domains",
    title: "Chapitre 4 — Domaines de tension en BT et HT",
    subtitle:
      "Distinguer les domaines de tension et comprendre leur impact sur le niveau de danger, l’accès et les mesures de prévention",
    minSeconds: 120,
    image: "/elearning/h0b0/domaines-tension.png",
    imageAlt: "Illustration pédagogique des domaines de tension BT et HT",
    highlights: [
      "Le domaine de tension conditionne les distances, les protections et les règles d’accès.",
      "En HT, le risque d’arc s’ajoute au risque de contact.",
      "Une mauvaise appréciation du domaine de tension augmente fortement le danger.",
    ],
    content: [
  "La norme NF C 18-510 distingue les domaines de tension afin de qualifier le niveau de danger et d’adapter les mesures de prévention. En courant alternatif, la très basse tension est inférieure ou égale à 50 V, la basse tension est supérieure à 50 V et inférieure ou égale à 1 000 V, et la haute tension est supérieure à 1 000 V.",
  "En courant continu, la très basse tension est inférieure ou égale à 120 V, la basse tension est supérieure à 120 V et inférieure ou égale à 1 500 V, et la haute tension est supérieure à 1 500 V.",
  "Cette distinction conditionne les règles d’accès, les distances de voisinage, les protections à mettre en place, les procédures applicables et le niveau d’habilitation requis. Elle ne constitue donc pas une simple classification théorique.",
  "En basse tension, le risque principal est le contact direct avec une partie active normalement sous tension ou le contact indirect avec une masse métallique devenue dangereuse à la suite d’un défaut d’isolement. En haute tension, il faut intégrer en plus le risque d’amorçage et d’arc électrique, qui peut se produire sans contact direct.",
  "Le danger ne dépend pas uniquement de la valeur de la tension. Il dépend aussi de la durée d’exposition, du trajet du courant dans le corps, de l’état du matériel, de l’environnement, du niveau d’humidité et des protections présentes ou absentes.",
  "Dans un parcours H0B0, il n’est pas demandé de manipuler ces domaines comme un électricien, mais il est indispensable de savoir les reconnaître, d’en comprendre les conséquences sur le niveau de danger et de ne jamais banaliser la présence d’une installation électrique sous prétexte qu’elle semble fermée ou éloignée.",
  "Reconnaître si une zone relève de la BT ou de la HT est donc une compétence de prévention. En cas de doute sur le domaine de tension ou sur les limites d’accès, la bonne conduite consiste à s’arrêter, ne pas s’engager et demander l’avis d’une personne compétente."
],
    essentials: [
      "Le domaine de tension conditionne le niveau de risque.",
      "BT et HT n’impliquent pas les mêmes distances ni les mêmes règles.",
      "En HT, le danger existe même sans contact direct.",
    ],
    references: [
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.nfC15100,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "zones",
    title: "Chapitre 5 — Zones d’environnement électrique et distances d’approche",
    subtitle:
      "Identifier les zones à risque, comprendre la notion de voisinage et respecter strictement les limites d’approche",
    minSeconds: 150,
    image: "/elearning/h0b0/zones-approche.png",
    imageAlt: "Illustration des zones d’environnement électrique et distances d’approche",
    highlights: [
      "Le danger commence avant le contact.",
      "Le voisinage d’une pièce nue sous tension constitue déjà un risque.",
      "Le balisage, les obstacles et les distances doivent être respectés sans exception.",
    ],
   content: [
  "La norme NF C 18-510 structure la prévention autour de zones d’environnement électrique définies par des distances de sécurité autour des pièces nues sous tension. Ces zones permettent de prévenir le risque de contact direct et, en haute tension, le risque d’amorçage électrique à distance.",

  "Plusieurs distances normatives structurent ces zones : la DLVS (Distance Limite de Voisinage Simple) et la DLVR (Distance Limite de Voisinage Renforcé). Ces distances dépendent du domaine de tension et ne doivent jamais être appréciées de manière approximative ou empirique. Elles sont définies pour éviter toute exposition dangereuse, même sans contact.",

  "En basse tension, la distance de voisinage simple est communément de l’ordre de 30 cm autour des pièces nues sous tension. Cette valeur pédagogique permet de visualiser le danger, mais elle ne remplace ni les prescriptions du site, ni les dispositions normatives, ni le balisage réellement en place.",

  "En haute tension, les distances sont nettement plus importantes et le risque d’arc électrique rend la proximité dangereuse même sans contact physique avec l’installation. Le simple fait de ne pas toucher une installation ne garantit jamais la sécurité.",

  "Ces zones peuvent être matérialisées par un balisage, des pancartes, des écrans, des obstacles, des capotages, des enveloppes fermées, un verrouillage d’accès ou des règles strictes d’entrée dans les locaux électriques. L’absence de balisage visible ne signifie jamais l’absence de risque.",

  "Une armoire ouverte, un bornier accessible, un jeu de barres apparent, un capot retiré, une cellule haute tension ouverte ou un local électrique non sécurisé constituent immédiatement des situations de voisinage à risque. Ces situations doivent être considérées comme dangereuses, même en l’absence d’intervention directe.",

  "Dans la pratique, la distinction entre H0 et H0V repose directement sur cette notion de voisinage. Un titulaire H0 évolue en environnement haute tension sans pénétrer dans une zone de voisinage dangereux. À l’inverse, un titulaire H0V est amené à évoluer dans une zone où le respect des distances DLVS ou DLVR devient critique.",

  "Le H0V implique une vigilance renforcée : le risque peut exister sans contact, notamment en raison de l’amorçage électrique. Il est strictement interdit d’apprécier une distance à vue, de s’approcher d’une installation sous tension sans cadre défini ou de franchir un balisage.",

  "Le titulaire H0B0 ne réalise aucune opération électrique. Il doit reconnaître les limites de sécurité, respecter les distances d’approche, ne jamais pénétrer dans une zone douteuse et ne jamais contourner un dispositif de protection pour des raisons pratiques ou opérationnelles.",

  "La règle opérationnelle est stricte : repérer la zone, identifier le danger avant le contact, respecter sans discussion les limites d’approche et, en cas de doute, s’arrêter immédiatement, se mettre en sécurité et alerter. Toute interprétation personnelle des distances ou des protections constitue une prise de risque inacceptable."
],
    essentials: [
      "Les zones d’environnement électrique matérialisent des limites de sécurité.",
      "Le voisinage dangereux existe avant le contact.",
      "En cas de doute sur une distance ou une limite, il faut s’arrêter et signaler.",
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
    minSeconds: 120,
    image: "/elearning/h0b0/acces-local-electrique.png",
    imageAlt: "Illustration pédagogique de l’accès aux locaux et zones électriques",
    highlights: [
      "L’accès à une zone électrique n’est jamais banal.",
      "Signalisation, protections et consignes conditionnent l’autorisation d’accès.",
      "Une situation dégradée impose l’arrêt et le signalement.",
    ],
    content: [
  "L’accès à un local ou à une zone électrique n’est jamais anodin. Il dépend des consignes du site, de la fonction du local, du niveau d’habilitation, des protections en place, du balisage, de l’état apparent des installations et de la mission réellement confiée.",
  "Une porte ouverte sur un local réservé, une armoire déverrouillée, une enveloppe manquante, un capot retiré, une odeur anormale, une fuite d’eau, un câble détérioré, un bruit inhabituel ou une signalisation temporaire de chantier doivent être considérés comme des signaux d’alerte imposant une vigilance renforcée, voire l’arrêt immédiat de l’accès.",
  "Le titulaire H0B0 n’a pas à forcer un accès, franchir une séparation, entrer dans un local électrique pour récupérer un objet, contourner un verrouillage, ni pénétrer dans une zone technique au motif qu’aucun électricien n’est présent. Une facilité d’accès apparente ne vaut jamais autorisation.",
  "L’accès n’est acceptable que si la situation est prévue, lisible, protégée et compatible avec les consignes du site. Cela suppose une zone clairement définie, l’absence d’anomalie visible, le maintien des protections et un environnement compatible avec une présence non électrique.",
  "Dans tous les autres cas, la réaction attendue n’est pas l’adaptation improvisée mais l’arrêt de l’action, la mise à distance et le signalement à l’encadrement ou à une personne compétente. En matière de risque électrique, l’hésitation doit toujours être traitée comme un signal faible de danger."
],
    essentials: [
      "L’accès dépend des consignes et de l’état des protections.",
      "Une situation anormale impose l’arrêt immédiat.",
      "Le H0B0 n’autorise jamais à forcer un accès ou franchir une limite.",
    ],
    references: [
      REG_REFERENCES.codeTravail,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "environments",
    title: "Chapitre 7 — Types d’environnements électriques",
    subtitle:
      "Reconnaître les contextes où le risque varie selon le lieu, l’activité, l’humidité, l’état des matériels et l’organisation",
    minSeconds: 150,
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
      "Le personnel H0B0 doit donc observer avant d’agir : présence d’armoires, câbles au sol, coffrets ouverts, matériels provisoires, protections absentes, sols humides, balisage insuffisant ou anomalies visibles.",
      "L’environnement de travail fait partie intégrante de l’analyse du risque. Il ne s’agit jamais d’un simple décor autour de l’installation électrique.",
    ],
    essentials: [
      "Le risque varie selon le contexte de travail.",
      "Une installation provisoire ou un milieu humide aggravent le danger.",
      "L’observation de l’environnement précède toute action.",
    ],
    references: [
      REG_REFERENCES.codeTravail,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "contacts",
    title: "Chapitre 8 — Contacts directs et indirects",
    subtitle:
      "Différencier les principaux mécanismes d’exposition et comprendre pourquoi un matériel apparemment banal peut devenir dangereux",
    minSeconds: 150,
    image: "/elearning/h0b0/risque-electrique.png",
    imageAlt: "Illustration du contact direct et du contact indirect",
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
      "Le titulaire H0B0 doit retenir qu’un danger électrique n’est pas toujours visible et qu’une partie métallique ou un appareil fermé peuvent devenir dangereux en présence d’un défaut.",
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
    title: "Chapitre 9 — Intensité du courant, durée d’exposition et dommages",
    subtitle:
      "Comprendre comment l’intensité, la durée de passage et le trajet du courant conditionnent la gravité des effets",
    minSeconds: 150,
    image: "/elearning/h0b0/intensites-effets.png",
    imageAlt: "Illustration pédagogique de la relation entre intensité du courant et dommages",
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
    title: "Chapitre 10 — Électrisation et électrocution",
    subtitle:
      "Distinguer le passage du courant dans le corps et l’issue mortelle, et comprendre pourquoi toute électrisation est grave",
    minSeconds: 120,
    image: "/elearning/h0b0/electrisation-electrocution.png",
    imageAlt: "Illustration pédagogique de l’électrisation et de l’électrocution",
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
    references: [
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "body-resistance",
    title: "Chapitre 11 — Résistance du corps humain, peau sèche ou humide",
    subtitle:
      "Comprendre l’influence de l’état du corps, du milieu et de l’humidité sur le niveau réel de danger",
    minSeconds: 150,
    image: "/elearning/h0b0/milieu-sec-humide.png",
    imageAlt: "Illustration de l’influence du milieu sec ou humide sur le risque électrique",
    highlights: [
      "La résistance du corps humain n’est pas constante.",
      "L’humidité réduit fortement cette résistance.",
      "Le milieu conducteur augmente le risque d’électrisation.",
    ],
    content: [
  "La résistance du corps humain au passage du courant n’est pas constante. Elle dépend de l’état de la peau, de l’humidité, de la sueur, de la présence de blessures, de la pression de contact, de la surface touchée ainsi que de la nature du sol et de l’environnement.",
  "En conditions sèches, la résistance du corps humain peut atteindre plusieurs milliers d’ohms, généralement de l’ordre de 1 000 à 10 000 Ω. À l’inverse, en milieu humide ou avec une peau mouillée, cette résistance chute fortement et peut descendre en dessous de 1 000 Ω, voire quelques centaines d’ohms.",
  "Cette diminution de résistance augmente le courant traversant le corps pour une même tension (loi d’Ohm : I = U / R), ce qui accroît fortement la gravité des effets physiologiques.",
  "Les environnements humides ou conducteurs, tels que les zones de nettoyage, les chantiers extérieurs, les ateliers avec structures métalliques ou les sols mouillés, favorisent le passage du courant et aggravent significativement le risque d’électrisation.",
  "Ainsi, un même contact électrique n’a pas les mêmes conséquences dans un environnement sec et isolant que dans un milieu humide ou conducteur.",
  "Le titulaire H0B0 doit intégrer que le milieu fait partie intégrante du risque et qu’un environnement dégradé (humidité, conductivité, défaut d’isolement) impose une vigilance renforcée et une stricte limitation des actions."
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
    title: "Chapitre 12 — Matériels défectueux et signaux d’alerte",
    subtitle:
      "Reconnaître rapidement un matériel dangereux et adopter la bonne réaction sans bricolage ni improvisation",
    minSeconds: 120,
    image: "/elearning/h0b0/materiel-defectueux.png",
    imageAlt: "Illustration de matériels, câbles et équipements électriques défectueux",
    highlights: [
      "Une anomalie visible est déjà un motif d’arrêt.",
      "Échauffement, fumée, déclenchements répétés ou gaine abîmée doivent alerter immédiatement.",
      "Le titulaire H0B0 ne doit jamais réparer ni remettre en service un matériel défectueux.",
    ],
    content: [
      "Un matériel électrique défectueux peut devenir dangereux même sans pièce nue visible. Une gaine abîmée, une prise fissurée, un câble écrasé, une odeur anormale, un échauffement, de la fumée, des étincelles ou des déclenchements répétés constituent des signaux d’alerte.",
      "Ces anomalies peuvent traduire un défaut d’isolement, un serrage défectueux, un échauffement interne, une surcharge, un vieillissement ou une dégradation mécanique.",
      "Le risque peut prendre la forme d’un contact indirect, d’un arc interne, d’un départ de feu ou d’une mise sous tension accidentelle d’une masse métallique.",
      "Le titulaire H0B0 ne doit ni réparer, ni réenclencher à répétition, ni bricoler, ni ouvrir pour “voir ce qu’il y a”. La bonne réaction consiste à arrêter l’usage, empêcher la réutilisation si nécessaire, sécuriser la zone et signaler immédiatement.",
      "En matière de prévention, voir un écart constitue déjà une raison valable de stopper l’action.",
    ],
    essentials: [
      "Une anomalie visible est un signal d’alerte.",
      "Un matériel défectueux ne doit jamais être remis en service par un titulaire H0B0.",
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
    title: "Chapitre 13 — Équipements de protection collective et individuelle",
    subtitle:
      "Identifier les protections qui réduisent le risque et comprendre leur hiérarchie dans la prévention",
    minSeconds: 150,
    image: "/elearning/h0b0/epi-epc.png",
    imageAlt: "Illustration des équipements de protection collective et individuelle",
   highlights: [
  "La protection collective est prioritaire sur la protection individuelle.",
  "Les EPI viennent en complément et ne rendent jamais licite une opération interdite.",
  "Une protection déposée, absente ou neutralisée constitue un signal d’alerte immédiat.",
],
    content: [
  "La prévention du risque électrique repose d’abord sur les mesures de protection collective. Il s’agit notamment des enveloppes fermées, capotages, écrans, obstacles, séparations physiques, balisages, signalisations, verrouillages d’accès et dispositifs empêchant l’exposition ou limitant l’approche du danger.",
  "Ces protections collectives sont prioritaires car elles agissent à la source ou sur l’environnement de travail et protègent simultanément plusieurs personnes. Leur présence ne doit jamais être banalisée, déplacée ou neutralisée pour des raisons de confort, de rapidité ou d’habitude.",
  "Les équipements de protection individuelle interviennent en complément lorsque l’analyse de risque, l’organisation de l’activité ou une situation particulière le justifient. Ils peuvent comprendre, selon les cas prévus par l’entreprise, des équipements adaptés de protection des mains, du visage, du corps ou des pieds.",
  "Dans une logique H0B0, il faut être très clair : le port d’un EPI ne transforme jamais une opération interdite en opération autorisée. Un titulaire H0B0 ne devient pas autorisé à ouvrir une enveloppe, à intervenir sur un matériel ou à s’approcher d’une zone interdite au motif qu’il porte une protection individuelle.",
  "Le rôle attendu du titulaire H0B0 est d’identifier les protections en place, de comprendre leur fonction, de les respecter, de ne pas les détériorer et de signaler immédiatement toute protection absente, déposée, contournée ou manifestement dégradée.",
  "La hiérarchie des mesures de prévention doit donc être retenue sans ambiguïté : organisation et consignes, protections collectives, protections individuelles en complément, puis comportement rigoureux de l’opérateur. Dans le doute, l’arrêt de l’action reste la règle."
],
    essentials: [
  "EPC d’abord : enveloppes, obstacles, écrans, balisage, verrouillage.",
  "EPI ensuite, uniquement en complément selon l’analyse de risque et l’organisation.",
  "Le port d’un EPI n’autorise jamais une action électrique ou un dépassement de périmètre.",
  "Toute protection absente, déplacée ou dégradée doit être signalée immédiatement.",
],
    references: [
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "authorized-forbidden",
    title: "Chapitre 14 — Comportements autorisés et interdits",
    subtitle:
      "Savoir précisément ce qu’un titulaire H0B0 peut faire, ne peut pas faire, et doit immédiatement signaler",
    minSeconds: 180,
    image: "/elearning/h0b0/autorise-interdit.png",
    imageAlt: "Illustration des comportements autorisés et interdits en H0B0",
    highlights: [
      "Le H0B0 n’autorise aucune opération d’ordre électrique.",
      "Respecter ses limites est une compétence professionnelle de sécurité.",
      "Toute situation anormale doit être signalée sans improvisation.",
    ],
  content: [
  "L’habilitation H0B0 autorise exclusivement des opérations d’ordre non électrique réalisées dans un environnement où existe un risque électrique. Elle ne permet jamais d’intervenir sur l’installation électrique elle-même, même pour une action présentée comme rapide, simple ou de dépannage.",
  "Sont notamment interdits : ouvrir une armoire ou un coffret électrique, déposer un capot, accéder à des bornes ou conducteurs, remplacer un appareillage, raccorder ou débrancher un élément d’installation, intervenir sur un câble, rechercher un défaut, effectuer une mesure, réarmer techniquement un dispositif ou remettre en service un matériel après anomalie.",
  "Sont également interdits les comportements consistant à contourner un balisage, entrer dans un local réservé sans cadre prévu, utiliser une échelle métallique à proximité d’une zone dangereuse sans maîtrise du risque, manipuler une prise ou un câble dégradé, ou chercher à apprécier seul si une distance reste acceptable.",
  "Les comportements autorisés relèvent d’une logique d’observation, de respect des consignes et de maintien dans le périmètre prévu : circuler sur les cheminements autorisés, réaliser sa tâche non électrique dans les limites définies, respecter la signalisation, signaler une anomalie, s’arrêter si les protections ne sont plus conformes ou si l’environnement devient douteux.",
  "Le titulaire H0B0 doit comprendre que beaucoup d’accidents surviennent lorsqu’une personne veut rendre service, gagner du temps, éviter une attente ou régler un problème qu’elle considère comme mineur. Le dépassement de périmètre est précisément ce que l’habilitation vise à empêcher.",
  "La règle professionnelle est donc stricte : ce qui n’est pas explicitement autorisé dans le cadre de la mission, de l’habilitation et des consignes doit être considéré comme interdit ou doit faire l’objet d’une vérification préalable auprès d’une personne compétente."
],
    essentials: [
  "Le H0B0 autorise des opérations d’ordre non électrique uniquement.",
  "Ouvrir, mesurer, dépanner, raccorder, réarmer techniquement ou modifier est interdit.",
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
      "Chapitre 15 — Conduite à tenir en cas d’anomalie, d’électrisation ou de départ de feu",
    subtitle:
      "Réagir avec méthode, éviter le suraccident et appliquer la bonne séquence de protection et d’alerte",
    minSeconds: 180,
    image: "/elearning/h0b0/conduite-tenir.png",
    imageAlt: "Illustration de la conduite à tenir en cas d’anomalie ou d’accident électrique",
    highlights: [
      "La priorité est de se protéger avant toute autre action.",
      "Il ne faut jamais improviser face à une anomalie électrique.",
      "En présence d’une victime, il faut éviter de devenir soi-même une seconde victime.",
    ],
   content: [
  "En cas d’anomalie électrique, la réaction doit être immédiate : arrêter l’activité en cours, s’écarter du danger et alerter. Une anomalie peut se manifester par une odeur anormale, un échauffement, de la fumée, un bruit inhabituel, des étincelles, un câble dégradé, un déclenchement répété ou un comportement anormal d’un équipement.",
  "Face à une situation dégradée, il est strictement interdit d’improviser une action sur l’installation. Le titulaire H0B0 ne doit ni intervenir, ni tenter de réparer, ni remettre en service un équipement électrique.",
  "En cas d’électrisation, il ne faut jamais toucher directement la victime tant que le risque électrique persiste. Le danger doit être supprimé en priorité, notamment par la coupure de l’alimentation via un organe identifié (arrêt d’urgence, disjoncteur, sectionneur), uniquement si cette action peut être réalisée sans s’exposer.",
  "Une fois le risque maîtrisé, il convient de sécuriser la zone, d’alerter les secours (18 ou 112), puis d’appliquer les gestes de premiers secours si l’on est formé (mise en sécurité, contrôle de la conscience et de la respiration, alerte, assistance). L’objectif est d’éviter tout suraccident.",
  "En cas de départ de feu d’origine électrique, il faut appliquer les consignes du site. Si les conditions le permettent, un moyen d’extinction adapté peut être utilisé, notamment un extincteur CO2 ou poudre. L’utilisation d’eau est strictement interdite sur une installation sous tension.",
  "Si le doute subsiste sur la mise hors tension, aucune action d’extinction ne doit être engagée. La priorité reste l’évacuation de la zone et l’alerte.",
  "La conduite à tenir repose sur une logique simple et systématique : STOP (arrêt immédiat), PROTECTION (se mettre hors danger), ALERTE (prévenir les secours et l’encadrement), sans jamais improviser une action sur le risque électrique."
],
    essentials: [
      "En cas d’anomalie : arrêt, mise en sécurité, alerte.",
      "Ne jamais toucher une victime tant que le danger électrique persiste.",
      "Face à un feu d’origine électrique, appliquer les consignes du site sans improvisation.",
    ],
    references: [
      REG_REFERENCES.codeTravail,
      REG_REFERENCES.nfC18510,
      REG_REFERENCES.inrs,
    ],
  },
  {
    key: "summary",
    title: "Chapitre 16 — Synthèse opérationnelle",
    subtitle:
      "Consolider les réflexes essentiels avant l’évaluation finale et fixer les règles à retenir durablement",
    minSeconds: 120,
    image: "/elearning/h0b0/reflexes-h0b0.png",
    imageAlt: "Illustration de synthèse des réflexes H0B0",
    highlights: [
      "L’habilitation est délivrée par l’employeur, pas par la formation seule.",
      "Le H0B0 concerne uniquement les opérations d’ordre non électrique.",
      "Observer, respecter, ne pas improviser et alerter sont les réflexes fondamentaux."
      ,
    ],
    content: [
      "Le H0B0 concerne des opérations d’ordre non électrique réalisées dans un environnement où un risque électrique existe. Il ne permet jamais d’agir sur l’installation électrique elle-même.",
      "L’habilitation est délivrée par l’employeur après analyse des tâches confiées, des zones accessibles, des risques identifiés et des compétences détenues. La formation préalable ne vaut donc jamais habilitation à elle seule.",
      "La compréhension des domaines de tension, des zones d’environnement, des distances d’approche, des risques de contact direct et indirect, des effets du courant, de l’influence du milieu et du rôle des protections constitue le socle technique minimal du titulaire H0B0.",
      "Le danger électrique peut être visible ou invisible. Il peut résulter d’une pièce active accessible, d’une masse sous tension, d’un défaut d’isolement, d’un voisinage dangereux, d’une installation dégradée, d’un environnement humide ou d’un comportement inadapté.",
      "La règle opérationnelle finale est simple : observer l’environnement, reconnaître le risque, respecter les distances et les protections, rester strictement dans son périmètre, stopper en cas de doute et alerter immédiatement sans jamais improviser une action électrique.",
      "La distinction entre H0, B0 et H0V constitue un point clé à retenir. Le B0 concerne la basse tension, le H0 concerne la haute tension hors voisinage dangereux, et le H0V concerne la haute tension avec notion de voisinage. Cette distinction ne donne jamais le droit d’intervenir sur une installation, mais elle modifie le niveau d’exposition au risque.",
"Le point critique à retenir est que le danger électrique, notamment en haute tension, peut exister sans contact. Le respect strict des distances, des protections et des consignes constitue la seule garantie de sécurité dans ces situations."
    ],
    essentials: [
      "Le H0B0 ne permet jamais d’intervenir sur l’installation électrique.",
      "Le niveau de risque dépend de la tension, du voisinage, de l’environnement et du comportement adopté.",
      "Les protections collectives sont prioritaires et les limites doivent être respectées strictement.",
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

function chapterProgressPercent(current: number, required: number) {
  if (!required) return 0;
  return Math.min(100, Math.round((current / required) * 100));
}

export default function CoursPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug ?? "";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressData, setProgressData] = useState<ChapterProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [, setTick] = useState(0);

  const normalizedSlug = String(slug).toLowerCase();

  const chapters = useMemo<Chapter[]>(() => {
    if (normalizedSlug === "h0b0") {
      return H0B0_CHAPTERS;
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
  }, [normalizedSlug]);

  const currentChapter = chapters[currentIndex] ?? chapters[0];

  useEffect(() => {
    if (!normalizedSlug) return;

    const load = async () => {
      try {
        const res = await fetch(`/api/chapter-progress/${normalizedSlug}`, {
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
  }, [normalizedSlug]);

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
    currentCompleted || currentSeconds >= (currentChapter?.minSeconds ?? 0);

  useEffect(() => {
    if (!normalizedSlug || !currentChapter) return;

    const saveInterval = setInterval(async () => {
      try {
        await fetch("/api/chapter-progress", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formation_slug: normalizedSlug,
            chapter_key: currentChapter.key,
            chapter_order: currentIndex + 1,
            seconds: 5,
            min_seconds_required: currentChapter.minSeconds,
          }),
        });

        const res = await fetch(`/api/chapter-progress/${normalizedSlug}`, {
          cache: "no-store",
        });
        const data = await res.json();
        setProgressData(Array.isArray(data) ? data : []);
      } catch {
        // no-op
      }
    }, 5000);

    return () => clearInterval(saveInterval);
  }, [normalizedSlug, currentChapter, currentIndex]);

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
              Parcours H0B0
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
                {completedCount} chapitre(s) validé(s) sur {chapters.length}
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {chapters.map((chapter, index) => {
                const itemProgress = progressData.find(
                  (item) => item.chapter_key === chapter.key
                );
                const done = itemProgress?.is_completed ?? false;
                const unlocked =
                  index === 0 ||
                  progressData.some(
                    (item) =>
                      item.chapter_key === chapters[index - 1]?.key &&
                      item.is_completed
                  ) ||
                  index <= currentIndex;

                return (
                  <button
                    key={chapter.key}
                    type="button"
                    onClick={() => {
                      if (unlocked) setCurrentIndex(index);
                    }}
                    disabled={!unlocked}
                    className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                      currentIndex === index
                        ? "border-slate-900 bg-slate-900 text-white"
                        : done
                        ? "border-green-200 bg-green-50 text-slate-800"
                        : "border-slate-200 bg-white text-slate-700"
                    } disabled:cursor-not-allowed disabled:opacity-50`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">{chapter.title}</p>
                        <p
                          className={`mt-1 text-xs ${
                            currentIndex === index
                              ? "text-slate-200"
                              : "text-slate-500"
                          }`}
                        >
                          Temps mini : {formatSeconds(chapter.minSeconds)}
                        </p>
                      </div>

                      <span
                        className={`rounded-full px-2 py-1 text-[11px] font-semibold ${
                          done
                            ? "bg-green-600 text-white"
                            : currentIndex === index
                            ? "bg-white/15 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {done ? "Validé" : unlocked ? "Ouvert" : "Verrouillé"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-red-800 px-6 py-6 text-white md:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                {currentChapter.title}
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                {currentChapter.subtitle}
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
            </div>

            <div className="px-6 py-6 md:px-8">
              {currentChapter.image ? (
                <div className="mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
                  <Image
                    src={currentChapter.image}
                    alt={currentChapter.imageAlt ?? currentChapter.title}
                    width={1200}
                    height={700}
                    className="mx-auto h-auto max-h-[420px] w-auto object-contain"
                    priority
                  />
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
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-8 space-y-5 text-[15px] leading-8 text-slate-700">
                {currentChapter.content.map((paragraph, index) => (
                  <p key={`${currentChapter.key}-content-${index}`}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {(currentChapter.essentials ?? []).length > 0 && (
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
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(currentChapter.references ?? []).length > 0 && (
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
                          {ref.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
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
                    href={`/modules/${normalizedSlug}/quiz`}
                    className={`rounded-xl px-5 py-3 text-sm font-semibold text-white transition ${
                      globalPercent === 100
                        ? "bg-green-600 hover:opacity-90"
                        : "pointer-events-none bg-slate-400"
                    }`}
                  >
                    Accéder au quiz
                  </Link>
                )}
              </div>

              {!canGoNext && !isLastChapter && (
                <p className="mt-4 text-sm font-medium text-amber-700">
                  Vous devez encore patienter {formatSeconds(remainingSeconds)}{" "}
                  sur ce chapitre avant d’accéder au suivant.
                </p>
              )}

              {isLastChapter && globalPercent < 100 && (
                <p className="mt-4 text-sm font-medium text-amber-700">
                  Le quiz sera débloqué lorsque tous les chapitres auront été
                  validés.
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}