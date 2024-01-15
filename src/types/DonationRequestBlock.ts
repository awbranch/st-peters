import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';
import { DonationLevel } from '@/types/DonationLevel';

export type DonationRequestBlock = BlockProps & {
  _type: 'donationRequestBlock';
  alignment: 'left' | 'right';
  title: string;
  text: PortableTextBlock[];
  image: Image;
  levelsTitle: string;
  levels?: DonationLevel[];
  otherLevel: boolean;
};
