import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { Btn } from "@/components/shared/btn";
import { ProduitCard } from "./produit-card";
import { PRODUCTS } from "@/lib/constants";

export function ProduitsSection() {
	return (
		<section
			id="produits"
			className="py-17.5 bg-ivoire"
			aria-labelledby="produits-heading"
		>
			<div className="max-w-7xl mx-auto px-5 md:px-10">
				<SectionHeading
					eyebrow="NOS PRODUITS PHARES"
					heading={
						<>
							L&apos;un gère vos échanges.{" "}
							<span className="text-coral">
								L&apos;autre accélère l&apos;exécution.
							</span>
						</>
					}
					lead="Deux produits conçus pour réduire la charge opérationnelle des équipes et des dirigeants."
				/>

				{/* Duo */}
				<div
					className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] border-t-2 border-b-2 border-encre bg-encre"
					aria-label="Nos deux produits"
				>
					<div id="iko">
						<ProduitCard product={PRODUCTS[0]} direction="left" />
					</div>
					{/* Divider */}
					<div className="hidden md:block bg-encre w-px" aria-hidden="true" />
					<ProduitCard product={PRODUCTS[1]} direction="right" />
				</div>
			</div>
		</section>
	);
}
