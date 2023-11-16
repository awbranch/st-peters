import { getLunchMenus } from '@/sanity/sanity-utils';
import NarrowContainer from '@/components/NarrowContainer';
import SimpleText from '@/components/SimpleText';
import React from 'react';

export const revalidate = 20;

export default async function Test() {
  const menus = await getLunchMenus();
  console.log('test get lunch menus');

  return (
    <div>
      <main>
        <NarrowContainer>
          {menus.map((m, i) => (
            <div key={i}>
              <>
                <div className={'mt-3 mb-2 font-bold'}>{m.date}</div>
                <SimpleText text={m.menu} />
              </>
            </div>
          ))}
        </NarrowContainer>
      </main>
    </div>
  );
}
