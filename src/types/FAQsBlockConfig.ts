import { PortableTextBlock, Slug } from 'sanity';
import { ColorStruct } from '@/types/Color';
import { FAQ } from '@/types/FAQ';

export type FAQsBlockConfig = {
  _type: 'faqsBlock';
  _key: string;
  slug: Slug;
  background: ColorStruct;
  text: PortableTextBlock[];
  faqs: FAQ[];
};
