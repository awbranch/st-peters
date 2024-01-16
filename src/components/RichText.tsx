import React from 'react';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';
import { Image } from '@/types/Image';
import ResponsiveImage from '@/components/ResponsiveImage';
import ButtonRow from '@/components/ButtonRow';
import { ButtonRow as ButtonRowConfig } from '@/types/ButtonRow';
import {
  BlockQuote,
  Em,
  H1,
  H2,
  Large,
  Link,
  OL,
  Para,
  Strong,
  Subtitle,
  Title,
  UL,
} from '@/components/Typography';

type Props = {
  variant?: 'blog' | 'title' | 'hero';
  text: PortableTextBlock[];
};

const RichText = ({ variant = 'blog', text }: Props) => {
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
      textColor: ({ children, value }) => (
        <span style={{ color: value.value }}>{children}</span>
      ),
    },
    block: {
      h1: ({ children }: { children: React.ReactNode }) =>
        variant == 'hero' ? <Title>{children}</Title> : <H1>{children}</H1>,
      h2: ({ children }: { children: React.ReactNode }) => <H2>{children}</H2>,
      normal: ({ children }: { children: React.ReactNode }) =>
        variant === 'blog' ? (
          <Para>{children}</Para>
        ) : (
          <Subtitle>{children}</Subtitle>
        ),
      large: ({ children }) => <Large>{children}</Large>,
      blockquote: ({ children }) => <BlockQuote>{children}</BlockQuote>,
    },
    list: {
      bullet: ({ children }) => <UL>{children}</UL>,
      number: ({ children }) => <OL>{children}</OL>,
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
      buttonRow: ({ value }: { value: ButtonRowConfig }) => {
        return <ButtonRow {...value} />;
      },
    },
  };

  return (
    <div className={'margins-y-0'}>
      <PortableText value={text} components={components as any} />
    </div>
  );
};

export default RichText;
