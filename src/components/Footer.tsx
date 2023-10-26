import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { getSettings } from '@/sanity/sanity-utils';
import { SocialMediaService } from '@/types/SocialMediaService';
import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedinIn,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Wave from '@/components/Wave';
import NewsletterSignupForm from '@/components/NewsletterSignupForm';

const socialIcons: { [K in SocialMediaService]: IconDefinition } = {
  facebook: faFacebookF,
  instagram: faInstagram,
  youtube: faYoutube,
  twitter: faTwitter,
  x: faXTwitter,
  linkedin: faLinkedinIn,
};

export default async function Footer() {
  const settings = await getSettings();
  const { address } = settings;

  return (
    <footer>
      <section id={'newsletter'}>
        <Block color={'gray'} center>
          <h2 className={'text-lg mb-2'}>{settings.newsletterSignupTitle}</h2>
          <NewsletterSignupForm config={settings.newsletterConfig} />
          <div className={'mt-1'}>
            <RichText text={settings.pastNewslettersMessage} />
          </div>
        </Block>

        <div className={'bg-gray-100'}>
          <Wave />
        </div>
      </section>
      <div>
        <Block color={'black'} center>
          <div>
            <div
              className={
                'border-white border-b-2 inline-block w-full xs:w-[440px]'
              }
            >
              <div className={'inline-block'}>
                <Link href="/">
                  <Logo color={'white'} orientation={'vertical'} />
                </Link>
                <section id={'address'} className={'my-5'}>
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
          <div>
            <div
              className={
                'border-white border-b-2 inline-block w-full xs:w-[440px]'
              }
            >
              <section id={'follow-us'} className={'inline-block my-5'}>
                <h2 className={'text-lg'}>{settings.socialTitle}</h2>
                <ul className={'flex flex-row gap-6 mt-4'}>
                  {settings.social.map((s) => (
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
                className={
                  'columns-1 sm:columns-2 md:columns-3 gap-5 text-left'
                }
              >
                <ul>
                  {settings.siteMap.map((s) => (
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
        </Block>
      </div>
    </footer>
  );
}
