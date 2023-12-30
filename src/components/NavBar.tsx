'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import { Dialog } from '@headlessui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/pro-solid-svg-icons';
import { urlFor } from '@/sanity/sanity-utils';
import { Image } from '@/types/Image';

type Menu = {
  name: string;
  href: string;
};

const menus: Menu[] = [
  { name: 'About', href: '/about' },
  { name: 'News', href: '/news' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Support Us', href: '/support-us' },
];

const mobileMenus: Menu[] = [
  { name: 'About', href: '/about' },
  { name: 'News', href: '/news' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Support Us', href: '/support-us' },
];

type Props = {
  logo: Image;
};

export default function NavBar({ logo }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className={'px-4 md:px-10 py-4'}>
        <Container>
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">St. Peter&apos;s Kitchen</span>
              <img
                className="h-12 w-auto"
                src={urlFor(logo).url()}
                alt="St. Peter's Kitchen"
              />
            </Link>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <FontAwesomeIcon
                  className={'h-6 w-6'}
                  icon={faBars}
                  aria-hidden="true"
                />
              </button>
            </div>
            <ul className="hidden lg:flex lg:gap-x-6">
              {menus.map((m) => (
                <li key={m.href}>
                  <Link
                    className="text-base font-medium hover:pb-[2px] hover:border-b-2 border-black"
                    href={m.href}
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">St. Peter&amp;s Kitchen</span>
              <img
                className="h-10 w-auto"
                src={urlFor(logo).url()}
                alt="St. Peter's Kitchen"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>

              <FontAwesomeIcon
                className={'h-6 w-6'}
                icon={faXmark}
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <ul className="space-y-2 py-6">
                {mobileMenus.map((m) => (
                  <li key={m.href}>
                    <Link
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-black hover:bg-gray-50"
                      href={m.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {m.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
