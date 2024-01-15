import React from 'react';
import { Block as BlockConfig } from '@/types/Block';
import HeroBlock from '@/components/HeroBlock';
import LunchBlock from '@/components/LunchBlock';
import HighlightBlock from '@/components/HighlightBlock';
import ImpactBlock from '@/components/ImpactBlock';
import TextBlock from '@/components/TextBlock';
import GoogleMapBlock from '@/components/GoogleMapBlock';
import JobsBlock from '@/components/JobsBlock';
import DocumentsBlock from '@/components/DocumentsBlock';
import FAQsBlock from '@/components/FAQsBlock';
import FormBlock from '@/components/FormBlock';
import DonationRequestBlock from '@/components/DonationRequestBlock';
import ButtonTileGridBlock from '@/components/ButtonTileGridBlock';
import ImageTileGridBlock from '@/components/ImageTileGridBlock';
import TeamGridBlock from '@/components/TeamGridBlock';
import TeamListBlock from '@/components/TeamListBlock';
import ReferenceBlock from '@/components/ReferenceBlock';

type Props = {
  block: BlockConfig;
};

export default function Block({ block }: Props) {
  switch (block._type) {
    case 'heroBlock':
      return <HeroBlock key={block._key} {...block} />;

    case 'lunchBlock':
      return <LunchBlock key={block._key} {...block} />;

    case 'highlightBlock':
      return <HighlightBlock key={block._key} {...block} />;

    case 'impactBlock':
      return <ImpactBlock key={block._key} {...block} />;

    case 'textBlock':
      return <TextBlock key={block._key} {...block} />;

    case 'googleMapBlock':
      return <GoogleMapBlock key={block._key} {...block} />;

    case 'teamListBlock':
      return <TeamListBlock key={block._key} {...block} />;

    case 'teamGridBlock':
      return <TeamGridBlock key={block._key} {...block} />;

    case 'jobsBlock':
      return <JobsBlock key={block._key} {...block} />;

    case 'docsBlock':
      return <DocumentsBlock key={block._key} {...block} />;

    case 'faqsBlock':
      return <FAQsBlock key={block._key} {...block} />;

    case 'formBlock':
      return <FormBlock key={block._key} {...block} />;

    case 'donationRequestBlock':
      return <DonationRequestBlock key={block._key} {...block} />;

    case 'buttonTileGridBlock':
      return <ButtonTileGridBlock key={block._key} {...block} />;

    case 'imageTileGridBlock':
      return <ImageTileGridBlock key={block._key} {...block} />;

    case 'referenceBlock':
      return <ReferenceBlock key={block._key} {...block} />;

    default:
      return (
        <div key={block._key} className={'bg-red-700 text-white p-10'}>
          <h1 className={'text-3xl text-center font-semibold'}>
            Unknown Block: {block._type}
          </h1>
        </div>
      );
  }
}
