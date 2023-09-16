import React from 'react';
import type { Color } from '@/types/Color';
import cn from 'classnames';
import { FaArrowDown, FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import Link from 'next/link';

type Size = 'small' | 'large';
type Icon = 'none' | 'down' | 'right' | 'left';
type Variant = 'text' | 'outline' | 'solid';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  size?: Size;
  color?: Color;
  icon?: Icon;
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
}

const classes = 'inline-flex items-center justify-center gap-1';

const variantClasses: { [V in Variant]: string } = {
  text: 'hover:underline hover:underline-offset-4',
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
    green: 'text-green',
    blue: 'text-blue',
    pink: 'text-pink',
    black: 'text-black',
    white: 'text-white',
  },
  outline: {
    green: 'text-green bg-white border-green',
    blue: 'text-blue bg-white border-blue',
    pink: 'text-pink bg-white border-pink',
    black: 'text-black bg-white border-black',
    white: 'text-white bg-black border-white',
  },
  solid: {
    green: 'bg-green text-white',
    blue: 'bg-blue text-white',
    pink: 'bg-pink text-white',
    black: 'bg-black text-white',
    white: 'bg-white text-black',
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
      className={cn(
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
