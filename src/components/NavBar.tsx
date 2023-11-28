import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import Hamburger from '@/components/Hamburger';
import Container from '@/components/Container';
import type { Color } from '@/types/Color';
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

export type NavBarProps = {
  currentMenu?: string;
  color?: Color;
};

export default function NavBar({
  currentMenu = 'home',
  color = 'white',
}: NavBarProps) {
  return (
    <div
      className={twJoin(
        'px-2 md:px-4 py-2',
        color === 'green' && 'bg-grass text-white',
        color === 'blue' && 'bg-ocean text-white',
        color === 'pink' && 'bg-sunset text-white',
        color === 'black' && 'bg-black text-white',
        color === 'white' && 'bg-white text-black',
      )}
    >
      <Container>
        <nav className="flex flex-wrap items-center">
          <div className="flex-1 flex">
            <Link href="/">
              <Logo color={color === 'white' ? 'black' : 'white'} />
            </Link>
          </div>
          <Link href="/" className="lg:hidden block">
            <Hamburger color={color === 'white' ? 'black' : 'white'} />
          </Link>
          <div className="hidden lg:block">
            <ul className="gap-x-3 flex">
              {Menus.map((m) => (
                <li key={m.slug}>
                  <Link
                    className={twJoin(
                      'hover:pb-[2px] hover:border-b-2',
                      currentMenu === m.slug && 'pb-[2px] border-b-2',
                      color === 'white' ? 'border-black' : 'border-white',
                    )}
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
