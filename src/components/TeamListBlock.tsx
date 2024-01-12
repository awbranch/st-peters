import { TeamListBlock as Props } from '@/types/TeamListBlock';
import React from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialIcons } from '@/utils/globals';
import { H1 } from '@/components/Typography';
import RichText from '@/components/RichText';

export default async function TeamListBlock({
  id,
  title,
  text,
  members,
}: Props) {
  return (
    <div id={id?.current}>
      {(title || text) && (
        <div className="mx-auto max-w-4xl text-center mb-12">
          {title && <H1>{title}</H1>}
          {text && <RichText variant={'title'} text={text} />}
        </div>
      )}

      <ul role="list" className="space-y-12 divide-y divide-gray-200">
        {members.map((member) => (
          <li
            key={member._key}
            className="flex flex-col gap-10 pt-12 md:flex-row"
          >
            <ResponsiveImage
              image={member.image}
              className={'aspect-square w-64 h-fit flex-none rounded-2xl '}
              sizes={'100vw'}
            />
            <div className="flex-auto">
              <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm leading-7 text-gray-600">{member.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
