import { Image } from '@/types/Image';

export type ButtonTileConfig = {
  _type: 'buttonTile';
  _key: string;
  icon: Image;
  title: string;
  text: string;
  url: string;
};
