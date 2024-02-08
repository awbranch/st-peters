import { Palette } from '@/types/Palette';
import { Color } from '@/types/Color';
import { ButtonVariant } from '@/types/ButtonVariant';
import { ButtonStyle } from '@/types/ButtonStyle';

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

type PaletteClass = {
  [P in Palette]: {
    [C in 'block' | 'accent' | 'divide']: string;
  };
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
