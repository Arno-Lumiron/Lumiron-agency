import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { Btn } from "@/components/shared/btn";
import { SECTEURS } from "@/lib/constants";
import {
	UtensilsCrossed,
	Hotel,
	Stethoscope,
	ShoppingBag,
	MapPin,
	CreditCard,
	Scale,
	GraduationCap,
	Truck,
	Building2,
	Headphones,
	ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS = [
	UtensilsCrossed,
	Hotel,
	Stethoscope,
	ShoppingBag,
	MapPin,
	CreditCard,
	Scale,
	GraduationCap,
	Truck,
	Building2,
	Headphones,
	ArrowRight,
];

export function SecteursSection() {
	return (
		<section
			id="secteurs"
			className="py-17.5"
			aria-labelledby="secteurs-heading"
		>
			<div className="max-w-7xl mx-auto px-5 md:px-10">
				<SectionHeading
					eyebrow="SECTEURS"
					heading={
						<>
							Pensé pour les opérations.{" "}
							<span className="text-coral">Adapté à chaque métier.</span>
						</>
					}
					lead="Des systèmes conçus pour s'intégrer à vos outils, vos équipes et votre manière de travailler."
				/>

				<div
					className="grid grid-cols-1 md:grid-cols-4 border-t border-encre"
					role="list"
					aria-label="Secteurs couverts"
				>
					{SECTEURS.map((item, i) => {
						const Icon = ICONS[i];
						const isCta = "cta" in item && item.cta;
						const delay = i * 60;

						return (
							<AnimatedReveal
								key={item.sector}
								delay={delay}
								className={cn(
									"border-r border-b border-encre p-4 md:p-8 flex flex-col gap-4 justify-evenly md:min-h-50 min-h-40 transition-colors duration-200",
									!isCta && "hover:bg-ivoire-soft group",
									isCta && "bg-encre text-ivoire",
									// remove right border on last of each row
									"border-r-0 md:border-r md:nth-[4n]:border-r-0",
								)}
								role="listitem"
							>
								{/* Top row: icon + sector label */}
								<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-3">
									<span
										className={cn(
											"w-10 h-10 inline-flex items-center justify-center transition-colors duration-200",
											isCta
												? "text-coral"
												: "text-encre group-hover:text-coral",
										)}
										aria-hidden="true"
									>
										<Icon size={28} strokeWidth={1.5} />
									</span>
									<span
										className={cn(
											"text-[11px] tracking-[.16em] font-medium uppercase",
											isCta ? "text-gris-light" : "text-gris",
										)}
									>
										{item.sector}
									</span>
								</div>

								{/* Name */}
								<div
									className={cn(
										"text-[20px] md:text-[20px] font-medium tracking-[-0.015em] leading-[1.2]",
										isCta ? "text-ivoire" : "text-encre",
									)}
								>
									{item.name.split("\n").map((line, idx, arr) => (
										<span key={idx}>
											{line}
											{idx < arr.length - 1 && <br />}
										</span>
									))}
								</div>

								{isCta && (
									<Btn
										variant="coral"
										href="#contact"
										className="self-start text-[11px] px-3 py-1.5 md:px-6 md:py-3"
									>
										Parlons-en →
									</Btn>
								)}
							</AnimatedReveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
