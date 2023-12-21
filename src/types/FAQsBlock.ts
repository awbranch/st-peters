import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';
import { FAQ } from '@/types/FAQ';

export type FAQsBlock = BlockProps & {
  _type: 'faqsBlock';
  text: PortableTextBlock[];
  faqs: FAQ[];
};
