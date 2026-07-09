import type { Question } from "../../core/entities/Question";

/**
 * All 16 questions here are original (`sourceType: "original"`), written from the Moroccan
 * baccalauréat sciences curriculum topics that the ISPITS written exam draws its "matière
 * scientifique" section from (see docs/DATA_MODEL.md for how that was researched). None of them
 * are copied or paraphrased from any real past exam paper — see docs/ROADMAP.md for why, and for
 * how to responsibly extend this file toward the 500-question target.
 */
export const SVT_QUESTIONS: Question[] = [
  {
    id: "svt-001",
    subject: "svt",
    unit: "Génétique",
    lesson: "Réplication de l'ADN",
    type: "qcm",
    difficulty: "medium",
    text: "La réplication de l'ADN est qualifiée de « semi-conservative » car :",
    options: [
      { id: "a", text: "Chaque nouvelle molécule contient deux brins nouvellement synthétisés" },
      { id: "b", text: "Chaque nouvelle molécule contient un brin parental et un brin nouveau" },
      { id: "c", text: "La réplication n'a lieu que pendant la méiose" },
      { id: "d", text: "Seule la moitié des gènes est transmise à la cellule fille" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Chaque brin parental sert de matrice : les deux molécules filles contiennent chacune un brin ancien et un brin neuf (expérience de Meselson et Stahl).",
    wrongExplanations: {
      a: "Ce modèle décrirait une réplication « conservative », infirmée par l'expérience de Meselson et Stahl.",
      c: "La réplication a lieu en phase S de l'interphase, avant mitose comme avant méiose.",
      d: "La réplication assure la transmission intégrale de l'information génétique, pas seulement la moitié."
    },
    keywords: ["ADN", "réplication", "semi-conservative", "Meselson", "Stahl"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Génétique"],
    sourceType: "original"
  },
  {
    id: "svt-002",
    subject: "svt",
    unit: "Génétique",
    lesson: "Structure de l'ADN",
    type: "qcm",
    difficulty: "easy",
    text: "La complémentarité des bases azotées de l'ADN s'établit selon la règle :",
    options: [
      { id: "a", text: "A–G et T–C" },
      { id: "b", text: "A–T et G–C" },
      { id: "c", text: "A–C et G–T" },
      { id: "d", text: "Toutes les bases peuvent s'apparier entre elles" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "L'adénine (A) s'apparie toujours avec la thymine (T) par 2 liaisons hydrogène, et la guanine (G) avec la cytosine (C) par 3 liaisons hydrogène.",
    wrongExplanations: {
      a: "Cet appariement est inversé par rapport à la règle réelle de complémentarité.",
      c: "Cet appariement est inversé par rapport à la règle réelle de complémentarité.",
      d: "L'appariement des bases est spécifique (A–T, G–C), pas aléatoire."
    },
    keywords: ["ADN", "bases azotées", "complémentarité", "Chargaff"],
    suggestedTimeSeconds: 40,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Génétique"],
    sourceType: "original"
  },
  {
    id: "svt-003",
    subject: "svt",
    unit: "Génétique",
    lesson: "Mutations",
    type: "qcm",
    difficulty: "hard",
    text: "Une mutation ponctuelle par substitution qui ne change pas l'acide aminé codé (grâce à la dégénérescence du code génétique) est dite :",
    options: [
      { id: "a", text: "Mutation faux-sens" },
      { id: "b", text: "Mutation non-sens" },
      { id: "c", text: "Mutation silencieuse" },
      { id: "d", text: "Mutation par décalage du cadre de lecture" }
    ],
    correctOptionId: "c",
    correctExplanation:
      "Grâce à la redondance du code génétique, un codon muté peut coder pour le même acide aminé : la protéine reste inchangée, d'où « mutation silencieuse ».",
    wrongExplanations: {
      a: "La mutation faux-sens change l'acide aminé codé.",
      b: "La mutation non-sens transforme un codon en codon stop et tronque la protéine.",
      d: "Le décalage du cadre de lecture résulte d'une insertion ou délétion, pas d'une simple substitution."
    },
    keywords: ["mutation", "code génétique", "silencieuse", "codon"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Génétique"],
    sourceType: "original"
  },
  {
    id: "svt-004",
    subject: "svt",
    unit: "Génétique",
    lesson: "Mitose et méiose",
    type: "qcm",
    difficulty: "medium",
    text: "Contrairement à la mitose, la méiose aboutit à :",
    options: [
      { id: "a", text: "2 cellules filles diploïdes identiques" },
      { id: "b", text: "4 cellules filles haploïdes génétiquement différentes" },
      { id: "c", text: "Une seule cellule diploïde" },
      { id: "d", text: "2 cellules filles avec un nombre de chromosomes doublé" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "La méiose comprend deux divisions successives et produit 4 cellules haploïdes (n chromosomes), génétiquement différentes grâce au brassage génétique.",
    wrongExplanations: {
      a: "Cela décrit le résultat de la mitose, pas de la méiose.",
      c: "Ce résultat ne correspond à aucune des deux divisions.",
      d: "Le nombre de chromosomes est réduit de moitié par la méiose, pas doublé."
    },
    keywords: ["mitose", "méiose", "haploïde", "diploïde", "brassage génétique"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Génétique"],
    sourceType: "original"
  },
  {
    id: "svt-005",
    subject: "svt",
    unit: "Génétique",
    lesson: "Brassage génétique",
    type: "qcm",
    difficulty: "hard",
    text: "Le crossing-over (enjambement) se produit :",
    options: [
      { id: "a", text: "Pendant la prophase de la mitose" },
      { id: "b", text: "Pendant la prophase I de la méiose, entre chromatides homologues" },
      { id: "c", text: "Après la fécondation" },
      { id: "d", text: "Uniquement chez les cellules somatiques" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le crossing-over a lieu en prophase I de méiose : les chromosomes homologues appariés échangent des segments de chromatides, source de brassage intrachromosomique.",
    wrongExplanations: {
      a: "La mitose ne comporte pas d'appariement de chromosomes homologues.",
      c: "Le crossing-over précède la fécondation ; il a lieu lors de la gamétogenèse.",
      d: "Les cellules somatiques se divisent par mitose, sans crossing-over méiotique."
    },
    keywords: ["crossing-over", "méiose", "prophase I", "brassage"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Génétique"],
    sourceType: "original"
  },
  {
    id: "svt-006",
    subject: "svt",
    unit: "Immunologie",
    lesson: "Immunité innée",
    type: "qcm",
    difficulty: "medium",
    text: "Parmi les propositions suivantes, laquelle caractérise l'immunité innée (non spécifique) ?",
    options: [
      { id: "a", text: "Elle repose sur la reconnaissance spécifique d'un antigène par des récepteurs BCR/TCR" },
      { id: "b", text: "Elle met en jeu une mémoire immunitaire durable" },
      { id: "c", text: "Elle constitue la première ligne de défense, rapide et non spécifique" },
      { id: "d", text: "Elle nécessite plusieurs jours pour devenir efficace" }
    ],
    correctOptionId: "c",
    correctExplanation:
      "L'immunité innée regroupe barrières naturelles, phagocytose et inflammation : elle agit immédiatement, sans reconnaissance spécifique préalable.",
    wrongExplanations: {
      a: "Cela décrit l'immunité adaptative (lymphocytes B et T).",
      b: "La mémoire immunitaire est une propriété de l'immunité adaptative.",
      d: "Ce délai concerne la réponse primaire de l'immunité adaptative, pas l'innée."
    },
    keywords: ["immunité innée", "phagocytose", "inflammation"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Immunologie"],
    sourceType: "original"
  },
  {
    id: "svt-007",
    subject: "svt",
    unit: "Immunologie",
    lesson: "Anticorps",
    type: "qcm",
    difficulty: "medium",
    text: "Un anticorps (immunoglobuline) est capable de se fixer sur :",
    options: [
      { id: "a", text: "Un seul type d'antigène de manière spécifique" },
      { id: "b", text: "N'importe quel antigène indifféremment" },
      { id: "c", text: "Uniquement des bactéries" },
      { id: "d", text: "Uniquement des virus" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "Chaque anticorps possède un site de fixation complémentaire d'un déterminant antigénique précis (épitope) : la reconnaissance antigène-anticorps est hautement spécifique.",
    wrongExplanations: {
      b: "Cela contredit le principe même de la spécificité immunitaire.",
      c: "Les anticorps peuvent aussi cibler virus, toxines, etc., dès lors qu'ils portent l'antigène reconnu.",
      d: "Les anticorps peuvent aussi cibler bactéries, toxines, etc., dès lors qu'ils portent l'antigène reconnu."
    },
    keywords: ["anticorps", "antigène", "spécificité", "épitope"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Immunologie"],
    sourceType: "original"
  },
  {
    id: "svt-008",
    subject: "svt",
    unit: "Immunologie",
    lesson: "Vaccination",
    type: "qcm",
    difficulty: "medium",
    text: "Le principe de la vaccination repose sur :",
    options: [
      { id: "a", text: "L'apport direct d'anticorps déjà fabriqués" },
      { id: "b", text: "La stimulation d'une mémoire immunitaire par un antigène atténué ou inactivé" },
      { id: "c", text: "La destruction du système immunitaire pour le renforcer" },
      { id: "d", text: "Le remplacement des lymphocytes B par des lymphocytes T" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Un vaccin introduit un antigène atténué/inactivé qui déclenche une réponse immunitaire primaire et la formation de lymphocytes mémoire, permettant une réponse secondaire rapide lors d'un contact réel ultérieur.",
    wrongExplanations: {
      a: "Cela décrit la sérothérapie (immunité passive), pas la vaccination.",
      c: "C'est un contresens : la vaccination stimule le système immunitaire, elle ne le détruit pas.",
      d: "Les deux types de lymphocytes coopèrent ; aucun n'est « remplacé » par la vaccination."
    },
    keywords: ["vaccination", "mémoire immunitaire", "antigène atténué"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Immunologie"],
    sourceType: "original"
  },
  {
    id: "svt-009",
    subject: "svt",
    unit: "Neurophysiologie",
    lesson: "Synapse chimique",
    type: "qcm",
    difficulty: "medium",
    text: "Au niveau d'une synapse chimique, la transmission du message nerveux se fait grâce à :",
    options: [
      { id: "a", text: "Le passage direct du courant électrique d'un neurone à l'autre" },
      { id: "b", text: "La libération de neurotransmetteurs dans la fente synaptique" },
      { id: "c", text: "La fusion complète des deux membranes plasmiques" },
      { id: "d", text: "Le transport de l'influx nerveux par voie sanguine" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le potentiel d'action déclenche l'exocytose de vésicules synaptiques : les neurotransmetteurs libérés traversent la fente et se fixent sur des récepteurs post-synaptiques.",
    wrongExplanations: {
      a: "Ceci décrit une synapse électrique, pas une synapse chimique.",
      c: "Seules les vésicules fusionnent avec la membrane présynaptique ; les deux neurones restent séparés.",
      d: "Le message nerveux circule dans le tissu nerveux, jamais par le sang."
    },
    keywords: ["synapse", "neurotransmetteur", "exocytose"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Neurophysiologie"],
    sourceType: "original"
  },
  {
    id: "svt-010",
    subject: "svt",
    unit: "Neurophysiologie",
    lesson: "Potentiel d'action",
    type: "qcm",
    difficulty: "hard",
    text: "La dépolarisation de la membrane lors d'un potentiel d'action résulte principalement de :",
    options: [
      { id: "a", text: "L'entrée massive d'ions Na+" },
      { id: "b", text: "La sortie massive d'ions K+" },
      { id: "c", text: "L'entrée d'ions Cl-" },
      { id: "d", text: "L'arrêt de la pompe Na+/K+" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "L'ouverture des canaux Na+ voltage-dépendants provoque une entrée rapide d'ions Na+, rendant l'intérieur de la membrane positif : c'est la dépolarisation.",
    wrongExplanations: {
      b: "La sortie de K+ intervient dans la repolarisation, la phase suivante.",
      c: "L'entrée de Cl- tend plutôt à hyperpolariser la membrane.",
      d: "La pompe Na+/K+ maintient les gradients au repos ; son arrêt ne déclenche pas directement un potentiel d'action."
    },
    keywords: ["potentiel d'action", "dépolarisation", "Na+", "canaux voltage-dépendants"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Neurophysiologie"],
    sourceType: "original"
  },
  {
    id: "svt-011",
    subject: "svt",
    unit: "Neurophysiologie",
    lesson: "Arc réflexe",
    type: "qcm",
    difficulty: "medium",
    text: "Dans un arc réflexe myotatique simple, le centre nerveux se situe au niveau :",
    options: [
      { id: "a", text: "Du cerveau" },
      { id: "b", text: "De la moelle épinière" },
      { id: "c", text: "Du muscle lui-même" },
      { id: "d", text: "Du nerf périphérique" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le réflexe myotatique (ex. réflexe rotulien) est un réflexe médullaire : la synapse entre neurone sensitif et motoneurone se fait directement dans la moelle épinière, sans passer par le cerveau.",
    wrongExplanations: {
      a: "Le cerveau n'intervient pas dans ce réflexe involontaire rapide.",
      c: "Le muscle est l'effecteur, pas le centre de traitement de l'information.",
      d: "Le nerf transmet le message, il ne le traite pas."
    },
    keywords: ["réflexe myotatique", "moelle épinière", "arc réflexe"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Neurophysiologie"],
    sourceType: "original"
  },
  {
    id: "svt-012",
    subject: "svt",
    unit: "Reproduction",
    lesson: "Cycle ovarien",
    type: "qcm",
    difficulty: "easy",
    text: "Chez la femme, le pic de LH (hormone lutéinisante) déclenche :",
    options: [
      { id: "a", text: "La menstruation" },
      { id: "b", text: "L'ovulation" },
      { id: "c", text: "La sécrétion de FSH par l'ovaire" },
      { id: "d", text: "L'arrêt définitif de la sécrétion d'œstrogènes" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Vers le 14ᵉ jour d'un cycle de 28 jours, le pic de LH provoque la rupture du follicule mûr et la libération de l'ovocyte : c'est l'ovulation.",
    wrongExplanations: {
      a: "La menstruation résulte de la chute des hormones ovariennes en l'absence de fécondation.",
      c: "La FSH est sécrétée par l'hypophyse, pas par l'ovaire.",
      d: "Le corps jaune, issu du follicule rompu, sécrète au contraire des œstrogènes et de la progestérone."
    },
    keywords: ["LH", "ovulation", "cycle ovarien", "hypophyse"],
    suggestedTimeSeconds: 45,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Reproduction"],
    sourceType: "original"
  },
  {
    id: "svt-013",
    subject: "svt",
    unit: "Reproduction",
    lesson: "Fécondation",
    type: "qcm",
    difficulty: "easy",
    text: "La fécondation chez l'espèce humaine se caractérise par :",
    options: [
      { id: "a", text: "La fusion d'un gamète mâle haploïde et d'un gamète femelle haploïde" },
      { id: "b", text: "La fusion de deux cellules diploïdes" },
      { id: "c", text: "La division du zygote avant la fusion des gamètes" },
      { id: "d", text: "La fécondation de plusieurs ovocytes par un seul spermatozoïde" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "La fécondation est la fusion d'un spermatozoïde (n chromosomes) et d'un ovocyte (n chromosomes), rétablissant la diploïdie (2n) dans le zygote formé.",
    wrongExplanations: {
      b: "Les gamètes sont haploïdes, pas diploïdes.",
      c: "Le zygote se forme après la fusion des gamètes, pas avant.",
      d: "Un seul spermatozoïde féconde normalement un seul ovocyte (blocage naturel de la polyspermie)."
    },
    keywords: ["fécondation", "gamètes", "zygote", "haploïde"],
    suggestedTimeSeconds: 45,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Reproduction"],
    sourceType: "original"
  },
  {
    id: "svt-014",
    subject: "svt",
    unit: "Géologie",
    lesson: "Tectonique des plaques",
    type: "qcm",
    difficulty: "medium",
    text: "Au niveau d'une dorsale océanique, on observe principalement :",
    options: [
      { id: "a", text: "Une subduction de la croûte océanique" },
      { id: "b", text: "Un affrontement de deux plaques continentales" },
      { id: "c", text: "Un écartement des plaques et la formation de croûte océanique" },
      { id: "d", text: "La formation de chaînes de montagnes par plissement" }
    ],
    correctOptionId: "c",
    correctExplanation:
      "Les dorsales sont des zones de divergence : le magma remonte, se solidifie et forme une nouvelle lithosphère océanique qui écarte progressivement les plaques.",
    wrongExplanations: {
      a: "La subduction caractérise les zones de convergence (fosses océaniques), pas les dorsales.",
      b: "L'affrontement continental caractérise la collision, un contexte différent.",
      d: "Le plissement montagneux résulte d'une collision continentale, pas d'une divergence océanique."
    },
    keywords: ["dorsale océanique", "tectonique des plaques", "divergence"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Géologie"],
    sourceType: "original"
  },
  {
    id: "svt-015",
    subject: "svt",
    unit: "Géologie",
    lesson: "Roches magmatiques",
    type: "qcm",
    difficulty: "medium",
    text: "Une roche magmatique formée par refroidissement lent en profondeur, à cristaux bien développés, est dite :",
    options: [
      { id: "a", text: "Volcanique" },
      { id: "b", text: "Plutonique" },
      { id: "c", text: "Sédimentaire" },
      { id: "d", text: "Métamorphique" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le refroidissement lent en profondeur permet aux cristaux de croître : c'est une roche plutonique (ex. granite), à structure grenue.",
    wrongExplanations: {
      a: "Une roche volcanique refroidit rapidement en surface, donnant une structure microlitique ou vitreuse.",
      c: "Les roches sédimentaires se forment par dépôt et diagenèse, pas par refroidissement de magma.",
      d: "Les roches métamorphiques résultent d'une transformation à l'état solide, pas d'un refroidissement de magma."
    },
    keywords: ["roche magmatique", "plutonique", "granite"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Géologie"],
    sourceType: "original"
  },
  {
    id: "svt-016",
    subject: "svt",
    unit: "Géologie",
    lesson: "Séismes",
    type: "qcm",
    difficulty: "medium",
    text: "L'hypocentre (foyer) d'un séisme correspond :",
    options: [
      { id: "a", text: "Au point en surface directement au-dessus de la rupture" },
      { id: "b", text: "Au point en profondeur où se produit la rupture initiale" },
      { id: "c", text: "À la zone de subduction uniquement" },
      { id: "d", text: "Au sismographe le plus proche" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "L'hypocentre (ou foyer) est le point en profondeur où débute la rupture des roches ; l'épicentre est sa projection verticale en surface.",
    wrongExplanations: {
      a: "Cela décrit l'épicentre, pas l'hypocentre.",
      c: "Les séismes surviennent dans divers contextes tectoniques, pas uniquement en zone de subduction.",
      d: "Le sismographe est un instrument de mesure, sans rapport avec la définition du foyer."
    },
    keywords: ["séisme", "hypocentre", "épicentre"],
    suggestedTimeSeconds: 45,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Géologie"],
    sourceType: "original"
  },
  {
    id: "svt-017",
    subject: "svt",
    unit: "Reproduction",
    lesson: "Spermatogenèse",
    type: "qcm",
    difficulty: "easy",
    text: "La spermatogenèse se déroule au niveau :",
    options: [
      { id: "a", text: "Des tubes séminifères des testicules" },
      { id: "b", text: "De l'épididyme" },
      { id: "c", text: "Des vésicules séminales" },
      { id: "d", text: "De la prostate" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "Les tubes séminifères contiennent les cellules germinales qui se divisent et se différencient en spermatozoïdes, de la paroi vers la lumière du tube.",
    wrongExplanations: {
      b: "L'épididyme est le lieu de maturation et de stockage des spermatozoïdes, pas de leur production.",
      c: "Les vésicules séminales sécrètent une partie du liquide séminal, elles ne produisent pas de spermatozoïdes.",
      d: "La prostate sécrète un liquide nourricier, elle ne produit pas de spermatozoïdes."
    },
    keywords: ["spermatogenèse", "testicule", "tubes séminifères"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Reproduction"],
    sourceType: "original"
  },
  {
    id: "svt-018",
    subject: "svt",
    unit: "Reproduction",
    lesson: "Régulation hormonale masculine",
    type: "qcm",
    difficulty: "medium",
    text: "Chez l'homme, la testostérone est sécrétée par :",
    options: [
      { id: "a", text: "Les cellules de Leydig sous l'effet de la LH" },
      { id: "b", text: "Les cellules de Sertoli sous l'effet de la FSH" },
      { id: "c", text: "L'hypophyse directement" },
      { id: "d", text: "Les tubes séminifères sous l'effet de l'inhibine" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "La LH stimule les cellules de Leydig (interstitielles) qui sécrètent la testostérone ; la FSH agit plutôt sur les cellules de Sertoli pour soutenir la spermatogenèse.",
    wrongExplanations: {
      b: "Les cellules de Sertoli soutiennent la spermatogenèse mais ne sécrètent pas la testostérone.",
      c: "L'hypophyse sécrète LH/FSH, pas directement la testostérone.",
      d: "L'inhibine régule en retour la sécrétion de FSH ; elle ne déclenche pas la sécrétion de testostérone."
    },
    keywords: ["testostérone", "cellules de Leydig", "LH"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Reproduction"],
    sourceType: "original"
  },
  {
    id: "svt-019",
    subject: "svt",
    unit: "Reproduction",
    lesson: "Rétrocontrôle hormonal",
    type: "qcm",
    difficulty: "hard",
    text: "Un taux élevé de testostérone exerce sur le complexe hypothalamo-hypophysaire un rétrocontrôle :",
    options: [
      { id: "a", text: "Positif, stimulant la sécrétion de LH" },
      { id: "b", text: "Négatif, freinant la sécrétion de LH et de GnRH" },
      { id: "c", text: "Nul, sans aucun effet" },
      { id: "d", text: "Négatif, uniquement sur la FSH" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Comme la plupart des hormones sexuelles à l'état basal, un taux élevé de testostérone freine (rétrocontrôle négatif) la sécrétion de GnRH hypothalamique et de LH hypophysaire, régulant ainsi sa propre production.",
    wrongExplanations: {
      a: "C'est l'inverse du mécanisme réel dans ce contexte.",
      c: "Un effet réel et mesurable existe.",
      d: "Le rétrocontrôle négatif agit sur GnRH et LH, pas uniquement sur FSH."
    },
    keywords: ["rétrocontrôle négatif", "testostérone", "GnRH"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Reproduction"],
    sourceType: "original"
  },
  {
    id: "svt-020",
    subject: "svt",
    unit: "Reproduction",
    lesson: "Contraception hormonale",
    type: "qcm",
    difficulty: "medium",
    text: "Le principe des pilules contraceptives combinées (œstroprogestatives) repose sur :",
    options: [
      { id: "a", text: "La destruction des ovules déjà formés" },
      { id: "b", text: "Le blocage de l'ovulation par rétrocontrôle négatif sur l'axe hypothalamo-hypophysaire" },
      { id: "c", text: "La stérilisation définitive de l'utérus" },
      { id: "d", text: "L'augmentation de la sécrétion de FSH et LH" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Les hormones de synthèse maintiennent un taux élevé constant qui exerce un rétrocontrôle négatif sur l'hypothalamus/hypophyse, bloquant le pic de LH nécessaire à l'ovulation.",
    wrongExplanations: {
      a: "Les ovules ne sont pas détruits ; l'ovulation est simplement empêchée.",
      c: "L'effet est réversible à l'arrêt du traitement, pas une stérilisation définitive.",
      d: "C'est l'inverse : les taux de FSH/LH sont abaissés, pas augmentés."
    },
    keywords: ["contraception", "pilule", "rétrocontrôle négatif"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Reproduction"],
    sourceType: "original"
  },
  {
    id: "svt-021",
    subject: "svt",
    unit: "Reproduction",
    lesson: "Procréation médicalement assistée",
    type: "qcm",
    difficulty: "easy",
    text: "La fécondation in vitro (FIV) consiste à :",
    options: [
      { id: "a", text: "Réaliser la fécondation en laboratoire avant de transférer l'embryon dans l'utérus" },
      { id: "b", text: "Injecter directement des spermatozoïdes dans l'utérus" },
      { id: "c", text: "Stimuler uniquement la production d'ovocytes sans fécondation" },
      { id: "d", text: "Remplacer les ovaires par un donneur" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "La FIV consiste à prélever des ovocytes et des spermatozoïdes, à réaliser la fécondation en laboratoire (in vitro), puis à transférer le ou les embryons obtenus dans l'utérus.",
    wrongExplanations: {
      b: "Cela décrit plutôt le principe de l'insémination artificielle, une technique différente.",
      c: "Cela décrit seulement la stimulation ovarienne, une étape préalable, pas la FIV elle-même.",
      d: "La FIV n'implique pas de remplacement d'organe."
    },
    keywords: ["FIV", "PMA", "fécondation in vitro"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Reproduction"],
    sourceType: "original"
  },
  {
    id: "svt-022",
    subject: "svt",
    unit: "Reproduction",
    lesson: "Grossesse",
    type: "qcm",
    difficulty: "medium",
    text: "La progestérone, indispensable au maintien de la grossesse, est sécrétée en début de grossesse principalement par :",
    options: [
      { id: "a", text: "Le corps jaune" },
      { id: "b", text: "Le placenta uniquement" },
      { id: "c", text: "L'hypophyse" },
      { id: "d", text: "Les trompes de Fallope" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "En tout début de grossesse, le corps jaune (maintenu grâce à l'hCG) sécrète la progestérone ; le relais est ensuite pris par le placenta à partir du 2e-3e mois.",
    wrongExplanations: {
      b: "Le placenta ne prend le relais qu'à partir du 2e-3e mois, pas dès le début.",
      c: "L'hypophyse sécrète LH/FSH/prolactine, pas directement la progestérone.",
      d: "Les trompes assurent le transport de l'ovule/embryon ; elles ne sécrètent pas d'hormones de grossesse."
    },
    keywords: ["progestérone", "corps jaune", "grossesse", "hCG"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Reproduction"],
    sourceType: "original"
  },
  {
    id: "svt-023",
    subject: "svt",
    unit: "Reproduction",
    lesson: "Puberté",
    type: "qcm",
    difficulty: "medium",
    text: "Le déclenchement de la puberté est principalement lié à :",
    options: [
      { id: "a", text: "L'arrêt total de la sécrétion de GnRH" },
      { id: "b", text: "La réactivation de la sécrétion pulsatile de GnRH par l'hypothalamus" },
      { id: "c", text: "La disparition des gonades" },
      { id: "d", text: "Une baisse du volume sanguin" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Après une période de quiescence durant l'enfance, l'hypothalamus reprend une sécrétion pulsatile de GnRH, stimulant LH/FSH et donc la maturation des gonades : c'est le déclenchement de la puberté.",
    wrongExplanations: {
      a: "C'est l'inverse : c'est la reprise, non l'arrêt, de la sécrétion de GnRH qui déclenche la puberté.",
      c: "Les gonades se développent à la puberté, elles ne disparaissent pas.",
      d: "Le volume sanguin n'est pas un facteur déclenchant de la puberté."
    },
    keywords: ["puberté", "GnRH", "hypothalamus"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Reproduction"],
    sourceType: "original"
  },
  {
    id: "svt-024",
    subject: "svt",
    unit: "Reproduction",
    lesson: "Ovogenèse",
    type: "qcm",
    difficulty: "hard",
    text: "Contrairement à la spermatogenèse, l'ovogenèse chez la femme :",
    options: [
      { id: "a", text: "Produit 4 gamètes fonctionnels par cellule mère" },
      { id: "b", text: "Débute dès la vie fœtale et s'achève très majoritairement à la fécondation" },
      { id: "c", text: "Se déroule en continu tout au long de la vie sans interruption" },
      { id: "d", text: "Ne produit aucun globule polaire" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "L'ovogenèse débute avant la naissance (arrêt en prophase I), reprend à la puberté à chaque cycle, et ne s'achève (2e division de méiose) qu'au moment de la fécondation.",
    wrongExplanations: {
      a: "L'ovogenèse produit un seul ovocyte fonctionnel et des globules polaires non fonctionnels, contrairement à la spermatogenèse.",
      c: "L'ovogenèse est marquée par de longues phases d'arrêt (blocages méiotiques), pas un déroulement continu.",
      d: "Les globules polaires sont justement une caractéristique de l'ovogenèse."
    },
    keywords: ["ovogenèse", "méiose", "globules polaires"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Reproduction"],
    sourceType: "original"
  },
  {
    id: "svt-025",
    subject: "svt",
    unit: "Reproduction",
    lesson: "Accouchement",
    type: "qcm",
    difficulty: "medium",
    text: "Parmi les hormones suivantes, laquelle joue un rôle majeur dans le déclenchement des contractions utérines lors de l'accouchement ?",
    options: [
      { id: "a", text: "L'insuline" },
      { id: "b", text: "L'ocytocine" },
      { id: "c", text: "La FSH" },
      { id: "d", text: "L'adrénaline uniquement" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "L'ocytocine, sécrétée par la posthypophyse, stimule fortement les contractions du muscle utérin (myomètre) lors du travail.",
    wrongExplanations: {
      a: "L'insuline régule la glycémie, sans rapport avec les contractions utérines.",
      c: "La FSH intervient dans la gamétogenèse, pas dans le déclenchement du travail.",
      d: "L'adrénaline a plutôt un effet inhibiteur sur le muscle utérin dans ce contexte ; ce n'est pas l'hormone clé des contractions."
    },
    keywords: ["ocytocine", "accouchement", "contractions utérines"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Reproduction"],
    sourceType: "original"
  },
  {
    id: "svt-026",
    subject: "svt",
    unit: "Reproduction",
    lesson: "Fécondation",
    type: "qcm",
    difficulty: "easy",
    text: "La fécondation chez la femme a normalement lieu au niveau :",
    options: [
      { id: "a", text: "De l'utérus" },
      { id: "b", text: "Du tiers supérieur (ampoule) de la trompe de Fallope" },
      { id: "c", text: "Du vagin" },
      { id: "d", text: "De l'ovaire lui-même" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Après l'ovulation, l'ovocyte est capté par le pavillon de la trompe ; la fécondation a normalement lieu dans l'ampoule tubaire, avant la migration de l'œuf vers l'utérus pour la nidation.",
    wrongExplanations: {
      a: "L'utérus est le lieu de la nidation, pas de la fécondation elle-même.",
      c: "Le vagin est la voie de dépôt des spermatozoïdes, pas le lieu de fécondation.",
      d: "L'ovocyte quitte l'ovaire lors de l'ovulation avant d'être fécondé plus loin, dans la trompe."
    },
    keywords: ["fécondation", "trompe de Fallope", "ampoule"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Reproduction"],
    sourceType: "original"
  },
  {
    id: "svt-027",
    subject: "svt",
    unit: "Génétique",
    lesson: "Transcription",
    type: "qcm",
    difficulty: "medium",
    text: "La transcription de l'ADN en ARN messager a lieu :",
    options: [
      { id: "a", text: "Dans le cytoplasme chez les eucaryotes" },
      { id: "b", text: "Dans le noyau chez les eucaryotes" },
      { id: "c", text: "Uniquement pendant la mitose" },
      { id: "d", text: "Sur les ribosomes" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Chez les eucaryotes, la transcription (synthèse d'ARNm à partir de la matrice d'ADN par l'ARN polymérase) a lieu dans le noyau, avant l'export de l'ARNm mature vers le cytoplasme.",
    wrongExplanations: {
      a: "Chez les eucaryotes, la transcription est nucléaire ; le cytoplasme est le lieu de la traduction.",
      c: "La transcription se produit en interphase, indépendamment de la mitose.",
      d: "Les ribosomes interviennent dans la traduction, pas la transcription."
    },
    keywords: ["transcription", "ARNm", "noyau"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Génétique"],
    sourceType: "original"
  },
  {
    id: "svt-028",
    subject: "svt",
    unit: "Génétique",
    lesson: "Code génétique",
    type: "qcm",
    difficulty: "easy",
    text: "Un codon de l'ARN messager est constitué de :",
    options: [
      { id: "a", text: "Un seul nucléotide" },
      { id: "b", text: "Deux nucléotides" },
      { id: "c", text: "Trois nucléotides" },
      { id: "d", text: "Quatre nucléotides" }
    ],
    correctOptionId: "c",
    correctExplanation:
      "Le code génétique est un code à triplets : chaque codon (groupe de 3 nucléotides consécutifs) spécifie un acide aminé ou un signal d'arrêt.",
    wrongExplanations: {
      a: "Ne correspond à aucune définition réelle d'un codon.",
      b: "Ne correspond à aucune définition réelle d'un codon.",
      d: "Un codon est toujours composé d'exactement trois nucléotides, pas quatre."
    },
    keywords: ["codon", "code génétique", "triplet"],
    suggestedTimeSeconds: 40,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Génétique"],
    sourceType: "original"
  },
  {
    id: "svt-029",
    subject: "svt",
    unit: "Génétique",
    lesson: "Traduction",
    type: "qcm",
    difficulty: "medium",
    text: "Lors de la traduction, l'appariement entre le codon de l'ARNm et l'anticodon de l'ARNt se fait au niveau :",
    options: [
      { id: "a", text: "Du noyau" },
      { id: "b", text: "Du ribosome" },
      { id: "c", text: "De la membrane plasmique" },
      { id: "d", text: "Du réticulum endoplasmique lisse" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "La traduction se déroule sur les ribosomes, où l'ARNt apporte l'acide aminé correspondant en appariant son anticodon au codon de l'ARNm.",
    wrongExplanations: {
      a: "Le noyau est le lieu de la transcription, pas de la traduction.",
      c: "La membrane plasmique n'intervient pas dans la traduction.",
      d: "Le réticulum lisse est impliqué dans la synthèse lipidique, pas dans la traduction protéique."
    },
    keywords: ["traduction", "ribosome", "ARNt"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Génétique"],
    sourceType: "original"
  },
  {
    id: "svt-030",
    subject: "svt",
    unit: "Génétique",
    lesson: "Hérédité monohybride",
    type: "qcm",
    difficulty: "hard",
    text: "Lors d'un croisement entre deux individus hétérozygotes (Aa × Aa) pour un caractère à dominance stricte, la proportion attendue de phénotypes récessifs dans la descendance est de :",
    options: [
      { id: "a", text: "1/4" },
      { id: "b", text: "1/2" },
      { id: "c", text: "3/4" },
      { id: "d", text: "0" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "Le croisement Aa × Aa donne les génotypes 1 AA : 2 Aa : 1 aa. Avec dominance stricte, seul aa (1/4) exprime le phénotype récessif.",
    wrongExplanations: {
      b: "Correspondrait à un autre type de croisement (ex. test-cross Aa × aa), pas Aa × Aa.",
      c: "Correspond à la proportion de phénotype dominant, pas récessif.",
      d: "Une proportion nulle serait incorrecte : le croisement Aa × Aa produit statistiquement des descendants aa."
    },
    keywords: ["monohybridisme", "dominance", "génétique mendélienne"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Génétique"],
    sourceType: "original"
  },
  {
    id: "svt-031",
    subject: "svt",
    unit: "Génétique",
    lesson: "Hérédité liée au sexe",
    type: "qcm",
    difficulty: "hard",
    text: "Une maladie récessive liée au chromosome X touche plus fréquemment :",
    options: [
      { id: "a", text: "Les hommes" },
      { id: "b", text: "Les femmes" },
      { id: "c", text: "Les deux sexes à égalité stricte" },
      { id: "d", text: "Ni les hommes ni les femmes" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "Les hommes n'ayant qu'un seul chromosome X (hémizygotes), un seul allèle récessif suffit à exprimer la maladie, alors que les femmes (XX) doivent porter l'allèle sur leurs deux chromosomes X pour l'exprimer : la maladie est donc statistiquement plus fréquente chez les hommes.",
    wrongExplanations: {
      b: "Les femmes sont protégées par leur second chromosome X, qui peut porter l'allèle dominant sain.",
      c: "La fréquence n'est pas égale, du fait de l'hémizygotie masculine pour les gènes portés par X.",
      d: "La maladie touche bien les deux sexes, mais pas dans les mêmes proportions."
    },
    keywords: ["hérédité liée au sexe", "chromosome X", "hémizygote"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Génétique"],
    sourceType: "original"
  },
  {
    id: "svt-032",
    subject: "svt",
    unit: "Génétique",
    lesson: "Théorie chromosomique",
    type: "qcm",
    difficulty: "medium",
    text: "La théorie chromosomique de l'hérédité établit que :",
    options: [
      { id: "a", text: "Les gènes sont portés par le cytoplasme" },
      { id: "b", text: "Les gènes sont portés par les chromosomes, situés dans le noyau" },
      { id: "c", text: "Les caractères héréditaires ne dépendent d'aucun support matériel" },
      { id: "d", text: "Chaque chromosome ne porte qu'un seul gène" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Cette théorie (Sutton, Boveri, confirmée par les travaux de Morgan) établit que les gènes, unités de l'hérédité, sont portés par les chromosomes et se transmettent selon leurs lois de ségrégation et d'assortiment.",
    wrongExplanations: {
      a: "Le support de l'hérédité est chromosomique (nucléaire), pas cytoplasmique dans cette théorie.",
      c: "La théorie affirme au contraire l'existence d'un support matériel précis : le chromosome.",
      d: "Un chromosome porte de très nombreux gènes, pas un seul."
    },
    keywords: ["théorie chromosomique", "hérédité", "Morgan"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Génétique"],
    sourceType: "original"
  },
  {
    id: "svt-033",
    subject: "svt",
    unit: "Génétique",
    lesson: "Brassage interchromosomique",
    type: "qcm",
    difficulty: "hard",
    text: "Le brassage interchromosomique résulte de :",
    options: [
      { id: "a", text: "La répartition aléatoire des chromosomes homologues lors de l'anaphase I de méiose" },
      { id: "b", text: "L'échange de segments de chromatides lors du crossing-over" },
      { id: "c", text: "La fécondation uniquement" },
      { id: "d", text: "La duplication de l'ADN en phase S" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "Lors de l'anaphase I, chaque paire de chromosomes homologues se sépare indépendamment des autres paires, générant un brassage interchromosomique (2^n combinaisons possibles).",
    wrongExplanations: {
      b: "Décrit le brassage intrachromosomique (crossing-over), un mécanisme distinct.",
      c: "La fécondation brasse les génomes parentaux, mais le brassage interchromosomique a lieu en amont, lors de la méiose.",
      d: "La réplication de l'ADN ne concerne pas la répartition des chromosomes homologues."
    },
    keywords: ["brassage interchromosomique", "anaphase I", "méiose"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Génétique"],
    sourceType: "original"
  },
  {
    id: "svt-034",
    subject: "svt",
    unit: "Génétique",
    lesson: "Maladies génétiques",
    type: "qcm",
    difficulty: "medium",
    text: "La trisomie 21 (syndrome de Down) résulte d'une anomalie :",
    options: [
      { id: "a", text: "Génique ponctuelle" },
      { id: "b", text: "Chromosomique numérique (présence d'un chromosome 21 surnuméraire)" },
      { id: "c", text: "De structure d'un seul gène" },
      { id: "d", text: "Purement environnementale, sans support génétique" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "La trisomie 21 est une aberration chromosomique numérique : trois exemplaires du chromosome 21 au lieu de deux, généralement dus à une non-disjonction méiotique.",
    wrongExplanations: {
      a: "Une mutation génique ponctuelle touche un gène précis, non le nombre de chromosomes.",
      c: "Il ne s'agit pas d'une anomalie de structure d'un gène isolé mais d'un chromosome entier surnuméraire.",
      d: "L'anomalie a bien un support génétique (chromosomique) identifiable ; ce n'est pas purement environnemental."
    },
    keywords: ["trisomie 21", "aberration chromosomique", "non-disjonction"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Génétique"],
    sourceType: "original"
  },
  {
    id: "svt-035",
    subject: "svt",
    unit: "Génétique",
    lesson: "Transcription",
    type: "qcm",
    difficulty: "medium",
    text: "Le rôle de l'ARN polymérase lors de la transcription est de :",
    options: [
      { id: "a", text: "Assembler les acides aminés en protéine" },
      { id: "b", text: "Synthétiser un brin d'ARN complémentaire au brin matrice d'ADN" },
      { id: "c", text: "Répliquer l'ADN en phase S" },
      { id: "d", text: "Dégrader l'ARNm après traduction" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "L'ARN polymérase parcourt le brin matrice d'ADN et assemble les ribonucléotides complémentaires pour former l'ARN (pré-messager).",
    wrongExplanations: {
      a: "L'assemblage des acides aminés est le rôle du ribosome lors de la traduction, pas de l'ARN polymérase.",
      c: "La réplication de l'ADN est assurée par l'ADN polymérase, une enzyme différente.",
      d: "La dégradation de l'ARNm est assurée par d'autres mécanismes cellulaires, pas par l'ARN polymérase."
    },
    keywords: ["ARN polymérase", "transcription"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Génétique"],
    sourceType: "original"
  },
  {
    id: "svt-036",
    subject: "svt",
    unit: "Génétique",
    lesson: "Test-cross",
    type: "qcm",
    difficulty: "medium",
    text: "Un test-cross (croisement-test) permet de :",
    options: [
      { id: "a", text: "Déterminer le génotype d'un individu de phénotype dominant en le croisant avec un homozygote récessif" },
      { id: "b", text: "Créer de nouveaux allèles" },
      { id: "c", text: "Éliminer le phénotype récessif d'une population" },
      { id: "d", text: "Dupliquer l'ADN d'un individu" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "En croisant un individu de phénotype dominant (génotype inconnu : AA ou Aa) avec un homozygote récessif (aa), les proportions phénotypiques obtenues révèlent si l'individu testé était homozygote ou hétérozygote.",
    wrongExplanations: {
      b: "Le test-cross ne crée aucun nouvel allèle ; il ne fait que révéler un génotype existant.",
      c: "Le test-cross est un outil d'analyse génétique, pas une méthode de sélection éliminant un phénotype.",
      d: "Il n'a aucun rapport avec la duplication de l'ADN."
    },
    keywords: ["test-cross", "génotype", "croisement-test"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Génétique"],
    sourceType: "original"
  },
  {
    id: "svt-037",
    subject: "svt",
    unit: "Immunologie",
    lesson: "Complexe majeur d'histocompatibilité",
    type: "qcm",
    difficulty: "medium",
    text: "Le complexe majeur d'histocompatibilité (CMH) permet notamment :",
    options: [
      { id: "a", text: "La reconnaissance du soi par les cellules immunitaires" },
      { id: "b", text: "La production directe d'anticorps" },
      { id: "c", text: "La réplication de l'ADN viral" },
      { id: "d", text: "Le transport de l'oxygène dans le sang" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "Les molécules du CMH, présentes à la surface des cellules, permettent au système immunitaire de distinguer le soi du non-soi et de présenter les antigènes aux lymphocytes T.",
    wrongExplanations: {
      b: "La production d'anticorps est le rôle des plasmocytes (lymphocytes B différenciés), pas du CMH lui-même.",
      c: "Le CMH n'intervient pas dans la réplication virale.",
      d: "Le transport de l'oxygène est assuré par l'hémoglobine, sans rapport avec le CMH."
    },
    keywords: ["CMH", "reconnaissance du soi"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Immunologie"],
    sourceType: "original"
  },
  {
    id: "svt-038",
    subject: "svt",
    unit: "Immunologie",
    lesson: "Lymphocytes T cytotoxiques",
    type: "qcm",
    difficulty: "medium",
    text: "Les lymphocytes T CD8 (LT8), une fois activés en lymphocytes T cytotoxiques, agissent en :",
    options: [
      { id: "a", text: "Sécrétant des anticorps spécifiques" },
      { id: "b", text: "Détruisant directement les cellules infectées ou anormales" },
      { id: "c", text: "Phagocytant les bactéries" },
      { id: "d", text: "Produisant des histamines" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Les LT8 cytotoxiques reconnaissent les cellules infectées (présentant l'antigène viral via le CMH-I) et les détruisent directement, notamment par libération de perforines.",
    wrongExplanations: {
      a: "La sécrétion d'anticorps est le rôle des lymphocytes B (plasmocytes), pas des LT8.",
      c: "La phagocytose est réalisée par les phagocytes (macrophages, polynucléaires), pas par les LT8.",
      d: "La libération d'histamine est associée aux réactions allergiques via les mastocytes, pas à l'action des LT8."
    },
    keywords: ["lymphocytes T8", "cytotoxique", "perforine"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Immunologie"],
    sourceType: "original"
  },
  {
    id: "svt-039",
    subject: "svt",
    unit: "Immunologie",
    lesson: "Sélection clonale",
    type: "qcm",
    difficulty: "hard",
    text: "La théorie de la sélection clonale explique que :",
    options: [
      { id: "a", text: "Un antigène crée de nouveaux lymphocytes spécifiques à la demande" },
      { id: "b", text: "Un antigène sélectionne et amplifie les lymphocytes déjà porteurs du récepteur spécifique correspondant" },
      { id: "c", text: "Tous les lymphocytes reconnaissent tous les antigènes" },
      { id: "d", text: "Les lymphocytes B se transforment en lymphocytes T après sélection" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Selon cette théorie, la diversité des récepteurs lymphocytaires préexiste avant la rencontre avec l'antigène ; celui-ci sélectionne le(s) clone(s) porteur(s) du récepteur complémentaire et déclenche leur prolifération (expansion clonale).",
    wrongExplanations: {
      a: "Les lymphocytes ne sont pas créés sur demande : leur diversité préexiste avant la rencontre antigénique.",
      c: "Chaque clone lymphocytaire est spécifique d'un antigène donné, pas de tous les antigènes.",
      d: "Les lymphocytes B et T sont deux lignées distinctes qui ne se transforment pas l'une en l'autre."
    },
    keywords: ["sélection clonale", "lymphocytes", "spécificité"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Immunologie"],
    sourceType: "original"
  },
  {
    id: "svt-040",
    subject: "svt",
    unit: "Immunologie",
    lesson: "VIH / SIDA",
    type: "qcm",
    difficulty: "medium",
    text: "Le VIH (virus du SIDA) affaiblit le système immunitaire en ciblant principalement :",
    options: [
      { id: "a", text: "Les globules rouges" },
      { id: "b", text: "Les lymphocytes T4 (auxiliaires)" },
      { id: "c", text: "Les plaquettes sanguines" },
      { id: "d", text: "Les cellules musculaires" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le VIH infecte préférentiellement les lymphocytes T4, essentiels à la coordination de la réponse immunitaire (activation des LB et LT8) ; leur destruction progressive conduit à l'immunodéficience caractéristique du SIDA.",
    wrongExplanations: {
      a: "Les globules rouges assurent le transport de l'oxygène ; ils ne sont pas la cible principale du VIH.",
      c: "Les plaquettes interviennent dans la coagulation, sans lien direct avec le mécanisme du SIDA.",
      d: "Les cellules musculaires ne sont pas la cible du VIH."
    },
    keywords: ["VIH", "SIDA", "lymphocytes T4"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Immunologie"],
    sourceType: "original"
  },
  {
    id: "svt-041",
    subject: "svt",
    unit: "Immunologie",
    lesson: "Réaction inflammatoire",
    type: "qcm",
    difficulty: "hard",
    text: "Lors d'une réaction inflammatoire aiguë, la vasodilatation locale et l'augmentation de la perméabilité des capillaires ont pour but principal de :",
    options: [
      { id: "a", text: "Réduire l'apport sanguin à la zone lésée" },
      { id: "b", text: "Faciliter l'arrivée des phagocytes et des molécules de défense au site de l'infection" },
      { id: "c", text: "Provoquer la mort des cellules saines environnantes" },
      { id: "d", text: "Bloquer totalement la circulation sanguine locale" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "La vasodilatation et l'augmentation de perméabilité capillaire favorisent l'afflux de plasma et de phagocytes (polynucléaires, monocytes) vers le site infecté, expliquant rougeur, chaleur et œdème caractéristiques de l'inflammation.",
    wrongExplanations: {
      a: "C'est l'inverse : l'afflux sanguin local augmente, il ne diminue pas.",
      c: "L'inflammation vise à protéger les tissus, pas à détruire les cellules saines environnantes.",
      d: "La circulation locale est augmentée, pas bloquée."
    },
    keywords: ["inflammation", "vasodilatation", "phagocytes"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Immunologie"],
    sourceType: "original"
  },
  {
    id: "svt-042",
    subject: "svt",
    unit: "Immunologie",
    lesson: "Greffes et rejet",
    type: "qcm",
    difficulty: "medium",
    text: "Le rejet d'une greffe d'organe entre deux individus génétiquement différents s'explique par :",
    options: [
      { id: "a", text: "Une incompatibilité des groupes sanguins uniquement" },
      { id: "b", text: "La reconnaissance du greffon comme non-soi par le système immunitaire du receveur" },
      { id: "c", text: "Une réaction purement mécanique de l'organisme" },
      { id: "d", text: "L'absence totale de vascularisation du greffon" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Les molécules du CMH du greffon, différentes de celles du receveur, sont reconnues comme non-soi par les lymphocytes T du receveur, déclenchant une réponse immunitaire de rejet.",
    wrongExplanations: {
      a: "La compatibilité des groupes sanguins est nécessaire mais ne suffit pas à expliquer, à elle seule, le mécanisme immunitaire du rejet de greffe.",
      c: "Le rejet est un phénomène immunologique actif, pas une simple réaction mécanique.",
      d: "Le greffon est bien vascularisé ; le rejet est de nature immunitaire, pas lié à un défaut de vascularisation."
    },
    keywords: ["greffe", "rejet", "CMH", "non-soi"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Immunologie"],
    sourceType: "original"
  },
  {
    id: "svt-043",
    subject: "svt",
    unit: "Immunologie",
    lesson: "Allergie",
    type: "qcm",
    difficulty: "medium",
    text: "Lors d'une réaction allergique, les mastocytes libèrent notamment de l'histamine, responsable :",
    options: [
      { id: "a", text: "De la coagulation du sang" },
      { id: "b", text: "De la vasodilatation et des symptômes (démangeaisons, œdème) typiques de l'allergie" },
      { id: "c", text: "De la synthèse d'anticorps" },
      { id: "d", text: "De la destruction directe des bactéries" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "L'histamine libérée par les mastocytes lors d'une réaction allergique provoque vasodilatation, augmentation de perméabilité vasculaire et contraction des muscles lisses, à l'origine des symptômes allergiques.",
    wrongExplanations: {
      a: "L'histamine n'intervient pas dans la coagulation sanguine.",
      c: "La synthèse d'anticorps est assurée par les plasmocytes, pas par l'histamine elle-même.",
      d: "L'histamine ne détruit pas directement les bactéries ; son rôle est de médier la réponse inflammatoire/allergique."
    },
    keywords: ["allergie", "histamine", "mastocytes"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Immunologie"],
    sourceType: "original"
  },
  {
    id: "svt-044",
    subject: "svt",
    unit: "Immunologie",
    lesson: "Mémoire immunitaire",
    type: "qcm",
    difficulty: "medium",
    text: "Lors d'un second contact avec le même antigène, la réponse immunitaire secondaire est généralement :",
    options: [
      { id: "a", text: "Plus lente et plus faible que la réponse primaire" },
      { id: "b", text: "Plus rapide et plus intense grâce aux lymphocytes mémoire" },
      { id: "c", text: "Strictement identique à la réponse primaire" },
      { id: "d", text: "Absente, car l'organisme ne réagit qu'une seule fois" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Grâce aux lymphocytes mémoire formés lors du premier contact, la réponse secondaire est plus rapide, plus intense et plus durable que la réponse primaire — c'est le principe exploité par la vaccination.",
    wrongExplanations: {
      a: "C'est l'inverse : la réponse secondaire est plus rapide et plus forte, pas plus lente et faible.",
      c: "La réponse secondaire diffère nettement de la primaire en rapidité et intensité.",
      d: "L'organisme réagit bien à chaque nouveau contact, et de façon renforcée grâce à la mémoire immunitaire."
    },
    keywords: ["mémoire immunitaire", "réponse secondaire"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Immunologie"],
    sourceType: "original"
  },
  {
    id: "svt-045",
    subject: "svt",
    unit: "Immunologie",
    lesson: "Phagocytose",
    type: "qcm",
    difficulty: "medium",
    text: "Les étapes de la phagocytose se déroulent, dans l'ordre, selon la séquence :",
    options: [
      { id: "a", text: "Digestion, adhésion, ingestion" },
      { id: "b", text: "Adhésion (reconnaissance), ingestion (endocytose), digestion enzymatique" },
      { id: "c", text: "Ingestion, adhésion, digestion" },
      { id: "d", text: "Digestion, ingestion, adhésion" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le phagocyte adhère d'abord à l'agent pathogène (reconnaissance), puis l'ingère en formant une vésicule (phagosome), avant de le digérer grâce à la fusion avec un lysosome.",
    wrongExplanations: {
      a: "Inverse l'ordre réel des étapes : l'adhésion précède toujours l'ingestion.",
      c: "Inverse l'ordre réel : l'adhésion doit précéder l'ingestion.",
      d: "Inverse l'ordre réel : l'adhésion et l'ingestion précèdent toujours la digestion."
    },
    keywords: ["phagocytose", "étapes", "lysosome"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Immunologie"],
    sourceType: "original"
  },
  {
    id: "svt-046",
    subject: "svt",
    unit: "Immunologie",
    lesson: "Anticorps monoclonaux",
    type: "qcm",
    difficulty: "hard",
    text: "Des anticorps sont dits « monoclonaux » lorsqu'ils :",
    options: [
      { id: "a", text: "Proviennent d'un seul clone de plasmocytes et sont donc identiques et spécifiques d'un seul épitope" },
      { id: "b", text: "Reconnaissent tous les antigènes possibles" },
      { id: "c", text: "Sont produits par plusieurs types de lymphocytes différents simultanément" },
      { id: "d", text: "Ne peuvent jamais être utilisés en médecine" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "Les anticorps monoclonaux sont issus d'un unique clone de plasmocytes (souvent produits en laboratoire) et sont donc rigoureusement identiques, ciblant un seul épitope avec une grande spécificité.",
    wrongExplanations: {
      b: "C'est l'inverse : leur intérêt réside justement dans leur spécificité étroite pour un seul antigène.",
      c: "Des anticorps issus de plusieurs lignées différentes seraient dits polyclonaux, pas monoclonaux.",
      d: "Les anticorps monoclonaux sont au contraire largement utilisés en médecine (diagnostics, traitements ciblés)."
    },
    keywords: ["anticorps monoclonaux", "plasmocytes", "épitope"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Immunologie"],
    sourceType: "original"
  },
  {
    id: "svt-047",
    subject: "svt",
    unit: "Neurophysiologie",
    lesson: "Structure du neurone",
    type: "qcm",
    difficulty: "easy",
    text: "Le rôle principal des dendrites d'un neurone est de :",
    options: [
      { id: "a", text: "Conduire l'influx nerveux vers le corps cellulaire, en réceptionnant les messages entrants" },
      { id: "b", text: "Transmettre l'influx nerveux vers d'autres neurones via l'axone" },
      { id: "c", text: "Produire l'énergie cellulaire" },
      { id: "d", text: "Synthétiser les neurotransmetteurs uniquement" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "Les dendrites sont les prolongements qui reçoivent les signaux provenant d'autres neurones et les conduisent vers le corps cellulaire (soma).",
    wrongExplanations: {
      b: "Ce rôle est assuré par l'axone, un prolongement distinct des dendrites.",
      c: "La production d'énergie (mitochondries) n'est pas une fonction spécifique des dendrites.",
      d: "La synthèse des neurotransmetteurs a lieu notamment dans le corps cellulaire et les terminaisons axonales, pas spécifiquement dans les dendrites."
    },
    keywords: ["neurone", "dendrites", "influx nerveux"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Neurophysiologie"],
    sourceType: "original"
  },
  {
    id: "svt-048",
    subject: "svt",
    unit: "Neurophysiologie",
    lesson: "Repolarisation",
    type: "qcm",
    difficulty: "hard",
    text: "La phase de repolarisation du potentiel d'action est due principalement à :",
    options: [
      { id: "a", text: "L'entrée massive d'ions Na+" },
      { id: "b", text: "La sortie d'ions K+ par les canaux K+ voltage-dépendants" },
      { id: "c", text: "L'entrée d'ions Ca2+" },
      { id: "d", text: "L'arrêt total des échanges ioniques membranaires" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Après la dépolarisation (entrée de Na+), l'ouverture des canaux K+ voltage-dépendants permet la sortie de K+, ramenant le potentiel de membrane vers sa valeur négative de repos.",
    wrongExplanations: {
      a: "L'entrée de Na+ est responsable de la dépolarisation, la phase précédente, pas de la repolarisation.",
      c: "L'entrée de Ca2+ intervient surtout au niveau de la terminaison synaptique, pas dans la repolarisation axonale elle-même.",
      d: "Les échanges ioniques se poursuivent activement durant la repolarisation ; ils ne s'arrêtent pas."
    },
    keywords: ["repolarisation", "potentiel d'action", "canaux K+"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Neurophysiologie"],
    sourceType: "original"
  },
  {
    id: "svt-049",
    subject: "svt",
    unit: "Neurophysiologie",
    lesson: "Plaque motrice",
    type: "qcm",
    difficulty: "medium",
    text: "Au niveau de la jonction neuromusculaire (plaque motrice), le neurotransmetteur libéré par le motoneurone est généralement :",
    options: [
      { id: "a", text: "La dopamine" },
      { id: "b", text: "L'acétylcholine" },
      { id: "c", text: "La sérotonine" },
      { id: "d", text: "Le GABA" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "L'acétylcholine, libérée par le motoneurone au niveau de la plaque motrice, se fixe sur des récepteurs de la fibre musculaire et déclenche sa contraction.",
    wrongExplanations: {
      a: "La dopamine est impliquée dans d'autres circuits neuronaux (récompense, contrôle moteur central), pas typiquement à la jonction neuromusculaire périphérique.",
      c: "La sérotonine intervient dans la régulation de l'humeur, du sommeil, etc., pas dans la transmission neuromusculaire classique.",
      d: "Le GABA est un neurotransmetteur inhibiteur central, pas celui de la jonction neuromusculaire."
    },
    keywords: ["plaque motrice", "acétylcholine", "jonction neuromusculaire"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Neurophysiologie"],
    sourceType: "original"
  },
  {
    id: "svt-050",
    subject: "svt",
    unit: "Neurophysiologie",
    lesson: "Contraction musculaire",
    type: "qcm",
    difficulty: "hard",
    text: "La contraction musculaire au niveau du sarcomère résulte du glissement relatif :",
    options: [
      { id: "a", text: "Des filaments d'actine et de myosine l'un par rapport à l'autre" },
      { id: "b", text: "Des mitochondries à l'intérieur de la fibre" },
      { id: "c", text: "Du noyau musculaire vers la membrane" },
      { id: "d", text: "Des filaments de collagène du tendon" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "Selon le modèle du glissement des filaments, les têtes de myosine s'accrochent à l'actine et tirent les filaments fins vers le centre du sarcomère, raccourcissant celui-ci : c'est la base moléculaire de la contraction musculaire.",
    wrongExplanations: {
      b: "Les mitochondries fournissent l'énergie (ATP) nécessaire, mais leur déplacement n'est pas le mécanisme de la contraction.",
      c: "Le déplacement du noyau n'est pas le mécanisme de la contraction musculaire.",
      d: "Le collagène tendineux transmet la force générée par le muscle ; il n'est pas lui-même le siège du glissement contractile."
    },
    keywords: ["sarcomère", "actine", "myosine", "contraction musculaire"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Neurophysiologie"],
    sourceType: "original"
  },
  {
    id: "svt-051",
    subject: "svt",
    unit: "Neurophysiologie",
    lesson: "Sommation synaptique",
    type: "qcm",
    difficulty: "hard",
    text: "Lorsque plusieurs potentiels postsynaptiques excitateurs sous-liminaires s'additionnent pour atteindre le seuil et déclencher un potentiel d'action, on parle de :",
    options: [
      { id: "a", text: "Sommation synaptique" },
      { id: "b", text: "Potentiel de repos" },
      { id: "c", text: "Période réfractaire absolue" },
      { id: "d", text: "Inhibition présynaptique" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "La sommation (spatiale ou temporelle) des potentiels postsynaptiques excitateurs permet d'atteindre le seuil de déclenchement d'un potentiel d'action, même si chaque stimulation prise isolément est sous-liminaire.",
    wrongExplanations: {
      b: "Le potentiel de repos correspond à l'état stable de la membrane en l'absence de stimulation, pas au phénomène d'addition des signaux.",
      c: "La période réfractaire absolue est le moment où un nouveau potentiel d'action ne peut pas être déclenché, un concept distinct.",
      d: "L'inhibition présynaptique diminue la libération de neurotransmetteur, un mécanisme différent de la sommation excitatrice décrite ici."
    },
    keywords: ["sommation synaptique", "potentiel postsynaptique", "seuil"],
    suggestedTimeSeconds: 75,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Neurophysiologie"],
    sourceType: "original"
  },
  {
    id: "svt-052",
    subject: "svt",
    unit: "Neurophysiologie",
    lesson: "Organisation du système nerveux",
    type: "qcm",
    difficulty: "easy",
    text: "Le système nerveux périphérique comprend :",
    options: [
      { id: "a", text: "L'encéphale et la moelle épinière" },
      { id: "b", text: "Les nerfs crâniens et rachidiens reliant le système nerveux central aux organes" },
      { id: "c", text: "Uniquement le cerveau" },
      { id: "d", text: "Uniquement les organes des sens" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le système nerveux périphérique regroupe l'ensemble des nerfs (crâniens et rachidiens) qui relient le système nerveux central (encéphale + moelle épinière) aux différents organes et récepteurs sensoriels.",
    wrongExplanations: {
      a: "L'encéphale et la moelle épinière constituent le système nerveux central, pas périphérique.",
      c: "Le cerveau fait partie du système nerveux central.",
      d: "Les organes des sens sont reliés par des nerfs périphériques, mais ne constituent pas à eux seuls le système nerveux périphérique."
    },
    keywords: ["système nerveux périphérique", "nerfs", "système nerveux central"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Neurophysiologie"],
    sourceType: "original"
  },
  {
    id: "svt-053",
    subject: "svt",
    unit: "Neurophysiologie",
    lesson: "Vitesse de conduction",
    type: "qcm",
    difficulty: "medium",
    text: "La présence d'une gaine de myéline autour d'un axone a pour effet de :",
    options: [
      { id: "a", text: "Ralentir considérablement la conduction de l'influx nerveux" },
      { id: "b", text: "Accélérer la conduction de l'influx nerveux grâce à la conduction saltatoire" },
      { id: "c", text: "Empêcher totalement la conduction nerveuse" },
      { id: "d", text: "Transformer le signal électrique en signal chimique" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "La myéline isole l'axone et impose une conduction « saltatoire » de nœud de Ranvier en nœud de Ranvier, ce qui augmente significativement la vitesse de propagation du message nerveux par rapport à un axone non myélinisé.",
    wrongExplanations: {
      a: "C'est l'inverse : la myélinisation accélère la conduction, elle ne la ralentit pas.",
      c: "La myéline permet la conduction, elle ne l'empêche pas.",
      d: "Le signal reste électrique le long de l'axone myélinisé ; la conversion en signal chimique n'a lieu qu'au niveau de la synapse."
    },
    keywords: ["myéline", "conduction saltatoire", "nœud de Ranvier"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Neurophysiologie"],
    sourceType: "original"
  },
  {
    id: "svt-054",
    subject: "svt",
    unit: "Neurophysiologie",
    lesson: "Neurotransmetteurs inhibiteurs",
    type: "qcm",
    difficulty: "hard",
    text: "Un neurotransmetteur inhibiteur, en se fixant sur son récepteur postsynaptique, tend à :",
    options: [
      { id: "a", text: "Dépolariser la membrane et rapprocher le neurone du seuil" },
      { id: "b", text: "Hyperpolariser la membrane, éloignant le neurone du seuil de déclenchement" },
      { id: "c", text: "Détruire immédiatement le neurone postsynaptique" },
      { id: "d", text: "N'avoir aucun effet mesurable sur le potentiel de membrane" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Un neurotransmetteur inhibiteur (ex. GABA) provoque généralement une hyperpolarisation (potentiel postsynaptique inhibiteur), éloignant la membrane du seuil et réduisant la probabilité de déclenchement d'un potentiel d'action.",
    wrongExplanations: {
      a: "Ce mécanisme (dépolarisation, rapprochement du seuil) décrit l'action d'un neurotransmetteur excitateur, pas inhibiteur.",
      c: "L'action d'un neurotransmetteur inhibiteur est réversible et physiologique ; elle ne détruit pas le neurone.",
      d: "Un effet mesurable existe bel et bien : l'hyperpolarisation de la membrane postsynaptique."
    },
    keywords: ["neurotransmetteur inhibiteur", "hyperpolarisation", "GABA"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Neurophysiologie"],
    sourceType: "original"
  },
  {
    id: "svt-055",
    subject: "svt",
    unit: "Neurophysiologie",
    lesson: "Période réfractaire",
    type: "qcm",
    difficulty: "hard",
    text: "Pendant la période réfractaire absolue qui suit un potentiel d'action, la membrane axonale :",
    options: [
      { id: "a", text: "Peut déclencher un nouveau potentiel d'action quel que soit le stimulus" },
      { id: "b", text: "Est temporairement incapable de générer un nouveau potentiel d'action, quelle que soit l'intensité du stimulus" },
      { id: "c", text: "Reste indéfiniment dépolarisée" },
      { id: "d", text: "Perd définitivement sa capacité à conduire l'influx nerveux" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Durant la période réfractaire absolue, les canaux Na+ voltage-dépendants sont inactivés : aucun nouveau potentiel d'action ne peut être déclenché, même avec un stimulus très intense, ce qui garantit la propagation unidirectionnelle du message nerveux.",
    wrongExplanations: {
      a: "C'est précisément l'inverse de la définition de la période réfractaire absolue.",
      c: "La dépolarisation n'est que transitoire ; la membrane retourne à son état de repos après la période réfractaire.",
      d: "La capacité de conduction est seulement temporairement suspendue, pas perdue définitivement."
    },
    keywords: ["période réfractaire absolue", "canaux Na+", "potentiel d'action"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Neurophysiologie"],
    sourceType: "original"
  },
  {
    id: "svt-056",
    subject: "svt",
    unit: "Neurophysiologie",
    lesson: "Réflexe photomoteur",
    type: "qcm",
    difficulty: "medium",
    text: "Le réflexe photomoteur (contraction de la pupille sous l'effet de la lumière) illustre :",
    options: [
      { id: "a", text: "Un réflexe conditionné appris" },
      { id: "b", text: "Un réflexe inné, involontaire, à médiation nerveuse rapide" },
      { id: "c", text: "Une réponse hormonale lente" },
      { id: "d", text: "Un phénomène purement volontaire" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le réflexe photomoteur est un réflexe inné (non appris), rapide et involontaire, dont le centre nerveux se situe au niveau du tronc cérébral, sur le modèle général de l'arc réflexe.",
    wrongExplanations: {
      a: "Un réflexe conditionné (type Pavlov) s'acquiert par apprentissage ; le réflexe photomoteur est inné, présent dès la naissance.",
      c: "La réponse est nerveuse et quasi instantanée, pas de nature hormonale lente.",
      d: "Il s'agit au contraire d'une réponse involontaire, échappant au contrôle conscient direct."
    },
    keywords: ["réflexe photomoteur", "réflexe inné", "arc réflexe"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Neurophysiologie"],
    sourceType: "original"
  },
  {
    id: "svt-057",
    subject: "svt",
    unit: "Géologie",
    lesson: "Subduction",
    type: "qcm",
    difficulty: "medium",
    text: "Au niveau d'une zone de subduction, la croûte océanique, plus dense :",
    options: [
      { id: "a", text: "S'enfonce sous la plaque adjacente (continentale ou océanique)" },
      { id: "b", text: "Remonte systématiquement à la surface" },
      { id: "c", text: "Se transforme immédiatement en croûte continentale" },
      { id: "d", text: "Reste totalement immobile" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "Dans une zone de subduction, la lithosphère océanique, plus dense et plus froide, plonge sous une autre plaque, générant volcanisme, séismes et formation de fosses océaniques.",
    wrongExplanations: {
      b: "C'est l'inverse : la croûte océanique s'enfonce en profondeur, elle ne remonte pas à la surface.",
      c: "La croûte océanique subductée est en partie recyclée dans le manteau ; elle ne se transforme pas instantanément en croûte continentale.",
      d: "La subduction est justement un processus dynamique et actif, pas un état d'immobilité."
    },
    keywords: ["subduction", "fosse océanique", "lithosphère"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Géologie"],
    sourceType: "original"
  },
  {
    id: "svt-058",
    subject: "svt",
    unit: "Géologie",
    lesson: "Volcanisme",
    type: "qcm",
    difficulty: "hard",
    text: "Le volcanisme explosif, riche en gaz et produisant des roches comme la rhyolite, est généralement associé à un magma :",
    options: [
      { id: "a", text: "Très fluide et pauvre en silice" },
      { id: "b", text: "Visqueux et riche en silice" },
      { id: "c", text: "Totalement dépourvu de gaz" },
      { id: "d", text: "Exclusivement basaltique" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Un magma riche en silice est plus visqueux, ce qui piège les gaz et favorise des éruptions explosives (ex. volcans de subduction), contrairement à un magma fluide pauvre en silice qui favorise un volcanisme plutôt effusif.",
    wrongExplanations: {
      a: "Un magma fluide et pauvre en silice favorise plutôt un volcanisme effusif (coulées), pas explosif.",
      c: "C'est justement la présence et l'accumulation de gaz sous pression qui rend ce volcanisme explosif.",
      d: "Le volcanisme basaltique est généralement associé à un magma fluide et à des éruptions plutôt effusives, pas explosives."
    },
    keywords: ["volcanisme explosif", "magma", "silice"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Géologie"],
    sourceType: "original"
  },
  {
    id: "svt-059",
    subject: "svt",
    unit: "Géologie",
    lesson: "Paléomagnétisme",
    type: "qcm",
    difficulty: "hard",
    text: "L'étude du paléomagnétisme des fonds océaniques, avec ses bandes symétriques par rapport à la dorsale, apporte une preuve majeure de :",
    options: [
      { id: "a", text: "L'immobilité totale des continents" },
      { id: "b", text: "L'expansion des fonds océaniques et de la tectonique des plaques" },
      { id: "c", text: "L'absence de champ magnétique terrestre" },
      { id: "d", text: "La formation des continents par volcanisme uniquement" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Les bandes d'anomalies magnétiques symétriques de part et d'autre des dorsales enregistrent les inversions successives du champ magnétique terrestre au fur et à mesure de la formation de nouvelle croûte océanique, confirmant l'expansion des fonds océaniques.",
    wrongExplanations: {
      a: "Ce phénomène démontre au contraire le déplacement des plaques, pas leur immobilité.",
      c: "Le champ magnétique terrestre existe bel et bien ; ce sont justement ses inversions qui sont enregistrées dans les roches.",
      d: "Ce phénomène concerne la formation de croûte océanique au niveau des dorsales, pas la formation des continents."
    },
    keywords: ["paléomagnétisme", "expansion océanique", "dorsale"],
    suggestedTimeSeconds: 75,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Géologie"],
    sourceType: "original"
  },
  {
    id: "svt-060",
    subject: "svt",
    unit: "Géologie",
    lesson: "Dérive des continents",
    type: "qcm",
    difficulty: "medium",
    text: "Alfred Wegener a fondé sa théorie de la dérive des continents notamment sur :",
    options: [
      { id: "a", text: "La correspondance des côtes, la répartition des fossiles et des formations géologiques entre continents aujourd'hui séparés" },
      { id: "b", text: "Des mesures GPS modernes" },
      { id: "c", text: "L'étude du magnétisme des fonds océaniques" },
      { id: "d", text: "La composition chimique de l'atmosphère actuelle" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "Wegener s'est appuyé sur la concordance des formes des côtes (Afrique/Amérique du Sud), la distribution de fossiles identiques sur des continents aujourd'hui séparés par des océans, et la continuité de formations géologiques, pour proposer l'existence d'un supercontinent (la Pangée).",
    wrongExplanations: {
      b: "Le GPS est une technologie moderne, inexistante à l'époque de Wegener (début XXe siècle).",
      c: "L'étude détaillée du paléomagnétisme des fonds océaniques est venue confirmer la théorie plus tard, dans les années 1960, pas à l'origine chez Wegener.",
      d: "La composition de l'atmosphère actuelle n'a pas de rapport avec les arguments originaux de Wegener."
    },
    keywords: ["Wegener", "dérive des continents", "Pangée"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Géologie"],
    sourceType: "original"
  },
  {
    id: "svt-061",
    subject: "svt",
    unit: "Géologie",
    lesson: "Datation relative",
    type: "qcm",
    difficulty: "easy",
    text: "Le principe de superposition, utilisé en datation relative, énonce que dans une série sédimentaire non perturbée :",
    options: [
      { id: "a", text: "Les couches les plus profondes sont les plus récentes" },
      { id: "b", text: "Les couches les plus profondes sont les plus anciennes" },
      { id: "c", text: "Toutes les couches se sont déposées simultanément" },
      { id: "d", text: "L'âge des couches ne peut jamais être comparé entre elles" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Selon le principe de superposition, dans une série sédimentaire non déformée, chaque couche est plus récente que celle sur laquelle elle repose : les couches profondes sont donc les plus anciennes.",
    wrongExplanations: {
      a: "C'est l'inverse du principe de superposition.",
      c: "Les couches se déposent successivement au cours du temps, pas simultanément.",
      d: "Ce principe permet justement d'établir un ordre chronologique relatif entre les couches."
    },
    keywords: ["principe de superposition", "datation relative", "stratigraphie"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Géologie"],
    sourceType: "original"
  },
  {
    id: "svt-062",
    subject: "svt",
    unit: "Géologie",
    lesson: "Datation absolue",
    type: "qcm",
    difficulty: "hard",
    text: "La datation absolue par radiochronologie (ex. potassium-argon) permet de déterminer :",
    options: [
      { id: "a", text: "Uniquement l'ordre relatif des événements géologiques" },
      { id: "b", text: "L'âge numérique (en années) d'une roche, à partir de la désintégration d'un isotope radioactif" },
      { id: "c", text: "La composition chimique exacte du magma actuel" },
      { id: "d", text: "La vitesse actuelle de déplacement des plaques" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "La radiochronologie mesure les proportions d'un isotope radioactif (élément père) et de son produit de désintégration (élément fils) pour calculer, via la demi-vie connue, l'âge numérique de formation de la roche.",
    wrongExplanations: {
      a: "C'est la datation relative (superposition, fossiles stratigraphiques) qui fournit un ordre sans âge numérique ; la datation absolue donne un âge chiffré.",
      c: "Cette méthode renseigne sur l'âge de la roche, pas sur la composition chimique du magma actuel.",
      d: "La vitesse de déplacement des plaques se mesure par d'autres moyens (GPS notamment), pas par radiochronologie."
    },
    keywords: ["datation absolue", "radiochronologie", "isotope"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Géologie"],
    sourceType: "original"
  },
  {
    id: "svt-063",
    subject: "svt",
    unit: "Géologie",
    lesson: "Métamorphisme",
    type: "qcm",
    difficulty: "medium",
    text: "Le métamorphisme est une transformation d'une roche :",
    options: [
      { id: "a", text: "Par fusion complète puis recristallisation en surface" },
      { id: "b", text: "À l'état solide, sous l'effet de la pression et/ou de la température, sans fusion" },
      { id: "c", text: "Par simple dépôt de nouveaux sédiments" },
      { id: "d", text: "Uniquement par altération chimique en surface" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le métamorphisme modifie la texture et/ou la composition minéralogique d'une roche à l'état solide (sans fusion), sous l'effet d'une augmentation de pression et/ou de température, généralement en profondeur.",
    wrongExplanations: {
      a: "Une fusion complète correspondrait à la formation d'un magma, pas à un métamorphisme, qui se produit justement sans fusion.",
      c: "Le dépôt de sédiments correspond à la sédimentation, un processus distinct du métamorphisme.",
      d: "L'altération chimique de surface relève de la météorisation/l'érosion, pas du métamorphisme profond."
    },
    keywords: ["métamorphisme", "pression", "température"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Géologie"],
    sourceType: "original"
  },
  {
    id: "svt-064",
    subject: "svt",
    unit: "Géologie",
    lesson: "Risques géologiques",
    type: "qcm",
    difficulty: "medium",
    text: "L'échelle de Richter (ou son équivalent moderne, l'échelle de magnitude de moment) mesure :",
    options: [
      { id: "a", text: "Les dégâts matériels observés en un lieu précis" },
      { id: "b", text: "L'énergie libérée à la source du séisme" },
      { id: "c", text: "Uniquement la profondeur du foyer" },
      { id: "d", text: "La température des roches en profondeur" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "La magnitude (Richter ou moment) quantifie l'énergie libérée au foyer du séisme ; elle est unique pour un séisme donné, contrairement à l'intensité (échelle MSK) qui, elle, varie selon le lieu d'observation et les dégâts constatés.",
    wrongExplanations: {
      a: "Les dégâts observés localement relèvent de l'échelle d'intensité, pas de la magnitude.",
      c: "La profondeur du foyer est une donnée distincte de la magnitude, bien que les deux soient parfois rapportées ensemble.",
      d: "La température des roches n'est pas ce que mesure une échelle de magnitude sismique."
    },
    keywords: ["magnitude", "séisme", "échelle de Richter"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Géologie"],
    sourceType: "original"
  },
  {
    id: "svt-065",
    subject: "svt",
    unit: "Géologie",
    lesson: "Collision continentale",
    type: "qcm",
    difficulty: "hard",
    text: "La formation d'une chaîne de montagnes comme l'Himalaya résulte typiquement :",
    options: [
      { id: "a", text: "D'une divergence entre deux plaques océaniques" },
      { id: "b", text: "D'une collision entre deux plaques continentales après fermeture d'un océan" },
      { id: "c", text: "D'une subduction d'une plaque continentale sous une autre plaque continentale" },
      { id: "d", text: "D'une simple accumulation de sédiments sans déformation" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "La collision continentale (ex. Inde/Asie pour l'Himalaya) survient après la fermeture complète d'un océan par subduction ; les deux plaques continentales, trop peu denses pour subducter, entrent en collision et se déforment, formant une chaîne de montagnes par plissement et épaississement crustal.",
    wrongExplanations: {
      a: "Une divergence entre plaques océaniques forme une dorsale, pas une chaîne de montagnes de collision.",
      c: "La croûte continentale, moins dense, résiste à la subduction : c'est justement pour cela qu'une collision (et non une subduction continentale) se produit.",
      d: "La formation d'une chaîne de collision implique une déformation intense (plis, failles, épaississement), pas une simple accumulation sans déformation."
    },
    keywords: ["collision continentale", "Himalaya", "chaîne de montagnes"],
    suggestedTimeSeconds: 75,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Géologie"],
    sourceType: "original"
  },
  {
    id: "svt-066",
    subject: "svt",
    unit: "Géologie",
    lesson: "Cycle des roches",
    type: "qcm",
    difficulty: "medium",
    text: "Dans le cycle géologique des roches, une roche sédimentaire soumise à une forte pression et température en profondeur, sans fusion, peut se transformer en :",
    options: [
      { id: "a", text: "Roche magmatique directement" },
      { id: "b", text: "Roche métamorphique" },
      { id: "c", text: "Sédiment meuble non consolidé" },
      { id: "d", text: "Magma immédiatement" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Sous l'effet de la pression et de la température en profondeur, sans fusion, une roche sédimentaire se transforme progressivement en roche métamorphique, dans le cadre du cycle des roches.",
    wrongExplanations: {
      a: "Une roche magmatique provient de la solidification d'un magma, pas d'une transformation à l'état solide.",
      c: "Une roche déjà consolidée ne redevient pas un sédiment meuble sous l'effet de la pression et de la température ; elle se métamorphise.",
      d: "Une fusion complète en magma nécessiterait des conditions plus extrêmes que celles du métamorphisme classique, qui se fait justement sans fusion."
    },
    keywords: ["cycle des roches", "métamorphisme", "roche sédimentaire"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Programme SVT Bac Maroc — Sciences Expérimentales, unité Géologie"],
    sourceType: "original"
  }
];
