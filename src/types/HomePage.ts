import { Hero } from '@/types/Hero';
import { LunchPlan } from '@/types/LunchPlan';
import { Highlight } from '@/types/Highlight';
import { ImpactStatement } from '@/types/ImpactStatement';
import { ProgramGrid } from '@/types/ProgramGrid';
import { InstagramFeed } from '@/types/InstagramFeed';

export type HomePage = {
  _id: string;
  hero: Hero;
  lunchPlan: LunchPlan;
  displayHighlight1: boolean;
  highlight1: Highlight;
  impact: ImpactStatement;
  programs: ProgramGrid;
  highlight2: Highlight;
  displayInstagram: boolean;
  instagram: InstagramFeed;
};
