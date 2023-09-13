import React from 'react';
import Block from '@/components/Block';
import { FaArrowLeft } from 'react-icons/fa6';
import Link from 'next/link';
import { getBoardMembers } from '@/sanity/sanity-utils';
import TeamMemberCard from '@/components/TeamMemberCard';
import { TeamMember } from '@/types/TeamMember';

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

export default async function Staff() {
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
      <Block color={'white'}>
        <div className="inline-flex gap-1 items-center">
          <FaArrowLeft className="inline-block" />
          <Link
            href={'/about#team'}
            className={
              'text-base font-bold hover:underline hover:underline-offset-4'
            }
          >
            ABOUT
          </Link>
        </div>
        <h1 className="text-xl uppercase mb-4">Our Board</h1>
        {team.map((m, i) => (
          <TeamMemberCard member={m} key={i} />
        ))}
      </Block>
    </main>
  );
}
