import { HeroBlock } from '@/types/HeroBlock';
import { LunchBlock } from '@/types/LunchBlock';
import { HighlightBlock } from '@/types/HighlightBlock';
import { ImpactBlock } from '@/types/ImpactBlock';
import { ProgramsBlock } from '@/types/ProgramsBlock';
import { InstagramBlock } from '@/types/InstagramBlock';
import { TextBlock } from '@/types/TextBlock';
import { GoogleMapBlock } from '@/types/GoogleMapBlock';
import { TeamBlock } from '@/types/TeamBlock';
import { JobsBlock } from '@/types/JobsBlock';
import { DocumentsBlock } from '@/types/DocumentsBlock';
import { FAQsBlock } from '@/types/FAQsBlock';
import { FormBlock } from '@/types/FormBlock';
import { DonationRequestBlock } from '@/types/DonationRequestBlock';
import { WishListBlock } from '@/types/WishListBlock';
import { Slug } from 'sanity';
import { ColorStruct } from '@/types/Color';

export type Block =
  | DocumentsBlock
  | DonationRequestBlock
  | FAQsBlock
  | FormBlock
  | GoogleMapBlock
  | HeroBlock
  | HighlightBlock
  | ImpactBlock
  | InstagramBlock
  | JobsBlock
  | LunchBlock
  | ProgramsBlock
  | TeamBlock
  | TextBlock
  | WishListBlock;

export type BlockProps = {
  _key: string;
  slug: Slug;
  background?: ColorStruct;
  narrow?: boolean;
};
