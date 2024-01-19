import { HeroBlock } from '@/types/HeroBlock';
import { LunchBlock } from '@/types/LunchBlock';
import { HighlightBlock } from '@/types/HighlightBlock';
import { ImpactBlock } from '@/types/ImpactBlock';
import { TextBlock } from '@/types/TextBlock';
import { JobsBlock } from '@/types/JobsBlock';
import { DocumentsBlock } from '@/types/DocumentsBlock';
import { FAQsBlock } from '@/types/FAQsBlock';
import { FormBlock } from '@/types/FormBlock';
import { ButtonTileGridBlock } from '@/types/ButtonTileGridBlock';
import { ImageTileGridBlock } from '@/types/ImageTileGridBlock';
import { IframeBlock } from '@/types/IframeBlock';
import { TeamGridBlock } from '@/types/TeamGridBlock';
import { TeamListBlock } from '@/types/TeamListBlock';
import { ReferenceBlock } from '@/types/ReferenceBlock';
import { ListSetBlock } from '@/types/ListSetBlock';
import { LabeledColor } from '@/types/Color';
import { CallToActionBlock } from '@/types/CallToActionBlock';
import { CallToActionListBlock } from '@/types/CallToActionListBlock';

export type Block =
  | CallToActionBlock
  | CallToActionListBlock
  | DocumentsBlock
  | FAQsBlock
  | ImageTileGridBlock
  | ButtonTileGridBlock
  | FormBlock
  | HeroBlock
  | HighlightBlock
  | IframeBlock
  | ImpactBlock
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
