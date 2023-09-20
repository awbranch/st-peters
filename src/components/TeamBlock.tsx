import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import Link from 'next/link';
import ResponsiveImage from '@/components/ResponsiveImage';
import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';

interface Props {
  title: string;
  text: PortableTextBlock[];
  staffPhoto: Image;
  staffLabel: string;
  boardPhoto: Image;
  boardLabel: string;
}

export default function TeamBlock({
  title,
  text,
  staffPhoto,
  staffLabel,
  boardPhoto,
  boardLabel,
}: Props) {
  return (
    <Block color="white">
      <h1 className="text-xl mb-3">{title}</h1>
      <RichText document={text} />

      <div className="grid grid-cols-2 gap-4 mt-4">
        {[
          { photo: staffPhoto, label: staffLabel, slug: 'staff' },
          { photo: boardPhoto, label: boardLabel, slug: 'board' },
        ].map((g) => (
          <div key={g.slug}>
            <div className="h-[360px]">
              <Link href={`/about/${g.slug}`} title={g.label}>
                <ResponsiveImage
                  image={g.photo}
                  priority={false}
                  sizes={'50vw'}
                  className={'object-cover w-full h-[360px] mx-auto'}
                />
              </Link>
            </div>
            <h2 className="text-lg mt-1 text-center">{g.label}</h2>
          </div>
        ))}
      </div>
    </Block>
  );
}
