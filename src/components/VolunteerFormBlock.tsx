import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { PortableTextBlock } from 'sanity';
import VolunteerForm from '@/components/VolunteerForm';
import NarrowContainer from '@/components/NarrowContainer';

type Props = {
  title: string;
  text: PortableTextBlock[];
};

export default function VolunteerFormBlock({ title, text }: Props) {
  return (
    <Block color={'pink'}>
      <NarrowContainer>
        <h1 className="text-xl mb-3">{title}</h1>
        <RichText text={text} />
        <VolunteerForm />
      </NarrowContainer>
    </Block>
  );
}
