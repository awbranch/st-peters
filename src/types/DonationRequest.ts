import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';
import { DonationLevel } from '@/types/DonationLevel';

export type DonationRequest = {
  title: string;
  text: PortableTextBlock[];
  image: Image;
  levelsTitle: string;
  levels?: DonationLevel[];
  otherLevel: boolean;
};
