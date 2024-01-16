import { HeroBlock } from '@/types/HeroBlock';
import { LunchBlock } from '@/types/LunchBlock';
import { HighlightBlock } from '@/types/HighlightBlock';
import { ImpactBlock } from '@/types/ImpactBlock';
import { InstagramBlock } from '@/types/InstagramBlock';
import { TextBlock } from '@/types/TextBlock';
import { GoogleMapBlock } from '@/types/GoogleMapBlock';
import { JobsBlock } from '@/types/JobsBlock';
import { DocumentsBlock } from '@/types/DocumentsBlock';
import { FAQsBlock } from '@/types/FAQsBlock';
import { FormBlock } from '@/types/FormBlock';
import { DonationRequestBlock } from '@/types/DonationRequestBlock';
import { ButtonTileGridBlock } from '@/types/ButtonTileGridBlock';
import { ImageTileGridBlock } from '@/types/ImageTileGridBlock';
import { TeamGridBlock } from '@/types/TeamGridBlock';
import { TeamListBlock } from '@/types/TeamListBlock';
import { ReferenceBlock } from '@/types/ReferenceBlock';
import { ListSetBlock } from '@/types/ListSetBlock';
import { LabeledColor } from '@/types/Color';

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
  | ListSetBlock
  | ReferenceBlock
  | TeamGridBlock
  | TeamListBlock
  | TextBlock;

export type BlockProps = {
  _key: string;
  background?: LabeledColor;
};
