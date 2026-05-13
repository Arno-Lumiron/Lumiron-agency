'use client';

import { type ReactNode, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface AnimatedTextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: Tag;
  className?: string;
  delayPerChar?: number;
}

// Rendu statique pur — l'animation wave-reveal est gérée par le script vanilla
// dans layout.tsx, exactement comme dans le HTML sobre de référence.
export function AnimatedText({ children, as: TagName = 'h2', className, delayPerChar: _delayPerChar, ...rest }: AnimatedTextProps) {
  const Tag = TagName as React.ElementType;
  return (
    <Tag className={cn('wave-reveal', className)} {...rest}>
      {children}
    </Tag>
  );
}
