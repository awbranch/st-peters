import React, { ImgHTMLAttributes } from 'react';
import { imageAttributes, urlFor } from '@/utils/sanity';
import { Image } from '@/types/Image';

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  image: Image;
  className?: string;
};

export default function SvgImage({ image, className }: Props) {
  const { width, height, format } = imageAttributes(image);

  if (format !== 'svg') {
    throw new Error('Image is not SVG: ' + urlFor(image).url());
  }

  return (
    <img
      alt={image.alt || ''}
      width={width}
      height={height}
      className={className}
      src={urlFor(image).url()}
    />
  );
}
