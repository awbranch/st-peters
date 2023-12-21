import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';

export type VolunteerFormBlock = BlockProps & {
  _type: 'volunteerFormBlock';
  text: PortableTextBlock[];
};
