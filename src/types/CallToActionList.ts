import { ComponentProps } from '@/types/Component';
import { CallToActionListItem } from '@/types/CallToActionListItem';

export type CallToActionList = ComponentProps & {
  _type: 'callToActionList';
  items: CallToActionListItem[];
};
