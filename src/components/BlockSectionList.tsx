import React from 'react';
import { BlockConfig } from '@/types/BlockConfig';
import HeroBlock from '@/components/HeroBlock';
import LunchBlock from '@/components/LunchBlock';
import HighlightBlock from '@/components/HighlightBlock';
import ImpactBlock from '@/components/ImpactBlock';
import ProgramsBlock from '@/components/ProgramsBlock';

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
      <HighlightBlock key={config._key} {...config}></HighlightBlock>
    ) : config._type === 'impactBlock' ? (
      <ImpactBlock key={config._key} {...config}></ImpactBlock>
    ) : config._type === 'programsBlock' ? (
      <ProgramsBlock key={config._key} {...config}></ProgramsBlock>
    ) : (
      <div key={config._key}>other</div>
    ),
  );
}
