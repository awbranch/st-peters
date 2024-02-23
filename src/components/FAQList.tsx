'use client';
import React from 'react';
import RichText from '@/components/RichText';
import { FAQList as Props } from '@/types/FAQList';
import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { twJoin } from 'tailwind-merge';
import { userPaletteClasses } from '@/utils/globals';

export default function FAQList({ faqs, palette }: Props) {
  return (
    <div className="mx-auto">
      <dl
        className={twJoin(
          'mt-10 space-y-6 divide-y',
          userPaletteClasses[palette].divide,
        )}
      >
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between">
                    <span className="text-base text-left font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <MinusIcon className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12 opacity-80">
                  <RichText text={faq.answer} palette={palette} />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  );
}
