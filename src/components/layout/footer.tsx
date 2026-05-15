import Image from "next/image";

const FOOTER_LINKS = {
	Produits: [
		{ label: "Ori", href: "#produits" },
		{ label: "Iko", href: "#produits" },
		{ label: "Sur-mesure", href: "#contact" },
		{ label: "Intégrations", href: "#offre" },
	],
	Lumiron: [
		{ label: "Équipe", href: "#" },
		{ label: "Cas clients", href: "#" },
		{ label: "Carrières", href: "#" },
		{ label: "Blog", href: "#" },
	],
	Légal: [
		{ label: "Mentions", href: "#" },
		{ label: "RGPD", href: "#" },
		{ label: "Conditions", href: "#" },
		{ label: "Cookies", href: "#" },
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
						<Image
							src="/logo noir fond blanc v2.png"
							alt="Lumiron"
							width={102}
							height={30}
							className="h-6.5 w-auto brightness-0 invert"
						/>
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
										<a
											href={link.href}
											className="block text-ivoire text-sm py-1.5 hover:text-coral transition-colors duration-150"
										>
											{link.label}
										</a>
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
						WebkitMaskImage: `url('/logo noir fond blanc v2.png')`,
						maskImage: `url('/logo noir fond blanc v2.png')`,
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
				<div className="mt-8 flex flex-col sm:flex-row justify-between gap-2 text-xs tracking-[.18em] uppercase text-gris-light">
					<span>© 2026 Lumiron · Tous droits réservés</span>
					<span>Fait à Paris</span>
				</div>
			</div>
		</footer>
	);
}
