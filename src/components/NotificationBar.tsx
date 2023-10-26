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
      <Container className="text-white px-2 md:px-4 py-0.5 flex flex-row justify-center gap-1">
        <div className="mt-[3px] md:mt-[5px]">
          <FontAwesomeIcon
            className={'w-[18px] md:w-[22px]'}
            icon={faMegaphone}
          />
        </div>

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
