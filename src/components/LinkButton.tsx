import React from 'react';
import type { Color } from '@/types/Color';

import { twMerge } from 'tailwind-merge';
import { FaArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';
import { APropsWithoutRef } from 'react-html-props';
import { ButtonVariant } from '@/types/ButtonVariant';

export type Size = 'small' | 'medium' | 'large';
export type Icon = 'none' | 'down' | 'right' | 'left';

type Props = APropsWithoutRef & {
  size?: Size;
  color?: Color;
  icon?: Icon;
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

const sizeClasses: { [S in Size]: string } = {
  small: 'gap-x-1.5 px-3 py-1 text-sm ',
  medium: 'gap-x-1.5 px-3 py-1.5 text-sm ',
  large: 'gap-x-2 px-3.5 py-2 text-base',
};

const colorClasses: { [V in ButtonVariant]: { [C in Color]: string } } = {
  outline: {
    green: 'text-grass ring-grass hover:bg-grass/20',
    blue: 'text-ocean ring-ocean hover:bg-ocean/20',
    pink: 'text-sunset ring-sunset hover:bg-sunset/20',
    black: 'text-black ring-black hover:bg-black/20',
    white: 'text-white ring-white hover:bg-white/20',
    gray: 'text-gray-400 ring-gray-400 hover:bg-gray-100',
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

export default function LinkButton({
  href,
  color = 'pink',
  size = 'large',
  variant = 'solid',
  icon = 'none',
  className,
  children,
  ...props
}: Props) {
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
        <FaArrowLeft className="-ml-0.5 h-4 w-4" aria-hidden="true" />
      )}
      {children}
      {icon === 'right' && (
        <FaArrowRight className="-ml-0.5 h-4 w-4" aria-hidden="true" />
      )}
      {icon === 'down' && (
        <FaArrowDown className="-ml-0.5 h-4 w-4" aria-hidden="true" />
      )}
    </Link>
  );
}
