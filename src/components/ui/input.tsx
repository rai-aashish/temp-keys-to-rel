'use client';
import * as React from 'react';

import { cn } from '@/lib';
import { useMergeRefs } from '@floating-ui/react';
import { FieldDescription, FieldError, Label } from '@/components/ui';
import { fancyHoverClassName } from '@/config/styles';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  rounded?: boolean;
  fancyHover?: boolean;
  classNames?: {
    wrapper?: string;
    input?: string;
  };
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      id,
      rounded,
      fancyHover,
      error,
      label,
      description,
      leftSection,
      rightSection,
      classNames,
      ...props
    },
    forwardedRef,
  ) => {
    const generatedId = React.useId();
    const ref = React.useRef<HTMLInputElement>(null);

    const mergedRef = useMergeRefs([ref, forwardedRef]);

    const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      ref.current?.click();
    };

    return (
      <div className={cn([''], className)}>
        {label && (
          <Label
            htmlFor={id || generatedId}
            className="text-sm mb-2 inline-block font-medium"
            requiredLabel={props.required}
          >
            {label}
          </Label>
        )}

        <div
          onClick={handleWrapperClick}
          className={cn([
            'flex items-center gap-x-2 duration-150',
            'p-3',
            'bg-[#2B2A2A]',
            'border',
            // 'border-[#1E1E1E1F]',
            'border-[rgba(208,198,176,0.2)]',

            'has-[input:focus-visible]:outline-none',
            // 'has-[input:focus]:outline-1 has-[input:focus-visible]:ring-1 has-[input:focus-visible]:ring-ring has-[input:focus-visible]:ring-offset-1',
            'has-[input:disabled]:cursor-not-allowed has-[input:disabled]:disabled:opacity-50',
            Boolean(error) && 'border-destructive',
            'ring-offset-background',
            rounded ? 'rounded-[12.5rem]' : 'rounded-[0.5rem]',
            // hover state
            fancyHover ? fancyHoverClassName : 'hover:border-[rgba(208,198,176,0.5)]',
            classNames?.wrapper,
          ])}
        >
          {leftSection}
          <input
            type={type}
            className={cn(
              'h-full w-full grow border-none bg-transparent outline-none placeholder:text-muted-foreground',
              classNames?.input,
            )}
            ref={mergedRef}
            id={id || generatedId}
            {...props}
          />
          {rightSection}
        </div>
        {description && <FieldDescription>{description}</FieldDescription>}

        {error && <FieldError>{error}</FieldError>}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
