import React from 'react';
import { getWishListsPage } from '@/sanity/sanity-utils';
import BlockSectionList from '@/components/BlockSectionList';

export default async function WishLists() {
  const page = await getWishListsPage();

  return (
    <>
      <main>
        <BlockSectionList blocks={page.blocks} />
      </main>
    </>
  );
}
