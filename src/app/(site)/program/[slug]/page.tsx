import { getProgram, getPrograms } from '@/sanity/sanity-utils';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import React from 'react';
import DonationRequestBlock from '@/components/DonationRequestBlock';
import OtherProgramsBlock from '@/components/OtherProgramsBlock';
import { H1 } from '@/components/Typography';

export async function generateStaticParams() {
  const programs = await getPrograms();
  return programs.map((p) => ({
    slug: p.slug.current,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const program = await getProgram(params.slug);

  return (
    <>
      <main>
        <section id="program">
          <Block color={'white'}>
            <H1>{program.title}</H1>
            <RichText text={program.text} />
          </Block>
        </section>
        {program.donationRequests &&
          program.donationRequests.map((d) => (
            <DonationRequestBlock key={d.slug.current} {...d} />
          ))}
        <section id="other-programs">
          <OtherProgramsBlock title="Other Programs" besides={params.slug} />
        </section>
      </main>
    </>
  );
}
