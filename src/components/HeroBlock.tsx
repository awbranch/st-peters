import React from 'react';
import { Hero } from '@/types/Hero';
import { Color } from '@/types/Color';
import Block from '@/components/Block';
import ResponsiveImage from '@/components/ResponsiveImage';
import LinkButton from '@/components/LinkButton';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

type Props = {
  color: Color;
  hero: Hero;
};

export default function HeroBlock({ color, hero }: Props) {
  return (
    <Block color={color}>
      <div
        className={
          'grid grid-flow-row lg:grid-flow-col lg:auto-cols-fr gap-16 lg:gap-8 max-w-2xl lg:max-w-full mx-auto'
        }
      >
        <div className={'max-w-lg lg:max-w-full'}>
          <PortableText
            value={hero.text}
            components={
              {
                marks: {
                  link: ({
                    children,
                    value,
                  }: {
                    children: React.ReactNode;
                    value: any;
                  }) => <Link href={value.href}>{children}</Link>,
                  em: ({ children }) => (
                    <span className={'text-sunset'}>{children}</span>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold">{children}</strong>
                  ),
                },
                block: {
                  h1: ({ children }: { children: React.ReactNode }) => (
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 [text-wrap:balance]">
                      {children}
                    </h1>
                  ),
                  normal: ({ children }: { children: React.ReactNode }) => (
                    <p className="text-base leading-relaxed text-gray-500">
                      {children}
                    </p>
                  ),
                },
              } as any
            }
          />
          {hero.buttonLabel && hero.buttonLink && (
            <LinkButton
              className={'mt-8'}
              href={hero.buttonLink}
              color={'pink'}
              variant={'solid'}
              size={'large'}
              icon={'down'}
            >
              {hero.buttonLabel}
            </LinkButton>
          )}
        </div>
        <div className={'max-w-lg lg:max-w-full'}>
          <ResponsiveImage
            image={hero.image}
            priority={true}
            sizes={`100vw`}
            className={'rounded-2xl'}
          />
        </div>
      </div>
    </Block>
  );
}
