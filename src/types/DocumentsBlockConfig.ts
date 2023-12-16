import { PortableTextBlock, Slug } from 'sanity';
import { ColorStruct } from '@/types/Color';
import { Document } from '@/types/Document';

export type DocumentsBlockConfig = {
  _type: 'docsBlock';
  _key: string;
  slug: Slug;
  background: ColorStruct;
  text: PortableTextBlock[];
  documents: Document[];
};
