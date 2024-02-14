import { Image } from '@/types/Image';

export type TeamListMember = {
  _key: string;
  image: Image;
  name: string;
  title: string;
  bio: string;
  contact?: string;
  email?: string;
  twitterUrl?: string;
  linkedInUrl?: string;
};
