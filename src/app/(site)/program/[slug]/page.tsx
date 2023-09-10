import { getProgram } from '@/sanity/sanity-utils';
import Block from '@/components/Block';
import ResponsiveImage from '@/components/ResponsiveImage';
import RichText from '@/components/RichText';
import React from 'react';
import Link from 'next/link';

export default async function Page({ params }: { params: { slug: string } }) {
  const program = await getProgram(params.slug);

  return (
    <main>
      <Block bg={'white'}>
        <div>
          <Link
            href="/#programs"
            className="text-base font-bold hover:underline hover:underline-offset-4"
          >
            PROGRAMS
          </Link>
        </div>
        <h1 className="text-xl uppercase mb-4">{program.title}</h1>
        <ResponsiveImage
          className="mb-4 w-full"
          image={program.mainImage}
          priority={true}
          sizes={'100vw'}
        />

        <RichText document={program.text} />
      </Block>
    </main>
  );
}
