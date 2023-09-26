/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';

import { toGrid, toRem, breakpoints } from './src/utils/globals';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#111827',
      white: '#ffffff',
      gray: {
        100: '#e5e7eb',
        200: '#d1d4dc',
        300: '#babfca',
        400: '#A3AAB8',
        500: '#8c95a6',
        600: '#757F95',
        700: '#626B7F',
        800: '#505768',
        900: '#3E4451',
      },
      green: {
        light: '#249451',
        DEFAULT: '#14532d',
        dark: '#0C311B',
      },
      blue: {
        light: '#388fe5',
        DEFAULT: '#1766b5',
        dark: '#0e3d6c',
      },
      pink: {
        light: '#e773a8',
        DEFAULT: '#db2777',
        dark: '#9d1b55',
      },
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
        // Used for H2
        toRem(26),
        {
          lineHeight: toRem(40),
          letterSpacing: '0.050em',
          fontWeight: '700',
        },
      ],
      xl: [
        // Used for H1
        toRem(36),
        {
          lineHeight: toRem(50),
          letterSpacing: '0.050em',
          fontWeight: '800',
        },
      ],
      '2xl': [
        // Used for Hero
        toRem(44),
        {
          lineHeight: toRem(60),
          letterSpacing: '0.060em',
          fontWeight: '800',
        },
      ],
      '3xl': [
        // Used for Hero
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
      '0.5': toGrid(0.5),
      1: toGrid(1),
      '1.5': toGrid(1.5),
      2: toGrid(2),
      '2.5': toGrid(2.5),
      3: toGrid(3),
      '3.5': toGrid(3.5),
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
      DEFAULT: toRem(5),
      md: toRem(10),
      lg: toRem(20),
      xl: toRem(30),
      full: toRem(9999),
    },
    fontWeight: {
      normal: '400',
      bold: '700',
      'extra-bold': '800',
    },
    screens: breakpoints,
    extend: {
      boxShadow: {
        airy: '0 6px 24px 0 rgba(140, 152, 164, 0.125)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
