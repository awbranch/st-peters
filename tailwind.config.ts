import type { Config } from 'tailwindcss';
import { toGrid, toRem } from './src/utils/base';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#111827',
      white: '#ffffff',
      gray: {
        100: '#e5e7eb',
        200: '#d1d4dc',
        300: '#babfca',
      },
      green: '#14532d',
      blue: '#1766b5',
      pink: '#db2777',
    },
    fontSize: {
      sm: [
        toRem(15),
        {
          lineHeight: toRem(20),
          letterSpacing: '0.0em',
          fontWeight: '400',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: toRem(30),
          letterSpacing: '0.020em',
          fontWeight: '400',
        },
      ],
      lg: [
        toRem(26),
        {
          lineHeight: toRem(40),
          letterSpacing: '0.050em',
          fontWeight: '700',
        },
      ],
      xl: [
        toRem(36),
        {
          lineHeight: toRem(50),
          letterSpacing: '0.050em',
          fontWeight: '800',
        },
      ],
      '2xl': [
        toRem(60),
        {
          lineHeight: toRem(70),
          letterSpacing: '0.075em',
          fontWeight: '800',
        },
      ],
    },
    spacing: {
      0: '0px',
      1: toGrid(1),
      2: toGrid(2),
      3: toGrid(3),
      4: toGrid(4),
      5: toGrid(5),
      6: toGrid(6),
      7: toGrid(7),
      8: toGrid(8),
      9: toGrid(9),
      10: toGrid(10),
      12: toGrid(12),
      14: toGrid(14),
      16: toGrid(16),
      18: toGrid(18),
      20: toGrid(20),
      24: toGrid(24),
    },
    borderRadius: {
      none: '0',
      DEFAULT: '5px',
    },
  },
  plugins: [],
};
export default config;
