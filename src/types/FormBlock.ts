import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';

export type FormBlock = BlockProps & {
  _type: 'formBlock';
  title?: string;
  text?: PortableTextBlock[];
  formType: 'contact' | 'volunteer' | 'donate';
};
