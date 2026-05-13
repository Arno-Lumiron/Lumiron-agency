'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

const btnVariants = cva(
  [
    'inline-flex items-center gap-2.5 px-5.5 py-3.5',
    'font-medium text-[13px] tracking-[.04em] uppercase',
    'border-[1.5px] cursor-pointer font-sans',
    'transition-[transform,box-shadow,background,color] duration-150 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2',
  ],
  {
    variants: {
      variant: {
        outline: [
          'border-encre bg-transparent text-encre',
          'hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--coral)]',
        ],
        primary: [
          'border-encre bg-encre text-ivoire shadow-[3px_3px_0_var(--coral)]',
          'hover:shadow-[6px_6px_0_var(--coral)] hover:-translate-x-0.75 hover:-translate-y-0.75',
        ],
        coral: [
          'border-coral bg-coral text-white shadow-[3px_3px_0_var(--encre)]',
          'hover:shadow-[6px_6px_0_var(--encre)]',
        ],
        ghost: [
          'border-ivoire bg-ivoire text-encre',
          'hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--coral)]',
        ],
      },
    },
    defaultVariants: { variant: 'outline' },
  }
);

interface BtnProps extends VariantProps<typeof btnVariants> {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export function Btn({ children, variant, href, onClick, className, type = 'button', ariaLabel }: BtnProps) {
  const cls = cn(btnVariants({ variant }), className);
  if (href) {
    return <a href={href} className={cls} aria-label={ariaLabel}>{children}</a>;
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
