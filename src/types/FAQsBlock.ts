import { BlockProps } from '@/types/Block';
import { FAQ } from '@/types/FAQ';
import { PortableTextBlock } from 'sanity';

export type FAQsBlock = BlockProps & {
  _type: 'faqsBlock';
  title?: string;
  text?: PortableTextBlock[];
  faqs: FAQ[];
};
