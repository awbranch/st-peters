import Block from '@/components/Block';
import { getWishListsPage } from '@/sanity/sanity-utils';
import RichText from '@/components/RichText';
import LinkButton from '@/components/LinkButton';
import React from 'react';

export default async function WishLists() {
  const page = await getWishListsPage();

  return (
    <main>
      <Block>
        <LinkButton
          href="/support-us"
          size={'small'}
          icon={'left'}
          variant={'text'}
        >
          SUPPORT US
        </LinkButton>
        <h1 className="text-xl uppercase mb-4">{page.title}</h1>
        <RichText text={page.text} />
      </Block>
    </main>
  );
}
