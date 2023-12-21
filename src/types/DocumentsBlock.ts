import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';
import { Document } from '@/types/Document';

export type DocumentsBlock = BlockProps & {
  _type: 'docsBlock';
  text: PortableTextBlock[];
  documents: Document[];
};
