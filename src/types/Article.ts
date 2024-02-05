import { ComponentProps } from '@/types/Component';
import { PortableTextBlock } from 'sanity';

export type Article = ComponentProps & {
  _type: 'article';
  text: PortableTextBlock[];
};
