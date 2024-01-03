import { PortableTextBlock, Slug } from 'sanity';
import { Image } from '@/types/Image';
import { DonationRequestBlock } from '@/types/DonationRequestBlock';

export type Program = {
  title: string;
  slug: Slug;
  image: Image;
  text: PortableTextBlock[];
  donationRequests: DonationRequestBlock[];
};
