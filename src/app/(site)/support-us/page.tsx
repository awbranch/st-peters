import Block from '@/components/Block';
import { getSupportPage } from '@/sanity/sanity-utils';
import RichText from '@/components/RichText';
import Link from 'next/link';
import React from 'react';
import DonationRequestBlock from '@/components/DonationRequestBlock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpenReader,
  faThumbsUp,
  faTypewriter,
  faCanFood,
  faBackpack,
  faShirt,
  faHandHeart,
  faCircleDollar,
  faPeopleGroup,
} from '@fortawesome/pro-solid-svg-icons';

export default async function SupportUs() {
  const page = await getSupportPage();

  const categories = [
    { icon: faBookOpenReader, ...page.learn },
    { icon: faThumbsUp, ...page.social },
    { icon: faTypewriter, ...page.newsletter },
    { icon: faCanFood, ...page.food },
    { icon: faBackpack, ...page.school },
    { icon: faShirt, ...page.merch },
    { icon: faHandHeart, ...page.volunteer },
    { icon: faCircleDollar, ...page.donate },
    { icon: faPeopleGroup, ...page.join },
  ];

  return (
    <main>
      <Block color={'pink'}>
        <div className={'max-w-[930px] mx-auto'}>
          <h1 className="text-xl uppercase mb-4">{page.title}</h1>
          <RichText text={page.text} />
        </div>
        <div className="text-center">
          <div className="inline-grid grid-cols-3 gap-6 mt-4">
            {categories.map((c, i) => (
              <Link key={i} href={c.url} title={c.title}>
                <div
                  className={
                    'bg-white text-center w-[270px] h-[270px] px-2 py-3 rounded'
                  }
                >
                  <FontAwesomeIcon
                    className={'h-[40px] text-pink mx-auto mb-1'}
                    icon={c.icon}
                  />
                  <h2 className={'text-pink text-lg leading-tight mb-[15px]'}>
                    {c.title}
                  </h2>
                  <div className={'text-black'}>{c.text}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Block>
      {page.singleDonation && (
        <section id="donate">
          <DonationRequestBlock
            color="white"
            orientation="right"
            request={page.singleDonation}
          />
        </section>
      )}
      {page.recurringDonation && (
        <section id="join">
          <DonationRequestBlock
            color="white"
            orientation="left"
            request={page.recurringDonation}
          />
        </section>
      )}
    </main>
  );
}
