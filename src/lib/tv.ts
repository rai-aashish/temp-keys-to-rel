import { tv as baseTV, TV, VariantProps } from 'tailwind-variants';
import { classGroups } from '@/constants';

// ? NOTE: this is a temporary solution to get tailwind class groups
// ?        since tailwind-variants is throwing error when using dynamic class groups
// ? (use script to generate class groups found in project root)

const tv: TV = (props) =>
  baseTV(props, {
    twMerge: true,
    twMergeConfig: {
      classGroups,
    },
  });

export type { VariantProps };
export { tv };
