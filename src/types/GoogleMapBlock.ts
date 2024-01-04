import { BlockProps } from '@/types/Block';

export type GoogleMapBlock = BlockProps & {
  _type: 'googleMapBlock';
  embedURL: string;
};
