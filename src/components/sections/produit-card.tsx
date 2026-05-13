import { Btn } from "@/components/shared/btn";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

interface ProduitCardProps {
	product: Product;
	direction?: "left" | "right";
}

export function ProduitCard({ product, direction = "left" }: ProduitCardProps) {
	return (
		<AnimatedReveal
			direction={direction}
			delay={direction === "right" ? 120 : 0}
			className="bg-ivoire p-[60px_20px_50px] flex flex-col gap-6 relative md:p-10"
		>
			{/* Name + index */}
			<div className="flex items-baseline justify-between gap-4">
				<span
					className={cn(
						"text-[clamp(54px,7vw,84px)] font-medium tracking-[-0.04em] leading-[.9] lowercase",
					)}
				>
					{product.id}
					<span className="not-italic text-coral font-normal">.</span>
				</span>
				<span className="text-[11px] tracking-[.18em] text-gris font-medium flex-shrink-0">
					{product.index}
				</span>
			</div>

			{/* Tagline */}
			<div className="text-[18px] font-medium tracking-[-0.01em] leading-[1.3] pb-6 border-b border-encre">
				{product.tagline}
			</div>

			{/* Audience */}
			<div className="flex flex-col gap-2">
				<span className="text-[11px] tracking-[.18em] uppercase text-gris font-medium">
					Pour qui ?
				</span>
				<span className="text-[14.5px] leading-[1.5] text-encre">
					{product.audience}
				</span>
			</div>

			{/* Features */}
			<div className="flex flex-col gap-2">
				<span className="text-[11px] tracking-[.18em] uppercase text-gris font-medium">
					Ce qu&apos;il fait
				</span>
				<ul className="list-none p-0 m-0">
					{product.features.map((f, i) => (
						<li
							key={i}
							className={cn(
								"grid grid-cols-[24px_1fr] gap-3 items-start text-[14.5px] leading-[1.4] py-3",
								i > 0 && "border-t border-line",
							)}
						>
							<span className="text-coral font-medium" aria-hidden="true">
								→
							</span>
							<span>{f.text}</span>
						</li>
					))}
				</ul>
			</div>

			{/* Promise */}
			<div className="mt-auto pt-7 border-t border-encre flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<span className="text-[11px] tracking-[.18em] uppercase text-gris font-medium">
						La promesse
					</span>
					<p className="text-[18px] font-medium tracking-[-0.01em] leading-[1.25] m-0">
						{product.promise}{" "}
						<em className="text-coral italic font-normal">
							{product.promiseHighlight}
						</em>
					</p>
				</div>
				<Btn variant="primary" href="#contact" className="self-start">
					{product.cta}
				</Btn>
			</div>
		</AnimatedReveal>
	);
}
