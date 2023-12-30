import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';

export type Header = {
  showNotification: boolean;
  notificationMessage: PortableTextBlock[];
  logo: Image;
};
