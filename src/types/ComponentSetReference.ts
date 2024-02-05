import { Reference } from 'sanity';
import { ComponentProps } from '@/types/Component';

export type ComponentSetReference = ComponentProps & {
  _type: 'componentSetReference';
  componentSet?: Reference;
};
