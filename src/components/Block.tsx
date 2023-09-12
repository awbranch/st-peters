import React from 'react';
import type { Color } from '@/types/Color';
import { maxScreenWidth } from '@/utils/globals';
import cn from 'classnames';

interface Props {
  color?: Color;
  center?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Block({
  color,
  center = false,
  className = '',
  children,
}: Props) {
  return (
    <div
      className={cn(
        'px-2 md:px-4 py-4 md:py-8',
        { 'bg-green text-white': color === 'green' },
        { 'bg-blue text-white': color === 'blue' },
        { 'bg-pink text-white': color === 'pink' },
        { 'bg-black text-white': color === 'black' },
        { 'bg-white text-black': color === 'white' },
        { 'text-center': center },
        className,
      )}
    >
      <div className="mx-auto" style={{ maxWidth: maxScreenWidth }}>
        {children}
      </div>
    </div>
  );
}
