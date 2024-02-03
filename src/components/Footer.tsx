import React from 'react';
import RichText from '@/components/RichText';
import Link from 'next/link';
import { getFooter, urlFor } from '@/utils/sanity-utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Wave from '@/components/Wave';
import NewsletterSignupForm from '@/components/NewsletterSignupForm';
import Section from '@/components/Section';
import { socialIcons } from '@/utils/globals';

export default async function Footer() {
  const props = await getFooter();
  const { address } = props;

  return (
    <footer>
      <Section id={'newsletter'} color={'gray'} className="text-center">
        <h2 className={'text-lg mb-2'}>{props.newsletterSignupTitle}</h2>
        <NewsletterSignupForm config={props.newsletterConfig} />
        <div className={'mt-1'}>
          <RichText text={props.pastNewslettersMessage} />
        </div>
      </Section>
      <div className={'bg-gray-100'}>
        <Wave />
      </div>
      <Section color={'black'} className={'text-center'}>
        <div>
          <div
            className={
              'border-white border-b-2 inline-block w-full xs:w-[440px]'
            }
          >
            <div className={'inline-block'}>
              <div className={'text-center'}>
                <Link href="/">
                  <img
                    className="h-auto w-64"
                    src={urlFor(props.logo).url()}
                    alt="St. Peter's Kitchen"
                  />
                </Link>
                <section id={'address'} className={'my-5 inline-block'}>
                  <div className={'text-left'}>
                    <div>{address.street}</div>
                    {address.street2 && <div>{address.street2}</div>}
                    <div>{`${address.city}, ${address.state} ${address.zip}`}</div>
                    <div className={'mt-2'}>{address.phone}</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={
              'border-white border-b-2 inline-block w-full xs:w-[440px]'
            }
          >
            <section id={'follow-us'} className={'inline-block my-5'}>
              <h2 className={'text-lg'}>{props.socialTitle}</h2>
              <ul className={'flex flex-row gap-6 mt-4'}>
                {props.social.map((s) => (
                  <li key={s.service}>
                    <Link
                      href={s.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <FontAwesomeIcon
                        className={'h-[50px] text-white mx-auto mb-1'}
                        icon={socialIcons[s.service]}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        <div>
          <div className={'inline-block mt-5'}>
            <section
              id={'site-map'}
              className={'columns-1 sm:columns-2 md:columns-3 gap-5 text-left'}
            >
              <ul>
                {props.siteMap.map((s) => (
                  <li key={s.name} className={'mb-2'}>
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
      </Section>
    </footer>
  );
}
