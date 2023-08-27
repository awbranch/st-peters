export const htmlFontSize = 18;
export const baselinePx = 10;

/**
 * Converts a multiplier to the baseline grid in rems
 */
export const toGrid = (mx: number) => `${toRem(baselinePx * mx)}`;

/**
 * Converts pixels to rems
 * @param px
 */
export const toRem = (px: number) => `${px / htmlFontSize}rem`;
