import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';
import { MenuItem } from '@/types/MenuItem';
import { Button } from '@/types/Button';
import { LabeledColor } from '@/types/Color';

export type Header = {
  showNotification: boolean;
  notificationMessage: PortableTextBlock[];
  notificationBackground: LabeledColor;
  logo: Image;
  wideLogo?: Image;
  menuItems: MenuItem[];
  actionButtons: Button[];
};
