import React from 'react';
import { cn } from '@/lib';
import { tv, VariantProps } from 'tailwind-variants';

const badgeVariants = tv({
  base: 'inline-block shrink-0 rounded-[12.5rem] font-bold',
  variants: {
    variant: {
      primary: 'bg-primary-accent text-primary-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      destructive: 'bg-destructive text-destructive-foreground',
      outlined: 'border border-[currentColor]',
    },
    size: {
      sm: 'px-2 py-1.5 text-c2',
      md: 'px-3 py-2 text-c1',
      lg: 'px-3.5 py-2.5 text-b2',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type BadgeVariants = VariantProps<typeof badgeVariants>;

interface IBadgeProps extends BadgeVariants {
  className?: string;
  children: React.ReactNode;
}

function Badge({ className, variant, size, children, ...props }: IBadgeProps) {
  return (
    <span className={cn([badgeVariants({ variant, size, className })])} {...props}>
      {children}
    </span>
  );
}

export { Badge };
