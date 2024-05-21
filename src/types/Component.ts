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
import { ListSet } from '@/types/ListSet';
import { LunchMenuList } from '@/types/LunchMenuList';
import { ComponentSetReference } from '@/types/ComponentSetReference';
import { Script } from '@/types/Script';
import { TeamGrid } from '@/types/TeamGrid';
import { TeamList } from '@/types/TeamList';
import { TitleText } from '@/types/TitleText';
import { VolunteerForm } from '@/types/VolunteerForm';
import { ButtonRow } from '@/types/ButtonRow';
import { Palette } from '@/types/Palette';
import { YouTubeVideo } from '@/types/YouTubeVideo';
import { ImageGallery } from '@/types/ImageGallery';

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
  | ImageGallery
  | ImpactList
  | JobList
  | ListSet
  | LunchMenuList
  | ComponentSetReference
  | Script
  | TeamGrid
  | TeamList
  | TitleText
  | VolunteerForm
  | YouTubeVideo;

export type ComponentProps = {
  _key: string;
  blockId?: string;
  palette: Palette;
};
