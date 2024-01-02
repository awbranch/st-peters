import React from 'react';
import Block from '@/components/Block';
import { getPageByPath, getStaffMembers } from '@/sanity/sanity-utils';
import TeamMemberCard from '@/components/TeamMemberCard';
import RichText from '@/components/RichText';

export default async function Staff() {
  const page = await getPageByPath(['staff']);
  let team = await getStaffMembers();
  return (
    <main>
      <Block color={'white'}>
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
      </Block>
    </main>
  );
}
