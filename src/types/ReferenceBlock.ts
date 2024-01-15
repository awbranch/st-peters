import { Reference } from 'sanity';
import { BlockProps } from '@/types/Block';

export type ReferenceBlock = BlockProps & {
  _type: 'referenceBlock';
  block?: Reference;
};
