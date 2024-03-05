import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';
import { MenuItem } from '@/types/MenuItem';
import { Button } from '@/types/Button';
import { Palette } from '@/types/Palette';

export type Header = {
  showNotification: boolean;
  notificationMessage: PortableTextBlock[];
  notificationPalette: Palette;
  logo: Image;
  wideLogo?: Image;
  menuItems: MenuItem[];
  actionButtons: Button[];
  socialImage: Image;
};
