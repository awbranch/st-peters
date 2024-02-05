import { ComponentProps } from '@/types/Component';
import { DocumentListItem } from '@/types/DocumentListItem';

export type DocumentList = ComponentProps & {
  _type: 'documentList';
  items: DocumentListItem[];
};
