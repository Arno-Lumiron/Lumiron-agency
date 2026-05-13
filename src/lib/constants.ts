import type { NavLink, OffreItem, StatItem, TestimonialItem, Product } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Secteurs', href: '#secteurs' },
  { label: 'Offre', href: '#offre' },
  { label: 'Ori & Iko', href: '#produits' },
  { label: 'Avis', href: '#avis' },
  { label: 'Contact', href: '#contact' },
];

export const OFFRE_ITEMS: OffreItem[] = [
  {
    num: '01 / 06',
    glyph: '✦',
    title: 'Gestion appels & messages',
    description: "Plus jamais d'appel raté. Plus jamais de message en attente. Vos clients sont pris en charge en temps réel — téléphone, WhatsApp, mail ou chat.",
    featured: true,
  },
  {
    num: '02 / 06',
    glyph: '◦',
    title: 'Tracking & data',
    description: 'Tout est mesuré. Tout est lisible. Vous voyez ce qui marche, ce qui décroche, ce qui rapporte.',
  },
  {
    num: '03 / 06',
    glyph: '⌘',
    title: 'Intégrations métier',
    description: 'On se branche à vos outils existants : CRM, agenda, caisse, ERP. Zéro double saisie.',
  },
  {
    num: '04 / 06',
    glyph: '▤',
    title: 'Dashboards sur-mesure',
    description: "Une vue claire pour vos équipes. Une vue stratégique pour vous. D'un coup d'œil, vous pilotez.",
  },
  {
    num: '05 / 06',
    glyph: '◦',
    title: 'IA personnalisée',
    description: "Votre ton. Vos process. Vos données. On entraîne l'IA à parler comme vous, pas comme un robot.",
  },
  {
    num: '06 / 06',
    glyph: '⬡',
    title: 'Sécurité & RGPD',
    description: 'Données chiffrées, hébergées en Europe, conformes RGPD. Vos données restent les vôtres.',
  },
];

export const STATS: StatItem[] = [
  { label: 'Performance', value: '+87', description: "d'appels traités sans intervention humaine", index: '%' },
  { label: 'Productivité', value: '3.2', description: 'sur les tâches automatisées', index: '×' },
  { label: 'Mise en prod', value: '4', description: 'pour passer en production', index: ' sem.' },
  { label: 'Adoption', value: '150', description: 'boîtes nous font déjà confiance', index: '+' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  { quote: "Installé un mardi. Vendredi, 40 réservations récupérées. Ça change tout.", name: 'Marc D.', role: 'Restaurateur · Lyon' },
  { quote: "Iko, c'est 2h par jour rendues. Je délègue à la voix. Je ne reviendrai pas en arrière.", name: 'Sophie L.', role: 'CEO · SaaS' },
  { quote: 'Briefing lundi. Démo mercredi. En prod 3 semaines plus tard. Rare.', name: 'Thomas R.', role: 'Directeur · PME' },
  { quote: "Une équipe à l'écoute, qui livre vite et bien. Le ROI s'est vu dès le premier mois.", name: 'Claire M.', role: 'Responsable ops · Retail' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'ori',
    index: '▶ Produit 01',
    tagline: "L'agent qui ne raccroche jamais.",
    audience: 'Restaurants, hôtels, cabinets, commerces. Tous ceux qui décrochent (ou ratent) des appels toute la journée.',
    features: [
      { text: 'Répond 24/7, sans pause, sans bad mood' },
      { text: 'Prend réservations, commandes, RDV' },
      { text: 'Filtre, qualifie, oriente' },
      { text: 'Parle plusieurs langues' },
      { text: 'Se branche à vos outils' },
    ],
    promise: 'Aucun client perdu.',
    promiseHighlight: 'Aucune équipe submergée.',
    cta: 'Découvrir Ori →',
  },
  {
    id: 'iko',
    index: '▶ Produit 02',
    tagline: 'Votre bras droit, version augmentée.',
    audience: "Fondateurs, CEO, dirigeants de PME et start-ups qui n'ont jamais assez de temps.",
    features: [
      { text: 'Prépare vos réunions à votre place' },
      { text: 'Rédige et envoie vos mails, à votre voix' },
      { text: 'Gère votre agenda, prend vos RDV' },
      { text: 'Vous brief avant chaque échange' },
      { text: 'Exécute à la voix, où que vous soyez' },
    ],
    promise: 'Vous reprenez le contrôle.',
    promiseHighlight: 'Iko gère le reste.',
    cta: 'Découvrir Iko →',
  },
];

export const REASSURANCES = ['RGPD', 'Hébergé en France', 'Live en 4 semaines', 'Sans engagement'];

export const SECTEURS = [
  { sector: 'Restauration', name: 'Plus une réservation perdue.' },
  { sector: 'Hôtellerie', name: 'Un ', highlight: 'concierge', nameEnd: ' IA, multilingue, 24/7.' },
  { sector: 'Santé', name: 'Les rendez-vous se prennent.', highlight: 'Vous soignez.' },
  { sector: 'Retail', name: 'Vos clients servis ', highlight: 'avant', nameEnd: " d'avoir attendu." },
  { sector: 'BTP & Artisanat', name: 'Devis, planning, relances.', highlight: 'Tout suit.' },
  { sector: 'Services B2B', name: 'Leads ', highlight: 'qualifiés.', nameEnd: ' Agendas remplis.' },
  { sector: 'Formation', name: 'Les apprenants avancent,', highlight: 'vous aussi.' },
  { sector: 'Logistique', name: 'Vos clients informés', highlight: 'en temps réel.' },
  { sector: 'Immobilier', name: 'Les bons prospects.', highlight: 'Au bon moment.' },
  { sector: 'Juridique', name: 'Filtrage, confidentialité,', highlight: 'sérénité.' },
  { sector: 'Finance', name: 'Relances, KYC, reporting.', highlight: 'Sans friction.' },
  { sector: 'Sur-mesure', name: "Votre métier", highlight: "n'est pas listé ?", cta: true },
] as const;
