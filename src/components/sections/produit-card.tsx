"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Btn } from "@/components/shared/btn";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ProduitCardProps {
	product: Product;
	index?: number;
}

export function ProduitCard({ product, index = 0 }: ProduitCardProps) {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
	const reduced = useReducedMotion();

	return (
		<motion.div
			ref={ref}
			className="bg-ivoire p-[60px_20px_50px] flex flex-col gap-6 relative md:p-10"
			initial={reduced ? false : { opacity: 0, scale: 0.97 }}
			animate={inView || reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
			transition={{ duration: 0.7, ease: [0.22, 0.7, 0.2, 1], delay: index * 0.15 }}
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
			</div>

			{/* Tagline */}
			<div className="text-lg font-medium tracking-[-0.01em] leading-[1.3] pb-6 border-b border-encre">
				{product.tagline}
			</div>

			{/* Audience */}
			<div className="flex flex-col gap-2">
				<span className="text-[11px] tracking-[.18em] uppercase text-gris font-medium">
					Pour qui ?
				</span>
				<span className="text-[14.5px] leading-normal text-encre">
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

			{/* Suivi (ori only) */}
			{product.suivi && (
				<div className="flex flex-col gap-2">
					<span className="text-[11px] tracking-[.18em] uppercase text-gris font-medium">
						Le suivi
					</span>
					<div className="flex flex-col gap-0.5">
						{product.suivi.map((line, i) => (
							<p
								key={i}
								className="text-[14.5px] leading-normal text-encre m-0"
							>
								{line}
							</p>
						))}
					</div>
				</div>
			)}

			{/* Control (iko only) */}
			{product.control && (
				<div className="flex flex-col gap-2">
					<span className="text-[11px] tracking-[.18em] uppercase text-gris font-medium">
						Le contrôle
					</span>
					<div className="flex flex-col gap-0.5">
						{product.control.map((line, i) => (
							<p
								key={i}
								className="text-[14.5px] leading-normal text-encre m-0"
							>
								{line}
							</p>
						))}
					</div>
				</div>
			)}

			{/* Promise */}
			<div className="mt-auto pt-7 border-t border-encre flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<span className="text-[11px] tracking-[.18em] uppercase text-gris font-medium">
						La promesse
					</span>
					<div className="flex flex-col gap-0.5">
						{product.promise.map((line, i) => (
							<p
								key={i}
								className="text-lg font-medium tracking-[-0.01em] leading-tight m-0"
							>
								{line}
							</p>
						))}
					</div>
				</div>
				<Btn variant="primary" href="#contact" className="self-start">
					{product.cta}
				</Btn>
			</div>
		</motion.div>
	);
}
