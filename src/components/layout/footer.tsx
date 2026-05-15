import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

const FOOTER_LINKS = {
	Produits: [
		{ label: "Ori", href: "https://ori.lumiron.ai/" },
		{ label: "Iko", href: "https://iko.lumiron.ai/" },
	],
	Lumiron: [
		{ label: "Cas clients", href: "#secteurs" },
		{ label: "Sur-mesure", href: "#offre" },
		{ label: "Blog", href: "/blog" },
	],
	Légal: [
		{ label: "Mentions légales", href: "#" },
		{ label: "CGV", href: "#" },
		{ label: "Politique de confidentialité", href: "#" },
	],
};

export function Footer() {
	return (
		<footer className="bg-encre text-ivoire pt-20 pb-10" role="contentinfo">
			<div className="max-w-7xl mx-auto px-6 md:px-10">
				{/* Top grid */}
				<div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-8">
					{/* Brand column */}
					<div className="col-span-2 md:col-span-1">
						<div className="flex items-center gap-4">
							<Image
								src="/logo_white.png"
								alt=""
								width={36}
								height={36}
								className="h-9 w-auto"
							/>
							<Image
								src="/logo_text_black.png"
								alt="Lumiron"
								width={102}
								height={30}
								className="h-6.5 w-auto brightness-0 invert"
							/>
						</div>
						<p className="mt-5 text-sm text-gris-light leading-[1.55] max-w-[36ch]">
							L&apos;IA qui éclaire votre business. Agents conversationnels,
							outils sur-mesure, intégrations métier.
						</p>
					</div>

					{/* Link columns */}
					{Object.entries(FOOTER_LINKS).map(([section, links]) => (
						<div key={section}>
							<h5 className="text-xs tracking-[.18em] uppercase text-gris-light font-medium mb-4">
								{section}
							</h5>
							<ul className="space-y-0 list-none p-0 m-0">
								{links.map((link) => (
									<li key={link.label}>
										{link.href.startsWith("/") ? (
											<Link
												href={link.href}
												className="block text-ivoire text-sm py-1.5 hover:text-coral transition-colors duration-150"
											>
												{link.label}
											</Link>
										) : (
											<a
												href={link.href}
												target={link.href.startsWith("http") ? "_blank" : undefined}
												rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
												className="block text-ivoire text-sm py-1.5 hover:text-coral transition-colors duration-150"
											>
												{link.label}
											</a>
										)}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Big watermark */}
				<div
					className="my-10 pt-12 border-t border-[rgba(245,241,232,.18)] flex justify-center select-none"
					aria-hidden="true"
					style={{
						background: "linear-gradient(180deg, #ffffff 0%, #1a1a1a 100%)",
						WebkitMaskImage: `url('/logo_text_black.png')`,
						maskImage: `url('/logo_text_black.png')`,
						WebkitMaskRepeat: "no-repeat",
						maskRepeat: "no-repeat",
						WebkitMaskPosition: "center",
						maskPosition: "center",
						WebkitMaskSize: "contain",
						maskSize: "contain",
						height: "clamp(52px, 14vw, 140px)",
					}}
				/>

				{/* Bottom bar */}
				<div className="mt-8 flex flex-col sm:flex-row justify-between gap-2 text-[10px] tracking-[.18em] uppercase text-gris-light">
					<span>© 2026 Lumiron · Tous droits réservés</span>
					<a
						href="mailto:contact@lumiron.ai"
						className="group flex items-center gap-1.5 text-gris-light hover:text-coral transition-colors duration-150"
					>
						<Mail size={11} className="group-hover:text-coral transition-colors duration-150" aria-hidden="true" />
						Contact
					</a>
				</div>
			</div>
		</footer>
	);
}
