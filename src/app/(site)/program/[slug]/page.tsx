import { getProgram } from '@/sanity/sanity-utils';
import Block from '@/components/Block';
import ResponsiveImage from '@/components/ResponsiveImage';
import RichText from '@/components/RichText';
import React from 'react';
import Link from 'next/link';
import DonationRequestBlock from '@/components/DonationRequestBlock';
import { FaArrowLeft } from 'react-icons/fa6';

export default async function Page({ params }: { params: { slug: string } }) {
  const program = await getProgram(params.slug);

  return (
    <main>
      <section id="program">
        <Block color={'white'}>
          <div className="inline-flex gap-1 items-center">
            <FaArrowLeft className="inline-block" />
            <Link
              href="/#programs"
              className="text-base font-bold hover:underline hover:underline-offset-4"
            >
              PROGRAMS
            </Link>
          </div>
          <h1 className="text-xl uppercase mb-4">{program.title}</h1>
          <ResponsiveImage
            className="mb-4 w-full"
            image={program.mainImage}
            priority={true}
            sizes={'100vw'}
          />
          <RichText document={program.text} />
        </Block>
      </section>
      {program.donationRequest && (
        <section id="donation-request">
          <DonationRequestBlock
            color="white"
            orientation="right"
            request={program.donationRequest}
          />
        </section>
      )}
    </main>
  );
}
