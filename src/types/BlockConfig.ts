import { HeroBlockConfig } from '@/types/HeroBlockConfig';
import { LunchBlockConfig } from '@/types/LunchBlockConfig';
import { HighlightBlockConfig } from '@/types/HighlightBlockConfig';
import { ImpactBlockConfig } from '@/types/ImpactBlockConfig';
import { ProgramsBlockConfig } from '@/types/ProgramsBlockConfig';
import { InstagramBlockConfig } from '@/types/InstagramBlockConfig';

export type BlockConfig =
  | HeroBlockConfig
  | LunchBlockConfig
  | HighlightBlockConfig
  | ImpactBlockConfig
  | ProgramsBlockConfig
  | InstagramBlockConfig;
