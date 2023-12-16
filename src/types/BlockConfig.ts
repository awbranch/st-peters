import { HeroBlockConfig } from '@/types/HeroBlockConfig';
import { LunchBlockConfig } from '@/types/LunchBlockConfig';
import { HighlightBlockConfig } from '@/types/HighlightBlockConfig';
import { ImpactBlockConfig } from '@/types/ImpactBlockConfig';
import { ProgramsBlockConfig } from '@/types/ProgramsBlockConfig';
import { InstagramBlockConfig } from '@/types/InstagramBlockConfig';
import { TextBlockConfig } from '@/types/TextBlockConfig';
import { GoogleMapBlockConfig } from '@/types/GoogleMapBlockConfig';
import { TeamBlockConfig } from '@/types/TeamBlockConfig';
import { JobsBlockConfig } from '@/types/JobsBlockConfig';
import { DocumentsBlockConfig } from '@/types/DocumentsBlockConfig';

export type BlockConfig =
  | HeroBlockConfig
  | LunchBlockConfig
  | HighlightBlockConfig
  | ImpactBlockConfig
  | ProgramsBlockConfig
  | InstagramBlockConfig
  | TextBlockConfig
  | GoogleMapBlockConfig
  | TeamBlockConfig
  | JobsBlockConfig
  | DocumentsBlockConfig;
