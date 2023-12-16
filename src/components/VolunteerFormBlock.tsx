import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import VolunteerForm from '@/components/VolunteerForm';
import NarrowContainer from '@/components/NarrowContainer';
import { VolunteerFormBlockConfig } from '@/types/VolunteerFormBlockConfig';

export default function VolunteerFormBlock({
  slug,
  background,
  text,
}: VolunteerFormBlockConfig) {
  return (
    <Block slug={slug.current} color={background.label}>
      <NarrowContainer>
        <RichText text={text} />
        <VolunteerForm />
      </NarrowContainer>
    </Block>
  );
}
