import React from 'react';
import Link from 'next/link';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';
import { isFullyQualifiedURL } from '@/utils/globals';

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
    },
    block: {
      h1: ({ children }: { children: React.ReactNode }) => (
        <h1 className="text-xl uppercase mb-2">{children}</h1>
      ),
      h2: ({ children }: { children: React.ReactNode }) => (
        <h2 className="text-lg mb-2">{children}</h2>
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
  };

  return <PortableText value={text} components={components as any} />;
};

export default RichText;
