import React from 'react';
import Logo from '@/components/Logo';
import Hamburger from '@/components/Hamburger';
import { maxScreenWidth } from '@/utils/globals';
import Link from 'next/link';

const menus = [
  { name: 'About', href: '/about' },
  { name: 'News', href: '/news' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Support Us', href: '/support-us' },
];

export default function NavBar() {
  return (
    <div className="bg-green text-white px-2 md:px-4 py-2">
      <nav
        className="mx-auto flex flex-wrap items-center"
        style={{ maxWidth: maxScreenWidth }}
      >
        <div className="flex-1 flex">
          <Link href="/">
            <Logo color={'white'} />
          </Link>
        </div>
        <Link href="/" className="lg:hidden block">
          <Hamburger color={'white'} />
        </Link>
        <div className="hidden lg:block">
          <ul className="gap-x-3 flex">
            {menus.map((m) => (
              <li key={m.name}>
                <Link className="hover:pb-[2px] hover:border-b-2" href={m.href}>
                  {m.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
