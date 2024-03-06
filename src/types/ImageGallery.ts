import { ComponentProps } from '@/types/Component';
import { ImageGalleryItem } from '@/types/ImageGalleryItem';

export type ImageGallery = ComponentProps & {
  _type: 'imageGallery';
  items: ImageGalleryItem[];
};
