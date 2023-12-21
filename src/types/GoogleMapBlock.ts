import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';

export type GoogleMapBlock = BlockProps & {
  _type: 'googleMapBlock';
  text: PortableTextBlock[];
  embedURL: string;
};
