import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';

export type FormBlock = BlockProps & {
  _type: 'formBlock';
  formType: 'contact' | 'volunteer' | 'donate';
  text: PortableTextBlock[];
};
