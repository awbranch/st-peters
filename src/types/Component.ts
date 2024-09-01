import { Article } from '@/types/Article';
import { ButtonRow } from '@/types/ButtonRow';
import { ButtonTileGrid } from '@/types/ButtonTileGrid';
import { CallToAction } from '@/types/CallToAction';
import { CallToActionList } from '@/types/CallToActionList';
import { ComponentSetReference } from '@/types/ComponentSetReference';
import { ContactForm } from '@/types/ContactForm';
import { DocumentList } from '@/types/DocumentList';
import { FAQList } from '@/types/FAQList';
import { Hero } from '@/types/Hero';
import { IconList } from '@/types/IconList';
import { IFrame } from '@/types/IFrame';
import { ImageGallery } from '@/types/ImageGallery';
import { ImageTileGrid } from '@/types/ImageTileGrid';
import { ImpactList } from '@/types/ImpactList';
import { JobList } from '@/types/JobList';
import { ListSet } from '@/types/ListSet';
import { LogoGrid } from '@/types/LogoGrid';
import { LunchMenuList } from '@/types/LunchMenuList';
import { Palette } from '@/types/Palette';
import { Script } from '@/types/Script';
import { TeamGrid } from '@/types/TeamGrid';
import { TeamList } from '@/types/TeamList';
import { TitleText } from '@/types/TitleText';
import { VolunteerForm } from '@/types/VolunteerForm';
import { YouTubeVideo } from '@/types/YouTubeVideo';

export type Component =
  | Article
  | ButtonRow
  | ButtonTileGrid
  | CallToAction
  | CallToActionList
  | ComponentSetReference
  | ContactForm
  | DocumentList
  | FAQList
  | Hero
  | IconList
  | IFrame
  | ImageGallery
  | ImageTileGrid
  | ImpactList
  | JobList
  | ListSet
  | LogoGrid
  | LunchMenuList
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
