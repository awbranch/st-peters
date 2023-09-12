import React from 'react';
import Block from '@/components/Block';
import { Team } from '@/types/Team';
import RichText from '@/components/RichText';
import Link from 'next/link';
import ResponsiveImage from '@/components/ResponsiveImage';
interface Props {
  team: Team;
}

export default function TeamBlock({ team }: Props) {
  return (
    <Block color="white">
      <h1 className="text-xl mb-3">{team.title}</h1>
      <RichText document={team.text} />

      <div className="grid grid-cols-2 gap-4 mt-4">
        {[
          { photo: team.staffPhoto, label: team.staffLabel, slug: 'staff' },
          { photo: team.boardPhoto, label: team.boardLabel, slug: 'board' },
        ].map((g) => (
          <div key={g.slug}>
            <div className="h-[360px]">
              <Link href={`/program/${g.slug}`} title={g.label}>
                <ResponsiveImage
                  image={g.photo}
                  priority={false}
                  sizes={'50vw'}
                  className={'object-cover w-full h-[360px] mx-auto'}
                />
              </Link>
            </div>
            <h2 className="text-lg mt-1 text-center">{g.label}</h2>
          </div>
        ))}
      </div>
      <div className="h-24" />
    </Block>
  );
}
