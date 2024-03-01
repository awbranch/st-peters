import { Social } from '@/types/Social';
import { Link } from '@/types/Link';
import { Image } from '@/types/Image';

export type Footer = {
  newsletterLabel: string;
  newsletterUrl: string;
  logo: Image;
  contactPhone?: string;
  contactFormLabel?: string;
  contactFormLink?: string;
  streetAddress?: string;
  mailingAddress?: string;
  socialTitle: string;
  social: Social[];
  siteMap: Link[];
};
