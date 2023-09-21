import { PortableTextBlock } from 'sanity';
import { DonationRequest } from '@/types/DonationRequest';
import { SupportCategory } from '@/types/SupportCategory';

export type SupportPage = {
  title: string;
  text: PortableTextBlock[];
  learn: SupportCategory;
  social: SupportCategory;
  newsletter: SupportCategory;
  food: SupportCategory;
  school: SupportCategory;
  merch: SupportCategory;
  volunteer: SupportCategory;
  donate: SupportCategory;
  join: SupportCategory;
  singleDonation?: DonationRequest;
  recurringDonation?: DonationRequest;
};
