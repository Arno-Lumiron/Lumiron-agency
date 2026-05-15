import { SectionHeading } from "@/components/shared/section-heading";
import {
	AnimatedStagger,
	StaggerChild,
} from "@/components/shared/animated-stagger";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function StatsSection() {
	return (
		<section
			className="py-17.5 bg-encre text-ivoire"
			aria-labelledby="stats-heading"
		>
			<div className="max-w-7xl mx-auto px-5 md:px-10">
				<SectionHeading
					eyebrow="Chiffres"
					heading={
						<>
							Les opérations évoluent.
							<br />
							<span className="text-coral">Les résultats aussi.</span>
						</>
					}
					light
				/>

				<AnimatedStagger
					className="grid grid-cols-2 md:grid-cols-4 border-t border-ivoire mt-20"
					aria-label="Statistiques clés"
				>
					{STATS.map((stat, i) => (
						<StaggerChild
							key={stat.label}
							className={cn(
								"border-r border-ivoire p-4 md:p-[42px_32px_36px] flex flex-col gap-3.5 justify-start min-h-60",
								"last:border-r-0",
								"even:border-r-0 md:even:border-r",
								i === STATS.length - 1 && "md:border-r-0",
							)}
						>
							<span className="text-[11px] tracking-[.18em] uppercase text-gris-light font-medium">
								{stat.label}
							</span>

							<div
								className="text-[clamp(40px,7vw,88px)] min-[350px]:text-[clamp(54px,7vw,88px)] font-medium tracking-[-0.04em] leading-[.9] text-coral"
								aria-label={`${stat.value}${stat.index}`}
							>
								{stat.label === "Disponibilité" ? (
									<span className="text-coral">{stat.value}</span>
								) : stat.label === "Automatisation" ? (
									<span className="flex flex-col leading-none">
										<span className="text-[0.25em] font-medium tracking-normal mb-1">
											Jusqu&apos;à
										</span>
										<AnimatedCounter
											value={parseInt(stat.value)}
											suffix="%"
											className="text-coral"
										/>
									</span>
								) : stat.label === "Productivité" ? (
									<AnimatedCounter
										value={parseInt(stat.value)}
										suffix={stat.index}
										className="text-coral"
									/>
								) : (
									<AnimatedCounter
										value={parseInt(stat.value)}
										prefix={stat.value.startsWith("+") ? "+" : ""}
										suffix={stat.value.includes("%") ? "%" : stat.index}
										className="text-coral"
									/>
								)}
							</div>

							<span className="text-sm text-gris-light leading-normal max-w-[24ch]">
								{stat.description}
							</span>
						</StaggerChild>
					))}
				</AnimatedStagger>
			</div>
		</section>
	);
}
