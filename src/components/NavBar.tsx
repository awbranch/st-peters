'use client';

import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/pro-solid-svg-icons';
import { urlFor } from '@/sanity/sanity-utils';
import { Image } from '@/types/Image';
import { MenuItem } from '@/types/MenuItem';
import { Button } from '@/types/Button';
import { twJoin } from 'tailwind-merge';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

type Props = {
  logo: Image;
  wideLogo?: Image;
  menuItems: MenuItem[];
  actionButtons: Button[];
};

export default function NavBar({
  logo,
  wideLogo,
  menuItems,
  actionButtons,
}: Props) {
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
                className="h-12 w-auto hidden xs:inline-block"
                src={urlFor(wideLogo || logo).url()}
                alt="St. Peter's Kitchen"
              />
              <img
                className="h-12 w-auto inline-block xs:hidden"
                src={urlFor(logo).url()}
                alt="St. Peter's Kitchen"
              />
            </Link>
            <div className="flex items-center gap-x-6">
              <Popover.Group className="hidden lg:flex gap-x-6">
                {menuItems.map((item, i) => (
                  <span key={i}>
                    {item.action === 'link' ? (
                      <Link
                        className="text-base font-medium text-black"
                        href={item.url}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Popover className="relative">
                        <Popover.Overlay className="fixed inset-0" />
                        <Popover.Button className="flex items-center gap-x-1 text-base font-medium text-black">
                          {item.name}
                          <ChevronDownIcon
                            className="h-5 w-5 flex-none text-black"
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                            {item.menu.map((subItem, i) => (
                              <a
                                key={i}
                                href={subItem.url}
                                className="block rounded-lg px-3 py-2 text-sm font-medium leading-8 text-black hover:bg-gray-50"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </Popover.Panel>
                        </Transition>
                      </Popover>
                    )}
                  </span>
                ))}
              </Popover.Group>
              <div className="flex gap-x-6">
                {actionButtons.map((b, i) => (
                  <Link
                    key={i}
                    className={twJoin(
                      'text-base font-medium leading-6 rounded-md px-3 py-2 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-white ',
                      b.color.label === 'pink' &&
                        'bg-sunset hover:bg-sunset-light focus-visible:outline-sunset',
                      b.color.label === 'blue' &&
                        'bg-ocean hover:bg-ocean-light focus-visible:outline-ocean',
                      b.color.label === 'green' &&
                        'bg-grass hover:bg-grass-light focus-visible:outline-grass',
                      b.color.label === 'black' &&
                        'bg-black text-white hover:bg-gray-700 focus-visible:outline-black',
                    )}
                    href={b.link}
                  >
                    {b.label}
                  </Link>
                ))}
              </div>
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
            </div>
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
              <div className="space-y-2 py-6">
                {menuItems.map((item, i) =>
                  item.action === 'link' ? (
                    <Link
                      key={i}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-black hover:bg-gray-50"
                      href={item.action === 'link' ? item.url : '#'}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div key={i}>
                      <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium leading-7 text-black hover:bg-gray-50">
                              {item.name}
                              <ChevronDownIcon
                                className={twJoin(
                                  open ? 'rotate-180' : '',
                                  'h-5 w-5 flex-none',
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 space-y-2">
                              {item.menu.map((subItem) => (
                                <Link
                                  key={i}
                                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-black hover:bg-gray-50"
                                  href={subItem.url}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
