import Section from '@/components/Section';
import { splitText } from '@/utils/text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/pro-light-svg-icons';
import React from 'react';
import { H1 } from '@/components/Typography';

const features = [
  {
    name: 'Mailing Address',
    description: 'PO Box 11031\nRochester, NY 14611',
    icon: faEnvelope,
  },
  {
    name: 'Street Address',
    description: '681 Brown Street\nRochester, NY 14611',
    icon: faLocationDot,
  },
];

export default function Example() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <div className={'text-center'}>
          <h2 className={'text-base font-bold'}>Contact us at</h2>
          <H1 className={'my-6'}>St. Peter’s Kitchen</H1>
          <div className={'text-base font-medium space-y-1'}>
            <div>info@stpeterskitchen.org</div>
            <div>(585) 235-6511</div>
          </div>
        </div>
        <dl className="mx-auto my-16 grid gap-x-8 grid-cols-2 gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sunset">
                  <FontAwesomeIcon
                    className={'h-6 mx-auto text-white'}
                    aria-hidden="true"
                    icon={feature.icon as any}
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-1 text-base leading-7 text-gray-600">
                {splitText(feature.description).map((s, i) => (
                  <div key={i}>{s}</div>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className={'mx-auto max-w-4xl'}></div>
    </Section>
  );
}
