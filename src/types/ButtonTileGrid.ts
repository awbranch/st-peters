import { ComponentProps } from '@/types/Component';
import { ButtonTile } from '@/types/ButtonTile';

export type ButtonTileGrid = ComponentProps & {
  _type: 'buttonTileGrid';
  buttons: ButtonTile[];
};
