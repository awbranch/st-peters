import { ComponentProps } from '@/types/Component';
import { ListSetList } from '@/types/ListSetList';

export type ListSet = ComponentProps & {
  _type: 'listSet';
  lists: ListSetList[];
};
