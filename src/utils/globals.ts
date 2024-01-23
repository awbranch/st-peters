import { SocialMediaService } from '@/types/SocialMediaService';
import { faEnvelope, IconDefinition } from '@fortawesome/pro-solid-svg-icons';

import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { PageWidth } from '@/types/PageWidth';

export const maxPageWidth = 1280;

export const pageWidths: { [V in PageWidth]: number } = {
  xs: 750,
  sm: 840,
  md: 930,
  lg: maxPageWidth,
};

export const breakpoints = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

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

export const userColorList = [
  { label: 'green', value: themeColors.grass.DEFAULT },
  { label: 'blue', value: themeColors.ocean.DEFAULT },
  { label: 'pink', value: themeColors.sunset.DEFAULT },
  { label: 'black', value: themeColors.black },
  { label: 'white', value: '#ffffff' },
  { label: 'gray', value: '#f3f4f6' },
];

export const socialIcons: { [K in SocialMediaService]: IconDefinition } = {
  email: faEnvelope,
  facebook: faFacebookF,
  instagram: faInstagram,
  youtube: faYoutube,
  twitter: faTwitter,
  x: faXTwitter,
  linkedin: faLinkedin,
};
