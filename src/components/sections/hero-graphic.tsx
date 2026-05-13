'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export function HeroGraphic() {
  const reduced = useReducedMotion();

  return (
    <div
      className="relative w-full aspect-square max-w-90 ml-auto mt-1.5"
      aria-hidden="true"
    >
      {/* Spinning dotted circle */}
      <motion.div
        className="absolute inset-[4%] rounded-full border-2 border-dashed border-encre opacity-60"
        animate={reduced ? {} : { rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      />

      {/* Dark square */}
      <div
        className="absolute bg-encre"
        style={{ width: '42%', aspectRatio: '1/1', top: '26%', left: '32%' }}
      />

      {/* Coral floating square */}
      <motion.div
        className="absolute bg-coral"
        style={{ width: '42%', aspectRatio: '1/1', top: '14%', left: '44%' }}
        animate={reduced ? {} : { x: [0, -5, 0], y: [0, -7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Horizontal line */}
      <motion.div
        className="absolute bg-coral h-[1.5px]"
        style={{ left: '-4%', right: '6%', top: '64%', transformOrigin: 'left center' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease: [0.7, 0, 0.2, 1], delay: 0.8 }}
      />

      {/* Pulsing dot */}
      <motion.div
        className="absolute size-4.5 rounded-full bg-encre"
        style={{ right: '6%', top: '60%' }}
        animate={reduced ? {} : { scale: [1, 1.25, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
