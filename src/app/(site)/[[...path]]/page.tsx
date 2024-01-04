import { getPageByPath, getPagesByVariant } from '@/sanity/sanity-utils';
import React from 'react';
import BlockList from '@/components/BlockList';
import Section from '@/components/Section';

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
        {page?.sections &&
          page.sections.map((s) => (
            <Section
              key={s.id?.current}
              id={s.id?.current}
              narrow={s?.narrow}
              color={s?.background?.label}
            >
              {s.blocks && <BlockList blocks={s.blocks} />}
            </Section>
          ))}
      </main>
    </>
  );
}
