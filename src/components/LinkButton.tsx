import React from 'react';
import type { Color } from '@/types/Color';
import { twMerge } from 'tailwind-merge';
import { FaArrowDown, FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import Link from 'next/link';

type Size = 'small' | 'large';
type Icon = 'none' | 'down' | 'right' | 'left';
type Variant = 'text' | 'outline' | 'solid';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  size?: Size;
  color?: Color;
  icon?: Icon;
  variant?: Variant;
};

const classes = 'inline-flex items-center justify-center gap-1';

// TODO: May want to consider using this library to manage the variants
// https://cva.style/docs/getting-started/variants
const variantClasses: { [V in Variant]: string } = {
  text: 'hover:underline hover:underline-offset-8',
  outline: 'rounded-xl',
  solid: 'rounded-xl',
};

const sizeClasses: { [V in Variant]: { [S in Size]: string } } = {
  text: {
    small: 'text-base font-bold py-[8px]',
    large: 'text-lg py-1',
  },
  outline: {
    small: 'text-base font-bold px-2 py-[5px] border-[3px]',
    large: 'text-lg px-3 py-[7px] border-[3px]',
  },
  solid: {
    small: 'text-base font-bold px-2 py-[8px]',
    large: 'text-lg px-3 py-1',
  },
};

const colorClasses: { [V in Variant]: { [C in Color]: string } } = {
  text: {
    green: 'text-grass',
    blue: 'text-ocean',
    pink: 'text-sunset',
    black: 'text-black',
    white: 'text-white',
    gray: 'text-white',
  },
  outline: {
    green: 'text-grass bg-white border-grass',
    blue: 'text-ocean bg-white border-ocean',
    pink: 'text-sunset bg-white border-sunset',
    black: 'text-black bg-white border-black',
    white: 'text-white bg-black border-white',
    gray: 'text-white bg-black border-white',
  },
  solid: {
    green: 'bg-grass text-white',
    blue: 'bg-ocean text-white',
    pink: 'bg-sunset text-white',
    black: 'bg-black text-white',
    white: 'bg-white text-black',
    gray: 'bg-white text-black',
  },
};

export default function LinkButton({
  href,
  color,
  size = 'large',
  variant = 'text',
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
        sizeClasses[variant][size],
        colorClasses[variant][color],
        className,
      )}
      {...props}
    >
      {icon === 'left' && <FaArrowLeft className="inline-block" />}
      {children}
      {icon === 'right' && <FaArrowRight className="inline-block" />}
      {icon === 'down' && <FaArrowDown className="inline-block" />}
    </Link>
  );
}
