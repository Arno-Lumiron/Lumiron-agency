import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { Btn } from "@/components/shared/btn";
import { OFFRE_ITEMS, OFFRE_CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function OffreSection() {
	return (
		<section id="offre" className="py-17.5" aria-labelledby="offre-heading">
			<div className="max-w-7xl mx-auto px-5 md:px-10">
				<SectionHeading
					eyebrow="CAPACITÉS"
					heading={
						<>
							De l&apos;échange client jusqu&apos;au
							<br />
							<span className="text-coral">pilotage opérationnel.</span>
						</>
					}
					lead="Des systèmes autonomes intégrés à vos outils, conçus pour centraliser les flux et fluidifier l'exécution."
				/>

				<div
					className="border-t border-l border-encre"
					role="list"
					aria-label="Nos offres"
				>
					<div className="grid grid-cols-1 lg:grid-cols-3">
						{OFFRE_ITEMS.map((item, i) => (
							<AnimatedReveal
								key={item.num}
								delay={i * 80}
								className={cn(
									"border-r border-b border-encre p-5 lg:p-9 flex flex-col gap-4 lg:min-h-75 transition-colors duration-200",
									item.featured
										? "bg-encre text-ivoire hover:bg-encre"
										: "bg-ivoire hover:bg-white",
								)}
								role="listitem"
							>
								<div>
									<span
										className={cn(
											"inline-flex items-center justify-center shrink-0",
											item.featured ? "text-coral" : "text-encre",
										)}
										aria-hidden="true"
									>
										<item.Icon size={26} strokeWidth={1.5} />
									</span>
								</div>
								<h3
									className={cn(
										"text-2xl font-medium tracking-[-0.015em] leading-[1.1] mt-2",
										item.featured ? "text-ivoire" : "text-encre",
									)}
								>
									{item.title}
								</h3>
								<p
									className={cn(
										"text-[14.5px] leading-[1.55] m-0",
										item.featured ? "text-gris-light" : "text-gris",
									)}
								>
									{item.description}
								</p>
							</AnimatedReveal>
						))}
					</div>

					{/* Séparateur CTA */}
					<AnimatedReveal
						className="border-r border-b border-encre bg-ivoire px-5 lg:px-9 py-5 flex items-center gap-6"
						role="presentation"
					>
						<div className="flex-1 h-px bg-encre" aria-hidden="true" />
						<Btn variant="primary" href={OFFRE_CTA.href} className="shrink-0 whitespace-nowrap">
							{OFFRE_CTA.cta}
						</Btn>
						<div className="flex-1 h-px bg-encre" aria-hidden="true" />
					</AnimatedReveal>
				</div>
			</div>
		</section>
	);
}
