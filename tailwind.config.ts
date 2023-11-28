/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';

import { breakpoints } from './src/utils/globals';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        airy: '0 6px 24px 0 rgba(140, 152, 164, 0.125)',
      },
      colors: {
        grass: {
          light: '#249451',
          DEFAULT: '#14532d',
          dark: '#0C311B',
        },
        ocean: {
          light: '#388fe5',
          DEFAULT: '#1766b5',
          dark: '#0e3d6c',
        },
        sunset: {
          light: '#e773a8',
          DEFAULT: '#db2777',
          dark: '#9d1b55',
        },
      },
    },
    screens: Object.entries(breakpoints).reduce((a, [k, v]) => {
      a[k] = `${v}px`;
      return a;
    }, {}),
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
