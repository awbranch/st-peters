import { H1, Para } from '@/components/Typography';

export default function Example() {
  return (
    <div className={'space-y-96'}>
      {['max-w-3xl', 'max-w-4xl', 'max-w-5xl', 'max-w-6xl', 'max-w-7xl'].map(
        (w) => (
          <div key={w} className={'bg-sunset text-white'}>
            <div className={w}>
              <H1 className={'text-5xl'}>{w}</H1>
              <Para>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Para>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
