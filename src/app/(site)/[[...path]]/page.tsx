import { getPageByPath, getPagesByVariant } from '@/sanity/sanity-utils';
import React from 'react';
import Section from '@/components/Section';
import Block from '@/components/Block';

export const dynamicParams = false;

export async function generateStaticParams() {
  const pages = await getPagesByVariant('generic');
  return pages.map((p) => ({ path: p.path.slice(1).split('/') }));
}

type Props = {
  params: { path: string[] };
};

export default async function GenericPage({ params }: Props) {
  const path = params && params.path ? params.path : [];
  const page = await getPageByPath(path);

  return (
    <>
      <main>
        {page?.blocks &&
          page.blocks.map((b) => (
            <Section
              key={b.id?.current}
              id={b.id?.current}
              color={b?.background}
            >
              {b.block && <Block block={b.block} />}
            </Section>
          ))}
      </main>
    </>
  );
}
