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
import { FAQsBlockConfig } from '@/types/FAQsBlockConfig';
import { VolunteerFormBlockConfig } from '@/types/VolunteerFormBlockConfig';
import { DonationRequestBlockConfig } from '@/types/DonationRequestBlockConfig';

export type BlockConfig =
  | DocumentsBlockConfig
  | DonationRequestBlockConfig
  | FAQsBlockConfig
  | GoogleMapBlockConfig
  | HeroBlockConfig
  | HighlightBlockConfig
  | ImpactBlockConfig
  | InstagramBlockConfig
  | JobsBlockConfig
  | LunchBlockConfig
  | ProgramsBlockConfig
  | TeamBlockConfig
  | TextBlockConfig
  | VolunteerFormBlockConfig;
