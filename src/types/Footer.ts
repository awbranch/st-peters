import { PortableTextBlock } from 'sanity';
import { Address } from '@/types/Address';
import { Social } from '@/types/Social';
import { Link } from '@/types/Link';
import { Image } from '@/types/Image';

export type Footer = {
  newsletterSignupTitle: string;
  pastNewslettersMessage: PortableTextBlock[];
  newsletterConfig: string;
  address: Address;
  socialTitle: string;
  social: Social[];
  siteMap: Link[];
  logo: Image;
};
