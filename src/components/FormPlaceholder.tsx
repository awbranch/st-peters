import { twJoin } from 'tailwind-merge';
import { Para } from '@/components/Typography';
import { Palette } from '@/types/Palette';

type Props = {
  palette: Palette;
};

export function FormPlaceholder({ palette }: Props) {
  return (
    <div
      className={twJoin(
        'h-72 flex justify-center items-center rounded-md',
        palette === 'white' && 'bg-gray-100',
        palette === 'highlight' && 'bg-white/10',
        palette === 'gray' && 'bg-white',
        palette === 'black' && 'bg-white/10',
      )}
    >
      <Para>Loading</Para>
    </div>
  );
}
