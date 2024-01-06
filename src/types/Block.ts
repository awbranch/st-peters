import { HeroBlock } from '@/types/HeroBlock';
import { LunchBlock } from '@/types/LunchBlock';
import { HighlightBlock } from '@/types/HighlightBlock';
import { ImpactBlock } from '@/types/ImpactBlock';
import { InstagramBlock } from '@/types/InstagramBlock';
import { TextBlock } from '@/types/TextBlock';
import { GoogleMapBlock } from '@/types/GoogleMapBlock';
import { TeamBlock } from '@/types/TeamBlock';
import { JobsBlock } from '@/types/JobsBlock';
import { DocumentsBlock } from '@/types/DocumentsBlock';
import { FAQsBlock } from '@/types/FAQsBlock';
import { FormBlock } from '@/types/FormBlock';
import { DonationRequestBlock } from '@/types/DonationRequestBlock';
import { Slug } from 'sanity';
import { ButtonTileGridBlock } from '@/types/ButtonTileGridBlock';
import { ImageTileGridBlock } from '@/types/ImageTileGridBlock';

export type Block =
  | DocumentsBlock
  | DonationRequestBlock
  | FAQsBlock
  | ImageTileGridBlock
  | ButtonTileGridBlock
  | FormBlock
  | GoogleMapBlock
  | HeroBlock
  | HighlightBlock
  | ImpactBlock
  | InstagramBlock
  | JobsBlock
  | LunchBlock
  | TeamBlock
  | TextBlock;

export type BlockProps = {
  _key: string;
  id?: Slug;
};
