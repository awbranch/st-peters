import React from 'react';
import { getSupportPage } from '@/sanity/sanity-utils';
import BlockSectionList from '@/components/BlockSectionList';

export default async function SupportUs() {
  const page = await getSupportPage();

  return (
    <>
      <main>
        <BlockSectionList blocks={page.blocks} />
      </main>
    </>
  );
}
