import React from 'react';
import { getVolunteerPage } from '@/sanity/sanity-utils';
import BlockSectionList from '@/components/BlockSectionList';

export default async function Volunteer() {
  const page = await getVolunteerPage();

  return (
    <>
      <main>
        <BlockSectionList blocks={page.blocks} />
      </main>
    </>
  );
}
