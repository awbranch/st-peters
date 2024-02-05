import { ComponentProps } from '@/types/Component';
import { FAQ } from '@/types/FAQ';

export type FAQList = ComponentProps & {
  _type: 'faqList';
  faqs: FAQ[];
};
