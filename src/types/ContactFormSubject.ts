import { Slug } from 'sanity';
import { Image } from '@/types/Image';

export type ContactFormSubject = {
  _key: string;
  id: Slug;
  name: string;
  emailTo: string;
  image?: Image;
};
