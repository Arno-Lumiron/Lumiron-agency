import { Eyebrow } from './eyebrow';
import { AnimatedText } from './animated-text';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  heading: ReactNode;
  lead?: ReactNode;
  light?: boolean;
  className?: string;
  headingSize?: 'h2' | 'h3';
}

export function SectionHeading({
  eyebrow,
  heading,
  lead,
  light = false,
  className,
  headingSize = 'h2',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-end mb-16 md:mb-20',
        className
      )}
    >
      <div>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
      </div>
      <div>
        <AnimatedText
          as={headingSize}
          className={cn(
            'font-medium tracking-[-0.03em] leading-none m-0',
            headingSize === 'h2' ? 'text-[clamp(42px,5vw,64px)]' : 'text-[30px]',
            light && 'text-ivoire'
          )}
        >
          {heading}
        </AnimatedText>
        {lead && (
          <p className={cn('mt-4 text-[17px] leading-[1.55] max-w-[58ch]', light ? 'text-gris-light' : 'text-gris')}>
            {lead}
          </p>
        )}
      </div>
    </div>
  );
}
