import React from 'react';
import type { Color } from '@/types/Color';
import cn from 'classnames';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa6';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'large';
  color?: Color;
  icon?: 'none' | 'down' | 'right';
  variant?: 'text' | 'outline' | 'solid';
}

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
        'px-3 text-lg rounded-xl',
        { 'py-1': variant === 'text' || variant === 'solid' },
        { 'py-[7px] border-[3px]': variant === 'outline' },
        { 'bg-green text-white': variant === 'solid' && color === 'green' },
        { 'bg-blue text-white': variant === 'solid' && color === 'blue' },
        { 'bg-pink text-white': variant === 'solid' && color === 'pink' },
        { 'bg-black text-white': variant === 'solid' && color === 'black' },
        { 'bg-white text-black': variant === 'solid' && color === 'white' },
        {
          'bg-white text-green border-green':
            variant === 'outline' && color === 'green',
        },
        {
          'bg-white text-blue border-blue':
            variant === 'outline' && color === 'blue',
        },
        {
          'bg-white text-pink border-pink':
            variant === 'outline' && color === 'pink',
        },
        {
          'bg-white text-black border-black':
            variant === 'outline' && color === 'black',
        },
        {
          'bg-black text-white border-white':
            variant === 'outline' && color === 'white',
        },
        { 'text-base': size === 'small' },
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
