import React from 'react';
import { Block as BlockConfig } from '@/types/Block';
import HeroBlock from '@/components/HeroBlock';
import LunchBlock from '@/components/LunchBlock';
import HighlightBlock from '@/components/HighlightBlock';
import ImpactBlock from '@/components/ImpactBlock';
import TextBlock from '@/components/TextBlock';
import GoogleMapBlock from '@/components/GoogleMapBlock';
import TeamBlock from '@/components/TeamBlock';
import JobsBlock from '@/components/JobsBlock';
import DocumentsBlock from '@/components/DocumentsBlock';
import FAQsBlock from '@/components/FAQsBlock';
import FormBlock from '@/components/FormBlock';
import DonationRequestBlock from '@/components/DonationRequestBlock';
import ButtonTileGridBlock from '@/components/ButtonTileGridBlock';
import ImageTileGridBlock from '@/components/ImageTileGridBlock';

type Props = {
  blocks: BlockConfig[];
};

export default function BlockList({ blocks }: Props) {
  return (
    <div className={'space-y-8'}>
      {blocks.map((config) =>
        config._type === 'heroBlock' ? (
          <HeroBlock key={config._key} {...config} />
        ) : config._type === 'lunchBlock' ? (
          <LunchBlock key={config._key} {...config} />
        ) : config._type === 'highlightBlock' ? (
          <HighlightBlock key={config._key} {...config} />
        ) : config._type === 'impactBlock' ? (
          <ImpactBlock key={config._key} {...config} />
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
        ) : config._type === 'faqsBlock' ? (
          <FAQsBlock key={config._key} {...config} />
        ) : config._type === 'formBlock' ? (
          <FormBlock key={config._key} {...config} />
        ) : config._type === 'donationRequestBlock' ? (
          <DonationRequestBlock key={config._key} {...config} />
        ) : config._type === 'buttonTileGridBlock' ? (
          <ButtonTileGridBlock key={config._key} {...config} />
        ) : config._type === 'imageTileGridBlock' ? (
          <ImageTileGridBlock key={config._key} {...config} />
        ) : (
          <div key={config._key} className={'bg-red-700 text-white p-10'}>
            <h1 className={'text-3xl text-center font-semibold'}>
              Unknown Block: {config._type}
            </h1>
          </div>
        ),
      )}
    </div>
  );
}
