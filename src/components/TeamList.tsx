import { TeamList as Props } from '@/types/TeamList';
import React from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialIcons } from '@/utils/globals';
import { twJoin } from 'tailwind-merge';
import { userPaletteClasses } from '@/utils/utils';

export default async function TeamList({ members, palette }: Props) {
  return (
    <ul
      role="list"
      className={twJoin(
        'space-y-12 divide-y',
        userPaletteClasses[palette].divide,
      )}
    >
      {members.map((member) => (
        <li
          key={member._key}
          className="flex flex-col gap-10 pt-12 md:flex-row"
        >
          <ResponsiveImage
            image={member.image}
            className={'aspect-square w-64 h-fit flex-none rounded-2xl'}
            sizes={'100vw'}
          />
          <div className="flex-auto">
            <h3 className="text-xl font-semibold tracking-tight">
              {member.name}
            </h3>
            <p className="text-sm font-light leading-normal">{member.title}</p>
            <p className="mt-2 text-sm font-light leading-relaxed">
              {member.bio}
            </p>
            <ul role="list" className="mt-4 flex gap-x-6">
              {[
                { type: 'email', url: member.email },
                { type: 'twitter', url: member.twitterUrl },
                { type: 'linkedin', url: member.linkedInUrl },
              ].map(
                (social) =>
                  social.url && (
                    <li key={social.type}>
                      <Link
                        href={social.url}
                        className={'opacity-90 hover:opacity-50'}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span className="sr-only">{social.type}</span>
                        <FontAwesomeIcon
                          className={'h-[20px] mx-auto mb-1'}
                          icon={socialIcons[social.type]}
                        />
                      </Link>
                    </li>
                  ),
              )}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
