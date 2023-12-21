import { BlockProps } from '@/types/Block';
import { Reference } from 'sanity';

export type DonationRequestBlock = BlockProps & {
  _type: 'donationRequestBlock';
  alignment: 'left' | 'right';
  request: Reference;
};
