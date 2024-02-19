import { PortableTextBlock } from 'sanity';
import { Social } from '@/types/Social';
import { Link } from '@/types/Link';
import { Image } from '@/types/Image';

export type Footer = {
  newsletterSignupTitle: string;
  pastNewslettersMessage: PortableTextBlock[];
  newsletterConfig: string;
  logo: Image;
  contactPhone?: string;
  contactEmail?: string;
  streetAddress?: string;
  mailingAddress?: string;
  socialTitle: string;
  social: Social[];
  siteMap: Link[];
};
