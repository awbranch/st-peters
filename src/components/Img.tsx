'use client';
import NextImage from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '@/sanity/sanity-utils';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface Props {
  image: SanityImageSource;
  alt: string;
}

export default function Img({ image, alt }: Props) {
  const imageProps = useNextSanityImage(client, image);

  // Make sure we don't download images larger than their intrinsic size
  const minWidth = Math.min(imageProps.width, 768);
  const maxWidth = Math.min(imageProps.width, 1200);

  return (
    <NextImage
      {...imageProps}
      style={{ width: '100%', height: 'auto' }}
      sizes={`(max-width: ${minWidth}px) 100vw, ${maxWidth}px`}
      alt={alt}
    />
  );
}
