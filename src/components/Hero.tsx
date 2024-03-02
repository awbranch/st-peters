import React from 'react';
import { Hero as Props } from '@/types/Hero';
import ResponsiveImage from '@/components/ResponsiveImage';
import { LinkButton } from '@/components/Button';
import { Subtitle, Title } from '@/components/Typography';
import RichText from '@/components/RichText';

import { userPaletteButtonProps } from '@/utils/globals';

export default function Hero({ text, image, buttons, palette }: Props) {
  return (
    <div
      className={
        'grid grid-flow-row lg:grid-flow-col lg:auto-cols-fr gap-16 max-w-2xl lg:max-w-full mx-auto'
      }
    >
      <div className={'max-w-lg lg:max-w-full'}>
        <RichText
          text={text}
          palette={palette}
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
                key={b._key}
                href={b.link}
                size={'large'}
                icon={b.icon}
                {...userPaletteButtonProps[palette][b.style]}
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
