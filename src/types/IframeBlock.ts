import { BlockProps } from '@/types/Block';

export type IframeBlock = BlockProps & {
  _type: 'iframeBlock';
  code: string;
};
