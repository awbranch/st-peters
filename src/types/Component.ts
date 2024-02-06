import { Article } from '@/types/Article';
import { ButtonTileGrid } from '@/types/ButtonTileGrid';
import { CallToAction } from '@/types/CallToAction';
import { CallToActionList } from '@/types/CallToActionList';
import { ContactForm } from '@/types/ContactForm';
import { DocumentList } from '@/types/DocumentList';
import { FAQList } from '@/types/FAQList';
import { Hero } from '@/types/Hero';
import { IconList } from '@/types/IconList';
import { IFrame } from '@/types/IFrame';
import { ImageTileGrid } from '@/types/ImageTileGrid';
import { ImpactList } from '@/types/ImpactList';
import { JobList } from '@/types/JobList';
import { LabeledColor } from '@/types/Color';
import { ListSet } from '@/types/ListSet';
import { LunchMenuList } from '@/types/LunchMenuList';
import { ComponentSetReference } from '@/types/ComponentSetReference';
import { TeamGrid } from '@/types/TeamGrid';
import { TeamList } from '@/types/TeamList';
import { TitleText } from '@/types/TitleText';
import { VolunteerForm } from '@/types/VolunteerForm';
import { ButtonRow } from '@/types/ButtonRow';

export type Component =
  | Article
  | ButtonRow
  | ButtonTileGrid
  | CallToAction
  | CallToActionList
  | ContactForm
  | DocumentList
  | FAQList
  | Hero
  | IconList
  | IFrame
  | ImageTileGrid
  | ImpactList
  | JobList
  | ListSet
  | LunchMenuList
  | ComponentSetReference
  | TeamGrid
  | TeamList
  | TitleText
  | VolunteerForm;

export type ComponentProps = {
  _key: string;
  background?: LabeledColor;
};
