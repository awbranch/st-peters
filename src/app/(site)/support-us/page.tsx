import Block from '@/components/Block';
import { getSupportPage } from '@/sanity/sanity-utils';
import RichText from '@/components/RichText';
import Link from 'next/link';
import React from 'react';
import DonationRequestBlock from '@/components/DonationRequestBlock';

export default async function SupportUs() {
  const page = await getSupportPage();

  const categories = [
    { icon: '', ...page.learn },
    { icon: '', ...page.social },
    { icon: '', ...page.newsletter },
    { icon: '', ...page.food },
    { icon: '', ...page.school },
    { icon: '', ...page.merch },
    { icon: '', ...page.volunteer },
    { icon: '', ...page.donate },
    { icon: '', ...page.join },
  ];

  return (
    <main>
      <Block color={'pink'}>
        <h1 className="text-xl uppercase mb-4">{page.title}</h1>
        <RichText text={page.text} />
        <div className="text-center">
          <div className="inline-grid grid-cols-3 gap-6 mt-4">
            {categories.map((c, i) => (
              <Link key={i} href={c.url} title={c.title}>
                <div
                  className={
                    'bg-white text-center w-[270px] h-[270px] px-2 py-3 rounded'
                  }
                >
                  <h2 className={'text-pink text-lg leading-tight mb-1'}>
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
