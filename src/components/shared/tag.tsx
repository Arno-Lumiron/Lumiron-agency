import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const tagVariants = cva(
  'inline-block text-[11px] font-medium tracking-[.06em] uppercase',
  {
    variants: {
      variant: {
        black:  'bg-encre text-ivoire px-2.5 py-1.5',
        coral:  'bg-coral text-white px-2.5 py-1.5',
        outline: 'border border-[1.5px] border-encre text-encre px-2.5 py-1',
      },
    },
    defaultVariants: { variant: 'black' },
  }
);

interface TagProps extends VariantProps<typeof tagVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, variant, className }: TagProps) {
  return <span className={cn(tagVariants({ variant }), className)}>{children}</span>;
}
