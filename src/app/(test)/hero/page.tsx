import Block from '@/components/Block';
import LinkButton from '@/components/LinkButton';
import ResponsiveImage from '@/components/ResponsiveImage';
import { Image } from '@/types/Image';

const heroImage: Image = {
  crop: {
    top: 0,
    left: 0.04154302670623146,
    bottom: 0.24020178041542983,
    _type: 'sanity.imageCrop',
    right: 0,
  },
  hotspot: {
    y: 0.37377151335311576,
    height: 0.7230326409495553,
    _type: 'sanity.imageHotspot',
    width: 0.9584569732937686,
    x: 0.5207715133531158,
  },
  _type: 'image',
  alt: "Two St. Peter's Kitchen customers at a table with their arms around each other.",
  asset: {
    _type: 'reference',
    _ref: 'image-d2c2833cc5abb56cb61f010eaef724177bced72f-1766x2137-jpg',
  },
};

export default function Example() {
  return (
    <Block color={'white'}>
      <div
        className={
          'grid grid-flow-row lg:grid-flow-col lg:auto-cols-fr gap-16 lg:gap-8 max-w-2xl lg:max-w-full mx-auto'
        }
      >
        <div className={'max-w-lg lg:max-w-full'}>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            <div>Nourishment.</div>
            <div>Community.</div>
            <div className={'text-sunset'}>Hope.</div>
          </h1>
          <div className={'mt-8 text-lg leading-8 text-gray-500'}>
            At St. Peter’s Kitchen, we are a community-centered environment
            geared towards sharing hope and fighting hunger in downtown
            Rochester, New York.
          </div>
          <LinkButton
            className={'mt-8'}
            href={'#'}
            color={'pink'}
            variant={'solid'}
            size={'large'}
            icon={'down'}
          >
            Learn More
          </LinkButton>
        </div>
        <div className={'max-w-lg lg:max-w-full'}>
          <ResponsiveImage
            image={heroImage}
            priority={true}
            sizes={`100vw`}
            className={'rounded-2xl'}
          />
        </div>
      </div>
    </Block>
  );
}
