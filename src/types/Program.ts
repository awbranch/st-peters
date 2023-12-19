import { PortableTextBlock, Slug } from 'sanity';
import { Image } from '@/types/Image';
import { DonationRequestBlockConfig } from '@/types/DonationRequestBlockConfig';

export type Program = {
  title: string;
  slug: Slug;
  image: Image;
  text: PortableTextBlock[];
  donationRequestBlock?: DonationRequestBlockConfig;
};
