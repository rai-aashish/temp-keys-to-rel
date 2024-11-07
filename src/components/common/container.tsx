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
        !fluid && [
          'px-sm-screen-gutter md:px-md-screen-gutter lg:px-lg-screen-gutter',
          // TODO: set max-width for container
          '',
        ],
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
