import { SectionHeading } from '@/components/shared/section-heading';
import { AnimatedReveal } from '@/components/shared/animated-reveal';
import { Btn } from '@/components/shared/btn';
import { SECTEURS } from '@/lib/constants';
import {
  UtensilsCrossed, Hotel, Stethoscope, ShoppingBag, Building2,
  Briefcase, GraduationCap, Truck, MapPin, Scale, CreditCard, ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ICONS = [
  UtensilsCrossed, Hotel, Stethoscope, ShoppingBag, Building2,
  Briefcase, GraduationCap, Truck, MapPin, Scale, CreditCard, ArrowRight,
];

export function SecteursSection() {
  return (
    <section id="secteurs" className="py-[70px]" aria-labelledby="secteurs-heading">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <SectionHeading
          eyebrow="Secteurs"
          heading={
            <>Lumiron s'adapte à <span className="text-coral">vous.</span></>
          }
          lead="Chaque métier a ses codes. Nos solutions s'adaptent au vôtre — pas l'inverse."
        />

        <div
          className="grid grid-cols-2 md:grid-cols-4 border-t border-encre"
          role="list"
          aria-label="Secteurs couverts"
        >
          {SECTEURS.map((item, i) => {
            const Icon = ICONS[i];
            const isCta = 'cta' in item && item.cta;
            const delay = i * 60;

            return (
              <AnimatedReveal
                key={item.sector}
                delay={delay}
                className={cn(
                  'border-r border-b border-encre p-4 md:p-8 flex flex-col gap-4 justify-between min-h-[200px] transition-colors duration-200',
                  !isCta && 'hover:bg-ivoire-soft group',
                  isCta && 'bg-encre text-ivoire',
                  // remove right border on last of each row
                  'md:[&:nth-child(4n)]:border-r-0',
                  '[&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(4n)]:border-r-0',
                )}
                role="listitem"
              >
                {/* Top row: icon + sector label */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-3">
                  <span
                    className={cn(
                      'w-10 h-10 inline-flex items-center justify-center transition-colors duration-200',
                      isCta ? 'text-coral' : 'text-encre group-hover:text-coral',
                    )}
                    aria-hidden="true"
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </span>
                  <span
                    className={cn(
                      'text-[11px] tracking-[.16em] font-medium uppercase',
                      isCta ? 'text-gris-light' : 'text-gris',
                    )}
                  >
                    {item.sector}
                  </span>
                </div>

                {/* Name */}
                <div
                  className={cn(
                    'text-[20px] md:text-[22px] font-medium tracking-[-0.015em] leading-[1.05]',
                    isCta ? 'text-ivoire' : 'text-encre',
                  )}
                >
                  {item.name}
                  {'highlight' in item && item.highlight && (
                    <em className="text-coral not-italic font-normal"> {item.highlight}</em>
                  )}
                  {'nameEnd' in item && item.nameEnd && <span>{item.nameEnd}</span>}
                </div>

                {isCta && (
                  <Btn variant="coral" href="#contact" className="self-start text-[11px] px-3 py-1.5 md:px-6 md:py-3">
                    On s'adapte →
                  </Btn>
                )}
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
