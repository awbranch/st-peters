import React from 'react';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';
import { Image } from '@/types/Image';
import ResponsiveImage from '@/components/ResponsiveImage';
import ButtonRow from '@/components/ButtonRow';
import { ButtonRow as ButtonRowConfig } from '@/types/ButtonRow';
import { NewspaperText as NewspaperTextConfig } from '@/types/NewspaperText';
import {
  BlockQuote,
  Em,
  H1,
  H2,
  Link,
  OL,
  Para,
  Strong,
  UL,
} from '@/components/Typography';
import NewspaperText from '@/components/NewspaperText';

type Props = {
  text: PortableTextBlock[];
};

const RichText = ({ text }: Props) => {
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
      h1: ({ children }: { children: React.ReactNode }) => <H1>{children}</H1>,
      h2: ({ children }: { children: React.ReactNode }) => <H2>{children}</H2>,
      normal: ({ children }: { children: React.ReactNode }) => (
        <Para>{children}</Para>
      ),
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
            className="mb-4 my-12 w-full"
            image={value}
            sizes={'100vw'}
          />
        );
      },
      buttonRow: ({ value }: { value: ButtonRowConfig }) => {
        return <ButtonRow {...value} />;
      },
      newspaperText: ({ value }: { value: NewspaperTextConfig }) => {
        return <NewspaperText {...value} />;
      },
    },
  };

  return <PortableText value={text} components={components as any} />;
};

export default RichText;
