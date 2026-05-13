'use client';

import { motion, useInView } from 'framer-motion';
import { isValidElement, useRef, type ReactNode, type HTMLAttributes } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { cn } from '@/lib/utils';

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface AnimatedTextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: Tag;
  className?: string;
  delayPerChar?: number;
}

type Token =
  | { type: 'word'; chars: string[] }
  | { type: 'space' }
  | { type: 'styled-word'; chars: string[]; className: string };

function tokenize(node: ReactNode): Token[] {
  const tokens: Token[] = [];

  const walk = (child: ReactNode) => {
    if (typeof child === 'string') {
      const parts = child.split(/(\s+)/);
      parts.forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) { tokens.push({ type: 'space' }); return; }
        tokens.push({ type: 'word', chars: [...part] });
      });
    } else if (isValidElement(child)) {
      // Inline span with text children — animate chars with the element's className
      const el = child as React.ReactElement<{ className?: string; children?: ReactNode }>;
      const spanClass = el.props.className ?? '';
      const innerText = el.props.children;
      if (typeof innerText === 'string') {
        const parts = innerText.split(/(\s+)/);
        parts.forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { tokens.push({ type: 'space' }); return; }
          tokens.push({ type: 'styled-word', chars: [...part], className: spanClass });
        });
      } else {
        // Nested children: recurse with className applied per word
        const inner = tokenize(innerText);
        inner.forEach((t) => {
          if (t.type === 'word') tokens.push({ type: 'styled-word', chars: t.chars, className: spanClass });
          else tokens.push(t);
        });
      }
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

  const renderWord = (chars: string[], wordClass: string, key: number) => (
    <span key={key} className={wordClass} style={{ display: 'inline-block', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
      {chars.map((ch, j) => {
        const idx = charIndex++;
        return (
          <motion.span
            key={j}
            style={{ display: 'inline-block', verticalAlign: 'top' }}
            initial={reduced ? {} : { opacity: 0, y: '0.55em', filter: 'blur(6px)' }}
            animate={inView || reduced ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{
              duration: 0.9,
              ease: [0.2, 0.7, 0.15, 1],
              delay: (idx * delayPerChar) / 1000,
            }}
          >
            {ch}
          </motion.span>
        );
      })}
    </span>
  );

  return (
    <Tag ref={ref} className={cn(className)} {...rest}>
      {tokens.map((token, i) => {
        if (token.type === 'space') return ' ';
        if (token.type === 'word') return renderWord(token.chars, '', i);
        return renderWord(token.chars, token.className, i);
      })}
    </Tag>
  );
}
