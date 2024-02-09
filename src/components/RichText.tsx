import React from 'react';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';
import { Image } from '@/types/Image';
import ResponsiveImage from '@/components/ResponsiveImage';
import ButtonRow from '@/components/ButtonRow';
import { ButtonRow as ButtonRowType } from '@/types/ButtonRow';
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
      em: ({ children }) => <Em>{children}</Em>,
      strong: ({ children }) => <Strong>{children}</Strong>,
      accent: ({ children }) => (
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
      subtitle: ({ children }) => <Subtitle>{children}</Subtitle>,
      small: ({ children }) => <Small>{children}</Small>,
      blockquote: ({ children }) => <BlockQuote>{children}</BlockQuote>,
      ...(overrides?.block ? overrides.block : {}),
    },
    list: {
      bullet: ({ children }) => <UL>{children}</UL>,
      number: ({ children }) => <OL>{children}</OL>,
      ...(overrides?.list ? overrides.list : {}),
    },
    types: {
      image: ({ value }: { value: Image }) => {
        return (
          <ResponsiveImage
            className="my-12 w-full rounded-2xl"
            image={value}
            sizes={'100vw'}
          />
        );
      },
      buttonRow: ({ value }: { value: ButtonRowType }) => {
        return <ButtonRow {...value} palette={palette} />;
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
