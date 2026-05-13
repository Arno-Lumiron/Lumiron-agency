'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode, type HTMLAttributes } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { cn } from '@/lib/utils';

type Direction = 'up' | 'left' | 'right' | 'none';

interface AnimatedRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  threshold?: number;
}

const INITIAL: Record<Direction, { opacity: number; x?: number; y?: number }> = {
  up:    { opacity: 0, y: 16 },
  left:  { opacity: 0, x: -22 },
  right: { opacity: 0, x: 22 },
  none:  { opacity: 0 },
};

export function AnimatedReveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  threshold = 0.08,
  ...rest
}: AnimatedRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px', amount: threshold });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={reduced ? { opacity: 1 } : INITIAL[direction]}
      animate={inView || reduced ? { opacity: 1, x: 0, y: 0 } : INITIAL[direction]}
      transition={{ duration: 0.8, ease: [0.22, 0.7, 0.2, 1], delay: delay / 1000 }}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </motion.div>
  );
}
