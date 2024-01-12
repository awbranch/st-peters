import React from 'react';
import { ButtonTileGridBlock as Props } from '@/types/ButtonTileGridBlock';
import { H1 } from '@/components/Typography';
import RichText from '@/components/RichText';
import Link from 'next/link';
import { urlFor } from '@/sanity/sanity-utils';

export default async function ButtonTileGridBlock({
  id,
  title,
  text,
  buttons,
}: Props) {
  return (
    <div id={id?.current}>
      {(title || text) && (
        <div className="mx-auto max-w-4xl text-center mb-12">
          {title && <H1>{title}</H1>}
          {text && <RichText variant={'title'} text={text} />}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
        {buttons.map((button, i) => (
          <Link
            key={i}
            className={
              'block bg-white p-6  sm:p-8 rounded-xl ease-in-out duration-200 hover:scale-105'
            }
            href={button.url}
            title={title}
          >
            <div className={'flex flex-row sm:flex-col gap-6 sm:gap-2'}>
              <img
                alt={button.icon.alt}
                src={urlFor(button.icon).url()}
                className={'h-10 w-10 text-sunset sm:mx-auto mb-1'}
              />
              <div className={'text-left sm:text-center'}>
                <h2
                  className={
                    'text-sunset text-xl tracking-tight font-medium mb-2'
                  }
                >
                  {button.title}
                </h2>
                <div className={'text-black text-base'}>{button.text}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
