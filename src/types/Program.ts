import { PortableTextBlock, Slug } from 'sanity';
import { Image } from '@/types/Image';
import { DonationRequest } from '@/types/DonationRequest';

export type Program = {
  title: string;
  slug: Slug;
  image: Image;
  text: PortableTextBlock[];
  donationRequest?: DonationRequest;
};
