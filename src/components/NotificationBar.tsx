import React from 'react';
import Container from '@/components/Container';
import Link from 'next/link';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMegaphone } from '@fortawesome/pro-solid-svg-icons';

type Props = {
  message: PortableTextBlock[];
};

export default function NotificationBar({ message }: Props) {
  return (
    <div className="bg-black">
      <Container className="flex text-white gap-1 justify-center items-center h-5">
        <FontAwesomeIcon className={'w-[22px]'} icon={faMegaphone} />
        <RichText message={message} />
      </Container>
    </div>
  );
}

const RichText = ({ message }: Props) => {
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
          className={'hover:underline hover:underline-offset-4'}
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
      normal: ({ children }: { children: React.ReactNode }) => (
        <p className="text-base">{children}</p>
      ),
    },
  };

  return <PortableText value={message} components={components as any} />;
};
