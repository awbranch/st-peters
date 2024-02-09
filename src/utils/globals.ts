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
import { Palette } from '@/types/Palette';
import { ButtonStyle } from '@/types/ButtonStyle';
import { ButtonVariant } from '@/types/ButtonVariant';
import { Color } from '@/types/Color';

export const maxPageWidth = 1280;

export const newsStoriesPerPage = 5;

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

export const socialIcons: { [K in SocialMediaService]: IconDefinition } = {
  email: faEnvelope,
  facebook: faFacebookF,
  instagram: faInstagram,
  youtube: faYoutube,
  twitter: faTwitter,
  x: faXTwitter,
  linkedin: faLinkedin,
};

type PaletteClass = {
  [P in Palette]: {
    [C in 'block' | 'accent' | 'divide']: string;
  };
};

export const userPaletteButtonProps: {
  [P in Palette]: {
    [S in ButtonStyle]: {
      variant: ButtonVariant;
      color: Color;
    };
  };
} = {
  white: {
    primary: {
      variant: 'solid',
      color: 'pink',
    },
    secondary: {
      variant: 'outline',
      color: 'pink',
    },
  },
  highlight: {
    primary: {
      variant: 'solid',
      color: 'black',
    },
    secondary: {
      variant: 'solid',
      color: 'white',
    },
  },
  gray: {
    primary: {
      variant: 'solid',
      color: 'pink',
    },
    secondary: {
      variant: 'outline',
      color: 'pink',
    },
  },
  black: {
    primary: {
      variant: 'solid',
      color: 'pink',
    },
    secondary: {
      variant: 'solid',
      color: 'white',
    },
  },
};
export const userPaletteClasses: PaletteClass = {
  white: {
    block: 'bg-white text-black',
    accent: 'text-sunset',
    divide: 'divide-black/10',
  },
  highlight: {
    block: 'bg-sunset text-white',
    accent: 'text-white',
    divide: 'divide-white/30',
  },
  gray: {
    block: 'bg-gray-100 text-black',
    accent: 'text-sunset',
    divide: 'divide-black/20',
  },
  black: {
    block: 'bg-black text-white',
    accent: 'text-sunset',
    divide: 'divide-white/10',
  },
};
