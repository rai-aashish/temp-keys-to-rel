import React from 'react';

import { cn } from '@/lib';

const FieldDescription = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithRef<'p'>>(
  ({ className, ...props }, ref) => {
    return <p ref={ref} className={cn('text-sm font-medium opacity-60', className)} {...props} />;
  },
);

FieldDescription.displayName = 'FieldDescription__Component';

export { FieldDescription };
