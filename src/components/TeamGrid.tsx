import { TeamGrid as Props } from '@/types/TeamGrid';
import React from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialIcons } from '@/utils/globals';
import Link from 'next/link';
import { twJoin } from 'tailwind-merge';
import { SocialMediaService } from '@/types/SocialMediaService';

type SocialUrlArray = Array<{ type: SocialMediaService; url: string }>;

export default async function TeamGrid({ members }: Props) {
  return (
    <ul
      role="list"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      {members.map((member) => (
        <li key={member._key}>
          <ResponsiveImage
            image={member.image}
            className={'aspect-square rounded-2xl'}
            sizes={'100vw'}
          />
          <h3 className={twJoin('mt-6 text-xl font-semibold tracking-tight')}>
            {member.name}
          </h3>
          {member.title && (
            <p className="mt-2 text-sm font-light leading-normal">
              {member.title}
            </p>
          )}
          <ul role="list" className="mt-3 flex gap-x-6">
            {(
              [
                { type: 'twitter', url: member.twitterUrl },
                { type: 'linkedin', url: member.linkedInUrl },
              ] as SocialUrlArray
            ).map(
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
        </li>
      ))}
    </ul>
  );
}
