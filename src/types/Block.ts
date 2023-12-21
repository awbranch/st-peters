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
import { VolunteerFormBlock } from '@/types/VolunteerFormBlock';
import { DonationRequestBlock } from '@/types/DonationRequestBlock';
import { WishListBlock } from '@/types/WishListBlock';

export type Block =
  | DocumentsBlock
  | DonationRequestBlock
  | FAQsBlock
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
  | VolunteerFormBlock
  | WishListBlock;
