import { BlockProps } from '@/types/Block';
import { ImageTile } from '@/types/ImageTile';
import { PortableTextBlock } from 'sanity';

export type ImageTileGridBlock = BlockProps & {
  _type: 'imageTileGridBlock';
  title?: string;
  text?: PortableTextBlock[];
  images: ImageTile[];
};
