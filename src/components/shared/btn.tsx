'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

const btnWrapperVariants = cva(
  [
    'inline-flex cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2',
  ],
  {
    variants: {
      variant: {
        outline: 'group',
        primary: 'group',
        coral: 'group',
        ghost: 'group',
      },
    },
    defaultVariants: { variant: 'outline' },
  }
);

const btnInnerVariants = cva(
  [
    'inline-flex items-center gap-2.5 px-5.5 py-3.5',
    'font-medium text-[13px] tracking-[.04em] uppercase',
    'border-[1.5px] font-sans',
    'transition-[transform,box-shadow,background,color] duration-150 ease-out',
  ],
  {
    variants: {
      variant: {
        outline: [
          'border-encre bg-transparent text-encre',
          'group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0_var(--coral)]',
        ],
        primary: [
          'border-encre bg-encre text-ivoire shadow-[3px_3px_0_var(--coral)]',
          'group-hover:shadow-[6px_6px_0_var(--coral)] group-hover:-translate-x-0.75 group-hover:-translate-y-0.75',
        ],
        coral: [
          'border-coral bg-coral text-white shadow-[3px_3px_0_var(--encre)]',
          'group-hover:shadow-[6px_6px_0_var(--encre)]',
        ],
        ghost: [
          'border-ivoire bg-ivoire text-encre',
          'group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0_var(--coral)]',
        ],
      },
    },
    defaultVariants: { variant: 'outline' },
  }
);

interface BtnProps extends VariantProps<typeof btnInnerVariants> {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export function Btn({ children, variant, href, onClick, className, type = 'button', ariaLabel }: BtnProps) {
  const wrapperCls = btnWrapperVariants({ variant });
  const innerCls = cn(btnInnerVariants({ variant }), className);

  if (href) {
    return (
      <a href={href} className={wrapperCls} aria-label={ariaLabel}>
        <span className={innerCls}>{children}</span>
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={wrapperCls} aria-label={ariaLabel}>
      <span className={innerCls}>{children}</span>
    </button>
  );
}
