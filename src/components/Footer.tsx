import React from 'react';
import Link from 'next/link';
import { getFooter, urlFor } from '@/utils/sanity-utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Wave from '@/components/Wave';
import Section from '@/components/Section';
import { socialIcons, userPaletteClasses } from '@/utils/globals';
import { twJoin } from 'tailwind-merge';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default async function Footer() {
  const props = await getFooter();

  return (
    <footer>
      <Section id={'newsletter'} palette={'gray'}>
        <p className={'text-xl text-center font-semibold mb-3'}>
          {props.newsletterTitle}
        </p>
        <Link
          className={
            'flex flex-row items-center py-1.5 pl-6 pr-1.5 bg-white mx-auto max-w-xs border-[3px] border-black rounded-full group'
          }
          href={props.newsletterUrl}
        >
          <p
            className={
              'text-sm font-medium text-black tracking-wide leading-tight text-left [text-wrap:balance] group-hover:text-gray-600'
            }
          >
            {props.newsletterText}
          </p>
          <span
            className={
              'flex items-center bg-sunset text-white rounded-full h-12 aspect-square justify-center p-2 group-hover:bg-sunset-light'
            }
          >
            <ArrowRightIcon />
          </span>
        </Link>
      </Section>
      <div className={'bg-gray-100'}>
        <Wave />
      </div>
      <div className={twJoin(userPaletteClasses.black.block, 'pt-20 pb-56')}>
        <div
          className={
            'mx-auto px-4 md:px-10 max-w-3xl flex flex-col items-center'
          }
        >
          <section
            id={'address'}
            className={'flex flex-col gap-10 items-center'}
          >
            <Link href="/">
              <img
                className="block h-auto w-64"
                src={urlFor(props.logo).url()}
                alt="St. Peter's Kitchen"
              />
            </Link>
            <div
              className={
                'flex flex-col gap-2 text-base tracking-wider text-center'
              }
            >
              {props.contactEmail && (
                <a
                  className={'block hover:underline'}
                  href={'mailto:' + props.contactEmail}
                >
                  {props.contactEmail}
                </a>
              )}
              {props.contactPhone && (
                <a
                  className={'block hover:underline'}
                  href={'tel:' + props.contactPhone.replace(/\D/g, '')}
                >
                  {props.contactPhone}
                </a>
              )}
            </div>
            <div className={'grid grid-cols-1 xs:grid-cols-2 gap-10'}>
              {props.streetAddress && (
                <div>
                  <p className={'text-base font-semibold leading-7 mb-2'}>
                    Street Address
                  </p>
                  <Address text={props.streetAddress} />
                </div>
              )}
              {props.mailingAddress && (
                <div>
                  <p className={'text-base font-semibold leading-7 mb-2'}>
                    Mailing Address
                  </p>
                  <Address text={props.mailingAddress} />
                </div>
              )}
            </div>
          </section>

          <section
            id={'follow-us'}
            className={
              'flex flex-col gap-5 items-center px-20 py-16 my-16 border-y-2 border-white'
            }
          >
            <h2 className={'block text-base font-semibold'}>
              {props.socialTitle}
            </h2>
            <ul className={'flex flex-row gap-6'}>
              {props.social.map((s) => (
                <li key={s.service}>
                  <Link href={s.url} target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon
                      className={'h-[50px] text-white mx-auto'}
                      icon={socialIcons[s.service]}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section id={'site-map'}>
            <ul
              className={
                'grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-2'
              }
            >
              {props.siteMap.map((s) => (
                <li key={s.name} className={'text-center xs:text-left'}>
                  <Link
                    className={'hover:underline hover:underline-offset-4'}
                    href={s.url}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}

type AddressProps = {
  text: string;
};

export function Address({ text }: AddressProps) {
  return (
    <div className={'text-left'}>
      {text.split(/\n+/).map((l, i) => (
        <div key={i}>{l}</div>
      ))}
    </div>
  );
}
