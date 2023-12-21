import { Reference, Slug } from 'sanity';
import { ColorStruct } from '@/types/Color';

export type DonationRequestBlock = {
  _type: 'donationRequestBlock';
  _key: string;
  slug: Slug;
  alignment: 'left' | 'right';
  background: ColorStruct;
  request: Reference;
};
