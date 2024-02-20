import { Social } from '@/types/Social';
import { Link } from '@/types/Link';
import { Image } from '@/types/Image';

export type Footer = {
  newsletterTitle: string;
  newsletterText: string;
  newsletterUrl: string;
  logo: Image;
  contactPhone?: string;
  contactEmail?: string;
  streetAddress?: string;
  mailingAddress?: string;
  socialTitle: string;
  social: Social[];
  siteMap: Link[];
};
