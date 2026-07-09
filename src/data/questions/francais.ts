import type { Question } from "../../core/entities/Question";

/**
 * All 16 questions here are original (`sourceType: "original"`). Research on ISPITS.net /
 * Moutamadris exam indexes confirmed the French paper includes a text-comprehension
 * ("analyse de texte") component alongside grammar/vocabulary, which this set reflects — see
 * docs/DATA_MODEL.md.
 */
export const FRANCAIS_QUESTIONS: Question[] = [
  {
    id: "fr-001",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Accord du participe passé",
    type: "qcm",
    difficulty: "medium",
    text: "Choisissez la phrase correctement accordée :",
    options: [
      { id: "a", text: "Les erreurs qu'il a commis ont coûté cher." },
      { id: "b", text: "Les erreurs qu'il a commises ont coûté cher." },
      { id: "c", text: "Les erreurs qu'il a commisent ont coûté cher." },
      { id: "d", text: "Les erreurs qu'il a commise ont coûté cher." }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Avec l'auxiliaire « avoir », le participe passé s'accorde avec le COD s'il est placé avant le verbe. « que » (= les erreurs, féminin pluriel) précède « a commis » : on accorde « commises ».",
    wrongExplanations: {
      a: "Aucun accord alors que le COD féminin pluriel précède le verbe.",
      c: "« commisent » n'est pas une forme correcte du participe passé de « commettre ».",
      d: "Accord au féminin singulier au lieu du féminin pluriel."
    },
    keywords: ["participe passé", "accord", "COD", "avoir"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-002",
    subject: "fr",
    unit: "Conjugaison",
    lesson: "Subjonctif présent",
    type: "qcm",
    difficulty: "easy",
    text: "Complétez : « Il faut que tu ___ à l'heure. »",
    options: [
      { id: "a", text: "viens" },
      { id: "b", text: "viennes" },
      { id: "c", text: "venais" },
      { id: "d", text: "viendra" }
    ],
    correctOptionId: "b",
    correctExplanation: "Après « il faut que », on emploie le subjonctif présent : « que tu viennes ».",
    wrongExplanations: {
      a: "Forme de l'indicatif présent, incompatible avec « il faut que ».",
      c: "Forme de l'imparfait de l'indicatif.",
      d: "Forme du futur simple de l'indicatif."
    },
    keywords: ["subjonctif", "conjugaison", "venir"],
    suggestedTimeSeconds: 40,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-003",
    subject: "fr",
    unit: "Vocabulaire",
    lesson: "Synonymie",
    type: "qcm",
    difficulty: "easy",
    text: "Quel est le synonyme le plus proche de « pertinente » dans : « Sa remarque était pertinente. » ?",
    options: [
      { id: "a", text: "Impertinente" },
      { id: "b", text: "Appropriée" },
      { id: "c", text: "Bruyante" },
      { id: "d", text: "Ancienne" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Pertinent » signifie qui se rapporte exactement au sujet, judicieux et approprié au contexte.",
    wrongExplanations: {
      a: "Quasi-antonyme : signifie irrespectueuse ou déplacée.",
      c: "Aucun lien de sens avec « pertinente ».",
      d: "Renvoie au temps, sans rapport avec la justesse d'une remarque."
    },
    keywords: ["synonyme", "vocabulaire", "pertinent"],
    suggestedTimeSeconds: 40,
    estimatedFrequency: "unknown",
    references: ["Vocabulaire français — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-004",
    subject: "fr",
    unit: "Connecteurs logiques",
    lesson: "Opposition",
    type: "qcm",
    difficulty: "medium",
    text: "Quel connecteur logique exprime une opposition ?",
    options: [
      { id: "a", text: "Par conséquent" },
      { id: "b", text: "En effet" },
      { id: "c", text: "Cependant" },
      { id: "d", text: "De plus" }
    ],
    correctOptionId: "c",
    correctExplanation:
      "« Cependant » introduit une idée qui contraste avec ce qui précède : c'est un connecteur d'opposition.",
    wrongExplanations: {
      a: "Introduit une conséquence, pas une opposition.",
      b: "Sert à justifier ou confirmer une idée précédente.",
      d: "Introduit un ajout allant dans le même sens."
    },
    keywords: ["connecteurs logiques", "opposition", "cependant"],
    suggestedTimeSeconds: 45,
    estimatedFrequency: "unknown",
    references: ["Grammaire de texte française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-005",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Homophones grammaticaux",
    type: "qcm",
    difficulty: "medium",
    text: "Complétez : « Les élèves ont apporté ___ affaires. »",
    options: [
      { id: "a", text: "ses" },
      { id: "b", text: "ces" },
      { id: "c", text: "leurs" },
      { id: "d", text: "leur" }
    ],
    correctOptionId: "c",
    correctExplanation:
      "« Leurs » est un adjectif possessif pluriel : les affaires appartiennent à plusieurs personnes (les élèves) ; il s'accorde avec « affaires ».",
    wrongExplanations: {
      a: "« ses » renvoie à un seul possesseur, incompatible avec « les élèves ».",
      b: "« ces » est un démonstratif : il ne marque pas la possession.",
      d: "Sans « s », « leur » devant un nom pluriel n'est pas l'adjectif possessif correct : il faut « leurs »."
    },
    keywords: ["homophones", "leur/leurs", "adjectif possessif"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-006",
    subject: "fr",
    unit: "Compréhension de texte",
    lesson: "Inférence",
    type: "qcm",
    difficulty: "hard",
    text: "« Depuis quelques années, de nombreux hôpitaux marocains investissent dans la formation continue de leur personnel infirmier, convaincus que la qualité des soins dépend autant des compétences techniques que de l'écoute et de l'empathie envers les patients. » D'après ce texte, la qualité des soins dépend :",
    options: [
      { id: "a", text: "Uniquement des compétences techniques" },
      { id: "b", text: "Des compétences techniques et de la relation humaine avec le patient" },
      { id: "c", text: "Uniquement du nombre d'infirmiers présents" },
      { id: "d", text: "Du budget alloué à l'hôpital" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le texte affirme explicitement que la qualité des soins repose « autant » sur la technique « que » sur l'écoute et l'empathie : les deux dimensions comptent.",
    wrongExplanations: {
      a: "Le texte mentionne aussi l'écoute et l'empathie, pas seulement la technique.",
      c: "Le nombre d'infirmiers n'est pas évoqué dans le texte.",
      d: "Le budget de l'hôpital n'est pas mentionné dans le passage."
    },
    keywords: ["compréhension", "inférence", "idée principale"],
    suggestedTimeSeconds: 75,
    estimatedFrequency: "unknown",
    references: ["Compréhension de texte française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-007",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Voix passive",
    type: "qcm",
    difficulty: "medium",
    text: "Transformez à la voix passive : « Le médecin examine le patient. »",
    options: [
      { id: "a", text: "Le patient examine le médecin." },
      { id: "b", text: "Le patient est examiné par le médecin." },
      { id: "c", text: "Le patient a examiné le médecin." },
      { id: "d", text: "Le patient se fait examiner." }
    ],
    correctOptionId: "b",
    correctExplanation:
      "À la voix passive, le COD (le patient) devient sujet, et le verbe se construit avec « être » + participe passé + « par » + agent : « est examiné par ».",
    wrongExplanations: {
      a: "Cette phrase inverse le sens de l'action au lieu de la mettre au passif.",
      c: "Ceci change à la fois le temps et l'agent de l'action, sans respecter la structure passive attendue.",
      d: "C'est une tournure pronominale à sens passif, différente de la voix passive canonique demandée ici."
    },
    keywords: ["voix passive", "grammaire", "transformation"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-008",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Discours rapporté",
    type: "qcm",
    difficulty: "hard",
    text: "Au discours indirect, « Il a dit : \"Je viendrai demain.\" » devient :",
    options: [
      { id: "a", text: "Il a dit qu'il viendrait le lendemain." },
      { id: "b", text: "Il a dit qu'il vient demain." },
      { id: "c", text: "Il a dit que je viendrai demain." },
      { id: "d", text: "Il dit qu'il viendra demain." }
    ],
    correctOptionId: "a",
    correctExplanation:
      "Avec un verbe introducteur au passé, le futur simple devient conditionnel présent (concordance des temps), et « demain » devient « le lendemain ».",
    wrongExplanations: {
      b: "Ne respecte pas la concordance des temps : le présent est utilisé au lieu du conditionnel.",
      c: "Confond la personne : « je » n'est pas remplacé par « il ».",
      d: "Le verbe introducteur reste au présent, ce qui ne correspond pas à l'énoncé initial au passé composé."
    },
    keywords: ["discours rapporté", "concordance des temps"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-009",
    subject: "fr",
    unit: "Vocabulaire",
    lesson: "Antonymie",
    type: "qcm",
    difficulty: "easy",
    text: "Quel est l'antonyme de « négligent » ?",
    options: [
      { id: "a", text: "Distrait" },
      { id: "b", text: "Consciencieux" },
      { id: "c", text: "Paresseux" },
      { id: "d", text: "Indifférent" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Négligent » signifie qui manque de soin ou d'attention ; son antonyme est « consciencieux », qui agit avec sérieux et application.",
    wrongExplanations: {
      a: "« distrait » est proche du sens de négligent, pas son contraire.",
      c: "« paresseux » va dans le même sens que négligent.",
      d: "« indifférent » reste proche du sens de négligent, pas de son contraire."
    },
    keywords: ["antonyme", "vocabulaire", "négligent"],
    suggestedTimeSeconds: 40,
    estimatedFrequency: "unknown",
    references: ["Vocabulaire français — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-010",
    subject: "fr",
    unit: "Vocabulaire",
    lesson: "Vocabulaire en contexte",
    type: "qcm",
    difficulty: "medium",
    text: "Dans la phrase « Le personnel soignant fait preuve d'une grande empathie envers les patients », le mot « empathie » signifie :",
    options: [
      { id: "a", text: "L'indifférence face à la souffrance d'autrui" },
      { id: "b", text: "La capacité à comprendre et partager les émotions d'autrui" },
      { id: "c", text: "La compétence technique dans les soins" },
      { id: "d", text: "Le respect strict des horaires" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "L'empathie désigne la capacité à se mettre à la place d'autrui pour comprendre et ressentir ce qu'il vit.",
    wrongExplanations: {
      a: "C'est le sens opposé de l'empathie.",
      c: "Décrit plutôt la compétence technique, une notion différente.",
      d: "Concerne la ponctualité, sans lien avec l'empathie."
    },
    keywords: ["vocabulaire", "empathie", "contexte"],
    suggestedTimeSeconds: 45,
    estimatedFrequency: "unknown",
    references: ["Vocabulaire français — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-011",
    subject: "fr",
    unit: "Connecteurs logiques",
    lesson: "Cause",
    type: "qcm",
    difficulty: "easy",
    text: "Quel connecteur introduit une cause ?",
    options: [
      { id: "a", text: "Ainsi" },
      { id: "b", text: "Car" },
      { id: "c", text: "Donc" },
      { id: "d", text: "Puis" }
    ],
    correctOptionId: "b",
    correctExplanation: "« Car » introduit une explication ou une cause, en justifiant ce qui vient d'être énoncé.",
    wrongExplanations: {
      a: "« ainsi » introduit une conséquence ou une manière.",
      c: "« donc » introduit une conséquence logique.",
      d: "« puis » indique une succession chronologique."
    },
    keywords: ["connecteurs logiques", "cause", "car"],
    suggestedTimeSeconds: 35,
    estimatedFrequency: "unknown",
    references: ["Grammaire de texte française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-012",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Homophones a/à",
    type: "qcm",
    difficulty: "easy",
    text: "Complétez : « Elle ___ décidé de partir ___ Rabat. »",
    options: [
      { id: "a", text: "a / à" },
      { id: "b", text: "à / a" },
      { id: "c", text: "a / a" },
      { id: "d", text: "à / à" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "« a » (verbe avoir) précède le participe passé « décidé » ; « à » (préposition) introduit le complément de lieu « Rabat ». On peut remplacer « a » par « avait » pour vérifier qu'il s'agit du verbe.",
    wrongExplanations: {
      b: "Inverse les deux emplois : la préposition et le verbe sont à la mauvaise place.",
      c: "Il faut une préposition devant le complément de lieu, pas le verbe avoir une seconde fois.",
      d: "Il faut le verbe avoir avant le participe passé « décidé », pas une préposition."
    },
    keywords: ["homophones", "a/à", "grammaire"],
    suggestedTimeSeconds: 35,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-013",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Accord de l'adjectif",
    type: "qcm",
    difficulty: "easy",
    text: "Choisissez l'accord correct : « Une équipe médicale ___ et efficace. »",
    options: [
      { id: "a", text: "compétent" },
      { id: "b", text: "compétente" },
      { id: "c", text: "compétents" },
      { id: "d", text: "compétentes" }
    ],
    correctOptionId: "b",
    correctExplanation: "L'adjectif s'accorde avec le nom « équipe », féminin singulier : « compétente ».",
    wrongExplanations: {
      a: "Forme masculine, incorrecte pour un nom féminin.",
      c: "Forme masculine pluriel, incorrecte en genre et en nombre.",
      d: "Forme féminin pluriel, incorrecte en nombre puisque « équipe » est singulier."
    },
    keywords: ["accord", "adjectif", "genre", "nombre"],
    suggestedTimeSeconds: 35,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-014",
    subject: "fr",
    unit: "Compréhension de texte",
    lesson: "Idée principale",
    type: "qcm",
    difficulty: "medium",
    text: "« La vaccination a permis d'éradiquer ou de réduire considérablement plusieurs maladies infectieuses graves à travers le monde. Pourtant, dans certaines régions, la couverture vaccinale reste insuffisante en raison d'un accès limité aux soins et d'une méfiance persistante envers les vaccins. » Quelle est l'idée principale de ce texte ?",
    options: [
      { id: "a", text: "La vaccination est totalement inefficace" },
      { id: "b", text: "Malgré son efficacité, la vaccination reste inégalement appliquée dans le monde" },
      { id: "c", text: "Tous les pays ont une couverture vaccinale suffisante" },
      { id: "d", text: "La méfiance envers les vaccins n'existe plus" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le texte reconnaît l'efficacité de la vaccination tout en soulignant les obstacles (accès limité, méfiance) qui freinent son application uniforme dans le monde.",
    wrongExplanations: {
      a: "Contredit directement le texte, qui souligne l'efficacité de la vaccination.",
      c: "Contredit le texte, qui évoque une couverture insuffisante dans certaines régions.",
      d: "Contredit le texte, qui mentionne explicitement une méfiance persistante."
    },
    keywords: ["compréhension", "idée principale", "vaccination"],
    suggestedTimeSeconds: 75,
    estimatedFrequency: "unknown",
    references: ["Compréhension de texte française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-015",
    subject: "fr",
    unit: "Vocabulaire",
    lesson: "Paronymes",
    type: "qcm",
    difficulty: "hard",
    text: "Quelle phrase utilise correctement le mot « éminent » ?",
    options: [
      { id: "a", text: "Le professeur éminent a présidé la conférence." },
      { id: "b", text: "Le danger est éminent, il faut agir vite." },
      { id: "c", text: "Le repas était éminent." },
      { id: "d", text: "Sa maison est éminente." }
    ],
    correctOptionId: "a",
    correctExplanation:
      "« Éminent » signifie qui se distingue par son mérite ou son savoir (ex. un professeur éminent). Ne pas confondre avec « imminent » (sur le point de se produire).",
    wrongExplanations: {
      b: "Confond « éminent » avec « imminent » (danger imminent = proche, sur le point d'arriver).",
      c: "« éminent » ne s'applique pas à un repas dans ce sens.",
      d: "« éminent » ne qualifie pas une maison dans ce sens."
    },
    keywords: ["paronymes", "éminent", "imminent"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Vocabulaire français — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-016",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Superlatif",
    type: "qcm",
    difficulty: "medium",
    text: "Complétez : « C'est le candidat ___ préparé de tous. »",
    options: [
      { id: "a", text: "plus" },
      { id: "b", text: "le plus" },
      { id: "c", text: "si" },
      { id: "d", text: "bien" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le superlatif relatif se forme avec « le/la/les plus (ou moins) » + adjectif/participe : « le plus préparé de tous ».",
    wrongExplanations: {
      a: "« plus » seul exprime un comparatif, pas un superlatif, alors que « de tous » exige un superlatif.",
      c: "« si » exprime un degré ou une conséquence, pas un superlatif.",
      d: "« bien » seul est un adverbe et ne forme pas de superlatif."
    },
    keywords: ["superlatif", "comparatif", "grammaire"],
    suggestedTimeSeconds: 45,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-017",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Accord sujet-verbe (sujet collectif)",
    type: "qcm",
    difficulty: "hard",
    text: "Choisissez l'accord correct : « La plupart des étudiants ___ satisfaits de la formation. »",
    options: [
      { id: "a", text: "est" },
      { id: "b", text: "sont" },
      { id: "c", text: "était" },
      { id: "d", text: "es" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Avec « la plupart de » + nom pluriel, le verbe s'accorde généralement au pluriel, en accord avec le sens (plusieurs étudiants) plutôt qu'avec le mot « plupart » seul.",
    wrongExplanations: {
      a: "« est » est la forme singulière, alors que l'accord se fait au pluriel dans ce cas.",
      c: "« était » est à l'imparfait mais reste singulier ; il faut le pluriel au présent, « sont ».",
      d: "« es » correspond à la 2e personne du singulier, incompatible avec le sujet."
    },
    keywords: ["accord sujet-verbe", "la plupart", "sujet collectif"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-018",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Pronoms relatifs",
    type: "qcm",
    difficulty: "medium",
    text: "Complétez : « Voici le patient ___ je vous ai parlé hier. »",
    options: [
      { id: "a", text: "qui" },
      { id: "b", text: "que" },
      { id: "c", text: "dont" },
      { id: "d", text: "où" }
    ],
    correctOptionId: "c",
    correctExplanation:
      "Le verbe « parler » se construit avec la préposition « de » (parler de quelqu'un) ; le pronom relatif qui remplace un complément introduit par « de » est « dont ».",
    wrongExplanations: {
      a: "« qui » remplace un sujet, ce qui n'est pas le rôle recherché ici.",
      b: "« que » remplace un COD direct, alors que « parler » appelle un complément introduit par « de ».",
      d: "« où » s'utilise pour un complément de lieu ou de temps, non pour un complément introduit par « de »."
    },
    keywords: ["pronoms relatifs", "dont", "préposition"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-019",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Types de phrases",
    type: "qcm",
    difficulty: "easy",
    text: "« Sortez immédiatement de cette salle ! » est une phrase de type :",
    options: [
      { id: "a", text: "Déclaratif" },
      { id: "b", text: "Interrogatif" },
      { id: "c", text: "Impératif" },
      { id: "d", text: "Exclamatif uniquement, sans valeur d'ordre" }
    ],
    correctOptionId: "c",
    correctExplanation:
      "Cette phrase exprime un ordre direct (verbe à l'impératif, absence de sujet exprimé) : elle est de type impératif, même si le point d'exclamation renforce son intensité.",
    wrongExplanations: {
      a: "Une phrase déclarative énonce simplement un fait, sans exprimer un ordre.",
      b: "Une phrase interrogative pose une question, ce qui n'est pas le cas ici.",
      d: "Le point d'exclamation marque l'intensité, mais la structure grammaticale (verbe à l'impératif) reste bien de type impératif."
    },
    keywords: ["types de phrases", "impératif", "ordre"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-020",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Forme négative",
    type: "qcm",
    difficulty: "medium",
    text: "Quelle est la forme négative correcte de « Il a déjà terminé son travail. » ?",
    options: [
      { id: "a", text: "Il n'a jamais terminé son travail." },
      { id: "b", text: "Il a pas terminé son travail." },
      { id: "c", text: "Il n'a pas déjà terminé son travail." },
      { id: "d", text: "Il a non terminé son travail." }
    ],
    correctOptionId: "a",
    correctExplanation:
      "« Déjà » se transforme en « jamais » à la forme négative : « Il n'a jamais terminé son travail » est la négation standard et naturelle.",
    wrongExplanations: {
      b: "Omet la particule négative « ne », ce qui n'est pas la forme standard écrite correcte.",
      c: "Juxtapose « pas » et « déjà », une construction qui n'est pas la négation standard attendue.",
      d: "« non » ne s'utilise pas ainsi pour nier un verbe conjugué."
    },
    keywords: ["forme négative", "déjà/jamais"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-021",
    subject: "fr",
    unit: "Grammaire",
    lesson: "COD et COI",
    type: "qcm",
    difficulty: "medium",
    text: "Dans la phrase « Le médecin explique le diagnostic au patient. », « au patient » est :",
    options: [
      { id: "a", text: "Complément d'objet direct (COD)" },
      { id: "b", text: "Complément d'objet indirect (COI)" },
      { id: "c", text: "Sujet de la phrase" },
      { id: "d", text: "Complément circonstanciel de lieu" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« au patient » répond à la question « explique à qui ? » et est introduit par la préposition « à » : c'est un complément d'objet indirect (COI), tandis que « le diagnostic » est le COD.",
    wrongExplanations: {
      a: "Le COD de cette phrase est « le diagnostic », construit sans préposition ; « au patient » est introduit par « à ».",
      c: "Le sujet de la phrase est « le médecin ».",
      d: "« au patient » désigne un destinataire (personne), pas un lieu."
    },
    keywords: ["COD", "COI", "complément d'objet"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-022",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Accord de « tout »",
    type: "qcm",
    difficulty: "hard",
    text: "Choisissez l'accord correct : « Elles sont ___ contentes de leurs résultats. »",
    options: [
      { id: "a", text: "tout" },
      { id: "b", text: "toute" },
      { id: "c", text: "toutes" },
      { id: "d", text: "touts" }
    ],
    correctOptionId: "c",
    correctExplanation:
      "« Tout » adverbe (« entièrement ») s'accorde en genre et en nombre avec l'adjectif qui suit lorsque celui-ci est féminin et commence par une consonne (ou un h aspiré) : devant « contentes » (consonne), on écrit « toutes contentes ».",
    wrongExplanations: {
      a: "« tout » invariable ne s'utilise que devant un adjectif féminin commençant par une voyelle ou un h muet, ce qui n'est pas le cas ici.",
      b: "« toute » est la forme du féminin singulier, incompatible avec le sujet pluriel « elles ».",
      d: "« touts » n'est pas une forme correcte du français."
    },
    keywords: ["accord de tout", "adverbe", "féminin pluriel"],
    suggestedTimeSeconds: 80,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-023",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Place de l'adjectif",
    type: "qcm",
    difficulty: "medium",
    text: "Dans « un homme grand » et « un grand homme », le changement de position de l'adjectif « grand » :",
    options: [
      { id: "a", text: "N'a strictement aucun effet sur le sens" },
      { id: "b", text: "Peut changer le sens : taille physique vs. importance/valeur de la personne" },
      { id: "c", text: "Rend la seconde phrase incorrecte grammaticalement" },
      { id: "d", text: "Change uniquement le genre de l'adjectif" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Certains adjectifs changent de sens selon leur position : « un homme grand » évoque la taille physique, tandis que « un grand homme » évoque une personne importante, remarquable par ses qualités.",
    wrongExplanations: {
      a: "Le sens change bel et bien selon la position, ce n'est pas un cas neutre.",
      c: "Les deux constructions sont grammaticalement correctes, seul le sens diffère.",
      d: "La position de l'adjectif n'affecte pas son genre, qui reste déterminé par le nom."
    },
    keywords: ["place de l'adjectif", "sens", "grand"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-024",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Adjectifs de couleur composés",
    type: "qcm",
    difficulty: "hard",
    text: "Quelle phrase respecte la règle d'invariabilité des adjectifs de couleur composés ?",
    options: [
      { id: "a", text: "Des yeux bleu-verts magnifiques." },
      { id: "b", text: "Des yeux bleu-vert magnifiques." },
      { id: "c", text: "Des yeux bleus-verts magnifiques." },
      { id: "d", text: "Des yeux bleues-vertes magnifiques." }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Les adjectifs de couleur composés de deux termes (ex. « bleu-vert ») restent invariables : ni l'un ni l'autre des éléments ne prend la marque du pluriel ou du féminin.",
    wrongExplanations: {
      a: "Ajoute incorrectement un « s » à « vert », alors que l'ensemble doit rester invariable.",
      c: "Accorde incorrectement les deux éléments de l'adjectif composé, ce qui contredit la règle d'invariabilité.",
      d: "Accorde incorrectement les deux éléments de l'adjectif composé, ce qui contredit la règle d'invariabilité."
    },
    keywords: ["adjectifs de couleur composés", "invariabilité"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-025",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Concordance des temps",
    type: "qcm",
    difficulty: "medium",
    text: "Complétez : « Quand elle est arrivée, nous ___ déjà le repas. »",
    options: [
      { id: "a", text: "finissons" },
      { id: "b", text: "avons fini" },
      { id: "c", text: "avions fini" },
      { id: "d", text: "finirons" }
    ],
    correctOptionId: "c",
    correctExplanation:
      "L'action de finir le repas est antérieure à une autre action passée (« est arrivée ») : on emploie donc le plus-que-parfait, temps qui exprime l'antériorité par rapport à un fait passé.",
    wrongExplanations: {
      a: "« finissons » est au présent, incompatible avec un récit au passé.",
      b: "« avons fini » (passé composé) exprimerait une action achevée par rapport au présent, pas une antériorité par rapport à une autre action passée.",
      d: "« finirons » est au futur, incompatible avec le contexte passé de la phrase."
    },
    keywords: ["concordance des temps", "plus-que-parfait", "antériorité"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-026",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Adjectif et adverbe",
    type: "qcm",
    difficulty: "easy",
    text: "Quelle phrase utilise correctement un adverbe ?",
    options: [
      { id: "a", text: "Elle travaille sérieuse." },
      { id: "b", text: "Elle travaille sérieusement." },
      { id: "c", text: "Elle est sérieusement." },
      { id: "d", text: "Elle travaille sérieux." }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Un verbe d'action comme « travailler » se modifie par un adverbe de manière (« sérieusement »), invariable, et non par un adjectif qui devrait s'accorder avec un nom.",
    wrongExplanations: {
      a: "Emploie à tort l'adjectif « sérieuse » pour modifier un verbe, alors qu'un adverbe est nécessaire.",
      c: "L'adverbe ne peut pas se substituer à un attribut du sujet après « être » de cette façon dans ce contexte.",
      d: "Emploie à tort l'adjectif « sérieux » pour modifier un verbe, alors qu'un adverbe est nécessaire."
    },
    keywords: ["adverbe", "adjectif", "manière"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-027",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Ne...que",
    type: "qcm",
    difficulty: "medium",
    text: "Quel est le sens de la phrase « Il ne mange que des légumes. » ?",
    options: [
      { id: "a", text: "Il ne mange jamais de légumes." },
      { id: "b", text: "Il mange uniquement des légumes, rien d'autre." },
      { id: "c", text: "Il mange tout sauf des légumes." },
      { id: "d", text: "Il mange des légumes en plus d'autre chose." }
    ],
    correctOptionId: "b",
    correctExplanation:
      "La tournure restrictive « ne...que » exprime une restriction équivalente à « seulement » : « il ne mange que des légumes » signifie qu'il mange exclusivement des légumes.",
    wrongExplanations: {
      a: "Contredit le sens réel de la restriction, qui n'est pas une négation totale.",
      c: "Inverse complètement le sens : la restriction porte sur les légumes comme seul aliment consommé, pas comme aliment exclu.",
      d: "Contredit l'idée d'exclusivité exprimée par « ne...que »."
    },
    keywords: ["ne...que", "restriction", "sens"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-028",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Genre des noms",
    type: "qcm",
    difficulty: "medium",
    text: "Parmi les noms suivants, lequel est féminin ?",
    options: [
      { id: "a", text: "Un espace" },
      { id: "b", text: "Une oasis" },
      { id: "c", text: "Un pétale" },
      { id: "d", text: "Un incendie" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Oasis » est un nom féminin en français (« une oasis »), malgré une terminaison qui pourrait prêter à confusion.",
    wrongExplanations: {
      a: "« espace » est masculin (« un espace »).",
      c: "« pétale » est masculin (« un pétale »), contrairement à une confusion fréquente.",
      d: "« incendie » est masculin (« un incendie »)."
    },
    keywords: ["genre des noms", "féminin", "oasis"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-029",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Subordonnée conditionnelle",
    type: "qcm",
    difficulty: "medium",
    text: "Complétez : « Si j'avais plus de temps, je ___ ce livre. »",
    options: [
      { id: "a", text: "lirai" },
      { id: "b", text: "lirais" },
      { id: "c", text: "lis" },
      { id: "d", text: "aurais lu" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Avec « si » + imparfait dans la subordonnée, la principale se met au conditionnel présent : « si j'avais... je lirais... » exprime une hypothèse sur le présent/futur.",
    wrongExplanations: {
      a: "« lirai » est au futur simple, incompatible avec « si + imparfait ».",
      c: "« lis » est au présent de l'indicatif, ne correspondant pas à la structure hypothétique attendue ici.",
      d: "« aurais lu » (conditionnel passé) correspondrait à « si j'avais eu » (plus-que-parfait) dans la subordonnée, pas à « si j'avais » (imparfait)."
    },
    keywords: ["subordonnée conditionnelle", "si", "conditionnel présent"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-030",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Pronom possessif",
    type: "qcm",
    difficulty: "medium",
    text: "Dans la phrase « Ce livre est le mien, pas le tien. », les mots « le mien » et « le tien » sont des :",
    options: [
      { id: "a", text: "Adjectifs possessifs" },
      { id: "b", text: "Pronoms possessifs" },
      { id: "c", text: "Pronoms démonstratifs" },
      { id: "d", text: "Adjectifs démonstratifs" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Le mien » et « le tien » remplacent un nom déjà mentionné (« ce livre ») en indiquant la possession : ce sont des pronoms possessifs, contrairement à « mon », « ton », etc. qui sont des adjectifs possessifs accompagnant toujours un nom.",
    wrongExplanations: {
      a: "Un adjectif possessif (mon, ton, son...) accompagne directement un nom, ce qui n'est pas la fonction ici : « le mien » remplace le nom.",
      c: "Les pronoms démonstratifs (celui-ci, celui-là) désignent sans indiquer de possession, contrairement à « le mien »/« le tien ».",
      d: "Un adjectif démonstratif (ce, cette) accompagne un nom sans exprimer de possession."
    },
    keywords: ["pronom possessif", "adjectif possessif"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-031",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Accord du participe passé (verbe pronominal)",
    type: "qcm",
    difficulty: "hard",
    text: "Choisissez la phrase correctement accordée : « Elles se sont ___ les mains avant de manger. »",
    options: [
      { id: "a", text: "lavé" },
      { id: "b", text: "lavées" },
      { id: "c", text: "lavée" },
      { id: "d", text: "lavés" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "Le participe passé d'un verbe pronominal reste invariable lorsqu'il est suivi d'un complément d'objet direct (ici « les mains ») : on écrit donc « elles se sont lavé les mains ».",
    wrongExplanations: {
      b: "Accorde au féminin pluriel avec le sujet « elles », ce qui serait correct seulement en l'absence de COD après le verbe (ex. « elles se sont lavées »), pas ici où « les mains » suit.",
      c: "Accord au féminin singulier, incorrect à la fois pour le sujet pluriel et pour la présence du COD après le verbe.",
      d: "Accord au masculin pluriel, incompatible avec le sujet féminin « elles » et avec la présence du COD."
    },
    keywords: ["participe passé", "verbe pronominal", "COD"],
    suggestedTimeSeconds: 80,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-032",
    subject: "fr",
    unit: "Conjugaison",
    lesson: "Impératif",
    type: "qcm",
    difficulty: "medium",
    text: "Quelle est la forme correcte de l'impératif présent, 2e personne du singulier, du verbe « aller » ?",
    options: [
      { id: "a", text: "Vas" },
      { id: "b", text: "Va" },
      { id: "c", text: "Allez" },
      { id: "d", text: "Ailles" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "À l'impératif présent, 2e personne du singulier, le verbe « aller » perd le « s » final : « va ! » (sauf devant « y » : « vas-y »).",
    wrongExplanations: {
      a: "« vas » avec un « s » final est incorrect à l'impératif, sauf juste avant « y » (« vas-y »).",
      c: "« allez » correspond à la 2e personne du pluriel, pas du singulier.",
      d: "« ailles » est une forme du subjonctif présent, pas de l'impératif."
    },
    keywords: ["impératif", "aller", "conjugaison"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-033",
    subject: "fr",
    unit: "Conjugaison",
    lesson: "Passé simple",
    type: "qcm",
    difficulty: "medium",
    text: "Dans un récit littéraire au passé, quelle phrase emploie correctement le passé simple ?",
    options: [
      { id: "a", text: "Il a mangé et puis il sortit." },
      { id: "b", text: "Il mangea et sortit aussitôt après." },
      { id: "c", text: "Il mange et il sort." },
      { id: "d", text: "Il mangeait et il sortait." }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Mangea » et « sortit » sont des formes du passé simple (3e personne du singulier), temps du récit littéraire employé pour des actions ponctuelles achevées dans le passé.",
    wrongExplanations: {
      a: "Mélange passé composé (« a mangé ») et passé simple (« sortit »), ce qui est stylistiquement incohérent dans un récit soigné.",
      c: "Est au présent, pas au passé simple.",
      d: "Est à l'imparfait, qui exprime une action non délimitée ou habituelle, pas une action ponctuelle comme le passé simple."
    },
    keywords: ["passé simple", "récit littéraire", "conjugaison"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-034",
    subject: "fr",
    unit: "Conjugaison",
    lesson: "Futur antérieur",
    type: "qcm",
    difficulty: "hard",
    text: "Complétez : « Dès qu'il ___ ses études, il cherchera un emploi. »",
    options: [
      { id: "a", text: "terminera" },
      { id: "b", text: "aura terminé" },
      { id: "c", text: "termine" },
      { id: "d", text: "terminait" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Dès que » exprimant l'antériorité par rapport à une action future (« cherchera »), on emploie le futur antérieur : « aura terminé » indique une action achevée avant une autre action future.",
    wrongExplanations: {
      a: "« terminera » (futur simple) exprimerait une action simultanée ou postérieure, pas achevée avant l'autre action future.",
      c: "« termine » est au présent, incompatible avec le contexte futur de la phrase.",
      d: "« terminait » est à l'imparfait, un temps du passé incompatible ici."
    },
    keywords: ["futur antérieur", "dès que", "antériorité"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-035",
    subject: "fr",
    unit: "Conjugaison",
    lesson: "Conditionnel passé",
    type: "qcm",
    difficulty: "hard",
    text: "Complétez : « Si j'avais su, je ___ autrement. »",
    options: [
      { id: "a", text: "agirais" },
      { id: "b", text: "aurais agi" },
      { id: "c", text: "agis" },
      { id: "d", text: "agirai" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Avec « si » + plus-que-parfait dans la subordonnée (« si j'avais su »), la principale se met au conditionnel passé, exprimant un fait non réalisé dans le passé : « j'aurais agi autrement ».",
    wrongExplanations: {
      a: "« agirais » (conditionnel présent) correspondrait à « si + imparfait » (ex. « si je savais »), pas à « si + plus-que-parfait ».",
      c: "« agis » au présent ne correspond pas à une hypothèse irréalisée dans le passé.",
      d: "« agirai » est au futur simple, incompatible avec cette structure hypothétique passée."
    },
    keywords: ["conditionnel passé", "si", "plus-que-parfait"],
    suggestedTimeSeconds: 75,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-036",
    subject: "fr",
    unit: "Conjugaison",
    lesson: "Gérondif",
    type: "qcm",
    difficulty: "medium",
    text: "Dans la phrase « Il s'est blessé en courant dans l'escalier. », « en courant » est :",
    options: [
      { id: "a", text: "Un participe présent employé seul" },
      { id: "b", text: "Un gérondif, exprimant la simultanéité avec l'action principale" },
      { id: "c", text: "Un infinitif" },
      { id: "d", text: "Un adjectif verbal accordé" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« En + participe présent » (ici « en courant ») forme le gérondif, qui exprime généralement la simultanéité, la manière ou la cause par rapport à l'action du verbe principal.",
    wrongExplanations: {
      a: "Un participe présent employé seul, sans « en », n'aurait pas cette valeur de simultanéité marquée.",
      c: "Un infinitif serait « courir », une forme non conjuguée différente de « courant ».",
      d: "Un adjectif verbal s'accorde comme un adjectif ordinaire, ce qui n'est pas le cas de « courant » dans cette construction figée avec « en »."
    },
    keywords: ["gérondif", "participe présent", "simultanéité"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-037",
    subject: "fr",
    unit: "Conjugaison",
    lesson: "Verbes du 3e groupe",
    type: "qcm",
    difficulty: "easy",
    text: "Quelle est la forme correcte de la 1re personne du pluriel au présent de l'indicatif du verbe « prendre » ?",
    options: [
      { id: "a", text: "Nous prenons" },
      { id: "b", text: "Nous prendons" },
      { id: "c", text: "Nous prennons" },
      { id: "d", text: "Nous prends" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "Le verbe « prendre » (3e groupe) se conjugue « nous prenons » au présent de l'indicatif, avec un seul « n ».",
    wrongExplanations: {
      b: "Forme incorrecte, ne correspondant à aucune conjugaison réelle du verbe.",
      c: "Ajoute incorrectement un second « n » ; la forme correcte n'en a qu'un à la 1re personne du pluriel.",
      d: "« prends » est une forme de la 1re/2e personne du singulier, pas du pluriel."
    },
    keywords: ["conjugaison", "prendre", "3e groupe"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-038",
    subject: "fr",
    unit: "Conjugaison",
    lesson: "Subjonctif passé",
    type: "qcm",
    difficulty: "hard",
    text: "Complétez : « Je suis content qu'elle ___ son examen hier. »",
    options: [
      { id: "a", text: "réussisse" },
      { id: "b", text: "ait réussi" },
      { id: "c", text: "réussira" },
      { id: "d", text: "réussissait" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "L'action (réussir l'examen hier) est antérieure au moment de l'énonciation ; après une expression de sentiment (« content que »), on emploie le subjonctif, ici au passé pour marquer l'antériorité : « ait réussi ».",
    wrongExplanations: {
      a: "« réussisse » (subjonctif présent) n'indique pas l'antériorité marquée par « hier ».",
      c: "« réussira » est à l'indicatif futur, un mode incompatible avec « content que » qui appelle le subjonctif.",
      d: "« réussissait » est à l'indicatif imparfait, également incompatible avec le subjonctif requis ici."
    },
    keywords: ["subjonctif passé", "antériorité", "sentiment"],
    suggestedTimeSeconds: 75,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-039",
    subject: "fr",
    unit: "Conjugaison",
    lesson: "Verbes pronominaux",
    type: "qcm",
    difficulty: "easy",
    text: "Quelle est la forme correcte du verbe « se souvenir » à la 2e personne du singulier au présent de l'indicatif ?",
    options: [
      { id: "a", text: "Tu souviens" },
      { id: "b", text: "Tu te souviens" },
      { id: "c", text: "Tu se souviens" },
      { id: "d", text: "Toi te souviens" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Se souvenir » est un verbe essentiellement pronominal : il s'emploie toujours avec le pronom réfléchi correspondant à la personne, ici « te » pour la 2e personne du singulier : « tu te souviens ».",
    wrongExplanations: {
      a: "Omet le pronom réfléchi obligatoire « te », indispensable pour ce verbe pronominal.",
      c: "Utilise « se » (3e personne) au lieu de « te » (2e personne), une erreur d'accord du pronom réfléchi.",
      d: "« toi » n'est pas la forme correcte du pronom réfléchi devant le verbe conjugué ; il faut « tu... te »."
    },
    keywords: ["verbe pronominal", "se souvenir", "pronom réfléchi"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-040",
    subject: "fr",
    unit: "Conjugaison",
    lesson: "Impératif avec pronoms",
    type: "qcm",
    difficulty: "medium",
    text: "Quelle est la forme correcte à l'impératif : « Donne-___ ce document, s'il te plaît. »",
    options: [
      { id: "a", text: "moi" },
      { id: "b", text: "me" },
      { id: "c", text: "je" },
      { id: "d", text: "moi-même" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "À l'impératif affirmatif, les pronoms compléments se placent après le verbe et « me » devient « moi » : « donne-moi ce document ».",
    wrongExplanations: {
      b: "« me » s'emploie avant le verbe (ex. « tu me donnes »), pas après un impératif affirmatif où il devient « moi ».",
      c: "« je » est un pronom sujet, incompatible avec la fonction de complément recherchée ici.",
      d: "« moi-même » ajoute une insistance non demandée et alourdit inutilement la construction attendue."
    },
    keywords: ["impératif", "pronoms compléments", "moi"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-041",
    subject: "fr",
    unit: "Conjugaison",
    lesson: "Verbes irréguliers",
    type: "qcm",
    difficulty: "medium",
    text: "Quelle est la forme correcte de la 3e personne du singulier au présent de l'indicatif du verbe « résoudre » ?",
    options: [
      { id: "a", text: "Il résout" },
      { id: "b", text: "Il résoud" },
      { id: "c", text: "Il résouds" },
      { id: "d", text: "Il résolve" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "Le verbe « résoudre » se conjugue « il résout » (sans « d » ni « s ») à la 3e personne du singulier du présent de l'indicatif.",
    wrongExplanations: {
      b: "Omet le « t » final, indispensable dans la forme correcte « résout ».",
      c: "Ajoute un « s » incorrect qui ne correspond à aucune forme conjuguée réelle de ce verbe à cette personne.",
      d: "« résolve » est une forme proche du subjonctif, pas de l'indicatif présent attendu ici."
    },
    keywords: ["verbes irréguliers", "résoudre", "conjugaison"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-042",
    subject: "fr",
    unit: "Vocabulaire",
    lesson: "Synonymie médicale",
    type: "qcm",
    difficulty: "medium",
    text: "Quel est le synonyme le plus proche de « bénin » (à propos d'une maladie) ?",
    options: [
      { id: "a", text: "Grave" },
      { id: "b", text: "Sans danger, peu grave" },
      { id: "c", text: "Contagieux" },
      { id: "d", text: "Chronique" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Bénin » qualifie une affection sans gravité, qui ne présente pas de danger sérieux pour la santé — le contraire de « malin/grave ».",
    wrongExplanations: {
      a: "« grave » est un quasi-antonyme de « bénin », pas un synonyme.",
      c: "« contagieux » concerne la transmissibilité, une notion différente de la gravité.",
      d: "« chronique » concerne la durée (long terme), pas la gravité de l'affection."
    },
    keywords: ["bénin", "vocabulaire médical", "synonymie"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Vocabulaire français — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-043",
    subject: "fr",
    unit: "Vocabulaire",
    lesson: "Antonymie",
    type: "qcm",
    difficulty: "easy",
    text: "Quel est l'antonyme de « fréquent » ?",
    options: [
      { id: "a", text: "Régulier" },
      { id: "b", text: "Rare" },
      { id: "c", text: "Habituel" },
      { id: "d", text: "Courant" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Fréquent » signifie qui se produit souvent ; son antonyme est « rare », qui se produit peu souvent.",
    wrongExplanations: {
      a: "« régulier » évoque une répétition à intervalles constants, sans indiquer une faible fréquence : ce n'est pas l'antonyme recherché.",
      c: "« habituel » est proche du sens de « fréquent », pas son contraire.",
      d: "« courant » est également proche du sens de « fréquent »."
    },
    keywords: ["antonyme", "fréquent", "rare"],
    suggestedTimeSeconds: 45,
    estimatedFrequency: "unknown",
    references: ["Vocabulaire français — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-044",
    subject: "fr",
    unit: "Vocabulaire",
    lesson: "Familles de mots",
    type: "qcm",
    difficulty: "medium",
    text: "Quel mot n'appartient PAS à la même famille que « santé » ?",
    options: [
      { id: "a", text: "Sain" },
      { id: "b", text: "Assainir" },
      { id: "c", text: "Sanitaire" },
      { id: "d", text: "Saisir" }
    ],
    correctOptionId: "d",
    correctExplanation:
      "« Sain », « assainir » et « sanitaire » partagent la racine liée à « santé ». « Saisir » vient d'une racine totalement différente (« prendre »), sans rapport étymologique avec « santé ».",
    wrongExplanations: {
      a: "« sain » appartient bien à la même famille que « santé » (ex. « un aliment sain »).",
      b: "« assainir » (rendre sain) partage la même racine que « santé ».",
      c: "« sanitaire » (relatif à la santé) partage également la même racine."
    },
    keywords: ["famille de mots", "étymologie", "santé"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Vocabulaire français — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-045",
    subject: "fr",
    unit: "Vocabulaire",
    lesson: "Préfixes",
    type: "qcm",
    difficulty: "easy",
    text: "Le préfixe « anti- » dans « antiseptique » exprime l'idée de :",
    options: [
      { id: "a", text: "Répétition" },
      { id: "b", text: "Opposition, action contraire" },
      { id: "c", text: "Excès" },
      { id: "d", text: "Petitesse" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le préfixe « anti- » exprime l'opposition ou l'action contraire : un « antiseptique » agit contre les germes/infections.",
    wrongExplanations: {
      a: "La répétition serait plutôt exprimée par un préfixe comme « re- », pas « anti- ».",
      c: "L'excès serait plutôt exprimé par « sur- » ou « hyper- ».",
      d: "La petitesse serait plutôt exprimée par « micro- » ou « mini- »."
    },
    keywords: ["préfixe", "anti-", "formation des mots"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Vocabulaire français — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-046",
    subject: "fr",
    unit: "Vocabulaire",
    lesson: "Sens propre et sens figuré",
    type: "qcm",
    difficulty: "medium",
    text: "Dans la phrase « Ce médecin a un cœur de pierre. », l'expression « cœur de pierre » est employée au sens :",
    options: [
      { id: "a", text: "Propre, décrivant un organe réellement minéral" },
      { id: "b", text: "Figuré, décrivant une personne insensible ou sans compassion" },
      { id: "c", text: "Médical, décrivant une maladie cardiaque précise" },
      { id: "d", text: "Littéral, décrivant la dureté physique du cœur" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Cœur de pierre » est une expression imagée (sens figuré) qui décrit une personne dénuée d'empathie ou de sensibilité, et non un organe réellement fait de pierre.",
    wrongExplanations: {
      a: "Prend l'expression au sens littéral, ce qui n'a pas de sens réel ; l'expression est clairement figurée.",
      c: "L'expression ne désigne aucune pathologie cardiaque médicale précise.",
      d: "Prend l'expression au sens littéral, ce qui n'a pas de sens réel ; l'expression est clairement figurée."
    },
    keywords: ["sens figuré", "sens propre", "expression imagée"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Vocabulaire français — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-047",
    subject: "fr",
    unit: "Vocabulaire",
    lesson: "Niveaux de langue",
    type: "qcm",
    difficulty: "hard",
    text: "Parmi les phrases suivantes, laquelle relève du registre soutenu ?",
    options: [
      { id: "a", text: "Il est parti en coup de vent." },
      { id: "b", text: "Il s'en est allé promptement." },
      { id: "c", text: "Il s'est cassé illico." },
      { id: "d", text: "Il a filé fissa." }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Il s'en est allé promptement » emploie un vocabulaire et une syntaxe recherchés, caractéristiques du registre soutenu, alors que les autres options relèvent du registre familier.",
    wrongExplanations: {
      a: "« en coup de vent » est une expression plutôt courante/familière, pas soutenue.",
      c: "« cassé illico » est clairement familier.",
      d: "« filé fissa » est également une expression très familière."
    },
    keywords: ["niveaux de langue", "registre soutenu", "registre familier"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Vocabulaire français — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-048",
    subject: "fr",
    unit: "Vocabulaire",
    lesson: "Paronymes",
    type: "qcm",
    difficulty: "hard",
    text: "Quelle phrase distingue correctement « conjecture » et « conjoncture » ?",
    options: [
      { id: "a", text: "La conjecture économique actuelle est difficile." },
      { id: "b", text: "Ce n'est qu'une conjoncture, sans preuve réelle." },
      { id: "c", text: "La conjoncture économique actuelle est difficile ; ce n'est qu'une conjecture sans preuve réelle." },
      { id: "d", text: "Les deux mots sont parfaitement interchangeables dans tous les contextes." }
    ],
    correctOptionId: "c",
    correctExplanation:
      "« Conjoncture » désigne une situation (souvent économique) à un moment donné, tandis que « conjecture » désigne une simple supposition, une hypothèse non prouvée. La phrase (c) emploie chaque mot dans son sens exact.",
    wrongExplanations: {
      a: "Inverse l'usage : « conjecture économique » n'est pas l'expression correcte, on attend « conjoncture économique ».",
      b: "Inverse également l'usage : une simple supposition sans preuve est une « conjecture », pas une « conjoncture ».",
      d: "Les deux mots ne sont pas interchangeables : ce sont des paronymes de sens distincts."
    },
    keywords: ["paronymes", "conjecture", "conjoncture"],
    suggestedTimeSeconds: 75,
    estimatedFrequency: "unknown",
    references: ["Vocabulaire français — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-049",
    subject: "fr",
    unit: "Vocabulaire",
    lesson: "Suffixes",
    type: "qcm",
    difficulty: "easy",
    text: "Le suffixe « -logie » dans un mot comme « biologie » indique généralement :",
    options: [
      { id: "a", text: "Une maladie" },
      { id: "b", text: "Une étude, une science" },
      { id: "c", text: "Un instrument de mesure" },
      { id: "d", text: "Une profession uniquement" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le suffixe « -logie » (du grec « logos ») indique l'étude ou la science d'un domaine : la « biologie » est l'étude du vivant.",
    wrongExplanations: {
      a: "Une maladie serait plutôt indiquée par un suffixe comme « -ite » (ex. « hépatite »).",
      c: "Un instrument de mesure serait plutôt indiqué par un suffixe comme « -mètre » (ex. « thermomètre »).",
      d: "Le suffixe désigne le domaine d'étude lui-même, pas nécessairement une profession."
    },
    keywords: ["suffixe", "-logie", "formation des mots"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Vocabulaire français — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-050",
    subject: "fr",
    unit: "Vocabulaire",
    lesson: "Vocabulaire en contexte (soins)",
    type: "qcm",
    difficulty: "medium",
    text: "Dans la phrase « L'infirmier a fait preuve de beaucoup de rigueur dans le suivi du traitement. », le mot « rigueur » signifie ici :",
    options: [
      { id: "a", text: "Dureté excessive envers le patient" },
      { id: "b", text: "Sévérité punitive" },
      { id: "c", text: "Précision et exactitude méthodique dans l'exécution" },
      { id: "d", text: "Rapidité d'exécution" }
    ],
    correctOptionId: "c",
    correctExplanation:
      "Dans ce contexte, « rigueur » désigne la précision, l'exactitude et le sérieux méthodique apportés au suivi du traitement, une qualité professionnelle positive.",
    wrongExplanations: {
      a: "La dureté envers le patient n'est pas le sens visé ici, qui est plutôt positif et professionnel.",
      b: "La sévérité punitive ne correspond pas au contexte du suivi d'un traitement médical.",
      d: "La rapidité n'est pas synonyme de rigueur ; on peut être rigoureux sans être rapide, et inversement."
    },
    keywords: ["rigueur", "vocabulaire en contexte", "soins"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Vocabulaire français — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-051",
    subject: "fr",
    unit: "Vocabulaire",
    lesson: "Synonymie",
    type: "qcm",
    difficulty: "medium",
    text: "Quel est le synonyme le plus proche de « diligent » (à propos d'un employé) ?",
    options: [
      { id: "a", text: "Paresseux" },
      { id: "b", text: "Consciencieux et rapide dans l'exécution de ses tâches" },
      { id: "c", text: "Indifférent" },
      { id: "d", text: "Maladroit" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Diligent » qualifie une personne qui accomplit ses tâches avec soin, application et rapidité.",
    wrongExplanations: {
      a: "« paresseux » est un antonyme de « diligent », pas un synonyme.",
      c: "« indifférent » ne correspond pas au sens d'application et de soin qu'implique « diligent ».",
      d: "« maladroit » évoque un manque d'habileté, sans rapport direct avec la diligence."
    },
    keywords: ["diligent", "synonymie", "vocabulaire"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Vocabulaire français — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-052",
    subject: "fr",
    unit: "Connecteurs logiques",
    lesson: "Addition",
    type: "qcm",
    difficulty: "easy",
    text: "Quel connecteur logique introduit une idée supplémentaire (addition) ?",
    options: [
      { id: "a", text: "Néanmoins" },
      { id: "b", text: "En outre" },
      { id: "c", text: "Or" },
      { id: "d", text: "Bien que" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« En outre » introduit un argument ou une idée supplémentaire, dans le prolongement de ce qui précède.",
    wrongExplanations: {
      a: "« néanmoins » introduit une opposition/concession, pas une addition.",
      c: "« or » introduit souvent une opposition ou une transition argumentative, pas une simple addition.",
      d: "« bien que » introduit une concession (subordonnée), pas une addition."
    },
    keywords: ["connecteurs logiques", "addition", "en outre"],
    suggestedTimeSeconds: 45,
    estimatedFrequency: "unknown",
    references: ["Grammaire de texte française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-053",
    subject: "fr",
    unit: "Connecteurs logiques",
    lesson: "But",
    type: "qcm",
    difficulty: "medium",
    text: "Quel connecteur introduit un but ?",
    options: [
      { id: "a", text: "Parce que" },
      { id: "b", text: "Afin que" },
      { id: "c", text: "Puisque" },
      { id: "d", text: "Comme" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Afin que » (suivi du subjonctif) introduit une proposition subordonnée de but, exprimant l'objectif visé par l'action principale.",
    wrongExplanations: {
      a: "« parce que » introduit une cause, pas un but.",
      c: "« puisque » introduit également une cause considérée comme connue/évidente, pas un but.",
      d: "« comme » peut introduire une cause ou une comparaison selon le contexte, mais pas un but."
    },
    keywords: ["connecteurs logiques", "but", "afin que"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Grammaire de texte française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-054",
    subject: "fr",
    unit: "Connecteurs logiques",
    lesson: "Condition",
    type: "qcm",
    difficulty: "medium",
    text: "Quel connecteur introduit une condition ?",
    options: [
      { id: "a", text: "À condition que" },
      { id: "b", text: "Alors que" },
      { id: "c", text: "De sorte que" },
      { id: "d", text: "Ainsi que" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "« À condition que » (suivi du subjonctif) introduit une proposition subordonnée conditionnelle, posant une condition nécessaire à la réalisation d'un fait.",
    wrongExplanations: {
      b: "« alors que » introduit soit une opposition, soit une simultanéité, pas une condition.",
      c: "« de sorte que » introduit une conséquence (ou un but selon le mode employé), pas une condition.",
      d: "« ainsi que » introduit une comparaison ou une addition, pas une condition."
    },
    keywords: ["connecteurs logiques", "condition", "à condition que"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Grammaire de texte française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-055",
    subject: "fr",
    unit: "Connecteurs logiques",
    lesson: "Temps",
    type: "qcm",
    difficulty: "medium",
    text: "Quel connecteur exprime une relation temporelle d'antériorité ?",
    options: [
      { id: "a", text: "Avant que" },
      { id: "b", text: "Parce que" },
      { id: "c", text: "Bien que" },
      { id: "d", text: "Afin que" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "« Avant que » (suivi du subjonctif) situe l'action de la subordonnée avant celle de la principale : c'est un connecteur temporel d'antériorité.",
    wrongExplanations: {
      b: "« parce que » exprime une cause, une relation logique différente du temps.",
      c: "« bien que » exprime une concession/opposition, pas une relation temporelle.",
      d: "« afin que » exprime un but, pas une relation temporelle."
    },
    keywords: ["connecteurs logiques", "temps", "antériorité"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Grammaire de texte française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-056",
    subject: "fr",
    unit: "Connecteurs logiques",
    lesson: "Conséquence",
    type: "qcm",
    difficulty: "medium",
    text: "Quel connecteur introduit une conséquence ?",
    options: [
      { id: "a", text: "Bien que" },
      { id: "b", text: "Si bien que" },
      { id: "c", text: "Avant que" },
      { id: "d", text: "Quoique" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Si bien que » introduit une proposition de conséquence, exprimant le résultat logique de ce qui précède.",
    wrongExplanations: {
      a: "« bien que » introduit une concession, pas une conséquence.",
      c: "« avant que » exprime une relation temporelle, pas une conséquence.",
      d: "« quoique » exprime également une concession, comme « bien que »."
    },
    keywords: ["connecteurs logiques", "conséquence", "si bien que"],
    suggestedTimeSeconds: 50,
    estimatedFrequency: "unknown",
    references: ["Grammaire de texte française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-057",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Homophones on/ont",
    type: "qcm",
    difficulty: "medium",
    text: "Complétez : « ___ dit qu'ils ___ réussi leur examen. »",
    options: [
      { id: "a", text: "On / ont" },
      { id: "b", text: "Ont / on" },
      { id: "c", text: "On / on" },
      { id: "d", text: "Ont / ont" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "« On » (pronom indéfini, sujet) précède le verbe « dire » ; « ont » (verbe avoir, 3e personne du pluriel) précède le participe passé « réussi ». On peut remplacer « ont » par « avaient » pour vérifier.",
    wrongExplanations: {
      b: "Inverse les deux emplois : « on » doit précéder « dit », et « ont » doit précéder « réussi ».",
      c: "« on » deux fois ne convient pas au second emploi, qui nécessite le verbe avoir pour former le passé composé.",
      d: "« ont » deux fois ne convient pas au premier emploi, qui nécessite le pronom « on » comme sujet de « dit »."
    },
    keywords: ["homophones", "on/ont"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-058",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Homophones son/sont",
    type: "qcm",
    difficulty: "medium",
    text: "Complétez : « Il a rangé ___ livres ; ils ___ maintenant bien classés. »",
    options: [
      { id: "a", text: "son / sont" },
      { id: "b", text: "ses / sont" },
      { id: "c", text: "ses / son" },
      { id: "d", text: "son / son" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Ses » (adjectif possessif pluriel, s'accordant avec « livres » au pluriel) précède le nom ; « sont » (verbe être, 3e personne du pluriel) précède l'adjectif attribut « classés ».",
    wrongExplanations: {
      a: "« son » est un possessif singulier, incompatible avec « livres » au pluriel.",
      c: "« son » à la fin ne convient pas : il faut le verbe être (« sont ») pour accorder avec « ils ».",
      d: "« son » deux fois est incorrect aux deux emplois."
    },
    keywords: ["homophones", "son/sont"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-059",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Homophones ou/où",
    type: "qcm",
    difficulty: "easy",
    text: "Complétez : « Dis-moi ___ tu vas, à Rabat ___ à Casablanca ? »",
    options: [
      { id: "a", text: "où / ou" },
      { id: "b", text: "ou / où" },
      { id: "c", text: "où / où" },
      { id: "d", text: "ou / ou" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "« Où » (avec accent) indique le lieu (« où tu vas ? ») ; « ou » (sans accent) exprime une alternative, un choix entre deux possibilités (« Rabat ou Casablanca »).",
    wrongExplanations: {
      b: "Inverse les deux emplois : il faut « où » pour le lieu et « ou » pour l'alternative.",
      c: "« où » deux fois ne convient pas au second emploi, qui exprime un choix, pas un lieu.",
      d: "« ou » deux fois ne convient pas au premier emploi, qui interroge sur un lieu."
    },
    keywords: ["homophones", "ou/où"],
    suggestedTimeSeconds: 55,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-060",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Homophones sa/ça",
    type: "qcm",
    difficulty: "medium",
    text: "Complétez : « ___ ne me dérange pas qu'il apporte ___ voiture. »",
    options: [
      { id: "a", text: "Ça / sa" },
      { id: "b", text: "Sa / ça" },
      { id: "c", text: "Ça / ça" },
      { id: "d", text: "Sa / sa" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "« Ça » (pronom démonstratif) est sujet du verbe « déranger » ; « sa » (adjectif possessif) précède le nom « voiture » qu'il possède.",
    wrongExplanations: {
      b: "Inverse les deux emplois : « sa » ne peut pas être sujet d'un verbe, et « ça » ne peut pas précéder directement un nom comme un possessif.",
      c: "« ça » en seconde position ne peut pas fonctionner comme adjectif possessif devant « voiture ».",
      d: "« sa » en première position ne peut pas être sujet du verbe « déranger »."
    },
    keywords: ["homophones", "sa/ça"],
    suggestedTimeSeconds: 60,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-061",
    subject: "fr",
    unit: "Grammaire",
    lesson: "Homophones quel/qu'elle",
    type: "qcm",
    difficulty: "hard",
    text: "Complétez : « Je ne sais pas ___ solution choisir, ni ___ pense vraiment. »",
    options: [
      { id: "a", text: "quelle / qu'elle" },
      { id: "b", text: "qu'elle / quelle" },
      { id: "c", text: "quelle / quelle" },
      { id: "d", text: "qu'elle / qu'elle" }
    ],
    correctOptionId: "a",
    correctExplanation:
      "« Quelle » (adjectif interrogatif féminin, accordé avec « solution ») précède un nom ; « qu'elle » (conjonction « que » + pronom sujet « elle ») introduit une proposition avec un verbe (« pense »).",
    wrongExplanations: {
      b: "Inverse les deux emplois : « qu'elle » ne peut pas précéder directement un nom comme « solution ».",
      c: "« quelle » en seconde position ne convient pas devant un verbe conjugué sans nom.",
      d: "« qu'elle » en première position ne peut pas fonctionner comme adjectif interrogatif devant « solution »."
    },
    keywords: ["homophones", "quel/qu'elle"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Grammaire française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-062",
    subject: "fr",
    unit: "Compréhension de texte",
    lesson: "Type de texte",
    type: "qcm",
    difficulty: "medium",
    text: "« Il est urgent d'agir contre la propagation des maladies chroniques au Maroc. Les autorités sanitaires doivent renforcer la prévention, notamment par des campagnes de sensibilisation dans les écoles et les entreprises. » Ce texte relève principalement du type :",
    options: [
      { id: "a", text: "Narratif" },
      { id: "b", text: "Argumentatif" },
      { id: "c", text: "Descriptif" },
      { id: "d", text: "Poétique" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le texte défend une thèse (l'urgence d'agir) et propose des recommandations, ce qui est caractéristique du texte argumentatif.",
    wrongExplanations: {
      a: "Un texte narratif raconterait une suite d'événements, ce qui n'est pas le cas ici.",
      c: "Un texte descriptif dépeindrait un lieu, une personne ou un objet, sans défendre une thèse.",
      d: "Un texte poétique privilégierait le rythme et les images, absent ici."
    },
    keywords: ["type de texte", "argumentatif", "compréhension"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Compréhension de texte française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-063",
    subject: "fr",
    unit: "Compréhension de texte",
    lesson: "Inférence",
    type: "qcm",
    difficulty: "hard",
    text: "« Malgré les progrès de la médecine moderne, de nombreuses personnes dans les zones rurales peinent encore à accéder à des soins de qualité, faute d'infrastructures suffisantes. » On peut en déduire que :",
    options: [
      { id: "a", text: "La médecine moderne n'a fait aucun progrès." },
      { id: "b", text: "L'accès aux soins reste inégal entre zones rurales et autres régions, malgré les progrès médicaux." },
      { id: "c", text: "Les zones rurales n'ont besoin d'aucune infrastructure." },
      { id: "d", text: "Tous les habitants des zones rurales refusent les soins modernes." }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le texte oppose explicitement les progrès de la médecine moderne à la difficulté d'accès aux soins en zone rurale, ce qui implique une inégalité d'accès, non un rejet des soins ni une absence de progrès.",
    wrongExplanations: {
      a: "Contredit directement le texte, qui reconnaît « les progrès de la médecine moderne ».",
      c: "Contredit le texte, qui évoque justement un manque d'infrastructures dans ces zones.",
      d: "Le texte parle d'un problème d'accès (infrastructures), pas d'un refus des soins par les habitants."
    },
    keywords: ["inférence", "compréhension", "accès aux soins"],
    suggestedTimeSeconds: 75,
    estimatedFrequency: "unknown",
    references: ["Compréhension de texte française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-064",
    subject: "fr",
    unit: "Compréhension de texte",
    lesson: "Idée principale",
    type: "qcm",
    difficulty: "medium",
    text: "« L'usage excessif des réseaux sociaux chez les jeunes soulève des inquiétudes croissantes chez les professionnels de santé, notamment en matière de sommeil, de concentration et de bien-être psychologique. » Quelle est l'idée principale ?",
    options: [
      { id: "a", text: "Les réseaux sociaux n'ont aucun effet sur les jeunes." },
      { id: "b", text: "Un usage excessif des réseaux sociaux peut avoir des conséquences négatives sur la santé des jeunes." },
      { id: "c", text: "Tous les professionnels de santé utilisent les réseaux sociaux." },
      { id: "d", text: "Le sommeil n'a aucun rapport avec les réseaux sociaux." }
    ],
    correctOptionId: "b",
    correctExplanation:
      "Le texte relie explicitement l'usage excessif des réseaux sociaux à des préoccupations de santé (sommeil, concentration, bien-être psychologique) chez les jeunes.",
    wrongExplanations: {
      a: "Contredit directement le texte, qui évoque des inquiétudes bien réelles.",
      c: "Le texte ne dit rien sur l'usage des réseaux sociaux par les professionnels de santé eux-mêmes.",
      d: "Le texte mentionne explicitement le sommeil comme un domaine affecté."
    },
    keywords: ["idée principale", "compréhension", "réseaux sociaux"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Compréhension de texte française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-065",
    subject: "fr",
    unit: "Compréhension de texte",
    lesson: "Fonction des connecteurs",
    type: "qcm",
    difficulty: "medium",
    text: "« Le traitement a montré une efficacité certaine lors des essais cliniques. Cependant, des effets secondaires non négligeables ont également été rapportés. » Le mot « Cependant » sert ici à :",
    options: [
      { id: "a", text: "Renforcer l'idée précédente" },
      { id: "b", text: "Introduire une nuance ou une restriction par rapport à l'idée précédente" },
      { id: "c", text: "Résumer tout le passage" },
      { id: "d", text: "Introduire un exemple" }
    ],
    correctOptionId: "b",
    correctExplanation:
      "« Cependant » introduit ici une nuance/restriction : malgré l'efficacité démontrée, des effets secondaires existent aussi.",
    wrongExplanations: {
      a: "« cependant » introduit au contraire une nuance/opposition, pas un renforcement de l'idée précédente.",
      c: "Le mot n'a pas de fonction résumative ; il articule une opposition entre deux idées.",
      d: "« cependant » n'introduit pas un exemple, mais une restriction/opposition."
    },
    keywords: ["connecteur", "fonction", "compréhension de texte"],
    suggestedTimeSeconds: 65,
    estimatedFrequency: "unknown",
    references: ["Compréhension de texte française — niveau baccalauréat"],
    sourceType: "original"
  },
  {
    id: "fr-066",
    subject: "fr",
    unit: "Compréhension de texte",
    lesson: "Distinguer fait et opinion",
    type: "qcm",
    difficulty: "medium",
    text: "« Le taux de vaccination a atteint 85% dans la région cette année. À mon avis, ce chiffre reste insuffisant pour garantir une protection collective optimale. » Quelle partie du texte exprime une opinion plutôt qu'un fait vérifiable ?",
    options: [
      { id: "a", text: "« Le taux de vaccination a atteint 85% dans la région cette année. »" },
      { id: "b", text: "« À mon avis, ce chiffre reste insuffisant pour garantir une protection collective optimale. »" },
      { id: "c", text: "Les deux phrases sont des faits vérifiables." },
      { id: "d", text: "Les deux phrases sont des opinions." }
    ],
    correctOptionId: "b",
    correctExplanation:
      "La première phrase donne un chiffre vérifiable (fait) ; la seconde, introduite par « à mon avis », exprime un jugement personnel sur ce chiffre — c'est une opinion, non un fait.",
    wrongExplanations: {
      a: "Cette phrase donne une donnée chiffrée vérifiable, donc un fait, pas une opinion.",
      c: "La seconde phrase, marquée par « à mon avis », est clairement une opinion, pas un fait vérifiable.",
      d: "La première phrase est un fait chiffré vérifiable, pas une opinion."
    },
    keywords: ["fait", "opinion", "compréhension de texte"],
    suggestedTimeSeconds: 70,
    estimatedFrequency: "unknown",
    references: ["Compréhension de texte française — niveau baccalauréat"],
    sourceType: "original"
  }
];
