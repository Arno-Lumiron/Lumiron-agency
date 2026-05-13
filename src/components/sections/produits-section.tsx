import { SectionHeading } from '@/components/shared/section-heading';
import { AnimatedReveal } from '@/components/shared/animated-reveal';
import { Btn } from '@/components/shared/btn';
import { ProduitCard } from './produit-card';
import { PRODUCTS } from '@/lib/constants';

export function ProduitsSection() {
  return (
    <section id="produits" className="py-[70px] bg-ivoire" aria-labelledby="produits-heading">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <SectionHeading
          eyebrow="Nos produits phares"
          heading={
            <>
              L'un répond à <span className="text-coral">vos clients.</span> L'autre vous épaule <span className="text-coral">au quotidien.</span>
            </>
          }
          lead={
            <em>
              Que vous cherchiez à libérer votre équipe de la relation client ou à démultiplier votre temps de dirigeant, Lumiron a conçu un agent IA pour vous.
            </em>
          }
        />

        {/* Duo */}
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] border-t-2 border-b-2 border-encre bg-encre"
          aria-label="Nos deux produits"
        >
          <div id="iko"><ProduitCard product={PRODUCTS[1]} direction="left" /></div>
          {/* Divider */}
          <div className="hidden md:block bg-encre w-px" aria-hidden="true" />
          <ProduitCard product={PRODUCTS[0]} direction="right" />
        </div>

        {/* Extras bar */}
        <AnimatedReveal delay={200} className="mt-8 p-6 md:p-7 border border-[1.5px] border-encre bg-ivoire grid grid-cols-[auto_1fr_auto] gap-5 items-center">
          <span
            className="w-[34px] h-[34px] border border-[1.5px] border-encre flex items-center justify-center font-medium text-encre flex-shrink-0"
            aria-hidden="true"
          >
            ♥
          </span>
          <p className="text-[14px] leading-[1.4] m-0">
            <strong className="font-medium">Besoin d'autre chose&nbsp;?</strong>{' '}
            On développe aussi des extensions Chrome, des intégrations sur-mesure, des automatisations métier. Si ça vous fait gagner du temps, on peut le construire.
          </p>
          <Btn variant="outline" href="#contact" className="flex-shrink-0 text-[11px] hidden sm:inline-flex">
            En parler →
          </Btn>
        </AnimatedReveal>
      </div>
    </section>
  );
}
