import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import type { Color } from '@/types/Color';
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/react/20/solid';
import { twMerge } from 'tailwind-merge';
import { ButtonIcon } from '@/types/ButtonIcon';
import { ButtonSize } from '@/types/ButtonSize';
import { ButtonVariant } from '@/types/ButtonVariant';
import Link from 'next/link';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  color?: Color;
  icon?: ButtonIcon;
  variant?: ButtonVariant;
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  size?: ButtonSize;
  color?: Color;
  icon?: ButtonIcon;
  variant?: ButtonVariant;
};

const classes =
  'inline-flex items-center justify-center rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

// TODO: May want to consider using this library to manage the variants
// https://cva.style/docs/getting-started/variants
const variantClasses: { [V in ButtonVariant]: string } = {
  outline: 'ring-2 ring-inset font-semibold',
  solid: 'font-medium',
};

const sizeClasses: { [S in ButtonSize]: string } = {
  small: 'gap-x-1.5 px-3 py-1 text-sm ',
  medium: 'gap-x-1.5 px-3 py-1.5 text-sm ',
  large: 'gap-x-2 px-3.5 py-2 text-base',
};

const colorClasses: { [V in ButtonVariant]: { [C in Color]: string } } = {
  outline: {
    green: 'text-grass ring-grass bg-white hover:bg-gray-200',
    blue: 'text-ocean ring-ocean bg-white hover:bg-gray-200',
    pink: 'text-sunset ring-sunset bg-white hover:bg-gray-200',
    black: 'text-black ring-black bg-white hover:bg-gray-200',
    white: 'text-white ring-white bg-black hover:bg-gray-700',
    gray: 'text-gray-600 ring-gray-400 bg-white hover:bg-gray-100',
  },
  solid: {
    green:
      'bg-grass text-white hover:bg-grass-light focus-visible:outline-grass',
    blue: 'bg-ocean text-white hover:bg-ocean-light focus-visible:outline-ocean',
    pink: 'bg-sunset text-white hover:bg-sunset-light focus-visible:outline-sunset',
    black: 'bg-black text-white hover:bg-gray-700 focus-visible:outline-black',
    white: 'bg-white text-black hover:bg-gray-100 focus-visible:outline-white',
    gray: 'bg-gray-300 text-black hover:bg-gray-400 focus-visible:outline-gray-300',
  },
};

const disabledClasses: { [V in ButtonVariant]: string } = {
  outline: 'opacity-50 hover:bg-clear-none cursor-default',
  solid: 'opacity-50 hover:bg-clear-none cursor-default',
};

export function Button({
  color = 'pink',
  size = 'large',
  variant = 'solid',
  icon = 'none',
  disabled = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        classes,
        variantClasses[variant],
        sizeClasses[size],
        colorClasses[variant][color],
        disabled && disabledClasses[variant],
        className,
      )}
      {...props}
    >
      {icon === 'left' && (
        <ArrowLeftIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      )}
      {children}
      {icon === 'right' && (
        <ArrowRightIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      )}
      {icon === 'down' && (
        <ArrowDownIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}

export function LinkButton({
  href,
  color = 'pink',
  size = 'large',
  variant = 'solid',
  icon = 'none',
  className,
  children,
  ...props
}: LinkProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        classes,
        variantClasses[variant],
        sizeClasses[size],
        colorClasses[variant][color],
        className,
      )}
      {...props}
    >
      {icon === 'left' && (
        <ArrowLeftIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      )}
      {children}
      {icon === 'right' && (
        <ArrowRightIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      )}
      {icon === 'down' && (
        <ArrowDownIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      )}
    </Link>
  );
}
