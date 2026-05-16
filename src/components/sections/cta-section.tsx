import { AnimatedReveal } from "@/components/shared/animated-reveal";

export function CtaSection() {
	return (
		<section
			id="contact"
			className="pb-17.5 pt-10"
			aria-labelledby="cta-heading"
		>
			{/* Container */}
			<div className="max-w-7xl mx-auto px-5 md:px-10">
				<AnimatedReveal>
					<div className="relative bg-encre text-ivoire p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 overflow-hidden">
						{/* Background decorative marks */}
						<svg
							className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none select-none"
							viewBox="0 0 100 100"
							width="200"
							height="200"
							fill="none"
							stroke="rgba(245,241,232,.06)"
							strokeWidth="14"
							strokeLinejoin="miter"
							aria-hidden="true"
						>
							<path d="M20 18 L60 50 L20 82" />
							<path d="M50 18 L90 50 L50 82" />
						</svg>

						{/* Content */}
						<div className="relative z-10 max-w-[60ch]">
							<h2
								id="cta-heading"
								className="text-[clamp(30px,4vw,42px)] font-semibold tracking-[-0.02em] leading-[1.1] text-ivoire m-0 mb-3.5"
							>
								Et si tout avançait plus vite ?
							</h2>
							<p className="text-base text-gris-light m-0 leading-normal">
								Nous analysons votre fonctionnement pour identifier ce qui peut
								être automatisé, simplifié et accéléré.
							</p>
						</div>

						{/* CTA button */}
						<a
							href="https://calendly.com/anthony-lumiron/decouvrir_lumiron"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative z-10 shrink-0 inline-flex cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
						>
							<span className="inline-flex items-center justify-center bg-ivoire text-encre px-9 py-4.5 font-semibold text-[15px] tracking-[.01em] transition-[transform,box-shadow] duration-150 shadow-[3px_3px_0_var(--coral)] group-hover:shadow-[6px_6px_0_var(--coral)] group-hover:-translate-x-0.75 group-hover:-translate-y-0.75">
								Réservez une démo
							</span>
						</a>
					</div>
				</AnimatedReveal>
			</div>
		</section>
	);
}
