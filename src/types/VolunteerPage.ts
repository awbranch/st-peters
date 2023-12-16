import { HeroBlockConfig } from '@/types/HeroBlockConfig';
import { FAQ } from '@/types/FAQ';
import { PortableTextBlock } from 'sanity';

export type VolunteerPage = {
  hero: HeroBlockConfig;
  details: PortableTextBlock[];
  faqsTitle: string;
  faqs: FAQ[];
  formTitle: string;
  formText: PortableTextBlock[];
};
