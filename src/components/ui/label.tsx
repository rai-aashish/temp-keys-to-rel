import { cn } from '@/lib';
import React from 'react';

const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithRef<'label'> & {
    requiredLabel?: boolean;
    as?: React.ElementType;
  }
>(({ className, children, as = 'label', requiredLabel, ...props }, ref) => {
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={cn([
        'inline-block text-b1 peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        requiredLabel && ["after:inline-block after:content-['*']"],
        className,
      ])}
      {...props}
    >
      {children}
    </Tag>
  );
});

Label.displayName = 'Label';

export { Label };
