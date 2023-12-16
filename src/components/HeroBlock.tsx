import React from 'react';
import { HeroBlockConfig } from '@/types/HeroBlockConfig';
import Block from '@/components/Block';
import ResponsiveImage from '@/components/ResponsiveImage';
import LinkButton from '@/components/LinkButton';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

export default function HeroBlock({
  slug,
  background,
  text,
  image,
  buttonLabel,
  buttonLink,
}: HeroBlockConfig) {
  return (
    <Block slug={slug.current} color={background.label}>
      <div
        className={
          'grid grid-flow-row lg:grid-flow-col lg:auto-cols-fr gap-16 max-w-2xl lg:max-w-full mx-auto'
        }
      >
        <div className={'max-w-lg lg:max-w-full'}>
          <PortableText
            value={text}
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
                  strong: ({ children }) => (
                    <strong className="font-semibold">{children}</strong>
                  ),
                  textColor: ({ children, value }) => (
                    <span style={{ color: value.value }}>{children}</span>
                  ),
                },
                block: {
                  h1: ({ children }: { children: React.ReactNode }) => (
                    <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold tracking-tight mb-8 [text-wrap:balance]">
                      {children}
                    </h1>
                  ),
                  normal: ({ children }: { children: React.ReactNode }) => (
                    <p className="text-lg leading-relaxed text-gray-500">
                      {children}
                    </p>
                  ),
                },
              } as any
            }
          />
          {buttonLabel && buttonLink && (
            <LinkButton
              className={'mt-8'}
              href={buttonLink}
              color={'pink'}
              variant={'solid'}
              size={'large'}
              icon={'down'}
            >
              {buttonLabel}
            </LinkButton>
          )}
        </div>
        <div className={'max-w-lg lg:max-w-full'}>
          <ResponsiveImage
            image={image}
            priority={true}
            sizes={`100vw`}
            className={'rounded-2xl'}
          />
        </div>
      </div>
    </Block>
  );
}
