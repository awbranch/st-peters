import { BlockProps } from '@/types/Block';

export type FormBlock = BlockProps & {
  _type: 'formBlock';
  formType: 'contact' | 'volunteer' | 'donate';
};
