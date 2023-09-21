import Block from '@/components/Block';
import { getWishListsPage } from '@/sanity/sanity-utils';
import RichText from '@/components/RichText';
import LinkButton from '@/components/LinkButton';
import React from 'react';
import SimpleText from '@/components/SimpleText';
import { WishList } from '@/types/WishList';
import cn from 'classnames';

const isUrgent = (w: WishList) => w.slug.current === 'urgent-needs';

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

      {page.wishlists.map((w, i) => (
        <Block key={i} color={isUrgent(w) ? 'blue' : 'white'}>
          <div>
            <h2
              className={cn(
                'inline-block text-lg uppercase border-b-4 pb-1 mb-3',
                isUrgent(w) ? 'border-white' : 'border-black',
              )}
            >
              {w.title}
            </h2>
          </div>
          {w.description && <SimpleText text={w.description} />}
          <div className={cn({ 'columns-2': !isUrgent(w) })}>
            <RichText text={w.text} />
          </div>
        </Block>
      ))}

      <Block center>
        <LinkButton
          href={'/contact'}
          size={'small'}
          variant={'outline'}
          color={'blue'}
          icon={'right'}
        >
          {page.contactLabel}
        </LinkButton>
      </Block>
    </main>
  );
}
