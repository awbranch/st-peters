import { BlockProps } from '@/types/Block';
import { IconListItem } from '@/types/IconListItem';

export type IconListBlock = BlockProps & {
  _type: 'iconListBlock';
  items: IconListItem[];
};
