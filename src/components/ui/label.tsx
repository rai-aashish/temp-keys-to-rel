import { cn } from '@/lib';
import React from 'react';

const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithRef<'label'> & {
    requiredLabel?: boolean;
  }
>(({ className, children, requiredLabel, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn([
        'text-sm mb-1 inline-block font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        requiredLabel && ["after:inline-block after:content-['*']"],
        className,
      ])}
      {...props}
    >
      {children}
    </label>
  );
});

Label.displayName = 'Label';

export { Label };
