import {
	PhoneCall,
	LineChart,
	Plug,
	LayoutDashboard,
	Brain,
	ShieldCheck,
} from "lucide-react";
import type {
	NavLink,
	OffreItem,
	StatItem,
	TestimonialItem,
	Product,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
	{ label: "Iko", href: "https://iko.lumiron.ai/" },
	{ label: "Ori", href: "https://ori.lumiron.ai/" },
	{ label: "Blog", href: "#blog" },
];

export const OFFRE_ITEMS: OffreItem[] = [
	{
		num: "1",
		Icon: PhoneCall,
		title: "Agents conversationnels",
		description:
			"Des agents capables de gérer appels, messages et demandes sur tous vos canaux, tout en exécutant vos processus métier.",
		featured: true,
	},
	{
		num: "2",
		Icon: LineChart,
		title: "Automatisation des opérations",
		description:
			"Vos outils communiquent entre eux pour automatiser les tâches, les suivis et les actions répétitives.",
	},
	{
		num: "3",
		Icon: Plug,
		title: "Intégrations métier",
		description:
			"CRM, ERP, agenda, caisse, outils internes. Vos systèmes restent connectés et synchronisés.",
	},
	{
		num: "4",
		Icon: LayoutDashboard,
		title: "Dashboards opérationnels",
		description:
			"Centralisez le suivi, le pilotage et les données dans une seule interface.",
	},
	{
		num: "5",
		Icon: Brain,
		title: "Intelligence de données.",
		description:
			"Transformez vos échanges clients en statistiques exploitables.",
	},
	{
		num: "6",
		Icon: ShieldCheck,
		title: "Infrastructure sécurisée",
		description:
			"Données chiffrées, accès sécurisés et infrastructure conforme aux exigences RGPD.",
	},
];

export const CALENDLY_URL =
	"https://calendly.com/anthony-lumiron/decouvrir_lumiron";

export const OFFRE_CTA = {
	label: "Prêt à automatiser vos opérations ?",
	cta: "Réserver une démo →",
	href: CALENDLY_URL,
};

export const STATS: StatItem[] = [
	{
		label: "Performance",
		value: "+40",
		description: "de flux traités sans intervention humaine",
		index: "%",
	},
	{
		label: "Productivité",
		value: "3",
		description: "plus d'actions exécutées simultanément",
		index: "×",
	},
	{
		label: "Automatisation",
		value: "80",
		description: "de tâches répétitives absorbées",
		index: "%",
	},
	{
		label: "Disponibilité",
		value: "24/7",
		description: "sans saturation des équipes",
		index: "",
	},
];

export const TESTIMONIALS: TestimonialItem[] = [
	{
		quote:
			"Installé mardi. Vendredi, nous avions déjà enregistré plus de réservations sans ajouter une seule personne en salle.",
		name: "Marc D.",
		role: "Restaurateur · Lyon",
	},
	{
		quote:
			"Iko absorbe une partie des micro-tâches qui me prenaient des heures chaque semaine. Tout avance plus vite.",
		name: "Sophie L.",
		role: "Founder · Startup SaaS",
	},
	{
		quote:
			"Déploiement rapide, équipe opérationnelle immédiatement. Les échanges et le suivi sont devenus beaucoup plus fluides.",
		name: "Thomas R.",
		role: "Directeur · PME",
	},
	{
		quote:
			"Ce qui prenait plusieurs heures d'analyse et de tri est désormais centralisé et structuré automatiquement. Les équipes traitent plus de dossiers, beaucoup plus vite.",
		name: "Antoine R.",
		role: "Partner · Fonds d'investissement",
	},
];

export const PRODUCTS: Product[] = [
	{
		id: "iko",
		index: "▶ Produit 01",
		tagline: "Votre bras droit opérationnel.",
		audience:
			"Fondateurs, CEO et dirigeants qui veulent réduire les micro-tâches et accélérer leurs opérations.",
		features: [
			{ text: "Prépare vos réunions et vos briefs" },
			{ text: "Rédige, relance et répond à votre place" },
			{ text: "Organise vos priorités et vos suivis" },
			{ text: "Structure et synthétise les informations clés" },
			{ text: "Exécute depuis un simple message vocal ou écrit" },
		],
		control: [
			"Chaque action importante nécessite votre validation.",
			"Vous gardez toujours la main.",
		],
		promise: [
			"Moins de micro-tâches.",
			"Moins d'intermédiaires.",
			"Plus de fluidité.",
		],
		cta: "Découvrir Iko →",
	},
	{
		id: "ori",
		index: "▶ Produit 02",
		tagline: "L'agent IA pour vos appels et messages.",
		audience:
			"Restaurants, groupes et franchises qui veulent traiter chaque demande sans ralentir leurs équipes.",
		features: [
			{ text: "Répond aux appels entrants 24/7" },
			{ text: "Gère les demandes sur Instagram et WhatsApp" },
			{ text: "Traite réservations, modifications et questions clients" },
			{ text: "Synchronise les échanges en temps réel" },
			{
				text: "Gère plusieurs conversations simultanément, en plusieurs langues",
			},
		],
		suivi: [
			"Toutes les demandes restent centralisées, suivies et accessibles en temps réel.",
		],
		promise: [
			"Plus de demandes traitées.",
			"Moins d'interruptions.",
			"Chaque réservation captée.",
		],
		cta: "Découvrir Ori →",
	},
];

export const REASSURANCES = ["SOUVERAINETÉ", "VITESSE", "FIABILITÉ"];

export const SECTEURS = [
	{ sector: "Restauration", name: "Plus une réservation perdue." },
	{ sector: "Hôtellerie", name: "Une présence continue multilingue." },
	{ sector: "Santé", name: "Moins d'attente.\nPlus de prise en charge." },
	{ sector: "Retail", name: "Chaque client pris en charge immédiatement." },
	{
		sector: "Immobilier",
		name: "Réponses instantanées.\nDossiers automatiquement filtrés.",
	},
	{ sector: "Finance", name: "Analyse accélérée.\nDécisions mieux préparées." },
	{ sector: "Juridique", name: "Les demandes arrivent déjà filtrées." },
	{ sector: "Formation", name: "L'apprentissage sans friction." },
	{ sector: "Logistique", name: "Chaque étape suivie automatiquement." },
	{
		sector: "BTP",
		name: "Relances de devis et gestion de planning automatisées.",
	},
	{ sector: "Support client", name: "Zéro ticket en attente." },
	{
		sector: "Sur-mesure",
		name: "Votre métier n'est pas listé ?",
		cta: true,
	},
] as const;
