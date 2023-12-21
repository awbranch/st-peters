import { PortableTextBlock, Slug } from 'sanity';
import { Action } from '@/types/Action';
import { Image } from '@/types/Image';
import { DonationRequestBlock } from '@/types/DonationRequestBlock';

export type NewsStory = {
  category: string;
  date: string;
  title: string;
  slug: Slug;
  description: string;
  image: Image;
  text: PortableTextBlock[];
  actions?: Action[];
  donationRequestBlock?: DonationRequestBlock;
};
