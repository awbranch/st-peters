import React from 'react';
import { Component as ComponentType } from '@/types/Component';
import Hero from '@/components/Hero';
import LunchMenuList from '@/components/LunchMenuList';
import ImpactList from '@/components/ImpactList';
import TitleText from '@/components/TitleText';
import JobList from '@/components/JobList';
import DocumentList from '@/components/DocumentList';
import FAQList from '@/components/FAQList';
import ButtonTileGrid from '@/components/ButtonTileGrid';
import ImageTileGrid from '@/components/ImageTileGrid';
import TeamGrid from '@/components/TeamGrid';
import TeamList from '@/components/TeamList';
import ComponentSetReference from '@/components/ComponentSetReference';
import ListSet from '@/components/ListSet';
import CallToAction from '@/components/CallToAction';
import CallToActionList from '@/components/CallToActionList';
import IFrame from '@/components/IFrame';
import IconList from '@/components/IconList';
import ContactForm from '@/components/ContactForm';
import VolunteerForm from '@/components/VolunteerForm';
import Article from '@/components/Article';
import ButtonRow from '@/components/ButtonRow';
import YouTubeVideo from '@/components/YouTubeVideo';

type ComponentListProps = {
  components: ComponentType[];
};

export default function ComponentList({ components }: ComponentListProps) {
  return (
    <div className={'space-y-12'}>
      {components.map((c) => (
        <Component key={c._key} component={c} />
      ))}
    </div>
  );
}

type ComponentProps = {
  component: ComponentType;
};

function Component({ component }: ComponentProps) {
  switch (component._type) {
    case 'article':
      return <Article {...component} />;

    case 'buttonTileGrid':
      return <ButtonTileGrid {...component} />;

    case 'buttonRow':
      return <ButtonRow {...component} />;

    case 'callToAction':
      return <CallToAction {...component} />;

    case 'callToActionList':
      return <CallToActionList {...component} />;

    case 'documentList':
      return <DocumentList {...component} />;

    case 'faqList':
      return <FAQList {...component} />;

    case 'contactForm':
      return <ContactForm {...component} />;

    case 'hero':
      return <Hero {...component} />;

    case 'iconList':
      return <IconList {...component} />;

    case 'iframe':
      return <IFrame {...component} />;

    case 'imageTileGrid':
      return <ImageTileGrid {...component} />;

    case 'impactList':
      return <ImpactList {...component} />;

    case 'jobList':
      return <JobList {...component} />;

    case 'listSet':
      return <ListSet {...component} />;

    case 'lunchMenuList':
      return <LunchMenuList {...component} />;

    case 'componentSetReference':
      return <ComponentSetReference {...component} />;

    case 'teamGrid':
      return <TeamGrid {...component} />;

    case 'teamList':
      return <TeamList {...component} />;

    case 'titleText':
      return <TitleText {...component} />;

    case 'volunteerForm':
      return <VolunteerForm {...component} />;

    case 'youTubeVideo':
      return <YouTubeVideo {...component} />;

    default:
      return (
        <div className={'bg-red-700 text-white p-10'}>
          <h1 className={'text-3xl text-center font-semibold'}>
            Unknown Component: {component['_type']}
          </h1>
        </div>
      );
  }
}
