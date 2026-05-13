import { SectionHeading } from '@/components/shared/section-heading';
import { AnimatedStagger, StaggerChild } from '@/components/shared/animated-stagger';
import { TESTIMONIALS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function AvisSection() {
  return (
    <section id="avis" className="py-17.5" aria-labelledby="avis-heading">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeading
          eyebrow="Témoignages"
          heading={
            <>Ils ne reviendraient pas <span className="text-coral">en arrière.</span></>
          }
        />

        <AnimatedStagger
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-l border-encre"
          aria-label="Témoignages clients"
        >
          {TESTIMONIALS.map((t) => (
            <StaggerChild
              key={t.name}
              className={cn(
                'border-r border-b border-encre p-5 md:p-[18px_24px_20px] flex flex-col gap-4 justify-between min-h-68 bg-ivoire',
              )}
            >
              {/* Stars */}
              <span className="text-coral text-sm tracking-[3px]" aria-label="5 étoiles" role="img">
                ★★★★★
              </span>

              {/* Quote */}
              <blockquote className="m-0 text-[15px] font-normal leading-normal tracking-[-0.005em]">
                <span className="text-coral italic" aria-hidden="true">« </span>
                {t.quote}
                <span className="text-coral italic" aria-hidden="true"> »</span>
              </blockquote>

              {/* Author */}
              <div className="pt-3.5 border-t border-encre flex justify-between items-center text-xs tracking-[.04em]">
                <strong className="font-medium">{t.name}</strong>
                <small className="text-gris not-italic">{t.role}</small>
              </div>
            </StaggerChild>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
