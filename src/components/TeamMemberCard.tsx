import React from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import { TeamMember } from '@/types/TeamMember';
import SimpleText from '@/components/SimpleText';
import LinkButton from '@/components/LinkButton';

interface Props {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: Props) {
  return (
    <div className="flex flex-row gap-3">
      <div className="min-w-[250px]">
        <ResponsiveImage
          image={member.image}
          sizes={'100vw'}
          className={'object-cover w-[250px] h-[250px]'}
        />
      </div>
      <div>
        <h2 className="text-lg">{`${member.firstName} ${member.lastName}`}</h2>
        {member.title && <div className="text-sm">{member.title}</div>}
        <div className="mt-2">
          <SimpleText text={member.bio} />
        </div>
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
  );
}
