import { PortableTextBlock } from 'sanity';
import { Address } from '@/types/Address';
import { Social } from '@/types/Social';
import { Link } from '@/types/Link';

export type Settings = {
  showNotification: boolean;
  notificationMessage: PortableTextBlock[];
  address: Address;
  social: Social[];
  siteMap: Link[];
};
