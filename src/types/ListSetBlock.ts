import { BlockProps } from '@/types/Block';
import { ListSetList } from '@/types/ListSetList';

export type ListSetBlock = BlockProps & {
  _type: 'listSetBlock';
  lists: ListSetList[];
};
