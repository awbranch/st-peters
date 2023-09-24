import React from 'react';
import type { Color } from '@/types/Color';
import cn from 'classnames';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa6';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'small' | 'large';
  color?: Color;
  icon?: 'none' | 'down' | 'right';
  variant?: 'text' | 'outline' | 'solid';
};

export default function Button({
  size = 'large',
  color = 'blue',
  variant = 'outline',
  icon = 'none',
  className = '',
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        'px-3 rounded-full',
        { 'py-1': variant === 'text' || variant === 'solid' },
        { 'py-[7px] border-[3px]': variant === 'outline' },
        { 'bg-green text-white': variant === 'solid' && color === 'green' },
        { 'bg-blue text-white': variant === 'solid' && color === 'blue' },
        { 'bg-pink text-white': variant === 'solid' && color === 'pink' },
        { 'bg-black text-white': variant === 'solid' && color === 'black' },
        { 'bg-white text-black': variant === 'solid' && color === 'white' },
        {
          'bg-white text-green border-green':
            (variant === 'outline' || variant === 'text') && color === 'green',
        },
        {
          'bg-white text-blue border-blue':
            (variant === 'outline' || variant === 'text') && color === 'blue',
        },
        {
          'bg-white text-pink border-pink':
            (variant === 'outline' || variant === 'text') && color === 'pink',
        },
        {
          'bg-white text-black border-black':
            (variant === 'outline' || variant === 'text') && color === 'black',
        },
        {
          'bg-black text-white border-white':
            (variant === 'outline' || variant === 'text') && color === 'white',
        },
        { 'text-base font-bold': size === 'small' },
        { 'text-lg': size === 'large' },
        className,
      )}
      {...props}
    >
      {icon ? (
        <div className="inline-flex gap-1 items-center">
          {children}
          {icon === 'right' && <FaArrowRight className="inline-block" />}
          {icon === 'down' && <FaArrowDown className="inline-block" />}
        </div>
      ) : (
        children
      )}
    </button>
  );
}
