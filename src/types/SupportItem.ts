import { SupportCategory } from '@/types/SupportCategory';
import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';

export type SupportItem = SupportCategory & {
  icon: IconDefinition;
};
