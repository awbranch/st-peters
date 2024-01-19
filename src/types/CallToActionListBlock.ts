import { BlockProps } from '@/types/Block';
import { CallToAction } from '@/types/CallToAction';

export type CallToActionListBlock = BlockProps & {
  _type: 'ctaListBlock';
  ctas: CallToAction[];
};
