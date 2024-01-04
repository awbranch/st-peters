import { getProgram, getPrograms } from '@/sanity/sanity-utils';
import RichText from '@/components/RichText';
import React from 'react';
import DonationRequestBlock from '@/components/DonationRequestBlock';
import OtherProgramsBlock from '@/components/OtherProgramsBlock';
import { H1 } from '@/components/Typography';
import Section from '@/components/Section';

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
        <Section id="program">
          <H1>{program.title}</H1>
          <RichText text={program.text} />
          {program.donationRequests &&
            program.donationRequests.map((d) => (
              <DonationRequestBlock key={d.slug.current} {...d} />
            ))}
        </Section>
        <Section id="other-programs">
          <OtherProgramsBlock title="Other Programs" besides={params.slug} />
        </Section>
      </main>
    </>
  );
}
