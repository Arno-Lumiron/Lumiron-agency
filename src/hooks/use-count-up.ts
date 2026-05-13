'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './use-reduced-motion';

interface UseCountUpOptions {
  target: number;
  duration?: number;
  decimals?: number;
  enabled?: boolean;
}

export function useCountUp({ target, duration = 1200, decimals = 0, enabled = true }: UseCountUpOptions) {
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;
    if (reduced) { setValue(target); return; }

    const start = performance.now();

    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(parseFloat((target * eased).toFixed(decimals)));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration, decimals, enabled, reduced]);

  return value;
}
