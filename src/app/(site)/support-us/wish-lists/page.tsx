import { getWishListsPage } from '@/sanity/sanity-utils';
import Header from '@/components/Header';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import LinkButton from '@/components/LinkButton';
import React from 'react';
import { WishList } from '@/types/WishList';
import { twJoin } from 'tailwind-merge';

const isUrgent = (w: WishList) => w.slug.current === 'urgent-needs';

export default async function WishLists() {
  const page = await getWishListsPage();

  return (
    <>
      <Header color={'white'} currentMenu={'support-us'} />
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
          <h1 className="text-xl mb-4">{page.title}</h1>
          <RichText text={page.text} />
        </Block>

        {page.wishlists.map((w, i) => (
          <section key={i} id={w.slug.current}>
            <Block color={isUrgent(w) ? 'blue' : 'white'}>
              <div>
                <h2
                  className={twJoin(
                    'inline-block text-lg border-b-4 pb-1 mb-3',
                    isUrgent(w) ? 'border-white' : 'border-black',
                  )}
                >
                  {w.title}
                </h2>
              </div>
              {w.description && <RichText text={w.description} />}
              <div className={twJoin(!isUrgent(w) && 'columns-1 sm:columns-2')}>
                <RichText text={w.text} />
              </div>
            </Block>
          </section>
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
    </>
  );
}
