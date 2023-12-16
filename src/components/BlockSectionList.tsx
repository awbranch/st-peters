import React from 'react';
import { BlockConfig } from '@/types/BlockConfig';
import HeroBlock from '@/components/HeroBlock';
import LunchBlock from '@/components/LunchBlock';
import HighlightBlock from '@/components/HighlightBlock';
import ImpactBlock from '@/components/ImpactBlock';
import ProgramsBlock from '@/components/ProgramsBlock';
import TextBlock from '@/components/TextBlock';
import Block from '@/components/Block';
import GoogleMapBlock from '@/components/GoogleMapBlock';
import TeamBlock from '@/components/TeamBlock';
import JobsBlock from '@/components/JobsBlock';
import DocumentsBlock from '@/components/DocumentsBlock';

type Props = {
  blocks: BlockConfig[];
};

export default function BlockSectionList({ blocks }: Props) {
  return blocks.map((config) =>
    config._type === 'heroBlock' ? (
      <HeroBlock key={config._key} {...config} />
    ) : config._type === 'lunchBlock' ? (
      <LunchBlock key={config._key} {...config} />
    ) : config._type === 'highlightBlock' ? (
      <HighlightBlock key={config._key} {...config} />
    ) : config._type === 'impactBlock' ? (
      <ImpactBlock key={config._key} {...config} />
    ) : config._type === 'programsBlock' ? (
      <ProgramsBlock key={config._key} {...config} />
    ) : config._type === 'textBlock' ? (
      <TextBlock key={config._key} {...config} />
    ) : config._type === 'googleMapBlock' ? (
      <GoogleMapBlock key={config._key} {...config} />
    ) : config._type === 'teamBlock' ? (
      <TeamBlock key={config._key} {...config} />
    ) : config._type === 'jobsBlock' ? (
      <JobsBlock key={config._key} {...config} />
    ) : config._type === 'docsBlock' ? (
      <DocumentsBlock key={config._key} {...config} />
    ) : (
      <Block key={config._key} color={'blue'}>
        <h1 className={'text-3xl text-center font-semibold'}>
          Unknown Block: {config._type}
        </h1>
      </Block>
    ),
  );
}