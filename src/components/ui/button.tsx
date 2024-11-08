import * as React from 'react';

import { Loader } from 'lucide-react';
import { cn, tv, VariantProps } from '@/lib';
import Link, { LinkProps } from 'next/link';
import { classGroups } from '@/constants';

const buttonVariants = tv(
  {
    slots: {
      root: [
        'relative inline-flex cursor-pointer items-center justify-center',
        'overflow-hidden align-middle transition-all duration-200 data-[disabled=false]:active:scale-90',
        'whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1',
        // disabled state,
        'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
      ],
      iconWrapper: 'inline-grid shrink-0 place-items-center overflow-hidden rounded-full',
      icon: 'size-4',
    },
    variants: {
      variant: {
        menu: {
          root: 'place-items-center justify-center rounded-full bg-transparent hover:bg-black/10',
          iconWrapper: '',
          icon: 'size-5',
        },
        unstyled: {
          root: '',
          iconWrapper: '',
          icon: '',
        },
        primary: {
          root: 'bg-primary-accent text-primary-accent-foreground data-[disabled=false]:hover:bg-[#FFBD30]',
          iconWrapper: 'bg-[#1E1E1E] text-[#FFFFFF]',
          icon: '',
        },
        secondary: {
          root: 'bg-[#FFFFFF] text-[#1E1E1E] data-[disabled=false]:hover:bg-[#FFFFFF]',
          iconWrapper: 'bg-[#FFBD28] text-[#1E1E1E]',
          icon: '',
        },
        outlined: {
          root: 'border border-[#F7F1E31F] bg-[#F7F1E305] text-[#F7F1E3]',
          iconWrapper: 'bg-[#F7F1E3] text-[#131313]',
        },
        'outlined-secondary': {
          root: 'border border-[#F7F1E31F] bg-[#F7F1E31A] text-[#F7F1E3]',
          iconWrapper: 'bg-[#F7F1E3] text-[#131313]',
        },
        destructive: 'bg-destructive text-destructive-foreground data-[disabled=false]:hover:bg-destructive/90',
      },
      iconVariant: {
        unstyled: {
          iconWrapper: '',
        },
        primary: {
          iconWrapper: 'bg-[#FFBD28] text-[#1E1E1E]',
        },
        secondary: {
          iconWrapper: 'bg-[#F7F1E31A] text-[#F7F1E3]',
        },
      },
      size: {
        sm: {
          root: 'gap-2 rounded-[12.5rem] px-4 py-2 text-bu-s font-bold data-[has-left-icon=true]:pl-4 data-[has-right-icon=true]:pr-2',
          iconWrapper: 'size-5.5',
          icon: 'size-3.5',
        },
        md: {
          root: 'gap-2 rounded-[12.5rem] py-2 text-bu-m font-bold data-[has-left-icon=false]:pl-6 data-[has-left-icon=true]:pl-2 data-[has-right-icon=false]:pr-6 data-[has-right-icon=true]:pr-2',
          iconWrapper: 'size-8',
          icon: 'size-4',
        },
        lg: {
          root: 'gap-3 rounded-[12.5rem] px-8 py-[1.0938rem] text-bu-l font-bold data-[has-icon]:py-2 data-[has-left-icon=false]:pl-6 data-[has-right-icon=true]:pr-2',
          iconWrapper: 'size-10',
          icon: 'size-6',
        },

        'menu-lg': {
          root: 'size-12 rounded-full',
        },

        'menu-md': {
          root: 'size-10 rounded-full',
        },
        'menu-sm': {
          root: 'size-8 rounded-full',
        },
        none: {
          root: '',
          iconWrapper: '',
          icon: '',
        },
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
  {
    twMerge: true,
    twMergeConfig: {
      classGroups,
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type CommonProps = {
  className?: string;
  loading?: boolean;
  leftIcon?: React.ComponentType<React.ComponentProps<'svg'>>;
  rightIcon?: React.ComponentType<React.ComponentProps<'svg'>>;
  classNames?: {
    root?: string;
    leftIconWrapper?: string;
    leftIcon?: string;
    rightIconWrapper?: string;
    rightIcon?: string;
  };
  children?: React.ReactNode;
  disabled?: boolean;
} & ButtonVariantProps;

type ButtonProps = React.ComponentPropsWithRef<'button'> & Omit<CommonProps, 'asLink'>;

type ButtonLinkProps = Omit<LinkProps<'a'>, 'children'> & React.ComponentPropsWithRef<'a'> & CommonProps;

/**
 * info: Button Component for rendering custom button
 * **/
function Button({ ref, ...props }: ButtonProps) {
  return <ConditionalButtonComponent ref={ref} {...props} />;
}

/**
 * info: ButtonLink Component for rendering custom Link Component
 * **/
function ButtonLink({ ref, ...props }: ButtonLinkProps) {
  return <ConditionalButtonComponent asLink ref={ref} {...props} />;
}

/**
 * info: ConditionalButtonComponent  for rendering custom Link Component or Button Component based on asLink prop
 * **/
function ConditionalButtonComponent({
  asLink,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  disabled = false,
  loading = false,
  children,
  className,
  variant,
  size,
  classNames,
  iconVariant,
  ref,
  ...props
}: { asLink?: boolean } & (ButtonProps | ButtonLinkProps)) {
  const Tag = (asLink ? Link : 'button') as React.ElementType;

  const { root, iconWrapper, icon } = buttonVariants({ variant, iconVariant, size });

  const isDisabled = disabled || loading;
  const hasLeftIcon = Boolean(LeftIcon);
  const hasRightIcon = Boolean(RightIcon);
  const hasIcon = hasLeftIcon || hasRightIcon;
  return (
    <Tag
      ref={ref}
      disabled={isDisabled}
      data-disabled={isDisabled}
      data-has-left-icon={hasLeftIcon}
      data-has-right-icon={hasRightIcon}
      data-has-icon={hasIcon}
      tabIndex={isDisabled ? -1 : 0}
      className={root({ className: cn(className, classNames?.root) })}
      {...props}
    >
      {LeftIcon && (
        <span className={iconWrapper({ className: classNames?.leftIconWrapper })}>
          <LeftIcon className={icon({ className: classNames?.leftIcon })} />
        </span>
      )}
      {children}

      {RightIcon && (
        <span className={iconWrapper({ className: classNames?.rightIconWrapper })}>
          <RightIcon className={icon({ className: classNames?.rightIcon })} />
        </span>
      )}

      {/* loading */}
      {loading && (
        <span className="absolute inset-0 inline-grid h-full w-full place-items-center bg-[inherit]">
          <Loader className="size-6 animate-spin" />
        </span>
      )}
    </Tag>
  );
}

ConditionalButtonComponent.displayName = 'ConditionalButtonComponent__Component';
ButtonLink.displayName = 'ButtonLink__Component';
Button.displayName = 'Button__Component';

export type { ButtonVariantProps, ButtonProps, ButtonLinkProps };
export { buttonVariants, Button, ButtonLink };
