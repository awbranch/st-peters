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
    slug: 'upcoming-events',
    name: 'Upcoming Events',
    value: 'event',
  },
  {
    slug: 'past-events',
    name: 'Past Events',
    value: 'event',
  },
  {
    slug: 'community-stories',
    name: 'Community Stories',
    value: 'community-story',
  },
];

export const newsCategoryList = [
  { title: 'Event', value: 'event' },
  { title: 'Community Story', value: 'community-story' },
];
