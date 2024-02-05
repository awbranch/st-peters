import { ComponentProps } from '@/types/Component';
import { PortableTextBlock } from 'sanity';
import { Alignment } from '@/types/Alignment';

export type TitleText = ComponentProps & {
  _type: 'titleText';
  alignment: Alignment;
  text: PortableTextBlock[];
};
