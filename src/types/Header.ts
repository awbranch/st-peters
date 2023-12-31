import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';
import { MenuItem } from '@/types/MenuItem';
import { Button } from '@/types/Button';

export type Header = {
  showNotification: boolean;
  notificationMessage: PortableTextBlock[];
  logo: Image;
  wideLogo?: Image;
  menuItems: MenuItem[];
  actionButtons: Button[];
};
