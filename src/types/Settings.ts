import { PortableTextBlock } from 'sanity';
import { Address } from '@/types/Address';
import { Social } from '@/types/Social';
import { Link } from '@/types/Link';

export type Settings = {
  showNotification: boolean;
  notificationMessage: PortableTextBlock[];
  newsletterSignupTitle: string;
  pastNewslettersMessage: PortableTextBlock[];
  newsletterConfig: string;
  address: Address;
  socialTitle: string;
  social: Social[];
  siteMap: Link[];
};
