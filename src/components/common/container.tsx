import React from 'react';

import { cn } from '@/lib';

interface IContainerProps extends React.ComponentPropsWithRef<'div'> {
  gridLayout?: boolean;
  fluid?: boolean;
  as?: React.ElementType;
}

const Container = ({ fluid, as = 'div', gridLayout, children, className, ...props }: IContainerProps) => {
  const Tag = as;
  return (
    <Tag
      className={cn([
        'mx-auto',
        !fluid && 'px-5 md:px-[1.875rem] lg:px-[3.75rem]',
        gridLayout && 'grid grid-cols-4 gap-x-5 md:grid-cols-8 lg:grid-cols-12',
        className,
      ])}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Container;
