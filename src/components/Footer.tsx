import React from 'react';
import Link from 'next/link';
import { getFooter, urlFor } from '@/utils/sanity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Wave from '@/components/Wave';
import Section from '@/components/Section';
import { socialIcons, userPaletteClasses } from '@/utils/globals';
import { twJoin } from 'tailwind-merge';
import NewsletterButton from '@/components/NewsletterButton';

export default async function Footer() {
  const props = await getFooter();

  return (
    <footer>
      <Section id={'newsletter'} palette={'gray'}>
        <div className={'text-center'}>
          <NewsletterButton
            href={props.newsletterUrl}
            label={props.newsletterLabel}
          />
        </div>
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
              {props.contactFormLabel && props.contactFormLink && (
                <Link
                  className={'block hover:underline'}
                  href={props.contactFormLink}
                >
                  {props.contactFormLabel}
                </Link>
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
            <ul className={'columns-1 sm:columns-2 md:columns-3 gap-16'}>
              {props.siteMap.map((s) => (
                <li
                  key={s.name}
                  className={
                    'text-center sm:text-left leading-loose sm:leading-relaxed'
                  }
                >
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
