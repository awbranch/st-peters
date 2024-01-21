import React from 'react';
import { HeroBlock as Props } from '@/types/HeroBlock';
import ResponsiveImage from '@/components/ResponsiveImage';
import { LinkButton } from '@/components/Button';
import { Subtitle, Title } from '@/components/Typography';
import RichText from '@/components/RichText';

export default function HeroBlock({ text, image, buttons }: Props) {
  return (
    <div
      className={
        'grid grid-flow-row lg:grid-flow-col lg:auto-cols-fr gap-16 max-w-2xl lg:max-w-full mx-auto'
      }
    >
      <div className={'max-w-lg lg:max-w-full'}>
        <RichText
          text={text}
          overrides={{
            block: {
              h1: ({ children }: { children: React.ReactNode }) => (
                <Title>{children}</Title>
              ),
              normal: ({ children }: { children: React.ReactNode }) => (
                <Subtitle>{children}</Subtitle>
              ),
            },
          }}
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
