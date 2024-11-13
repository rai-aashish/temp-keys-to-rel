'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';

import { cn } from '@/lib';
import { Label } from '@/components/ui/label';
import { FieldDescription } from '@/components/ui/field-description';
import { FieldError } from '@/components/ui/field-error';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'peer',
        'aspect-square size-4 rounded-full border text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        'border-[#F7F1E3B8] hover:border-white',
        'data-[state=checked]:border-[#F7F1E3] data-[state=checked]:bg-[#F7F1E3]',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="size-2.5 fill-[#FFBC2A] text-[#FFBC2A]" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

interface IRadioGroupFieldProps extends RadioGroupPrimitive.RadioGroupProps {
  className?: string;
  options?: Array<string | { value: string; label: string }>;
  label?: string;
  description?: string;
  error?: string;
  classNames?: {
    wrapper?: string;
    label?: string;
    description?: string;
    error?: string;
  };
}
export function RadioGroupField({
  className,
  options,
  label,
  description,
  error,
  classNames,
  ...props
}: IRadioGroupFieldProps) {
  return (
    <div className={cn(['', className])}>
      {label && (
        <Label as="div" className="mb-2" requiredLabel={props.required}>
          {label}
        </Label>
      )}

      {description && <FieldDescription className="mb-2">{description}</FieldDescription>}

      <RadioGroup {...props}>
        <div className={cn(['mt-3 space-y-1', classNames?.wrapper])}>
          {options?.map((option, index) => {
            const isObject = typeof option === 'object';
            const label = isObject ? option.label : option;
            const value = isObject ? option.value : option;
            return (
              <div key={value + index} className="flex items-center gap-3">
                <RadioGroupItem value={value} id={value + index} />
                <Label
                  htmlFor={value + index}
                  className="block text-b1 text-[#F7F1E3B8] peer-data-[state=checked]:font-semibold peer-data-[state=checked]:text-[#F7F1E3]"
                >
                  {label}
                </Label>
              </div>
            );
          })}
        </div>
      </RadioGroup>

      {error && <FieldError className="mt-1">{error}</FieldError>}
    </div>
  );
}
export { RadioGroup, RadioGroupItem };
