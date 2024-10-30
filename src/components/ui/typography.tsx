import { cn } from '@/lib';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';

/**
 * This hook is used to resolve tailwind config
 */

type THeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TShinyHeading = 'sh1' | 'sh2' | 'sh3';

interface IHeadingProps extends React.ComponentPropsWithRef<THeading> {
  as: THeading;
  styleAs?: THeading | TShinyHeading;
  asChild?: boolean;
}

const Heading = ({ children, asChild, styleAs, as, className, ref, ...props }: IHeadingProps) => {
  const style = styleAs || as;

  const Element = React.createElement(
    asChild ? Slot : as,
    {
      ...props,
      className: cn([
        [
          style === 'sh1' && 'text-sh1',
          style === 'sh2' && 'text-sh2',
          style === 'sh3' && 'text-sh3',
          //   TODO: add shiny class for shiny headings
          style === 'h1' && 'text-h1',
          style === 'h2' && 'text-h2',
          style === 'h3' && 'md:text-h4 lg:text-h3',
          style === 'h4' && 'text-h4',
          style === 'h5' && 'text-h5',
          style === 'h6' && 'text-h6',
        ],
        className,
      ]),
    },
    children,
  );
  return Element;
};

interface IParagraphProps extends React.ComponentPropsWithRef<'p'> {
  as?: React.ElementType;
  asChild?: boolean;
  styleAs?: 'b1' | 'b1-b' | 'b2' | 'b2-b' | 's1' | 's2' | 's3' | 'c1' | 'c1-b' | 'c2' | 'c2-b';
}

const Paragraph = ({ children, as = 'p', asChild, styleAs = 'b1', className, ref, ...props }: IParagraphProps) => {
  const Element = React.createElement(
    asChild ? Slot : as,
    {
      ...props,
      className: cn([
        '',
        [
          styleAs === 'b1' && 'text-b1',
          styleAs === 'b1-b' && 'text-b1-b',
          styleAs === 'b2' && 'text-b2',
          styleAs === 'b2-b' && 'text-b2-b',
          styleAs === 's1' && 'text-s1',
          styleAs === 's2' && 'text-s2',
          styleAs === 's3' && 'text-s3',
          styleAs === 'c1' && 'text-c1',
          styleAs === 'c1-b' && 'text-c1-b',
          styleAs === 'c2' && 'text-c2',
          styleAs === 'c2-b' && 'text-c2-b',
        ],
        className,
      ]),
    },
    children,
  );
  return Element;
};

const Typography = Object.assign(Paragraph, { Paragraph, Heading });

export { Typography };
