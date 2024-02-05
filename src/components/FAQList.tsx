'use client';
import React from 'react';
import RichText from '@/components/RichText';
import { FAQList as Props } from '@/types/FAQList';
import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/pro-solid-svg-icons';

export default function FAQList({ faqs }: Props) {
  return (
    <div className="mx-auto">
      <dl className="mt-10 space-y-6 divide-y divide-gray-300/50">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12 opacity-80">
                  <RichText text={faq.answer} />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  );
}
