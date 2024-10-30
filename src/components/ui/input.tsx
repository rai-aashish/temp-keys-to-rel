'use client';
import * as React from 'react';

import { cn } from '@/lib';
import { FieldDescription, FieldError, Label } from '@/components/ui';
import { useMergeRefs } from '@floating-ui/react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  classNames?: {
    wrapper?: string;
    input?: string;
  };
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, id, error, label, description, leftSection, rightSection, classNames, ...props },
    forwardedRef,
  ) => {
    const generatedId = React.useId();
    const ref = React.useRef<HTMLInputElement>(null);

    const mergedRef = useMergeRefs([ref, forwardedRef]);

    const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      ref.current?.focus();
    };

    return (
      <div className={cn([''], className)}>
        {label && (
          <Label htmlFor={id || generatedId} className="text-sm font-medium" requiredLabel={props.required}>
            {label}
          </Label>
        )}

        <div
          onClick={handleWrapperClick}
          className={cn([
            'flex items-center gap-x-2 duration-150',
            'px-3 py-[0.8438rem] rounded-[200px] hover:border-black/20',
            'border border-[#1E1E1E1F] has-[input:focus]:outline-1 has-[input:focus-visible]:ring-ring has-[input:focus-visible]:ring-1  has-[input:focus-visible]:ring-offset-1 has-[input:focus-visible]:outline-none',
            'has-[input:disabled]:cursor-not-allowed has-[input:disabled]:disabled:opacity-50',
            Boolean(error) && 'border-destructive',
            'ring-offset-background',
            classNames?.wrapper,
          ])}
        >
          {leftSection}
          <input
            type={type}
            className={cn(
              'border-none grow outline-none bg-transparent placeholder:text-muted-foreground',
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
