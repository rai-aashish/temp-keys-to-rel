import { createTV, TV, VariantProps, cnBase as cn } from 'tailwind-variants';

const tv: TV = createTV({
  responsiveVariants: true,
  twMerge: true,
});

export type { VariantProps };
export { tv, cn };
