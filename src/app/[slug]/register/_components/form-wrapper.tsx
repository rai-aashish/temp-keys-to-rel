import Container from '@/components/common/container';
import { ButtonLink, buttonVariants } from '@/components/ui';
import { cn } from '@/lib';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

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
      className={cn(['mt-[7.625rem] rounded-2xl border border-[#323232] p-10 bg-glassmorphic', className])}
      {...restProps}
    >
      <div className="relative col-span-4 border-r-2 border-dashed border-[rgba(255,255,255,0.2)]">
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

        <div className={cn(['relative mt-9', 'text-[3rem] font-bold leading-[-0.02em] text-shiny', 'leading-[1.1]'])}>
          Reserve
          <br /> your seat
          <br /> and claim
          <br /> your Free Gift!
        </div>
      </div>

      <div className="col-span-7 px-6 pr-10">{children}</div>
    </Container>
  );
}

export { FormWrapper };
