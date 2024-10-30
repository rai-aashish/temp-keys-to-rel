import React from 'react';

import { cn } from '@/lib';

const FieldError = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithRef<'p'>>(
  ({ className, ...props }, ref) => {
    return <p ref={ref} className={cn('text-destructive text-sm font-medium', className)} {...props} />;
  },
);

FieldError.displayName = 'FieldError__Component';

export { FieldError };
