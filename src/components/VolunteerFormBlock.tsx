import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import VolunteerForm from '@/components/VolunteerForm';
import { VolunteerFormBlock } from '@/types/VolunteerFormBlock';

export default function VolunteerFormBlock({
  slug,
  background,
  narrow,
  text,
}: VolunteerFormBlock) {
  return (
    <Block slug={slug.current} color={background?.label} narrow={narrow}>
      <RichText text={text} />
      <VolunteerForm />
    </Block>
  );
}
