import React, { ImgHTMLAttributes } from 'react';
import { imageAttributes, urlFor } from '@/utils/sanity';
import { maxPageWidth } from '@/utils/globals';
import { Image } from '@/types/Image';
import { twMerge } from 'tailwind-merge';

type Props = ImgHTMLAttributes<HTMLImageElement> & {
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
  if (!image?.asset) {
    return <></>;
  }

  const { width, height } = imageAttributes(image);

  const objectPosition = image.hotspot
    ? `${image.hotspot.x * 100}% ${image.hotspot.y * 100}%`
    : undefined;

  // Small images get scaled up to the width or height you specify. To avoid this use &fit=max.

  const src =
    width <= maxPageWidth
      ? urlFor(image).url()
      : urlFor(image).width(maxPageWidth).url();

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
      className={twMerge('object-cover w-full', className)}
      sizes={sizes}
      srcSet={srcSet}
      src={src}
      style={{
        objectPosition: objectPosition,
      }}
    />
  );
}
