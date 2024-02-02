import { getPageByPath, getPages } from '@/sanity/sanity-utils';
import React from 'react';
import Section from '@/components/Section';
import BlockList from '@/components/BlockList';
import Container from '@/components/Container';
import BreadCrumbs from '@/components/BreadCrumbs';
import { titleCase } from 'text-case';
import type { Metadata } from 'next';

export const dynamicParams = false;

export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map((p) => ({ path: p.path.slice(1).split('/') }));
}

type Props = {
  params: { path: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const path = params && params.path ? params.path : [];
  const page = await getPageByPath(path);

  return {
    ...(page.title ? { title: page.title } : {}),
    ...(page.description ? { description: page.description } : {}),
    alternates: {
      canonical: page.path,
    },
  };
}

export default async function GenericPage({ params }: Props) {
  const path = params && params.path ? params.path : [];
  const page = await getPageByPath(path);

  return (
    <>
      <main>
        {path.length > 1 && (
          <Container maxWidth={'lg'}>
            <BreadCrumbs routes={convertToRoutes(path)} />
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

function convertToRoutes(paths: string[]) {
  let routes: { name: string; path: string }[] = [];
  let currentPath = '';
  paths.forEach((p) => {
    currentPath += `/${p}`;
    routes.push({
      name: titleCase(p.replace(/-/g, ' ')),
      path: currentPath,
    });
  });

  return routes;
}
