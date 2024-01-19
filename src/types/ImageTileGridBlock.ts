import { BlockProps } from '@/types/Block';
import { ImageTile } from '@/types/ImageTile';

export type ImageTileGridBlock = BlockProps & {
  _type: 'imageTileGridBlock';
  images: ImageTile[];
};
