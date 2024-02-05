import { ComponentProps } from '@/types/Component';
import { ImageTile } from '@/types/ImageTile';

export type ImageTileGrid = ComponentProps & {
  _type: 'imageTileGrid';
  images: ImageTile[];
};
