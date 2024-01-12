import { BlockProps } from '@/types/Block';
import { Document } from '@/types/Document';
import { PortableTextBlock } from 'sanity';

export type DocumentsBlock = BlockProps & {
  _type: 'docsBlock';
  title?: string;
  text?: PortableTextBlock[];
  documents: Document[];
};
