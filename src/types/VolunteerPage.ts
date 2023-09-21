import { Hero } from '@/types/Hero';
import { FAQ } from '@/types/FAQ';
import { Image } from '@/types/Image';
import { PortableTextBlock } from 'sanity';

export type VolunteerPage = {
  hero: Hero;
  details: PortableTextBlock[];
  faqsTitle: string;
  faqs: FAQ[];
  formTitle: string;
  formText: PortableTextBlock[];
  formImage: Image;
};