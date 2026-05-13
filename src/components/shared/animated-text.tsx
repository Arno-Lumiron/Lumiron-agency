'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode, type HTMLAttributes } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { cn } from '@/lib/utils';

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface AnimatedTextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: Tag;
  className?: string;
  delayPerChar?: number;
}

function tokenize(node: ReactNode): Array<{ type: 'char' | 'space' | 'element'; content: ReactNode }> {
  const tokens: Array<{ type: 'char' | 'space' | 'element'; content: ReactNode }> = [];

  const walk = (child: ReactNode) => {
    if (typeof child === 'string') {
      const parts = child.split(/(\s+)/);
      parts.forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) { tokens.push({ type: 'space', content: part }); return; }
        [...part].forEach((ch) => tokens.push({ type: 'char', content: ch }));
      });
    } else {
      tokens.push({ type: 'element', content: child });
    }
  };

  if (Array.isArray(node)) {
    (node as ReactNode[]).forEach(walk);
  } else {
    walk(node);
  }
  return tokens;
}

export function AnimatedText({ children, as: TagName = 'h2', className, delayPerChar = 28, ...rest }: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px', amount: 0.1 });
  const reduced = useReducedMotion();

  const tokens = tokenize(children);
  let charIndex = 0;

  const Tag = TagName as React.ElementType;

  return (
    <Tag ref={ref} className={cn(className)} {...rest}>
      {tokens.map((token, i) => {
        if (token.type === 'space') return <span key={i}>&nbsp;</span>;
        if (token.type === 'element') return <span key={i}>{token.content}</span>;

        const idx = charIndex++;
        return (
          <motion.span
            key={i}
            style={{ display: 'inline-block' }}
            initial={reduced ? {} : { opacity: 0, y: '0.55em', filter: 'blur(6px)' }}
            animate={inView || reduced ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{
              duration: 0.9,
              ease: [0.2, 0.7, 0.15, 1],
              delay: (idx * delayPerChar) / 1000,
            }}
          >
            {token.content}
          </motion.span>
        );
      })}
    </Tag>
  );
}
