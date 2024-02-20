import { YouTubeVideo as Props } from '@/types/YouTubeVideo';

export default function YouTubeVideo({ videoId, width, height }: Props) {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        paddingBottom: `${(height / width) * 100}%`,
        height: 0,
      }}
    >
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
