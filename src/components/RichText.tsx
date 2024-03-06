import React from 'react';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';
import ResponsiveImage from '@/components/ResponsiveImage';
import ButtonRow from '@/components/ButtonRow';
import { ButtonRow as ButtonRowType } from '@/types/ButtonRow';
import YouTubeVideo from '@/components/YouTubeVideo';
import { YouTubeVideo as YouTubeVideoType } from '@/types/YouTubeVideo';
import {
  BlockQuote,
  Em,
  H1,
  H2,
  Link,
  OL,
  Para,
  Small,
  Strong,
  Subtitle,
  UL,
} from '@/components/Typography';
import { Bookmark } from '@/types/Bookmark';
import { Palette } from '@/types/Palette';
import { twJoin } from 'tailwind-merge';

import { userPaletteClasses } from '@/utils/globals';
import { CaptionedImage } from '@/types/CaptionedImage';

type Override = {
  [V in 'marks' | 'block' | 'list' | 'types']?: {
    [key: string]: ({
      children,
    }: {
      children: React.ReactNode;
    }) => React.JSX.Element;
  };
};

type Props = {
  text: PortableTextBlock[];
  palette?: Palette;
  overrides?: Override;
};

const RichText = ({ text, overrides, palette = 'white' }: Props) => {
  const components = {
    marks: {
      link: ({
        children,
        value,
      }: {
        children: React.ReactNode;
        value: any;
      }) => <Link href={value.href}>{children}</Link>,
      em: ({ children }: { children: React.ReactNode }) => <Em>{children}</Em>,
      strong: ({ children }: { children: React.ReactNode }) => (
        <Strong>{children}</Strong>
      ),
      accent: ({ children }: { children: React.ReactNode }) => (
        <span className={twJoin(userPaletteClasses[palette].accent)}>
          {children}
        </span>
      ),
      ...(overrides?.marks ? overrides.marks : {}),
    },
    block: {
      h1: ({ children }: { children: React.ReactNode }) => <H1>{children}</H1>,
      h2: ({ children }: { children: React.ReactNode }) => <H2>{children}</H2>,
      normal: ({ children }: { children: React.ReactNode }) => (
        <Para>{children}</Para>
      ),
      subtitle: ({ children }: { children: React.ReactNode }) => (
        <Subtitle>{children}</Subtitle>
      ),
      small: ({ children }: { children: React.ReactNode }) => (
        <Small>{children}</Small>
      ),
      blockquote: ({ children }: { children: React.ReactNode }) => (
        <BlockQuote>{children}</BlockQuote>
      ),
      ...(overrides?.block ? overrides.block : {}),
    },
    list: {
      bullet: ({ children }: { children: React.ReactNode }) => (
        <UL>{children}</UL>
      ),
      number: ({ children }: { children: React.ReactNode }) => (
        <OL>{children}</OL>
      ),
      ...(overrides?.list ? overrides.list : {}),
    },
    types: {
      image: ({ value }: { value: CaptionedImage }) => {
        return (
          <figure className={'my-12 w-full'}>
            <ResponsiveImage
              className="w-full rounded-2xl"
              image={value}
              sizes={'100vw'}
            />
            {value.caption && (
              <figcaption
                className={
                  'hidden xs:block text-xs text-center font-medium mt-2 opacity-40'
                }
              >
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },
      buttonRow: ({ value }: { value: ButtonRowType }) => {
        return <ButtonRow {...value} palette={palette} />;
      },
      youTubeVideo: ({ value }: { value: YouTubeVideoType }) => {
        return <YouTubeVideo {...value} />;
      },
      bookmark: ({ value }: { value: Bookmark }) => {
        return <div id={value.id?.current} />;
      },
      ...(overrides?.types ? overrides.types : {}),
    },
  };

  return (
    <div className={'margins-y-0'}>
      <PortableText value={text} components={components as any} />
    </div>
  );
};

export default RichText;
