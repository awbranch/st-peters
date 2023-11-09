import React from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import { TeamMember } from '@/types/TeamMember';
import SimpleText from '@/components/SimpleText';
import LinkButton from '@/components/LinkButton';

type Props = {
  member: TeamMember;
};

export default function TeamMemberCard({ member }: Props) {
  return (
    <div className="flex flex-col items-center gap-1 md:flex-row md:items-start md:gap-3">
      <div className="min-w-[250px]">
        <ResponsiveImage
          image={member.image}
          sizes={`250px`}
          className={'object-cover w-[250px] h-[250px]'}
        />
      </div>
      <div className={'mb-4'}>
        <div className={'text-center md:text-left'}>
          <h2 className="text-lg">{`${member.firstName} ${member.lastName}`}</h2>
          {member.title && <div className="text-sm">{member.title}</div>}
        </div>
        <div className="mt-2">
          <SimpleText text={member.bio} />
        </div>
        <div className={'text-center md:text-left'}>
          {member.email && (
            <LinkButton
              href={'/contact'}
              color={'blue'}
              variant={'outline'}
              size={'small'}
              icon={'right'}
            >
              Contact
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );
}
