import { AnimatedReveal } from '@/components/shared/animated-reveal';

export function CtaSection() {
  return (
    <section id="contact" className="pb-[140px] pt-10" aria-labelledby="cta-heading">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <AnimatedReveal>
          <div className="relative bg-encre text-ivoire p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 overflow-hidden">

            {/* Background decorative marks */}
            <svg
              className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none select-none"
              viewBox="0 0 100 100"
              width="200"
              height="200"
              fill="none"
              stroke="rgba(245,241,232,.06)"
              strokeWidth="14"
              strokeLinejoin="miter"
              aria-hidden="true"
            >
              <path d="M20 18 L60 50 L20 82" />
              <path d="M50 18 L90 50 L50 82" />
            </svg>

            {/* Content */}
            <div className="relative z-10 max-w-[60ch]">
              <h2
                id="cta-heading"
                className="text-[clamp(30px,4vw,42px)] font-semibold tracking-[-0.02em] leading-[1.1] text-ivoire m-0 mb-3.5"
              >
                Prêt à gagner du temps&nbsp;?
              </h2>
              <p className="text-[16px] text-gris-light m-0 leading-[1.5]">
                30 minutes. Une proposition concrète sous 48h.
              </p>
            </div>

            {/* CTA button */}
            <a
              href="#"
              className="relative z-10 flex-shrink-0 inline-flex items-center justify-center bg-ivoire text-encre px-9 py-[18px] font-semibold text-[15px] tracking-[.01em] transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--coral)]"
            >
              Réservez une démo
            </a>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
