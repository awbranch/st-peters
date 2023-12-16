import React from 'react';
import { getHomePage } from '@/sanity/sanity-utils';
import BlockSectionList from '@/components/BlockSectionList';

export default async function Home() {
  const page = await getHomePage();

  console.log(page);

  return (
    <>
      <main>
        <BlockSectionList blocks={page.blocks} />
      </main>
    </>
  );
}
