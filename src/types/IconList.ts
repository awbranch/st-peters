import { ComponentProps } from '@/types/Component';
import { IconListItem } from '@/types/IconListItem';

export type IconList = ComponentProps & {
  _type: 'iconList';
  items: IconListItem[];
};
