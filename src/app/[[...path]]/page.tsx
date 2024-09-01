import {
  getHeader,
  getPageByPath,
  getPages,
  getSettings,
  urlFor,
} from '@/utils/sanity';
import React from 'react';
import Block from '@/components/Block';
import Container from '@/components/Container';
import BreadCrumbs from '@/components/BreadCrumbs';
import { titleCase } from 'text-case';
import type { Metadata } from 'next';
import { socialMediaImageDimensions } from '@/utils/globals';

// This line should be removed if exporting static pages
export const dynamicParams = false;

export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map((p) => ({ path: p.path.slice(1).split('/') }));
}

type Props = {
  params: { path: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const settings = await getSettings();
  const path = params && params.path ? params.path : [];
  const page = await getPageByPath(path);
  const socialImage = page?.socialImage || (await getHeader()).socialImage;

  let meta: Metadata = {};
  if (page) {
    if (page.title) {
      meta.title = page.title + ' - ' + settings.title;
    }
    if (page.description) {
      meta.description = page.description;
    }
    if (page.path) {
      meta.alternates = {
        canonical: page.path,
      };

      if (socialImage) {
        const { width, height } = socialMediaImageDimensions;
        const title = settings.title + (page.title ? ' - ' + page.title : '');
        meta.openGraph = {
          title: title,
          type: 'website',
          url: page.path,
          images: urlFor(socialImage)
            .fit('fill')
            .width(width)
            .height(height)
            .url(),
        };
      }
    }
  }

  return meta;
}

export default async function GenericPage({ params }: Props) {
  const path = params && params.path ? params.path : [];
  const page = await getPageByPath(path);

  return (
    <>
      {path.length > 1 && (
        <Container maxWidth={'lg'}>
          <BreadCrumbs routes={convertToRoutes(path)} />
        </Container>
      )}
      {page?.blocks?.map((b, i) => (
        <Block key={b._key} {...b} first={i === 0} />
      ))}
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
