import { BlockProps } from '@/types/Block';
import { ButtonTile } from '@/types/ButtonTile';

export type ButtonTileGridBlock = BlockProps & {
  _type: 'buttonTileGridBlock';
  buttons: ButtonTile[];
};
