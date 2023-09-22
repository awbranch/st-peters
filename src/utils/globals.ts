import { NewsCategory } from '@/types/NewsCategory';

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

export const newsCategories: NewsCategory[] = [
  {
    name: 'Upcoming Events',
    slug: 'upcoming-events',
    sanityName: 'Event',
    sanityCategory: 'event',
  },
  {
    name: 'Past Events',
    slug: 'past-events',
    sanityName: 'Event',
    sanityCategory: 'event',
  },
  {
    name: 'Community Stories',
    slug: 'community-stories',
    sanityName: 'Community Story',
    sanityCategory: 'community-story',
  },
];

export function isFullyQualifiedURL(url: string) {
  const pattern = /^(https?:\/\/).*$/i;
  return pattern.test(url);
}
