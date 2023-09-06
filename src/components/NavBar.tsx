import React from 'react';
import Logo from '@/components/Logo';
import Hamburger from '@/components/Hamburger';
import { maxScreenWidth } from '@/utils/globals';

const menus = [
  { name: 'About', href: '#' },
  { name: 'News', href: '#' },
  { name: 'Volunteer', href: '#' },
  { name: 'Support Us', href: '#' },
];

export default function NavBar() {
  return (
    <div className="bg-green text-white px-2 md:px-4 py-2">
      <nav
        className="mx-auto flex flex-wrap items-center"
        style={{ maxWidth: maxScreenWidth }}
      >
        <div className="flex-1 flex">
          <a href="/">
            <Logo color={'white'} />
          </a>
        </div>
        <a href="/" className="lg:hidden block">
          <Hamburger color={'white'} />
        </a>
        <div className="hidden lg:block">
          <ul className="gap-x-3 flex">
            {menus.map((m) => (
              <li key={m.name}>
                <a className="hover:pb-[2px] hover:border-b-2" href={m.href}>
                  {m.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
