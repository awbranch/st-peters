import React from 'react';
import Block from '@/components/Block';
import { getStaffMembers } from '@/sanity/sanity-utils';
import TeamMemberCard from '@/components/TeamMemberCard';

export default async function Staff() {
  let team = await getStaffMembers();
  return (
    <main>
      <Block color={'white'}>
        <h1 className="text-xl mb-4">Our Staff</h1>
        {team.map((m, i) => (
          <div key={i} className={'mb-8'}>
            <TeamMemberCard member={m} />
          </div>
        ))}
      </Block>
    </main>
  );
}
