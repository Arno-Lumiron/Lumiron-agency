import { Eyebrow } from "./eyebrow";
import { AnimatedText } from "./animated-text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
	eyebrow: string;
	heading: ReactNode;
	lead?: ReactNode;
	light?: boolean;
	className?: string;
	headingSize?: "h2" | "h3";
}

export function SectionHeading({
	eyebrow,
	heading,
	lead,
	light = false,
	className,
	headingSize = "h2",
}: SectionHeadingProps) {
	return (
		<div className={cn("flex flex-col items-end text-right gap-3 mb-16 md:mb-20", className)}>
			<Eyebrow light={light}>{eyebrow}</Eyebrow>
			<AnimatedText
				as={headingSize}
				className={cn(
					"font-medium tracking-[-0.03em] leading-[1.2]! m-0 hyphens-none break-keep [&>span]:align-top",
					headingSize === "h2" ? "text-[clamp(42px,5vw,64px)]" : "text-3xl",
					light && "text-ivoire",
				)}
			>
				{heading}
			</AnimatedText>
			{lead && (
				<p
					className={cn(
						"mt-2 text-[17px] leading-[1.4] max-w-[90ch]",
						light ? "text-gris-light" : "text-encre",
					)}
				>
					{lead}
				</p>
			)}
		</div>
	);
}
