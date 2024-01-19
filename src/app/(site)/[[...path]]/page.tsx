import { getPageByPath, getPages } from '@/sanity/sanity-utils';
import React from 'react';
import Section from '@/components/Section';
import Block from '@/components/Block';

export const dynamicParams = false;

export async function generateStaticParams() {
  const pages = await getPages();
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
        {page?.sections?.map((s) => (
          <Section
            key={s.id?.current}
            id={s.id?.current}
            color={s?.background?.label}
            maxWidth={page.maxWidth}
          >
            {s?.blocks && (
              <div className={'space-y-12'}>
                {s.blocks.map((b) => (
                  <Block key={b._key} block={b} />
                ))}
              </div>
            )}
          </Section>
        ))}
      </main>
    </>
  );
}
