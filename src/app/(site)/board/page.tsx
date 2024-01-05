import { getBoardMembers } from '@/sanity/sanity-utils';
import TeamMemberCard from '@/components/TeamMemberCard';
import { TeamMember } from '@/types/TeamMember';
import React from 'react';
import Section from '@/components/Section';

const TitleRank = {
  President: 1,
  'Vice President': 2,
  Treasurer: 3,
  Secretary: 4,
  Other: 5,
  None: 6,
};

const getTitleRank = (m: TeamMember) => {
  return m.title
    ? TitleRank[m.title]
      ? TitleRank[m.title]
      : TitleRank['Other']
    : TitleRank['None'];
};

export default async function Board() {
  const team = await getBoardMembers();

  team.sort((a, b) => {
    let order = getTitleRank(a) - getTitleRank(b);
    if (order === 0) {
      order = a.lastName.localeCompare(b.lastName);
      if (order === 0) {
        order = a.firstName.localeCompare(b.firstName);
      }
    }
    return order;
  });

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
