import React from 'react';
import Link from 'next/link';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';
import { isFullyQualifiedURL } from '@/utils/globals';
import { Image } from '@/types/Image';
import ResponsiveImage from '@/components/ResponsiveImage';

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
      }) => (
        <Link
          href={value.href}
          className={'underline underline-offset-4'}
          {...(isFullyQualifiedURL(value.href)
            ? { target: '_blank', rel: 'noreferrer noopener' }
            : {})}
        >
          {children}
        </Link>
      ),
      em: ({ children }) => <em>{children}</em>,
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
      textColor: ({ children, value }) => (
        <span style={{ color: value.value }}>{children}</span>
      ),
    },
    block: {
      h1: ({ children }: { children: React.ReactNode }) => (
        <h1 className="text-2xl font-semibold py-2">{children}</h1>
      ),
      h2: ({ children }: { children: React.ReactNode }) => (
        <h2 className="text-xl font-semibold py-2">{children}</h2>
      ),
      h6: ({ children }: { children: React.ReactNode }) => (
        <div className="text-sm">{children}</div>
      ),
      normal: ({ children }: { children: React.ReactNode }) => (
        <p className="text-base mb-2">{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-black border-l-4 pl-1">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc mt-2 mb-3 ml-2">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal mt-2 mb-3 ml-2">{children}</ol>
      ),
    },
    types: {
      image: ({ value }: { value: Image }) => {
        return (
          <ResponsiveImage
            className="mb-4 w-full"
            image={value}
            sizes={'100vw'}
          />
        );
      },
    },
  };

  return <PortableText value={text} components={components as any} />;
};

export default RichText;
