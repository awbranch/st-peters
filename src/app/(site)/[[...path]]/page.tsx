import { getPageByPath, getPages } from '@/sanity/sanity-utils';
import React from 'react';
import Section from '@/components/Section';
import BlockList from '@/components/BlockList';
import Container from '@/components/Container';
import BreadCrumbs from '@/components/BreadCrumbs';

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
        {path.length > 1 && (
          <Container maxWidth={'lg'}>
            <BreadCrumbs path={path} />
          </Container>
        )}
        {page?.sections?.map((s) => (
          <Section
            key={s.id?.current}
            id={s.id?.current}
            color={s?.background?.label}
            maxWidth={page.maxWidth}
          >
            {s?.blocks && <BlockList blocks={s.blocks} />}
          </Section>
        ))}
      </main>
    </>
  );
}
