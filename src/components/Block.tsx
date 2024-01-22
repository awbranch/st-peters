import React from 'react';
import { Block as BlockConfig } from '@/types/Block';
import HeroBlock from '@/components/HeroBlock';
import LunchBlock from '@/components/LunchBlock';
import ImpactBlock from '@/components/ImpactBlock';
import TextBlock from '@/components/TextBlock';
import JobsBlock from '@/components/JobsBlock';
import DocumentsBlock from '@/components/DocumentsBlock';
import FAQsBlock from '@/components/FAQsBlock';
import ButtonTileGridBlock from '@/components/ButtonTileGridBlock';
import ImageTileGridBlock from '@/components/ImageTileGridBlock';
import TeamGridBlock from '@/components/TeamGridBlock';
import TeamListBlock from '@/components/TeamListBlock';
import ReferenceBlock from '@/components/ReferenceBlock';
import ListSetBlock from '@/components/ListSetBlock';
import CallToActionBlock from '@/components/CallToActionBlock';
import CallToActionListBlock from '@/components/CallToActionListBlock';
import IframeBlock from '@/components/IframeBlock';
import IconListBlock from '@/components/IconListBlock';
import ContactFormBlock from '@/components/ContactFormBlock';
import VolunteerFormBlock from '@/components/VolunteerFormBlock';
import ArticleBlock from '@/components/ArticleBlock';

type Props = {
  block: BlockConfig;
};

export default function Block({ block }: Props) {
  switch (block._type) {
    case 'articleBlock':
      return <ArticleBlock {...block} />;

    case 'buttonTileGridBlock':
      return <ButtonTileGridBlock {...block} />;

    case 'ctaBlock':
      return <CallToActionBlock {...block} />;

    case 'ctaListBlock':
      return <CallToActionListBlock {...block} />;

    case 'docsBlock':
      return <DocumentsBlock {...block} />;

    case 'faqsBlock':
      return <FAQsBlock {...block} />;

    case 'contactFormBlock':
      return <ContactFormBlock {...block} />;

    case 'heroBlock':
      return <HeroBlock {...block} />;

    case 'iconListBlock':
      return <IconListBlock {...block} />;

    case 'iframeBlock':
      return <IframeBlock {...block} />;

    case 'imageTileGridBlock':
      return <ImageTileGridBlock {...block} />;

    case 'impactBlock':
      return <ImpactBlock {...block} />;

    case 'jobsBlock':
      return <JobsBlock {...block} />;

    case 'listSetBlock':
      return <ListSetBlock {...block} />;

    case 'lunchBlock':
      return <LunchBlock {...block} />;

    case 'referenceBlock':
      return <ReferenceBlock {...block} />;

    case 'teamGridBlock':
      return <TeamGridBlock {...block} />;

    case 'teamListBlock':
      return <TeamListBlock {...block} />;

    case 'textBlock':
      return <TextBlock {...block} />;

    case 'volunteerFormBlock':
      return <VolunteerFormBlock {...block} />;

    default:
      return (
        <div className={'bg-red-700 text-white p-10'}>
          <h1 className={'text-3xl text-center font-semibold'}>
            Unknown Block: {block._type}
          </h1>
        </div>
      );
  }
}
