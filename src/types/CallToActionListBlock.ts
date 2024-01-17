import { BlockProps } from '@/types/Block';
import { CallToAction } from '@/types/CallToAction';
import { PortableTextBlock } from 'sanity';

export type CallToActionListBlock = BlockProps & {
  _type: 'ctaListBlock';
  title?: string;
  text?: PortableTextBlock[];
  ctas: CallToAction[];
};
