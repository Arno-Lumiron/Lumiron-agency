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
			<div className="max-w-7xl mx-auto px-5 md:px-10">
				{/* Top grid */}
				<div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-16">
					{/* Brand column */}
					<div className="col-span-2 md:col-span-1">
						<div className="flex items-center gap-2.5 text-[42px] font-medium tracking-[-0.5em] lowercase leading-none">
							<span
								className="w-3.5 h-3.5 rounded-full bg-coral shrink-0"
								aria-hidden="true"
							/>
							lumiron
						</div>
						<p className="mt-3.5 text-[14px] text-gris-light leading-[1.55] max-w-[36ch]">
							L&apos;IA qui éclaire votre business. Agents conversationnels,
							outils sur-mesure, intégrations métier.
						</p>
					</div>

					{/* Link columns */}
					{Object.entries(FOOTER_LINKS).map(([section, links]) => (
						<div key={section}>
							<h5 className="text-[11px] tracking-[.18em] uppercase text-gris-light font-medium mb-4">
								{section}
							</h5>
							<ul className="space-y-0 list-none p-0 m-0">
								{links.map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											className="block text-ivoire text-[14px] py-1.5 hover:text-coral transition-colors duration-150"
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
					className="mt-10 pt-12 border-t border-[rgba(245,241,232,.18)] text-center font-medium tracking-[-0.05em] leading-[.85] lowercase select-none"
					style={{
						fontSize: "clamp(120px, 22vw, 320px)",
						background: "linear-gradient(180deg, #ffffff 0%, #1a1a1a 100%)",
						WebkitBackgroundClip: "text",
						backgroundClip: "text",
						WebkitTextFillColor: "transparent",
						color: "transparent",
					}}
					aria-hidden="true"
				>
					lumiron.
				</div>

				{/* Bottom bar */}
				<div className="mt-8 flex flex-col sm:flex-row justify-between gap-2 text-[11px] tracking-[.18em] uppercase text-gris-light">
					<span>© 2026 Lumiron · Tous droits réservés</span>
					<span>Fait à Paris</span>
				</div>
			</div>
		</footer>
	);
}
