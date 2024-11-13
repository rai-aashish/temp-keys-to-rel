import React from 'react';

import { cn } from '@/lib';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { buttonVariants } from '@/components/ui';
import Container from '@/components/common/container';

interface IFormWrapperProps extends React.ComponentPropsWithRef<'div'> {
  className?: string;
  children?: React.ReactNode;
}

function FormWrapper(props: IFormWrapperProps) {
  const { className, children, ...restProps } = props;
  const { root } = buttonVariants({ variant: 'glassmorphic', size: 'none' });
  return (
    <Container
      gridLayout
      className={cn([
        'mt-[7.625rem] rounded-2xl border border-[#323232] bg-glassmorphic',
        'gap-y-10 p-4 md:px-10 md:py-6 lg:px-10 lg:py-10',
        className,
      ])}
      {...restProps}
    >
      <div
        className={cn([
          'relative border-dashed border-[rgba(255,255,255,0.2)]',
          'border-b lg:border-b-0 lg:border-r-2',
          'pb-10 lg:pb-0 lg:pr-6',
          'col-span-full',
          'lg:col-span-4',
        ])}
      >
        <div>
          <Link href="#" className="inline-flex items-center gap-2 text-b1 font-medium">
            <span
              className={cn([
                'inline-grid size-8 place-items-center rounded-full',
                root({ variant: 'glassmorphic', size: 'none' }),
              ])}
            >
              <ArrowLeft className="size-4" />
            </span>
            Go back
          </Link>
        </div>

        <div
          className={cn([
            'relative mt-6 md:mt-4 lg:mt-9',
            'text-[shiny]',
            'text-h4 md:text-h1',
            'font-bold lg:text-[3rem] lg:leading-[-0.02em]',
            'lg:leading-[1.1]',
          ])}
        >
          Reserve <br />
          your seat
          <br className="hidden md:inline" /> and claim
          <br className="hidden lg:inline" /> your Free Gift!
        </div>
      </div>

      <div className="col-span-full lg:col-span-7 lg:px-6 lg:pr-10">{children}</div>
    </Container>
  );
}

export { FormWrapper };
