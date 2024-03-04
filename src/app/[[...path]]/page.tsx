import {
  getPageByPath,
  getPages,
  getSocialCards,
  urlFor,
} from '@/utils/sanity';
import React from 'react';
import Section from '@/components/Section';
import ComponentList from '@/components/ComponentList';
import Container from '@/components/Container';
import BreadCrumbs from '@/components/BreadCrumbs';
import { titleCase } from 'text-case';
import type { Metadata } from 'next';

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
  const path = params && params.path ? params.path : [];
  const page = await getPageByPath(path);
  const socialCards = await getSocialCards();

  let meta: Metadata = {};
  if (page) {
    if (page.title) {
      meta.title = page.title + " - St. Peter's Kitchen";
    }
    if (page.description) {
      meta.description = page.description;
    }
    if (page.path) {
      meta.alternates = {
        canonical: page.path,
      };

      if (socialCards) {
        if (socialCards.opengraph) {
          meta.openGraph = {
            title: "St. Peter's Kitchen",
            type: 'website',
            url: page.path,
            images: urlFor(socialCards.opengraph).url(),
          };
        }

        if (socialCards.twitter) {
          meta.twitter = {
            title: "St. Peter's Kitchen",
            images: urlFor(socialCards.twitter).url(),
          };
        }
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
      {page?.blocks
        ?.filter((b) => !b.hidden)
        ?.map((b) => (
          <Section
            key={b._key}
            id={b.id.current}
            palette={b.palette}
            maxWidth={page.maxWidth}
          >
            {b?.components && <ComponentList components={b.components} />}
          </Section>
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
