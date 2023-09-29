import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { PortableTextBlock } from 'sanity';
import VolunteerForm from '@/components/VolunteerForm';

type Props = {
  title: string;
  text: PortableTextBlock[];
};

export default function VolunteerFormBlock({ title, text }: Props) {
  return (
    <Block color={'pink'}>
      <h1 className="text-xl uppercase mb-3">{title}</h1>
      <RichText text={text} />
      <VolunteerForm />
    </Block>
  );
}
