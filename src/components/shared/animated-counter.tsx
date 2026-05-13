'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCountUp } from '@/hooks/use-count-up';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1200,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px', amount: 0.1 });
  const count = useCountUp({ target: value, duration, decimals, enabled: inView });

  const display = decimals > 0
    ? count.toFixed(decimals).replace('.', ',')
    : Math.round(count).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
