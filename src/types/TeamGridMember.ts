import { Image } from '@/types/Image';

export type TeamGridMember = {
  _key: string;
  image: Image;
  name: string;
  title?: string;
  twitterUrl?: string;
  linkedInUrl?: string;
};
