export const htmlFontSize = 18;
export const baselinePx = 10;

export const toGrid = (mx: number) => `${toRem(baselinePx * mx)}`;
export const toRem = (px: number) => `${px / htmlFontSize}rem`;

export const maxScreenWidth = 1280;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};
