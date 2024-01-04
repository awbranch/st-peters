import React from 'react';
import { HeroBlock as Props } from '@/types/HeroBlock';
import ResponsiveImage from '@/components/ResponsiveImage';
import LinkButton from '@/components/LinkButton';
import { PortableText } from '@portabletext/react';
import { Link, Strong, Subtitle, Title } from '@/components/Typography';

export default function HeroBlock({ id, text, image, buttons }: Props) {
  return (
    <div
      id={id?.current}
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
                strong: ({ children }) => <Strong>{children}</Strong>,
                textColor: ({ children, value }) => (
                  <span style={{ color: value.value }}>{children}</span>
                ),
              },
              block: {
                h1: ({ children }: { children: React.ReactNode }) => (
                  <Title>{children}</Title>
                ),
                normal: ({ children }: { children: React.ReactNode }) => (
                  <Subtitle>{children}</Subtitle>
                ),
              },
            } as any
          }
        />
        {buttons && (
          <div className={'mt-8 flex flex-row gap-4'}>
            {buttons.map((b) => (
              <LinkButton
                key={b.label}
                href={b.link}
                color={b.color.label}
                size={'large'}
                variant={b.variant}
                icon={b.icon}
              >
                {b.label}
              </LinkButton>
            ))}
          </div>
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
  );
}
