import { NewsCategory } from '@/types/NewsCategory';

export const maxScreenWidth = 1280;

export const breakpoints = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const newsCategories: NewsCategory[] = [
  {
    name: 'Past Events',
    slug: 'past-events',
    sanityName: 'Event',
    sanityCategory: 'event',
  },
  {
    name: 'Upcoming Events',
    slug: 'upcoming-events',
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

export const themeColors = {
  black: '#111827',
  grass: {
    light: '#1C733F',
    DEFAULT: '#14532d',
    dark: '#0C311B',
  },
  ocean: {
    light: '#1C7AD9',
    DEFAULT: '#1766b5',
    dark: '#135290',
  },
  sunset: {
    light: '#E15192',
    DEFAULT: '#db2777',
    dark: '#C02168',
  },
};

export const textColorList = [
  { label: 'green', value: themeColors.grass.DEFAULT },
  { label: 'blue', value: themeColors.ocean.DEFAULT },
  { label: 'pink', value: themeColors.sunset.DEFAULT },
  { label: 'black', value: themeColors.black },
  { label: 'white', value: '#ffffff' },
  { label: 'gray', value: '#f3f4f6' },
];

export const buttonColorList = [
  { label: 'green', value: themeColors.grass.DEFAULT },
  { label: 'blue', value: themeColors.ocean.DEFAULT },
  { label: 'pink', value: themeColors.sunset.DEFAULT },
  { label: 'black', value: themeColors.black },
];
