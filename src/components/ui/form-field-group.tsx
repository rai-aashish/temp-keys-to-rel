import { cn } from '@/lib';
import React from 'react';

interface IFormFieldGroupProps extends React.ComponentPropsWithRef<'div'> {
  children?: React.ReactNode;
  number?: string;
  title?: string;
  description?: string;
  classNames?: {
    root?: string;
    title?: string;
    description?: string;
    number?: string;
  };
}

function FormFieldGroup({
  children,
  number,
  title,
  description,
  className,
  classNames,
  ...props
}: IFormFieldGroupProps) {
  const hasTitle = Boolean(title) || Boolean(number);
  return (
    <div className={cn(['', className, classNames?.root])} {...props}>
      {hasTitle && (
        <div
          className={cn([
            'mb-4 flex items-center gap-3 text-s3 text-[rgba(247,241,227,1)] md:text-s1',
            classNames?.title,
          ])}
        >
          {Boolean(number) && (
            <span
              className={cn([
                'inline-grid size-7.5 place-items-center rounded border-[rgba(99,97,97,0.06)] text-b2 font-extrabold md:text-b1',
                'rounded border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.06)]',
                'backdrop-blur-bg',
                classNames?.number,
              ])}
            >
              {number}
            </span>
          )}
          {title}
        </div>
      )}

      {Boolean(description) && (
        <p className={cn(['mb-8 text-[rgba(247,241,227,0.72)]', classNames?.description])}>{description}</p>
      )}

      {children}
    </div>
  );
}

export { FormFieldGroup };
