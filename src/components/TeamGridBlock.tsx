import { TeamGridBlock as Props } from '@/types/TeamGridBlock';
import React from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialIcons } from '@/utils/globals';
import Link from 'next/link';
import BlockTitle from '@/components/BlockTitle';

export default async function TeamGridBlock({ title, text, members }: Props) {
  return (
    <div>
      <BlockTitle title={title} text={text} />

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
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {member.name}
            </h3>
            {member.title && (
              <p className="text-base leading-7 text-gray-600">
                {member.title}
              </p>
            )}
            <ul role="list" className="mt-2 flex gap-x-6">
              {[
                { type: 'twitter', url: member.twitterUrl },
                { type: 'linkedin', url: member.linkedInUrl },
              ].map(
                (social) =>
                  social.url && (
                    <li key={social.type}>
                      <Link
                        href={social.url}
                        className={'text-gray-400 hover:text-gray-500'}
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
    </div>
  );
}
