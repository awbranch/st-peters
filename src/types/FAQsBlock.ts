import { BlockProps } from '@/types/Block';
import { FAQ } from '@/types/FAQ';

export type FAQsBlock = BlockProps & {
  _type: 'faqsBlock';
  faqs: FAQ[];
};
