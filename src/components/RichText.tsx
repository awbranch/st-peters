import React from 'react';
import Link from 'next/link';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';

interface Props {
  document: PortableTextBlock[];
}

const RichText = ({ document }: Props) => {
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
          className={'text-blue underline underline-offset-4'}
        >
          {children}
        </Link>
      ),
    },
    block: {
      h1: ({ children }: { children: React.ReactNode }) => (
        <h1 className="text-xl uppercase mb-2">{children}</h1>
      ),
      h2: ({ children }: { children: React.ReactNode }) => (
        <h2 className="text-lg mb-2">{children}</h2>
      ),
      // TODO: Add: Quote, Bulleted List, Numbered List, Bold, Italic
      normal: ({ children }: { children: React.ReactNode }) => (
        <p className="text-base mb-2">{children}</p>
      ),
    },
  };

  return <PortableText value={document} components={components as any} />;
};

export default RichText;
