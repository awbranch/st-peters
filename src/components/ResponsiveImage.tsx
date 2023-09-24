import { imageAttributes, urlFor } from '@/sanity/sanity-utils';
import { maxScreenWidth } from '@/utils/globals';
import { Image } from '@/types/Image';
import React from 'react';

type Props = React.HTMLAttributes<HTMLElement> & {
  image: Image;
  sizes: string;
  priority?: boolean;
  className?: string;
};

const widths = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

export default function ResponsiveImage({
  image,
  sizes,
  priority = false,
  className,
}: Props) {
  const { width, height } = imageAttributes(image);

  const src =
    width <= maxScreenWidth
      ? urlFor(image).url()
      : urlFor(image).width(maxScreenWidth).url();

  const srcSet = widths
    .filter((w) => w < width)
    .concat([width])
    .map(
      (w) => `${urlFor(image).width(w).auto('format').quality(75).url()} ${w}w`,
    )
    .join(', ');

  return (
    <img
      alt={image.alt || ''}
      fetchPriority={priority ? 'high' : undefined}
      width={width}
      height={height}
      decoding={'async'}
      className={className}
      sizes={sizes}
      srcSet={srcSet}
      src={src}
    />
  );
}
