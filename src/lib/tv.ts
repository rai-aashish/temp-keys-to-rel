import { tv as tailwindVariants, TV, VariantProps, cnBase as cn } from 'tailwind-variants';
import tailwindConfig from '../../tailwind.config';

const tv: TV = (props) =>
  tailwindVariants(props, {
    twMerge: true,
    twMergeConfig: {
      extend: {
        classGroups: {
          // Ensures that the fontSize custom class group is merged correctly
          // Ref: https://github.com/dcastil/tailwind-merge/issues/97
          'font-size': [{ text: Object.keys(tailwindConfig.theme?.fontSize || []) }],
          'font-weight': [{ text: Object.keys(tailwindConfig.theme?.fontWeight || []) }],
        },
      },
    },
  });

export type { VariantProps };
export { tv, cn };
