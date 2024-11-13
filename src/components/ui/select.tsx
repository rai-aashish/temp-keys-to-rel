'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

import { cn } from '@/lib';
import { Label } from '@/components/ui/label';
import { FieldError } from '@/components/ui/field-error';
import { FieldDescription } from '@/components/ui/field-description';
import { fancyHoverClassName } from '@/config/styles';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    fancyHover?: boolean;
  }
>(({ className, fancyHover, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'group border',
      'border-[rgba(208,198,176,0.2)]',
      'text-sm flex h-12 w-full items-center justify-between rounded-md bg-[#2B2A2A] p-3 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      'placeholder:text-muted-foreground',
      fancyHover ? fancyHoverClassName : 'hover:border-[rgba(208,198,176,0.5)]',

      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      onCloseAutoFocus={(e) => {
        e.preventDefault();
      }}
      ref={ref}
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        'text-white bg-glassmorphic',
        'border border-[rgba(208,198,176,0.2)]',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn('text-sm py-1.5 pl-8 pr-2 font-semibold', className)} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    textCenter?: boolean;
  }
>(({ className, children, textCenter, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'text-sm relative flex w-full cursor-default select-none items-center rounded-sm py-3 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      textCenter ? 'justify-center px-3 text-center' : 'pl-9 pr-3',
      'focus:bg-[rgba(255,255,255,0.13)]',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

interface ISelectField extends SelectPrimitive.SelectProps {
  label?: string;
  description?: string;
  error?: string;
  className?: string;
  classNames?: {
    label?: string;
    description?: string;
    error?: string;
  };
  options?: Array<string | { value: string; label: string }>;
  fancyHover?: boolean;
  optionsTextCenter?: boolean;
  placeholder?: string;
}

function SelectField({
  label,
  fancyHover,
  description,
  error,
  className,
  options,
  classNames,
  optionsTextCenter,
  placeholder,
  ...props
}: ISelectField) {
  return (
    <div className={cn([''], className)}>
      {label && (
        <Label className="mb-2" requiredLabel={props.required}>
          {label}
        </Label>
      )}

      <FieldDescription>{description}</FieldDescription>

      <Select {...props}>
        <SelectTrigger fancyHover={fancyHover} className="data-[placeholder]:text-muted-foreground">
          <SelectValue placeholder={placeholder ?? 'Select'} />
        </SelectTrigger>

        <SelectContent>
          {options?.map((option, index) => {
            const isObject = typeof option === 'object';
            const label = isObject ? option.label : option;
            const value = isObject ? option.value : option;
            return (
              <SelectItem key={index + value} value={value} textCenter={optionsTextCenter}>
                {label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      <FieldError>{error}</FieldError>
    </div>
  );
}
export {
  SelectField,
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
