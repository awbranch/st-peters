import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import Hamburger from '@/components/Hamburger';
import Container from '@/components/Container';
import { twJoin } from 'tailwind-merge';

type Menu = {
  name: string;
  slug: string;
};

export const Menus: Menu[] = [
  { name: 'About', slug: 'about' },
  { name: 'News', slug: 'news' },
  { name: 'Volunteer', slug: 'volunteer' },
  { name: 'Support Us', slug: 'support-us' },
];

export default function NavBar() {
  return (
    <div className={twJoin('px-2 md:px-4 py-2 bg-white text-black')}>
      <Container>
        <nav className="flex flex-wrap items-center">
          <div className="flex-1 flex">
            <Link href="/">
              <Logo logoColor={'color'} textColor={'black'} />
            </Link>
          </div>
          <Link href="/" className="lg:hidden block">
            <Hamburger color={'black'} />
          </Link>
          <div className="hidden lg:block">
            <ul className="gap-x-3 flex">
              {Menus.map((m) => (
                <li key={m.slug}>
                  <Link
                    className={'hover:pb-[2px] hover:border-b-2 border-black'}
                    href={'/' + m.slug}
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </div>
  );
}
