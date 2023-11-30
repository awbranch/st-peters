'use client';
import React from 'react';
import NarrowContainer from '@/components/NarrowContainer';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Inventory() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <NarrowContainer>
      <main className={'px-10'}>
        <section id={'headers'} className={'mt-20'}>
          <h1 className="text-5xl">Headers</h1>

          <header className="bg-white">
            <nav
              className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
              aria-label="Global"
            >
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-14 w-auto"
                  src="/logo-text-horiz.svg"
                  alt=""
                />
              </a>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </nav>
            <Dialog
              as="div"
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-10" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </header>
        </section>
        <section id={'buttons'} className={'mt-20'}>
          <h1 className="text-5xl">Buttons</h1>
          <div>
            <div className={'pt-4'}>
              <button
                type="button"
                className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Button text
              </button>
            </div>
            <div className={'pt-4'}>
              <button
                type="button"
                className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Button text
              </button>
            </div>
            <div className={'pt-4'}>
              <button
                type="button"
                className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Button text
              </button>
            </div>
            <div className={'pt-4'}>
              <button
                type="button"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Button text
              </button>
            </div>
            <div className={'pt-4'}>
              <button
                type="button"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Button text
              </button>
            </div>
          </div>
        </section>
        <section id={'disclosure'} className={'mt-20'}>
          <h1 className="text-5xl">Disclosure</h1>
          <div>
            <Disclosure>
              <Disclosure.Button className="py-2">
                Is team pricing available?
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </Disclosure.Panel>
            </Disclosure>
          </div>

          <div className={'mt-20'}>
            <Disclosure>
              {({ open }) => (
                /* Use the `open` state to conditionally change the direction of an icon. */
                <>
                  <Disclosure.Button>
                    Do you offer technical support?
                    <ChevronRightIcon
                      className={open ? 'rotate-90 transform' : ''}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel>No</Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <div className={'mt-20'}></div>
        </section>
        <section id={'combobox'} className={'mt-20'}>
          <h1 className="text-5xl">Combobox</h1>
        </section>
      </main>
    </NarrowContainer>
  );
}
