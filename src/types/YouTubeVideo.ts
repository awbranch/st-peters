import { ComponentProps } from '@/types/Component';

export type YouTubeVideo = ComponentProps & {
  _type: 'youTubeVideo';
  videoId: string;
  width: number;
  height: number;
};
