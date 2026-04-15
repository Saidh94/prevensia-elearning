export type QuizQuestion = {
  question: string;
  choices: string[];
  answer: number;
};

export const quizContent: Record<string, QuizQuestion[]> = {
  h0b0: [
    // =========================
    // REGLEMENTATION
    // =========================
    {
      question: "Qui délivre l’habilitation électrique au salarié ?",
      choices: ["Le formateur", "L’organisme de formation", "L’employeur", "Le chef d’équipe"],
      answer: 2,
    },
    {
      question: "La formation seule permet-elle d’être habilité ?",
      choices: ["Oui", "Non"],
      answer: 1,
    },
    {
      question: "Quel article impose la formation adaptée au risque électrique ?",
      choices: ["R.4544-9", "R.4544-10", "R.4227-28", "R.4511-1"],
      answer: 1,
    },

    // =========================
    // SYMBOLIQUE
    // =========================
    {
      question: "Que signifie la lettre H ?",
      choices: ["Hors tension", "Haute tension", "Habilitation", "Hydraulique"],
      answer: 1,
    },
    {
      question: "Que signifie le chiffre 0 ?",
      choices: ["Travaux électriques", "Travaux non électriques", "Zéro danger", "Débutant"],
      answer: 1,
    },
    {
      question: "Que signifie la lettre V ?",
      choices: ["Vérification", "Voisinage", "Voltage", "Visuel"],
      answer: 1,
    },
    {
      question: "H0 correspond à :",
      choices: [
        "Travaux électriques",
        "Travaux non électriques hors voisinage",
        "Consignation",
        "Mesurage",
      ],
      answer: 1,
    },
    {
      question: "H0V correspond à :",
      choices: [
        "Travaux HT",
        "Non électrique au voisinage",
        "Consignation",
        "Essais",
      ],
      answer: 1,
    },

    // =========================
    // DIFFERENCE H0 / H0V
    // =========================
    {
      question: "La différence principale entre H0 et H0V est :",
      choices: [
        "Le niveau de tension",
        "Le voisinage électrique",
        "Le matériel",
        "L’expérience",
      ],
      answer: 1,
    },
    {
      question: "Pourquoi le voisinage est dangereux ?",
      choices: [
        "Risque sans contact",
        "Plus de bruit",
        "Moins de tension",
        "Moins de courant",
      ],
      answer: 0,
    },

    // =========================
    // DOMAINES DE TENSION
    // =========================
    {
      question: "La basse tension correspond à :",
      choices: ["0-24 V", "50-1000 V", "1000-20000 V", "230V uniquement"],
      answer: 1,
    },
    {
      question: "La haute tension commence à :",
      choices: ["50 V", "400 V", "1000 V", "10 000 V"],
      answer: 2,
    },

    // =========================
    // DISTANCES
    // =========================
    {
      question: "DLVS signifie :",
      choices: [
        "Distance Limite de Voisinage Simple",
        "Distance Sécurité",
        "Distance Locale",
        "Distance Visuelle",
      ],
      answer: 0,
    },
    {
      question: "DLVR signifie :",
      choices: [
        "Distance Limite de Voisinage Renforcé",
        "Distance Vérification",
        "Distance Risque",
        "Distance Réduite",
      ],
      answer: 0,
    },
    {
      question: "Distance BT typique :",
      choices: ["10 cm", "30 cm", "1 m", "2 m"],
      answer: 1,
    },
    {
      question: "Risque principal en HT :",
      choices: ["Froid", "Arc électrique", "Poids", "Bruit"],
      answer: 1,
    },

    // =========================
    // EPI / EPC
    // =========================
    {
      question: "EPC signifie :",
      choices: [
        "Protection Collective",
        "Protection Circuit",
        "Protection Conducteur",
        "Protection Chantier",
      ],
      answer: 0,
    },
    {
      question: "EPI signifie :",
      choices: [
        "Protection Individuelle",
        "Protection Installation",
        "Protection Industrielle",
        "Protection Isolante",
      ],
      answer: 0,
    },
    {
      question: "Exemple EPC :",
      choices: [
        "Obstacle ou écran",
        "Gants",
        "Chaussures",
        "Casque",
      ],
      answer: 0,
    },
    {
      question: "Exemple EPI :",
      choices: [
        "Balisage",
        "Capot",
        "Gants adaptés",
        "Écran fixe",
      ],
      answer: 2,
    },
    {
      question: "Priorité prévention :",
      choices: [
        "EPC",
        "EPI",
        "Choix opérateur",
        "Plus rapide",
      ],
      answer: 0,
    },
    {
      question: "Un EPI permet-il d’intervenir en H0B0 ?",
      choices: ["Oui", "Non"],
      answer: 1,
    },

    // =========================
    // TERRAIN
    // =========================
    {
      question: "Armoire ouverte =",
      choices: ["Normal", "Dangereux", "Administratif", "Sans risque"],
      answer: 1,
    },
    {
      question: "Réaction face armoire ouverte :",
      choices: [
        "Refermer",
        "Regarder",
        "S’éloigner et alerter",
        "Continuer",
      ],
      answer: 2,
    },
    {
      question: "Un balisage indique :",
      choices: [
        "Limite de sécurité",
        "Rien",
        "Fin chantier",
        "Zone libre",
      ],
      answer: 0,
    },
    {
      question: "Peut-on franchir un balisage ?",
      choices: ["Oui", "Non"],
      answer: 1,
    },
    {
      question: "Câble endommagé :",
      choices: [
        "Continuer",
        "Réparer",
        "Arrêter et signaler",
        "Ignorer",
      ],
      answer: 2,
    },

    // =========================
    // CONTACTS
    // =========================
    {
      question: "Contact direct =",
      choices: [
        "Partie sous tension",
        "Masse",
        "Sol",
        "EPI",
      ],
      answer: 0,
    },
    {
      question: "Contact indirect =",
      choices: [
        "Partie active",
        "Masse sous tension",
        "Câble isolé",
        "Sol humide",
      ],
      answer: 1,
    },

    // =========================
    // COURANT
    // =========================
    {
      question: "10 mA provoque :",
      choices: [
        "Rien",
        "Tétanisation",
        "Explosion",
        "Sommeil",
      ],
      answer: 1,
    },
    {
      question: "Risque cardiaque :",
      choices: ["10 mA", "30 mA", "75-100 mA", "500 mA"],
      answer: 2,
    },

    // =========================
    // ENVIRONNEMENT
    // =========================
    {
      question: "Milieu humide :",
      choices: [
        "Diminue risque",
        "Augmente risque",
        "Ne change rien",
        "Supprime danger",
      ],
      answer: 1,
    },
    {
      question: "Pourquoi ?",
      choices: [
        "Plus tension",
        "Moins résistance corps",
        "Moins courant",
        "Plus air",
      ],
      answer: 1,
    },

    // =========================
    // COMPORTEMENT
    // =========================
    {
      question: "H0B0 permet intervention électrique ?",
      choices: ["Oui", "Non"],
      answer: 1,
    },
    {
      question: "Peut-on réarmer disjoncteur ?",
      choices: ["Oui", "Non"],
      answer: 1,
    },
    {
      question: "En cas de doute :",
      choices: [
        "Continuer",
        "Tester",
        "S’arrêter et alerter",
        "Demander collègue",
      ],
      answer: 2,
    },

    // =========================
    // URGENCE
    // =========================
    {
      question: "Électrisation : premier réflexe",
      choices: [
        "Toucher",
        "Couper courant",
        "Déplacer",
        "Donner eau",
      ],
      answer: 1,
    },
    {
      question: "Feu électrique :",
      choices: [
        "Eau",
        "CO2 ou poudre",
        "Sable",
        "Rien",
      ],
      answer: 1,
    },

    // =========================
    // REFLEXES
    // =========================
    {
      question: "Installation en marche = sans danger ?",
      choices: ["Oui", "Non"],
      answer: 1,
    },
    {
      question: "Pas de balisage = pas de danger ?",
      choices: ["Oui", "Non"],
      answer: 1,
    },
    {
      question: "Distance à vue fiable ?",
      choices: ["Oui", "Non"],
      answer: 1,
    },
  ],
};