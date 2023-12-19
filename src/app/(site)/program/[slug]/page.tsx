import { getProgram, getPrograms } from '@/sanity/sanity-utils';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import React from 'react';
import DonationRequestBlock from '@/components/DonationRequestBlock';
import LinkButton from '@/components/LinkButton';
import OtherProgramsBlock from '@/components/OtherProgramsBlock';

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
            <LinkButton
              href="/#programs"
              size={'small'}
              icon={'left'}
              variant={'text'}
            >
              PROGRAMS
            </LinkButton>
            <h1 className="text-xl mb-4">{program.title}</h1>
            <RichText text={program.text} />
          </Block>
        </section>
        {program.donationRequestBlock && (
          <DonationRequestBlock {...program.donationRequestBlock} />
        )}
        <section id="other-programs">
          <OtherProgramsBlock title="Other Programs" besides={params.slug} />
        </section>
      </main>
    </>
  );
}
