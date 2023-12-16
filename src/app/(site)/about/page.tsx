import React from 'react';
import { getAboutPage } from '@/sanity/sanity-utils';
import BlockSectionList from '@/components/BlockSectionList';

export default async function AboutUs() {
  const page = await getAboutPage();

  return (
    <main>
      <BlockSectionList blocks={page.blocks} />
    </main>
  );
}
