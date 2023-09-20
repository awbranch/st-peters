import { Hero } from '@/types/Hero';
import { Highlight } from '@/types/Highlight';
import { InstagramFeed } from '@/types/InstagramFeed';
import { PortableTextBlock } from 'sanity';
import { Impact } from '@/types/Impact';

export type HomePage = {
  hero: Hero;

  lunchTitle: string;
  lunchText: PortableTextBlock[];
  lunchTbd: string;

  displayHighlight1: boolean;
  highlight1: Highlight;

  impactTitle: string;
  impactText: PortableTextBlock[];
  impacts: Impact[];

  programsTitle: string;
  programsText: PortableTextBlock[];

  displayHighlight2: boolean;
  highlight2: Highlight;
  displayInstagram: boolean;
  instagram: InstagramFeed;
};
