import React from 'react';
import { CallToActionListBlock as Props } from '@/types/CallToActionListBlock';
import ResponsiveImage from '@/components/ResponsiveImage';
import RichText from '@/components/RichText';
import LinkButton from '@/components/LinkButton';
import Link from 'next/link';

export default function CallToActionListBlock({ ctas }: Props) {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-200 max-w-md mx-auto md:max-w-full"
    >
      {ctas.map((cta) => (
        <li key={cta._key} className="py-16 md:py-6">
          <div className="flex flex-col items-center md:items-start md:flex-row gap-x-8">
            <Link href={cta?.button?.link || '#'} className={'flex-none'}>
              <ResponsiveImage
                image={cta.image}
                className={'aspect-square w-64 md:w-40 h-fit rounded-lg'}
                sizes={'100vw'}
              />
            </Link>
            <div className="flex-auto text-center md:text-left">
              {cta.title && (
                <p className={'text-xl font-semibold mt-4 md:mt-1 mb-1'}>
                  {cta.title}
                </p>
              )}
              {cta.text && (
                <div className={'opacity-80'}>
                  <RichText text={cta.text} />
                </div>
              )}
            </div>
            {cta.button && (
              <div className="flex-none mt-6 md:mt-10">
                <LinkButton
                  size={'large'}
                  variant={cta.button.variant}
                  href={cta.button.link}
                  color={cta.button.color.label}
                  icon={cta.button.icon}
                  className={'w-32'}
                >
                  {cta.button.label}
                </LinkButton>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
