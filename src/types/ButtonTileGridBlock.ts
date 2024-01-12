import { BlockProps } from '@/types/Block';
import { ButtonTile } from '@/types/ButtonTile';
import { PortableTextBlock } from 'sanity';

export type ButtonTileGridBlock = BlockProps & {
  _type: 'buttonTileGridBlock';
  title?: string;
  text?: PortableTextBlock[];
  buttons: ButtonTile[];
};
