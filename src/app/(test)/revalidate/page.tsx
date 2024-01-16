import { getLunchMenus } from '@/sanity/sanity-utils';
import Container from '@/components/Container';
import SimpleText from '@/components/SimpleText';
import React from 'react';

export const revalidate = 20;

export default async function Test() {
  const menus = await getLunchMenus();

  return (
    <div>
      <main>
        <Container maxWidth={'md'}>
          {menus.map((m, i) => (
            <div key={i}>
              <>
                <div className={'mt-3 mb-2 font-bold'}>{m.date}</div>
                <SimpleText text={m.menu} />
              </>
            </div>
          ))}
        </Container>
      </main>
    </div>
  );
}
