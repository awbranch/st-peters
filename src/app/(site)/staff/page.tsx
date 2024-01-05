import React from 'react';
import { getStaffMembers } from '@/sanity/sanity-utils';
import TeamMemberCard from '@/components/TeamMemberCard';
import Section from '@/components/Section';

export default async function Staff() {
  let team = await getStaffMembers();
  return (
    <main>
      <Section>
        {team.map((m, i) => (
          <div key={i} className={'mb-8'}>
            <TeamMemberCard member={m} />
          </div>
        ))}
      </Section>
    </main>
  );
}
