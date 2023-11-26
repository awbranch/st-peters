import React from 'react';
import Block from '@/components/Block';
import { getStaffMembers } from '@/sanity/sanity-utils';
import TeamMemberCard from '@/components/TeamMemberCard';
import LinkButton from '@/components/LinkButton';

export default async function Staff() {
  let team = await getStaffMembers();
  return (
    <main>
      <Block color={'white'}>
        <LinkButton
          href="/about#team"
          size={'small'}
          icon={'left'}
          variant={'text'}
        >
          ABOUT
        </LinkButton>
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
