import React from 'react';
import { TextColor } from '@/types/Color';

type Props = {
  color: TextColor;
};

export default function Hamburger({ color }: Props) {
  const rectClass = color === 'white' ? 'fill-white' : 'fill-black';
  const circleClass = color === 'white' ? 'fill-none' : 'fill-white';
  const styles = {
    strokeWidth: '0px',
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      viewBox="0 0 54 54"
    >
      <circle className={circleClass} style={styles} cx="27" cy="27" r="27" />
      <rect
        className={rectClass}
        style={styles}
        x="10"
        y="25"
        width="34"
        height="4"
        rx="2"
        ry="2"
      />
      <rect
        className={rectClass}
        style={styles}
        x="10"
        y="36"
        width="34"
        height="4"
        rx="2"
        ry="2"
      />
      <rect
        className={rectClass}
        style={styles}
        x="10"
        y="14"
        width="34"
        height="4"
        rx="2"
        ry="2"
      />
    </svg>
  );
}
