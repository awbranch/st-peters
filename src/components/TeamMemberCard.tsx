import React from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import { TeamMember } from '@/types/TeamMember';
import Para from '@/components/Para';
import Button from '@/components/Button';

interface Props {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: Props) {
  return (
    <div className="flex flex-row gap-3 mb-8">
      <div className="min-w-[250px]">
        <ResponsiveImage
          image={member.image}
          priority={true}
          sizes={'100vw'}
          className={'object-cover w-[250px] h-[250px]'}
        />
      </div>
      <div>
        <h2 className="text-lg">{`${member.firstName} ${member.lastName}`}</h2>
        {member.title && <div className="text-sm">{member.title}</div>}
        <div className="mt-2">
          {member.bio.split(/\n+/).map((mi, i) => (
            <Para key={i}>{mi}</Para>
          ))}
        </div>
        {member.email && (
          <Button
            color={'blue'}
            variant={'outline'}
            size={'small'}
            icon={'right'}
          >
            Contact
          </Button>
        )}
      </div>
    </div>
  );
}
