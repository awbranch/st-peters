/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';

import { breakpoints, themeColors } from './src/utils/globals';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        body: 'var(--body-font)',
      },
      boxShadow: {
        airy: '0 6px 24px 0 rgba(140, 152, 164, 0.125)',
      },
      colors: themeColors,
    },
    screens: Object.entries(breakpoints).reduce(
      (a, [k, v]) => {
        a[k] = `${v}px`;
        return a;
      },
      {} as { [key: string]: string },
    ),
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
