import { classGroups } from '@/constants';
import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  const twMerge = extendTailwindMerge({
    extend: {
      classGroups,
    },
  });

  return twMerge(clsx(inputs));
}
