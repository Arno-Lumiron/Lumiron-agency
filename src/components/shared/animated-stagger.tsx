'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { cn } from '@/lib/utils';

interface AnimatedStaggerProps {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
  immediate?: boolean;
}

export function AnimatedStagger({ children, className, staggerMs = 70, immediate = false }: AnimatedStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollInView = useInView(ref, { once: true, margin: '0px 0px -12% 0px', amount: 0.08 });
  const inView = immediate || scrollInView;
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={inView || reduced ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerMs / 1000 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      variants={
        reduced
          ? {}
          : {
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 0.7, 0.2, 1] } },
            }
      }
    >
      {children}
    </motion.div>
  );
}
