import React from 'react';
import type { BgColor } from '@/types/Color';
import { maxScreenWidth } from '@/utils/globals';

interface Props {
  bg?: BgColor;
  center?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Block({
  bg,
  center = false,
  className = '',
  children,
}: Props) {
  return (
    <div
      className={`${
        bg === 'green'
          ? 'bg-green text-white'
          : bg === 'blue'
          ? 'bg-blue text-white'
          : bg === 'pink'
          ? 'bg-pink text-white'
          : bg === 'black'
          ? 'bg-black text-white'
          : 'bg-white text-black'
      } ${center ? 'text-center' : ''} px-2 md:px-4 py-4 md:py-8 ${className}`}
    >
      <div className="mx-auto" style={{ maxWidth: maxScreenWidth }}>
        {children}
      </div>
    </div>
  );
}
