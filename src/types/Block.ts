import { ButtonTileGridBlock } from '@/types/ButtonTileGridBlock';
import { CallToActionBlock } from '@/types/CallToActionBlock';
import { CallToActionListBlock } from '@/types/CallToActionListBlock';
import { DocumentsBlock } from '@/types/DocumentsBlock';
import { FAQsBlock } from '@/types/FAQsBlock';
import { FormBlock } from '@/types/FormBlock';
import { HeroBlock } from '@/types/HeroBlock';
import { HighlightBlock } from '@/types/HighlightBlock';
import { IconListBlock } from '@/types/IconListBlock';
import { IframeBlock } from '@/types/IframeBlock';
import { ImageTileGridBlock } from '@/types/ImageTileGridBlock';
import { ImpactBlock } from '@/types/ImpactBlock';
import { JobsBlock } from '@/types/JobsBlock';
import { LabeledColor } from '@/types/Color';
import { ListSetBlock } from '@/types/ListSetBlock';
import { LunchBlock } from '@/types/LunchBlock';
import { ReferenceBlock } from '@/types/ReferenceBlock';
import { TeamGridBlock } from '@/types/TeamGridBlock';
import { TeamListBlock } from '@/types/TeamListBlock';
import { TextBlock } from '@/types/TextBlock';

export type Block =
  | ButtonTileGridBlock
  | CallToActionBlock
  | CallToActionListBlock
  | DocumentsBlock
  | FAQsBlock
  | FormBlock
  | HeroBlock
  | HighlightBlock
  | IconListBlock
  | IframeBlock
  | ImageTileGridBlock
  | ImpactBlock
  | JobsBlock
  | ListSetBlock
  | LunchBlock
  | ReferenceBlock
  | TeamGridBlock
  | TeamListBlock
  | TextBlock;

export type BlockProps = {
  _key: string;
  background?: LabeledColor;
};
