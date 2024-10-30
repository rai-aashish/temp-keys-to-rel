import * as React from 'react';

import { Loader } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import { tv, VariantProps } from 'tailwind-variants';
import config from '../../../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';

const resolvedConfig = resolveConfig(config);

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
        destructive: 'bg-destructive text-destructive-foreground data-[disabled=false]:hover:bg-destructive/90',
      },
      size: {
        sm: {
          root: 'gap-2 rounded-md px-3 text-bu-s font-bold data-[has-left-icon=true]:pl-2 data-[has-right-icon=true]:pr-2',
          iconWrapper: 'size-7',
          icon: 'size-3.5',
        },
        md: {
          root: 'gap-2 rounded-[12.5rem] px-6 py-2 text-bu-m font-bold data-[has-left-icon=true]:pl-2 data-[has-right-icon=true]:pr-2',
          iconWrapper: 'size-8',
          icon: 'size-4',
        },
        lg: {
          root: 'text-bul-l gap-3 rounded-md px-8 font-bold data-[has-left-icon=true]:pl-2 data-[has-right-icon=true]:pr-2',
          iconWrapper: 'size-6',
          icon: 'size-3',
        },
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
  {
    responsiveVariants: true,
    twMergeConfig: {
      classGroups: {
        'font-size': [''],
      },
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
    leftIconWrapper?: string;
    leftIcon?: string;
    rightIconWrapper?: string;
    rightIcon?: string;
  };
  children?: React.ReactNode;
  unStyled?: boolean;
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
  unStyled,

  classNames,
  ref,
  ...props
}: { asLink?: boolean } & (ButtonProps | ButtonLinkProps)) {
  const Tag = (asLink ? Link : 'button') as React.ElementType;

  const { root, iconWrapper, icon } = buttonVariants({ variant, size });

  const isDisabled = disabled || loading;

  console.log(resolvedConfig);

  return (
    <Tag
      ref={ref}
      disabled={isDisabled}
      data-disabled={isDisabled}
      data-has-left-icon={Boolean(LeftIcon)}
      data-has-right-icon={Boolean(RightIcon)}
      tabIndex={isDisabled ? -1 : 0}
      className={root({ className })}
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

export type { ButtonProps, ButtonLinkProps };
export { Button, ButtonLink };
