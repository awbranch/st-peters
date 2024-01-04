import { BlockProps } from '@/types/Block';
import { Document } from '@/types/Document';

export type DocumentsBlock = BlockProps & {
  _type: 'docsBlock';
  documents: Document[];
};
