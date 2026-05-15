import { Tag } from "@/components/shared/tag";
import { Btn } from "@/components/shared/btn";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { AnimatedText } from "@/components/shared/animated-text";
import {
	AnimatedStagger,
	StaggerChild,
} from "@/components/shared/animated-stagger";
import { HeroGraphic } from "./hero-graphic";
import { REASSURANCES } from "@/lib/constants";

export function HeroSection() {
	return (
		<section className="pt-12.5 pb-15" aria-labelledby="hero-heading">
			<div className="max-w-7xl mx-auto px-5 md:px-10">
				{/* Tags */}
				<AnimatedStagger className="flex gap-2.5 mb-9 flex-wrap">
					<StaggerChild>
						<Tag variant="black">✦ STANDARD D&apos;EXÉCUTION INTELLIGENTE</Tag>
					</StaggerChild>
				</AnimatedStagger>

				{/* Hero grid */}
				<div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.35fr)_minmax(0,360px)] gap-10 md:gap-15 items-start">
					{/* Left column */}
					<div className="flex flex-col">
						<AnimatedText
							as="h1"
							id="hero-heading"
							className="font-medium text-[clamp(52px,6vw,76px)] leading-[1.1] tracking-[-0.04em] m-0 mb-8"
							delayPerChar={22}
						>
							L&apos;agence qui construit les{" "}
							<span className="text-coral">
								syst&egrave;mes IA op&eacute;rationnels
							</span>{" "}
							des entreprises.
						</AnimatedText>

						<AnimatedReveal delay={600}>
							<p className="text-[17px] leading-[1.55] max-w-[56ch] mb-0 font-normal text-encre">
								Lumiron bâtit les infrastructures autonomes qui pilotent vos
								outils, coordonnent vos équipes et valident vos résultats sans
								intervention humaine. Nous transformons votre vision stratégique
								en une exécution technique fluide, permanente et sans friction.
							</p>
						</AnimatedReveal>

						<AnimatedReveal
							delay={780}
							className="flex gap-3 mt-7 flex-wrap items-center"
						>
							<Btn variant="primary" href="#contact">
								RÉSERVER UNE DÉMO
							</Btn>
							<Btn variant="outline" href="#produits">
								DÉCOUVRIR NOS AGENTS
							</Btn>
						</AnimatedReveal>
					</div>

					{/* Graphic */}
					<AnimatedReveal
						direction="right"
						delay={300}
						className="hidden md:block"
					>
						<HeroGraphic />
					</AnimatedReveal>
				</div>

				{/* Reassurance bar */}
				<AnimatedStagger className="mt-10 pt-6 border-t border-encre flex gap-6 flex-wrap text-xs text-encre tracking-[.04em]">
					{REASSURANCES.map((item) => (
						<StaggerChild key={item}>
							<span className="inline-flex items-center gap-2">
								<span className="text-coral font-semibold" aria-hidden="true">
									✓
								</span>
								{item}
							</span>
						</StaggerChild>
					))}
				</AnimatedStagger>
			</div>
		</section>
	);
}
