import { cn } from '@/lib/utils';

interface EyebrowProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export function Eyebrow({ children, light, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-[11px] font-medium tracking-[.18em] uppercase',
        light ? 'text-gris-light' : 'text-encre',
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
      {children}
    </span>
  );
}
