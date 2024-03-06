import { Image } from '@/types/Image';

export type CaptionedImage = Image & {
  caption?: string;
};
