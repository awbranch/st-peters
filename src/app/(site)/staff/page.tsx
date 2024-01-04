import React from 'react';
import { getPageByPath, getStaffMembers } from '@/sanity/sanity-utils';
import TeamMemberCard from '@/components/TeamMemberCard';
import RichText from '@/components/RichText';
import Section from '@/components/Section';

export default async function Staff() {
  const page = await getPageByPath(['staff']);
  let team = await getStaffMembers();
  return (
    <main>
      <Section>
        {page.text && (
          <div className={'mb-8'}>
            <RichText text={page.text} />
          </div>
        )}
        {team.map((m, i) => (
          <div key={i} className={'mb-8'}>
            <TeamMemberCard member={m} />
          </div>
        ))}
      </Section>
    </main>
  );
}
